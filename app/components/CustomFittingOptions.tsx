import { customFittingOptions } from "../data/custom-manufacturing";

export function CustomFittingOptions() {
  return <section className="section" id="custom-options"><div className="container">
    <div className="section-heading split-heading"><div><span className="eyebrow">OEM brass fitting specification</span><h2>What can be customized?</h2></div><p>Use this checklist to turn a garden hose fitting reference into a manufacturing brief. Final options follow the approved drawing and sample.</p></div>
    <div className="engineering-spec-table-wrap"><table className="engineering-spec-table"><thead><tr><th scope="col">Project requirement</th><th scope="col">What to send</th><th scope="col">What we review</th></tr></thead><tbody>{customFittingOptions.map((option) => <tr key={option.field}><th scope="row">{option.field}</th><td>{option.input}</td><td>{option.review}</td></tr>)}</tbody></table></div>
    <p><a className="text-link" href="/contact?product=Custom%20Brass%20Fittings#quote-form">Send your custom brass fitting requirements →</a></p>
  </div></section>;
}
