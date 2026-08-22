import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const productsSource = readFileSync(new URL("../app/data/products.ts", import.meta.url), "utf8");
const productPageSource = readFileSync(new URL("../app/products/[slug]/page.tsx", import.meta.url), "utf8");

test("hose reel brass swivel is listed with verified buyer-facing details", () => {
  assert.match(productsSource, /slug: "hose-reel-brass-swivel"/);
  assert.match(productsSource, /name: "Hose Reel Brass Swivel"/);
  assert.match(productsSource, /code: "LH-HRS Series"/);
  assert.match(productsSource, /updatedAt: "2026-08-22"/);
  assert.match(productsSource, /360° rotating swivel joint/);
  assert.match(productsSource, /Thread, seal and size confirmed before quotation/);
});

test("hose reel brass swivel uses two distinct local product images", () => {
  assert.match(productsSource, /hose-reel-brass-swivel\.png/);
  assert.match(productsSource, /hose-reel-brass-swivel-360-rotation\.png/);
  assert.ok(existsSync(new URL("../public/images/products/hose-reel-brass-swivel.png", import.meta.url)));
  assert.ok(existsSync(new URL("../public/images/products/hose-reel-brass-swivel-360-rotation.png", import.meta.url)));
});

test("product detail sharing metadata uses the product image", () => {
  assert.match(productPageSource, /twitter: \{ card: "summary_large_image", title: socialTitle, description, images: \[product\.image\] \}/);
});
