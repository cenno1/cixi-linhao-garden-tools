# Deployment handoff

## Target architecture

Namecheap remains the domain registrar. GitHub stores the source repository. Vercel builds and serves the Next.js website and API routes. Cloudflare R2 stores private inquiry attachments and can optionally serve product images through a public asset domain.

Recommended flow:

`Namecheap registrar -> Cloudflare DNS -> Vercel website`

`Vercel inquiry API -> short-lived signed PUT URL -> private Cloudflare R2 bucket`

## 1. Prepare the repository

1. Create a private or public GitHub repository.
2. Upload the contents of this project, keeping `.env.local` and all credentials out of Git.
3. Confirm the default branch is `main`.

## 2. Create the R2 bucket

1. In Cloudflare, create a private bucket named `cixi-linhao-inquiries`.
2. Create an R2 API token limited to Object Read & Write for this bucket.
3. Keep the Account ID, Access Key ID and Secret Access Key for Vercel environment variables.
4. Apply the CORS policy from `cloudflare-r2-cors.json` after replacing the placeholder domains.
5. Keep attachment uploads private. The form uses a signed URL valid for 10 minutes and accepts PNG, JPG, WEBP and PDF files up to 10 MB.

Optional product-image CDN:

1. Create a separate public bucket for approved product assets.
2. Connect a domain such as `assets.yourdomain.com` in Cloudflare.
3. Copy the files from `public/images/products/` to a `products/` folder in that bucket.
4. Set `NEXT_PUBLIC_R2_PUBLIC_BASE_URL=https://assets.yourdomain.com/products` only if the files are placed directly at that URL. Otherwise leave it blank and use the bundled images.

## 3. Configure inquiry delivery

The website posts validated inquiry JSON to `INQUIRY_WEBHOOK_URL`. Connect this to a CRM, Make, Zapier, n8n or a small mail service that sends the lead to the sales team.

The payload includes name, company, email, WhatsApp / phone, product category, estimated quantity, requirements, attachment object key, source and submission time.

Use `INQUIRY_WEBHOOK_TOKEN` when the destination accepts a bearer token. Production submissions return an error rather than silently losing a lead when the webhook is missing.

## 4. Deploy on Vercel

1. Import the GitHub repository into Vercel.
2. Vercel should detect Next.js. The included `vercel.json` uses `npm install` and `npm run build`.
3. Add every value from `.env.example` in Vercel Project Settings -> Environment Variables.
4. Deploy and verify the homepage, product filter, contact form without a file, contact form with a file, mobile navigation and WhatsApp links.

Required production values:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_SALES_EMAIL`
- `R2_ACCOUNT_ID`
- `R2_BUCKET_NAME`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `INQUIRY_WEBHOOK_URL`

## 5. Connect the Namecheap domain

Recommended: keep registration at Namecheap and use Cloudflare nameservers so both the Vercel website and an optional R2 asset subdomain can be managed in one DNS zone.

1. Add the domain to Cloudflare and replace the Namecheap nameservers with the two assigned by Cloudflare.
2. Add the domain in Vercel Project Settings -> Domains.
3. Add the exact apex and `www` DNS records Vercel displays.
4. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS URL and redeploy.
5. Add the optional R2 custom domain only after the main website resolves correctly.

## 6. Pre-launch checklist

- Confirm WhatsApp `+86 150 8845 2259` and sales email `Info@lh-industrial.com` are current.
- Confirm product photos and descriptions are approved for use.
- Replace temporary catalogue product codes if your own SKU system is ready.
- Test the webhook and verify a real lead reaches the sales team.
- Upload a sample attachment and confirm the object appears in the private R2 bucket.
- Check the site on desktop and mobile.
- Add privacy and cookie text appropriate for the target markets before paid advertising.
