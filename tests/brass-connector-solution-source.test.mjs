import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const dataUrl = new URL("../app/data/landing-pages.ts", import.meta.url);
const pageUrl = new URL("../app/solutions/[slug]/page.tsx", import.meta.url);

test("brass connector solution includes catalogue-backed buyer guidance", async () => {
  const [data, page] = await Promise.all([
    readFile(dataUrl, "utf8"),
    readFile(pageUrl, "utf8"),
  ]);

  for (const code of ["LH-3603", "LH-3604Z", "LH-3641", "LH-3652A", "LH-3638", "LH-HRS Series"]) {
    assert.match(data, new RegExp(code.replace(/[.*+?^$()|[\]\\]/g, "\\$&")));
  }

  assert.match(data, /exact thread form, brass grade, seal material and packaging/i);
  assert.match(data, /not a universal compatibility claim/i);
  assert.match(data, /\/resources\/why-garden-hose-connectors-leak/);
  assert.match(page, /Choose brass hose connectors by connection job/);
  assert.match(page, /Catalogue models:/);
  assert.match(page, /page\.resourceLink\.href/);
  assert.match(page, /\/products\/\$\{product\.slug\}/);
});
