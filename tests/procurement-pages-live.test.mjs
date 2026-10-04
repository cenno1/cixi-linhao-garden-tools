import assert from "node:assert/strict";
import test from "node:test";

// Run against a production build: SITE_TEST_URL=http://localhost:3091 node --test ...
const base = process.env.SITE_TEST_URL || "http://localhost:3091";
const cases = [
  [3902, '1/2" NPT male'], [3903, '3/4" NPT male'],
  [3904, '1/2" NPS female'], [3905, '1/2" NPT female'], [3906, '3/4" NPT female'],
];
const htmlText = (html) => html.replaceAll("&quot;", '"').replaceAll("&#x27;", "'").replaceAll("&amp;", "&");
const load = async (path) => {
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200, path);
  assert.doesNotMatch(response.headers.get("x-robots-tag") || "", /noindex/i, path);
  return htmlText(await response.text());
};

test("approved adapter pages expose distinct connections, FAQs, canonical and quote links", async () => {
  for (const [model, pipeEnd] of cases) {
    const path = `/products/aluminum-hose-threaded-adapter-${model}`;
    const html = await load(path);
    assert.ok(html.includes(`<h1>Aluminum 3/4" NH Male to ${pipeEnd} Adapter</h1>`), path);
    assert.ok(html.includes(`<td>${pipeEnd}</td>`), path);
    assert.ok(html.includes(`<td>3/4" NH male</td>`), path);
    assert.match(html, /name="robots" content="index, follow"/);
    assert.ok(html.includes(`href="https://linhaogarden.com${path}"`), path);
    assert.ok(html.includes(`What are the two connections on LH-${model}?`), path);
    assert.match(html, /Does the NH description establish GHT compatibility/);
    assert.match(html, /\/contact\?product=/);
    assert.doesNotMatch(html, /"@type":"Product"/);
  }
});

test("plain Y splitter retains verified ordering facts and does not promise outlet valves", async () => {
  const html = await load("/products/brass-two-way-splitter-3672a");
  assert.match(html, /No individual outlet shut-off valves/);
  assert.match(html, /minimum order quantity is 500 pcs/);
  assert.match(html, /samples are available/);
  assert.match(html, /Which GHT sizes are available for LH-3672A/);
  assert.match(html, /href="\/products\/categories\/brass-hose-splitters"/);
  assert.match(html, /href="\/resources\/garden-hose-splitter-leaking-diagnostic-guide"/);
});

test("sitemap admits approved adapters but keeps thin catalogue references out", async () => {
  const sitemap = await load("/sitemap.xml");
  for (const [model] of cases) assert.ok(sitemap.includes(`/products/aluminum-hose-threaded-adapter-${model}</loc>`));
  assert.ok(!sitemap.includes("/products/aluminum-hose-threaded-adapter-3907</loc>"));
  const thin = await load("/products/aluminum-hose-threaded-adapter-3907");
  assert.match(thin, /name="robots" content="noindex, follow"/);
  const collection = await load("/products/materials/aluminum");
  for (const [model] of cases) assert.ok(collection.includes(`href="/products/aluminum-hose-threaded-adapter-${model}"`));
});
