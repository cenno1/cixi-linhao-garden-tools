import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const blogsSource = readFileSync(new URL("../app/data/blogs.ts", import.meta.url), "utf8");
const productsSource = readFileSync(new URL("../app/data/products.ts", import.meta.url), "utf8");
const resourceSource = readFileSync(new URL("../app/resources/[slug]/page.tsx", import.meta.url), "utf8");

test("hose leak guide uses catalogue-backed models and explicit compatibility limits", () => {
  for (const code of ["LH-3601", "LH-3617", "LH-3619", "LH-3603", "LH-3604", "LH-3604Z", "LH-3638", "LH-3639", "LH-HRS Series"]) {
    assert.ok(productsSource.includes(code), `Missing catalogue product ${code}`);
  }
  for (const slug of ["brass-connector-set-3601", "brass-female-nipple-adapter-3617", "brass-female-nipple-adapter-3619", "brass-quick-connector-3603", "brass-quick-connector-3604", "brass-water-stop-connector-3604z", "brass-90-degree-elbow-3638", "brass-elbow-connector-3639", "hose-reel-brass-swivel"]) {
    assert.ok(blogsSource.includes(slug), `Missing guide product ${slug}`);
  }
  assert.match(blogsSource, /do not by themselves confirm compatibility/i);
  assert.match(blogsSource, /confirm the actual mating parts/i);
  assert.match(blogsSource, /\/solutions\/brass-hose-connectors-manufacturer/);
  assert.match(blogsSource, /updatedAt: "2026-08-26"/);
});

test("resource renderer exposes decision links and updated Article data", () => {
  assert.match(resourceSource, /Match the leak location to the connection job/);
  assert.match(resourceSource, /group\.products\.map/);
  assert.match(resourceSource, /dateModified: post\.updatedAt \?\? post\.publishedAt/);
  assert.match(resourceSource, /post\.commercialLink/);
});
