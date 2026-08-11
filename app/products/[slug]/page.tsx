/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { WhatsAppFloat } from "../../components/WhatsAppFloat";
import { products } from "../../data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://linhaogarden.com";
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  const description = `CIXI LINHAO ${product.summary} B2B supplier with OEM packaging support for global garden product buyers.`;
  return { title: `${product.name} | ${product.code} | OEM Supplier`, description, alternates: { canonical: `/products/${product.slug}` }, openGraph: { title: `${product.name} | ${product.code}`, description, url: `/products/${product.slug}`, images: [{ url: product.image, alt: product.name }] } };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const productUrl = `${siteUrl}/products/${product.slug}`;
  const productImage = new URL(product.image, siteUrl).toString();
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);
  const productSchema = { "@context": "https://schema.org", "@type": "Product", name: product.name, description: product.summary, image: productImage, sku: product.code, category: product.category, brand: { "@type": "Brand", name: "CIXI LINHAO" }, url: productUrl, additionalProperty: product.features.map((feature) => ({ "@type": "PropertyValue", name: "Key feature", value: feature })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` }, { "@type": "ListItem", position: 3, name: product.name, item: productUrl }] };

  return <>
    <Header />
    <main>
      <section className="product-detail-hero"><div className="container"><a className="breadcrumb" href="/products">Products</a><span className="eyebrow eyebrow-light">{product.category}</span><h1>{product.name}</h1><p>{product.summary}</p></div></section>
      <section className="section"><div className="container product-detail-grid"><div className="product-detail-image"><img src={product.image} alt={`${product.name} ${product.code}`} /></div><div className="product-detail-copy"><span className="product-code">{product.code}</span><h2>Product overview</h2><p>{product.summary} Contact our team for current specification options, packing format and an OEM quotation.</p><div className="product-detail-columns"><div><h3>Key features</h3><ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div><div><h3>Typical applications</h3><ul>{product.applications.map((application) => <li key={application}>{application}</li>)}</ul></div></div><a className="button" href={`/contact?product=${encodeURIComponent(`${product.code} ${product.name}`)}`}>Request specifications</a></div></div></section>
      <section className="section section-soft"><div className="container"><div className="section-heading"><span className="eyebrow">Related products</span><h2>Build a coordinated range.</h2></div><div className="related-products">{related.map((item) => <a href={`/products/${item.slug}`} key={item.slug}><img src={item.image} alt={item.name} /><span>{item.code}</span><h3>{item.name}</h3></a>)}</div></div></section>
    </main>
    <Footer /><WhatsAppFloat />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
  </>;
}
