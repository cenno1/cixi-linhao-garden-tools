const encoder = new TextEncoder();
const allowedTypes = new Set(["image/png", "image/jpeg", "image/webp", "application/pdf"]);

function hex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function utf8(value: string): ArrayBuffer {
  return Uint8Array.from(encoder.encode(value)).buffer;
}

async function sha256(value: string) {
  return hex(await crypto.subtle.digest("SHA-256", utf8(value)));
}

async function hmac(key: ArrayBuffer, value: string) {
  const cryptoKey = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return crypto.subtle.sign("HMAC", cryptoKey, utf8(value));
}

function encodeRfc3986(value: string) {
  return encodeURIComponent(value).replace(/[!'()*]/g, (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`);
}

export async function POST(request: Request) {
  try {
    const { name, type, size } = await request.json() as { name?: string; type?: string; size?: number };
    if (!name || !type || !size || !allowedTypes.has(type) || size > 10 * 1024 * 1024) {
      return Response.json({ error: "Unsupported file. Use PNG, JPG, WEBP or PDF up to 10 MB." }, { status: 400 });
    }
    const accountId = process.env.R2_ACCOUNT_ID;
    const bucket = process.env.R2_BUCKET_NAME;
    const accessKeyId = process.env.R2_ACCESS_KEY_ID;
    const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
    if (!accountId || !bucket || !accessKeyId || !secretAccessKey) {
      return Response.json({ error: "R2 is not configured." }, { status: 503 });
    }
    const now = new Date();
    const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
    const dateStamp = amzDate.slice(0, 8);
    const safeName = name.normalize("NFKD").replace(/[^a-zA-Z0-9._-]+/g, "-").slice(-80);
    const objectKey = `inquiries/${dateStamp.slice(0, 6)}/${crypto.randomUUID()}-${safeName}`;
    const host = `${accountId}.r2.cloudflarestorage.com`;
    const canonicalUri = `/${encodeRfc3986(bucket)}/${objectKey.split("/").map(encodeRfc3986).join("/")}`;
    const scope = `${dateStamp}/auto/s3/aws4_request`;
    const query: Record<string, string> = {
      "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
      "X-Amz-Credential": `${accessKeyId}/${scope}`,
      "X-Amz-Date": amzDate,
      "X-Amz-Expires": "600",
      "X-Amz-SignedHeaders": "host",
    };
    const canonicalQuery = Object.entries(query).sort(([a], [b]) => a.localeCompare(b)).map(([key, value]) => `${encodeRfc3986(key)}=${encodeRfc3986(value)}`).join("&");
    const canonicalRequest = ["PUT", canonicalUri, canonicalQuery, `host:${host}\n`, "host", "UNSIGNED-PAYLOAD"].join("\n");
    const stringToSign = ["AWS4-HMAC-SHA256", amzDate, scope, await sha256(canonicalRequest)].join("\n");
    const dateKey = await hmac(utf8(`AWS4${secretAccessKey}`), dateStamp);
    const regionKey = await hmac(dateKey, "auto");
    const serviceKey = await hmac(regionKey, "s3");
    const signingKey = await hmac(serviceKey, "aws4_request");
    const signature = hex(await hmac(signingKey, stringToSign));
    return Response.json({ uploadUrl: `https://${host}${canonicalUri}?${canonicalQuery}&X-Amz-Signature=${signature}`, objectKey });
  } catch {
    return Response.json({ error: "Could not prepare the attachment upload." }, { status: 400 });
  }
}
