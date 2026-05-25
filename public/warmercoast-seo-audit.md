# WarmerCoast.com — SEO + Growth Audit

**Site:** https://warmercoast.com
**Prepared:** 25 May 2026
**Verticals:** UK→Spain / UK→Portugal / UK→Gibraltar relocation (YMYL: tax, immigration, finance)
**Method:** Live crawl of the site + SERP reconnaissance (People Also Ask, autocomplete, competitor pages). No GSC/Ahrefs — all volume/competition figures are confidence-tagged proxy estimates.

**Confidence key:** HIGH = multiple corroborating signals · MED = one strong signal · LOW = informed intuition.

---

## Executive summary (read this to your co-founder in 60 seconds)

WarmerCoast is, structurally, already in the top 5% of relocation sites: a proper three-tier hub-and-spoke (country pillar → topic sub-pillar → deep-dive), genuinely sourced content citing primary government material, 9 calculators, clean schema-friendly Next.js build, and an editorial voice that beats every law firm and removals company in the SERP on usefulness. **The single biggest opportunity is that almost every competitor ranking for "move to [country] from UK" is a law firm, wealth manager or removals company with thin, sales-funnel content and no UK-specific editorial depth — WarmerCoast can out-rank them by being the one genuinely useful, sourced, 2026-accurate, British-perspective resource, and the Gibraltar EU-treaty moment is a once-in-20-years organic landgrab nobody else is targeting at decision-stage.** The single biggest risk is **keyword cannibalisation plus a sitewide technical bug**: the same head terms (Beckham Law, D7, Cat 2) are targeted by three pages each (sub-pillar deep-dive + blog post + calculator), and every page ships an identical `og:url` pointing at the homepage — which, combined with placeholder testimonials and "demo Stripe data" labels still live on the site, risks both diluting ranking signals and undermining the E-E-A-T the whole proposition rests on. Fix the technical foundation and cannibalisation in weeks 1–2, then pour content budget into the treaty moment and the unoccupied UK-qualified comparison space.

---

## PHASE 1 — Full site crawl & inventory

### 1.1 Page inventory

Crawled via the homepage link graph and internal nav. The site uses a 3-tier IA: **pillar** (`/spain`) → **sub-pillar** (`/spain/tax-residency`) → **deep-dive** (`/spain/tax-residency/beckham-law`). Word counts are estimates from rendered content.

| # | URL | Page type | H1 (abbreviated) | Inferred target keyword | Words (est.) | Int. links in/out (est.) | Schema present? | Issues |
|---|-----|-----------|------------------|-------------------------|--------------|--------------------------|-----------------|--------|
| 1 | `/` | Homepage | Move to Spain, Portugal or Gibraltar. Without the £20k mistakes. | move to spain portugal gibraltar from uk | ~1,400 | high / ~25 | Likely Organization; **no visible Product/FAQ** | `og:url`=homepage (correct here only); placeholder testimonials labelled "demo"; "Demo activity, real Stripe data soon" live on page |
| 2 | `/spain` | Pillar | Move to Spain from the UK. | move to spain from uk | ~1,900 | high / ~15 | FAQ candidate (not confirmed) | `og:url` wrong (points to `/`); FAQ not marked up |
| 3 | `/portugal` | Pillar | Move to Portugal from the UK. | move to portugal from uk | ~1,800 | high / ~15 | FAQ candidate | `og:url` wrong; FAQ not marked up |
| 4 | `/gibraltar` | Pillar | Move to Gibraltar from the UK. | move to gibraltar from uk | ~2,000 | high / ~15 | FAQ candidate | `og:url` wrong; FAQ says "8 modules" but homepage says Gibraltar = 6 modules (**content conflict**) |
| 5 | `/spain/visa-guide` | Sub-pillar | (not crawled — inferred live) | spain visa uk citizens | ~1,500? | med / ~10 | ? | Confirm exists / not orphan |
| 6 | `/spain/tax-residency` | Sub-pillar | Spanish tax residency for UK movers | spain tax residency uk | ~1,800 | med / ~12 | Article + author block present | `og:url` wrong |
| 7 | `/spain/banking` | Sub-pillar | (inferred) | spanish bank account uk citizen | ~1,200? | med / ~8 | ? | Confirm exists |
| 8 | `/spain/cost-of-living` | Sub-pillar | (inferred) | cost of living spain vs uk | ~1,400? | med / ~8 | ? | Confirm exists |
| 9 | `/spain/tax-residency/183-day-rule` | Deep-dive | (inferred live) | spain 183 day rule | ~1,200? | med / ~6 | ? | Cannibalisation w/ `/calculators/residency-timeline` |
| 10 | `/spain/tax-residency/beckham-law` | Deep-dive | Beckham Law in 2026: the mechanics... | beckham law spain | ~1,500 | med / ~10 | Article + author | **Cannibalises** `/blog/spain-beckham-law-2026-guide` + `/calculators/beckham-law` |
| 11 | `/spain/tax-residency/modelo-720` | Deep-dive | (inferred) | modelo 720 | ~1,100? | med / ~6 | ? | Confirm exists |
| 12 | `/spain/tax-residency/uk-pensions` | Deep-dive | (inferred) | uk pension spain tax | ~1,100? | med / ~6 | ? | Confirm; cannibalises `/calculators/pension-transfer` |
| 13 | `/spain/tax-residency/cgt-on-uk-property` | Deep-dive | (inferred) | cgt uk property after moving spain | ~1,100? | med / ~6 | ? | Confirm exists |
| 14 | `/spain/tax-residency/isa-treatment` | Deep-dive | (inferred) | uk isa when moving to spain | ~1,000? | med / ~6 | ? | Confirm exists |
| 15 | `/portugal/visa-guide` | Sub-pillar | (inferred) | portugal visa uk citizens | ~1,500? | med / ~10 | ? | Confirm exists |
| 16 | `/portugal/tax` | Sub-pillar | (inferred) | portugal tax uk residents | ~1,500? | med / ~10 | ? | Confirm exists |
| 17 | `/portugal/banking` | Sub-pillar | (inferred) | portugal bank account nif | ~1,200? | med / ~8 | ? | Confirm exists |
| 18 | `/portugal/cost-of-living` | Sub-pillar | (inferred) | cost of living portugal vs uk | ~1,400? | med / ~8 | ? | Confirm exists |
| 19 | `/gibraltar/residency` | Sub-pillar | (inferred) | gibraltar residency cat 2 | ~1,500? | med / ~10 | ? | Confirm exists |
| 20 | `/gibraltar/tax` | Sub-pillar | (inferred) | gibraltar tax cat 2 | ~1,500? | med / ~10 | ? | Confirm exists |
| 21 | `/gibraltar/frontier-worker` | Sub-pillar | (inferred live; linked from homepage banner) | gibraltar frontier worker spain | ~1,500? | high / ~10 | ? | Highest-timeliness page; confirm depth |
| 22 | `/gibraltar/banking` | Sub-pillar | (inferred) | gibraltar bank account | ~1,200? | med / ~8 | ? | Confirm exists |
| 23 | `/blog` | Blog index | Long-form, sourced articles | (index) | ~300 | high / ~7 | ItemList candidate | `og:url` wrong; only 7 posts |
| 24 | `/blog/gibraltar-cat-2-application-2026-complete-guide` | Blog post | Gibraltar Cat 2 2026: Complete UK Application Guide | gibraltar cat 2 application | ~3,000 (14 min) | med / ~8 | Article candidate | **Cannibalises** `/gibraltar/residency` + `/gibraltar/tax` |
| 25 | `/blog/spain-non-lucrative-visa-british-retirees-2026` | Blog post | Spain Non-Lucrative Visa 2026: UK Retiree Guide | spain non lucrative visa | ~2,500 (12 min) | med / ~8 | Article candidate | Cannibalises `/spain/visa-guide` |
| 26 | `/blog/portugal-d7-visa-british-retirees-2026` | Blog post | Portugal D7 Visa 2026: Complete UK Retiree Guide | portugal d7 visa | ~2,300 (11 min) | med / ~8 | Article candidate | Cannibalises `/portugal/visa-guide` |
| 27 | `/blog/spain-digital-nomad-visa-2026-complete-guide` | Blog post | Spain Digital Nomad Visa 2026: UK Remote Worker Guide | spain digital nomad visa | ~2,300 (11 min) | med / ~8 | Article candidate | Cannibalises `/spain/visa-guide` |
| 28 | `/blog/portugal-ifici-2026-after-nhr` | Blog post | Portugal IFICI 2026: NHR Successor | portugal ifici nhr 2.0 | ~2,500 (12 min) | med / ~8 | Article candidate | Cannibalises `/portugal/tax` |
| 29 | `/blog/spain-beckham-law-2026-guide` | Blog post | Spain Beckham Law 2026: Six-Year 24% Flat Tax | beckham law | ~2,300 (11 min) | med / ~8 | Article candidate | **3-way cannibalisation** (see #10, calculator) |
| 30 | `/blog/gibraltar-uk-eu-treaty-2026` | Blog post | Gibraltar UK-EU Treaty 2026: UK Citizens' Guide | gibraltar eu treaty 2026 | ~1,900 (9 min) | med / ~8 | Article candidate | Highest-opportunity post; cannibalises `/gibraltar/frontier-worker` |
| 31 | `/calculators` | Tool index | Free relocation calculators | relocation calculator uk | ~300 | high / ~10 | ItemList candidate | **Copy conflict**: says "Nine" tools in body, homepage label says "Eight"; `og:url` wrong |
| 32 | `/calculators/compare-countries` | Tool | Spain vs Portugal vs Gibraltar | spain vs portugal vs gibraltar | ~500+tool | high / ~5 | SoftwareApplication candidate | Could own comparison head term — needs editorial wrapper |
| 33 | `/calculators/beckham-law` | Tool | Beckham Law calculator | beckham law calculator | ~500+tool | high / ~5 | ? | Cannibalisation cluster (see #10, #29) |
| 34 | `/calculators/cost-of-living` | Tool | Cost of living comparator | cost of living calculator spain | ~500+tool | med / ~5 | ? | Numbeo/ONS sourcing is a link hook |
| 35 | `/calculators/visa-eligibility` | Tool | Visa eligibility quiz | visa eligibility checker spain | ~400+tool | med / ~5 | ? | Duplicate of `/quiz`? Confirm |
| 36 | `/calculators/pension-transfer` | Tool | Pension transfer estimator | qrops pension transfer calculator | ~500+tool | med / ~5 | ? | Cannibalises `/spain/tax-residency/uk-pensions` |
| 37 | `/calculators/property-tax` | Tool | Property purchase tax | spain property tax calculator | ~500+tool | med / ~5 | ? | ITP/IBI/plusvalía/IMI — strong tool |
| 38 | `/calculators/school-cost` | Tool | International school cost | international school fees spain | ~400+tool | low / ~5 | ? | Thin niche; confirm data |
| 39 | `/calculators/residency-timeline` | Tool | Residency timeline | 183 day rule calculator | ~400+tool | med / ~5 | ? | Cannibalises `/spain/tax-residency/183-day-rule` |
| 40 | `/calculators/bank-comparator` | Tool | Bank comparator | best bank spain uk expats | ~400+tool | low / ~5 | ? | **Not linked from homepage footer** (orphan risk) |
| 41 | `/quiz` | Tool/funnel | (12-q quiz) | which country should i move to | ~300+tool | high / ~3 | ? | Possible duplicate of `/calculators/visa-eligibility` |
| 42 | `/about` | About | Why this exists / Dominic Roworth | warmercoast about | ~600? | high / ~3 | Person/Author candidate | Critical E-E-A-T page — confirm credentials depth |
| 43 | `/reviews` | Social proof | 247 reviews | warmercoast reviews | ~800? | high / ~3 | **Review schema risk** — see issue below | Testimonials are placeholders ("demo") — do NOT mark up as Review schema until real |
| 44 | `/contact` | Utility | Contact | — | ~200? | low / ~2 | — | — |
| 45 | `/login` | Account | Log in | — | thin | — | noindex expected | Confirm noindex |
| 46 | `/playbook/spain` | Product/sales | (sales page £397) | spain relocation guide buy | ~1,000? | high / ~5 | **Product schema candidate** | Confirm Product + Offer + price schema |
| 47 | `/playbook/portugal` | Product/sales | (sales page £397) | portugal relocation guide buy | ~1,000? | high / ~5 | Product candidate | As above |
| 48 | `/playbook/gibraltar` | Product/sales | (sales page £497) | gibraltar relocation guide buy | ~1,000? | high / ~5 | Product candidate | As above |
| 49 | `/privacy` | Legal | Privacy | — | — | low | noindex optional | — |
| 50 | `/terms` | Legal | Terms | — | — | low | — | — |
| 51 | `/refund-policy` | Legal | Refund policy | — | — | low | — | — |
| 52 | `/disclaimer` | Legal | Disclaimer | — | — | low | — | YMYL trust asset — keep indexed |

**Confirmed live & crawled:** #1, 2, 3, 4, 6, 10, 23, 31. **Inferred from internal links** (need a 5-minute confirm-they-resolve check): everything marked "(inferred)". None returned a 404 in testing, but confirm the deep-dive tree (#9, 11–14) actually renders unique content rather than 301-ing to the sub-pillar.

### 1.2 Crawl issues

1. **Sitewide `og:url` bug (HIGH severity, sitewide).** Every interior page ships `og:url: https://warmercoast.com` (the homepage) regardless of the actual URL. Confirmed on `/spain`, `/portugal`, `/gibraltar`, `/blog`, `/spain/tax-residency`, `/spain/tax-residency/beckham-law`, `/calculators`. The `canonical` tag is correct on each page, so this is not catastrophic, but Open Graph URL mismatch confuses social shares and some crawlers, and signals a templating bug that likely also affects other dynamic OG fields. **Every shared link on social will resolve previews to the homepage.**

2. **Placeholder testimonials live in production (HIGH severity, trust/YMYL).** The homepage and `/reviews` carry six named testimonials ("Sarah W., Manchester → Valencia" etc.) with a disclaimer: "Placeholder testimonials with realistic UK→Iberia move patterns." The footer review widget says "Demo activity, real Stripe data soon." For a YMYL site whose entire pitch is *honesty and sourcing*, fabricated-but-realistic testimonials are an E-E-A-T and trust liability, and a Google "fake reviews" policy risk if ever marked up as Review schema. The "★ 4.9 verified buyer rating" and "All 247 reviews" claims are unverifiable today.

3. **"As referenced in" media logos (MED severity).** Homepage shows "Financial Times, Olive Press, The Times, iNews, GovUK Forum." If these are aspirational rather than actual press mentions, that is a misrepresentation risk on a trust-led site. Verify each is a real citation with a linkable source, or remove.

4. **Orphan-page risk: `/calculators/bank-comparator` (MED).** It appears on `/calculators` (as the 9th tool) but is absent from the homepage footer's "Free tools" list (which shows 8). Ensure it is internally linked from `/spain/banking`, `/portugal/banking`, `/gibraltar/banking` and the footer.

5. **Possible duplicate funnel pages (MED): `/quiz` vs `/calculators/visa-eligibility`.** Both are described as "12 questions, branching logic, recommendation by country." If they are the same tool on two URLs, that is self-cannibalisation — canonicalise one to the other or differentiate.

6. **Module-count content conflict (LOW but corrodes trust).** Homepage: Gibraltar = "6 modules." `/gibraltar` page CTA: "8 sequenced modules." Spain/Portugal pages also say "8 modules" in the CTA while the homepage says 8 and 7 respectively. Pick the true number per playbook and make it consistent everywhere — buyers and Google both notice.

7. **Tool-count copy conflict (LOW).** `/calculators` body says "Nine interactive tools"; homepage section header says "Eight free calculators"; there are 9 listed. Align to 9.

### 1.3 Information-architecture issues

8. **Pillars under-link to their deep-dive tree (MED).** `/spain` links to its four sub-pillars but the *deep-dives* (183-day-rule, modelo-720, etc.) are only reachable from `/spain/tax-residency`. That is acceptable hierarchically, but the pillar should also surface 2–3 highest-value deep-dives directly (e.g. link `/spain/tax-residency/beckham-law` from the `/spain` Beckham section) to flatten click depth and push link equity to money topics.

9. **Calculators are content-thin and weakly integrated (MED).** Each tool is a great link magnet but likely <500 words of indexable text around the widget. They should each carry a 600–900-word sourced explainer beneath the tool (methodology, assumptions, worked example) and link up to the relevant sub-pillar — otherwise they rank poorly for the "[x] calculator" terms despite being the best tool in the niche.

10. **No reciprocal blog→pillar canonical strategy (HIGH — this is the cannibalisation engine).** Six of the seven blog posts directly duplicate the intent of a sub-pillar or deep-dive (Beckham, D7, NLV, DNV, IFICI, Cat 2, treaty). Right now Google has to choose between, e.g., `/spain/tax-residency/beckham-law`, `/blog/spain-beckham-law-2026-guide`, and `/calculators/beckham-law` for "beckham law." See Phase 1.5 for the fix.

11. **No UK-side hub (MED, big opportunity).** Everything is destination-first. There is no `/uk/` cluster for pre-decision UK traffic (statutory residence test, split-year treatment, P85, selling UK home before moving). This is where the highest-intent pre-movers search *first*. Covered in Phase 3.

### 1.4 Technical SEO issues

12. **Schema markup appears largely absent (HIGH).** No visible JSON-LD for: `FAQPage` (every pillar + the homepage has a real FAQ block — easy rich-result win), `Product`/`Offer` (the three £397/£497 playbooks — should carry price, availability, currency GBP), `Article` + `author` (blog posts and deep-dives), `BreadcrumbList` (the 3-tier IA is perfect for breadcrumb rich results), `SoftwareApplication` or `WebApplication` (calculators), `Organization` + `sameAs` (link Dominic's LinkedIn). Confirm via Rich Results Test; if missing, this is the single highest-leverage technical fix.

13. **Hero images are large and likely hurt LCP (MED).** Homepage `hero-landing.jpg`, `/spain` `cadiz-coastline.png`, `/gibraltar` `gibraltar.jpg` are served at up to `w=3840 q=85` via the Next image optimiser. A `.png` coastline photo (`cadiz-coastline.png`) is the red flag — photos should be WebP/AVIF, not PNG. Audit LCP on mobile; set `priority` on the hero only, lazy-load everything below the fold, and convert photographic PNGs to WebP.

14. **OG image is a single generic default sitewide (MED).** Every page uses `/og/default.png`. Per-page OG images (esp. for blog posts and the treaty page) materially lift social CTR. At minimum, country-level OG images.

15. **`meta-twitter:image` / `og:image` are PNG (LOW).** Fine, but confirm dimensions are 1200×630 and under ~1MB.

16. **Sitemap + robots not verifiable in this crawl (MED — confirm).** Could not fetch `/sitemap.xml` or `/robots.txt` directly (fetch tool restricted to discovered URLs). **Action:** confirm `sitemap.xml` exists, lists all ~52 URLs, excludes `/login` and thank-you/account pages, and is referenced in `robots.txt`; confirm `robots.txt` does not accidentally block `/calculators/` or `/_next/`.

17. **Canonicals are correct (GOOD).** Each crawled page self-canonicalises correctly — keep this.

### 1.5 On-page issues

18. **Several title tags exceed ~60 characters (MED).** Examples: `/gibraltar` → "Move to Gibraltar from the UK 2026 | Cat 2, HEPSS, EU treaty border | WarmerCoast" (~78 chars, truncates in SERP); `/spain/tax-residency` → "Spain Tax Residency 2026 | Beckham Law, Modelo 720, 183-Day Rule for UK Movers | WarmerCoast" (~92 chars). Trim to ≤60 incl. brand, front-load the keyword. (See Phase 5 Week 3–4 for rewrites.)

19. **Meta descriptions occasionally >155 chars (LOW).** `/gibraltar` description is ~190 chars. Trim.

20. **Keyword cannibalisation (HIGH) — the cannibalisation map:**

| Head keyword | Competing internal URLs | Recommended canonical winner | Action for the losers |
|--------------|------------------------|------------------------------|-----------------------|
| beckham law | `/spain/tax-residency/beckham-law` · `/blog/spain-beckham-law-2026-guide` · `/calculators/beckham-law` | **`/spain/tax-residency/beckham-law`** (evergreen deep-dive) | Repoint the blog post to a *narrower angle* ("Beckham Law worked example: £150k saves €205k") and link it to the deep-dive; keep the calculator but target "beckham law calculator" specifically and link up |
| spain non-lucrative visa | `/spain/visa-guide` · `/blog/spain-non-lucrative-visa-british-retirees-2026` | **blog post** (it's the more specific NLV asset) | Make `/spain/visa-guide` the route-comparison hub that links down to the NLV post; don't both target "non lucrative visa" as primary |
| spain digital nomad visa | `/spain/visa-guide` · `/blog/spain-digital-nomad-visa-2026-complete-guide` | **blog post** | As above |
| portugal d7 visa | `/portugal/visa-guide` · `/blog/portugal-d7-visa-british-retirees-2026` | **blog post** | As above |
| portugal ifici / nhr | `/portugal/tax` · `/blog/portugal-ifici-2026-after-nhr` | **blog post** | `/portugal/tax` becomes the broad IRS/tax hub, links down |
| gibraltar cat 2 | `/gibraltar/residency` · `/gibraltar/tax` · `/blog/gibraltar-cat-2-application-2026-complete-guide` | **blog post** (the 3,000-word application guide) | `/gibraltar/residency` covers all routes (Cat2/HEPSS/ordinary) and links down to the Cat 2 application post |
| gibraltar eu treaty | `/gibraltar/frontier-worker` · `/blog/gibraltar-uk-eu-treaty-2026` | **blog post** for "treaty"; **sub-pillar** for "frontier worker" | Differentiate intent: treaty = the news/explainer; frontier-worker = the evergreen how-to |
| 183 day rule | `/spain/tax-residency/183-day-rule` · `/calculators/residency-timeline` | **deep-dive** for the rule; **calculator** for "183 day rule calculator" | Distinct intents — just cross-link and differentiate titles |

**Principle:** one primary keyword owner per query; everything else gets a *narrower* long-tail primary and links up to the owner. This is the highest-ROI on-page fix on the site.

### 1.6 Top 10 quick wins (each ≤2 hours)

1. **Fix the `og:url` template** so each page emits its own canonical URL in Open Graph. (Dev, ~30 min, sitewide.)
2. **Add `FAQPage` JSON-LD** to the homepage + 3 pillars (the FAQ content already exists on-page). Eligible for FAQ rich results immediately. (~90 min.)
3. **Add `Product` + `Offer` schema** to the three `/playbook/*` pages (price, GBP, availability, brand). (~90 min.)
4. **Add `BreadcrumbList` schema** sitewide — the 3-tier IA makes this trivial and earns breadcrumb SERP display. (~60 min.)
5. **Resolve the testimonial liability:** either relabel clearly as "illustrative examples" in plain sight (not buried) or replace with 3–5 real reviews; never mark placeholders as Review schema. (~60 min decision + copy.)
6. **Trim the 8 over-length title tags** to ≤60 chars, keyword front-loaded (list in Phase 5). (~60 min.)
7. **Fix the module-count and tool-count conflicts** (6 vs 8 modules; 8 vs 9 tools). (~30 min.)
8. **Internally link `/calculators/bank-comparator`** from the three `/banking` sub-pillars + footer to de-orphan it. (~30 min.)
9. **Add per-country OG images** (3 images) so social shares of pillars/posts don't all preview the homepage. (~90 min incl. design.)
10. **Verify and submit `sitemap.xml`** in GSC; confirm `robots.txt` isn't blocking `/calculators/` or `/_next/image`. (~45 min.)

---

## PHASE 2 — Keyword opportunity map

Volume bands are UK-specific proxy estimates (no paid tool). **Reasoning** column states the proxy signal. Competition reflects who actually ranks in the live SERPs I checked: the field is overwhelmingly **law firms, wealth managers, immigration consultancies and removals companies** — high domain authority but thin, sales-funnel, often non-UK-specific content. WarmerCoast's win condition is almost always the same: *be the genuinely useful, sourced, 2026-accurate, British-perspective answer the lawyers won't write for free.* I state the specific reason per row only where it differs.

Intent key: I = informational · C = commercial · T = transactional · N = navigational.

### 2.1 SPAIN (38 keywords)

| # | Keyword / query | Vol (UK) | Reasoning | Who ranks 1–5 now | Difficulty | Intent | Recommended slug | Content angle | Internal links |
|---|----------------|----------|-----------|-------------------|------------|--------|------------------|---------------|----------------|
| S1 | move to spain from uk | HIGH | Removals + law firms all target it; huge evergreen | White&Co, Tejada, IAS, adviceforexpats, Kael Tripton | High | C/I | `/spain` (have) | Keep pillar; add "2026 checklist" section to match Tejada | from `/`, all sub-pillars |
| S2 | moving to spain from uk 2026 | HIGH | Year-stamped, refreshes annually | Tejada, White&Co | Med | I | `/spain` (have) | Date-stamp, "what changed in 2026" box | blog treaty post |
| S3 | spain digital nomad visa | HIGH | Mature high-volume term | Del Canto, immigration firms | Med-High | C/I | `/blog/spain-digital-nomad-visa-2026...` (have) | Own w/ employee-vs-self-employed worked example | `/spain/visa-guide`, beckham deep-dive |
| S4 | spain beckham law | HIGH | "Holy grail" term per Del Canto | law/wealth firms | Med-High | I | `/spain/tax-residency/beckham-law` (have) | Win on worked examples at £75k/£125k/£200k | calculator, DNV post |
| S5 | beckham law calculator | MED | Tool intent, few good tools exist | almost none good | **Low** | T | `/calculators/beckham-law` (have) | **Easy win** — best tool + 800-word method note | deep-dive |
| S6 | spain non lucrative visa | HIGH | Top retiree term | law firms, PCC Wealth | Med | C/I | `/blog/spain-non-lucrative-visa...` (have) | ~€30k threshold, post-DNV no-work tightening | `/spain/visa-guide` |
| S7 | spain non lucrative visa income requirement 2026 | MED | Year+form specificity = low comp | scattered law firms | **Low** | I | new: `/spain/visa-guide/nlv-income-requirement-2026` | Exact 2026 IPREM figures, couple/family multipliers | NLV post |
| S8 | modelo 720 | MED | Form-name, anxiety-driven | gestorías, expat forums | **Low** | I | `/spain/tax-residency/modelo-720` (have) | Post-ECJ penalty reality, what to actually file | beckham deep-dive |
| S9 | modelo 720 2026 deadline | MED | Year+form, annual refresh | thin | **Low** | I | same page, date-stamped | 31 March deadline, €50k/€20k thresholds | — |
| S10 | modelo 030 | LOW-MED | Form-name | gestorías | **Low** | I | new deep-dive `/spain/tax-residency/modelo-030` | When/why, the Beckham timing link | beckham deep-dive |
| S11 | spain 183 day rule | MED | Core tax-residency term | mixed | Low-Med | I | `/spain/tax-residency/183-day-rule` (have) | Sporadic-absences trap, arrival/departure counting | calculator |
| S12 | 183 day rule calculator | LOW-MED | Tool intent | none good | **Low** | T | `/calculators/residency-timeline` (have) | Best day-counter tool + explainer | deep-dive |
| S13 | uk pension taxed in spain | MED | Retiree pain point | wealth firms (PCC) | Med | I | `/spain/tax-residency/uk-pensions` (have) | Art.17 gov vs private, DT-Individual form | pension calc |
| S14 | qrops spain | MED | High-value wealth term | Blevins, deVere, wealth firms | Med-High | C/I | `/calculators/pension-transfer` + explainer | Honest "QROPS often not needed" angle vs sales | uk-pensions deep-dive |
| S15 | can i keep my isa if i move to spain | MED | Long-tail problem query | forums, scattered | **Low** | I | `/spain/tax-residency/isa-treatment` (have) | The exact pre-move ISA wind-down playbook | beckham deep-dive |
| S16 | cgt on uk property when moving to spain | MED | Five-figure-mistake query | wealth firms | Med | I | `/spain/tax-residency/cgt-on-uk-property` (have) | Pre vs post-residency sale, PRR edge cases, worked £400k | isa deep-dive |
| S17 | cost of living spain vs uk | HIGH | Universal pre-move query | Numbeo, Movehub, expatistan | Med | I | `/spain/cost-of-living` (have) + tool | Real Cádiz/regional 2026 numbers, sourced | calculator |
| S18 | cost of living costa del sol | MED | Region-specific | property portals | Low-Med | I | new: `/spain/cost-of-living/costa-del-sol` | Marbella/Málaga/Estepona monthly breakdown | pillar |
| S19 | spanish bank account for uk citizen | MED | Practical arrival task | bank pages, Wise | Low-Med | I/C | `/spain/banking` (have) | Padrón-first reality, multi-currency, Wise | bank-comparator |
| S20 | best bank in spain for expats | MED | Comparison intent | Wise, expat blogs | Med | C | `/calculators/bank-comparator` + explainer | Sabadell/BBVA/N26/Wise honest comparison | banking sub-pillar |
| S21 | nie number spain how to get | MED-HIGH | Universal first task | gov, gestorías | Med | I | new: `/spain/visa-guide/nie-number` | The exact order: NIE→padrón→SS→bank | first-90-days |
| S22 | padron spain how to register | MED | Arrival task | gestorías, town halls | Low-Med | I | new: `/spain/visa-guide/padron-empadronamiento` | What to bring, town-hall walkthrough | NIE page |
| S23 | spain wealth tax 2026 | MED | HNW concern | wealth firms | Med | I | new: `/spain/tax-residency/wealth-tax` | Regional variation, solidarity tax, Andalucía relief | beckham deep-dive |
| S24 | spain inheritance tax for expats | MED | HNW + retiree | wealth firms | Med | I | new: `/spain/tax-residency/inheritance-tax` | ISD regional 99% relief Madrid/Andalucía | wealth-tax page |
| S25 | beckham law vs standard tax | LOW-MED | BOFU decision query | almost none | **Low** | I | new: `/spain/tax-residency/beckham-law/when-not-to-elect` | When standard tax wins (already in content!) | beckham deep-dive |
| S26 | spain digital nomad visa vs portugal d8 | LOW-MED | High-intent compare | none UK-specific | **Low** | C | new: `/compare/spain-dnv-vs-portugal-d8` | Side-by-side, link to compare tool | both visa posts |
| S27 | retire to spain from uk | HIGH | Retiree head term | PCC Wealth, law firms | Med-High | C/I | new: `/spain/retire` (retiree landing) | Pension 25% lump-sum trap, NLV, healthcare | NLV post, uk-pensions |
| S28 | moving to spain with children schools | MED | Family segment | intl school sites | Low-Med | I | new: `/spain/schools` sub-pillar | British/IB schools, costs, waitlists + tool | school-cost calc |
| S29 | uk driving licence in spain 2026 | MED | Practical, annual | gov, expat blogs | Low-Med | I | new: `/spain/visa-guide/driving-licence-exchange` | Exchange window/deadline, the agreement status | first-90-days |
| S30 | healthcare in spain for uk citizens | MED-HIGH | Universal concern | NHS, gov, insurers | Med | I | new: `/spain/healthcare` sub-pillar | S1 form, convenio especial, private cost | cost-of-living |
| S31 | s1 form spain | MED | Form-name, pensioners | gov, forums | **Low** | I | `/spain/healthcare/s1-form` | Who qualifies, how to apply, what it covers | healthcare |
| S32 | can i work on a non lucrative visa spain | MED | Misconception correction | law firms | Low-Med | I | within NLV post | The tightened no-work rule clearly | — |
| S33 | spain golden visa closed | MED | News-driven, 2025 closure | news, law firms | Low-Med | I | within `/spain/visa-guide` | What replaced it, alt investment routes | — |
| S34 | how much money to move to spain from uk | MED | Budget query | expat blogs | Low-Med | I | new: `/spain/cost-of-living/total-move-cost` | Visa+gestor+shipping+deposit itemised | calculator |
| S35 | spain vs portugal for uk expats | HIGH | Major decision query | idealista, Wise (non-UK!) | **Low-Med** | C | new: `/compare/spain-vs-portugal-uk` | **UK-specific gap — see Phase 3/4** | compare tool |
| S36 | gestor vs asesor fiscal spain | LOW | Niche but high-intent | scattered | **Low** | I | new blog | Who does what, when you need which, cost | banking, tax sub-pillars |
| S37 | best gestor in spain for british expats | LOW-MED | Commercial, referral intent | directories | **Low** | C | new blog | Vetted-referral angle (matches playbook promise) | — |
| S38 | spain exit tax uk | LOW | HNW edge case | wealth firms | Low | I | within wealth-tax page | UK side: are you caught | uk-pensions |

### 2.2 PORTUGAL (32 keywords)

| # | Keyword / query | Vol (UK) | Reasoning | Who ranks 1–5 now | Difficulty | Intent | Recommended slug | Content angle | Internal links |
|---|----------------|----------|-----------|-------------------|------------|--------|------------------|---------------|----------------|
| P1 | move to portugal from uk | HIGH | Huge evergreen | Movingto, Lexidy, PortuTax, Kael Tripton | High | C/I | `/portugal` (have) | Keep pillar; add 2026 step-by-step | all sub-pillars |
| P2 | moving to portugal from uk 2026 | HIGH | Year-stamped | PortuTax, adviceforexpats | Med | I | `/portugal` (have) | "What changed in 2026" incl. citizenship law | D7 post |
| P3 | portugal d7 visa | HIGH | Top retiree route | Lexidy, Movingto | Med-High | C/I | `/blog/portugal-d7-visa...` (have) | €820/mo threshold, retiree worked example | `/portugal/visa-guide` |
| P4 | portugal d7 visa income 2026 | MED | Year+specifics | law firms | **Low** | I | within D7 post | Exact €820 + spouse/child multipliers | — |
| P5 | portugal d8 digital nomad visa | HIGH | Remote-worker head term | Lexidy, Movingto | Med | C/I | new: `/blog/portugal-d8-digital-nomad-2026` | €3,680/mo + €11,040 savings, vs D7 | visa-guide, D7 post |
| P6 | portugal nhr 2026 | HIGH | Still huge despite closure | PortuTax, wealth firms | Med | I | new: `/portugal/tax/nhr-closed-what-now` | "NHR is gone for new arrivals" + transition rules | IFICI post |
| P7 | portugal ifici | MED-HIGH | NHR successor, rising | PortuTax | Low-Med | I | `/blog/portugal-ifici-2026-after-nhr` (have) | Who qualifies now, tighter activity list | `/portugal/tax` |
| P8 | nhr vs ifici | LOW-MED | Decision/compare | thin | **Low** | I | within IFICI post | What changed, who's better/worse off | — |
| P9 | portugal golden visa 2026 | HIGH | Investment head term | immigrantinvest, law firms | Med-High | C | new: `/portugal/visa-guide/golden-visa` | Fund-only since 2023, realistic routes | visa-guide |
| P10 | portugal citizenship 5 to 10 years | MED-HIGH | **News-driven May 2026 change** | news, law firms | **Low (fresh)** | I | new: `/blog/portugal-citizenship-law-2026` | The 5→10yr extension, who's affected | D7 post |
| P11 | nif portugal how to get | MED | First practical task | bank/fiscal-rep sites | Low-Med | I | new: `/portugal/banking/nif` | Pre-arrival via fiscal rep, the order | banking |
| P12 | portugal bank account uk citizen | MED | Arrival task | Wise, banks | Low-Med | I/C | `/portugal/banking` (have) | Millennium/Novobanco/Wise, NIF-first | bank-comparator |
| P13 | uk pension taxed in portugal | MED | Retiree pain point | wealth firms | Med | I | new: `/portugal/tax/uk-pensions` | Post-NHR reality, treaty credit method | IFICI post |
| P14 | cost of living portugal vs uk | HIGH | Universal | Numbeo, Movehub | Med | I | `/portugal/cost-of-living` (have) + tool | Real Algarve/Lisbon/Porto 2026 numbers | calculator |
| P15 | cost of living algarve | MED | Region-specific | property portals | Low-Med | I | new: `/portugal/cost-of-living/algarve` | Lagos/Tavira/Faro monthly breakdown | pillar |
| P16 | healthcare portugal for expats sns | MED | Universal concern | gov, insurers | Med | I | new: `/portugal/healthcare` sub-pillar | SNS registration, waiting times, private €40–80 | cost-of-living |
| P17 | portugal driving licence exchange uk | MED | Practical, 90-day window | gov, blogs | Low-Med | I | new: `/portugal/visa-guide/driving-licence` | 90-day window or retest | first-90-days |
| P18 | aima portugal appointment | MED | Pain-point (notorious backlog) | forums, news | Low-Med | I | new blog: `/blog/aima-appointment-guide-2026` | The booking reality, what to do | visa-guide |
| P19 | d7 vs d8 portugal | MED | BOFU decision | law firms | Low-Med | C | new: `/compare/portugal-d7-vs-d8` | Passive vs remote-work, thresholds | both posts |
| P20 | portugal vs spain for retirees uk | MED-HIGH | Major decision | idealista, Wise (non-UK!) | **Low-Med** | C | `/compare/spain-vs-portugal-uk` (shared w/ S35) | UK-specific gap | compare tool |
| P21 | retire to portugal from uk | HIGH | Retiree head term | law/wealth firms | Med-High | C/I | new: `/portugal/retire` landing | D7 + pension post-NHR + healthcare | D7 post |
| P22 | irs portugal explained | MED | Tax-system basics | PortuTax, gov | Low-Med | I | `/portugal/tax` (have) | Bands, how it works for UK income | IFICI post |
| P23 | portugal capital gains tax property | MED | Property concern | law firms | Med | I | new: `/portugal/tax/capital-gains` | Resident vs non-resident, UK property | uk-pensions PT |
| P24 | imt portugal property tax | MED | Buyer tax | property portals | Low-Med | I | `/calculators/property-tax` + PT explainer | IMT + stamp duty + IMI worked | tool |
| P25 | moving to portugal with children schools | MED | Family | intl school sites | Low-Med | I | new: `/portugal/schools` sub-pillar | Intl schools Algarve/Lisbon, cost | school-cost calc |
| P26 | can i keep my isa moving to portugal | LOW-MED | Long-tail problem | thin | **Low** | I | new: `/portugal/tax/isa-treatment` | ISA treatment post-NHR | tax sub-pillar |
| P27 | portugal minimum income visa 2026 | MED | Threshold query | law firms | Low | I | within D7 post | €820 = minimum wage link explained | — |
| P28 | how much money to move to portugal | MED | Budget | expat blogs | Low-Med | I | new: `/portugal/cost-of-living/total-move-cost` | Itemised move budget | calculator |
| P29 | best places to live in portugal for expats | MED-HIGH | Lifestyle/location | spotblue, blogs | Med | I | new blog/listicle | Algarve vs Silver Coast vs interior, UK lens | cost-of-living |
| P30 | is portugal nhr really gone | MED | Misconception | PortuTax | **Low** | I | within NHR-closed page | Definitive yes-for-new-arrivals answer | IFICI post |
| P31 | portugal fiscal representative uk | LOW-MED | Practical requirement | fiscal-rep firms | **Low** | C/I | within NIF page | When required, cost, how to appoint | banking |
| P32 | contabilista portugal english speaking | LOW | Referral intent | directories | **Low** | C | new blog | Vetted-referral angle | — |

### 2.3 GIBRALTAR (30 keywords)

Gibraltar is WarmerCoast's **highest-margin (£497) and least-contested editorial niche** — competitors are almost entirely wealth-management funnels. The EU treaty is a fresh, high-volume, low-editorial-competition moment.

| # | Keyword / query | Vol (UK) | Reasoning | Who ranks 1–5 now | Difficulty | Intent | Recommended slug | Content angle | Internal links |
|---|----------------|----------|-----------|-------------------|------------|--------|------------------|---------------|----------------|
| G1 | move to gibraltar from uk | MED-HIGH | Smaller market but strong | gibraltarresidency.co.uk, Fiduciary, Titan | Med | C/I | `/gibraltar` (have) | Keep pillar; lead with treaty | all sub-pillars |
| G2 | gibraltar cat 2 residency | MED | Core HNW term | Blacktower, Gibro, category2.com | Med | C/I | `/blog/gibraltar-cat-2-application-2026...` (have) | Best application walkthrough, packet, worked £143k | `/gibraltar/residency` |
| G3 | gibraltar category 2 tax cap 2026 | MED | Figure-specific, **data conflict in SERP** | wealth firms (figures disagree!) | **Low** | I | `/gibraltar/tax` (have) | **Win by being correct**: reconcile £37k floor / £44,740 ceiling / £118k cap, dated + sourced | Cat 2 post |
| G4 | gibraltar cat 2 net worth requirement | LOW-MED | Qualifying query | wealth firms | **Low** | I | within Cat 2 post | £2m test, source-of-wealth narrative | — |
| G5 | hepss gibraltar | LOW-MED | Niche specialist term | wealth firms | **Low** | I | new: `/gibraltar/residency/hepss` | £160k cap, employer-applies, sectors | residency |
| G6 | gibraltar uk eu treaty 2026 | HIGH | **News spike, low editorial comp** | company.gi, gibraltar.com, HoC Library | **Low-Med** | I | `/blog/gibraltar-uk-eu-treaty-2026` (have) | **Tie treaty to the MOVE decision (gap!)** | frontier-worker |
| G7 | gibraltar border open 2026 | MED-HIGH | News-driven | news, gibraltar.com | **Low-Med** | I | within treaty post | When fence comes down (15 Jul 2026), what it means | — |
| G8 | gibraltar frontier worker rules 2026 | MED | **Treaty-driven, transformational** | company.gi, gov.gi | **Low** | I | `/gibraltar/frontier-worker` (have) | Living La Línea/Sotogrande, working Gib — the new reality | treaty post |
| G9 | gibraltar schengen rules | MED | Treaty-driven | news, visaverge | **Low-Med** | I | within treaty post | Port/airport checks, EES/ETIAS exemption | frontier-worker |
| G10 | living in spain working in gibraltar tax | MED | High-intent frontier query | scattered, forums | **Low** | I | new: `/gibraltar/frontier-worker/tax` | 183-day trap, social-security coordination | frontier-worker |
| G11 | gibraltar vs uk non dom | LOW-MED | HNW compare (post non-dom abolition) | wealth firms | **Low** | C | new: `/compare/gibraltar-cat2-vs-uk-nondom` | **Timely**: UK non-dom regime ended Apr 2025 | Cat 2 post |
| G12 | gibraltar cat 2 vs hepss | LOW | BOFU decision | wealth firms | **Low** | I | within Cat 2 post or residency | Which route for whom | — |
| G13 | gibraltar tax for uk residents | MED | Tax-system query | wealth firms | Low-Med | I | `/gibraltar/tax` (have) | No CGT/IHT/VAT, capped income system | residency |
| G14 | gibraltar bank account opening | LOW-MED | Practical | bank sites | **Low** | I/C | `/gibraltar/banking` (have) | Gibraltar finance-hub banks, Sterling+Euro | bank-comparator |
| G15 | cost of living gibraltar vs uk | MED | Universal, "is it cheaper?" | Numbeo, blogs | Low-Med | I | new: `/gibraltar/cost-of-living` sub-pillar | London-equivalent reality, housing scarcity | calculator |
| G16 | gibraltar property market for expats | MED | Housing concern | property portals | Med | I | new blog/sub-pillar | Tight market, rent vs buy, Cat 2 accommodation | cost-of-living |
| G17 | gibraltar residency requirements uk citizen | MED | Eligibility | wealth firms | Low-Med | I | `/gibraltar/residency` (have) | Cat2/HEPSS/ordinary clearly differentiated | all routes |
| G18 | how long does cat 2 application take | LOW-MED | Process query | wealth firms | **Low** | I | within Cat 2 post | 3–6 months, what drives timeline | — |
| G19 | gibraltar cat 2 application form/process | LOW-MED | Transactional process | wealth firms (gated) | **Low** | I/T | within Cat 2 post | The actual packet (un-gated = differentiator) | — |
| G20 | gibraltar healthcare ghа uk | LOW-MED | Practical | gov.gi | **Low** | I | new: `/gibraltar/healthcare` | GHA access, frontier-worker healthcare | cost-of-living |
| G21 | gibraltar schools international | LOW | Family niche | school sites | **Low** | I | within Gibraltar schools content | Limited capacity, apply early | school-cost calc |
| G22 | is gibraltar in the eu | MED-HIGH | High-volume explainer (your portfolio ranks!) | countryofgibraltar.com, gibraltar.com | **Low-Med** | I | within treaty post | No, but treaty changes everything | — |
| G23 | gibraltar 183 day rule spain | LOW-MED | Frontier tax trap | scattered | **Low** | I | within frontier-worker/tax | Accidental Spanish residency risk | residency-timeline calc |
| G24 | gibraltar hnwi residency | LOW-MED | HNW term | wealth firms | **Low** | C | `/gibraltar/residency` (have) | Cat 2 = the HNW route | tax |
| G25 | retire to gibraltar from uk | LOW-MED | Retiree (narrow — Cat2 not for modest pensions) | wealth firms | **Low** | C/I | new: within residency | Honest: who Gibraltar suits / doesn't | cost-of-living |
| G26 | gibraltar transaction tax goods | LOW-MED | **Treaty-new term** | company.gi | **Low** | I | within treaty post | 15→17% transaction tax replacing import duty | — |
| G27 | gibraltar vs spain for tax | LOW-MED | Compare | wealth firms | **Low** | C | new: `/compare/gibraltar-vs-spain` | When Cat 2 beats Beckham | compare tool |
| G28 | moving to la linea working in gibraltar | LOW-MED | Frontier lifestyle | forums | **Low** | I | within frontier-worker | Sotogrande/La Línea reality, post-treaty | tax page |
| G29 | gibraltar source of wealth requirements | LOW | Cat 2 detail | wealth firms | **Low** | I | within Cat 2 post | The narrative the FCD wants | — |
| G30 | gibraltar cost to move from uk | LOW-MED | Budget | scattered | **Low** | I | within cost-of-living | Application fees, deposit, shipping | calculator |

### 2.4 Cross-cutting / UK-side (12 keywords — these capture pre-decision traffic competitors ignore)

| # | Keyword / query | Vol (UK) | Reasoning | Who ranks 1–5 | Difficulty | Intent | Recommended slug | Angle | Links |
|---|----------------|----------|-----------|---------------|------------|--------|------------------|-------|-------|
| U1 | statutory residence test explained | HIGH | Core UK pre-move concept | HMRC, accountants | Med | I | new: `/uk/statutory-residence-test` | The SRT decision tree for emigrants | all 3 tax sub-pillars |
| U2 | split year treatment uk | MED-HIGH | Critical timing concept | HMRC, accountants | Med | I | new: `/uk/split-year-treatment` | How to time your move for tax | SRT page |
| U3 | p85 form leaving uk | MED | Form-name, departure task | HMRC, gov | **Low** | I | new: `/uk/p85-leaving-uk` | When/how to file, what happens after | SRT page |
| U4 | selling uk house before moving abroad | MED | Five-figure timing decision | wealth firms | Low-Med | I | new: `/uk/selling-home-before-emigrating` | PRR window, pre vs post-residency | each country CGT page |
| U5 | do i pay uk tax if i live abroad | MED-HIGH | Universal misconception | HMRC, accountants | Med | I | new: `/uk/uk-tax-when-living-abroad` | Source rules, DTAs, what stays UK-taxed | all tax sub-pillars |
| U6 | uk-spain double tax treaty explained | MED | Treaty term | gov, wealth firms | Low-Med | I | new: `/uk/uk-spain-double-tax-treaty` | Article-by-article for movers | spain tax |
| U7 | uk-portugal double tax treaty | LOW-MED | Treaty term | gov | **Low** | I | new: `/uk/uk-portugal-double-tax-treaty` | Credit method, pensions | portugal tax |
| U8 | schengen 90/180 rule british citizens | HIGH | Universal post-Brexit | gov, travel sites | Med | I | new: `/uk/schengen-90-180-rule` | Day-counting before you're resident | EES page |
| U9 | etias ees uk citizens 2026 | HIGH | **News-driven, EES launched Oct 2025** | gov, travel, news | Med | I | new: `/uk/ees-etias-2026` | What changed, exemptions, Gibraltar | treaty post |
| U10 | leaving the uk tax checklist | MED | Pre-move planning | accountants | Low-Med | I | new: `/uk/leaving-uk-checklist` | The pre-move UK actions, in order | all country pillars |
| U11 | nhs to spain healthcare transfer s1 | MED | Retiree healthcare | NHS, gov | Low-Med | I | shared w/ S31 `/spain/healthcare/s1-form` | S1 mechanics for all 3 countries | each healthcare page |
| U12 | best country to move to from uk for tax | MED-HIGH | Top-of-funnel decision | blogs, wealth firms | Med | C | the compare tool + `/compare/spain-vs-portugal-vs-gibraltar` | The flagship UK-lens comparison | quiz, all pillars |

**Phase 2 headline:** The richest seams are (a) **form-name + year queries** (modelo 720/030, P85, S1, D7 income 2026) — almost zero editorial competition, pure low-difficulty wins; (b) the **Gibraltar treaty cluster** (G6–G11, G22, G26) — high freshness, low editorial competition, decision-stage gap; (c) the **UK-side cluster** (U1–U12) — nobody in WarmerCoast's competitor set owns pre-decision UK traffic; and (d) **UK-qualified comparison pages** (S35/P20, U12, G27) — the existing global comparison content is not written for Brits.

---

## PHASE 3 — Topical authority gaps (what to build)

Mapping the keyword universe against current content, here is what's missing. Priority: **P0** = build first (highest ROI / timeliest), **P1** = build in the 90-day window, **P2** = backlog. Effort: **S** ≤4h · **M** ½–1 day · **L** 2–4 days.

### A. Pillar pages (cornerstones)

The three country pillars exist and are strong. The one missing cornerstone:

1. **`/uk` — "Leaving the UK: the tax and admin playbook before you move" (UK-side pillar).** P0 · L · Primary: *leaving the uk tax checklist*; secondary: *statutory residence test, split year treatment, do i pay uk tax if i live abroad*. ~3,000 words. **Link hook:** an interactive "Have you triggered non-residence?" SRT decision tool + a downloadable pre-move checklist. **Links in:** all three country pillars ("Before you go, sort the UK side →"). **Links out:** U1–U11 cluster pages, each country's CGT/pension pages. This pillar captures buyers *before* they've even chosen a country — the earliest, cheapest, highest-intent traffic, and it feeds all three playbooks.

### B. Cluster posts (supporting articles)

**Spain cluster (build order):**
2. NIE number step-by-step — P1 · S · (S21) · hook: the exact document list + sworn-translation tips · in: visa-guide, first-90-days.
3. Padrón / empadronamiento walkthrough — P1 · S · (S22) · in: NIE page.
4. Spain wealth tax + solidarity tax 2026 — P1 · M · (S23) · hook: regional comparison table · in: beckham deep-dive.
5. Spain inheritance tax (ISD) regional relief — P2 · M · (S24) · in: wealth-tax page.
6. UK driving licence → Spanish exchange 2026 — P1 · S · (S29) · hook: live status of the exchange agreement · in: first-90-days.
7. Modelo 030 explained — P2 · S · (S10).

**Portugal cluster:**
8. **Portugal citizenship 5→10 year law change** — **P0** · M · (P10) · hook: you already reference this May 2026 change — own it before the law firms do · in: D7 post, pillar.
9. Portugal D8 digital nomad full guide — P0 · M · (P5) · (closes the D8 gap; D7 is covered, D8 isn't) · in: visa-guide, D7 post.
10. NHR closed — what now / NHR vs IFICI — P0 · M · (P6, P8, P30) · hook: definitive "is NHR gone?" answer · in: IFICI post.
11. Portugal Golden Visa 2026 (fund-only) — P1 · M · (P9) · in: visa-guide.
12. AIMA appointment survival guide 2026 — P1 · S · (P18) · hook: the notorious backlog, current workarounds · in: visa-guide.
13. NIF before arrival via fiscal representative — P1 · S · (P11, P31) · in: banking.
14. UK pensions taxed in Portugal post-NHR — P1 · M · (P13) · in: IFICI post.

**Gibraltar cluster (highest-margin, lowest-competition — prioritise):**
15. **Gibraltar EU treaty: what it means if you're deciding whether to move** — **P0** · M · (G6, G7, G9, G22, G26) · *this is the single timeliest page on the roadmap* — see Phase 4. Refresh the existing treaty post into the decision-stage angle nobody else holds · in: frontier-worker, pillar.
16. Frontier worker tax mechanics (living Spain / working Gibraltar) — P0 · M · (G8, G10, G23, G28) · hook: the 183-day accidental-residency trap, worked · in: treaty post.
17. Gibraltar Cat 2 vs UK non-dom (post-April-2025 abolition) — P0 · M · (G11) · hook: timely — the UK non-dom regime ended, where do the wealthy go now · in: Cat 2 post.
18. HEPSS full guide — P1 · S · (G5, G12) · in: residency.
19. Gibraltar cost of living vs UK — P1 · M · (G15, G30) · in: pillar + calculator.
20. Gibraltar healthcare (GHA) for movers + frontier workers — P2 · S · (G20).

**UK-side cluster (feeds all three countries):**
21. Statutory Residence Test explained — P0 · M · (U1) · hook: SRT decision tool.
22. Split-year treatment for emigrants — P0 · M · (U2).
23. P85 leaving the UK — P1 · S · (U3).
24. Selling your UK home before emigrating (PRR timing) — P0 · M · (U4) · hook: worked £400k example, the single most expensive mistake.
25. Do I pay UK tax if I live abroad? — P1 · M · (U5).
26. Schengen 90/180 + EES/ETIAS 2026 for Britons — P0 · M · (U8, U9) · hook: timeliness (EES live since Oct 2025).
27. UK–Spain / UK–Portugal double tax treaty explainers — P1 · M each · (U6, U7).

### C. Tools / calculators / interactive (link magnets — you have 9; these extend them)

28. **SRT / non-residence checker** — P0 · M · embed in the `/uk` pillar (U1). Highest link-earning potential: accountants and forums cite working SRT tools.
29. **"Which visa do I qualify for?" decision tree** (per country) — P1 · M · extends the existing visa-eligibility quiz into shareable per-route results.
30. **Move-cost total estimator** (visa + gestor + shipping + deposit + first-month) — P1 · M · (S34, P28, G30) · genuinely novel, nobody itemises this well.
31. **Add 600–900-word sourced explainers beneath all 9 existing calculators** — P0 · M total · this is the fix for Phase 1 issue #9 and turns each tool from a thin page into a ranking asset for "[x] calculator."

### D. Comparison pages (convert top-of-funnel research)

32. **Spain vs Portugal for UK movers** — **P0** · M · (S35, P20) · the existing SERP is global/US (idealista, Wise, adamfayed) — a UK-qualified, 2026-accurate version is a clean gap. Hook: the IFICI-vs-Beckham decision matrix by income type.
33. **Spain vs Portugal vs Gibraltar (the flagship)** — P0 · M · (U12) · wrap editorial around the existing `/calculators/compare-countries` tool so it can rank, not just convert.
34. Spain DNV vs Portugal D8 — P1 · S · (S26, P19).
35. Beckham Law vs IFICI — P1 · S · (decision matrix for remote workers).
36. Gibraltar Cat 2 vs Spain Beckham vs UK non-dom — P1 · M · (G11, G27) · the HNW flagship comparison.

### E. Location landing pages (long-tail, lifestyle + cost intent)

37. Costa del Sol (Marbella/Málaga/Estepona) — P1 · M · (S18).
38. Valencia for British movers — P2 · M.
39. Algarve (Lagos/Tavira/Faro) — P1 · M · (P15).
40. Lisbon vs Cascais — P2 · M.
41. La Línea / Sotogrande (frontier-worker base) — P1 · S · ties to G28, treaty traffic.

### F. UK-side pages — covered in cluster B (21–27) and pillar A (1).

### G. Listicles + evergreen reference (citable, link-earning)

42. **"Every form a UK retiree needs to move to Spain/Portugal" (per country)** — P1 · M each · hook: the definitive numbered checklist, downloadable · in: each visa-guide.
43. **Glossary of Spanish/Portuguese tax terms for Brits** — P2 · M · evergreen reference that earns long-tail + internal-link anchor text.
44. **"2026 thresholds at a glance" (every visa income figure, tax band, fee, deadline)** — P0 · S · hook: the one page people bookmark and competitors cite; refresh annually · in: everywhere. **This is the cheapest high-authority asset on the list.**

### Per-page build spec for the P0 pages

| Page | Working title (≤60) | Primary kw | Secondary kw | Words | Link hook | Linked FROM | Links OUT TO | Effort | Priority |
|------|--------------------|-----------|--------------|-------|-----------|-------------|--------------|--------|----------|
| A1 | Leaving the UK: Tax & Admin Before You Move | leaving the uk tax checklist | SRT, split year, p85 | 3,000 | SRT checker tool + PDF checklist | 3 country pillars | U1–U11, country CGT pages | L | P0 |
| B8 | Portugal Citizenship Law 2026: 5 to 10 Years | portugal citizenship 10 years | nationality law change | 1,800 | First clear UK-lens explainer | D7 post, PT pillar | visa-guide | M | P0 |
| B9 | Portugal D8 Digital Nomad Visa 2026: UK Guide | portugal d8 visa | digital nomad portugal | 2,200 | €3,680 worked example, vs D7 | visa-guide, D7 post | compare D7/D8 | M | P0 |
| B10 | Is NHR Gone? IFICI vs NHR for 2026 Movers | portugal nhr 2026 | nhr vs ifici | 2,000 | Definitive transition-rules table | IFICI post, PT pillar | uk-pensions PT | M | P0 |
| B15 | Gibraltar EU Treaty: Should You Still Move? | gibraltar eu treaty 2026 | gibraltar border open | 2,200 | Treaty→relocation-decision angle | Gib pillar, frontier-worker | frontier tax, Cat 2 | M | P0 |
| B16 | Living in Spain, Working in Gibraltar: Tax 2026 | gibraltar frontier worker tax | frontier worker rules | 2,000 | 183-day trap worked example | treaty post, residency | residency-timeline calc | M | P0 |
| B17 | Gibraltar Cat 2 vs UK Non-Dom After 2025 | gibraltar cat 2 vs uk non dom | hnwi residency uk | 1,800 | Timely (non-dom abolished Apr 2025) | Cat 2 post | compare page | M | P0 |
| B21 | The Statutory Residence Test, Explained | statutory residence test | srt decision | 2,200 | Interactive SRT decision tool | A1, all tax sub-pillars | split-year | M | P0 |
| B24 | Selling Your UK Home Before You Emigrate | selling uk house before moving abroad | prr timing cgt | 1,800 | £400k worked example | A1, country CGT pages | split-year | M | P0 |
| B26 | Schengen 90/180, EES & ETIAS for Britons 2026 | schengen 90 180 rule british | ees etias 2026 | 2,000 | Timeliness (EES live Oct 2025) | A1, Gib treaty | treaty post | M | P0 |
| D32 | Spain vs Portugal for UK Movers (2026) | spain vs portugal for uk expats | retire spain or portugal | 2,500 | IFICI-vs-Beckham matrix by income | both pillars, quiz | compare tool, both tax pages | M | P0 |
| D33 | Spain vs Portugal vs Gibraltar: UK Guide | best country to move to from uk tax | iberia relocation compare | 2,500 | Editorial wrapper on compare tool | homepage, all pillars | all 3 pillars | M | P0 |
| G44 | 2026 Relocation Thresholds at a Glance | spain portugal gibraltar 2026 thresholds | visa income thresholds 2026 | 1,200 | The bookmark-and-cite reference page | everywhere | all pillars | S | P0 |
| — | Sourced explainers under all 9 calculators | [x] calculator | [x] assumptions | 600–900 ea | Methodology + worked example | each tool's sub-pillar | sub-pillars | M | P0 |

---

## PHASE 4 — Competitive teardown

The competitor set splits into three archetypes, and WarmerCoast's strategy differs against each:

- **Removals / relocation platforms** (White & Company, Movingto, MoveHub) — high DA, broad but shallow, logistics-led.
- **Immigration law firms** (Tejada Solicitors, Lexidy, IAS, Del Canto Chambers, Illay Legal) — authoritative but every page funnels to a paid consultation; content stops where the sales call begins.
- **Wealth managers** (PCC Wealth, Blevins Franks, Blacktower, Fiduciary Wealth, Titan Wealth, Gibro, category2.com) — deep on tax, but gated, sales-driven, and they will not publish the full "how to do it yourself" sequence because that is their billable product.

WarmerCoast's structural edge against all three: **it publishes the full sequence, sourced, for a one-time £397–497 — the thing none of them will give away free.** Below, the three WarmerCoast actually faces most in-SERP.

### Competitor 1 — Tejada Solicitors (`tejadasolicitors.com`) — the Spain incumbent

Spanish law firm ranking strongly for "moving to Spain from UK 2026 checklist" with genuinely current content (cites Royal Decree 1155/2024, the 183-day NLV-renewal link).

**5 things they do that WarmerCoast should steal:**
1. **Named-lawyer attribution** ("according to María Soledad Sala, immigration lawyer") — concrete human E-E-A-T. WarmerCoast should lean harder on Dominic's named, sourced authorship + the vetted-adviser network.
2. **Explicit "2026 checklist" framing** in the title and an on-page step list — matches the year-stamped query exactly.
3. **Citing specific legislation by number** (Royal Decree 1155/2024) — WarmerCoast does this on tax pages; extend it to the visa pages.
4. **Region/town specificity** (Marbella, Mijas, Nerja, Fuengirola named) — captures location long-tail. WarmerCoast's location landing pages (Phase 3E) close this.
5. **A genuine recent-change hook** (the 2026 NLV 183-day renewal rule that links residence to tax residence) — WarmerCoast should have a dedicated page on exactly this.

**5 things they do badly that WarmerCoast can beat:**
1. Everything terminates in "CONTACT US!" — no full sequence, no worked numbers.
2. No interactive tools — WarmerCoast has 9.
3. Thin on the UK side (no SRT, split-year, P85) — the A1 pillar wins this outright.
4. No multi-country comparison — a single-jurisdiction firm structurally can't.
5. Generic, no per-income worked examples — WarmerCoast's £75k/£125k/£200k modelling is more useful.

**Best-ranking pages (estimated):** the Spain checklist; NLV/DNV service pages. **Content gap to own:** the *UK-side pre-move sequence* and *honest "when an adviser is worth it"* — a law firm will never tell you when you don't need them.

### Competitor 2 — Wealth-management Gibraltar cluster (gibraltarresidency.co.uk, Fiduciary Wealth, Blacktower, Gibro, Titan Wealth, category2.com)

The Gibraltar SERP is almost entirely HNW wealth funnels. Critically, **they contradict each other on the numbers**: I saw the Cat 2 ceiling quoted as £42,380 (Titan, Cat 2 explainer) and £44,740 (WarmerCoast), and physical-presence quoted as both ~30 days/year and ~100 days/year across sources.

**5 things they do that WarmerCoast should steal:**
1. **Exact-match domains** (category2.com, gibraltarresidency.co.uk) — strong relevance signal. WarmerCoast can't match this but can out-depth them.
2. **"6–8 weeks to approval" concreteness** (Gibro) — specific timelines convert. WarmerCoast's "3–6 months" should be reconciled and explained (why the range).
3. **Process-step structuring** (engage → assess → property → certificate).
4. **Explicit qualifying-criteria lists** (£2m net worth, approved accommodation, 5-yr non-residence, health insurance, £42,380 deposit, £1,197 fee) — WarmerCoast's Cat 2 post should carry the full fee/deposit schedule, which it currently under-specifies.
5. **"Not suitable for…" honesty blocks** (gibraltarresidency.co.uk explicitly says Cat 2 isn't for UK-state-pension households) — WarmerCoast does this well; do it more prominently.

**5 things they do badly that WarmerCoast can beat:**
1. **Factually inconsistent figures** across the SERP — WarmerCoast can win "gibraltar cat 2 tax cap 2026" purely by being correct, dated, and primary-sourced (reconcile £37k floor / £44,740 ceiling / £118k assessable cap with citations).
2. All gated behind a consultation booking.
3. **None tie Cat 2 to the EU treaty moment** — WarmerCoast already has treaty content; connect them.
4. No frontier-worker depth (the treaty's biggest practical change) — WarmerCoast's frontier-worker sub-pillar owns this.
5. Stale dates (Blacktower's guide is "for 2025"; one Gibro page dated May 2025) — WarmerCoast's 2026 freshness wins.

**Content gap to own:** **"Gibraltar EU treaty → should you still move, and how the border change affects Cat 2 / frontier work."** No wealth firm is writing the decision-stage treaty content; the treaty-explainer sites (company.gi, gibraltar.com) aren't writing it for *movers*. This is the cleanest landgrab on the entire site.

### Competitor 3 — Kael Tripton (`kaeltripton.com`) — the closest editorial analogue

Appears for both "moving to Spain from UK" and "moving to Portugal from UK" with near-identical positioning to WarmerCoast: **"Primary-source verified," form-name dense** (Modelo 720, NIE, TIE, IFICI, AIMA), UK-expat-finance framed. This is the competitor most likely to be doing the same playbook.

**5 things they do that WarmerCoast should steal:**
1. **"Primary-source verified" as an explicit on-page badge** — WarmerCoast does inline citations; consider a visible verification stamp + "last reviewed" date per page.
2. **Form-name-dense meta descriptions** (they pack Modelo 720, NIE, TIE, NLV, DNV into the description) — captures form-name long-tail. WarmerCoast's descriptions are good; make them denser with form names.
3. **Parallel Spain + Portugal structure** under a "UK Expat Finance" hub — clean topical signal.
4. They explicitly call out "Golden Visa closed" in the description — matches the news-driven query.
5. Consistent author/finance framing across countries.

**5 things they do badly that WarmerCoast can beat:**
1. No evident interactive tools — WarmerCoast's 9 calculators are a moat.
2. No Gibraltar coverage (from what's visible) — WarmerCoast's three-country span + Gibraltar depth is differentiated.
3. No productised playbook / clear monetisation depth — WarmerCoast's sequenced modules + dashboard is a stronger offer.
4. No comparison content visible.
5. No UK-side pillar visible.

**Content gap to own vs Kael Tripton:** **Gibraltar + comparison + tools + the UK-side pillar.** WarmerCoast should assume Kael Tripton will keep pace on Spain/Portugal form-name content, and win on the three things they're not doing.

### "If I were WarmerCoast's CMO with £10k over 90 days, I'd spend it on these 5 things, in this order:"

1. **£1.5k — Technical + cannibalisation foundation (Weeks 1–2).** Fix `og:url`, ship FAQ/Product/Breadcrumb/Article schema, resolve the placeholder-testimonial liability, and execute the cannibalisation map (one owner per head term). *Reason: you're leaking ranking signal across triplicate pages and shipping a sitewide OG bug; no content spend compounds until this is fixed. Highest ROI per pound.*
2. **£2.5k — Own the Gibraltar treaty moment (Weeks 2–5).** Build B15 (treaty→decision), B16 (frontier-worker tax), B17 (Cat 2 vs UK non-dom), plus the "2026 thresholds at a glance" reference (G44). *Reason: highest-margin product (£497), lowest editorial competition, a genuine 15-July-2026 news catalyst, and your portfolio already ranks for adjacent Gibraltar terms. This is a time-boxed window — competitors are explaining the treaty generically but nobody is writing it for movers.*
3. **£2.5k — Build the UK-side pillar + SRT tool (Weeks 3–8).** A1 pillar + B21 SRT tool + B24 (selling UK home) + B22 (split-year) + B26 (Schengen/EES). *Reason: captures the earliest, highest-intent pre-decision traffic that every competitor ignores, and it funnels into all three playbooks. The SRT tool is the most link-earning asset on the roadmap — accountants and forums cite working tools.*
4. **£2k — Comparison content (Weeks 6–10).** D32 (Spain vs Portugal, UK-lens), D33 (three-way flagship wrapping the compare tool), D35 (Beckham vs IFICI). *Reason: the entire existing comparison SERP is global/US — a UK-qualified 2026 version is an open goal, and comparison pages convert top-of-funnel researchers straight into quiz → playbook.*
5. **£1.5k — Calculator explainers + per-page OG images + Portugal freshness (Weeks 8–12).** Add 600–900-word sourced explainers under all 9 tools (issue #9), ship per-country OG images, and publish B8/B9/B10 (Portugal citizenship law, D8, NHR-vs-IFICI). *Reason: turns 9 thin tool pages into ranking assets, fixes social CTR, and closes the Portugal D8/citizenship-law gaps before Kael Tripton does.*

*(Note: zero of this £10k goes to link-building schemes — per brief, links are earned via the SRT tool, the thresholds reference page, the move-cost estimator, and being the correct/citable source on contested Gibraltar figures.)*

---

## PHASE 5 — 90-day prioritised roadmap

Sequencing logic: technical + cannibalisation fixes first (nothing compounds until ranking signals stop leaking), then on-page optimisation of existing assets (fastest wins from pages already indexed), then the time-boxed treaty landgrab and pillar buildout, then comparison + cluster content. Hours assume Dominic solo with Claude Code + Sofia on design.

### Weeks 1–2 — Technical foundation

| # | Deliverable | Why sequenced here (dependency) | Single metric to watch | Hours |
|---|-------------|--------------------------------|------------------------|-------|
| R1 | Fix sitewide `og:url` template (emit per-page URL) | Sitewide bug; trivial; affects every share | OG URL correct in sharing-debugger on 5 sampled pages | 1 |
| R2 | Ship `FAQPage` schema on homepage + 3 pillars | FAQ content already on-page; instant rich-result eligibility | FAQ rich-result impressions in GSC (target: appearing within 3 wks) | 2 |
| R3 | Ship `Product`+`Offer` schema on 3 `/playbook/*` | Enables price/availability in SERP for commercial pages | Product rich-result valid in Rich Results Test | 2 |
| R4 | Ship `BreadcrumbList` + `Article`+author schema | 3-tier IA makes breadcrumbs easy; Article aids blog/deep-dives | Breadcrumb display on brand SERP | 2 |
| R5 | Resolve placeholder-testimonial liability (relabel or replace) | YMYL trust risk + blocks future Review schema | "Demo"/placeholder strings = 0 in production | 2 |
| R6 | Execute cannibalisation map (one owner per head term + cross-links) | The core ranking-signal leak; must precede content scaling | For "beckham law" etc., only 1 WarmerCoast URL appears in site: search | 6 |
| R7 | Confirm sitemap.xml completeness + robots.txt; submit in GSC | Foundation for indexation tracking of all new pages | All ~52 URLs indexed in GSC Coverage | 2 |
| R8 | De-orphan bank-comparator; fix module/tool count conflicts | Quick-win cleanup before content push | bank-comparator has ≥3 internal links | 1 |

**Week 1–2 total: ~18h.** *Dependency note: R6 (cannibalisation) gates the content phases — building more content on top of unresolved cannibalisation compounds the problem.*

### Weeks 3–4 — On-page optimisation (existing pages)

| # | Deliverable | Why here | Metric | Hours |
|---|-------------|----------|--------|-------|
| R9 | Rewrite 8 over-length title tags (≤60, kw-front-loaded) | Existing indexed pages → fastest CTR/rank lift | Avg position of `/spain/tax-residency`, `/gibraltar` (target +) | 2 |
| R10 | Add per-page meta descriptions, form-name-dense (steal from Kael Tripton) | Capture form-name long-tail on existing pages | CTR on the 3 pillars in GSC (target +15%) | 2 |
| R11 | Add 600–900-word sourced explainers under all 9 calculators | Turns thin tool pages into ranking assets (issue #9) | Impressions on `/calculators/*` (target +300% MoM) | 8 |
| R12 | Refresh the 7 existing blog posts: date-stamp, "what changed 2026" box, narrow primary kw per cannibalisation map | Already indexed; refresh signals + de-dupe | "Last updated" dates live; blog post impressions trend | 4 |
| R13 | Surface 2–3 top deep-dives directly from each pillar (flatten depth) | Pushes equity to money topics (issue #8) | Click depth to beckham-law deep-dive = 2 | 1 |
| R14 | Build "2026 thresholds at a glance" reference page (G44) | Cheap, citable, links everywhere — do early so everything links to it | Referring domains to the reference page | 4 |

**Week 3–4 total: ~21h.**

### Weeks 5–8 — Pillar + treaty buildout (the landgrab)

| # | Deliverable | Why here | Metric | Hours |
|---|-------------|----------|--------|-------|
| R15 | **A1 — UK-side pillar** (3,000w) + SRT decision tool (B21) | Time-boxed value: captures pre-decision traffic; tool earns links | Impressions on `/uk` cluster; referring domains to SRT tool | 16 |
| R16 | **B15 — Gibraltar treaty → "should you still move?"** (2,200w) | 15-July-2026 catalyst; refresh existing post into decision angle | Impressions on `/blog/gibraltar-uk-eu-treaty-2026` (target +400% MoM into July) | 6 |
| R17 | **B16 — Frontier-worker tax mechanics** (2,000w) | Treaty's biggest practical change; no competitor owns it | Position for "gibraltar frontier worker tax" (target top 10) | 6 |
| R18 | **B17 — Cat 2 vs UK non-dom** (1,800w) | Timely (non-dom abolished Apr 2025); HNW intent | Position for "gibraltar cat 2 vs uk non dom" | 5 |
| R19 | **B24 — Selling UK home before emigrating** (1,800w) + B22 split-year | Highest-value UK-side mistake; feeds all 3 CGT pages | Impressions on `/uk/selling-home...` | 8 |
| R20 | **B26 — Schengen 90/180 + EES/ETIAS 2026** (2,000w) | Timeliness (EES live Oct 2025); high-volume universal | Position for "schengen 90 180 rule british citizens" | 5 |

**Week 5–8 total: ~46h.** *Dependency: R16–R18 should publish by mid-June to capture the run-up to the 15 July treaty date — this is the only hard deadline on the roadmap.*

### Weeks 9–12 — Cluster + comparison content

| # | Deliverable | Why here | Metric | Hours |
|---|-------------|----------|--------|-------|
| R21 | **D32 — Spain vs Portugal for UK movers** (2,500w) | Open goal (SERP is global/US); converts researchers | Position for "spain vs portugal for uk expats" (target top 10) | 6 |
| R22 | **D33 — Three-way flagship** wrapping compare tool (2,500w) | Captures "best country to move from uk for tax"; funnels to quiz | Quiz starts from D33; impressions | 6 |
| R23 | **B8/B9/B10 — Portugal citizenship law, D8, NHR-vs-IFICI** | Closes Portugal gaps before Kael Tripton; B8 is news-fresh | Impressions on the 3 Portugal posts | 12 |
| R24 | **B35 — Beckham vs IFICI** decision matrix (1,500w) | High-intent remote-worker compare | Position for "beckham law vs ifici" | 4 |
| R25 | Spain cluster: NIE (B2), padrón (B3), driving licence (B6) | Low-difficulty form-name wins; quick to write | Combined impressions of the 3 | 6 |
| R26 | Per-country OG images (3) + 2 location landing pages (Costa del Sol, Algarve) | Social CTR + lifestyle long-tail | OG previews correct; location-page impressions | 8 |

**Week 9–12 total: ~42h.** **90-day total: ~127h (~10h/week).**

### Metrics dashboard (set up in Week 1, review weekly in GSC + Plausible)

- **Leading:** pages indexed, rich-result eligibility count, internal-link depth to money pages.
- **Mid:** impressions per cluster (Gibraltar treaty, UK-side, comparison), average position on the 12 priority head terms.
- **Lagging:** organic clicks → quiz starts → playbook sales (the only metric that pays the bills). Tag the quiz and `/playbook/*` as Plausible goals so you can attribute organic → revenue per cluster.

---

## Top 5 highest-ROI actions to do THIS WEEK

1. **Fix the `og:url` template + ship FAQ/Product/Breadcrumb schema** (R1–R4). One dev session. Every interior page currently tells social platforms it's the homepage, and you're leaving FAQ/Product rich results on the table when the content already exists. ~7 hours, sitewide impact.
2. **Resolve the cannibalisation on "beckham law"** specifically (R6, first slice): make `/spain/tax-residency/beckham-law` the canonical owner, re-angle `/blog/spain-beckham-law-2026-guide` to "Beckham Law worked example: £150k → €205k saved over 6 years," and re-target `/calculators/beckham-law` at "beckham law calculator." Add a "See also" block linking the blog post and calculator *from* the deep-dive. This is your single most valuable term and you're currently splitting it three ways. ~2 hours.
3. **Kill the placeholder-testimonial / "demo Stripe data" liability** (R5). On a site whose entire pitch is honesty and sourcing, "realistic" fabricated testimonials are an E-E-A-T own-goal. Either replace with 3–5 real buyer reviews or relabel them unmistakably as illustrative — visibly, not in a grey footnote. ~2 hours.
4. **Publish the "2026 Relocation Thresholds at a Glance" reference page** (R14/G44) and link it from all three pillars. Every income threshold, tax band, fee and deadline for Spain/Portugal/Gibraltar on one dated, sourced, bookmarkable page. It's the cheapest citable asset you can build and it becomes the internal-link anchor for everything that follows. ~4 hours.
5. **Start the Gibraltar treaty decision-post** (R16/B15) and set a hard publish date of mid-June. The fence comes down 15 July 2026; the competitors explaining the treaty aren't writing it for *movers*, and your £497 Gibraltar playbook is the highest-margin product you sell. Reconcile the contested Cat 2 figures (£37k floor / £44,740 ceiling / £118k cap) against the Gibraltar ITO primary source while you're in there — being the *correct* result on a term where competitors contradict each other is free ranking. ~6 hours (this week: outline + sourcing).

---

*Prepared without GSC/Ahrefs access; all volume, competition and intent figures are confidence-tagged proxy estimates. Validate the highest-stakes assumptions (treaty-cluster volume, comparison-term difficulty) in Search Console once the pages are live and indexed. Verify every inferred URL in section 1.1 actually resolves to unique content before relying on the cannibalisation map.*
