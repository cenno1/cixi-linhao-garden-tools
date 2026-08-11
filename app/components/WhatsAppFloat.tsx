"use client";

import { trackEvent } from "../lib/analytics";

export function WhatsAppFloat() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8615088452259";
  const text = encodeURIComponent("Hello CIXI LINHAO, I would like to discuss garden tools and watering products.");
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${number}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with CIXI LINHAO on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { placement: "floating_button" })}
    >
      <span className="whatsapp-icon">WA</span>
      <span>WhatsApp</span>
    </a>
  );
}
