import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const categoryData = await readFile(new URL("../app/data/brass-seo-categories.ts", import.meta.url), "utf8");
const categoryPage = await readFile(new URL("../app/products/categories/[category]/page.tsx", import.meta.url), "utf8");

test("splitter category targets a distinct B2B purchasing intent", () => {
  assert.match(categoryData, /Brass Hose Splitter Manufacturer \| 2-Way & Multi-Way/);
  assert.match(categoryData, /import, distribution and private-label programs/);
  assert.match(categoryData, /1\/2 in and 3\/4 in GHT options, MOQ 500 pcs and samples available/);
});

test("splitter category links product configurations and buyer resources", () => {
  assert.match(categoryData, /\/products\/brass-two-way-splitter-3672a/);
  assert.match(categoryData, /\/products\/multi-way-hose-splitters/);
  assert.match(categoryData, /\/products\/brass-four-way-hose-splitters/);
  assert.match(categoryData, /\/resources\/choosing-a-garden-hose-splitter/);
  assert.match(categoryData, /\/resources\/garden-hose-splitter-leaking-diagnostic-guide/);
  assert.match(categoryPage, /config\.selectionGuide\.options\.map/);
  assert.match(categoryPage, /config\.relatedResources\.map/);
});

test("splitter category publishes visible FAQ and matching FAQ schema", () => {
  assert.match(categoryData, /Which GHT sizes are confirmed for the LH-3672A 2-way splitter/);
  assert.match(categoryPage, /config\.faqs\.map/);
  assert.match(categoryPage, /"@type": "FAQPage"/);
});

