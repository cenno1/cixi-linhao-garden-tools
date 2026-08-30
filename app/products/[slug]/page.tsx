import type { Metadata } from "next";
import Image from "next/image";
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
  const sizeOptions = product.code === "LH-HRS Series"
    ? "Project options: 1/2 in, 3/4 in, 1 in or custom; confirm the inlet, outlet and mating-part combination."
    : product.code === "LH-3672A"
      ? "1/2 in and 3/4 in GHT options confirmed for this model; confirm the inlet and outlet configuration."
      : listedSizes.length
        ? `${listedSizes.join(", ")} catalogue size listed; custom dimensions are reviewed from the approved drawing or sample.`
        : "Custom size from the approved drawing or sample; confirm all mating dimensions before quotation.";

  return [
    ["Material", "Brass / customer-specified brass grade. Confirm any market or compliance requirement."],
    ["Thread", "GHT / BSP / NPT / custom thread. Confirm form, nominal size, pitch, tolerance, sealing method and mating component."],
    ["Size", sizeOptions],
    ["Finish", isNickelPlated ? "Nickel-plated finish listed for this model / custom finish by approved specification." : "Natural brass / nickel plated / custom finish by approved specification."],
    ["Seal", "NBR / EPDM / custom compound. Confirm fluid, temperature, pressure and market requirements before selection."],
    ["Working pressure", "According to the approved product specification and application conditions."],
    ["Logo", "Laser marking / stamping. Confirm artwork, position, size and durability requirement."],
    ["Packaging", "Bulk / retail / OEM packaging. Confirm quantity, artwork, labeling and export-packing requirements."],
  ];
};

const DimensionSketch = ({ variant }: { variant: "elbow" | "straight" }) => (
  <svg className="dimension-sketch" viewBox="0 0 760 440" role="img" aria-labelledby="dimension-sketch-title dimension-sketch-description">
    <title id="dimension-sketch-title">Product dimensional drawing framework</title>
    <desc id="dimension-sketch-description">Reference line drawing showing A overall dimension, B body dimension and the threaded interface. Values must be confirmed from the approved drawing or sample.</desc>
    <defs>
      <marker id="dimension-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
        <path d="M0 0 L8 4 L0 8 Z" />
      </marker>
    </defs>
    <g className="dimension-part">
      {variant === "elbow" ? (
        <>
          <path d="M155 155 H390 Q505 155 505 270 V305" />
          <path d="M155 245 H370 Q415 245 415 290 V305" />
          <path d="M155 130 V270 M185 130 V270 M215 142 V258" />
          <path d="M388 305 H532 V350 H388 Z" />
          <path d="M398 314 H522 M398 326 H522 M398 338 H522" />
          <path d="M225 165 L355 165 L390 200 L355 235 L225 235 Z" />
        </>
      ) : (
        <>
          <rect x="235" y="150" width="290" height="140" rx="18" />
          <path d="M125 170 H235 V270 H125 Z M525 170 H635 V270 H525 Z" />
          <path d="M135 180 H225 M135 195 H225 M135 210 H225 M135 225 H225 M135 240 H225 M135 255 H225" />
          <path d="M535 180 H625 M535 195 H625 M535 210 H625 M535 225 H625 M535 240 H625 M535 255 H625" />
          <path d="M270 170 H490 M270 270 H490" />
        </>
      )}
    </g>
    <g className="dimension-lines">
      <path d="M125 85 H635" markerStart="url(#dimension-arrow)" markerEnd="url(#dimension-arrow)" />
      <path d="M125 105 V145 M635 105 V145" />
      <text x="380" y="70" textAnchor="middle">A</text>
      <path d="M680 150 V350" markerStart="url(#dimension-arrow)" markerEnd="url(#dimension-arrow)" />
      <path d="M545 150 H700 M545 350 H700" />
      <text x="705" y="255">B</text>
      <path d="M145 350 L210 282" markerEnd="url(#dimension-arrow)" />
      <text x="72" y="375">THREAD</text>
    </g>
    <text className="dimension-not-scale" x="380" y="415" textAnchor="middle">REFERENCE FRAMEWORK · NOT TO SCALE</text>
  </svg>
);

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
  const productViews: NonNullable<Product["productViews"]> = product.productViews?.length
    ? product.productViews
    : productImages.map((image, index) => ({
        ...image,
        label: index === 0 ? "Product view" : `Product view ${String(index + 1).padStart(2, "0")}`,
        fit: "contain" as const,
      }));
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
      <section className="section"><div className="container product-detail-grid"><div className="product-detail-gallery" aria-label={`${product.name} product views`}>
              {productViews.map((view, index) => (
                <figure className={`product-view-card${index === 0 ? " product-view-card--primary" : ""}`} key={`${view.label}-${index}`}>
                  {view.src ? (
                    <div className="product-detail-image">
                      <Image
                        src={view.src}
                        alt={view.alt}
                        fill
                        sizes={index === 0 ? "(max-width: 820px) 100vw, 45vw" : "(max-width: 540px) 100vw, (max-width: 820px) 50vw, 22vw"}
                        style={{ objectFit: view.fit || "cover", objectPosition: view.objectPosition || "center", transform: `scale(${view.zoom || 1})`, transformOrigin: view.objectPosition || "center" }}
                        priority={index === 0}
                      />
                    </div>
                  ) : (
                    <div className="product-view-placeholder">
                      <span>Technical evidence required</span>
                      <strong>{view.label}</strong>
                      <p>{view.note}</p>
                    </div>
                  )}
                  <figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{view.label}</strong>{view.note && view.src ? <p>{view.note}</p> : null}</figcaption>
                </figure>
              ))}
            </div><div className="product-detail-copy"><span className="product-code">{product.code}</span><h2>Product overview</h2><p>{product.summary} Share the intended application, mating components, target market, packaging format and required quantity so our team can review the correct configuration before quotation.</p><div className="product-detail-columns"><div><h3>Key features</h3><ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div><div><h3>Typical applications</h3><ul>{product.applications.map((application) => <li key={application}>{application}</li>)}</ul></div></div><a className="button" href={`/contact?product=${encodeURIComponent(`${product.code} ${product.name}`)}`}>Request specifications</a></div></div></section>
      {engineeringSpecs.length > 0 ? <section className="section product-engineering"><div className="container"><div className="section-heading split-heading"><div><span className="eyebrow">Specification options</span><h2>Configure the part for quotation.</h2></div><p>These are project options, not automatic fixed specifications for every model. Final production follows the approved drawing, sample and technical file.</p></div><div className="engineering-spec-table-wrap"><table className="engineering-spec-table"><thead><tr><th scope="col">Specification</th><th scope="col">Options / requirements</th></tr></thead><tbody>{engineeringSpecs.map(([term, value]) => <tr key={term}><th scope="row">{term}</th><td>{value}</td></tr>)}</tbody></table></div><p className="engineering-spec-note">Send the mating-part details and intended operating conditions with your enquiry so the configuration can be checked before quotation.</p></div></section> : null}
      {engineeringSpecs.length > 0 ? <section className="section product-dimensions"><div className="container"><div className="section-heading split-heading"><div><span className="eyebrow">Dimensional drawing</span><h2>Define every critical interface.</h2></div><p>This reference framework is not a production drawing. Replace the pending values with an approved technical drawing or measured sample before tooling and production.</p></div><div className="product-dimension-grid"><div className="dimension-sketch-card"><DimensionSketch variant={product.brassCategory === "Brass Elbow Fittings" || product.brassCategory === "Brass Swivel Fittings" || product.brassCategory === "Hose Reel Brass Fittings" ? "elbow" : "straight"} /></div><div className="dimension-values"><div><span>A</span><p><strong>Overall length / envelope</strong>Confirm from approved drawing or sample.</p></div><div><span>B</span><p><strong>Body height / centreline</strong>Confirm from approved drawing or sample.</p></div><div><span>T</span><p><strong>Thread interface</strong>Define system, nominal size, pitch, tolerance, sealing method and mating component.</p></div><aside><strong>Custom dimensions available.</strong><p>Send CAD, PDF, a dimensioned image or a physical sample for engineering review.</p><a href={`/contact?product=${encodeURIComponent(`${product.code} dimensional drawing`)}`}>Send dimensional requirements →</a></aside></div></div></div></section> : null}
      {product.buyerGuide && <section className="section"><div className="container product-faq"><span className="eyebrow">Buyer compatibility checklist</span><h2>{product.buyerGuide.heading}</h2><p>{product.buyerGuide.introduction}</p><ul>{product.buyerGuide.checklist.map((item) => <li key={item}>{item}</li>)}</ul><a className="button button-secondary" href={product.buyerGuide.guideHref}>{product.buyerGuide.guideLabel} →</a></div></section>}
      <section className="section section-soft"><div className="container"><div className="section-heading"><span className="eyebrow">Related products</span><h2>Build a coordinated range.</h2></div><div className="related-products">{related.map((item) => <a href={`/products/${item.slug}`} key={item.slug}><Image src={item.image} alt={item.name} width={620} height={420} sizes="(max-width: 820px) 100vw, 33vw" /><span>{item.code}</span><h3>{item.name}</h3></a>)}</div></div></section>
      <section className="section"><div className="container product-faq"><span className="eyebrow">Buyer FAQ</span><h2>Questions before you request a quote.</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
    </main>
    <Footer /><WhatsAppFloat />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </>;
}
