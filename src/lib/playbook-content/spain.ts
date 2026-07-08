import type { PlaybookModule } from '@/lib/playbook-modules';

/**
 * Spain playbook — full module content (the paid product).
 *
 * Authoring notes:
 * - `body` is trusted HTML rendered inside a `prose` container on the module
 *   page. Tables and callouts carry explicit Tailwind classes because the
 *   typography plugin is not relied on for structural styling.
 * - Every figure is the 2026 value verified against the primary source
 *   (AEAT, BOE, consular service, gov.uk). When a figure changes annually,
 *   the body says so and names the index (IPREM, SMI) so buyers can re-check.
 */

const callout = (tone: 'deadline' | 'warning' | 'tip' | 'money', title: string, body: string) => {
  const styles: Record<string, string> = {
    deadline: 'border-warning/50 bg-warning/5',
    warning: 'border-gibraltar/40 bg-gibraltar/5',
    tip: 'border-sea/40 bg-sea/5',
    money: 'border-warm/40 bg-warm/5',
  };
  const labels: Record<string, string> = {
    deadline: '⏰ Deadline',
    warning: '⚠️ Costly mistake',
    tip: '✓ Buyer tip',
    money: '£ Worked numbers',
  };
  return `<div class="rounded-card border ${styles[tone]} p-4 my-5 not-prose"><div class="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink/60">${labels[tone]} — ${title}</div><div class="mt-1.5 text-[15px] leading-relaxed text-ink/90">${body}</div></div>`;
};

const table = (headers: string[], rows: string[][]) =>
  `<div class="not-prose my-5 overflow-x-auto rounded-card border border-border"><table class="w-full text-left text-[14px]"><thead class="bg-surface text-[11.5px] font-semibold uppercase tracking-[0.06em] text-muted"><tr>${headers
    .map((h) => `<th class="px-3.5 py-2.5">${h}</th>`)
    .join('')}</tr></thead><tbody class="divide-y divide-border bg-white">${rows
    .map(
      (r) =>
        `<tr>${r.map((c, i) => `<td class="px-3.5 py-2.5 ${i === 0 ? 'font-semibold text-ink' : 'text-ink/85'}">${c}</td>`).join('')}</tr>`,
    )
    .join('')}</tbody></table></div>`;

export const spainModules: PlaybookModule[] = [
  {
    n: 1,
    slug: 'pre-move',
    title: 'Pre-move UK actions',
    duration: '90 min',
    summary:
      'The six-to-twelve month run-up. Every UK-side decision is cheaper and cleaner while you are still UK tax resident — this module sequences them so nothing is left stranded on the wrong side of the residency line.',
    sections: [
      {
        title: 'Your UK exit, in the right order',
        body: `<p>Almost every five-figure mistake we see traces back to sequencing: doing something after Spanish tax residency that should have been done before, or vice versa. The residency line — the day you become Spanish tax resident — reprices almost every asset decision you can make. Before the line, HMRC rules apply. After it, Spanish rules apply to your worldwide income and gains.</p>
<p>The master sequence for the 6–12 months before departure:</p>
<ol>
<li><strong>Month -12 to -9:</strong> decide the target tax year for the move. Spanish residency is triggered by 183+ days in a <em>calendar</em> year — a move in July or later usually keeps you non-resident in Spain for that year, giving you a clean transition window. A January move makes you Spanish-resident for the whole arrival year.</li>
<li><strong>Month -9 to -6:</strong> UK asset review — ISAs, GIAs, pensions, property (each covered below). Get valuations dated and documented now; you will need them for Spanish acquisition-value purposes later.</li>
<li><strong>Month -6 to -3:</strong> visa document assembly (Module 2), apostilles, sworn translations.</li>
<li><strong>Month -3 to 0:</strong> consulate application, P85 preparation, notify UK institutions.</li>
</ol>
${callout('tip', 'The July trick', 'Arriving in Spain after 2 July means you cannot hit 183 days in that calendar year. Your Spanish tax residency then starts on 1 January of the following year — giving you a 5-6 month runway on Spanish soil while still UK tax resident, during which UK-side disposals (ISA sales, GIA rebalancing, even a property completion) stay under UK rules. This single sequencing decision is worth more than any other planning trick in this module.')}`,
      },
      {
        title: 'Form P85 — and what it does not do',
        body: `<p>Form P85 tells HMRC you are leaving the UK. File it online through your Government Gateway account around your departure date — it triggers any in-year tax refund (you usually have unused personal allowance for the part-year) and sets up the NT (no tax) code process if you will have UK employment income paid gross.</p>
<p>What P85 does <strong>not</strong> do — and where accountants who rarely handle expatriation get it wrong:</p>
<ul>
<li>It does <strong>not determine your UK tax residency</strong>. Only the Statutory Residence Test does that. You can file a P85 and still be UK tax resident under the SRT if you keep too many ties and days. Read our <a href="/uk-statutory-residence-test">SRT guide</a> and count honestly.</li>
<li>It does <strong>not replace a Self Assessment return</strong>. If you normally file SA — or you have UK rental income, gains, or split-year treatment to claim — you still file for the departure year, with the SA109 residence pages.</li>
<li>It is <strong>not a deadline-critical form</strong> in the way Modelo 149 is (Module 3). File within a few weeks of leaving; earlier filings can be rejected as premature.</li>
</ul>
<p>If you will let out your UK home, also file <strong>form NRL1</strong> (Non-resident Landlord Scheme) so your letting agent or tenant can pay rent gross instead of withholding 20% at source.</p>
${callout('warning', 'Split-year treatment is claimed, not automatic', 'In the year you leave, you want the UK tax year split into a UK part and an overseas part (RDR3 Cases 1, 3 or 8 for most movers). It is claimed on the SA109 pages of your Self Assessment — miss the claim and HMRC treats you as UK resident for the full year, taxing your post-move income too, and unpicking it later costs accountant hours.')}`,
      },
      {
        title: 'ISA wind-down: the wrapper dies at the border',
        body: `<p>Spain does not recognise the ISA wrapper. From your first day of Spanish tax residency, everything inside an ISA becomes ordinary taxable assets: dividends and interest are taxed as savings income (19%–30% in 2026), and disposals crystallise Spanish-taxable gains — computed against your <em>original acquisition cost</em>, not the value on arrival.</p>
<p>That last point is the trap. There is no automatic rebasing on entry. A fund bought at £20,000 in 2015, worth £60,000 when you move, carries its full £40,000 gain into the Spanish system. Sell it in year 2 of Spanish residency and Spain taxes the whole gain at up to 30% — a gain that would have been entirely tax-free had you sold inside the ISA while still UK resident.</p>
<p>The playbook move, therefore:</p>
<ol>
<li>List every ISA holding with purchase dates and costs.</li>
<li>While still UK tax resident, <strong>sell and immediately repurchase</strong> (inside or outside the wrapper — the point is to reset the acquisition date and cost to today). UK CGT does not apply inside an ISA, so the reset is free.</li>
<li>Keep the contract notes. They are your Spanish acquisition-cost evidence for the decades ahead.</li>
<li>Decide whether to keep the account open at all — many platforms (Vanguard UK, HL, AJ Bell) restrict or freeze accounts for non-UK residents. Ask your platform its non-resident policy <em>before</em> you move; switching platforms is much easier with a UK address.</li>
</ol>
${callout('money', 'ISA reset, £60k holding', 'Original cost £20,000 → value at move £60,000. No reset: sell in Spain year 2 at £62,000 → Spanish CGT on £42,000 ≈ €11,300. With pre-move reset: Spanish gain is only the £2,000 growth since the reset ≈ €540 tax. The 20-minute reset saved roughly £9,300.')}`,
      },
      {
        title: 'UK property: sell before, sell after, or keep and let',
        body: `<p>Three paths, three very different tax outcomes.</p>
${table(
  ['Path', 'UK side', 'Spain side', 'Best for'],
  [
    [
      'Sell before the residency line',
      'Private Residence Relief usually wipes the gain on your main home',
      'Nothing — you were not yet Spanish resident',
      'Almost everyone who intends to sell at all',
    ],
    [
      'Sell after becoming Spanish resident',
      'UK CGT on gains since April 2015 (NRCGT return within 60 days of completion)',
      'Spanish CGT 19–30% on the full gain since original purchase, with only partial main-home relief if reinvested in a Spanish main home (and only if you are 65+, full exemption)',
      'Rarely optimal — usually an accident of timing',
    ],
    [
      'Keep and let',
      'UK income tax on rent (NRL scheme, personal allowance still available to UK/EEA citizens), 60-day NRCGT on eventual sale',
      'Rent also taxable in Spain with credit for UK tax; property enters your Modelo 720 and wealth-tax base',
      'Those who want the income and accept the double filing',
    ],
  ],
)}
<p>The main-home sale is the single largest number in most moves. If a sale is likely within a couple of years, complete it — exchange <em>and</em> completion — while UK resident and before Spanish residency begins. The July trick above buys you the extra months this often needs.</p>
${callout('warning', 'The 65+ exemption is Spain-side only', 'Spain fully exempts main-home gains for over-65s — but only for a home that was your Spanish habitual residence for 3+ years. Your UK house never qualifies. Do not let anyone tell you "you are over 65 so the sale is tax-free" — that rule cannot rescue a UK property sold after you became Spanish resident.')}`,
      },
      {
        title: 'Pensions: sequence the drawdown decisions',
        body: `<p>Full pension mechanics live in Module 6 (year-one tax) and our <a href="/qrops-vs-sipp-abroad">QROPS vs SIPP deep dive</a>, but three decisions belong in the pre-move window:</p>
<ul>
<li><strong>The 25% tax-free lump sum is a UK concept.</strong> Spain does not exempt it — once Spanish resident, a lump sum is taxed as pension income at general rates (19–47%). If taking the Pension Commencement Lump Sum is part of your plan, take it while UK tax resident. This is frequently a five-figure decision.</li>
<li><strong>Do not trigger the MPAA carelessly.</strong> Flexibly accessing a DC pension drops your annual allowance to £10,000. If you might still contribute (e.g. you keep UK employment income for a while), take only the PCLS and leave the rest untouched.</li>
<li><strong>Government vs private pensions split differently under the treaty.</strong> UK government-service pensions (civil service, forces, police, most NHS) stay taxable only in the UK under Article 18(2) of the UK–Spain DTA. State pension and private pensions become taxable in Spain. Map which of your pensions is which now — it changes your Spanish bracket arithmetic and whether Beckham helps you at all (Module 3).</li>
</ul>
<p>Also brief your providers: several UK platforms restrict drawdown instructions from non-UK addresses, and some will not open new drawdown arrangements for non-residents at all. Getting drawdown <em>structured</em> (not necessarily drawn) before you leave keeps every option open.</p>
${callout('money', 'PCLS timing, £400k pot', 'Take the 25% lump sum (£100,000) while UK resident: £0 tax. Take it 6 months later as a Spanish resident: taxed as general income — on top of other income it lands mostly in the 37–45% bands ≈ €38,000–€45,000 of avoidable Spanish tax. Same money, one calendar decision.')}`,
      },
      {
        title: 'The document pack: apostilles and sworn translations',
        body: `<p>Spanish authorities only accept UK public documents that are (a) apostilled by the FCDO Legalisation Office and (b) translated by an official sworn translator (<em>traductor jurado</em>) accredited by the Spanish Ministry of Foreign Affairs. Do both before you leave — it is slower and more expensive from Spain.</p>
<p>Standard pack for a typical household:</p>
<ul>
<li>Birth certificates (each family member) — apostille + sworn translation</li>
<li>Marriage certificate — apostille + sworn translation</li>
<li>ACRO police certificate (needed for the visa; must be under 90 days old at application) — apostille</li>
<li>Degree/professional certificates if you may work — apostille + sworn translation</li>
<li>Medical certificate in consulate wording (Module 2) — usually issued bilingual, check your consulate</li>
</ul>
<p>2026 costs and timing: FCDO apostille £30–£45 per document, 2–10 working days by post (same-day premium service exists in London). Sworn translations run €35–€60 per page through translators on the MAEC list. ACRO standard service £63, 10–12 working days.</p>
${callout('tip', 'Order two ACRO certificates', 'The ACRO certificate must be under 90 days old when the consulate receives your application. If your appointment slips — and consulate appointments slip constantly — a stale certificate restarts the clock. A second certificate ordered a month later is £63 of cheap insurance.')}`,
      },
    ],
    checklist: [
      { id: 'target-year', label: 'Pick the target arrival window (July+ preserves a non-resident first year)', detail: 'Confirms your first Spanish tax year and the length of your UK-rules runway.' },
      { id: 'p85', label: 'File P85 with HMRC (plus NRL1 if letting your UK home)', deadline: 'within ~4 weeks of departure' },
      { id: 'sa109', label: 'Diarise the departure-year Self Assessment with SA109 split-year claim', deadline: 'by 31 Jan following the tax year' },
      { id: 'isa-reset', label: 'Reset ISA/GIA acquisition costs by sale-and-repurchase while UK resident', detail: 'Keep every contract note — they are your Spanish cost-basis evidence.' },
      { id: 'platform-policy', label: 'Confirm each investment platform\'s non-resident policy in writing' },
      { id: 'property-decision', label: 'Decide the UK property path (sell-before / sell-after / keep-and-let)', detail: 'If selling: completion must land before the Spanish residency line.' },
      { id: 'pcls', label: 'Decide on the 25% pension lump sum while still UK resident', detail: 'Spain taxes it as income; the UK does not. One-way door.' },
      { id: 'pension-map', label: 'Map each pension: government-service vs private vs state', detail: 'Article 18 UK-Spain DTA treats them differently.' },
      { id: 'documents', label: 'Apostille + sworn-translate the document pack; order ACRO (x2)', deadline: 'ACRO must be <90 days old at visa application' },
      { id: 'valuations', label: 'Date-stamp valuations of every significant asset at the move', detail: 'Needed for Modelo 720 and future Spanish CGT calculations.' },
    ],
  },
  {
    n: 2,
    slug: 'visa',
    title: 'Choosing the right visa',
    duration: '120 min',
    summary:
      'NLV, DNV, work permit or family reunification — with the 2026 thresholds, the document checklists consulates actually enforce, and the quirks of each UK consulate.',
    sections: [
      {
        title: 'The decision tree',
        body: `<p>Post-Brexit, four routes cover essentially every British applicant. Start from your income type — it decides the route more than anything else:</p>
${table(
  ['Your situation', 'Route', '2026 income bar', 'Work allowed?'],
  [
    ['Passive income only (pension, rent, dividends)', 'Non-Lucrative Visa (NLV)', '€28,800/yr + €7,200 per dependant (400% + 100% IPREM)', 'No — none, not even remote'],
    ['Remote employee or freelancer, non-Spanish clients', 'Digital Nomad Visa (DNV)', '€2,849/mo gross (200% SMI); +75%/+25% SMI for dependants', 'Yes — remote for non-Spanish firms; ≤20% Spanish clients if freelance'],
    ['Job offer from a Spanish employer', 'Work visa (cuenta ajena)', 'Set by contract', 'Yes — for that employer'],
    ['Spouse/parent of an EU citizen or Spanish resident', 'Family reunification / EU family member', 'Sponsor shows means', 'Yes (EU-family route)'],
  ],
)}
<p>Two routes people ask about that are usually wrong: the <strong>Golden Visa</strong> property route closed in 2025 (only fund/business investment variants survive, and they suit almost nobody reading this), and <strong>student visas</strong> — real, but a poor fit for permanent movers because years on a student card count only 50% toward long-term residency.</p>
<p>The NLV-vs-DNV boundary is the one that matters. The NLV bans <em>all</em> work — including UK remote work. Consulates now actively look for employment income in your bank statements and will refuse or later non-renew if they find it. If you will keep working remotely, the DNV is not optional — it is the only honest route, and it happens to come with Beckham Law eligibility (Module 3), which the NLV does not.</p>
${callout('warning', 'The NLV remote-work myth', 'Forums are full of "just get the NLV and keep your UK job quiet." Consulates cross-read your own submitted bank statements; salary credits are visible. Refusals on this ground are rising, and a refusal goes on your record for every future Schengen application. If you work, apply DNV.')}`,
      },
      {
        title: 'NLV: proving passive income properly',
        body: `<p>The 2026 NLV bar is 400% of IPREM for the main applicant — <strong>€28,800/year (€2,400/month)</strong> — plus 100% of IPREM (<strong>€7,200/year</strong>) per dependant. A couple therefore shows €36,000; a family of four €50,400. IPREM is frozen at €600/month for 2026; it moves most years, so re-check in the year you apply (<a href="/thresholds">live table here</a>).</p>
<p>What counts, in descending order of how much consulates like it:</p>
<ol>
<li><strong>Pensions in payment</strong> — state, occupational, annuities. Show award letters + 6 months of bank credits.</li>
<li><strong>Rental income</strong> — tenancy agreements + 6–12 months of credits + latest SA return.</li>
<li><strong>Dividends/interest from a portfolio</strong> — broker statements + tax returns. Some consulates also want to see the capital base.</li>
<li><strong>Savings alone</strong> — accepted case-by-case, typically at 4× the annual requirement (~€115,000+ for a single applicant) and never guaranteed. Pair savings with at least some recurring income if you can.</li>
</ol>
<p>Everything financial must be officially translated, and consulates want consistency: the same numbers appearing in bank statements, tax returns and award letters. Round-number "top-up" transfers from relatives the month before applying are spotted instantly and read as gaming.</p>
${callout('tip', 'Show net, organised, boring', 'Consulate reviewers spend minutes, not hours, per file. A single PDF per income source — award letter, then statements highlighted where the credit lands, then translation — gets approved. Sixty loose pages of raw statements gets "additional documentation requested" and a 2-month delay.')}`,
      },
      {
        title: 'DNV: the remote-worker file',
        body: `<p>The DNV bar for 2026 is 200% of the SMI — <strong>€2,849/month gross</strong> for the main applicant, +75% SMI (~€1,068) for the first dependant, +25% (~€356) for each further dependant. The SMI rises most years; verify at application time.</p>
<p>Beyond income, the DNV file has four load-bearing documents:</p>
<ul>
<li><strong>Employer letter (employees)</strong>: confirms your role, salary, that remote work from Spain is authorised, and that the company has operated for 1+ year. On company letterhead, signed, translated.</li>
<li><strong>Company registration proof</strong>: Companies House extract for a UK employer, apostilled.</li>
<li><strong>Social security coordination</strong>: either an A1 certificate from HMRC keeping you in UK NI (rare post-Brexit; the UK-Spain bilateral makes this possible for postings but most applicants instead register as autónomo in Spain), or a signed commitment to register with Spanish social security. Freelancers: you will become <a href="/spain/autonomo">autónomo</a> after arrival — the consulate wants to see you know that.</li>
<li><strong>Qualifications or experience</strong>: degree certificate (apostilled) or evidence of 3+ years professional experience in your field.</li>
</ul>
<p>Freelancers may bill Spanish clients up to 20% of turnover — but the cleaner your file reads as "foreign clients only," the smoother the approval. You can apply at the UK consulate (3-year card via UGE route in some cases, commonly 1-year visa then 3-year renewal) or enter Spain and apply in-country to the UGE within your 90 visa-free days — the in-country route gets you a 3-year card immediately and is now the more popular path.</p>
${callout('tip', 'In-country UGE application', 'Fly to Spain as a tourist, apply online to the Unidad de Grandes Empresas within your first weeks, receive a 3-year residence card, skip the consulate queue entirely. Processing is a statutory 20 working days with positive administrative silence. This is how most 2026 DNV approvals are actually happening — but do not start work in Spain before the approval lands.')}`,
      },
      {
        title: 'The medical certificate and criminal record, decoded',
        body: `<p>Two documents cause a disproportionate share of rejections:</p>
<p><strong>Medical certificate.</strong> Must state — in wording that tracks the International Health Regulations 2005 — that you do not suffer from diseases with serious public-health repercussions. UK GPs often refuse or write their own wording; consulates then reject it. Use a private GP service that knows the Spanish consular formula (£80–£150), request it bilingual or have it sworn-translated, and date it inside 90 days of your appointment.</p>
<p><strong>ACRO police certificate.</strong> Covers the last 5 years of residence. "Stepped down" convictions still appear in some data sets — if you have any record at all, take advice before applying rather than hoping. Apostille required. Under 90 days old at submission (some consulates say 6 months — the safe play is 90 days).</p>
<p>Both documents are per-adult; children under 18 need neither (medical requirements for minors vary by consulate — check yours).</p>`,
      },
      {
        title: 'Consulate quirks: London, Manchester, Edinburgh',
        body: `<p>Your consulate is fixed by where you live (jurisdiction is enforced — a Manchester-area resident cannot file in London). As of early 2026:</p>
${table(
  ['Consulate', 'Covers', 'Booking reality', 'Notes'],
  [
    ['London', 'South England, Wales', 'BLS-operated appointments; released in blocks, gone in minutes; 4–10 week wait typical', 'Strictest on document formatting; wants the medical certificate in its own bilingual template'],
    ['Manchester', 'Midlands + North England', '2–6 week waits; steadier release', 'Most pragmatic of the three on savings-based NLV files'],
    ['Edinburgh', 'Scotland, NI, far North', 'Shortest queues, small team', 'Slower decisions in summer; phone contact actually works'],
  ],
)}
<p>Decision times once submitted: NLV is nominally 1 month, really 4–10 weeks. Consulate DNV: similar. In-country UGE DNV: 20 working days statutory. You surrender your passport to the visa sticker process only at the end — but plan no travel in the last 2–3 weeks before collection.</p>
${callout('deadline', 'Visa → entry → TIE chain', 'The visa in your passport is valid 90 days. You must enter Spain within it, and then apply for your TIE card within 30 days of arrival (Module 4). Book the TIE fingerprint appointment (cita previa) the week you land — in Málaga, Alicante and Barcelona provinces, appointments run 3-6 weeks out.')}`,
      },
    ],
    checklist: [
      { id: 'route', label: 'Lock the route: NLV (no work at all) vs DNV (remote work) vs other', detail: 'If any employment income will continue, it must be DNV.' },
      { id: 'income-evidence', label: 'Assemble income evidence to the 2026 bar (€28,800 NLV / €2,849-mo DNV + dependant uplifts)', detail: 'One organised PDF per income source.' },
      { id: 'acro', label: 'Order ACRO certificate(s) and apostille', deadline: '<90 days old at submission' },
      { id: 'medical', label: 'Book consulate-wording medical certificate (bilingual)', deadline: '<90 days old at submission' },
      { id: 'apostille-translate', label: 'Apostille + sworn-translate every UK document in the file' },
      { id: 'insurance', label: 'Buy visa-compliant Spanish health policy — zero copay, no caps (Module 7)', detail: 'Sanitas / Adeslas / DKV issue consulate-format certificates.' },
      { id: 'appointment', label: 'Book consulate appointment (or plan the in-country UGE route for DNV)' },
      { id: 'submit', label: 'Submit, track, and calendar the 90-day entry window on approval' },
      { id: 'tie-plan', label: 'Pre-book the TIE cita previa for the week after landing', deadline: 'TIE application within 30 days of entry' },
    ],
  },
  {
    n: 3,
    slug: 'beckham-law',
    title: 'Beckham Law structuring',
    duration: '90 min',
    summary:
      'The special impatriate regime: 24% flat on Spanish employment income up to €600,000, foreign investment income outside Spanish tax entirely — for six years. Who qualifies, when standard IRPF actually wins, and the six-month election that cannot be recovered if missed.',
    sections: [
      {
        title: 'What the regime actually does',
        body: `<p>Article 93 LIRPF — the "Beckham Law" — lets qualifying new arrivals elect to be taxed like non-residents for the year of arrival plus the five following years. In practice, for a British mover, three effects matter:</p>
<ul>
<li><strong>Employment income at 24% flat</strong> up to €600,000/year (47% above). Compare standard IRPF where 24% is passed at roughly €35,000 of income and the top marginal rates run 45–50% depending on region.</li>
<li><strong>Foreign-source investment income is outside Spanish tax.</strong> UK dividends, interest, and capital gains on non-Spanish assets are simply not taxed by Spain while you are in the regime. (UK withholding/UK rules may still apply — e.g. UK rental income stays UK-taxable.)</li>
<li><strong>No Modelo 720, and wealth tax only on Spanish-situs assets.</strong> The foreign-asset declaration does not apply to Beckham participants, and Patrimonio/Solidaridad reach only your Spanish assets — a large quiet benefit for anyone with UK property or portfolios.</li>
</ul>
<p>Who qualifies (2026 rules, post-2023 expansion): you must not have been Spanish tax resident in the <strong>5 years</strong> before the move, and your move must be caused by one of — a Spanish employment contract; <strong>remote work for a foreign employer (the DNV case, explicitly added in 2023)</strong>; appointment as a director; qualifying entrepreneurial activity; or being a highly-qualified professional serving startups. Your accompanying spouse and children under 25 can also opt in under linked rules.</p>
<p>Who does <em>not</em>: autónomos with ordinary freelance activity (unless within the entrepreneur/highly-qualified carve-outs — specialist advice needed), professional sportspeople (excluded since 2015, ironically), and anyone whose income would flow through a Spanish permanent establishment.</p>`,
      },
      {
        title: 'The six-month window — the least forgiving deadline in this playbook',
        body: `${callout('deadline', 'Modelo 149, six months, no extensions, no second chances', 'The election is filed on Modelo 149 within six months of the start date of your Spanish social security registration (or the posting certificate). Day one of that clock is not your arrival date — it is the alta date in the social security system. Miss it by a day and the regime is gone for your entire stay in Spain. There is no discretionary relief. Diarise it three ways the week you register.')}
<p>Mechanics: file Modelo 149 electronically with your digital certificate or through your asesor. AEAT responds with a certificate of inclusion, usually inside 10 working days. From then on your employer withholds at the flat 24% (they need the certificate to run payroll correctly — give it to them immediately), and each spring you file <strong>Modelo 151</strong> (not the ordinary Modelo 100) as your annual return.</p>
<p>Duration and exit: arrival year + 5. You can renounce early (during November–December for the following year) — occasionally worth it if your income mix changes, e.g. you stop work and start living off foreign dividends that standard IRPF would tax at 19–30% but that also stop being your main income. Run the numbers before renouncing; you cannot re-enter.</p>`,
      },
      {
        title: 'Beckham vs standard IRPF: who wins where',
        body: `<p>Beckham is not automatically better. It trades a flat 24% and foreign-income exemption for the loss of personal/family allowances, the loss of most deductions, and — crucially — <em>no access to double-tax-treaty relief as a Spanish resident</em> (you are taxed as a non-resident, so some UK-source items like pensions can end up worse). The pattern:</p>
${table(
  ['Profile', 'Better regime', 'Why'],
  [
    ['Salary €60k, little else', 'Beckham — narrowly', 'Standard IRPF effective rate ≈ 27–29% vs flat 24%; gap widens fast above this'],
    ['Salary €120k+', 'Beckham — decisively', 'Standard marginal 45%+ vs 24%; five-figure annual saving'],
    ['Salary €45k + large UK dividend portfolio', 'Beckham', 'The exemption on foreign investment income usually outweighs everything else'],
    ['Salary under ~€50k, spouse + kids, mortgage', 'Often standard IRPF', 'Allowances (mínimo familiar), joint filing and deductions can beat the flat rate below ~€50-55k'],
    ['Retiree, UK pensions only', 'Beckham unavailable/pointless', 'Pension income is not employment income for these purposes; regime needs a qualifying work move'],
  ],
)}
${callout('money', 'Worked example — £95,000 remote salary (≈ €111,000)', 'Standard IRPF (Andalucía, single, no kids): ≈ €38,900 tax, effective 35%. Beckham: €111,000 × 24% = €26,640, effective 24%. Saving ≈ €12,260/yr, ≈ €73,500 over the six years — before counting the foreign-dividend exemption or the Modelo 720/wealth-tax relief. At £50k salary the same comparison shrinks to roughly €1,500–2,500/yr and can invert with family allowances.')}
<p>Run your own numbers with the <a href="/calculators/beckham-law">Beckham calculator</a> (also embedded below), then sanity-check the edge cases with an asesor who files Modelo 151s routinely — many high-street gestorías never see one.</p>`,
      },
      {
        title: 'Traps that cost real money',
        body: `<ul>
<li><strong>UK pensions under Beckham:</strong> as a treaty non-resident you can lose the DTA article that keeps private-pension taxation exclusive to residence. If a large pension drawdown is imminent, model it — Beckham can make pension income <em>worse</em>.</li>
<li><strong>Spanish-source investment income</strong> (Spanish dividends, Spanish rental) is still taxed under the regime, at non-resident rates. Beckham does not shelter your Marbella buy-to-let.</li>
<li><strong>Employer compliance:</strong> if your foreign employer refuses/fails to register the Spanish payroll or social-security position properly, your Modelo 149 clock and eligibility get murky. DNV holders working for a UK employer commonly resolve this via autónomo-style registration or an Employer of Record — decide the mechanism before you land, not after.</li>
<li><strong>The 5-year lookback is strict:</strong> even a forgotten year of Spanish tax residency in the past 5 (a sabbatical year, a pandemic year that hit 183 days) kills eligibility.</li>
<li><strong>Exit planning:</strong> in year 7 you fall onto standard IRPF with worldwide taxation, Modelo 720, and wealth tax. If your plan is a 5–6 year Spanish chapter, calendar the exit against this cliff; if permanent, use the Beckham years to restructure (e.g. realise foreign gains tax-free before year 7).</li>
</ul>`,
      },
      {
        title: 'Run your numbers',
        body: `<p>Use the live calculator below with your actual salary. It compares standard IRPF against the Beckham flat rate for your income level — the crossover typically sits around €50,000–€55,000 for a single filer, higher with family allowances.</p>`,
      },
    ],
    checklist: [
      { id: 'lookback', label: 'Verify 5-year non-residency lookback — check every year honestly', detail: 'Any 183+ day Spanish year in the window kills eligibility.' },
      { id: 'trigger', label: 'Confirm your qualifying trigger (contract / DNV remote work / director / entrepreneur)' },
      { id: 'payroll-mechanism', label: 'Agree the payroll & social security mechanism with your employer (or EoR/autónomo route) before arrival' },
      { id: 'model', label: 'Model Beckham vs standard IRPF on your full income mix', detail: 'Include foreign dividends, pensions, and the Modelo 720/wealth-tax effect — not just salary.' },
      { id: 'alta-date', label: 'Record your social security alta date the day it happens', detail: 'This starts the 6-month Modelo 149 clock.' },
      { id: 'form-149', label: 'File Modelo 149', deadline: 'within 6 months of the alta — absolute' },
      { id: 'certificate', label: 'Deliver the AEAT inclusion certificate to your employer for 24% withholding' },
      { id: 'modelo-151', label: 'Diarise Modelo 151 (not 100) for each spring of the regime' },
      { id: 'family', label: 'File linked elections for spouse/children if beneficial' },
      { id: 'exit-plan', label: 'Calendar the year-7 cliff: restructure foreign gains before the regime ends' },
    ],
  },
  {
    n: 4,
    slug: 'arriving',
    title: 'Arriving and registering',
    duration: '75 min',
    summary:
      'NIE, TIE, padrón, Modelo 030, social security — five registrations, one correct order, and the regional quirks that change the paperwork in Andalucía, Madrid, Valencia and Cataluña.',
    sections: [
      {
        title: 'The order of operations',
        body: `<p>Everything in Spanish bureaucracy hangs off something else. Do these in sequence and each step takes days; do them out of order and you will be collecting rejections:</p>
<ol>
<li><strong>NIE</strong> — your foreigner identification number. If you came through a consulate visa, an NIE is usually assigned inside the visa itself (check the sticker). Otherwise apply with form EX-15 + Modelo 790-012 fee (~€10) at a policía nacional extranjería office.</li>
<li><strong>Empadronamiento (padrón)</strong> — registration at your town hall as living at your address. Bring passport, rental contract (or landlord authorisation), and the completed form. Free. The certificate (volante) it produces is the key that opens healthcare, schools, TIE and residency-day evidence.</li>
<li><strong>TIE fingerprint appointment</strong> — within 30 days of entry for visa holders. Form EX-17, Modelo 790-012 fee (~€16-22), passport, visa, padrón, photo. Card ready for collection in 3–5 weeks.</li>
<li><strong>Modelo 030</strong> — registers/updates your address with the tax agency (AEAT). Ten minutes online with a digital certificate, or in person. Without it, AEAT notifications go nowhere — and AEAT notifications carry deadlines.</li>
<li><strong>Social security (alta)</strong> — via your employer, or yourself if autónomo (Module 6 covers the autónomo path). Remember: this alta date starts the Beckham 6-month clock.</li>
</ol>
${callout('tip', 'Get a digital certificate immediately', 'The certificado digital (FNMT) or Cl@ve registration turns every subsequent interaction — AEAT, social security, DGT, town halls — from a queue into a web form. Request it as soon as you have your NIE; validation is one short in-person appointment, and it will save you literal days across year one.')}`,
      },
      {
        title: 'The padrón, properly',
        body: `<p>The padrón is deceptively important. It is the document Spain treats as ground truth for where you live: healthcare card issuance keys off it, school places are allocated by padrón catchment, the Convenio Especial healthcare buy-in requires 12 continuous months of it, and at renewal time it evidences your residence continuity.</p>
<p>Practicalities that differ by town hall:</p>
<ul>
<li>Most big-city ayuntamientos need a <em>cita previa</em> booked online; smaller towns take walk-ins.</li>
<li>Renting a room or staying with friends? The property owner can register you with a signed authorisation + their ID — you do not need your own lease.</li>
<li>Some ayuntamientos (Madrid, Barcelona) now do periodic re-confirmation letters for non-EU registrants — respond to them or you get silently removed, which breaks the continuity you may later need.</li>
</ul>
<p>Every family member gets registered, including children — schools will ask for each child's own volante de empadronamiento.</p>`,
      },
      {
        title: 'Regional quirks worth knowing',
        body: `${table(
  ['Region', 'What is different', 'Practical effect'],
  [
    ['Andalucía', 'Extranjería offices in Málaga are the busiest in Spain; TIE citas scarce', 'Book the TIE appointment before you fly; consider quieter provincial offices (e.g. Antequera vs Málaga capital) where jurisdiction allows'],
    ['Madrid', 'Everything digitalised; padrón re-confirmations enforced', 'Fastest region end-to-end if you have the digital certificate; do not ignore padrón letters'],
    ['Valencia/Alicante', 'Huge expat volume; sworn-translation demands stricter at some town halls', 'Carry translations of the rental contract if it is in English'],
    ['Cataluña', 'Some municipal forms Catalan-first; NIE/TIE queues in Barcelona long', 'Allow +2-4 weeks vs elsewhere; small towns around Barcelona are faster than the city'],
  ],
)}
<p>None of these change the law — they change the waiting time and the photocopies. The playbook rule: <strong>book every appointment the moment the previous document is in hand</strong>, because the queue is always the bottleneck.</p>`,
      },
      {
        title: 'Driving licence: the 6-month window',
        body: `<p>Your UK licence is valid for driving in Spain for your first 6 months of residency. Under the UK–Spain agreement in force since 2023, you can <strong>exchange</strong> it for a Spanish licence without retesting — but the exchange must be initiated within that window (the DGT counts from your TIE issue date in practice).</p>
<p>Process: DGT cita previa → psychophysical aptitude test at an authorised centre (~€40–€60, eyesight/reflex check) → exchange application (~€28 fee) → temporary permit while the card arrives. After 6 months without initiating, you are legally an unlicensed driver in Spain and would need to sit the full Spanish test — in Spanish, theory and practical. Do not let this one drift.</p>
${callout('deadline', 'Initiate the DGT exchange within 6 months of residency', 'The queue for DGT appointments in coastal provinces regularly runs 4-8 weeks — meaning the real deadline to start looking is month 4, not month 6.')}`,
      },
    ],
    checklist: [
      { id: 'nie', label: 'Confirm/obtain NIE (check your visa sticker first)', detail: 'EX-15 + Modelo 790-012 if not already assigned.' },
      { id: 'padron', label: 'Register the whole family on the padrón', detail: 'Get a volante for each person; schools and healthcare will ask.' },
      { id: 'tie', label: 'TIE fingerprint appointment (EX-17)', deadline: 'apply within 30 days of entry' },
      { id: 'digital-cert', label: 'Obtain FNMT digital certificate / Cl@ve for the whole household' },
      { id: 'modelo-030', label: 'File Modelo 030 registering your Spanish tax address' },
      { id: 'ss-alta', label: 'Complete social security alta (employer or autónomo)', detail: 'Record the date — Beckham clock starts here.' },
      { id: 'licence', label: 'Initiate UK→Spanish driving licence exchange at the DGT', deadline: 'start by month 4 of residency' },
      { id: 'collect-tie', label: 'Collect the TIE card and photograph/back up every document' },
    ],
  },
  {
    n: 5,
    slug: 'banking',
    title: 'Spanish banking',
    duration: '60 min',
    summary:
      'The two-account architecture: a Spanish bank for Bizum, direct debits and landlord credibility; Wise or Revolut for moving money at real exchange rates. Plus what each bank actually demands from a new arrival in 2026.',
    sections: [
      {
        title: 'The two-account architecture',
        body: `<p>Do not try to live in Spain from a UK account plus a card, and do not move your life savings into a Spanish account either. The setup that works:</p>
<ul>
<li><strong>A Spanish current account</strong> — because Spanish life runs on it: rent (landlords expect a Spanish IBAN and often a domiciliación), utilities and phone direct debits, Bizum (the ubiquitous P2P payment app — see below), and salary if employed locally.</li>
<li><strong>Wise (or Revolut) as the FX bridge</strong> — GBP→EUR at mid-market ±0.4–0.6% instead of the 2–3% buried spread in a bank international transfer. Fund the Spanish account from Wise in EUR via SEPA (arrives in hours, free/cheap).</li>
<li><strong>Your UK account stays open</strong> — for UK income, UK direct debits you keep (subscriptions, insurance), and credit-history continuity. Tell the bank you have moved (address change to Spain) rather than letting them find out; policies on non-resident customers vary and being upfront prevents sudden freezes.</li>
</ul>
${callout('money', 'The FX bleed, quantified', 'Moving £4,000/month via a UK bank\'s international transfer at a typical 2.4% all-in spread costs ≈ £96/month. Via Wise at ~0.45%: ≈ £18. Same money, £930+/year difference — forever. This is the highest-ROI 20 minutes in this module.')}`,
      },
      {
        title: 'Which Spanish bank, for whom',
        body: `${table(
  ['Bank', 'Account to ask for', 'Fees (2026)', 'Best for'],
  [
    ['Sabadell', 'Cuenta Expansión (expat desk)', '€0 with conditions; English-speaking branches on the costas', 'Coastal movers who want an English-speaking branch human'],
    ['BBVA', 'Cuenta Online Sin Comisiones', '€0 online, no conditions', 'Best app in Spanish banking; fine fully-remote once you have NIE'],
    ['Santander', 'Cuenta Online / One', '€0 online tier', 'Biggest branch network; useful for cash-heavy needs'],
    ['CaixaBank', 'Day-to-day + imaginBank', '€0 (imagin) / conditions otherwise', 'Dense ATM coverage; HolaBank desks for foreigners in tourist areas'],
    ['Openbank', 'Cuenta Corriente', '€0, no conditions', 'Santander-owned digital; easy second account'],
  ],
)}
<p><strong>What they ask a new arrival for:</strong> passport + NIE (or TIE), proof of address (padrón or rental contract), and — under anti-money-laundering rules — proof of economic activity: an employment contract, pension letters, or last UK tax return. Non-resident accounts (pre-NIE) exist at most banks with a <em>certificado de no residencia</em> but carry fees; open the resident account once your NIE exists and the fees drop to zero.</p>
<p><strong>Bizum</strong>: activate it inside your Spanish bank's app the day the account opens. It is how Spaniards split dinner, pay the cleaner, pay the plumber's deposit, buy second-hand. Wise/Revolut cannot join it — this alone justifies the Spanish account.</p>`,
      },
      {
        title: 'Direct debits, deposits and the paperwork month',
        body: `<p>Month one banking admin, in order:</p>
<ol>
<li>Open the Spanish account (bring the full document stack; one visit if prepared).</li>
<li>Activate Bizum + the debit card + app.</li>
<li>Give the IBAN to your landlord; set the rent domiciliación if asked.</li>
<li>Move utilities (electricity, water, gas, internet, phone) onto Spanish direct debit — utility companies bill fortnightly-to-monthly and failed debits get services cut fast in Spain.</li>
<li>Audit your UK direct debits: kill the dead ones (gym, TV licence, UK breakdown cover), keep the UK-relevant ones on the UK account.</li>
<li>Set a monthly Wise standing transfer (salary day + 1) so the Spanish account never runs dry — failed Spanish direct debits incur €20–€39 fees <em>per bounce</em> at most banks.</li>
</ol>
${callout('warning', 'Deposit protection is per-bank, per-country', 'Spanish accounts are protected by the Spanish FGD to €100,000 per person per bank — separate from (not additive with) your UK FSCS £85,000. Keep working balances in Spain and larger reserves where you have deliberate protection, not by accident of where a transfer landed.')}`,
      },
    ],
    checklist: [
      { id: 'wise', label: 'Open Wise (and/or Revolut) before leaving the UK', detail: 'Verification is easier with a UK address.' },
      { id: 'main', label: 'Open the Spanish resident account once NIE is in hand' },
      { id: 'bizum', label: 'Activate Bizum + card + app on day one' },
      { id: 'rent', label: 'Give landlord the Spanish IBAN; set rent payment method' },
      { id: 'utilities', label: 'Move all Spanish utilities to Spanish direct debit' },
      { id: 'standing-transfer', label: 'Set a monthly Wise GBP→EUR standing transfer', detail: 'Never fund Spanish debits ad hoc — bounces cost €20-39 each.' },
      { id: 'uk-audit', label: 'Audit UK direct debits: cancel dead ones, keep deliberate ones' },
      { id: 'notify-uk-bank', label: 'Notify UK bank of your Spanish address' },
    ],
  },
  {
    n: 6,
    slug: 'year-one-tax',
    title: 'Year-one tax filing',
    duration: '120 min',
    summary:
      'Modelo 100 (or 151), Modelo 720, autónomo quarterlies, wealth tax — the full year-one filing calendar with worked examples for the standard UK income mix: salary, pensions, UK rent, dividends.',
    sections: [
      {
        title: 'Your first Spanish tax year, mapped',
        body: `<p>Spain taxes the calendar year. You are tax resident for a year if you spend 183+ days in Spain in it (or your centre of economic interests is here). The first year you cross that line, your <em>entire</em> worldwide income for that calendar year comes into Spanish scope — including months before you physically arrived. This is why Module 1's July trick matters so much.</p>
<p>The filing calendar you now live on:</p>
${table(
  ['When', 'What', 'Who'],
  [
    ['11 Apr – 30 Jun', 'Modelo 100 (IRPF annual return) — or Modelo 151 for Beckham participants', 'Everyone resident the prior calendar year'],
    ['1 Jan – 31 Mar', 'Modelo 720 — foreign assets declaration', 'Residents with foreign assets >€50k in any category (not Beckham)'],
    ['By 30 Jun', 'Modelo 714 — wealth tax, where due', 'Depends on region + net wealth (see below)'],
    ['20 Apr / Jul / Oct / 30 Jan', 'Modelos 130 + 303 quarterlies', 'Autónomos'],
    ['30 Jun (typically)', 'Solidaridad (Modelo 718) if net wealth > €3m', 'HNW residents'],
  ],
)}
${callout('tip', 'Year-one professional help is not optional', 'File year one with a cross-border asesor (€300–€600 for a standard return, €600–€1,200 with 720 and UK income). From year two, simple situations can self-file through Renta Web — it pre-populates Spanish-source data. What it never pre-populates is your UK income, which is exactly the part that gets people fined.')}`,
      },
      {
        title: 'How your UK income lands in the Spanish return',
        body: `${table(
  ['UK income', 'Spanish treatment', 'UK treatment after treaty', 'Mechanics'],
  [
    ['UK state pension', 'Taxable in Spain as general income', 'Paid gross (claim NT via DTA-Individual form)', 'Goes in Modelo 100 base general'],
    ['Private/occupational pension', 'Taxable in Spain', 'Claim gross payment from HMRC (form Spain-Individual + Spanish residency certificate)', 'Same'],
    ['Government-service pension (civil service, forces, police)', 'NOT taxed in Spain (but counts for rate purposes — exención con progresividad)', 'Taxed in UK as now', 'Declared in Spain for progression only'],
    ['UK rental income', 'Taxable in Spain', 'Also taxable in UK (NRL scheme) — UK keeps primary right', 'Spain gives credit for UK tax paid; keep the SA calculation'],
    ['UK dividends', 'Taxable in Spain (savings scale 19-30%)', 'No UK tax for non-residents (disregarded income)', 'Declare gross in the base del ahorro'],
    ['UK interest / bank accounts', 'Taxable in Spain', 'Paid gross', 'Base del ahorro'],
    ['ISA income/gains', 'Fully taxable — wrapper ignored', 'None', 'This is why Module 1 said reset or exit'],
  ],
)}
<p>The savings scale for 2026: 19% to €6,000 · 21% to €50,000 · 23% to €200,000 · 27% to €300,000 · 30% above. General-scale rates vary by region; Madrid and Andalucía sit lowest, Cataluña and Valencia highest.</p>
${callout('money', 'Worked example — retired couple, Andalucía', 'UK state pensions €24,000 + private pension drawdown €18,000 + UK dividends €8,000 + UK bank interest €1,500. Spain: general base €42,000 → after personal allowances (2 × €5,550 + age uplifts), IRPF ≈ €7,400. Savings base €9,500 → ≈ €1,865. Total ≈ €9,265, effective ≈ 18%. Key actions that got them there: pensions paid gross from HMRC via the DTA forms (no double withholding to reclaim), and dividends moved out of the dead ISA wrapper in a pre-move reset.')}`,
      },
      {
        title: 'Modelo 720: the declaration you cannot skip',
        body: `<p>If on 31 December you hold foreign assets over €50,000 in any of three categories — (1) accounts, (2) securities/insurance/funds, (3) real estate — you must declare them on Modelo 720 by <strong>31 March</strong>. It is informational (no tax due with it), but non-filing penalties, even post-ECJ-softening, run €150–€300 minimum and escalate, and an unfiled 720 flags your file for inspection.</p>
<p>Practical notes:</p>
<ul>
<li>Thresholds are per <em>category</em>, valued at 31 December (accounts: also average Q4 balance).</li>
<li>Once filed, you re-file only when a category grows by >€20,000, you open/close positions, or you acquire new reportable assets.</li>
<li>Joint assets: each holder declares the full value with their ownership %.</li>
<li>UK pensions: generally <em>not</em> reportable while unvested/not in drawdown (position confirmed by DGT rulings) — but drawdown funds and SIPPs in payment are grey; this is a specific question for your asesor, not a guess.</li>
<li>Beckham participants: exempt from 720 entirely for the regime years.</li>
</ul>`,
      },
      {
        title: 'Autónomo quarterlies (if self-employed)',
        body: `<p>Registered autónomo (the standard DNV freelancer path)? Your year is quarterly:</p>
<ul>
<li><strong>Modelo 130</strong> — 20% payment on account of IRPF on your quarterly profit (skipped if >70% of your invoicing had Spanish withholding — rare for foreign-client freelancers).</li>
<li><strong>Modelo 303</strong> — VAT. UK/non-EU B2B clients: outside scope. EU B2B: reverse charge (plus Modelo 349 informative). Spanish clients: 21% IVA charged and remitted.</li>
<li><strong>Social security cuota</strong> — income-banded, from ≈ €200/month at low declared yields to €590+/month at higher bands (2026 table); new autónomos get the <em>tarifa plana</em> ≈ €87/month for 12 months (extendable to 24 at low income).</li>
</ul>
<p>Deductible costs are real but formal: home-office share (30% of utilities on the m² proportion), equipment, coworking, professional insurance, the cuota itself. Keep facturas for everything — bank statements alone do not survive an inspection. A gestor runs €60–€120/month and pays for itself in avoided errors.</p>`,
      },
      {
        title: 'Wealth tax and the year-one asset snapshot',
        body: `<p>Two wealth taxes exist; where you live decides whether you feel them:</p>
<ul>
<li><strong>Patrimonio</strong> — regional. Madrid and Andalucía rebate it 100% (you file but pay €0, filing only mandatory if assets >€2m or quota positive elsewhere). Valencia allowance €500k→€1m (2026 reform), Cataluña toughest. Personal allowance €700k standard + €300k main home. Full region table in the <a href="/spain/patrimonio">Patrimonio guide</a>.</li>
<li><strong>Solidaridad (ITSGF)</strong> — national, catches net wealth above €3m even in rebate regions, 1.7%–3.5% marginal. Credit given for Patrimonio actually paid.</li>
</ul>
<p>Year-one action is simple: build the 31-December asset snapshot (every account, fund, property, with documentation), because the same numbers feed Modelo 720, Patrimonio, and — one day — Sucesiones planning. An hour of spreadsheet discipline in December saves your asesor two billable hours in March.</p>`,
      },
    ],
    checklist: [
      { id: 'asesor', label: 'Engage a cross-border asesor fiscal for year one', detail: 'Budget €300–€1,200 depending on 720/UK income complexity.' },
      { id: 'dta-forms', label: 'File HMRC form Spain-Individual (+ Spanish residency certificate) to get UK pensions paid gross' },
      { id: 'snapshot', label: 'Build the 31-December worldwide asset snapshot' },
      { id: 'modelo-720', label: 'File Modelo 720 if any category >€50k', deadline: '31 March' },
      { id: 'modelo-100', label: 'File Modelo 100 (or 151 if Beckham)', deadline: '30 June' },
      { id: 'wealth', label: 'Check Patrimonio/Solidaridad position for your region', deadline: '30 June where due' },
      { id: 'quarterlies', label: 'If autónomo: calendar Modelos 130/303 quarterly', deadline: '20 Apr / 20 Jul / 20 Oct / 30 Jan' },
      { id: 'facturas', label: 'Set up factura/receipt discipline from day one (folder per quarter)' },
    ],
  },
  {
    n: 7,
    slug: 'life-admin',
    title: 'Healthcare, schools, life admin',
    duration: '90 min',
    summary:
      'The three doors into Spanish public healthcare, when to keep private cover, how school allocation really works — and the residual admin (mobile, utilities, wills) that makes the move stick.',
    sections: [
      {
        title: 'Healthcare: which of the three doors is yours',
        body: `${table(
  ['Door', 'Who it fits', 'Cost (2026)', 'Notes'],
  [
    ['Social security contributions', 'Employees and autónomos', 'Included in contributions', 'Full SNS access for you + dependants from the alta'],
    ['S1 form', 'UK State Pension recipients (and some exportable benefits)', 'Free — UK funds it', 'Apply to NHS Overseas Healthcare Services; register the S1 at INSS; then get your health card. Also exempts you from private-insurance requirements at renewals'],
    ['Convenio Especial', 'Early retirees / non-working NLV holders', '€60/mo under 65 · €157/mo 65+', 'Requires 12 months of continuous padrón first; per person; excludes prescriptions subsidy'],
  ],
)}
<p>Until one of those doors opens, your visa-compliant private policy (Sanitas, Adeslas, DKV, Asisa — zero-copay, no-cap versions) is doing the work. Typical 2026 premiums: ~€60–€90/month at 40, €120–€200 at 60, more past 65. Many movers keep a private policy even after entering the SNS for speed on specialists and English-speaking hospitals — downgrade to a copay version (30–50% cheaper) once it is no longer visa-critical.</p>
${callout('tip', 'Pensioners: the S1 is the single best form in this playbook', 'It hands your healthcare bill to the UK, gives you full SNS access including subsidised prescriptions (10% capped for pensioners), and satisfies renewals without private premiums. Apply before you move; it takes weeks, not days.')}`,
      },
      {
        title: 'Schools: how places are actually allocated',
        body: `<p>Three systems, one calendar:</p>
<ul>
<li><strong>Public (colegios públicos)</strong> — free, Spanish-medium (regional co-official languages where they exist). Places allocated on a points system: padrón catchment, siblings, renta. The main application window is <strong>February–April for September</strong>; arrive mid-year and you take what has space (the town hall education office assigns).</li>
<li><strong>Concertado</strong> — state-funded private, nominally free plus "voluntary" fees €100–€250/month. Same application windows, often religious, strong middle option.</li>
<li><strong>Private/international</strong> — €7,000–€25,000/year. British-curriculum schools cluster on the Costa del Sol, Madrid, Valencia and Barcelona (<a href="/spain/schools">full directory</a>). Entry any time subject to space; the good ones waitlist for September from January.</li>
</ul>
<p>Age placement is by calendar year of birth (not the UK September cut-off) — a child can land a school-year "behind" or "ahead" of their UK cohort; know this before it surprises you at enrolment. For under-8s arriving into public school, immersion works remarkably fast; from ~11 up, weigh the international route or a concertado with strong language support.</p>
${callout('warning', 'The padrón drives the school map', 'Your catchment is fixed by your padrón address at application time. Families who rent "anywhere for now" and then apply discover their target school is out of catchment. If schools matter, choose the neighbourhood for the school first and the house second.')}`,
      },
      {
        title: 'The residual admin that makes it stick',
        body: `<ul>
<li><strong>Mobile + internet:</strong> port to a Spanish provider (Movistar/Vodafone/Orange or the cheap MVNOs — Digi, O2). Keep your UK number alive on a £2/month PAYG SIM for UK bank SMS codes — losing 2FA access to UK accounts from abroad is a genuine nightmare.</li>
<li><strong>Spanish will:</strong> make one covering your Spanish assets (notary, ~€60–€120, an hour). It sits alongside your UK will and, since Brussels IV, you can elect UK law to govern succession — which sidesteps Spanish forced-heirship on the estate side. It does <em>not</em> change Sucesiones tax (see the <a href="/spain/sucesiones">inheritance-tax guide</a> — beneficiaries pay, spouses are not exempt, region decides how much).</li>
<li><strong>Padrón renewals / confirmations:</strong> answer any town-hall letter within the stated window.</li>
<li><strong>UK loose ends:</strong> electoral roll (you can stay registered as an overseas voter), TV licence cancellation + refund, DVLA address rules (you cannot keep a UK-registered car in Spain beyond 6 months — matriculate it or sell it before leaving; matriculation costs typically make selling the right answer).</li>
<li><strong>Pets already here:</strong> register with a local vet, update the microchip country record, and get the Spanish pet passport at the first visit.</li>
</ul>`,
      },
    ],
    checklist: [
      { id: 'healthcare-door', label: 'Identify your SNS door (contributions / S1 / Convenio) and start it', detail: 'S1 applicants: request from NHS OHS before or immediately after moving.' },
      { id: 'private-policy', label: 'Keep visa-compliant private cover until your SNS door opens; then downgrade or keep by choice' },
      { id: 'health-card', label: 'Get the tarjeta sanitaria for each family member once in the system' },
      { id: 'school-window', label: 'Apply for school places in the Feb–Apr window (or via the town hall mid-year)', detail: 'Padrón address fixes your catchment.' },
      { id: 'mobile', label: 'Move to a Spanish mobile plan; keep the UK number on cheap PAYG for 2FA' },
      { id: 'will', label: 'Sign a Spanish will electing UK succession law (notary)' },
      { id: 'car', label: 'Resolve the car: sell in UK or budget matriculation — 6-month limit' },
      { id: 'uk-loose-ends', label: 'Close UK loose ends: TV licence, insurers, DVLA, overseas voter registration' },
    ],
  },
  {
    n: 8,
    slug: 'years-2-to-5',
    title: 'Years 2 to 5: renewals to permanence',
    duration: '60 min',
    summary:
      'Renewal mechanics and the day-counting that protects them, the five-year switch to long-term residency, when UK ties stop mattering, and the ten-year citizenship question.',
    sections: [
      {
        title: 'Renewals without drama',
        body: `<p>Renewal cadence depends on your card:</p>
<ul>
<li><strong>NLV:</strong> initial 1 year → renewal for 2 years → renewal for 2 more → long-term at year 5. Each renewal re-tests income (at the same IPREM multiples, using the <em>then-current</em> IPREM) and now expects evidence you actually live here: <strong>more than 183 days/year in Spain</strong>, shown through padrón continuity, school records, utility bills.</li>
<li><strong>DNV:</strong> 3-year card → 2-year renewal → long-term at 5. Renewal re-tests the remote-work relationship and income at the current SMI multiple.</li>
<li>File renewals in the window <strong>60 days before to 90 days after</strong> expiry — the after-window works but never let it happen; everything else (travel, banking) wobbles with an expired card.</li>
</ul>
${callout('warning', 'Absences are the silent renewal-killer', 'NLV holders who treat Spain as a 4-month-a-year base fail the effective-residence test at renewal — and absences over 6 months in any year (or 10 months total across 5 years) also break the continuity required for long-term residency. Keep a simple day log; boarding passes and card statements are your evidence.')}`,
      },
      {
        title: 'Year 5: long-term residency changes the game',
        body: `<p>At five years of continuous legal residence you qualify for <strong>larga duración</strong> — long-term residency. It matters because it decouples you from your original visa's conditions: no more income re-testing, no more NLV work ban (you can work freely), 5-year cards renewed as formality. Apply through extranjería with your residence history, padrón continuity and absence record.</p>
<p>From here your only ongoing obligations are the universal ones: taxes (Module 6 becomes routine), padrón upkeep, and — if you were on Beckham — managing the year-7 transition onto standard IRPF, Modelo 720 and wealth tax (calendar it; year 6 is the time to realise foreign gains tax-free and restructure).</p>`,
      },
      {
        title: 'The citizenship question, honestly',
        body: `<p>Spanish citizenship by residence needs <strong>10 years</strong> (UK nationals get no shortcut), the DELE A2 Spanish exam and the CCSE culture test, and — the hard part — Spain demands renunciation of your previous nationality at the oath for Brits. In practice the UK does not treat that declaration as effective loss of British citizenship, and many dual-life Britons live in exactly that ambiguity; but understand you would be making a formal renunciation declaration under Spanish law, and Spain can (rarely, but legally) act on dual-use of the renounced nationality.</p>
<p>For most buyers of this playbook, <strong>long-term residency + UK passport is the steady state</strong>: permanent rights in Spain, no renunciation question, UK citizenship intact. Citizenship is worth the trouble mainly for those with Spanish-born children anchoring here permanently (children born in Spain can claim after just 1 year of residence) or who want EU-wide free movement rights back.</p>
${callout('tip', 'The under-appreciated year-5 move', 'Even if you never want citizenship, apply for larga duración the month you qualify. It removes the income-retest risk from your life (rule changes, IPREM rises, a bad income year) and upgrades your status before any policy window can close. There is no reason to renew an NLV a third time when permanence is available.')}`,
      },
    ],
    checklist: [
      { id: 'day-log', label: 'Keep a running Spain-days log with evidence (183+ days/yr; no 6-month absences)' },
      { id: 'renewal-1', label: 'First renewal filed in the window', deadline: '60 days before card expiry' },
      { id: 'income-recheck', label: 'Re-verify income against current IPREM/SMI before each renewal' },
      { id: 'larga-duracion', label: 'Apply for long-term residency at year 5 — do not just renew again' },
      { id: 'beckham-exit', label: 'If on Beckham: execute the year-6 restructuring before standard rules bite in year 7' },
      { id: 'citizenship', label: 'Make the citizenship-vs-permanent-residency decision consciously at year 8-9' },
    ],
  },
];
