import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const source = readFileSync(new URL("../app/sitemap.ts", import.meta.url), "utf8");

test("sitemap modification dates reflect actual content revisions", () => {
  assert.doesNotMatch(source, /lastModified:\s*new Date\(\)/);
  assert.match(source, /productTemplateUpdatedAt = "2026-09-28"/);
  assert.match(source, /lastModified: post\.updatedAt \|\| post\.publishedAt/);
  assert.match(source, /latestDate\(product\.updatedAt, productTemplateUpdatedAt\)/);
});

test("sitemap includes the aluminum collection and excludes thin model and retired pages", () => {
  assert.match(source, /\/products\/materials\/aluminum/);
  assert.match(source, /brassProducts\.filter\(\(product\) => product\.indexable\)/);
  assert.match(source, /page\.slug !== "oem-garden-tools-supplier"/);
  assert.match(source, /post\.slug !== "how-to-specify-a-durable-hose-nozzle-range"/);
  assert.match(source, /brassProducts\.some\(\(product\) => product\.brassCategory === category\.category\)/);
});
