import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const productsSource = readFileSync(new URL("../app/data/products.ts", import.meta.url), "utf8");
const productPageSource = readFileSync(new URL("../app/products/[slug]/page.tsx", import.meta.url), "utf8");
const sitemapSource = readFileSync(new URL("../app/sitemap.ts", import.meta.url), "utf8");

test("product pages do not emit ineligible Product rich-result markup", () => {
  assert.doesNotMatch(productPageSource, /const productSchema/);
  assert.doesNotMatch(productPageSource, /JSON\.stringify\(productSchema\)/);
  assert.match(productPageSource, /JSON\.stringify\(breadcrumbSchema\)/);
});

test("global product copy stays application-neutral", () => {
  assert.doesNotMatch(productPageSource, /Confirm the reel-side thread, hose-side thread/);
  assert.match(productPageSource, /Share the intended application, mating components, target market/);
});

test("LH-3672A has catalogue-backed, buyer-specific content", () => {
  assert.match(productsSource, /product\.code === "LH-3672A"/);
  assert.match(productsSource, /updatedAt: "2026-08-30"/);
  assert.match(productsSource, /2-way splitter configuration/);
  assert.match(productsSource, /3\/4 in catalogue size/);
  assert.match(productsSource, /nominal size does not by itself confirm compatibility/i);
  assert.match(productsSource, /\/resources\/choosing-a-garden-hose-splitter/);
  assert.match(productPageSource, /product\.buyerGuide/);
});

test("sitemap reports real content and template updates", () => {
  assert.match(sitemapSource, /post\.updatedAt \|\| post\.publishedAt/);
  assert.match(sitemapSource, /productTemplateUpdatedAt = "2026-08-30"/);
  assert.match(sitemapSource, /latestDate\(product\.updatedAt, productTemplateUpdatedAt\)/);
});
