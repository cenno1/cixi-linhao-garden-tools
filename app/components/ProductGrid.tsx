import Image from "next/image";
import { productFamilies, products } from "../data/products";
import { brassSeoCategories } from "../data/brass-seo-categories";

const familyId = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const featuredFamilies = ["Two-Way Splitters", "Four-Way Splitters", "Shut-Off Valves", "Pressure Regulators", "Quick Connectors", "Threaded Adapters", "Elbow Fittings", "Hose Couplings & Repair", "Hose Reel Fittings"];

export function ProductGrid() {
  const families = featuredFamilies.filter((family) => productFamilies.includes(family));
  return <>
    <nav className="filter-row category-seo-links" aria-label="Product families">
      {families.map((family) => <a href={`#${familyId(family)}`} key={family}>{family}</a>)}
    </nav>
    <p className="catalog-count">{products.length} reference models · {products.filter((product) => product.material === "Brass").length} brass · {products.filter((product) => product.material === "Aluminum").length} aluminum</p>
    {families.map((family) => {
      const items = products.filter((product) => product.family === family);
      return <section className="catalog-family" id={familyId(family)} key={family} aria-labelledby={`${familyId(family)}-title`}>
        <div className="catalog-family-heading"><div><span className="eyebrow">Product family · {items.length} models</span><h2 id={`${familyId(family)}-title`}>{family}</h2></div><a href="/contact#quote-form">Send a drawing for this family →</a></div>
        <div className="product-grid">
          {items.map((product) => <article className="product-card" key={product.code}>
            <a className="product-image" href={`/products/${product.slug}`}><Image src={product.image} alt={`${product.code} ${product.material || "Brass"} ${product.name}`} width={620} height={420} sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw" /></a>
            <div className="product-card-body">
              <div className="catalog-card-meta"><span className="product-code">{product.code}</span><span className={`material-badge material-badge--${product.material?.toLowerCase() || "brass"}`}>{product.material || "Brass"}</span></div>
              <h3><a href={`/products/${product.slug}`}>{product.name}</a></h3>
              <p>{product.nominalSize ? `Nominal size: ${product.nominalSize}` : product.summary}</p>
              {product.threadSpecification && <p>{product.threadSpecification}</p>}
              <a className="text-link" href={`/products/${product.slug}`}>View specifications <span>→</span></a>
            </div>
          </article>)}
        </div>
      </section>;
    })}
    <nav className="filter-row category-seo-links" aria-label="Brass buyer guides">
      {brassSeoCategories.filter((category) => products.some((product) => product.brassCategory === category.category)).map((category) =>
        <a href={`/products/categories/${category.slug}`} key={category.slug}>{category.label}</a>)}
    </nav>
  </>;
}
