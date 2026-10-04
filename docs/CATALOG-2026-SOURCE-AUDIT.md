# 2026 valve and hose fitting catalogue migration

Source: user-supplied 22-page scanned PDF, `台州恒鑫阀业 2026样本册(7)(1)(1).pdf`. The PDF is a third-party catalogue, not evidence of Cixi Linhao's factory ownership, certifications, capacity, or completed production. The user requested its valve and hose-fitting models as the reference range, with all public reference codes beginning `LH-`.

## Scope and provenance

- 110 coded valve/fitting models were transcribed from PDF pages 7–21: 84 marked brass and 26 marked aluminum by their individual product caption. An existing LINHAO hose-reel brass swivel remains as one additional fitting reference. Sprayers, spray guns, unrelated tools and two unnumbered fittings were excluded.
- `app/data/catalog-2026.json` keeps each code's material, family, nominal size, specific thread wording where printed, PDF page and extraction rectangle. `scripts/extract-catalog-figures.py` extracts the photographic references from the scanned PDF. Image captions in the original use HX numbers; the page text and enquiry model codes use LH numbers. Replace source imagery with approved LINHAO product photos as they become available.
- The original PDF states `LH-3642` (source HX-3642) is double female. The old site said double male. The new name is corrected and the old URL permanently redirects.
- `LH-3672A` is a plain two-way Y fitting. Do not describe its outlets as independently valved. Its 1/2 and 3/4 GHT options, 500-piece MOQ and sample availability were provided separately by the owner; confirm which size applies to each port for each quoted configuration.
- Model `LH-3635` is captioned brass even though it is on a page with aluminum models; the individual caption controls.
- The four-way source page has some inconsistent two-way caption text. Four outlets are visually shown; confirm individual variants before a technical quote.

## Publication standard

The catalogue states nominal sizes, but for most models does not state thread form, exact dimensions, alloy grade, working pressure, seal, certification, MOQ, price or lead time. The website must request those details rather than infer them. NH to NPT/NPS combinations are stated only for specified aluminum adapter models.

All 110 reference pages are browsable for buyer selection. Existing model URLs, including the owner-confirmed LH-3672A and hose-reel swivel, retain their indexable status and sitemap inclusion. Newly added catalogue-only detail pages use `noindex,follow` and are absent from the sitemap until model-specific engineering details are verified. Collection pages and applicable brass categories remain indexable. This preserves existing search URLs while avoiding a sudden submission of similar, thin new pages.

## Follow-up before expanding indexing

### 2026-10-04 publication review

The owner subsequently confirmed manufacture/supply feasibility for the reference range and permission to publish the catalogue product images. This does not establish ownership of the source factory photographs, certifications, production capacity or engineering test results.

LH-3902–LH-3906 now have distinct procurement copy, explicit two-end connection tables, variant comparisons and model FAQs based on their catalogue NH/NPT/NPS descriptions. These five existing URLs are eligible for indexing and included in the sitemap. Remaining new reference-only models retain `noindex,follow`. Dimensioned drawings, alloy, thread pitch, pressure, seal, MOQ and lead time are still requested rather than invented. The printed NH designation is not automatically presented as GHT compatibility.

1. Confirm which reference models Cixi Linhao can manufacture or supply and provide approved product photographs. Avoid representing the source publisher's factory images or company facts as LINHAO's.
2. For priority SKUs, provide individual drawings or measured dimensions, both mating thread specifications, material grades, seal/pressure/inspection requirements and packaging.
3. Replace reference-only copy with unique buyer-use details and tested product imagery, then remove `noindex` for each approved model and add it to the sitemap.
