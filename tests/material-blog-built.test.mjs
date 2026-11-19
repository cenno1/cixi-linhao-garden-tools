import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL("../.next/server/app/" + path, import.meta.url), "utf8");
const slug = "brass-aluminum-garden-hose-fittings-stuck";
const html = read("resources/" + slug + ".html");
test("material guide is discoverable and accurately structured", () => {
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
  assert.ok(html.includes('rel="canonical" href="https://linhaogarden.com/resources/' + slug + '"'));
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m => JSON.parse(m[1]));
  const article = schemas.find(s => s["@type"] === "Article");
  assert.equal(article.datePublished, "2026-11-19");
  assert.equal(article.mainEntityOfPage, "https://linhaogarden.com/resources/" + slug);
  for (const path of ["resources.html", "products/categories/brass-hose-adapters.html"]) {
    assert.ok(read(path).includes('href="/resources/' + slug + '"'));
  }
  assert.ok(html.includes('href="/products/categories/brass-hose-adapters"'));
  assert.match(html, /not laboratory results/);
  assert.match(html, /not recommend heating the assembly/);
  assert.match(html, /not as a claim that a LINHAO model has passed a corrosion test/);
  assert.match(html, /www.reddit.com/);
  assert.match(html, /www.canada.ca/);
  assert.match(html, /www.eleyhosereels.com/);
});
