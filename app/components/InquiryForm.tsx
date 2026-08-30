"use client";

import { FormEvent, useState } from "react";
import { categories } from "../data/products";
import { trackEvent } from "../lib/analytics";

type Status = { state: "idle" | "loading" | "success" | "error"; message?: string };

const threadStandards = ["GHT", "BSP", "NPT", "Metric", "Other", "Not decided yet"];
const materialOptions = ["Standard brass", "Lead-free brass", "Customer-specified material", "Not decided yet"];
const quantityOptions = ["Sample / evaluation", "500–1,000 pcs", "1,000–5,000 pcs", "5,000–20,000 pcs", "20,000+ pcs", "Not decided yet"];
const targetMarkets = ["USA", "EU", "UK", "Australia", "Other", "Not decided yet"];

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ state: "loading", message: "Preparing your engineering enquiry…" });
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      let attachmentKey = "";
      if (file) {
        const signResponse = await fetch("/api/upload-url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: file.name, type: file.type, size: file.size }),
        });
        if (!signResponse.ok) throw new Error("The attachment service is not configured yet.");
        const signed = await signResponse.json();
        const uploadResponse = await fetch(signed.uploadUrl, {
          method: "PUT",
          headers: { "Content-Type": file.type },
          body: file,
        });
        if (!uploadResponse.ok) throw new Error("Your attachment could not be uploaded.");
        attachmentKey = signed.objectKey;
      }

      const payload = Object.fromEntries(data.entries());
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, attachmentKey }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "We could not send your request.");
      form.reset();
      setFile(null);
      trackEvent("generate_lead", { form_location: compact ? "contact_page" : "homepage_quote_form", product_category: String(payload.productType || "unspecified"), thread_standard: String(payload.threadStandard || "unspecified"), target_market: String(payload.targetMarket || "unspecified") });
      setStatus({ state: "success", message: "Thank you — your engineering enquiry has been received. We will reply within 24 business hours." });
    } catch (error) {
      setStatus({ state: "error", message: error instanceof Error ? error.message : "Please try again or contact us on WhatsApp." });
    }
  }

  return (
    <form id="quote-form" className={`inquiry-form ${compact ? "inquiry-form-compact" : ""}`} onSubmit={handleSubmit}>
      <div className="form-intro">
        <span className="eyebrow">Engineering quote</span>
        <h2>Send your part requirements</h2>
        <p>Share the interface, material, quantity and target market. A drawing, photo or specification helps our team review feasibility and quotation details.</p>
      </div>
      <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-grid">
        <label>
          Name <span>*</span>
          <input name="name" required placeholder="John Smith" autoComplete="name" />
        </label>
        <label>
          Company <span>*</span>
          <input name="company" required placeholder="Your company" autoComplete="organization" />
        </label>
        <label>
          Email <span>*</span>
          <input name="email" type="email" required placeholder="john@company.com" autoComplete="email" />
        </label>
        <label>
          WhatsApp
          <input name="phone" placeholder="+1 234 567 8900" autoComplete="tel" />
        </label>
        <label>
          Product type
          <select name="productType" defaultValue="">
            <option value="" disabled>Select a brass fitting category</option>
            {categories.map((category) => <option key={category.name}>{category.name}</option>)}
            <option>Custom brass component</option>
          </select>
        </label>
        <label>
          Thread standard
          <select name="threadStandard" defaultValue="">
            <option value="" disabled>Select a thread standard</option>
            {threadStandards.map((standard) => <option key={standard}>{standard}</option>)}
          </select>
        </label>
        <label>
          Size
          <input name="size" placeholder={'e.g. 1/2", 3/4", 1" or drawing dimensions'} />
        </label>
        <label>
          Material
          <select name="material" defaultValue="">
            <option value="" disabled>Select a material requirement</option>
            {materialOptions.map((material) => <option key={material}>{material}</option>)}
          </select>
        </label>
        <label>
          Estimated quantity
          <select name="quantity" defaultValue="">
            <option value="" disabled>Select estimated quantity</option>
            {quantityOptions.map((quantity) => <option key={quantity}>{quantity}</option>)}
          </select>
        </label>
        <label>
          Target market
          <select name="targetMarket" defaultValue="">
            <option value="" disabled>Select the target market</option>
            {targetMarkets.map((market) => <option key={market}>{market}</option>)}
          </select>
        </label>
      </div>
      <label className="file-field">
        Upload drawing / photo / specification <small>Optional · PNG, JPG, WEBP or PDF · Max 10 MB</small>
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp,application/pdf"
          onChange={(event) => setFile(event.target.files?.[0] || null)}
        />
        <span>{file ? file.name : "Choose a file or drag it here"}</span>
      </label>
      <label>
        Message
        <textarea name="requirements" rows={5} placeholder="Describe the application, mating part, sealing requirement, finish, logo, packaging or inspection points…" />
      </label>
      <button className="button form-submit" type="submit" disabled={status.state === "loading"}>
        {status.state === "loading" ? "Sending…" : "Get Engineering Quote"}
      </button>
      {status.message && <p className={`form-status ${status.state}`} role="status">{status.message}</p>}
      <p className="form-privacy">Your information is used only to respond to this business inquiry.</p>
    </form>
  );
}
