/* eslint-disable @next/next/no-img-element */
export function Footer() {
  const salesEmail = process.env.NEXT_PUBLIC_SALES_EMAIL || "Info@lh-industrial.com";
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><img src="/images/cixi-linhao-logo.png" alt="CIXI LINHAO" /><p>Cixi Linhao Metal Product Co., Ltd. · Custom brass and aluminum valves and hose fittings.</p></div>
        <div><h3>Products</h3><a href="/products/categories/brass-quick-connectors">Brass Quick Connectors</a><a href="/products/categories/brass-hose-adapters">Brass Hose Adapters</a><a href="/products/categories/brass-hose-splitters">Brass Hose Splitters</a><a href="/products/materials/aluminum">Aluminum Fittings</a></div>
        <div><h3>Work With Us</h3><a href="/capabilities">Custom Brass Fittings Manufacturing</a><a href="/solutions/brass-hose-connectors-manufacturer">Garden Hose Connector Sourcing</a><a href="/products/categories/hose-reel-brass-fittings">Hose Reel Fittings</a><a href="/contact">Request an OEM Quote</a></div>
        <div><h3>Cixi Linhao Metal Product Co., Ltd.</h3><p>Cixi, Ningbo, Zhejiang, China</p><a href={`mailto:${salesEmail}`}>{salesEmail}</a><p className="footer-note">WhatsApp: +86 150 8845 2259</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} CIXI LINHAO. All rights reserved.</span><span>Built for international B2B trade.</span></div>
    </footer>
  );
}
