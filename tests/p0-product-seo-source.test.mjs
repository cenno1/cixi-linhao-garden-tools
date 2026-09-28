import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const source = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const productPage = source("../app/products/[slug]/page.tsx");
const products = source("../app/data/products.ts");

test("catalogue-only detail pages are browsable but not submitted for indexing", () => {
  assert.match(productPage, /robots: product\.indexable/);
  assert.match(productPage, /index: false, follow: true/);
  assert.match(productPage, /JSON\.stringify\(breadcrumbs\)/);
  assert.doesNotMatch(productPage, /"@type": "Product"/);
});

test("model copy separates catalogue facts from quote requirements", () => {
  assert.match(products, /threadSpecification: row\.thread/);
  assert.match(products, /Confirm the thread standard and mating components before ordering/);
  assert.match(productPage, /no value stated in the catalogue/);
  assert.match(productPage, /drawing and sample measurements/);
  assert.match(products, /row\.code === "LH-3642"/);
  assert.match(products, /Brass 2-Way Y Hose Splitter/);
});
