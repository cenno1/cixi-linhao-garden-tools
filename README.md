# CIXI LINHAO B2B Website

A production-oriented B2B website for garden tools, watering products and OEM / ODM programs. The site is designed for product discovery, inquiry conversion and WhatsApp handoff. It intentionally has no prices, cart or checkout.

## Included

- GARDENA-inspired product-system homepage adapted for B2B buyers
- Product catalogue with category filters and RFQ links
- OEM / ODM, quality, buyer resources and contact pages
- Seven-field inquiry form with optional R2 attachment upload
- WhatsApp conversion links and floating contact button
- SEO, Open Graph metadata, mobile layout and accessibility states
- GitHub / Vercel / Cloudflare R2 / Namecheap deployment handoff

## Local setup

1. Copy `.env.example` to `.env.local` and replace the placeholder values.
2. Install dependencies with `npm install`.
3. Start the site with `npm run dev`.
4. Verify a production build with `npm run build`.

The inquiry endpoint requires `INQUIRY_WEBHOOK_URL` in production. Attachments require the four private R2 values and the bucket CORS rules in `cloudflare-r2-cors.json`.

## Content updates

- Product data: `app/data/products.ts`
- Product images: `public/images/products/`
- Brand logo: `public/images/cixi-linhao-logo.png`
- Main homepage: `app/page.tsx`
- Global design: `app/globals.css`

See `docs/DEPLOYMENT.md` for the complete deployment sequence.

