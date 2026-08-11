import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { InquiryForm } from "../components/InquiryForm";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export const metadata: Metadata = { title: "Request a Quote", description: "Send CIXI LINHAO your garden product requirements and receive a B2B response within 24 business hours.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8615088452259";
  return <><Header /><main><section className="page-hero contact-hero"><div className="container"><span className="eyebrow eyebrow-light">Request a quote</span><h1>Tell us what your market needs.</h1><p>Product, target quantity and packaging context help us give you a useful response faster.</p></div></section><section className="section"><div className="container contact-layout"><div className="contact-aside"><span className="eyebrow">Direct contact</span><h2>Prefer an instant conversation?</h2><p>Send a short WhatsApp message with your company, market and product interest. Our team will continue the discussion there.</p><a className="button whatsapp-button" href={`https://wa.me/${number}?text=${encodeURIComponent("Hello CIXI LINHAO, I would like to discuss a B2B garden product inquiry.")}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a><div className="contact-expect"><strong>What happens next</strong><span>1. We review your requirements</span><span>2. We clarify specifications</span><span>3. We propose products and next steps</span></div></div><InquiryForm compact /></div></section></main><Footer /><WhatsAppFloat /></>;
}
