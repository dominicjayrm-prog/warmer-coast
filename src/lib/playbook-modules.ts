import type { Country } from '@/lib/site';

export interface ChecklistItem {
  id: string;
  label: string;
  detail?: string;
  deadline?: string;
}

export interface PlaybookModule {
  n: number;
  slug: string;
  title: string;
  duration: string;
  summary: string;
  sections: { title: string; body: string }[];
  checklist: ChecklistItem[];
}

const spain: PlaybookModule[] = [
  {
    n: 1,
    slug: 'pre-move',
    title: 'Pre-move UK actions',
    duration: '90 min',
    summary: 'The six-to-twelve month run-up. What to do before you leave UK soil.',
    sections: [
      { title: 'Form P85', body: 'How and when to file. Why most accountants get the timing wrong.' },
      { title: 'ISA wind-down', body: 'Crystallising gains UK-side before they become Spanish-taxable.' },
      { title: 'UK property sale timing', body: 'Principal residence relief and the residency crossover.' },
      { title: 'Pension drawdown sequencing', body: 'Article 17 mechanics, government vs private treatment.' },
    ],
    checklist: [
      { id: 'p85', label: 'File P85 with HMRC', deadline: 'within 90 days of departure' },
      { id: 'isa-review', label: 'Review all UK ISAs for crystallisation' },
      { id: 'property-decision', label: 'Decide pre-move vs post-move property sale' },
      { id: 'pension-call', label: 'Brief UK pension provider on residency change' },
      { id: 'documents', label: 'Apostille birth/marriage/qualification certificates' },
    ],
  },
  {
    n: 2,
    slug: 'visa',
    title: 'Choosing the right visa',
    duration: '120 min',
    summary: 'NLV vs DNV vs work vs family. The 2026 income thresholds and document checklists.',
    sections: [
      { title: 'The four routes that matter', body: 'NLV, DNV, work, family reunification. What each excludes.' },
      { title: 'Document checklists', body: 'Apostille, sworn translation, medical certificate, criminal record.' },
      { title: 'Consulate quirks', body: 'London vs Edinburgh vs Manchester. Which is fastest in 2026.' },
    ],
    checklist: [
      { id: 'route', label: 'Confirm visa route based on income mix' },
      { id: 'docs', label: 'Compile and apostille all required documents' },
      { id: 'med', label: 'Schedule medical certificate appointment' },
      { id: 'translation', label: 'Engage a sworn translator (traductor jurado)' },
      { id: 'application', label: 'Submit consulate application' },
    ],
  },
  {
    n: 3,
    slug: 'beckham-law',
    title: 'Beckham Law structuring',
    duration: '90 min',
    summary: 'The six-month window, the election, when standard tax actually wins.',
    sections: [
      { title: 'The mechanics', body: '24% flat on qualifying income up to €600,000.' },
      { title: 'When standard tax wins', body: 'Worked example for buyers with major foreign investment income.' },
      { title: 'The election', body: 'Form 149, six-month deadline, how to file.' },
    ],
    checklist: [
      { id: 'eligibility', label: 'Confirm eligibility (not Spanish resident in prior 5 years)' },
      { id: 'income-mix', label: 'Map your income mix for the projection' },
      { id: 'decision', label: 'Decide: Beckham vs standard tax' },
      { id: 'form-149', label: 'File Form 149 within 6 months of registration' },
    ],
  },
  {
    n: 4,
    slug: 'arriving',
    title: 'Arriving and registering',
    duration: '60 min',
    summary: 'NIE, padrón, modelo 030, social security. The correct order.',
    sections: [
      { title: 'NIE first', body: 'How to obtain it, where, what documents.' },
      { title: 'Padrón', body: 'Town hall registration. The differences across Andalucía, Cataluña, Valencia.' },
      { title: 'Social security registration', body: 'For employees, autónomos, and Beckham regime participants.' },
    ],
    checklist: [
      { id: 'nie', label: 'Obtain NIE' },
      { id: 'padron', label: 'Register padrón at town hall' },
      { id: 'modelo-030', label: 'File modelo 030 (tax address registration)' },
      { id: 'ss-reg', label: 'Register with Social Security if applicable' },
    ],
  },
  {
    n: 5,
    slug: 'banking',
    title: 'Spanish banking',
    duration: '45 min',
    summary: 'Sabadell, BBVA, Santander, plus Wise and Revolut multi-currency strategies.',
    sections: [
      { title: 'Choosing a bank', body: 'The expat-friendly options ranked.' },
      { title: 'Document requirements', body: 'What each bank asks for, what they\'ll accept.' },
      { title: 'Multi-currency layer', body: 'Wise + Revolut alongside the Spanish account.' },
    ],
    checklist: [
      { id: 'main', label: 'Open primary Spanish bank account' },
      { id: 'wise', label: 'Configure Wise multi-currency account' },
      { id: 'cards', label: 'Order Spanish debit card and authenticate Bizum' },
      { id: 'direct-debits', label: 'Migrate UK direct debits or arrange substitutes' },
    ],
  },
  {
    n: 6,
    slug: 'year-one-tax',
    title: 'Year-one tax filing',
    duration: '90 min',
    summary: 'Modelo 100, modelo 720, deadlines, worked examples.',
    sections: [
      { title: 'Modelo 100', body: 'Annual IRPF. April-June filing window.' },
      { title: 'Modelo 720', body: 'Foreign asset declaration. Year-end thresholds.' },
      { title: 'Common mistakes', body: 'What to absolutely not do in year one.' },
    ],
    checklist: [
      { id: 'modelo-100', label: 'File modelo 100', deadline: 'by 30 June' },
      { id: 'modelo-720', label: 'File modelo 720 if applicable', deadline: 'by 31 March' },
      { id: 'asesor', label: 'Engage asesor fiscal if uncomfortable filing solo' },
    ],
  },
  {
    n: 7,
    slug: 'life-admin',
    title: 'Healthcare, schools, life admin',
    duration: '75 min',
    summary: 'Public vs private healthcare, international schools, driving licence exchange.',
    sections: [
      { title: 'Healthcare options', body: 'SAS / Sergas / regional providers vs private (Sanitas, Adeslas).' },
      { title: 'International schools', body: 'British, American, IB. Major hubs in Costa del Sol, Valencia, Madrid.' },
      { title: 'Driving licence exchange', body: 'Window, paperwork, current 2026 process.' },
    ],
    checklist: [
      { id: 'healthcare', label: 'Register for healthcare (public or private)' },
      { id: 'school', label: 'Confirm school place for children' },
      { id: 'licence', label: 'Exchange UK driving licence (within window)' },
      { id: 'tie', label: 'Collect TIE (residency card)' },
    ],
  },
  {
    n: 8,
    slug: 'years-2-to-5',
    title: 'Years 2 to 5: maintenance',
    duration: '45 min',
    summary: 'Renewals, long-term residency, citizenship pathway.',
    sections: [
      { title: 'TIE renewals', body: 'Timing and document refresh.' },
      { title: 'Long-term residency', body: 'Five-year milestone, what changes.' },
      { title: 'Citizenship', body: 'Ten-year pathway, dual nationality reality.' },
    ],
    checklist: [
      { id: 'first-renewal', label: 'First TIE renewal', deadline: 'before year 1 expiry' },
      { id: 'long-term', label: 'Apply for long-term residency at year 5' },
      { id: 'citizenship', label: 'Consider citizenship application at year 10' },
    ],
  },
];

const portugal: PlaybookModule[] = [
  {
    n: 1,
    slug: 'pre-move',
    title: 'Pre-move UK actions',
    duration: '90 min',
    summary: 'The six-to-twelve month run-up before Portugal residency triggers.',
    sections: [
      { title: 'Form P85', body: 'How and when to file.' },
      { title: 'ISA crystallisation', body: 'Before becoming Portuguese tax resident.' },
      { title: 'UK property timing', body: 'Pre-move vs post-move sale.' },
    ],
    checklist: [
      { id: 'p85', label: 'File P85 with HMRC' },
      { id: 'isa', label: 'Review UK ISA positions' },
      { id: 'apostille', label: 'Apostille required documents' },
    ],
  },
  {
    n: 2,
    slug: 'visa',
    title: 'D7 vs D8 vs Golden Visa',
    duration: '90 min',
    summary: 'Choosing the right Portuguese visa route in 2026.',
    sections: [
      { title: 'D7 (passive income)', body: 'Best for retirees.' },
      { title: 'D8 (digital nomad)', body: 'Fastest growing route.' },
      { title: 'Golden Visa', body: 'Fund investment only, no residential property.' },
    ],
    checklist: [
      { id: 'route', label: 'Confirm visa route' },
      { id: 'docs', label: 'Compile documents' },
      { id: 'submit', label: 'Submit visa application' },
    ],
  },
  {
    n: 3,
    slug: 'ifici',
    title: 'IFICI / NHR 2.0',
    duration: '75 min',
    summary: 'The successor regime to NHR. Who qualifies, who does not.',
    sections: [
      { title: 'Qualifying activities', body: 'The narrower 2024+ list.' },
      { title: 'Registration window', body: 'How to elect, when.' },
      { title: 'Pensioners', body: 'No longer get the old NHR pension exemption.' },
    ],
    checklist: [
      { id: 'eligibility', label: 'Confirm IFICI eligibility' },
      { id: 'register', label: 'Register with relevant authority within Y1' },
    ],
  },
  {
    n: 4,
    slug: 'arriving',
    title: 'Arriving and registering',
    duration: '60 min',
    summary: 'NIF, residence, NISS, healthcare. Correct order.',
    sections: [
      { title: 'NIF', body: 'Tax number, before or just after arrival.' },
      { title: 'SEF / AIMA', body: 'Residence registration.' },
      { title: 'SNS', body: 'Healthcare enrolment.' },
    ],
    checklist: [
      { id: 'nif', label: 'Obtain NIF' },
      { id: 'residence', label: 'Register residence (SEF/AIMA)' },
      { id: 'niss', label: 'Register NISS if working' },
      { id: 'sns', label: 'Register with SNS' },
    ],
  },
  {
    n: 5,
    slug: 'banking',
    title: 'Portuguese banking',
    duration: '45 min',
    summary: 'Millennium, ActivoBank, Novobanco. Plus Wise/Revolut.',
    sections: [
      { title: 'Choosing a bank', body: 'Expat-friendly options ranked.' },
      { title: 'Documents', body: 'What each bank asks for.' },
    ],
    checklist: [
      { id: 'main', label: 'Open primary Portuguese bank account' },
      { id: 'wise', label: 'Configure multi-currency setup' },
    ],
  },
  {
    n: 6,
    slug: 'year-one-tax',
    title: 'Year-one IRS filing',
    duration: '90 min',
    summary: 'The IRS, deadlines, worked examples for UK-source income.',
    sections: [
      { title: 'IRS basics', body: 'Brackets, allowances, deductions.' },
      { title: 'UK-source income', body: 'Pensions, rental, dividends under the DTA.' },
    ],
    checklist: [
      { id: 'irs', label: 'File annual IRS' },
      { id: 'accountant', label: 'Engage Portuguese accountant if needed' },
    ],
  },
  {
    n: 7,
    slug: 'years-2-to-5',
    title: 'Years 2 to 5: maintenance',
    duration: '45 min',
    summary: 'Renewals, long-term residency, citizenship at year 5.',
    sections: [
      { title: 'Residence renewals', body: 'Timing and documents.' },
      { title: 'Citizenship at 5 years', body: 'Faster than Spain. Language requirement.' },
    ],
    checklist: [
      { id: 'renewal', label: 'First residence renewal' },
      { id: 'citizenship', label: 'Consider citizenship at year 5' },
    ],
  },
];

const gibraltar: PlaybookModule[] = [
  {
    n: 1,
    slug: 'pre-move',
    title: 'Pre-move UK actions',
    duration: '90 min',
    summary: 'Specific actions for Gibraltar-bound movers.',
    sections: [
      { title: 'Form P85', body: 'UK residency departure.' },
      { title: 'Source-of-funds documentation', body: 'Required for Cat 2 vetting.' },
    ],
    checklist: [
      { id: 'p85', label: 'File P85' },
      { id: 'sof', label: 'Prepare source-of-funds dossier' },
    ],
  },
  {
    n: 2,
    slug: 'cat-2',
    title: 'Cat 2 application',
    duration: '120 min',
    summary: 'Net worth, accommodation, vetting, timeline.',
    sections: [
      { title: 'Net worth proof', body: '£2m minimum, documented properly.' },
      { title: 'Approved accommodation', body: 'Own or rent qualifying property.' },
      { title: 'Vetting timeline', body: 'Realistic 3 to 6 months.' },
    ],
    checklist: [
      { id: 'networth', label: 'Document net worth £2m+' },
      { id: 'accommodation', label: 'Secure approved Gibraltar residence' },
      { id: 'application', label: 'File Cat 2 application' },
    ],
  },
  {
    n: 3,
    slug: 'hepss',
    title: 'HEPSS for specialists',
    duration: '60 min',
    summary: 'For senior specialist employees.',
    sections: [
      { title: 'Eligibility', body: 'Income threshold, role specificity.' },
      { title: 'Employer-driven process', body: 'What the employer does, what you provide.' },
    ],
    checklist: [
      { id: 'offer', label: 'Confirm qualifying senior offer' },
      { id: 'hepss', label: 'Employer files HEPSS application' },
    ],
  },
  {
    n: 4,
    slug: 'frontier',
    title: 'Frontier-worker setup',
    duration: '90 min',
    summary: 'Living Spain, working Gibraltar. Post-Brexit reality.',
    sections: [
      { title: 'Day counting', body: 'Avoiding accidental Spanish tax residency.' },
      { title: 'Social security', body: 'Pay where, claim where.' },
      { title: 'Crossing logistics', body: 'Peak vs off-peak, the new e-gates.' },
    ],
    checklist: [
      { id: 'days', label: 'Set up day-counting log' },
      { id: 'ss', label: 'Confirm SS coordination form A1' },
      { id: 'crossing', label: 'Optimise commute timing' },
    ],
  },
  {
    n: 5,
    slug: 'banking',
    title: 'Gibraltar banking',
    duration: '60 min',
    summary: 'Sterling and Euro, due diligence reality.',
    sections: [
      { title: 'Major banks', body: 'GIB, Jyske, NatWest International.' },
      { title: 'Due diligence', body: 'What they ask, what they want to see.' },
    ],
    checklist: [
      { id: 'bank', label: 'Open Gibraltar bank account' },
      { id: 'multi', label: 'Configure GBP/EUR multi-currency holding' },
    ],
  },
  {
    n: 6,
    slug: 'years-2-to-5',
    title: 'Years 2 to 5: maintenance',
    duration: '45 min',
    summary: 'Annual compliance, when to consider upgrading.',
    sections: [
      { title: 'Annual returns', body: 'Cat 2 and HEPSS compliance.' },
      { title: 'Ordinary residency upgrade', body: 'When and why.' },
    ],
    checklist: [
      { id: 'compliance', label: 'Complete year-1 compliance return' },
      { id: 'review', label: 'Annual structural review' },
    ],
  },
];

export const PLAYBOOK_MODULES: Record<Country, PlaybookModule[]> = {
  spain,
  portugal,
  gibraltar,
};

export function getModule(country: Country, slug: string): PlaybookModule | undefined {
  return PLAYBOOK_MODULES[country].find((m) => m.slug === slug);
}
