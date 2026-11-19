import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import test from "node:test";

const builtRoot = new URL("../.next/server/app/", import.meta.url);
const read = (path) => readFileSync(new URL(path, builtRoot), "utf8");
const schemas = (html) => [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
  .flatMap((match) => { const data = JSON.parse(match[1]); return data["@graph"] || [data]; });
const organizationId = "https://linhaogarden.com/#organization";
const companyName = "Cixi Linhao Metal Product Co., Ltd.";
const articlePaths = readdirSync(new URL("resources/", builtRoot)).filter((path) => path.endsWith(".html"));

test("home and about identify the same company without unsupported credentials", () => {
  const home = schemas(read("index.html"));
  const about = schemas(read("about.html"));
  const organization = home.find((item) => item["@type"] === "Organization");
  assert.equal(organization["@id"], organizationId);
  assert.equal(organization.name, companyName);
  assert.equal(organization.alternateName, "CIXI LINHAO");
  assert.deepEqual(about.find((item) => item["@type"] === "Organization"), organization);
  assert.equal(home.find((item) => item["@type"] === "WebSite").publisher["@id"], organizationId);
  assert.equal(about.find((item) => item["@type"] === "AboutPage").mainEntity["@id"], organizationId);
  for (const field of ["award", "aggregateRating", "review", "foundingDate", "numberOfEmployees", "hasCertification", "sameAs"]) {
    assert.ok(!(field in organization), `Do not infer ${field} from a company-name link`);
  }
});

test("every resource has visible linked company attribution matching its Article data", () => {
  assert.ok(articlePaths.length >= 6);
  for (const path of articlePaths) {
    const html = read(`resources/${path}`);
    const article = schemas(html).find((item) => item["@type"] === "Article");
    assert.ok(article, path);
    for (const role of ["author", "publisher"]) {
      assert.equal(article[role]["@type"], "Organization", path);
      assert.equal(article[role]["@id"], organizationId, path);
      assert.equal(article[role].name, companyName, path);
    }
    assert.equal(article.author.url, "https://linhaogarden.com/about", path);
    assert.equal(article.publisher.url, "https://linhaogarden.com", path);
    const byline = html.match(/<p class="article-byline">(.*?)<\/p>/s)?.[1];
    assert.ok(byline?.includes(`<a href="/about">${companyName}</a>`), path);
    assert.ok(byline.includes(`<time dateTime="${article.datePublished}">${article.datePublished}</time>`) ||
      byline.includes(`<time datetime="${article.datePublished}">${article.datePublished}</time>`), path);
  }
});

test("company verification path retains canonicals, capability anchor and original article dates", () => {
  const about = read("about.html");
  assert.match(about, /rel="canonical" href="https:\/\/linhaogarden.com\/about"/);
  assert.match(about, /href="\/capabilities#project-process"/);
  assert.match(read("capabilities.html"), /id="project-process"/);
  assert.equal((about.match(/<h1[ >]/g) || []).length, 1);
  // The older guide's dates must not be replaced with the attribution-template revision.
  const guide = schemas(read("resources/ght-to-npt-brass-adapter-3-4-1-inch-guide.html"))
    .find((item) => item["@type"] === "Article");
  assert.equal(guide.datePublished, "2026-10-26");
  assert.equal(guide.dateModified, "2026-10-26");
});
