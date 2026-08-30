import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { WhatsAppFloat } from "../../../components/WhatsAppFloat";
import { brassProducts } from "../../../data/products";
import { brassSeoCategories, getBrassSeoCategoryBySlug } from "../../../data/brass-seo-categories";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://linhaogarden.com").replace(/\/$/, "");
type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return brassSeoCategories.map(({ slug }) => ({ category: slug }));
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

        <section className="section category-detail">
          <div className="container">
            <div className="category-buyer-panel">
              <div>
                <span className="eyebrow">Buyer specification checklist</span>
                <h2>What to confirm before quotation</h2>
              </div>
              <ul>{config.buyerQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
            </div>

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
                {brassSeoCategories.filter((item) => item.slug !== config.slug).map((item) => (
                  <a href={`/products/categories/${item.slug}`} key={item.slug}>{item.label}</a>
                ))}
              </div>
            </nav>
          </div>
        </section>

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
    </>
  );
}
