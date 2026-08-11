"use client";

/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from "react";
import { categories, products, ProductCategory } from "../data/products";

export function ProductGrid() {
  const [active, setActive] = useState<ProductCategory | "All">("All");
  const filtered = useMemo(() => active === "All" ? products : products.filter((product) => product.category === active), [active]);

  return <>
    <div className="filter-row" aria-label="Filter products">
      <button className={active === "All" ? "active" : ""} onClick={() => setActive("All")}>All products</button>
      {categories.map((category) => <button className={active === category.name ? "active" : ""} key={category.name} onClick={() => setActive(category.name)}>{category.name}</button>)}
    </div>
    <div className="product-grid">
      {filtered.map((product) => <article className="product-card" key={product.slug}>
        <a className="product-image" href={`/products/${product.slug}`}><img src={product.image} alt={product.name} /></a>
        <div className="product-card-body">
          <span className="product-code">{product.code}</span>
          <h2><a href={`/products/${product.slug}`}>{product.name}</a></h2>
          <p>{product.summary}</p>
          <details><summary>View key options</summary><div className="product-options"><div><strong>Features</strong><ul>{product.features.map((item) => <li key={item}>{item}</li>)}</ul></div><div><strong>Applications</strong><ul>{product.applications.map((item) => <li key={item}>{item}</li>)}</ul></div></div></details>
          <a className="text-link" href={`/products/${product.slug}`}>View product details <span>→</span></a>
        </div>
      </article>)}
    </div>
  </>;
}
