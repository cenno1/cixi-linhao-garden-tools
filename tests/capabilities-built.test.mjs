import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import test from "node:test";

const html = readFileSync(new URL("../.next/server/app/capabilities.html", import.meta.url), "utf8");

test("built capabilities page preserves canonical and crawlable buying journeys", () => {
  assert.match(html, /rel="canonical" href="https:\/\/linhaogarden.com\/capabilities"/);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
  assert.match(html, /id="project-process"/);
  assert.match(html, /id="custom-options"/);
  for (const family of ["brass-quick-connectors", "brass-hose-adapters", "brass-hose-couplings", "brass-elbow-fittings", "brass-hose-splitters", "hose-reel-brass-fittings"]) {
    assert.ok(html.includes(`href="/products/categories/${family}"`));
    assert.ok(existsSync(new URL(`../.next/server/app/products/categories/${family}.html`, import.meta.url)));
  }
  assert.match(html, /href="\/contact\?product=Custom%20Brass%20Fitting%20Drawing#quote-form"/);
});

test("procurement answers remain visible without invented universal terms", () => {
  const faq = html.match(/<div class="container product-faq">(.*?)<\/section>/s)?.[1];
  assert.ok(faq, "procurement FAQ section is present");
  assert.equal((faq.match(/<details[ >]/g) || []).length, 5);
  assert.match(html, /GHT and NPT are not directly interchangeable/);
  assert.match(html, /no blanket MOQ or delivery promise/);
  assert.match(html, /drawing revision/);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((match) => JSON.parse(match[1]));
  assert.ok(schemas.some((schema) => schema["@type"] === "BreadcrumbList"));
});
