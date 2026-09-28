import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const rows = JSON.parse(readFileSync(join(root, "app/data/catalog-2026.json"), "utf8"));

test("the scoped catalogue has unique LH codes and source images", () => {
  assert.equal(rows.length, 110);
  assert.equal(new Set(rows.map((row) => row.code)).size, rows.length);
  assert.equal(rows.filter((row) => row.material === "Brass").length, 84);
  assert.equal(rows.filter((row) => row.material === "Aluminum").length, 26);
  for (const row of rows) {
    assert.match(row.code, /^LH-[A-Z0-9]+$/);
    assert.ok(["Brass", "Aluminum"].includes(row.material));
    assert.ok(row.page >= 7 && row.page <= 21);
    assert.ok(existsSync(join(root, "public/images/products/catalog-2026", `${row.code.toLowerCase()}.webp`)), row.code);
  }
});

test("buyer-sensitive source distinctions are preserved", () => {
  const model = (code) => rows.find((row) => row.code === code);
  assert.match(model("LH-3642").detail, /double female/i);
  assert.equal(model("LH-3208").material, "Aluminum");
  assert.equal(model("LH-3635").material, "Brass");
  assert.equal(model("LH-3672A").family, "Two-Way Splitters");
  assert.match(model("LH-3902").thread, /NH male.*NPT male/i);
  assert.equal(model("LH-3101").thread, "");
});
