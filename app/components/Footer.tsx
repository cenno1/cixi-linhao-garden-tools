/* eslint-disable @next/next/no-img-element */
export function Footer() {
  const salesEmail = process.env.NEXT_PUBLIC_SALES_EMAIL || "Info@lh-industrial.com";
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><img src="/images/cixi-linhao-logo.png" alt="CIXI LINHAO" /><p>Custom brass garden hose fittings for distributors, OEM buyers and private-label programs.</p></div>
        <div><h3>Products</h3><a href="/products#applications">Quick Connectors</a><a href="/products#applications">Threaded Adapters</a><a href="/products#applications">Hose Splitters</a><a href="/products#applications">Custom Brass Components</a></div>
        <div><h3>Work With Us</h3><a href="/capabilities">Manufacturing Capabilities</a><a href="/solutions/brass-hose-connectors-manufacturer">Brass Connectors</a><a href="/solutions/hose-splitter-supplier">Hose Splitters</a><a href="/contact">Request a Quote</a></div>
        <div><h3>CIXI LINHAO</h3><p>Cixi, Ningbo, Zhejiang, China</p><a href={`mailto:${salesEmail}`}>{salesEmail}</a><p className="footer-note">WhatsApp: +86 150 8845 2259</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} CIXI LINHAO. All rights reserved.</span><span>Built for international B2B trade.</span></div>
    </footer>
  );
}
