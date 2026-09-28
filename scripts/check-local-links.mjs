const base = "http://localhost:3091";
const starts = ["/", "/products", "/products/materials/aluminum", "/products/brass-two-way-splitter-3672a", "/products/categories/brass-hose-splitters", "/resources", "/solutions/brass-hose-connectors-manufacturer"];
const links = new Set(starts);
for (const start of starts) {
  const response = await fetch(base + start);
  if (!response.ok) throw new Error(`Failed page ${start}: ${response.status}`);
  const html = await response.text();
  for (const match of html.matchAll(/\bhref="(\/[^"#?]*)[^"]*"/g)) {
    if (!match[1].startsWith("/_next/")) links.add(match[1]);
  }
}
const failures = [];
for (const path of links) {
  const response = await fetch(base + path, { method: "HEAD", redirect: "manual" });
  if (response.status >= 400) failures.push(`${response.status} ${path}`);
}
console.log(`Checked ${links.size} internal routes. ${failures.length} failures.`);
for (const failure of failures) console.log(failure);
if (failures.length) process.exitCode = 1;
