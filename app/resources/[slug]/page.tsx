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
};

export async function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return post ? { title: `${post.title} | Garden Product Buyer Guide`, description: post.description, alternates: { canonical: `/resources/${post.slug}` } } : {};
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = (relatedProductSlugs[post.slug] || []).map((productSlug) => products.find((item) => item.slug === productSlug)).filter((item): item is (typeof products)[number] => Boolean(item));
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
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
        {related.length > 0 && <section className="article-products"><span className="eyebrow">Related LH products</span><h2>Products referenced in this guide.</h2><div>{related.map((product) => <a href={`/products/${product.slug}`} key={product.slug}><span>{product.code}</span><strong>{product.name}</strong><em>View product details →</em></a>)}</div></section>}
        <aside><strong>Planning a hose fitting or watering range?</strong><p>Send your target market, product references and expected quantity for an OEM recommendation.</p><a className="button" href="/contact">Request a quote</a></aside>
      </article>
    </main>
    <Footer /><WhatsAppFloat />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
  </>;
}
