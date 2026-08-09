const requiredFields = ["name", "company", "email", "phone", "productType", "quantity"] as const;

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    if (body.website) return Response.json({ ok: true });
    for (const field of requiredFields) {
      if (typeof body[field] !== "string" || !body[field]?.toString().trim()) {
        return Response.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email))) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
    if (!webhookUrl) {
      if (process.env.NODE_ENV === "production") {
        return Response.json({ error: "The inquiry endpoint is awaiting final deployment configuration. Please use WhatsApp for now." }, { status: 503 });
      }
      return Response.json({ ok: true, preview: true });
    }
    const payload = { ...body, source: "cixi-linhao-website", submittedAt: new Date().toISOString() };
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(process.env.INQUIRY_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}` } : {}) },
      body: JSON.stringify(payload),
    });
    if (!webhookResponse.ok) return Response.json({ error: "The inquiry service is temporarily unavailable. Please contact us on WhatsApp." }, { status: 502 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Invalid inquiry data." }, { status: 400 });
  }
}

