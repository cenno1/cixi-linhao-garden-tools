"use client";

import type { ReactNode } from "react";
import { trackEvent } from "../lib/analytics";

type TrackedWhatsAppLinkProps = {
  href: string;
  placement: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function TrackedWhatsAppLink({ href, placement, children, className, ariaLabel }: TrackedWhatsAppLinkProps) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      onClick={() => trackEvent("whatsapp_click", { placement })}
    >
      {children}
    </a>
  );
}
