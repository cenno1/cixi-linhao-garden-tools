import { TrackedWhatsAppLink } from "./TrackedWhatsAppLink";

export function WhatsAppFloat() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8615088452259";
  const text = encodeURIComponent("Hello Cixi Linhao, I would like to discuss a brass or aluminum valve or hose fitting.");
  return (
    <TrackedWhatsAppLink
      className="whatsapp-float"
      href={`https://wa.me/${number}?text=${text}`}
      ariaLabel="Chat with CIXI LINHAO on WhatsApp"
      placement="floating_button"
    >
      <span className="whatsapp-icon">WA</span>
      <span>WhatsApp</span>
    </TrackedWhatsAppLink>
  );
}
