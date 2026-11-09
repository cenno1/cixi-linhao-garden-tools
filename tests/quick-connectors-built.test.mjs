import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import test from "node:test";

const html = readFileSync(new URL("../.next/server/app/products/categories/brass-quick-connectors.html", import.meta.url), "utf8");

test("quick connector category exposes a canonical procurement and model-selection path", () => {
  assert.match(html, /rel="canonical" href="https:\/\/linhaogarden.com\/products\/categories\/brass-quick-connectors"/);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
  assert.match(html, /id="connector-model-comparison"/);
  assert.match(html, /<th scope="col">Catalogue nominal size<\/th>/);
  for (const slug of ["brass-quick-connector-3603", "brass-quick-connector-3604", "brass-water-stop-connector-3604z"]) {
    assert.ok(html.includes(`href="/products/${slug}"`));
    assert.ok(existsSync(new URL(`../.next/server/app/products/${slug}.html`, import.meta.url)));
  }
  assert.ok(html.includes('/contact?product=Custom%20Brass%20Quick%20Connectors#quote-form'));
  assert.match(html, /\/capabilities#project-process/);
  assert.match(html, /\/resources\/why-garden-hose-connectors-leak/);
});

test("quick connector FAQs match structured data and do not inherit splitter copy", () => {
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((match) => JSON.parse(match[1]));
  const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
  assert.equal(faq.mainEntity.length, 5);
  const visibleAnswers = [...html.matchAll(/<details><summary>(.*?)<\/summary><p>(.*?)<\/p><\/details>/gs)];
  assert.equal(visibleAnswers.length, 5);
  faq.mainEntity.forEach((question, index) => {
    assert.equal(visibleAnswers[index][1], question.name);
    assert.equal(visibleAnswers[index][2], question.acceptedAnswer.text);
  });
  assert.doesNotMatch(html, /Specify and inspect the splitter|Brass hose splitter FAQ/);
  assert.match(html, /No universal compatibility is claimed/);
  assert.match(html, /does not confirm a thread standard/);
});
