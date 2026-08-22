import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("tracked WhatsApp links send the conversion event with their placement", async () => {
  const component = await source("app/components/TrackedWhatsAppLink.tsx");

  assert.match(component, /trackEvent\("whatsapp_click", \{ placement \}\)/);
  assert.match(component, /target="_blank"/);
  assert.match(component, /rel="noreferrer"/);
});

test("the primary contact CTA and floating CTA use distinct placements", async () => {
  const [contact, floating] = await Promise.all([
    source("app/contact/page.tsx"),
    source("app/components/WhatsAppFloat.tsx"),
  ]);

  assert.match(contact, /<TrackedWhatsAppLink[^>]+placement="contact_page_primary"/);
  assert.match(floating, /<TrackedWhatsAppLink[^>]+placement="floating_button"/);
});
