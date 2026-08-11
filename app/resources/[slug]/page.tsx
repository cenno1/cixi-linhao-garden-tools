import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { WhatsAppFloat } from "../../components/WhatsAppFloat";
import { blogPosts } from "../../data/blogs";

type Props = { params: Promise<{ slug: string }> };

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

  return <>
    <Header />
    <main>
      <section className="article-hero"><div className="container"><span className="eyebrow eyebrow-light">{post.topic}</span><h1>{post.title}</h1><p>{post.description}</p></div></section>
      <article className="article-content container">
        {post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
        <aside><strong>Planning a hose fitting or watering range?</strong><p>Send your target market, product references and expected quantity for an OEM recommendation.</p><a className="button" href="/contact">Request a quote</a></aside>
      </article>
    </main>
    <Footer /><WhatsAppFloat />
  </>;
}
