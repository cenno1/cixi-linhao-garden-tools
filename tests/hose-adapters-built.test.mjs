import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const built = "../.next/server/app";
const html = read(built + "/products/categories/brass-hose-adapters.html");
const guide = "/resources/ght-to-npt-brass-adapter-3-4-1-inch-guide";
const catalogue = JSON.parse(read("../app/data/catalog-2026.json"));
const visible = html.split('<script>self.__next_f')[0];

test("both materials have separate tables, catalogue-accurate ends and model-specific enquiry links", () => {
  for (const material of ["Brass", "Aluminum"]) {
    const table = visible.split('aria-label="' + material + ' threaded adapter models">')[1].split("</table>")[0];
    const rows = catalogue.filter(p => p.family === "Threaded Adapters" && p.material === material);
    assert.equal((table.match(/scope="row"/g) || []).length, rows.length);
    for (const p of rows) {
      const row = table.split("</tr>").find(r => r.includes(">" + p.code + "</a>"));
      assert.ok(row);
      assert.ok(row.includes(encodeURIComponent(p.code + " — " + material + " hose adapter") + "#quote-form"));
      const productPath = row.match(/href="(\/products\/[^"]+)"/)[1];
      assert.ok(existsSync(new URL(built + productPath + ".html", import.meta.url)));
      if (p.thread) for (const end of p.thread.split(" × ")) assert.ok(row.includes(">" + end.replaceAll('"', "&quot;") + "<"));
      if (material === "Brass") assert.doesNotMatch(row, /\b(?:GHT|NH|NPT|NPS)\b/);
    }
  }
});

test("guide and category link both ways and unverified combination remains a custom enquiry", () => {
  assert.ok(visible.includes('href="' + guide + '"'));
  assert.ok(read(built + guide + ".html").includes('href="/products/categories/brass-hose-adapters"'));
  assert.match(visible, /not a listed brass stock item/);
  assert.match(visible, /rel="canonical" href="https:\/\/linhaogarden.com\/products\/categories\/brass-hose-adapters"/);
  assert.equal((visible.match(/<h1[ >]/g) || []).length, 1);
  assert.doesNotMatch(visible, /Specify and inspect the splitter/);
});
