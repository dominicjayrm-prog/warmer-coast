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

export const portugalModules: PlaybookModule[] = [
  {
    n: 1,
    slug: 'pre-move',
    title: 'Pre-move UK actions',
    duration: '90 min',
    summary:
      'The UK-side sequence for a Portugal move: residency-line timing, the ISA/GIA reset, the pension lump-sum decision, property, and the two Portuguese numbers you should obtain before you even book flights.',
    sections: [
      {
        title: 'Timing the residency line',
        body: `<p>Portuguese tax residency triggers at 183+ days in any 12-month period touching a calendar year, <em>or</em> the moment you occupy a home in Portugal with the intent it is your habitual residence — which for most movers means residency can start the day you get the keys to a long-term rental. Portugal then applies <strong>split-year treatment automatically</strong>: you are taxed as resident only from the residency start date, not the whole calendar year. That is friendlier than Spain — but it makes the exact start date documentable and important.</p>
<p>Practical sequencing: do your UK-side disposals (ISA reset, property completion, pension lump sum) strictly before the date you take up the Portuguese home. Keep the tenancy start date, flight records and utility activations consistent — the AT (Autoridade Tributária) uses them if the start date is ever questioned.</p>
${callout('tip', 'NIF and bank account first, from the UK', 'Unlike almost everything in Spain, Portugal lets you do the two foundational steps remotely before the move: get a NIF through a fiscal representative (€75–€150 online services, ~1 week) and open a Portuguese bank account remotely with that NIF (Millennium and ActivoBank both do this). Arriving with NIF + account already live cuts weeks off your setup and is required groundwork for the visa anyway.')}`,
      },
      {
        title: 'The UK asset reset — same logic, Portuguese numbers',
        body: `<p>Portugal, like Spain, ignores the ISA wrapper and does not rebase assets on entry. From your residency start date, disposals are taxed against original acquisition cost. Capital gains on securities are taxed at a flat <strong>28%</strong> (with an option to aggregate at marginal rates if lower — rarely is), and there is one Portuguese wrinkle to plan around: gains on securities held under 365 days are <em>forced</em> into aggregation at marginal rates (up to 53%) if your taxable income is in the top band.</p>
<p>The pre-move playbook is therefore identical in shape to Spain's:</p>
<ol>
<li>Sell-and-repurchase ISAs and heavily-appreciated GIA positions while UK resident — reset the cost basis for free under UK CGT rules (ISA) or within your CGT allowance/planning (GIA).</li>
<li>Document everything with contract notes — they are your acquisition evidence for Portuguese CGT decades from now.</li>
<li>Ask your platforms about non-resident policies; several UK brokers restrict Portuguese-resident clients. Interactive Brokers and Swissquote are the common landing spots for movers whose platforms say no.</li>
</ol>
<p><strong>Pensions:</strong> the 25% UK tax-free lump sum is taxable in Portugal once resident (as pension income). If it is in your plan, take it while UK resident. Government-service pensions (Article 19 of the UK–Portugal DTA) stay UK-taxed; state and private pensions shift to Portuguese taxation (Module 6).</p>
${callout('money', 'The lump-sum window, £300k pot', 'PCLS of £75,000 taken while UK resident: £0. Taken after Portuguese residency: taxed as pension income — for a retiree with other income it lands across the 28–45% bands, roughly €25,000–€30,000 of avoidable tax. The single most expensive "I did not know" in Portuguese moves.')}`,
      },
      {
        title: 'UK property decisions',
        body: `<p>Selling your UK main home? Complete while UK resident and Private Residence Relief usually zeroes the gain. Sell after Portuguese residency and Portugal taxes 50% of the gain at marginal rates (the Portuguese main-home reinvestment relief only covers homes in Portugal/EU — and only if the UK house was genuinely your main home up to sale, which post-move it no longer is).</p>
<p>Keeping and letting it? Workable and common: the UK taxes the rent first (NRL scheme — file NRL1), Portugal taxes it too at a flat 25% (Category F, with documented expenses deductible) or aggregated, and credits the UK tax. You will file in both countries every year — budget for that admin. The property also does NOT trigger any Modelo-720-style declaration, because <strong>Portugal has no foreign-asset declaration and no wealth tax</strong> — one of its quiet structural advantages over Spain.</p>`,
      },
      {
        title: 'The document pack',
        body: `<p>Portugal accepts UK public documents with an FCDO apostille; translations must be certified (by a Portuguese notary, lawyer, or the consulate — Portugal has no "sworn translator" register like Spain, which paradoxically makes translations easier and cheaper).</p>
<ul>
<li>Birth and marriage certificates — apostille + certified translation</li>
<li>ACRO police certificate — apostille; under 90 days old at visa submission (order late, order two)</li>
<li>Proof of income/funds per the visa route (Module 2)</li>
<li>UK medical/vaccination records for kids' school enrolment — plain copies usually fine</li>
</ul>
<p>2026 costs: apostille £30–£45/document; certified translations €25–€40/page; ACRO £63.</p>`,
      },
    ],
    checklist: [
      { id: 'nif', label: 'Obtain NIF remotely via fiscal representative', detail: '€75–€150, ~1 week. Everything else hangs off it.' },
      { id: 'bank', label: 'Open a Portuguese bank account remotely (Millennium/ActivoBank)' },
      { id: 'timing', label: 'Fix your residency start date and sequence UK disposals before it' },
      { id: 'isa-reset', label: 'Reset ISA/GIA cost basis while UK resident; archive contract notes' },
      { id: 'pcls', label: 'Take the 25% pension lump sum (if planned) while UK resident' },
      { id: 'property', label: 'Decide UK property path; if selling, complete before residency starts' },
      { id: 'p85', label: 'File P85 (+ NRL1 if letting) with HMRC', deadline: 'within ~4 weeks of departure' },
      { id: 'docs', label: 'Apostille + certified-translate the document pack; order ACRO', deadline: 'ACRO <90 days at submission' },
    ],
  },
  {
    n: 2,
    slug: 'visa',
    title: 'D7 vs D8 vs the rest',
    duration: '100 min',
    summary:
      'The two routes that matter for Brits — D7 passive income and D8 digital nomad — with 2026 thresholds, the consulate file that gets approved first time, and the AIMA appointment reality on arrival.',
    sections: [
      {
        title: 'Route selection in one table',
        body: `${table(
  ['Route', '2026 income bar', 'Income type', 'Work rights', 'Who it fits'],
  [
    ['D7', '€870/mo (1× IAS-linked minimum wage basis, 2026: ~€10,440/yr) + 50% spouse + 30% per child', 'Passive: pensions, rent, dividends, interest', 'Full work rights after residence card', 'Retirees, FIRE, landlords'],
    ['D8 (residency visa)', '4× minimum wage = €3,480/mo (2026)', 'Active remote income for non-Portuguese employers/clients', 'Remote work; full rights after card', 'Employees and freelancers'],
    ['Golden Visa', '€500k funds route (property route abolished)', 'Investment', 'Minimal-stay path (7 days/yr)', 'HNW wanting optionality, not relocation'],
    ['D2', 'Business plan + means', 'Entrepreneurship', 'Run the business', 'Founders actually operating in PT'],
  ],
)}
<p>Note the D7/D8 asymmetry that trips people: the D7 income bar is low (~€870/month) but must be <strong>passive</strong> — salaries do not count, and consulates increasingly reject "D7 with a remote job" files, pushing them to D8. The D8 bar is much higher (4× minimum wage) but takes your salary. There is also a savings requirement in practice for both: showing ~12 months of the threshold (€12k–€40k depending on family size) in your Portuguese bank account materially strengthens either file.</p>
${callout('tip', 'D7 with mixed income', 'Consulates accept blended passive income — pension + rent + dividends all stack. What they want is durability: 6–12 months of statements showing the income arriving, plus the underlying contracts/award letters. A one-off dividend declared last month does not read as durable.')}`,
      },
      {
        title: 'The application, step by step',
        body: `<ol>
<li><strong>VFS Global appointment</strong> (Portugal outsources UK visa intake to VFS in London/Manchester/Edinburgh). Book early — 3–6 week waits are normal.</li>
<li><strong>Submit the file:</strong> passport, application form, 2 photos, ACRO+apostille, proof of income (route-specific), Portuguese bank statement, proof of accommodation (12-month rental contract strongly preferred; Airbnb bookings usually rejected for D7, sometimes tolerated for D8), travel insurance covering the visa period, NIF, criminal-record consent form.</li>
<li><strong>Decision:</strong> statutory 60 days; real-world 4–10 weeks. You get a 4-month double-entry visa.</li>
<li><strong>Enter Portugal and attend the AIMA appointment</strong> — usually pre-booked by the consulate and printed on the visa letter. AIMA (successor to SEF) takes biometrics and issues your 2-year residence card (arrives by post, 2–10 weeks after).</li>
</ol>
${callout('warning', 'Guard the AIMA appointment with your life', 'The AIMA appointment date on your visa letter is the single hardest thing to replace in the whole process — the rebooking backlog has run 6+ months. Book flights around it, not the other way round. If you must move it, start the moment you know.')}
<p>Renewals: the first card runs 2 years, renewed for 3 (D7 renewal re-tests income; D8 re-tests the remote-work relationship). At year 5 you reach permanent residence <em>and</em> citizenship eligibility simultaneously — Portugal's headline advantage (Module 7).</p>`,
      },
      {
        title: 'Accommodation proof: the practical problem',
        body: `<p>The consulate wants a 12-month rental contract before you have even moved — the chicken-and-egg every applicant faces. The 2026 solutions, in order of preference:</p>
<ul>
<li><strong>Fly out and rent first</strong> — a scouting trip where you sign a 12-month lease (registering it with Finanças makes it airtight), then apply from the UK. Most robust; also solves schools/neighbourhood choice.</li>
<li><strong>Rent remotely</strong> through the established long-term platforms or an agent with video walkthroughs — sign, register, apply.</li>
<li><strong>Borrowed address</strong> (family/friend with an <em>atestado</em> from their junta de freguesia + letter) — accepted, weaker.</li>
<li><strong>12-month aparthotel/co-living contracts</strong> — increasingly accepted for D8, rarely for D7.</li>
</ul>
<p>Budget reality check for the lease you sign: Lisbon 1-bed €1,100–€1,600, Porto €800–€1,200, Algarve towns €700–€1,100, interior cities €500–€800. Landlords commonly ask 2 months deposit + 1–2 upfront, and a Portuguese guarantor (fiador) — offering 3–6 months upfront usually substitutes for the fiador you do not have.</p>`,
      },
    ],
    checklist: [
      { id: 'route', label: 'Lock D7 (passive) vs D8 (remote work) based on income type — not preference' },
      { id: 'savings', label: 'Park ~12 months of threshold income in the Portuguese account before applying' },
      { id: 'lease', label: 'Secure the 12-month lease (scouting trip if possible) and register it' },
      { id: 'vfs', label: 'Book the VFS appointment', detail: '3–6 week waits; book before the file is even finished.' },
      { id: 'file', label: 'Assemble the file: ACRO, income evidence, insurance, NIF, bank statements' },
      { id: 'submit', label: 'Submit and calendar the 60-day decision window' },
      { id: 'aima', label: 'Fly to the AIMA appointment on the visa letter — never reschedule voluntarily' },
      { id: 'card', label: 'Receive the 2-year residence card; scan and back up everything' },
    ],
  },
  {
    n: 3,
    slug: 'ifici',
    title: 'IFICI (NHR 2.0) and the tax-regime decision',
    duration: '75 min',
    summary:
      'The old NHR is closed. Its successor IFICI gives a 20% flat rate — but only for a defined list of qualifying activities. Who genuinely fits, how to register in the January window, and what everyone else (especially pensioners) should do instead.',
    sections: [
      {
        title: 'What IFICI is — and is not',
        body: `<p>IFICI (Incentivo Fiscal à Investigação Científica e Inovação — "NHR 2.0") applies to new Portuguese tax residents who were non-resident for the previous 5 years and who work in a <strong>qualifying activity</strong>. Benefits, for 10 years:</p>
<ul>
<li><strong>20% flat rate</strong> on Portuguese employment/self-employment income from the qualifying activity (vs progressive rates to 48%+).</li>
<li><strong>Exemption on most foreign-source income</strong> — dividends, interest, capital gains, foreign rents (with the notable exception below).</li>
</ul>
<p>The qualifying list is the narrow part: higher-education and scientific research roles; jobs inside certified startups; roles in companies exporting 50%+ of turnover; listed high-value professions (directors, engineers, doctors, university teachers, IT specialists…) working for entities in qualifying sectors (manufacturing, IT/telecoms, R&D, audiovisual); and staff of entities certified by IAPMEI/AICEP. A remote software engineer employed by a UK tech company can often fit; a remote marketing consultant with UK clients usually cannot; a retiree never can.</p>
${callout('warning', 'Pensions are the carve-out that changed everything', 'Unlike the old NHR (which taxed foreign pensions at 10% and, before 2020, 0%), IFICI gives pensions NO special treatment — foreign pension income is excluded from the exemption and taxed at standard progressive rates. Anyone who tells you they moved to Portugal for the pension tax deal is describing a regime that closed to new entrants at the end of 2023.')}`,
      },
      {
        title: 'The registration window',
        body: `${callout('deadline', 'Register by 15 January of the year after becoming resident', 'IFICI registration is filed with the AT (or the sector body — FCT for research, IAPMEI/AICEP/Startup Portugal for their categories) by 15 January following your first year of residency. Late registration pushes the start back a year in the best case; in the worst reading it forfeits the regime. Treat it like Spain\'s Modelo 149: diarise it the day your residence card arrives.')}
<p>Evidence to assemble before the window: employment contract or service agreements describing the qualifying activity, employer certification of sector/export share where relevant, degree certificates for profession-based routes, and your residence documentation. Approval confirms the 20% withholding treatment for payroll (or your recibos verdes invoicing) going forward.</p>`,
      },
      {
        title: 'If IFICI is not for you: the actual comparison',
        body: `${table(
  ['Profile', 'Regime reality', 'Effective outcome'],
  [
    ['Qualifying tech employee, €90k', 'IFICI 20% flat + foreign investment income exempt', '≈ €18k tax; standard would be ≈ €31k'],
    ['Remote freelancer, non-qualifying, €60k', 'Standard IRS + recibos verdes simplified regime (75% coefficient)', 'Effective ≈ 24–28% after the simplified-regime discount; still decent'],
    ['Retired couple, £40k pensions', 'Standard IRS, progressive', 'Effective ≈ 15–20% after allowances and the pension deduction (€4,462/person)'],
    ['Under-35 worker', 'IRS Jovem — 100%→25% exemption ladder over 10 years (cap 55× IAS)', 'Often beats IFICI below ~€30k income'],
  ],
)}
<p>The standard-IRS bands for 2026 run 13%–48% with a solidarity surcharge above €80k. Portugal's simplified regime for the self-employed (regime simplificado) taxes only 75% of service income under €200k turnover — an automatic 25% expense allowance that makes freelancer effective rates gentler than the headline bands suggest. Run both against your mix before assuming you need IFICI at all.</p>
${callout('money', 'Retired couple example — no regime needed', 'UK state + private pensions totalling €45,000/yr, taxed only in Portugal under the DTA (paid gross from HMRC after form Portugal-Individual). Joint IRS with pension deductions: ≈ €7,300, effective ≈ 16%. The absence of NHR hurts versus 2019 movers, but Portugal remains competitive — and there is no wealth tax and no 720-style declaration at all.')}`,
      },
    ],
    checklist: [
      { id: 'five-year', label: 'Confirm 5-year non-residency lookback for IFICI eligibility' },
      { id: 'activity-map', label: 'Map your role honestly against the qualifying-activity list', detail: 'Employer sector, export share, profession codes.' },
      { id: 'evidence', label: 'Collect contracts, employer certifications and degree documents' },
      { id: 'register', label: 'File IFICI registration with AT / sector body', deadline: 'by 15 January after your first resident year' },
      { id: 'fallback', label: 'If non-qualifying: model standard IRS vs IRS Jovem (under-35s) vs simplified regime' },
      { id: 'payroll', label: 'Confirm the 20% treatment with payroll / apply it to your invoicing once approved' },
    ],
  },
  {
    n: 4,
    slug: 'arriving',
    title: 'Arriving and registering',
    duration: '75 min',
    summary:
      'NIF you already have — now the residence card, NISS, utente number, and the certificates that make you real to the Portuguese state. Plus the driving-licence exchange that Brits keep missing.',
    sections: [
      {
        title: 'The arrival sequence',
        body: `<ol>
<li><strong>AIMA biometrics</strong> — the appointment from your visa letter. Bring: passport+visa, NIF, proof of address, proof of means, 2 photos. Card posts to your Portuguese address afterwards.</li>
<li><strong>Junta de freguesia — atestado de morada</strong> — your parish-level proof of address (the rough analogue of Spain's padrón). Bring your lease + two neighbourhood witnesses or landlord confirmation depending on the freguesia. Needed for the utente number, driving licence and sundry admin.</li>
<li><strong>NISS (social security number)</strong> — automatic via your employer, or apply online/at Segurança Social if self-employed. Needed before your first recibo verde or payroll run.</li>
<li><strong>Utente number (SNS registration)</strong> — at your local centro de saúde with residence card (or AIMA proof), NIF and atestado. This is your NHS-number equivalent; the door to public healthcare.</li>
<li><strong>Update Finanças</strong> — flip your NIF address from "fiscal representative / UK" to your Portuguese address (this also formally severs the fiscal-rep arrangement and marks your resident status with the AT).</li>
</ol>
${callout('tip', 'Get the digital keys immediately', 'Activate the Chave Móvel Digital (CMD) as soon as your residence card exists — it is Portugal\'s single sign-on for Finanças, Segurança Social, SNS and the junta. Portugal\'s e-government is genuinely good; with CMD most of the remaining admin in this playbook becomes a web form.')}`,
      },
      {
        title: 'Driving licence: 90 days to notify',
        body: `<p>UK licences are exchangeable in Portugal without retest under the post-Brexit bilateral — but the rule Brits miss is the <strong>notification window: you must register/exchange your licence with IMT within 90 days of residency</strong> (counted from your residence card). Drive past that window and the licence is technically invalid in Portugal, insurance can refuse claims, and late exchange gets bureaucratically painful.</p>
<p>Process via IMT online (with CMD) or in person: licence exchange form, medical certificate for over-60s (attestation from any médico, ~€30), fee ~€30. Keep driving on the UK photocard until the Portuguese card arrives.</p>
${callout('deadline', 'IMT registration within 90 days of your residence card', 'Do it the same week as the utente number. It is a 20-minute online task with CMD, and the downside of missing it — retesting in Portuguese — is grim.')}`,
      },
      {
        title: 'Renting, registering the lease, and the bills',
        body: `<p>If you arrived on a scouting-trip lease, three tenancy notes for the long term:</p>
<ul>
<li>Leases should be <strong>registered with Finanças</strong> by the landlord (Modelo 2 do Imposto do Selo). If yours is not, the landlord is dodging tax on the rent — which becomes your problem when you need the contract as official proof of address or for IRS rent deductions (15% of rent up to €600+/yr is deductible for tenants). Ask; insist.</li>
<li>Utilities transfer with NIF + contract: EDP/Galp/Iberdrola for power+gas, municipal water, MEO/NOS/Vodafone for fibre. Direct debit from the Portuguese account.</li>
<li>Rents rose hard 2020–2025; rent-increase caps apply to existing contracts (annually indexed) — a registered contract locks in that protection.</li>
</ul>`,
      },
    ],
    checklist: [
      { id: 'aima', label: 'Attend AIMA biometrics; receive the residence card' },
      { id: 'atestado', label: 'Get the atestado de morada from your junta de freguesia' },
      { id: 'niss', label: 'Obtain NISS (employer route or Segurança Social direct)' },
      { id: 'utente', label: 'Register at the centro de saúde — utente number for each family member' },
      { id: 'nif-address', label: 'Update NIF address at Finanças; end fiscal representation' },
      { id: 'cmd', label: 'Activate Chave Móvel Digital for the whole household' },
      { id: 'imt', label: 'Register/exchange UK driving licence with IMT', deadline: 'within 90 days of the residence card' },
      { id: 'lease-registered', label: 'Confirm the lease is registered with Finanças (rent deduction + proof of address)' },
    ],
  },
  {
    n: 5,
    slug: 'banking',
    title: 'Portuguese banking',
    duration: '50 min',
    summary:
      'Which bank actually suits a British arrival, the MB Way/Multibanco layer that runs Portuguese life, and the Wise bridge that keeps your GBP→EUR costs near zero.',
    sections: [
      {
        title: 'Picking the account',
        body: `${table(
  ['Bank', 'Why movers pick it', 'Fees (2026)', 'Remote opening?'],
  [
    ['Millennium BCP', 'Largest network; polished English support; visa-friendly statements', '≈ €5–7/mo (waivable with activity)', 'Yes — with NIF, pre-arrival'],
    ['ActivoBank', 'Millennium\'s no-fee digital brand; excellent app', '€0', 'Yes (video onboarding)'],
    ['Novobanco', 'Strong branch coverage; expat desks in Algarve/Lisbon', '≈ €5/mo tiers', 'Branch preferred'],
    ['Caixa Geral (CGD)', 'The state bank — every town has one', '≈ €5/mo (waivable)', 'Branch'],
    ['Wise/Revolut (bridge)', 'GBP→EUR at mid-market ±0.4–0.6%', '€0 monthly', 'Yes'],
  ],
)}
<p>The architecture mirrors the Spanish module: Portuguese account for local life + Wise as the FX bridge + UK account kept open. What is different in Portugal is how much runs through <strong>Multibanco/MB Way</strong>: the national payment network handles bills (pay any utility reference at any ATM or in-app), tax payments (Finanças issues Multibanco references), and P2P (MB Way is Portugal's Bizum — activate it with your Portuguese card + mobile number on day one). A foreign account cannot join MB Way; this is the practical reason the Portuguese account is non-negotiable.</p>
${callout('money', 'Same FX math as ever', 'A UK bank international transfer at ~2.4% all-in on £3,500/month costs ≈ £1,000/year. Wise at ~0.45% ≈ £190. Set the standing monthly transfer and stop thinking about it.')}`,
      },
      {
        title: 'Month-one banking admin',
        body: `<ol>
<li>Upgrade the remote-opened account to full resident status (walk-in with residence card + atestado) — unlocks credit products and kills non-resident fee tiers.</li>
<li>Activate MB Way + the debit card.</li>
<li>Set utilities and rent onto direct debit / standing order.</li>
<li>Create the monthly Wise GBP→EUR standing transfer, salary/pension day + 1.</li>
<li>Store your Finanças Multibanco payment references workflow — you will use it for IMI, IUC and IRS payments (Module 6).</li>
</ol>
<p>Deposit protection: Portugal's FGD covers €100,000 per person per bank, separate from UK FSCS. Same discipline as the Spain module: working money in Portugal, reserves placed deliberately.</p>`,
      },
    ],
    checklist: [
      { id: 'account', label: 'Open (or upgrade) the Portuguese account to resident status' },
      { id: 'mbway', label: 'Activate MB Way + card on day one' },
      { id: 'wise', label: 'Set the monthly Wise standing transfer GBP→EUR' },
      { id: 'debits', label: 'Move rent + utilities to Portuguese direct debit' },
      { id: 'multibanco', label: 'Learn the Multibanco reference-payment flow (taxes use it)' },
      { id: 'uk-audit', label: 'Audit UK direct debits; notify UK bank of the Portuguese address' },
    ],
  },
  {
    n: 6,
    slug: 'year-one-tax',
    title: 'Year-one IRS filing',
    duration: '110 min',
    summary:
      'The Portuguese IRS return end-to-end: the April–June window, how each UK income type lands, the recibos verdes quarterly rhythm for freelancers, and the worked examples for the standard British mixes.',
    sections: [
      {
        title: 'The calendar and the mechanics',
        body: `${table(
  ['When', 'What', 'Who'],
  [
    ['1 Apr – 30 Jun', 'IRS return (Modelo 3) for the prior calendar year — filed at portaldasfinancas with CMD', 'All residents (split-year: from residency start date only)'],
    ['By 15 Jan', 'IFICI registration (Module 3) — first year only', 'Qualifying new residents'],
    ['Quarterly', 'Segurança Social declarations (self-employed)', 'Recibos verdes workers'],
    ['Jul/Sep/Dec', 'IRS payments on account (self-employed above thresholds)', 'Some freelancers'],
    ['31 Aug (typic.)', 'IMI property tax instalments begin (if you bought)', 'Owners'],
  ],
)}
<p>Portugal pre-populates aggressively: employment income, Portuguese bank interest and invoiced recibos verdes appear automatically in Modelo 3. Your UK income does not — you add it via Anexo J (foreign income), which is precisely where year-one professional help earns its fee (a contabilista certificado runs €150–€400 for a standard return, €60–€120/month on retainer for freelancers).</p>`,
      },
      {
        title: 'UK income in the Portuguese return',
        body: `${table(
  ['UK income', 'Portugal', 'UK after treaty', 'Notes'],
  [
    ['State pension', 'Taxed (Anexo J, pension category)', 'Paid gross — file form Portugal-Individual with HMRC', 'Pension deduction €4,462/person applies'],
    ['Private/occupational pension', 'Taxed', 'Gross after DTA claim', 'Same'],
    ['Government-service pension', 'Exempt with progression', 'Taxed in UK', 'Article 19 DTA'],
    ['UK rental income', 'Taxed (Cat F via Anexo J) — flat 25% option or aggregate', 'UK taxes first (NRL)', 'Credit for UK tax; keep SA calcs'],
    ['Dividends', 'Flat 28% (or aggregate)', 'No UK tax for non-residents', 'IFICI holders: exempt'],
    ['Interest', 'Flat 28%', 'Gross', 'IFICI: exempt'],
    ['Capital gains (securities)', '28% flat; <365-day gains may force-aggregate for top-band taxpayers', 'None (except UK property)', 'Cost basis = original purchase — hence Module 1 reset'],
  ],
)}
${callout('money', 'Worked example — D8 freelancer, €72,000 turnover, non-IFICI', 'Simplified regime: taxable base = 75% × €72,000 = €54,000. IRS on €54,000 (single) ≈ €14,900. Segurança Social ≈ 21.4% on 70% of relevant income ≈ €10,800/yr after the 12-month new-freelancer exemption ends. Combined effective on turnover ≈ 36% — versus ≈ 30% for the same person with IFICI approval (20% flat + SS). The IFICI delta here is ~€4,300/yr; worth one hard afternoon of eligibility work.')}`,
      },
      {
        title: 'Recibos verdes: the freelancer rhythm',
        body: `<ul>
<li><strong>Opening:</strong> declare início de atividade at Finanças (online, free) with your CAE activity code before your first invoice.</li>
<li><strong>Invoicing:</strong> every invoice is issued through the Finanças portal or certified software ("recibo verde" electronic receipts). UK/non-EU clients: no IVA, mention reverse-charge/localisation rules. EU B2B: reverse charge + recapitulative statement.</li>
<li><strong>IVA:</strong> exempt under Article 53 below €15,000/yr turnover (2026 threshold ~€15,000); above it, quarterly IVA returns at 23% for Portuguese-situs supplies.</li>
<li><strong>Segurança Social:</strong> first 12 months exempt (first-time self-employed). Then quarterly declarations; contribution ≈ 21.4% of 70% of the average monthly service income.</li>
<li><strong>The simplified regime</strong> taxes 75% of service turnover (50% for some activities) — no expense receipts needed up to €200k turnover. Organised accounting only wins with unusually high real costs.</li>
</ul>`,
      },
      {
        title: 'If you bought property: the ownership taxes',
        body: `<p>Buying triggers a stack covered fully in the purchase annexes, but the recurring ones to calendar: <strong>IMI</strong> (0.3%–0.45% of the taxable asset value, billed May/Aug/Nov), <strong>AIMI</strong> (the additional IMI on residential holdings above €600k/person — 0.7%+ marginal), and if you ever let it, Category F filing. There is no imputed-rent tax on your own home and — worth repeating — no wealth tax and no foreign-asset declaration in Portugal at all.</p>`,
      },
    ],
    checklist: [
      { id: 'contabilista', label: 'Engage a contabilista certificado for year one', detail: '€150–€400 one-off; retainer if freelancing.' },
      { id: 'dta', label: 'File form Portugal-Individual + residency certificate with HMRC (pensions paid gross)' },
      { id: 'atividade', label: 'Freelancers: file início de atividade before the first invoice' },
      { id: 'ss-exemption', label: 'Freelancers: confirm the 12-month Segurança Social exemption is applied' },
      { id: 'anexo-j', label: 'Compile the UK-income pack for Anexo J (P60s, SA returns, dividend/interest summaries)' },
      { id: 'modelo3', label: 'File Modelo 3', deadline: '30 June' },
      { id: 'imi', label: 'If owner: calendar IMI instalments (May/Aug/Nov)' },
    ],
  },
  {
    n: 7,
    slug: 'years-2-to-5',
    title: 'Years 2 to 5: renewals to citizenship',
    duration: '60 min',
    summary:
      'The renewal at year 2, permanence at year 5 — and Portugal\'s trump card: citizenship eligibility at the same five-year mark, with dual nationality fully allowed.',
    sections: [
      {
        title: 'Renewals and the residence you must actually maintain',
        body: `<p>The first residence card (2 years) renews for 3 more — online through AIMA's renewal portal in most cases now, with income re-tested at then-current thresholds. Keep the same evidence discipline as Spain's module: absences should not exceed <strong>6 consecutive months (or 8 total) per card period</strong> without justified cause, or both the renewal and the year-5 permanence can fail.</p>
<p>Meanwhile your tax life normalises: Modelo 3 each spring, IFICI holders tracking their 10-year clock, freelancers on the quarterly rhythm. Two mid-window housekeeping items worth doing: a Portuguese will (testamento — Portugal applies Brussels IV, so you can elect UK law over succession while <a href="/spain/sucesiones">unlike Spain</a> Portugal charges close family 0% stamp duty on inheritance anyway), and a fresh look at your UK pension consolidation once your Portuguese tax picture is stable (see the <a href="/qrops-vs-sipp-abroad">QROPS vs SIPP guide</a>).</p>`,
      },
      {
        title: 'Year 5: permanent residence AND citizenship — simultaneously',
        body: `<p>Five years of legal residence opens two doors at once:</p>
<ul>
<li><strong>Permanent residence:</strong> unconditional status, no more income tests, renewed as formality.</li>
<li><strong>Citizenship by naturalisation:</strong> Portugal's headline offer. Requirements: 5 years' legal residence (counted from residence-permit issue; recent reforms count from application in some cases — check current practice at filing), <strong>A2 Portuguese</strong> (the CIPLE exam — genuinely basic conversational level; a winter of lessons), clean criminal record, and crucially <strong>no renunciation requirement</strong>: Portugal fully permits dual nationality, and the UK does too.</li>
</ul>
<p>A Portuguese passport restores everything Brexit removed — EU-wide free movement, settlement rights across 27 countries — while keeping your British citizenship intact. It extends to children (born-in-Portugal children can naturalise after 1 year; minor children naturalise with you) and, after marriage/partnership of 3 years to a Portuguese citizen, spouses.</p>
${callout('tip', 'Start the A2 Portuguese in year 3, not year 5', 'The CIPLE exam is the only real gate for most applicants. Two years of one-lesson-a-week is comfortable; a panicked six months alongside naturalisation paperwork is not. Book the exam early too — CIPLE sittings fill up in Lisbon and Porto.')}
${callout('money', 'The five-year arithmetic vs Spain', 'Spain: 10 years to citizenship, renunciation demanded. Portugal: 5 years, dual allowed. For a 50-year-old couple this is the difference between EU citizenship at 55 versus 60+ with a legal ambiguity attached. If EU citizenship is a goal at all, this single variable often decides the whole Iberia question — which is why we put it in the country-choice quiz.')}`,
      },
    ],
    checklist: [
      { id: 'absence-log', label: 'Track absences: <6 consecutive / <8 total months per card period' },
      { id: 'renewal', label: 'Renew the residence card (2→3 years) via AIMA', deadline: 'window opens 30 days pre-expiry' },
      { id: 'will', label: 'Sign a Portuguese will electing UK succession law' },
      { id: 'portuguese', label: 'Start A2 Portuguese lessons by year 3; book the CIPLE exam early' },
      { id: 'permanence', label: 'Apply for permanent residence at year 5' },
      { id: 'citizenship', label: 'File the citizenship application at year 5 (dual nationality — no renunciation)' },
    ],
  },
];
