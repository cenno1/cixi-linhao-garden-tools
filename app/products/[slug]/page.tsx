/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { WhatsAppFloat } from "../../components/WhatsAppFloat";
import { products, type Product } from "../../data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://linhaogarden.com";
type Props = { params: Promise<{ slug: string }> };

const getEngineeringSpecs = (product: Product) => {
  const listedSizes = Array.from(new Set(product.summary.match(/\d+\/\d+\s*in(?:\s+to\s+\d+\/\d+\s*in)?/gi) || []));
  const isNickelPlated = /nickel-plated/i.test(product.name) || /nickel-plated/i.test(product.summary);
  const threadAndSize = product.code === "LH-3672A"
    ? "1/2 in and 3/4 in GHT options; confirm the required inlet and outlet configuration."
    : listedSizes.length
      ? `${listedSizes.join(", ")} nominal size listed; confirm thread family, pitch, tolerance and mating component.`
      : "Confirm thread family, nominal size, pitch, tolerance and mating component from the approved drawing or sample.";

  return [
    ["Material", "Brass; confirm the required grade and any market or compliance requirement before quotation."],
    ["Thread / size", threadAndSize],
    ["Surface finish", isNickelPlated ? "Nickel-plated finish listed for this model; confirm finish specification." : "Natural brass; confirm any alternate finish requirement by specification."],
    ["Inspection", "Dimensions, thread fit, sealing-related requirements and surface appearance checked against the approved specification."],
    ["Buyer input", "Provide the drawing or sample, mating component, target market, quantity, inspection points and packaging requirements."],
  ];
};

export async function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  const description = `CIXI LINHAO ${product.summary} B2B supplier with OEM packaging support for global garden product buyers.`;
  const socialTitle = `${product.name} | ${product.code}`;
  return {
    title: `${product.name} | ${product.code} | OEM Supplier`,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: socialTitle, description, url: `/products/${product.slug}`, images: [{ url: product.image, alt: product.name }] },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [product.image] },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const productUrl = `${siteUrl}/products/${product.slug}`;
  const productImages = product.images?.length
    ? product.images
    : [{ src: product.image, alt: `${product.name} ${product.code}` }];
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);
  const engineeringSpecs = product.brassCategory ? getEngineeringSpecs(product) : [];
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` }, { "@type": "ListItem", position: 3, name: product.name, item: productUrl }] };
  const faqs = [
    { question: `Can I request OEM packaging for ${product.name}?`, answer: "Yes. Share your target market, packaging preference, artwork and expected quantity so we can review the appropriate product and packing configuration." },
    { question: `What should I confirm before ordering ${product.code}?`, answer: "Confirm the intended application, connection or size requirement, product features, packaging format and target quantity. Our team can review the specification before quotation." },
    { question: "Are prices shown on this website?", answer: "No. This is a B2B enquiry website. Contact CIXI LINHAO for product specifications, packaging options and a quotation for your required quantity." },
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

  return <>
    <Header />
    <main>
      <section className="product-detail-hero"><div className="container"><a className="breadcrumb" href="/products">Products</a><span className="eyebrow eyebrow-light">{product.category}</span><h1>{product.name}</h1><p>{product.summary}</p></div></section>
      <section className="section"><div className="container product-detail-grid"><div className="product-detail-gallery">{productImages.map((image, index) => <div className={`product-detail-image${index === 0 ? "" : " product-detail-image--secondary"}`} key={image.src}><img src={image.src} alt={image.alt} /></div>)}</div><div className="product-detail-copy"><span className="product-code">{product.code}</span><h2>Product overview</h2><p>{product.summary} Share the intended application, mating components, target market, packaging format and required quantity so our team can review the correct configuration before quotation.</p><div className="product-detail-columns"><div><h3>Key features</h3><ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div><div><h3>Typical applications</h3><ul>{product.applications.map((application) => <li key={application}>{application}</li>)}</ul></div></div><a className="button" href={`/contact?product=${encodeURIComponent(`${product.code} ${product.name}`)}`}>Request specifications</a></div></div></section>
      {engineeringSpecs.length > 0 ? <section className="section product-engineering"><div className="container"><div className="section-heading split-heading"><div><span className="eyebrow">Engineering parameters</span><h2>Confirm the part specification before quotation.</h2></div><p>Listed catalogue sizes are a starting point. Production follows the approved drawing, sample and technical file.</p></div><dl className="engineering-spec-grid">{engineeringSpecs.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl></div></section> : null}
      {product.buyerGuide && <section className="section"><div className="container product-faq"><span className="eyebrow">Buyer compatibility checklist</span><h2>{product.buyerGuide.heading}</h2><p>{product.buyerGuide.introduction}</p><ul>{product.buyerGuide.checklist.map((item) => <li key={item}>{item}</li>)}</ul><a className="button button-secondary" href={product.buyerGuide.guideHref}>{product.buyerGuide.guideLabel} →</a></div></section>}
      <section className="section section-soft"><div className="container"><div className="section-heading"><span className="eyebrow">Related products</span><h2>Build a coordinated range.</h2></div><div className="related-products">{related.map((item) => <a href={`/products/${item.slug}`} key={item.slug}><img src={item.image} alt={item.name} /><span>{item.code}</span><h3>{item.name}</h3></a>)}</div></div></section>
      <section className="section"><div className="container product-faq"><span className="eyebrow">Buyer FAQ</span><h2>Questions before you request a quote.</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
    </main>
    <Footer /><WhatsAppFloat />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </>;
}
