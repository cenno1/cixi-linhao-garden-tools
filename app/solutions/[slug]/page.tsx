/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { WhatsAppFloat } from "../../components/WhatsAppFloat";
import { landingPages } from "../../data/landing-pages";
import { products } from "../../data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://linhaogarden.com";
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return landingPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = landingPages.find((item) => item.slug === slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/solutions/${page.slug}` },
    openGraph: { title: page.title, description: page.description, url: `/solutions/${page.slug}`, images: [{ url: page.image, alt: page.title }] },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const page = landingPages.find((item) => item.slug === slug);
  if (!page) notFound();
  const selectedProducts = page.productSlugs.map((productSlug) => products.find((product) => product.slug === productSlug)).filter((product): product is (typeof products)[number] => Boolean(product));
  const selectionGroups = page.selectionGroups?.map((group) => ({
    ...group,
    products: group.productSlugs.map((productSlug) => products.find((product) => product.slug === productSlug)).filter((product): product is (typeof products)[number] => Boolean(product)),
  })) ?? [];
  const pageUrl = `${siteUrl}/solutions/${page.slug}`;
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: page.eyebrow, item: pageUrl }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

  return <>
    <Header />
    <main>
      <section className="solution-hero"><div className="container solution-hero-grid"><div><a className="breadcrumb" href="/products">Products</a><span className="eyebrow eyebrow-light">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.lead}</p><a className="button button-gold" href={`/contact?product=${encodeURIComponent(page.eyebrow)}`}>Request product details</a></div><div className="solution-hero-image"><img src={page.image} alt={page.title} /></div></div></section>
      <section className="section"><div className="container"><div className="section-heading split-heading"><div><span className="eyebrow">B2B sourcing support</span><h2>Plan the range around the buyer&apos;s real requirements.</h2></div><p>{page.description}</p></div><div className="solution-benefits">{page.benefits.map((benefit, index) => <article key={benefit.title}><span>0{index + 1}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div></div></section>
      <section className="section solution-spec-section"><div className="container solution-spec-grid"><div><span className="eyebrow">Prepare your enquiry</span><h2>Details that help us recommend the right configuration.</h2><p>A clear sourcing brief reduces follow-up and helps our team review product compatibility, packaging and quantity requirements faster.</p></div><ul>{page.specificationPoints.map((point) => <li key={point}>{point}</li>)}</ul></div></section>
      {selectionGroups.length > 0 ? <section className="section"><div className="container"><div className="section-heading split-heading"><div><span className="eyebrow">Catalogue model guide</span><h2>Choose brass hose connectors by connection job.</h2></div><p>Use the listed catalogue sizes to shortlist models, then confirm thread form, mating component, seal and packaging before quotation.</p></div><div className="solution-benefits">{selectionGroups.map((group, index) => <article key={group.need}><span>0{index + 1}</span><h3>{group.need}</h3><p>{group.bestFor}</p><p><strong>Catalogue models:</strong>{" "}{group.products.map((product, productIndex) => <span key={product.slug}>{productIndex > 0 ? ", " : ""}<a href={`/products/${product.slug}`}>{product.code}</a></span>)}</p><p><strong>Confirm:</strong> {group.confirm}</p></article>)}</div>{page.resourceLink ? <p><strong>Related buyer guide:</strong>{" "}<a href={page.resourceLink.href}>{page.resourceLink.title}</a>. {page.resourceLink.text}</p> : null}</div></section> : null}
      <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">Relevant products</span><h2>Start with the core items.</h2></div><div className="related-products">{selectedProducts.map((product) => <a href={`/products/${product.slug}`} key={product.slug}><img src={product.image} alt={product.name} /><span>{product.code}</span><h3>{product.name}</h3></a>)}</div></div></section>
      <section className="section section-soft"><div className="container product-faq"><span className="eyebrow">Buyer FAQ</span><h2>Before you request a quote.</h2>{page.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
      <section className="resource-cta"><div className="container"><h2>Have a reference product or range brief?</h2><p>Share it with your target market, quantity and packaging needs. We will help you move to the right product discussion.</p><a className="button button-gold" href={`/contact?product=${encodeURIComponent(page.eyebrow)}`}>Send an enquiry</a></div></section>
    </main>
    <Footer /><WhatsAppFloat />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </>;
}
