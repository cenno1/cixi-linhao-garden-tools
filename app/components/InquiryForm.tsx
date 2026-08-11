"use client";

import { FormEvent, useState } from "react";
import { categories } from "../data/products";
import { trackEvent } from "../lib/analytics";

type Status = { state: "idle" | "loading" | "success" | "error"; message?: string };

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ state: "loading", message: "Sending your request…" });
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
      trackEvent("generate_lead", { form_location: compact ? "contact_page" : "homepage_quote_form", product_category: String(payload.productType || "unspecified") });
      setStatus({ state: "success", message: "Thank you — your request has been received. We will reply within 24 business hours." });
    } catch (error) {
      setStatus({ state: "error", message: error instanceof Error ? error.message : "Please try again or contact us on WhatsApp." });
    }
  }

  return (
    <form className={`inquiry-form ${compact ? "inquiry-form-compact" : ""}`} onSubmit={handleSubmit}>
      <div className="form-intro">
        <span className="eyebrow">Get a free quote</span>
        <h2>Tell us what you need</h2>
        <p>No commitment and no spam. Share the essentials and our export team will respond within 24 business hours.</p>
      </div>
      <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-grid">
        <label>
          Your name <span>*</span>
          <input name="name" required placeholder="John Smith" autoComplete="name" />
        </label>
        <label>
          Company name <span>*</span>
          <input name="company" required placeholder="Your company" autoComplete="organization" />
        </label>
        <label>
          Email address <span>*</span>
          <input name="email" type="email" required placeholder="john@company.com" autoComplete="email" />
        </label>
        <label>
          WhatsApp / phone <span>*</span>
          <input name="phone" required placeholder="+1 234 567 8900" autoComplete="tel" />
        </label>
        <label>
          Product type <span>*</span>
          <select name="productType" required defaultValue="">
            <option value="" disabled>Select a product category</option>
            {categories.map((category) => <option key={category.name}>{category.name}</option>)}
            <option>Custom / mixed product program</option>
          </select>
        </label>
        <label>
          Estimated quantity <span>*</span>
          <select name="quantity" required defaultValue="">
            <option value="" disabled>Select estimated quantity</option>
            <option>Sample / evaluation</option>
            <option>500–1,000 pcs</option>
            <option>1,000–5,000 pcs</option>
            <option>5,000–20,000 pcs</option>
            <option>20,000+ pcs</option>
            <option>Not decided yet</option>
          </select>
        </label>
      </div>
      <label>
        Requirements
        <textarea name="requirements" rows={5} placeholder="Product codes, target market, materials, colors, packaging, certifications or delivery timing…" />
      </label>
      <label className="file-field">
        Reference image / specification <small>Optional · PNG, JPG, WEBP or PDF · Max 10 MB</small>
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp,application/pdf"
          onChange={(event) => setFile(event.target.files?.[0] || null)}
        />
        <span>{file ? file.name : "Choose a file or drag it here"}</span>
      </label>
      <button className="button form-submit" type="submit" disabled={status.state === "loading"}>
        {status.state === "loading" ? "Sending…" : "Send My Request"}
      </button>
      {status.message && <p className={`form-status ${status.state}`} role="status">{status.message}</p>}
      <p className="form-privacy">Your information is used only to respond to this business inquiry.</p>
    </form>
  );
}
