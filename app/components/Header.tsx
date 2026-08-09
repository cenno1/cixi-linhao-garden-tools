/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const navItems = [
  ["Products", "/products"],
  ["OEM / ODM", "/about#oem"],
  ["Quality", "/about#quality"],
  ["Resources", "/resources"],
  ["About", "/about"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="top-note">
        <div className="container top-note-inner">
          <span>Garden tools & watering solutions for global buyers</span>
          <a href="/contact">Response within 24 business hours</a>
        </div>
      </div>
      <div className="container nav-shell">
        <Link className="brand" href="/" aria-label="CIXI LINHAO home">
          <img src="/images/cixi-linhao-logo.png" alt="CIXI LINHAO" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>
        <a className="button button-small nav-cta" href="/contact">Request a Quote</a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a href={href} key={href}>{label}</a>
            ))}
            <a className="button" href="/contact">Request a Quote</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
