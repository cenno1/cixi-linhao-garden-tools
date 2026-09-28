import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { InquiryForm } from "../components/InquiryForm";
import { TrackedWhatsAppLink } from "../components/TrackedWhatsAppLink";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export const metadata: Metadata = { title: "Request an Engineering Quote", description: "Send Cixi Linhao Metal Product Co., Ltd. your valve or hose-fitting drawing, material, thread and quantity requirements.", alternates: { canonical: "/contact" } };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const { product } = await searchParams;
  const initialProduct = (product || "").slice(0, 160);
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8615088452259";
  return <><Header /><main><section className="page-hero contact-hero"><div className="container"><span className="eyebrow eyebrow-light">Engineering quotation</span><h1>Send your valve or fitting drawing.</h1><p>Include the target material, mating connection, nominal size, quantity and packaging requirements. A sample photo can also start the review.</p></div></section><section className="section"><div className="container contact-layout"><div className="contact-aside"><span className="eyebrow">Direct contact</span><h2>Discuss the part on WhatsApp</h2><p>Send the LH reference code or your drawing with the intended application and target market.</p><TrackedWhatsAppLink className="button whatsapp-button" href={`https://wa.me/${number}?text=${encodeURIComponent("Hello Cixi Linhao, I would like a quote for a brass or aluminum valve or hose fitting.")}`} placement="contact_page_primary">Chat on WhatsApp</TrackedWhatsAppLink><div className="contact-expect"><strong>What happens next</strong><span>1. We review the drawing or sample</span><span>2. We clarify material, threads and tolerances</span><span>3. We discuss a sample and quotation</span></div></div><InquiryForm compact initialProduct={initialProduct} /></div></section></main><Footer /><WhatsAppFloat /></>;
}
