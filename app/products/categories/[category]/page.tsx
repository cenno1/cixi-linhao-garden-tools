import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { WhatsAppFloat } from "../../../components/WhatsAppFloat";
import { brassProducts, products, type Product } from "../../../data/products";
import { brassSeoCategories, getBrassSeoCategoryBySlug } from "../../../data/brass-seo-categories";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://linhaogarden.com").replace(/\/$/, "");
type Props = { params: Promise<{ category: string }> };

function adapterEnds(product: Product) {
  const pair = product.threadSpecification?.split(" × ");
  if (pair?.length === 2) return pair;
  switch (product.catalogDetail) {
    case "Double male connector": return ["Male", "Male"];
    case "Double female connector": return ["Female", "Female"];
    case "Female nipple adapter": return ["Female", "Not listed"];
    case "Male nipple adapter":
    case "Nickel-plated male nipple adapter": return ["Male", "Not listed"];
    default: return ["Not assigned", "Not assigned"];
  }
}

function AdapterSelection() {
  const quote = (ref: string) => `/contact?product=${encodeURIComponent(ref)}#quote-form`;
  return (
    <section aria-labelledby="adapter-selection">
      <div className="section-heading">
        <span className="eyebrow">Catalogue selection table</span>
        <h2 id="adapter-selection">Match the two ends of your adapter.</h2>
        <p>A and B identify connections, not flow direction. A nominal size beside a model is not a verified size for each end. Fixed or swivel construction is not specified for these references; confirm it on the drawing.</p>
      </div>
      {(["Brass", "Aluminum"] as const).map((material) => (
        <div key={material}>
          <h3>{material === "Brass" ? "Brass adapter references" : "Aluminum alternatives — not brass equivalents"}</h3>
          <p>{material === "Brass" ? "Catalogue pages 17–18 list the configurations below but do not specify each end’s thread standard or size. A female / male set is not necessarily one threaded adapter." : "Catalogue pages 20–21. Where specified, NH, NPT and NPS are reproduced as listed. Confirm the mating parts and sealing surfaces before substituting any model."}</p>
          <div className="engineering-spec-table-wrap" role="region" aria-label={`${material} adapter comparison`} tabIndex={0}>
            <table className="engineering-spec-table" aria-label={`${material} threaded adapter models`}>
              <thead><tr>{["LH model", "Nominal size / catalogue description", "End A", "End B", "Enquiry"].map((label) => <th key={label} scope="col">{label}</th>)}</tr></thead>
              <tbody>{products.filter((p) => p.family === "Threaded Adapters" && p.material === material).map((p) => {
                const [endA, endB] = adapterEnds(p);
                return <tr key={p.code}>
                  <th scope="row"><a href={`/products/${p.slug}`}>{p.code}</a></th>
                  <td>{p.nominalSize}<br />{p.catalogDetail}</td><td>{endA}</td><td>{endB}</td>
                  <td><a href={quote(`${p.code} — ${material} hose adapter`)} aria-label={`Request a quote for ${p.code}`}>Request quote</a></td>
                </tr>;
              })}</tbody>
            </table>
          </div>
        </div>
      ))}
      <div className="section-heading">
        <h3>Need a 3/4-inch GHT × 1-inch NPT brass adapter?</h3>
        <p>This combination is a drawing-based enquiry, not a listed brass stock item. Specify male or female on each end, mark the sealing surfaces and tell us whether the hose must swivel after installation.</p>
        <a className="button" href={quote("Custom brass adapter: 3/4-inch GHT x 1-inch NPT — drawing review")}>Request a custom adapter quote</a>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return brassSeoCategories.filter((item) => brassProducts.some((product) => product.brassCategory === item.category)).map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const config = getBrassSeoCategoryBySlug(category);
  if (!config) return {};
  const canonical = `/products/categories/${config.slug}`;
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: canonical,
      images: [{ url: "/images/products/brass-connectors.webp", alt: config.h1 }],
    },
    twitter: { card: "summary_large_image", title: config.metaTitle, description: config.metaDescription },
  };
}

export default async function BrassCategoryPage({ params }: Props) {
  const { category } = await params;
  const config = getBrassSeoCategoryBySlug(category);
  if (!config) notFound();
  const categoryProducts = brassProducts.filter((product) => product.brassCategory === config.category);
  if (!categoryProducts.length) notFound();

  const canonicalUrl = `${siteUrl}/products/categories/${config.slug}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Brass Garden Hose Fittings", item: `${siteUrl}/products` },
      { "@type": "ListItem", position: 3, name: config.label, item: canonicalUrl },
    ],
  };
  const faqSchema = config.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: config.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <Header />
      <main>
        <section className="page-hero page-hero-products">
          <div className="container">
            <a className="breadcrumb" href="/products">Brass Garden Hose Fittings</a>
            <span className="eyebrow eyebrow-light">Brass product category</span>
            <h1>{config.h1}</h1>
            <p>{config.introduction}</p>
          </div>
        </section>

        {config.customBrief && <section className="section section-soft"><div className="container product-faq"><span className="eyebrow">Custom brass fitting manufacturing</span><h2>Specify your {config.label.toLowerCase()} project</h2><p>{config.customBrief}</p><p>Cixi Linhao Metal Product Co., Ltd. reviews OEM projects from drawings, samples and specifications. <a href="/capabilities#custom-options">See material, dimension, finish and packaging options</a>.</p><a className="button" href={`/contact?product=${encodeURIComponent(`Custom ${config.label}`)}#quote-form`}>Send Drawing for an OEM Quote</a></div></section>}

        <section className="section category-detail">
          <div className="container">
            <div className="category-buyer-panel">
              <div>
                <span className="eyebrow">Buyer specification checklist</span>
                <h2>What to confirm before quotation</h2>
              </div>
              <ul>{config.buyerQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
            </div>

            {config.modelComparison && <section aria-labelledby="connector-model-comparison"><div className="section-heading"><span className="eyebrow">Catalogue comparison</span><h2 id="connector-model-comparison">Shortlist a garden hose quick connector.</h2><p>These nominal sizes and the water-stop label come from the catalogue. They do not establish thread form, dimensions, pressure rating or cross-brand fit.</p></div><div className="engineering-spec-table-wrap"><table className="engineering-spec-table"><thead><tr><th scope="col">LH reference</th><th scope="col">Catalogue nominal size</th><th scope="col">Selection role</th><th scope="col">Confirm before approval</th></tr></thead><tbody>{config.modelComparison.map((model) => <tr key={model.code}><th scope="row"><a href={model.href}>{model.code}</a></th><td>{model.size}</td><td>{model.role}</td><td>{model.confirm}</td></tr>)}</tbody></table></div></section>}
            {config.slug === "brass-hose-adapters" && <AdapterSelection />}
            <div className="section-heading split-heading">
              <div><span className="eyebrow">Product references</span><h2>{config.label}</h2></div>
              <p>{categoryProducts.length} current catalogue {categoryProducts.length === 1 ? "reference" : "references"} in this category. Final specifications follow approved technical input.</p>
            </div>
            <div className="product-grid">
              {categoryProducts.map((product) => (
                <article className="product-card" key={product.slug}>
                  <a className="product-image" href={`/products/${product.slug}`}>
                    <Image src={product.image} alt={product.name} width={720} height={520} sizes="(max-width: 820px) 100vw, 33vw" />
                  </a>
                  <div className="product-card-body">
                    <span className="product-code">{product.code}</span>
                    <h2><a href={`/products/${product.slug}`}>{product.name}</a></h2>
                    <p>{product.summary}</p>
                    <a className="text-link" href={`/products/${product.slug}`}>Review specifications <span>→</span></a>
                  </div>
                </article>
              ))}
            </div>

            <nav className="category-related-links" aria-label="Related brass product categories">
              <strong>Related brass fitting categories</strong>
              <div>
                {brassSeoCategories.filter((item) => item.slug !== config.slug && brassProducts.some((product) => product.brassCategory === item.category)).map((item) => (
                  <a href={`/products/categories/${item.slug}`} key={item.slug}>{item.label}</a>
                ))}
              </div>
            </nav>
          </div>
        </section>

        {config.selectionGuide ? (
          <section className="section section-soft">
            <div className="container product-faq">
              <span className="eyebrow">Configuration guide</span>
              <h2>{config.selectionGuide.heading}</h2>
              <p>{config.selectionGuide.introduction}</p>
              {config.selectionGuide.options.map((option) => (
                <article key={option.heading}>
                  <h3>{option.heading}</h3>
                  <p>{option.description}</p>
                  {option.href && option.linkLabel ? <a href={option.href}>{option.linkLabel} →</a> : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {config.relatedResources ? (
          <section className="section">
            <div className="container product-faq">
              <span className="eyebrow">Buyer resources</span>
              <h2>{config.slug === "brass-hose-adapters" ? "Check thread fit before ordering." : config.slug === "brass-quick-connectors" ? "Review connector fit and sample requirements." : "Specify and inspect the splitter with less guesswork."}</h2>
              {config.relatedResources.map((resource) => (
                <article key={resource.href}>
                  <h3><a href={resource.href}>{resource.label}</a></h3>
                  <p>{resource.description}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {config.faqs ? (
          <section className="section section-soft">
            <div className="container product-faq">
              <span className="eyebrow">{config.label} FAQ</span>
              <h2>Questions before sample approval.</h2>
              {config.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
            </div>
          </section>
        ) : null}

        <section className="catalog-cta">
          <div className="container">
            <div>
              <span className="eyebrow eyebrow-light">OEM brass fitting review</span>
              <h2>Need a different size, thread or configuration?</h2>
              <p>Send the mating-part details, target market, drawing or sample for engineering review before quotation.</p>
            </div>
            <a className="button button-gold" href={`/contact?product=${encodeURIComponent(config.label)}#quote-form`}>Send Drawing for Review</a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /> : null}
    </>
  );
}

