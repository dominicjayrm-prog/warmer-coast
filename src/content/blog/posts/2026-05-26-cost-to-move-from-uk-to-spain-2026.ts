import type { FileBlogPost } from '../registry';

const content = `
<p>
  &ldquo;How much does it actually cost to move from the UK to Spain?&rdquo; is the most-googled question
  British movers ask before they pull the trigger. The honest answer in 2026 is more
  expensive than it was in 2018, less expensive than UK-equivalent living, and almost
  always €5,000-€12,000 higher in year one than people budget for. Below is the sourced
  breakdown by phase — pre-move admin, visa, arrival, setup, year-one tax, healthcare,
  schools — with real ranges drawn from our buyers and 2026 primary sources.
</p>

<p>
  For the visa-side income thresholds and tax figures referenced below, the
  <a href="/thresholds">2026 thresholds reference page</a> has every number with a
  primary-source link. For the move itself, the
  <a href="/playbook/spain">Spain Playbook</a> walks through the sequencing.
</p>

<h2>The 30-second TL;DR</h2>

<p>
  Realistic one-off cost of moving from the UK to Spain in 2026, by household profile:
</p>

<ul>
  <li><strong>Single adult, NLV or DNV, modest setup:</strong> &pound;6,500-&pound;11,000</li>
  <li><strong>Couple, NLV or DNV:</strong> &pound;9,500-&pound;16,000</li>
  <li><strong>Family of 4 with British school enrolment:</strong> &pound;18,000-&pound;38,000+</li>
  <li><strong>HNW Beckham Law mover (employee + spouse + kids):</strong> &pound;25,000-&pound;55,000</li>
</ul>

<p>
  Those are <em>one-off move costs only</em> — not ongoing monthly living costs (which we
  cover at the end). The wide ranges reflect three drivers: how much furniture you bring,
  whether you use a relocation agent, and how many children you enrol in private British
  schools. Most of these costs are concentrated in the first 90 days.
</p>

<h2>Phase 1: UK-side pre-move admin (&pound;400-&pound;1,500)</h2>

<p>
  Before you submit anything to a Spanish consulate, you need a stack of UK-side
  paperwork apostilled, sworn-translated, and certified. Costs typically include:
</p>

<ul>
  <li><strong>ACRO criminal record check:</strong> &pound;55 standard, &pound;95 priority. Apostille via Legalisation Office adds &pound;30.</li>
  <li><strong>Apostille on birth/marriage certificates:</strong> &pound;30 each via Legalisation Office (faster routes &pound;75-&pound;150).</li>
  <li><strong>Sworn (jurado) translation of every UK document:</strong> &pound;30-&pound;60 per document. Most NLV applicants translate 6-10 documents.</li>
  <li><strong>Medical certificate in Spanish-consulate-accepted format:</strong> &pound;100-&pound;250 from a UK private GP.</li>
  <li><strong>Notarised income evidence (bank statements, pension forecasts):</strong> &pound;20-&pound;50 per notarial signature.</li>
  <li><strong>HMRC Form P85 (free) and finalising UK tax position:</strong> the form itself is free; if you need an accountant for split-year analysis, &pound;300-&pound;800. The
    <a href="/uk-statutory-residence-test">UK Statutory Residence Test deep dive</a>
    explains when you need professional help.</li>
</ul>

<p>
  <strong>Realistic Phase 1 total:</strong> &pound;500-&pound;900 for a single applicant, &pound;800-&pound;1,500 for a family with multiple
  documents to apostille.
</p>

<h2>Phase 2: Visa application (&pound;150-&pound;800 plus optional &pound;1,500-&pound;4,000 lawyer)</h2>

<p>
  The visa fee itself is small. Where it gets expensive is the optional Spanish
  immigration lawyer most British applicants now use to package the file.
</p>

<ul>
  <li><strong>Spanish consular visa fee (NLV or DNV):</strong> &pound;516 / &euro;600 per applicant in 2026. Dependants add &euro;80 per minor.</li>
  <li><strong>BLS / consular processing fee:</strong> &pound;30-&pound;50 per applicant for handling.</li>
  <li><strong>Optional Spanish immigration lawyer to prepare the file:</strong> &pound;1,500-&pound;4,000 per family. About 70% of British applicants now use one — the rejection rate on self-filed NLV files climbed sharply 2023-2025 due to documentation specificity.</li>
  <li><strong>Visa-compliant private health insurance (annual policy):</strong> &euro;600-&euro;2,000 for a typical 40-year-old; double or more above 65. See the <a href="/spain/healthcare">Spain healthcare deep dive</a> for which carriers consulates actually accept.</li>
</ul>

<p>
  <strong>Realistic Phase 2 total:</strong> &pound;700-&pound;1,200 for self-filed; &pound;2,400-&pound;6,000 for lawyer-filed.
</p>

<h2>Phase 3: Flights and physical move (&pound;1,200-&pound;15,000)</h2>

<p>
  This is the most variable cost in the entire move and the one most British movers
  under-budget. Three sub-scenarios:
</p>

<ul>
  <li><strong>One-way flights for the family + 4-6 hold bags:</strong> &pound;600-&pound;1,500 depending on season and how many bags you check.</li>
  <li><strong>Limited belongings via international shipping (10-20 boxes):</strong> &pound;800-&pound;2,500 using DHL or FedEx commercial.</li>
  <li><strong>Full house move (3-4 bedroom UK home content to Spain):</strong> &pound;6,000-&pound;15,000 via international removals firm. Door-to-door, customs handled, 2-4 week transit. The 2024-2025 fuel surcharges pushed these prices up materially from pre-2020 levels.</li>
  <li><strong>Bringing pets:</strong> &pound;400-&pound;900 per dog/cat for post-Brexit pet passport documentation, EU health certificate, transport carrier and ferry/flight surcharges. Cat-friendly Eurotunnel + drive is cheaper than air for families travelling together.</li>
  <li><strong>Initial temporary accommodation (3-6 weeks while you secure rental):</strong> &pound;1,500-&pound;4,500 in coastal towns; less inland.</li>
</ul>

<p>
  <strong>Realistic Phase 3 total:</strong> &pound;3,000-&pound;7,000 for a couple shipping limited goods; &pound;10,000-&pound;20,000 for a family moving a full UK
  household.
</p>

<h2>Phase 4: First-month Spanish admin (&pound;500-&pound;2,500)</h2>

<p>
  Once on Spanish soil, the admin sequence kicks in. There&apos;s a correct order — the
  <a href="/playbook/spain">Spain Playbook</a> covers it — but the typical first-month
  costs:
</p>

<ul>
  <li><strong>NIE application (Modelo EX-15):</strong> &euro;12.13 tax fee. Free if done at a Spanish consulate before arrival, payable on application in Spain.</li>
  <li><strong>Padr&oacute;n registration at town hall:</strong> Free. You bring a lease/utility bill and passport.</li>
  <li><strong>Modelo 030 Hacienda registration:</strong> Free. The asesor typically handles this.</li>
  <li><strong>Modelo 149 Beckham Law election (if eligible):</strong> Free to file, but the asesor will charge &euro;300-&euro;800 to prepare the file correctly. The
    <a href="/spain/tax-residency/beckham-law">Beckham Law deep dive</a> explains
    the 6-month window.</li>
  <li><strong>Asesor fiscal retainer first month:</strong> &euro;200-&euro;500 to get registered, set up quarterly reminders, and walk through Modelo 720 if applicable.</li>
  <li><strong>Spanish bank account opening:</strong> Free if conditions met; some banks charge &euro;15-&euro;30/month if no income deposit. See the <a href="/spain/banking">Spain banking deep dive</a>.</li>
  <li><strong>Local lawyer (abogado) for rental review:</strong> &euro;200-&euro;500 optional but recommended for first-year lease.</li>
</ul>

<p>
  <strong>Realistic Phase 4 total:</strong> &pound;800-&pound;2,000 depending on professional support level.
</p>

<h2>Phase 5: Rental setup (&pound;2,500-&pound;9,000)</h2>

<p>
  Spanish rental practice differs from the UK in three ways that surprise British
  movers: deposits are higher, agency fees are paid by the tenant, and the upfront
  cash burden is significant.
</p>

<ul>
  <li><strong>Two months&apos; deposit:</strong> standard. On a &euro;1,800/month rental that&apos;s &euro;3,600 upfront, returned at end of lease.</li>
  <li><strong>One month&apos;s agency fee:</strong> &euro;1,800 on the same rental, non-refundable, paid to the listing agent.</li>
  <li><strong>First month&apos;s rent paid in advance:</strong> &euro;1,800.</li>
  <li><strong>Utility setup fees (water, electricity, gas, internet):</strong> &euro;150-&euro;400 across all suppliers.</li>
  <li><strong>Basic furniture for an unfurnished or part-furnished flat:</strong> &euro;1,500-&euro;5,000+ depending on starting position. Most Spanish rentals are part-furnished (white goods, basic kitchen) but you bring or buy soft furnishings, bedding, dining furniture.</li>
  <li><strong>Spanish driving licence exchange:</strong> &euro;30-&euro;90 if UK licence is exchangeable (post-2024 reciprocity returned for most categories).</li>
</ul>

<p>
  <strong>Realistic Phase 5 total:</strong> &euro;7,000-&euro;13,000 for a typical mid-budget family rental setup; &euro;3,500-&euro;6,500 for a couple in a smaller flat.
</p>

<h2>Phase 6: Year-one tax setup (&pound;800-&pound;3,500)</h2>

<p>
  The first full Spanish tax year (the calendar year you arrive, or the next one
  depending on when you trigger residency) brings additional costs that don&apos;t
  exist in the UK:
</p>

<ul>
  <li><strong>Modelo 720 foreign asset declaration (if applicable):</strong> &euro;300-&euro;800 in asesor fees for a thorough preparation. See the <a href="/spain/tax-residency/modelo-720">Modelo 720 deep dive</a>.</li>
  <li><strong>Modelo 100 (annual IRPF return):</strong> &euro;200-&euro;600 if a Spanish-tax-resident filing for the first year.</li>
  <li><strong>Patrimonio return (if assets above the regional threshold):</strong> &euro;300-&euro;700. See the <a href="/spain/patrimonio">Patrimonio deep dive</a> for region-by-region thresholds.</li>
  <li><strong>Sucesiones planning (lifetime gift planning, will drafting):</strong> &euro;500-&euro;2,500 for a Spanish will plus initial advice. See the <a href="/spain/sucesiones">Sucesiones deep dive</a>.</li>
  <li><strong>Cross-border UK-Spain DTA advice (if pensions, UK property income, complex assets):</strong> &euro;500-&euro;1,500 for an asesor with cross-border specialty.</li>
</ul>

<p>
  <strong>Realistic Phase 6 total:</strong> &pound;1,200-&pound;3,500 depending on asset complexity and whether you trigger Modelo 720.
</p>

<h2>Phase 7: Healthcare bridge (&pound;600-&pound;2,500)</h2>

<p>
  Before you&apos;re fully integrated into the SNS, you typically run private health
  insurance for 6-18 months. Once you switch to SNS via employment, autónomo, S1
  or the Convenio Especial, the private bill stops.
</p>

<ul>
  <li><strong>Private health insurance (visa-compliant, year 1):</strong> &euro;600-&euro;2,000 for a 40-year-old; &euro;1,500-&euro;4,500 above 65.</li>
  <li><strong>S1 form registration (UK state pensioners):</strong> Free. The UK pays Spain for your healthcare. See the <a href="/spain/healthcare">Spain healthcare deep dive</a>.</li>
  <li><strong>Convenio Especial buy-in (12 months after padrón):</strong> &euro;60/month under 65, &euro;157/month 65+. Each adult applies separately.</li>
  <li><strong>Out-of-pocket prescription bridge:</strong> &euro;50-&euro;200 in the transition period before your SNS card is active.</li>
</ul>

<p>
  <strong>Realistic Phase 7 total:</strong> &pound;700-&pound;2,500.
</p>

<h2>Phase 8: Schools (only if you have children)</h2>

<p>
  This is the single largest cost-line for British families and the one with the widest
  range. Three pathways:
</p>

<ul>
  <li><strong>Spanish public school:</strong> free, including books at primary level. Family budget &euro;500-&euro;1,500/year for uniforms, lunches, trips per child.</li>
  <li><strong>Concertado (semi-private, Spanish curriculum):</strong> &euro;100-&euro;500/month per child plus &euro;400-&euro;1,000/year in non-tuition costs.</li>
  <li><strong>NABSS British-curriculum school:</strong> &euro;5,000-&euro;32,000/year per child depending on school and phase. See the <a href="/spain/schools">Spain schools deep dive</a> for the full NABSS network and fee bands.</li>
</ul>

<p>
  Plus a one-time application fee of &euro;200-&euro;1,500 per child at private schools, refundable
  enrolment deposit of &euro;500-&euro;2,500, uniforms (&euro;200-&euro;600), books (&euro;200-&euro;500), and trip levies.
</p>

<p>
  <strong>Realistic Phase 8 total for a typical British family:</strong> &pound;0 (public) to
  &pound;25,000+ (two children at elite NABSS schools), year-one only.
</p>

<h2>Hidden costs nobody talks about</h2>

<p>
  (The FX line below has its own full guide —
  <a href="/blog/how-to-transfer-money-uk-to-spain-2026">Wise vs Revolut vs banks: how to
  move money UK→Spain</a> — worth reading before your first transfer.)
</p>

<ul>
  <li><strong>UK FX bleed in year one.</strong> Moving GBP to EUR via traditional banks during your first year typically loses 1-3% per transaction. On &pound;30,000 of moving-related transfers that&apos;s &pound;300-&pound;900 of avoidable FX cost. Wise or Revolut compress this to ~0.4%. See the <a href="/calculators/bank-comparator">bank comparator</a>.</li>
  <li><strong>UK self-assessment final filing.</strong> The year you leave the UK, you still file UK SA — costs &pound;300-&pound;800 if using an accountant for split-year treatment. The <a href="/uk-statutory-residence-test">UK SRT deep dive</a> covers when you need professional help.</li>
  <li><strong>UK property tenant management.</strong> If you keep a UK home and let it out, expect 8-12% of gross rent to a letting agent plus &pound;300-&pound;600/year for insurance and gas safety certification. Plus 19% UK income tax on the rental as a non-resident landlord (with NRL scheme).</li>
  <li><strong>Spanish car (if needed).</strong> Many British movers end up needing a Spanish car within 6 months — &euro;8,000-&euro;25,000+ for a used car, plus &euro;500-&euro;1,200/year insurance, &euro;100-&euro;300 ITV (MOT equivalent), and &euro;50-&euro;200 IVTM circulation tax. UK cars can be imported but the bureaucracy typically costs &euro;1,200-&euro;3,000 and 3-6 months — most movers sell UK + buy Spanish instead.</li>
  <li><strong>NRL non-resident landlord forms (Form NRL1i).</strong> Free to file with HMRC; required before your UK letting agent stops withholding tax at source. Forget and you lose 20% of UK rent to HMRC for the gap.</li>
  <li><strong>Subscriptions you forget to cancel.</strong> Average UK leaver wastes &pound;30-&pound;80/month on UK-only subscriptions (Netflix UK, gym, magazine, parking permits) post-move. Audit and cancel before you go.</li>
  <li><strong>The temporary accommodation overshoot.</strong> British movers typically budget 2 weeks of Airbnb and end up booking 6-8 weeks because rentals take longer than expected — adds &pound;1,200-&pound;3,500 of unbudgeted cost.</li>
</ul>

<h2>Worked example: family of 4 from London to Valencia in 2026</h2>

<p>
  A British family — two working adults, two children aged 8 and 11 — moving from
  London to Valencia city in September 2026, applying for the Digital Nomad Visa,
  enrolling the children at Caxton College, taking limited furniture, mid-budget
  rental. Real numbers from a 2025-2026 buyer.
</p>

<table>
  <thead>
    <tr><th>Phase</th><th>Cost (&euro;)</th><th>Cost (&pound;)</th></tr>
  </thead>
  <tbody>
    <tr><td>Pre-move admin (apostilles, translations, ACRO, medical)</td><td>1,400</td><td>1,200</td></tr>
    <tr><td>Visa application (4 family members, lawyer)</td><td>5,200</td><td>4,500</td></tr>
    <tr><td>Flights + 4 hold bags + 18 boxes shipped (DHL)</td><td>3,800</td><td>3,300</td></tr>
    <tr><td>3 weeks temporary accommodation</td><td>2,400</td><td>2,070</td></tr>
    <tr><td>First-month Spanish admin (NIE, asesor, bank, lawyer)</td><td>1,400</td><td>1,200</td></tr>
    <tr><td>Rental setup (3-bed flat, &euro;1,900/mo, deposit + agency + first month)</td><td>7,600</td><td>6,550</td></tr>
    <tr><td>Furniture top-up (basics, beds, soft furnishings)</td><td>3,400</td><td>2,930</td></tr>
    <tr><td>Year-1 tax setup (Modelo 720 + Modelo 100 + retainer)</td><td>2,200</td><td>1,900</td></tr>
    <tr><td>Healthcare year 1 (visa-compliant insurance, 2 adults + 2 kids)</td><td>3,200</td><td>2,760</td></tr>
    <tr><td>School fees year 1 (Caxton College, 2 children, plus uniforms/books)</td><td>26,400</td><td>22,750</td></tr>
    <tr><td>Hidden costs (FX bleed, UK accountant, subscriptions)</td><td>1,800</td><td>1,550</td></tr>
    <tr><td><strong>Total year-1 one-off + setup cost</strong></td><td><strong>&euro;58,800</strong></td><td><strong>&pound;50,710</strong></td></tr>
  </tbody>
</table>

<p>
  Without the British schools the same family pays roughly &pound;28,000 for the move. The
  schools line item is what makes family moves the highest-cost profile.
</p>

<h2>Ongoing monthly cost of living once you&apos;re set up</h2>

<p>
  Beyond the one-off move costs, the monthly running budget for a family of 4
  living in Spain in 2026 typically runs:
</p>

<ul>
  <li><strong>Madrid:</strong> &euro;5,300-&euro;9,700/month</li>
  <li><strong>Costa del Sol (Marbella):</strong> &euro;5,700-&euro;11,000/month</li>
  <li><strong>M&aacute;laga:</strong> &euro;4,500-&euro;8,500/month</li>
  <li><strong>Valencia:</strong> &euro;3,900-&euro;7,500/month</li>
  <li><strong>Sevilla:</strong> &euro;3,400-&euro;6,500/month</li>
</ul>

<p>
  Detailed breakdowns by city are on the city pages — <a href="/moving-to-malaga">Málaga</a>,
  <a href="/moving-to-marbella">Marbella</a>,
  <a href="/moving-to-valencia">Valencia</a>,
  <a href="/moving-to-madrid">Madrid</a>,
  <a href="/moving-to-barcelona">Barcelona</a>,
  <a href="/moving-to-sevilla">Sevilla</a>,
  <a href="/moving-to-mallorca">Mallorca</a>,
  <a href="/moving-to-tenerife">Tenerife</a> — and for the Portugal comparison,
  <a href="/moving-to-lisbon">Lisbon</a>,
  <a href="/moving-to-porto">Porto</a>,
  <a href="/moving-to-the-algarve">the Algarve</a> and
  <a href="/moving-to-cascais">Cascais</a>.
</p>

<h2>What our buyers wish they&apos;d budgeted for</h2>

<ul>
  <li><strong>A larger temporary-accommodation buffer.</strong> Plan for 6 weeks, not 2.</li>
  <li><strong>Real legal help on the rental.</strong> Spanish leases differ from UK in subtle ways (notice periods, deposit return mechanics) that the &euro;200-&euro;500 lawyer review catches.</li>
  <li><strong>Sucesiones planning in year 1, not year 5.</strong> Spanish wills cost &euro;500-&euro;1,500 and they avoid family disputes if anything happens unexpectedly.</li>
  <li><strong>The asesor relationship matters more than the cheapest quote.</strong> &euro;100/month buys you a competent asesor; &euro;30/month buys one who&apos;ll miss the Beckham Law election window. Cross-border asesores cost more and are worth it.</li>
  <li><strong>A serious Spanish-language commitment in month 1.</strong> Online apps work but most British movers regret not starting intensive lessons earlier.</li>
</ul>

<h2>How to keep the cost down (without compromising the move)</h2>

<ol>
  <li><strong>Self-file the visa if your case is clean.</strong> Saves &pound;1,500-&pound;4,000. Only do this if your income evidence is straightforward and your documentation is complete.</li>
  <li><strong>Move to a smaller / inland Spanish city.</strong> Sevilla saves &pound;1,500-&pound;3,000/month on housing vs Madrid or Costa del Sol.</li>
  <li><strong>Public or concertado school for primary.</strong> Saves &pound;15,000+/year per child versus NABSS schools. Most British children under 9 transition well.</li>
  <li><strong>Wise or Revolut for all UK-EUR transfers.</strong> Saves 1-3% on every transaction vs traditional bank FX.</li>
  <li><strong>Skip the international removals firm if you can.</strong> Ship 20-40 boxes via DHL, buy furniture in Spain. Saves &pound;4,000-&pound;10,000.</li>
  <li><strong>S1 form if eligible.</strong> If anyone in the household is on UK state pension, get the S1 — it removes the private-health-insurance cost from year 2 onward.</li>
</ol>

<h2>The bottom line</h2>

<p>
  In 2026 a realistic UK-to-Spain move costs between &pound;6,500 (single adult, modest setup,
  no schools) and &pound;55,000 (family of four with British schools, full removals, lawyer-
  filed visa). The middle of the distribution — a working couple with limited
  furniture, NLV or DNV, asesor support, no schools — sits around &pound;9,500-&pound;14,000 one-
  off, plus ongoing monthly costs typically 25-40% below equivalent UK city living.
</p>

<p>
  Where most British movers go wrong: budgeting the one-off costs without adding the
  20% buffer Spanish bureaucracy demands; under-pricing the temporary accommodation
  window; and forgetting year-one tax setup costs are real even if the tax itself is
  efficient under Beckham Law or in zero-Patrimonio regions like Madrid or Andalucía.
  Plan honestly and the move pays for itself within 18-30 months for most working-age
  movers. Plan optimistically and the first 90 days will be financially uncomfortable.
</p>

<p>
  Not sure you want to move outright? Plenty of readers land here planning to split the
  year instead — half in Spain, half in the UK. That plan collides with the 90/180
  Schengen rule and both countries&apos; tax-residency tests in ways most people don&apos;t
  expect: <a href="/blog/can-i-live-in-spain-6-months-and-uk-6-months">can you actually
  live in Spain for 6 months and the UK for 6 months?</a> covers what&apos;s legal, what
  isn&apos;t, and the three structures that work in 2026.
</p>

<p>
  Route-specific deep dives on the visa fees this article budgets:
  the <a href="/blog/spain-non-lucrative-visa-british-retirees-2026">NLV retiree guide</a>,
  the <a href="/blog/spain-digital-nomad-visa-2026-complete-guide">Digital Nomad Visa guide</a>,
  and the <a href="/blog/spain-beckham-law-2026-guide">Beckham Law decision guide</a> for the
  tax structuring that pays for the whole move.
</p>

<p>
  For the worked-example version with your actual numbers, see the
  <a href="/playbook/spain">Spain Playbook</a> or run the
  <a href="/calculators/cost-of-living">UK vs Spain cost-of-living comparator</a>.
  For the income thresholds and tax-residency mechanics this article references, the
  <a href="/thresholds">2026 thresholds page</a> has every figure with a primary-source
  link.
</p>
`;

export const post202605CostToMoveSpain: FileBlogPost = {
  id: 'file-2026-05-26-cost-to-move-from-uk-to-spain',
  slug: 'cost-to-move-from-uk-to-spain-2026',
  title: 'How much does it actually cost to move from the UK to Spain in 2026? Real numbers, sourced',
  excerpt:
    'The honest 2026 cost breakdown — by phase, with real ranges. Pre-move admin £400-£1,500. Visa £150-£800 plus optional £1,500-£4,000 lawyer. Move £1,200-£15,000. First-month admin £500-£2,500. Rental setup £2,500-£9,000. Year-1 tax £800-£3,500. Plus the hidden costs nobody talks about and a worked example for a family of 4 moving to Valencia.',
  content,
  cover_image: '/blog/cost-to-move-spain-2026.jpg',
  cover_image_alt:
    'Whitewashed Andalusian coastal town at golden hour — the Spain move this cost guide budgets for',
  category: 'Spain',
  read_time_minutes: 11,
  published_at: '2026-05-26T07:00:00.000Z',
  updated_at: '2026-05-26T07:00:00.000Z',
  author_name: 'Dominic Roworth',
  meta_title: 'Cost to Move from the UK to Spain in 2026 | Real Numbers by Phase',
  meta_description:
    'How much does moving from the UK to Spain actually cost in 2026? Sourced cost breakdown by phase, with worked example for a family of 4. Visa, removals, tax setup, schools, healthcare, hidden costs.',
  tags: [
    'Spain',
    'cost of moving',
    '2026 relocation',
    'NLV',
    'DNV',
    'British expat',
    'Beckham Law',
  ],
  faqs: [
    {
      question: 'How much does it cost to move from the UK to Spain in 2026?',
      answer:
        'For a single adult on the NLV or DNV with modest setup, budget £6,500-£11,000 one-off. A couple typically £9,500-£16,000. A family of 4 with British school enrolment £18,000-£38,000+. The biggest variables are removals, schools, and whether you use a Spanish immigration lawyer. Ongoing monthly costs are typically 25-40% below equivalent UK city living.',
    },
    {
      question: 'What is the visa fee for Spain in 2026?',
      answer:
        'The consular visa fee for the Non-Lucrative Visa (NLV) or Digital Nomad Visa (DNV) is approximately €600 per adult applicant in 2026, with €80 per minor dependant added. BLS / consular processing adds £30-£50 per applicant. Most British applicants now also use a Spanish immigration lawyer to prepare the file, which adds £1,500-£4,000 per family but materially reduces rejection risk.',
    },
    {
      question: 'How much should I budget for shipping UK belongings to Spain?',
      answer:
        'For limited belongings (10-20 boxes via DHL/FedEx): £800-£2,500. For a full house move via international removals firm: £6,000-£15,000 depending on volume and origin/destination cities. Bringing pets adds £400-£900 per animal for post-Brexit documentation. Many British movers ship 20-40 boxes and buy furniture in Spain — saves £4,000-£10,000 versus full removals.',
    },
    {
      question: 'What does year-one Spanish tax setup cost?',
      answer:
        'Realistic year-one Spanish tax setup: £800-£3,500 depending on complexity. Modelo 720 foreign asset declaration (if applicable) £300-£800. Modelo 100 first annual IRPF £200-£600. Patrimonio return (if assets above regional threshold) £300-£700. Spanish will drafting £500-£2,500. Cross-border DTA advice £500-£1,500 if you have pensions or UK property income. The Beckham Law election itself is free to file but the asesor typically charges €300-€800 to prepare it correctly.',
    },
    {
      question: 'How much does private health insurance cost for the Spanish visa?',
      answer:
        'Visa-compliant private health insurance for a healthy 40-year-old costs €600-€2,000/year in 2026, depending on carrier and policy tier. Above age 65 expect €1,500-€4,500/year. Spanish consulates require zero-copay, no-cap policies — Adeslas, Sanitas (Bupa) and DKV are the three carriers most consistently accepted. You typically keep private cover for 6-18 months until you transition to the SNS via employment, autónomo, S1 form (UK pensioners), or the Convenio Especial.',
    },
    {
      question: 'What hidden costs do British movers to Spain forget about?',
      answer:
        'The most common forgotten costs: extended temporary accommodation (rentals take longer than expected — budget 6 weeks not 2), UK FX bleed via traditional banks (loses 1-3% per transaction vs 0.4% via Wise/Revolut), UK self-assessment final filing in your leaving year (£300-£800 if using an accountant for split-year treatment), Spanish car purchase within 6 months of arrival (€8,000-€25,000 + €500-€1,200/year insurance), and the NRL non-resident landlord forms if you keep UK property let.',
    },
    {
      question: 'How can I keep the cost of moving to Spain down?',
      answer:
        'Six biggest cost-control levers: (1) self-file the visa if your case is clean — saves £1,500-£4,000 over lawyer-filed. (2) Move inland (Sevilla, Valencia interior) instead of Costa del Sol/Madrid — saves £1,500-£3,000/month on housing. (3) Public or concertado school for primary-age children — saves £15,000+/year per child vs British schools. (4) Use Wise or Revolut for UK-EUR transfers. (5) Ship 20-40 boxes via DHL instead of full removals. (6) Get the S1 form if anyone in the household is on UK state pension — removes private health insurance cost from year 2 onward.',
    },
  ],
  canonical_url: null,
};
