import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const sitemapPath = new URL("../app/sitemap.ts", import.meta.url);

test("sitemap uses truthful, stable modification dates", async () => {
  const source = await readFile(sitemapPath, "utf8");

  assert.doesNotMatch(source, /lastModified:\s*new Date\(\)/);
  assert.match(source, /lastModified:\s*post\.publishedAt/);
  assert.match(source, /lastModified:\s*"2026-08-12"/);
  assert.match(source, /lastModified:\s*"2026-08-11"/);
});

test("sitemap keeps every public route collection and absolute site URLs", async () => {
  const source = await readFile(sitemapPath, "utf8");

  assert.match(source, /landingPages\.map/);
  assert.match(source, /blogPosts\.map/);
  assert.match(source, /products\.map/);
  assert.match(source, /url:\s*`\$\{siteUrl\}/);
  assert.match(source, /replace\(\/\\\/\$\//);
});

