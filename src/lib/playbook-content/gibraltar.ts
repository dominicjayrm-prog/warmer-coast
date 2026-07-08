import type { PlaybookModule } from '@/lib/playbook-modules';

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

export const gibraltarModules: PlaybookModule[] = [
  {
    n: 1,
    slug: 'pre-move',
    title: 'Pre-move UK actions',
    duration: '75 min',
    summary:
      'Gibraltar-specific UK preparation: the source-of-funds dossier that decides your Cat 2 and banking outcomes, the sterling-zone simplifications, and what NOT to bother with (no apostille circus here).',
    sections: [
      {
        title: 'Why the Gibraltar pre-move is different',
        body: `<p>Gibraltar removes half the friction of a Spain or Portugal move — it is English-speaking, common-law, sterling, with UK-recognised qualifications and no language of bureaucracy to fight. What it adds instead is <strong>scrutiny</strong>. Everything in a Gibraltar move — Cat 2 status, HEPSS, bank accounts, even upmarket rentals — runs on anti-money-laundering-grade due diligence. Your pre-move work is therefore less about apostilles and more about building one impeccable dossier you will reuse everywhere:</p>
<ul>
<li><strong>Source-of-funds narrative:</strong> a one-page chronology of how your wealth arose (career, business sale, inheritance, property), each step evidenced — completion statements, SPA extracts, probate grants, P60/SA history.</li>
<li><strong>Source-of-wealth evidence pack:</strong> last 3 years of tax returns, 6–12 months of statements for each major account, investment portfolio valuations, property valuations.</li>
<li><strong>Identity set:</strong> certified passport copies (UK solicitor/notary certification is accepted — no apostille needed for most Gibraltar purposes), recent utility bills, and a clean ACRO certificate.</li>
</ul>
${callout('tip', 'Build the dossier once, use it five times', 'Finance Centre (Cat 2), the bank, the landlord\'s agent, the insurance broker and — if you buy — the conveyancer will each run KYC. A pre-built, indexed PDF dossier turns five interrogations into five formalities. HNW service providers in Gibraltar privately admit the quality of this pack is the biggest single predictor of processing speed.')}`,
      },
      {
        title: 'UK tax exit: the SRT matters more here',
        body: `<p>Gibraltar has <strong>no double tax treaty network</strong> in the usual sense — but it has one crucial instrument: the <strong>UK–Gibraltar DTA (2019)</strong>. It allocates taxing rights between the UK and Gibraltar and contains the tie-breaker that decides close cases. Because Gibraltar is 20 minutes from Marbella and many movers keep deep UK ties, the <a href="/uk-statutory-residence-test">UK Statutory Residence Test</a> is the battleground: HMRC pursues "Gibraltar residents" who in substance never left Britain's orbit.</p>
<p>Non-negotiables for a clean exit:</p>
<ul>
<li>Run the SRT properly for your departure year and claim split-year treatment on the SA109.</li>
<li>Day-count religiously from day one — Gibraltar residency itself has day requirements (Module 2) and the UK side has SRT bands; you are counting for two systems at once.</li>
<li>Understand what stays UK-taxed regardless: UK rental income, UK government-service pensions, and UK-situs assets for IHT (see below).</li>
</ul>
${callout('warning', 'IHT does not move with you', 'UK inheritance tax follows long-term residence (the post-2025 residence-based regime): leaving for Gibraltar starts a clock, but you generally remain in UK IHT scope for years after departure (up to 10 depending on your history). Gibraltar itself has NO inheritance tax — the mismatch is a planning window, not an instant escape. Estate planning belongs in year one, not year five.')}`,
      },
      {
        title: 'Sterling simplifications — and the one currency decision',
        body: `<p>No currency conversion on your wealth, no Modelo 720 analogue, no wealth tax, no CGT, no VAT. The financial move itself is close to trivial: your UK accounts keep working, Gibraltar banks hold GBP natively, and the Gibraltar pound is pegged 1:1.</p>
<p>The one real currency decision: if your life will straddle the frontier (live or spend heavily in Spain — most do), you need a EUR layer. Set up Wise/Revolut for EUR spending before you move, and if you will rent in Spain while working in Gibraltar (Module 4), plan which side your salary lands and how it crosses.</p>`,
      },
    ],
    checklist: [
      { id: 'dossier', label: 'Build the indexed source-of-funds/wealth dossier (one PDF)', detail: '3 yrs tax returns, statements, valuations, wealth chronology.' },
      { id: 'acro', label: 'Order ACRO certificate (certified copy, no apostille needed)' },
      { id: 'srt', label: 'Run the SRT for your departure year; plan the split-year claim' },
      { id: 'p85', label: 'File P85 (+ NRL1 if letting UK property)' },
      { id: 'iht', label: 'Map your UK IHT exposure clock and brief an estate planner' },
      { id: 'eur-layer', label: 'Set up the EUR layer (Wise/Revolut) for the Spanish side of life' },
    ],
  },
  {
    n: 2,
    slug: 'cat-2',
    title: 'Category 2 status',
    duration: '120 min',
    summary:
      'The HNW residency route end-to-end: the £2m net-worth test, approved accommodation, the Finance Centre application, the £37,000–£42,380 tax band it buys you, and the annual obligations that keep it.',
    sections: [
      {
        title: 'What Cat 2 actually buys',
        body: `<p>Category 2 status caps your Gibraltar income tax by assessing only the first <strong>£118,000</strong> of worldwide income under the Gross Income Based system. The result: a minimum annual tax of <strong>£37,000</strong> and a maximum of <strong>£42,380</strong> (2025/26 rates — Gibraltar's tax year runs 1 July to 30 June). Whether you earn £200,000 or £20 million, the Gibraltar bill sits in that band.</p>
<p>Add what Gibraltar does not have — no CGT, no wealth tax, no inheritance tax, no VAT, no tax on savings interest or (for Cat 2 individuals) dividends from quoted companies — and the effective proposition for a £500k+/year individual is an all-in rate under 10%. That is the product. The price of admission:</p>
<ul>
<li><strong>Net worth above £2 million</strong>, evidenced to the Finance Centre Director's satisfaction.</li>
<li><strong>Approved residential accommodation</strong> in Gibraltar — owned or rented — of a standard befitting the status, available to you year-round and not sublet.</li>
<li><strong>No prior Gibraltar residence or employment</strong>: not resident in the previous 5 years, and no gainful occupation in Gibraltar (limited exceptions — directorships of certain group entities can be permitted with consent).</li>
<li>Character requirements: references, clean record, the dossier from Module 1.</li>
</ul>
${callout('money', 'The arithmetic vs staying in the UK', 'UK additional-rate taxpayer on £600,000: income tax ≈ £258,000. Cat 2 in Gibraltar: £42,380 (max), plus no CGT on the portfolio and no further tax on investment income. Annual delta ≈ £215,000+. Against that: the cost of the accommodation requirement (£30k–£60k/yr rent for a qualifying flat) and the real obligation to make Gibraltar your genuine residence. For income above ~£180k the numbers dominate almost any Spanish or Portuguese structure — see the Spain-vs-Gibraltar comparison for the crossover analysis.')}`,
      },
      {
        title: 'The application, step by step',
        body: `<ol>
<li><strong>Engage a local sponsor.</strong> Applications go through a Gibraltar professional (law firm or accountancy — mandatory in practice). Fees £3,000–£7,500 for the application package.</li>
<li><strong>Secure the accommodation first.</strong> The Finance Centre wants the address in the application. Qualifying stock clusters in Ocean Village, Kings Wharf, Midtown, EuroCity, the South District. Rentals £2,500–£5,000+/month for a qualifying 2-bed; purchases £450k–£1.5m+. Your sponsor will confirm a specific unit "qualifies" before you commit.</li>
<li><strong>File the application:</strong> form, £1,050 non-refundable fee (2026), the dossier (net-worth evidence, references — typically one banker's and one professional reference — certified IDs, CV, accommodation evidence, private medical insurance covering Gibraltar).</li>
<li><strong>Finance Centre review:</strong> 4–10 weeks typically. Interviews are rare but possible.</li>
<li><strong>Certificate issued.</strong> Register with the Income Tax Office, obtain your civilian registration card, import your effects.</li>
</ol>
<p>The certificate is indefinite while conditions hold — but it is <em>reviewed</em>: the accommodation must stay, the ITO expects the annual return and the tax paid, and a Cat 2 who visibly lives in Marbella full-time invites precisely the scrutiny the status is designed to avoid.</p>
${callout('warning', 'Cat 2 is a residence status, not a brass plate', 'The Finance Centre and the ITO both expect genuine residence — and Spain actively hunts sham Gibraltar residents under the 2021 Spain–Gibraltar tax treaty: Spanish tax residency is asserted over individuals with Spanish spouses/homes/183+ Spanish days, with a presumption that is hard to rebut. If your life is actually in Sotogrande, Spain will tax you like it. The playbook position: live on the Rock enough that the question never gets interesting — and keep the day log to prove it.')}`,
      },
      {
        title: 'Annual obligations and the family position',
        body: `<ul>
<li><strong>Tax return</strong> to the ITO each year (Gibraltar tax year 1 July–30 June; return due 30 November). Your sponsor/accountant files it; the tax lands in the £37,000–£42,380 band, payable in instalments.</li>
<li><strong>Keep the accommodation</strong> — a lapsed lease unravels the status.</li>
<li><strong>Insurance</strong> — maintain private medical cover (Module 5 of the health section covers Gibraltar's GHA entitlements; Cat 2 holders are expected to carry private cover).</li>
<li><strong>Spouse and children:</strong> a spouse can be included within the holder's status (joint assessment within the same cap); children can attend Gibraltar's schools. One Cat 2 certificate covers the household's Gibraltar tax life.</li>
</ul>`,
      },
    ],
    checklist: [
      { id: 'sponsor', label: 'Engage a Gibraltar law/accountancy firm as sponsor', detail: '£3,000–£7,500 application package.' },
      { id: 'accommodation', label: 'Secure qualifying accommodation (confirm the specific unit qualifies before signing)' },
      { id: 'networth', label: 'Evidence net worth >£2m in the dossier format' },
      { id: 'references', label: 'Obtain banker\'s + professional references' },
      { id: 'insurance', label: 'Put private medical insurance covering Gibraltar in place' },
      { id: 'file', label: 'File the Cat 2 application (£1,050 fee) and track the 4–10 week review' },
      { id: 'register', label: 'On approval: register with the Income Tax Office; get the civilian registration card' },
      { id: 'annual', label: 'Diarise the annual return', deadline: '30 November each year' },
      { id: 'day-log', label: 'Start the two-sided day log (Gibraltar days AND Spain days) from day one' },
    ],
  },
  {
    n: 3,
    slug: 'hepss',
    title: 'HEPSS for specialists',
    duration: '60 min',
    summary:
      'The employment-based special status: £160,000+ qualifying salary, tax capped on the first £160,000 (≈ £39,940/yr), and how the employer-driven process actually runs.',
    sections: [
      {
        title: 'What HEPSS is and who fits',
        body: `<p>HEPSS — High Executive Possessing Specialist Skills — is Cat 2's employment-market sibling. Where Cat 2 requires wealth and forbids local work, HEPSS requires a senior job and caps the tax on it: you are taxed only on the first <strong>£160,000</strong> of employment income under the GIBS scale, giving a fixed liability of about <strong>£39,940/year</strong> regardless of how far above £160k your package goes.</p>
<p>Qualifying conditions:</p>
<ul>
<li>Salary <strong>above £160,000</strong> from a Gibraltar employer;</li>
<li>Skills <strong>not readily available in Gibraltar</strong> and of exceptional economic value — the classic cases are gaming/e-gaming executives, insurance and fund-management leadership, fintech/DLT founders and senior engineers;</li>
<li><strong>Approved residential accommodation</strong> (same standard as Cat 2 in kind, if not price bracket);</li>
<li>Not resident in Gibraltar in the previous 3 years.</li>
</ul>
${callout('money', 'HEPSS vs UK PAYE on £350,000', 'UK: income tax ≈ £145,000 + employee NI. HEPSS: ≈ £39,940 flat. Annual saving ≈ £110,000. The employer also wins — Gibraltar employer social insurance is capped at trivial levels (≈ £50/week max) versus 15% UK employer NI ≈ £52,000. HEPSS is why Gibraltar\'s gaming and insurance sectors can outbid London for senior talent on net pay while paying less gross.')}`,
      },
      {
        title: 'The employer-driven process',
        body: `<p>HEPSS is applied for by the <strong>employer</strong> to the Finance Centre — you supply, they file:</p>
<ol>
<li>Employer confirms the role qualifies (their HR/advisers know the Finance Centre's expectations; most large Gibraltar employers have filed dozens).</li>
<li>You provide: CV evidencing the specialist skills, certified passport, references, accommodation evidence, the contract showing £160k+.</li>
<li>Finance Centre issues the HEPSS certificate — typically faster than Cat 2 (2–6 weeks) because the employer stands behind the file.</li>
<li>Payroll then withholds under the capped basis from day one.</li>
</ol>
<p>Losing the job = losing the status (you revert to ordinary taxpayer rates, or leave, or requalify with a new qualifying role). Changing employer requires a fresh certificate — build that into any move negotiation. And the same residence reality as Cat 2 applies: HEPSS holders commuting from Spanish villas are exactly who the 2021 Spain treaty targets; if you live Spain-side, you are a frontier worker taxed in Spain on worldwide income (Module 4), and HEPSS bought you nothing. Live on the Rock.</p>`,
      },
    ],
    checklist: [
      { id: 'offer', label: 'Confirm the offer exceeds £160,000 and the employer will sponsor HEPSS' },
      { id: 'cv-evidence', label: 'Assemble CV + evidence of specialist skills for the file' },
      { id: 'accommodation', label: 'Secure approved accommodation before the application' },
      { id: 'certificate', label: 'Employer files; certificate in hand before payroll day one' },
      { id: 'residence', label: 'Establish genuine Gibraltar residence — do not commute from Spain' },
      { id: 'change-plan', label: 'If changing employer later: new HEPSS certificate negotiated into the move' },
    ],
  },
  {
    n: 4,
    slug: 'frontier',
    title: 'Frontier and the Spain question',
    duration: '100 min',
    summary:
      'The 2026 EU–Gibraltar treaty rewires the border: what changes at the frontier, the frontier-worker tax mechanics that catch people, and the honest decision framework for living Spain-side vs Rock-side.',
    sections: [
      {
        title: 'The 2026 treaty: what actually changes',
        body: `<p>The EU–UK agreement on Gibraltar — politically settled in June 2025, operational from <strong>15 July 2026</strong> — ends eight years of border limbo. The practical architecture:</p>
<ul>
<li><strong>Fluid land frontier:</strong> systematic passport stamping at the fence ends. Gibraltar joins the Schengen operational area for movement purposes, with entry checks performed at Gibraltar's port and airport (dual controls with Spanish/EU officers) instead of at the land border.</li>
<li><strong>For residents:</strong> Gibraltar residency cards function for frontier crossing without the 90/180 Schengen day-counting that tormented UK-passport residents since Brexit.</li>
<li><strong>For workers:</strong> the ~15,000 daily cross-border workers keep protected status; commuting both directions becomes as frictionless as it was pre-2016.</li>
<li><strong>Goods:</strong> Gibraltar aligns with EU customs arrangements for goods — import duty structures change (cars, tobacco pricing) and some retail price gaps with Spain narrow.</li>
</ul>
<p>What does <em>not</em> change: Gibraltar's tax system (the caps, the absence of CGT/IHT/VAT survive — the treaty is about movement and goods, not direct tax), UK sovereignty, and the 2021 Spain–Gibraltar tax treaty's residence rules — which become <em>more</em> important as the border gets easier, because easy crossing makes Spain-side living more tempting and Spanish tax residency easier to stumble into.</p>
${callout('tip', 'The treaty makes the Rock MORE valuable, not less', 'The historic discount on Gibraltar life — queue risk at the fence, stranded-asset anxiety — is going. Same tax caps, none of the friction, full Schengen access from your doorstep. Expect qualifying-accommodation prices and rents to reflect this within a couple of years; movers deciding in 2026 are buying before the repricing completes.')}`,
      },
      {
        title: 'Frontier-worker mechanics: who taxes what',
        body: `<p>Live in Spain, work in Gibraltar — the classic setup for thousands. The 2021 tax treaty draws the lines:</p>
${table(
  ['Situation', 'Where taxed', 'Mechanics'],
  [
    ['Spanish-resident frontier worker, Gibraltar salary', 'Spain taxes worldwide income including the salary; Gibraltar taxes the employment income at source', 'Spain credits Gibraltar tax paid — you file Modelo 100 in Spain every year, declaring the Gibraltar salary'],
    ['Gibraltar-resident (Cat 2/HEPSS/ordinary), no Spanish ties', 'Gibraltar only', 'The clean case — keep it clean with the day log'],
    ['Registered Gibraltarian/resident pre-2021 with Spanish home', 'Grandfathered rules', 'Specialist advice; do not self-assess'],
    ['Spanish spouse + Spanish home + Gibraltar job', 'Spain will assert residency', 'The treaty presumptions bite; plan as a Spanish resident'],
  ],
)}
<p>Social security is separate from tax: frontier workers pay Gibraltar social insurance on Gibraltar employment and access both systems under the coordination rules (healthcare via the frontier-worker provisions — GHA for work-related, SNS via the S1-equivalent route Spain-side). Pensions accrued in Gibraltar export to Spain on retirement.</p>
${callout('money', 'The frontier arithmetic on £80,000', 'Gibraltar-resident: GIBS tax ≈ £19,500, no Spanish filing. Spain-resident frontier worker: Gibraltar deducts ≈ £19,500 at source, Spain computes IRPF on the same income ≈ €26,500, credits the Gibraltar tax, and collects the difference ≈ €4,000–€6,000 — plus your worldwide investment income is now in Spanish scope, plus Modelo 720, plus (region-dependent) wealth tax. Cheaper Spanish rent rarely survives that stack. Run both columns before choosing the Sotogrande villa.')}`,
      },
      {
        title: 'The honest live-where decision',
        body: `<p>The framework we walk buyers through:</p>
<ul>
<li><strong>Income above ~£120k or meaningful investment wealth →</strong> live Rock-side. The Gibraltar caps and zero-CGT/IHT position only work for Gibraltar residents; Spanish residence forfeits the whole structure.</li>
<li><strong>Salary under ~£60k, family already Spain-rooted →</strong> Spain-side frontier working is legitimate and common; you pay Spanish rates net of credit and accept Spanish worldwide taxation. La Línea rents at a third of Gibraltar's are the honest compensation.</li>
<li><strong>The in-between band →</strong> this is where people get it wrong in both directions. Model it properly (both tax columns + rent + schools) rather than defaulting to the villa.</li>
</ul>
<p>Whatever you choose, choose it <em>visibly</em>: lease, utilities, day log, gym membership, GP registration — build the evidence trail of the residence you claim. Both tax authorities read the same facts.</p>`,
      },
    ],
    checklist: [
      { id: 'decide', label: 'Run the live-where model: both tax columns + rent + schools', detail: 'Rock-side for high income/wealth; Spain-side only with eyes open.' },
      { id: 'treaty-date', label: 'Calendar 15 July 2026 — treaty operational date changes crossing logistics' },
      { id: 'day-log', label: 'Maintain the two-sided day log with evidence' },
      { id: 'spain-filing', label: 'If Spain-side: register with AEAT and file Modelo 100 declaring Gibraltar income' },
      { id: 'ss-coordination', label: 'Confirm social insurance registration and healthcare route for your setup' },
      { id: 'evidence', label: 'Build the residence evidence trail (lease, utilities, registrations) for the side you claim' },
    ],
  },
  {
    n: 5,
    slug: 'banking',
    title: 'Gibraltar banking',
    duration: '60 min',
    summary:
      'A small, compliance-heavy banking market: who actually opens accounts for new arrivals, what the due diligence wants, and the GBP/EUR architecture for a frontier life.',
    sections: [
      {
        title: 'The market, honestly',
        body: `<p>Gibraltar banking is small and selective — a handful of institutions, all running full KYC on every newcomer. The realistic options for a new arrival:</p>
${table(
  ['Institution', 'Who it serves', 'Notes'],
  [
    ['Gibraltar International Bank (GIB)', 'The default local bank — residents, Cat 2, businesses', 'Current/savings in GBP + EUR; expects the full dossier; opening 2–6 weeks'],
    ['NatWest International', 'Established retail presence', 'Familiar UK-style banking; residence evidence required'],
    ['Jyske Bank (private)', 'HNW / Cat 2 private banking', 'Investment-led relationships, £250k+ typically'],
    ['Turicum, IDT, other private banks', 'HNW private clients', 'Bespoke; sponsor-introduced'],
    ['UK accounts you keep', 'Everyday sterling', 'Most movers keep UK banking running — it works fine from Gibraltar'],
    ['Wise/Revolut', 'EUR layer for Spain-side life', 'Essential for frontier spending'],
  ],
)}
<p>Practical truth: because Gibraltar is sterling and your UK banks keep working, the local account is less urgent than in Spain/Portugal — but you need one for salary (HEPSS), rent, and utilities, and Cat 2 applicants look stronger with a local banking relationship. Start the GIB application the week you sign accommodation; the dossier from Module 1 is exactly what they ask for.</p>
${callout('tip', 'Expect the questions, pre-empt them', 'Gibraltar banks decline vague files quickly — it is a de-risking jurisdiction. Cover letter stating who you are, why Gibraltar, source of funds, expected account activity (amounts, directions, counterparties) turns a 6-week maybe into a 2-week yes.')}`,
      },
      {
        title: 'The GBP/EUR architecture',
        body: `<p>Life on the Rock runs in pounds; half of most residents' spending (Spanish supermarkets, restaurants, fuel, weekend trips) runs in euros. The clean setup:</p>
<ul>
<li>Salary/income → Gibraltar or UK GBP account.</li>
<li>Wise/Revolut multi-currency for EUR: hold a EUR balance, pay Spanish merchants by card at mid-market rates, Bizum-substitute via card for most needs (you cannot get actual Bizum without a Spanish account).</li>
<li>If you keep a Spanish property or heavy Spain-side commitments: one Spanish account (see the Spain playbook's banking module) fed monthly from Wise.</li>
<li>Savings/investments: with no Gibraltar CGT or savings tax, the location driver is protection and platform quality, not tax — Gibraltar deposits are covered by the GDGB to €100,000-equivalent; UK FSCS £85k applies to UK accounts.</li>
</ul>`,
      },
    ],
    checklist: [
      { id: 'gib-account', label: 'Apply to GIB (or NatWest Intl) with the dossier + activity cover letter' },
      { id: 'eur-layer', label: 'Set up the Wise/Revolut EUR layer for Spain-side spending' },
      { id: 'salary', label: 'Route salary/pension to the GBP account; set rent + utilities' },
      { id: 'spanish-account', label: 'Open a Spanish account only if you have real Spain-side commitments' },
      { id: 'protection', label: 'Check deposit-protection spread across GDGB / FSCS' },
    ],
  },
  {
    n: 6,
    slug: 'years-2-to-5',
    title: 'Years 2 to 5: compliance and consolidation',
    duration: '50 min',
    summary:
      'The annual rhythm that keeps Cat 2/HEPSS alive, the UK tails (IHT clock, SRT drift) to keep managing, permanent residence — and the estate-planning window Gibraltar uniquely opens.',
    sections: [
      {
        title: 'The annual compliance rhythm',
        body: `${table(
  ['When', 'What', 'Who'],
  [
    ['30 November', 'Gibraltar tax return (year ended 30 June)', 'Everyone — Cat 2, HEPSS, ordinary'],
    ['Ongoing', 'Accommodation condition maintained; insurance renewed', 'Cat 2 / HEPSS'],
    ['Continuous', 'Two-sided day log (Gibraltar / Spain / UK)', 'Everyone with cross-border life'],
    ['Jan (UK)', 'UK SA for any continuing UK-source income (rent, gov pensions)', 'Those with UK tails'],
    ['Annually', 'Civilian registration card / residence permits current', 'All residents'],
  ],
)}
<p>Cat 2 and HEPSS both survive on quiet consistency: tax paid, accommodation held, residence real. The failure mode is drift — more Spain days each year, the lease quietly downgraded, until a review or a Spanish information request (the 2021 treaty has active exchange-of-information) forces the question. The day log answers it before it is asked.</p>`,
      },
      {
        title: 'UK tails: the clocks still running',
        body: `<ul>
<li><strong>IHT residence clock:</strong> under the residence-based IHT regime, your worldwide estate typically stays in UK IHT scope for up to 10 years after departure (based on your prior UK residence history). Gibraltar has no estate taxes at all — so each year the clock runs down, the planning window widens. Year 2–3 is when to do the serious estate work: wills on both sides, asset-situs review, trust/insurance structures where appropriate, with advisers who know both systems.</li>
<li><strong>SRT drift:</strong> UK days have a habit of creeping (family, board seats, cricket season). Re-run the <a href="/uk-statutory-residence-test">sufficient-ties test</a> annually — your tie count changes as you shed UK accommodation and family links, and your safe day allowance moves with it.</li>
<li><strong>UK-source income</strong> (rent, government pensions) stays on UK SA indefinitely — keep the January habit.</li>
</ul>`,
      },
      {
        title: 'Permanence and the long game',
        body: `<p>Civilian status consolidates with time: permanent residence certificates become available after 10 years (5 for some categories), and British citizens in Gibraltar are — of course — already British; there is no new citizenship to seek, no language exam, no renunciation question. Gibraltar's long game is simpler than Iberia's: keep the conditions, keep the residence real, and the structure compounds quietly — no CGT on decades of portfolio growth, no IHT once the UK clock expires, income tax capped for as long as Cat 2/HEPSS holds.</p>
${callout('money', 'The 10-year compounding view', 'A Cat 2 household with £3m invested at 6% real: in Spain (post-Beckham) the growth would face 19–30% CGT on realisation plus wealth tax drag in most regions; in Gibraltar, £0 on both. Over a decade that difference alone is £250,000–£450,000 — before comparing income-tax bands. The Rock\'s pitch is not the year-one saving; it is the compounding.')}`,
      },
    ],
    checklist: [
      { id: 'return', label: 'File the Gibraltar return every year', deadline: '30 November' },
      { id: 'conditions', label: 'Annual self-audit: accommodation, insurance, day log, registrations' },
      { id: 'estate', label: 'Do the estate-planning work in years 2–3 while the UK IHT clock runs down' },
      { id: 'srt-annual', label: 'Re-run the UK SRT tie count annually' },
      { id: 'uk-sa', label: 'Keep filing UK SA for UK-source tails', deadline: '31 January' },
      { id: 'permanence', label: 'Apply for permanent residence when the qualifying period completes' },
    ],
  },
];
