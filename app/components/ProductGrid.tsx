/* eslint-disable @next/next/no-img-element */

import { brassProducts } from "../data/products";
import { brassSeoCategories } from "../data/brass-seo-categories";

export function ProductGrid() {
  return (
    <>
      <nav className="filter-row category-seo-links" aria-label="Brass product categories">
        <a className="active" href="/products">All brass fittings</a>
        {brassSeoCategories.map((category) => (
          <a href={`/products/categories/${category.slug}`} key={category.slug}>{category.label}</a>
        ))}
      </nav>
      <div className="product-grid">
        {brassProducts.map((product) => (
          <article className="product-card" key={product.slug}>
            <a className="product-image" href={`/products/${product.slug}`}><img src={product.image} alt={product.name} /></a>
            <div className="product-card-body">
              <span className="product-code">{product.code}</span>
              <h2><a href={`/products/${product.slug}`}>{product.name}</a></h2>
              <p>{product.summary}</p>
              <details>
                <summary>View key options</summary>
                <div className="product-options">
                  <div><strong>Features</strong><ul>{product.features.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div><strong>Applications</strong><ul>{product.applications.map((item) => <li key={item}>{item}</li>)}</ul></div>
                </div>
              </details>
              <a className="text-link" href={`/products/${product.slug}`}>View product details <span>→</span></a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
