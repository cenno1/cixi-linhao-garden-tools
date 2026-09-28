import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { WhatsAppFloat } from "../../components/WhatsAppFloat";
import { products } from "../../data/products";
import { getBrassSeoCategoryByName } from "../../data/brass-seo-categories";

type Props = { params: Promise<{ slug: string }> };
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://linhaogarden.com").replace(/\/$/, "");
const customFields = ["Connection and thread", "Overall dimensions", "Material", "Finish", "Seal", "Marking", "Packaging"];

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  const description = product.seoDescription || `${product.code} ${product.name}. ${product.summary} Send a drawing or sample for a custom quote from Cixi Linhao Metal Product Co., Ltd.`;
  return {
    title: product.seoTitle || `${product.name} | ${product.code} | LINHAO`,
    description,
    alternates: { canonical: `/products/${slug}` },
    // Preserve existing model URLs. New catalogue-only references await verified
    // engineering details before being submitted for indexing.
    robots: product.indexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: { title: `${product.name} | ${product.code}`, description, url: `/products/${slug}`, images: [{ url: product.image, alt: product.name }] },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const category = product.brassCategory ? getBrassSeoCategoryByName(product.brassCategory) : undefined;
  const related = products.filter((item) => item.code !== product.code && item.family === product.family).slice(0, 4);
  const images = product.images?.length ? product.images : [{ src: product.image, alt: `${product.code} ${product.name} catalogue product view` }];
  const specs = [
    ["Reference model", product.code],
    ["Material", product.material || "Brass; confirm grade"],
    ["Catalogue nominal size", product.nominalSize || "Confirm from drawing or sample"],
    ["Connection / thread", product.threadSpecification || "Not specified in the catalogue; confirm both mating interfaces"],
    ["Configuration", product.catalogDetail || product.family || "Confirm from drawing or sample"],
    ["Finish", /nickel-plated/i.test(product.catalogDetail || "") ? "Nickel-plated (catalogue)" : "Confirm required finish"],
    ["Seal, pressure and certification", "Confirm for the intended application; no value stated in the catalogue"],
    ["MOQ and packaging", product.code === "LH-3672A" ? "MOQ 500 pcs; samples available. Confirm packaging." : "Confirm quantity and packaging for quotation"],
  ];
  const breadcrumbs = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Valves and Hose Fittings", item: `${siteUrl}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${siteUrl}/products/${slug}` },
    ],
  };
  return <>
    <Header />
    <main>
      <section className="product-detail-hero"><div className="container">
        <div className="breadcrumb-trail"><a className="breadcrumb" href="/products">Valves &amp; Hose Fittings</a>{category && <a className="breadcrumb" href={`/products/categories/${category.slug}`}>{category.label}</a>}</div>
        <span className="eyebrow eyebrow-light">{product.material || "Brass"} · {product.family || "Hose reel fitting"}</span>
        <h1>{product.name}</h1><p>{product.code} · {product.summary}</p>
      </div></section>
      <section className="section"><div className="container product-detail-grid">
        <div className="product-detail-gallery" aria-label={`${product.name} product views`}>
          {images.map((image, index) => <figure className={`product-view-card${index === 0 ? " product-view-card--primary" : ""}`} key={image.src}>
            <div className="product-detail-image"><Image src={image.src} alt={image.alt} fill priority={index === 0} sizes={index === 0 ? "(max-width: 820px) 100vw, 45vw" : "(max-width: 820px) 50vw, 22vw"} style={{ objectFit: "contain" }} /></div>
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{index === 0 ? "Catalogue product view" : "Additional product view"}</strong></figcaption>
          </figure>)}
          <p className="engineering-spec-note">Catalogue reference image. Request the current part drawing, detailed views and approved sample before production.</p>
        </div>
        <div className="product-detail-copy">
          <span className="product-code">{product.code}</span>
          <h2>Check the part against your assembly</h2>
          <p>{product.procurementIntro || product.summary}</p>
          <ul>
            <li>Send the mating parts and required inlet and outlet connections.</li>
            <li>Specify the material grade, dimensions, finish and sealing requirements.</li>
            <li>Include your target quantity, market and packaging specification.</li>
          </ul>
          <a className="button" href={`/contact?product=${encodeURIComponent(`${product.code} ${product.name}`)}#quote-form`}>Send Drawing for Review</a>
        </div>
      </div></section>
      <section className="section product-engineering"><div className="container">
        <div className="section-heading split-heading"><div><span className="eyebrow">Catalogue and quotation fields</span><h2>Specifications</h2></div><p>Nominal catalogue sizes do not establish interchangeability. Confirm each mating thread, tolerance and seal against your drawing or sample.</p></div>
        <div className="engineering-spec-table-wrap"><table className="engineering-spec-table"><thead><tr><th scope="col">Field</th><th scope="col">Verified reference / action</th></tr></thead><tbody>
          {specs.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}
        </tbody></table></div>
        <p className="engineering-spec-note">The source catalogue does not supply a dimensioned technical drawing for this model. Request an approved drawing and sample measurements before tooling or production.</p>
      </div></section>
      <section className="section product-customization"><div className="container product-customization-grid">
        <div><span className="eyebrow eyebrow-light">Custom brass and aluminum parts</span><h2>Built to your drawing or sample</h2><p>Cixi Linhao Metal Product Co., Ltd. reviews the required part geometry, material and assembly fit before quoting. Send the current drawing, sample photos or technical requirements.</p></div>
        <div className="customization-panel"><p className="customization-panel-title">Specify for review</p><ul>{customFields.map((field, index) => <li key={field}><span>{String(index + 1).padStart(2, "0")}</span>{field}</li>)}</ul><a className="customization-upload-button" href={`/contact?product=${encodeURIComponent(product.code)}#quote-form`}><span>Upload Your Drawing</span><small>PDF, PNG, JPG or WEBP · Max 10 MB</small></a></div>
      </div></section>
      {product.buyerGuide && <section className="section"><div className="container product-faq"><span className="eyebrow">Buyer compatibility checklist</span><h2>{product.buyerGuide.heading}</h2><p>{product.buyerGuide.introduction}</p><ul>{product.buyerGuide.checklist.map((item) => <li key={item}>{item}</li>)}</ul><a href={product.buyerGuide.guideHref}>{product.buyerGuide.guideLabel} →</a>{product.buyerGuide.relatedLinks?.map((link) => <p key={link.href}><a href={link.href}>{link.label} →</a></p>)}</div></section>}
      <section className="section section-soft"><div className="container"><div className="section-heading"><span className="eyebrow">Related reference models</span><h2>Compare the same product family</h2></div><div className="related-products">{related.map((item) => <a href={`/products/${item.slug}`} key={item.code}><Image src={item.image} alt={item.name} width={620} height={420} sizes="(max-width: 820px) 100vw, 25vw" /><span>{item.code} · {item.material}</span><h3>{item.name}</h3></a>)}</div></div></section>
      <section className="section"><div className="container product-faq"><span className="eyebrow">Before quotation</span><h2>Information we need</h2><details><summary>Which thread standard fits this model?</summary><p>{product.threadSpecification || "The source catalogue gives a nominal size but does not identify the thread standard. Send a mating part or thread drawing so we can confirm it."}</p></details><details><summary>Can I request different dimensions or material?</summary><p>Send your drawing or sample and target requirements. Feasibility and quotation depend on technical review.</p></details></div></section>
    </main>
    <Footer /><WhatsAppFloat />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
  </>;
}
