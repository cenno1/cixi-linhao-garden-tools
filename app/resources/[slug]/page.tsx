import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { WhatsAppFloat } from "../../components/WhatsAppFloat";
import { blogPosts } from "../../data/blogs";
import { products } from "../../data/products";

type Props = { params: Promise<{ slug: string }> };
const siteUrl = "https://linhaogarden.com";
const relatedProductSlugs: Record<string, string[]> = {
  "why-garden-hose-connectors-leak": ["brass-connector-set-3601", "brass-water-stop-connector-3604z", "brass-double-male-connector-3641"],
  "how-to-specify-a-durable-hose-nozzle-range": ["brass-twist-hose-nozzles", "watering-nozzles-valves", "brass-shut-off-valves"],
  "choosing-a-garden-hose-splitter": ["brass-two-way-splitter-3672a", "brass-four-way-hose-splitters", "multi-way-hose-splitters"],
  "garden-hose-splitter-leaking-diagnostic-guide": ["brass-two-way-splitter-3672a", "brass-four-way-hose-splitters", "multi-way-hose-splitters"],
};

export async function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const socialImage = (relatedProductSlugs[post.slug] || [])
    .map((productSlug) => products.find((item) => item.slug === productSlug))
    .find(Boolean)?.image;
  return {
    title: `${post.title} | Garden Product Buyer Guide`,
    description: post.description,
    alternates: { canonical: `/resources/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/resources/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      images: socialImage ? [{ url: socialImage, alt: post.title }] : undefined,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: socialImage ? [socialImage] : undefined },
  };
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = (relatedProductSlugs[post.slug] || []).map((productSlug) => products.find((item) => item.slug === productSlug)).filter((item): item is (typeof products)[number] => Boolean(item));
  const decisionGroups = (post.decisionGroups || []).map((group) => ({
    ...group,
    products: group.productSlugs.map((productSlug) => products.find((item) => item.slug === productSlug)).filter((item): item is (typeof products)[number] => Boolean(item)),
  }));
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: `${siteUrl}/resources/${post.slug}`,
    author: { "@type": "Organization", name: "CIXI LINHAO", url: siteUrl },
    publisher: { "@type": "Organization", name: "CIXI LINHAO", logo: { "@type": "ImageObject", url: `${siteUrl}/images/cixi-linhao-logo.png` } },
    image: related[0] ? new URL(related[0].image, siteUrl).toString() : undefined,
  };

  return <>
    <Header />
    <main>
      <section className="article-hero"><div className="container"><span className="eyebrow eyebrow-light">{post.topic}</span><h1>{post.title}</h1><p>{post.description}</p></div></section>
      <article className="article-content container"><p className="article-byline">Published {post.publishedAt} · CIXI LINHAO Buyer Resources</p>
        {post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
        {decisionGroups.length > 0 && <section><span className="eyebrow">Compatibility review</span><h2>Match the leak location to the connection job.</h2><p>Use the catalogue models below as a shortlist, then confirm the actual mating parts before approving a sample or production order.</p><div className="solution-benefits">{decisionGroups.map((group) => <article key={group.problem}><h3>{group.problem}</h3><p>{group.check}</p><p><strong>Catalogue models:</strong> {group.products.map((product, index) => <span key={product.slug}>{index > 0 ? ", " : ""}<a href={`/products/${product.slug}`}>{product.code}</a></span>)}</p><p><strong>Confirm before sampling:</strong> {group.confirm.join("; ")}.</p></article>)}</div></section>}
        {post.commercialLink && <section><span className="eyebrow">Commercial next step</span><h2>{post.commercialLink.label}</h2><p>{post.commercialLink.description}</p><a className="button button-secondary" href={post.commercialLink.href}>Open sourcing page →</a></section>}
        {post.sources && post.sources.length > 0 && <section className="article-sources"><span className="eyebrow">Research sources</span><h2>Discussion signals and technical references.</h2><p>Reddit links identify recurring user questions; engineering guidance comes from the standards, technical and university sources listed below.</p><ol>{post.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer noopener">{source.label}</a><p>{source.note}</p></li>)}</ol></section>}
        {related.length > 0 && <section className="article-products"><span className="eyebrow">Related LH products</span><h2>Products referenced in this guide.</h2><div>{related.map((product) => <a href={`/products/${product.slug}`} key={product.slug}><span>{product.code}</span><strong>{product.name}</strong><em>View product details →</em></a>)}</div></section>}
        <aside><strong>Planning a hose fitting or watering range?</strong><p>Send your target market, product references and expected quantity for an OEM recommendation.</p><a className="button" href="/contact">Request a quote</a></aside>
      </article>
    </main>
    <Footer /><WhatsAppFloat />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
  </>;
}
