import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const productsSource = await readFile(new URL("../app/data/products.ts", import.meta.url), "utf8");
const templateSource = await readFile(new URL("../app/products/[slug]/page.tsx", import.meta.url), "utf8");

test("LH-3672A exposes verified procurement facts and focused metadata", () => {
  assert.match(productsSource, /Brass 2-Way Hose Splitter Manufacturer \| LH-3672A/);
  assert.match(productsSource, /1\/2 in and 3\/4 in GHT/);
  assert.match(productsSource, /minimum order quantity is 500 pcs/);
  assert.match(productsSource, /samples are available/);
  assert.match(productsSource, /importers, distributors and private-label buyers/);
});

test("LH-3672A links buyers to its category, selection guide and leak guide", () => {
  assert.match(productsSource, /\/products\/categories\/brass-hose-splitters/);
  assert.match(productsSource, /\/resources\/choosing-a-garden-hose-splitter/);
  assert.match(productsSource, /\/resources\/garden-hose-splitter-leaking-diagnostic-guide/);
  assert.match(templateSource, /product\.buyerGuide\.relatedLinks\?\.map/);
});

test("product template renders product-specific procurement copy and FAQ schema", () => {
  assert.match(templateSource, /product\.procurementIntro \|\|/);
  assert.match(templateSource, /const faqs = product\.faqs \|\|/);
  assert.match(templateSource, /product\.seoDescription \|\|/);
  assert.match(templateSource, /product\.seoTitle \|\|/);
  assert.match(templateSource, /FAQPage/);
});

