/**
 * Form field schemas.
 *
 * Each schema describes the fields one form template needs from the user.
 * The same schema drives:
 *   - the React FormFiller (renders inputs, validates)
 *   - the pdf-lib generator on the server (lays values out on the page)
 *   - the draft save shape stored in wc_form_drafts.data
 *
 * Output PDFs are WarmerCoast-formatted summary briefs the user can attach
 * to the official filing, or use as a personal record. We do NOT reproduce
 * official PDFs — that side stays the official authority's download.
 */

export type FieldType = 'text' | 'email' | 'date' | 'number' | 'currency' | 'textarea' | 'select' | 'tel' | 'checkbox';

export interface FormField {
  id: string;
  label: string;
  type: FieldType;
  /** Optional placeholder / example. */
  hint?: string;
  /** Optional helper paragraph displayed under the input. */
  help?: string;
  /** Required at submission time. */
  required?: boolean;
  /** For select. */
  options?: { value: string; label: string }[];
  /** Min/max for number/currency. */
  min?: number;
  max?: number;
  /** Stretch over full row in the grid. */
  fullWidth?: boolean;
}

export interface FormSection {
  title: string;
  description?: string;
  fields: FormField[];
}

export interface FormSchema {
  /** Matches forms.ts template id. */
  id: string;
  /** Display title for the filler page. */
  title: string;
  /** Brief shown above the form. */
  intro: string;
  /** Title of the generated PDF. */
  pdfTitle: string;
  /** Sections that group fields. */
  sections: FormSection[];
  /** "What to do next" block on success. */
  nextSteps: string[];
}

const COMMON_PERSONAL: FormSection = {
  title: 'Your details',
  description: 'These auto-fill into future forms once you save them here.',
  fields: [
    { id: 'fullName', label: 'Full legal name', type: 'text', required: true, hint: 'As shown on your passport' },
    { id: 'dob', label: 'Date of birth', type: 'date', required: true },
    { id: 'nationality', label: 'Nationality', type: 'text', required: true, hint: 'British' },
    { id: 'passportNumber', label: 'Passport number', type: 'text', required: true },
    { id: 'niNumber', label: 'UK National Insurance number', type: 'text', required: true, hint: 'AB123456C format' },
    { id: 'email', label: 'Email address', type: 'email', required: true },
    { id: 'phone', label: 'Phone number', type: 'tel', required: true, hint: 'Include country code, e.g. +44 7700 900123' },
  ],
};

export const FORM_SCHEMAS: Record<string, FormSchema> = {
  p85: {
    id: 'p85',
    title: 'HMRC Form P85 - leaving the UK',
    intro:
      'Tells HMRC you are leaving the UK so they can recalculate your UK tax for the year. We use your inputs to produce a WarmerCoast summary you can attach to your gov.uk P85 submission. File the official P85 at gov.uk; this app holds your reference copy.',
    pdfTitle: 'P85 application brief',
    sections: [
      COMMON_PERSONAL,
      {
        title: 'UK departure',
        fields: [
          { id: 'departureDate', label: 'Date you left or will leave the UK', type: 'date', required: true },
          { id: 'returnToUk', label: 'Do you plan to return to the UK?', type: 'select', required: true, options: [
            { value: 'no', label: 'No' },
            { value: 'yes_visit', label: 'Only short visits' },
            { value: 'yes_permanent', label: 'Yes, to live again later' },
            { value: 'undecided', label: 'Undecided' },
          ] },
          { id: 'ukAddressAtDeparture', label: 'Last UK address', type: 'textarea', required: true, fullWidth: true },
          { id: 'overseasAddress', label: 'New address abroad', type: 'textarea', required: true, fullWidth: true, hint: 'Full street, postal code, city, country' },
          { id: 'destinationCountry', label: 'Destination country', type: 'select', required: true, options: [
            { value: 'spain', label: 'Spain' },
            { value: 'portugal', label: 'Portugal' },
            { value: 'gibraltar', label: 'Gibraltar' },
            { value: 'other', label: 'Other' },
          ] },
        ],
      },
      {
        title: 'UK employment and income',
        fields: [
          { id: 'lastUkEmployer', label: 'Last UK employer name', type: 'text' },
          { id: 'lastUkEmployerPaye', label: "Last employer's PAYE reference", type: 'text', hint: 'On a P45 or pay slip' },
          { id: 'lastWorkDate', label: 'Last day worked in the UK', type: 'date' },
          { id: 'p45Held', label: 'Do you have a P45 from your last UK employer?', type: 'select', options: [
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ] },
          { id: 'ukPensionAfterMove', label: 'Will you receive any UK pension after the move?', type: 'select', options: [
            { value: 'no', label: 'No' },
            { value: 'state', label: 'UK State Pension' },
            { value: 'private', label: 'Private or workplace pension' },
            { value: 'both', label: 'Both' },
            { value: 'gov', label: 'UK government service pension (NHS, civil service, military, teachers)' },
          ] },
          { id: 'ukRentalIncome', label: 'Will you have UK rental income after the move?', type: 'select', options: [
            { value: 'no', label: 'No' },
            { value: 'yes_nrl', label: 'Yes - will register as Non-Resident Landlord' },
            { value: 'yes_already', label: 'Yes - already NRL registered' },
          ] },
        ],
      },
    ],
    nextSteps: [
      'Download your filled P85 brief PDF and keep it with your move records.',
      'File the official P85 at gov.uk: search "P85 leaving the UK".',
      'You will need your last P45 from your UK employer (or a final pay slip if no P45 was issued).',
      'HMRC typically responds within 4-6 weeks with confirmation and any tax refund due.',
    ],
  },

  modelo_149: {
    id: 'modelo_149',
    title: 'Modelo 149 - Beckham Law election',
    intro:
      "Spain's special tax regime election for incoming workers. 24% flat tax on Spanish-source employment income up to €600,000 for six years. You MUST file Modelo 149 with the Agencia Tributaria within 6 months of social security registration. There are no extensions. This brief gathers the data you'll need for the official filing.",
    pdfTitle: 'Modelo 149 Beckham election brief',
    sections: [
      COMMON_PERSONAL,
      {
        title: 'Spanish identifiers',
        fields: [
          { id: 'nieNumber', label: 'NIE (foreigner ID number)', type: 'text', required: true, hint: 'X1234567L format' },
          { id: 'spanishAddress', label: 'Spanish residential address', type: 'textarea', required: true, fullWidth: true },
          { id: 'spanishSocialSecurity', label: 'Spanish social security number (NUSS)', type: 'text', required: true },
        ],
      },
      {
        title: 'Move and election',
        fields: [
          { id: 'arrivalDate', label: 'Date you arrived in Spain', type: 'date', required: true },
          { id: 'socialSecurityRegDate', label: 'Date of social security registration in Spain', type: 'date', required: true, help: 'This starts your 6-month Beckham election clock.' },
          { id: 'priorSpanishResidency', label: 'Were you a Spanish tax resident in any of the prior 5 calendar years?', type: 'select', required: true, options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes (you cannot elect Beckham)' },
          ] },
          { id: 'qualifyingActivity', label: 'Your qualifying activity', type: 'select', required: true, options: [
            { value: 'employee_spanish', label: 'Employee of a Spanish company' },
            { value: 'director_spanish', label: 'Director of a Spanish company' },
            { value: 'dnv', label: 'Digital Nomad Visa holder (employee of non-Spanish company)' },
            { value: 'dnv_self', label: 'Digital Nomad Visa holder (self-employed)' },
            { value: 'innovative_entrepreneur', label: 'Self-employed entrepreneur in an innovative sector' },
          ] },
          { id: 'employerName', label: 'Employer or principal client name', type: 'text', required: true },
          { id: 'employerCif', label: 'Employer Spanish CIF (if Spanish employer)', type: 'text', hint: 'Skip if non-Spanish employer' },
          { id: 'estimatedSpanishIncome', label: 'Estimated 2026 Spanish-source employment income (€)', type: 'currency', required: true, hint: 'Annual gross' },
        ],
      },
      {
        title: 'Family election',
        fields: [
          { id: 'spouseElecting', label: 'Will your spouse also elect Beckham?', type: 'select', options: [
            { value: 'no', label: 'No / not applicable' },
            { value: 'yes_employee', label: 'Yes - as employee' },
            { value: 'yes_self', label: 'Yes - as self-employed' },
          ] },
          { id: 'childrenUnder25', label: 'Number of children under 25 also moving', type: 'number', min: 0, max: 12 },
        ],
      },
    ],
    nextSteps: [
      'Download your Modelo 149 brief.',
      'Log into the AEAT online portal with your Cl@ve PIN or digital certificate.',
      'Navigate to "Modelo 149 - solicitud régimen especial trabajadores desplazados".',
      'Submit before 6 months from your social security registration date.',
      'AEAT decision typically within 10 working days.',
    ],
  },

  cat2_application: {
    id: 'cat2_application',
    title: 'Gibraltar Category 2 (Cat 2) residency application',
    intro:
      'Cat 2 caps your assessable worldwide income at £118,000 per year, producing a tax floor of ~£37,000 and a ceiling of ~£44,740. You need £2 million net worth, qualifying accommodation in Gibraltar, and no plans to be employed in Gibraltar. This brief gathers the data the Finance Centre will need.',
    pdfTitle: 'Cat 2 application brief',
    sections: [
      COMMON_PERSONAL,
      {
        title: 'Net worth and source of wealth',
        description: 'Cat 2 requires £2m net worth. The Finance Centre wants a credible source-of-wealth story.',
        fields: [
          { id: 'netWorthGbp', label: 'Approximate net worth (£GBP)', type: 'currency', required: true, hint: 'Conservative valuation, audit-ready' },
          { id: 'wealthSource', label: 'Primary source of wealth', type: 'select', required: true, options: [
            { value: 'business', label: 'Business sale or ownership' },
            { value: 'employment', label: 'Senior employment / executive compensation' },
            { value: 'investment', label: 'Investment returns / portfolio' },
            { value: 'inheritance', label: 'Inheritance' },
            { value: 'mixed', label: 'Mixed' },
          ] },
          { id: 'wealthNarrative', label: 'Source of wealth narrative', type: 'textarea', required: true, fullWidth: true, help: 'Short paragraph the Finance Centre can review. Plain English, no marketing language.' },
        ],
      },
      {
        title: 'Gibraltar accommodation',
        description: 'Cat 2 requires qualifying accommodation. Typically purchased or 7-year rental.',
        fields: [
          { id: 'accommodationType', label: 'Accommodation type', type: 'select', required: true, options: [
            { value: 'purchase', label: 'Purchase' },
            { value: 'long_lease', label: 'Long lease (7+ years)' },
            { value: 'short_lease', label: 'Short lease (under 7 years - may not qualify)' },
            { value: 'tbd', label: 'To be arranged after approval' },
          ] },
          { id: 'gibraltarAddress', label: 'Gibraltar address (if known)', type: 'textarea', fullWidth: true },
          { id: 'movingWithFamily', label: 'Family members joining you', type: 'textarea', help: 'Spouse, children, ages.' },
        ],
      },
      {
        title: 'Background and intent',
        fields: [
          { id: 'currentResidence', label: 'Current country of tax residence', type: 'text', required: true },
          { id: 'criminalRecord', label: 'Any criminal convictions (excluding spent UK road-traffic)?', type: 'select', required: true, options: [
            { value: 'no', label: 'No' },
            { value: 'yes_disclose', label: 'Yes - will disclose' },
          ] },
          { id: 'bankruptcy', label: 'Any current or recent bankruptcy / insolvency?', type: 'select', required: true, options: [
            { value: 'no', label: 'No' },
            { value: 'yes_disclose', label: 'Yes - will disclose' },
          ] },
          { id: 'reasonForGibraltar', label: 'Reason for choosing Gibraltar', type: 'textarea', required: true, fullWidth: true, help: 'The Finance Centre likes substance over tax-arbitrage language. Family, lifestyle, business connections.' },
        ],
      },
      {
        title: 'Professional references',
        description: 'Cat 2 typically requires two professional references (lawyer, banker, accountant).',
        fields: [
          { id: 'reference1Name', label: 'Reference 1 - name', type: 'text', required: true },
          { id: 'reference1Firm', label: 'Reference 1 - firm', type: 'text', required: true },
          { id: 'reference1Relationship', label: 'Reference 1 - relationship', type: 'text', required: true, hint: 'e.g. "Personal solicitor since 2018"' },
          { id: 'reference2Name', label: 'Reference 2 - name', type: 'text', required: true },
          { id: 'reference2Firm', label: 'Reference 2 - firm', type: 'text', required: true },
          { id: 'reference2Relationship', label: 'Reference 2 - relationship', type: 'text', required: true },
        ],
      },
    ],
    nextSteps: [
      'Download your Cat 2 application brief.',
      'Engage a Gibraltar law firm to file the formal Cat 2 application. The Finance Centre expects local representation.',
      'Gather supporting documents: net worth proof, bank statements, professional references, CV, photo, passport copies, criminal record certificate.',
      'Application fee currently £1,000 to the Finance Centre on filing.',
      'Decision typically 6-10 weeks, expedited where the application is clean.',
    ],
  },

  hepss_application: {
    id: 'hepss_application',
    title: 'HEPSS application brief',
    intro:
      'HEPSS (High Executive Possessing Specialist Skills) caps assessable income at £160,000 for senior employees of Gibraltar-licensed companies. Effective tax ceiling ~£44,000. HEPSS is employer-led - your Gibraltar employer files the application on your behalf. This brief captures the data they will need from you.',
    pdfTitle: 'HEPSS application brief',
    sections: [
      COMMON_PERSONAL,
      {
        title: 'The Gibraltar role',
        fields: [
          { id: 'gibraltarEmployer', label: 'Gibraltar employer name', type: 'text', required: true },
          { id: 'gibraltarEmployerLicence', label: 'Employer FSC / Gambling Commission / regulatory licence number', type: 'text', required: true, help: 'HEPSS requires the employer to hold a qualifying regulatory licence.' },
          { id: 'roleTitle', label: 'Your role title', type: 'text', required: true, hint: 'e.g. Chief Compliance Officer, Director of Engineering' },
          { id: 'roleStartDate', label: 'Role start date', type: 'date', required: true },
          { id: 'annualSalary', label: 'Annual gross salary (£GBP)', type: 'currency', required: true, hint: 'Must be £160,000+ to qualify' },
          { id: 'specialistSkills', label: 'Specialist skills the role requires', type: 'textarea', required: true, fullWidth: true, help: 'Why this role could not reasonably be filled locally. Director-level experience, regulated qualifications, niche technology, executive search recruitment.' },
        ],
      },
      {
        title: 'Prior non-residence',
        fields: [
          { id: 'priorGibraltarResidency', label: 'Were you Gibraltar-resident in any of the prior 3 years?', type: 'select', required: true, options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes (you cannot apply for HEPSS)' },
          ] },
          { id: 'currentResidence', label: 'Current country of tax residence', type: 'text', required: true },
        ],
      },
      {
        title: 'Qualifying accommodation',
        fields: [
          { id: 'accommodationType', label: 'Accommodation type', type: 'select', required: true, options: [
            { value: 'purchase', label: 'Purchase' },
            { value: 'long_lease', label: 'Long lease (7+ years)' },
            { value: 'tbd', label: 'To be arranged after approval' },
          ] },
          { id: 'gibraltarAddress', label: 'Gibraltar address (if known)', type: 'textarea', fullWidth: true },
          { id: 'movingWithFamily', label: 'Family members joining you', type: 'textarea', help: 'Spouse, children, ages. Family is admitted as dependants - HEPSS tax status does not extend to them.' },
        ],
      },
    ],
    nextSteps: [
      'Share this brief with your prospective Gibraltar employer&apos;s HR / in-house counsel.',
      'The employer files the HEPSS application with the Finance Centre - typically through their Gibraltar law firm.',
      'Decision typically 4-6 weeks for clean applications.',
      'HEPSS status applies from the date of the certificate. Your tax cap at £160,000 of assessable income kicks in immediately.',
    ],
  },

  nie_ex15: {
    id: 'nie_ex15',
    title: 'Spanish NIE application (EX-15)',
    intro:
      'The Número de Identidad de Extranjero is your Spanish foreigner ID number. Required for almost every Spanish transaction. Apply at the Spanish consulate in the UK before you move (cleanest) OR at a National Police station in Spain after arrival. This brief captures the data for Form EX-15.',
    pdfTitle: 'NIE EX-15 application brief',
    sections: [
      COMMON_PERSONAL,
      {
        title: 'Reason for NIE',
        fields: [
          { id: 'reasonForNie', label: 'Reason for needing the NIE', type: 'select', required: true, options: [
            { value: 'visa_application', label: 'Spanish visa application' },
            { value: 'property_purchase', label: 'Spanish property purchase' },
            { value: 'employment', label: 'Spanish employment' },
            { value: 'inheritance', label: 'Spanish inheritance' },
            { value: 'investment', label: 'Spanish investment' },
            { value: 'other', label: 'Other administrative' },
          ] },
          { id: 'reasonDetail', label: 'Brief detail of the reason', type: 'textarea', fullWidth: true },
        ],
      },
      {
        title: 'Application location',
        fields: [
          { id: 'applicationLocation', label: 'Where will you apply?', type: 'select', required: true, options: [
            { value: 'consulate_london', label: 'Spanish Consulate London' },
            { value: 'consulate_manchester', label: 'Spanish Consulate Manchester' },
            { value: 'consulate_edinburgh', label: 'Spanish Consulate Edinburgh' },
            { value: 'spain_police', label: 'National Police station in Spain' },
          ] },
          { id: 'expectedSpanishAddress', label: 'Spanish address (future or current)', type: 'textarea', fullWidth: true },
          { id: 'currentUkAddress', label: 'Current UK address', type: 'textarea', required: true, fullWidth: true },
        ],
      },
    ],
    nextSteps: [
      'Book your cita previa appointment online if applying in Spain (sede.administracionespublicas.gob.es) or via the consulate website.',
      'Pay the tasa 790 fee (~€12) at a Spanish bank or via the AEAT online payment portal.',
      'Bring this brief, the EX-15 form, your passport, tasa receipt, and justification documents to the appointment.',
      'NIE typically issued same day in Spain or within 5 working days at the consulate.',
    ],
  },

  modelo_030: {
    id: 'modelo_030',
    title: 'Spanish tax address registration (Modelo 030)',
    intro:
      'Modelo 030 registers your Spanish residential address with the Agencia Tributaria. Required for filing your first Spanish tax return, activating Cl@ve PIN, and receiving tax correspondence. Quick filing once you have NIE and empadronamiento.',
    pdfTitle: 'Modelo 030 brief',
    sections: [
      COMMON_PERSONAL,
      {
        title: 'Spanish fiscal data',
        fields: [
          { id: 'nieNumber', label: 'NIE number', type: 'text', required: true, hint: 'X1234567L format' },
          { id: 'spanishAddress', label: 'Spanish residential address', type: 'textarea', required: true, fullWidth: true, hint: 'Street, number, floor, postal code, municipality, province' },
          { id: 'empadronamientoDate', label: 'Date of empadronamiento (town hall registration)', type: 'date', required: true },
          { id: 'previousFiscalAddress', label: 'Previous fiscal address (if previously Spanish-registered)', type: 'textarea', fullWidth: true },
          { id: 'taxResidencyType', label: 'Tax residency status you are declaring', type: 'select', required: true, options: [
            { value: 'new_resident', label: 'New Spanish tax resident (first registration)' },
            { value: 'address_change', label: 'Address change only' },
          ] },
        ],
      },
    ],
    nextSteps: [
      'File Modelo 030 online via sede.agenciatributaria.gob.es (requires Cl@ve PIN or digital certificate) OR in person at any Hacienda office.',
      'Apply for Cl@ve PIN at the same time if not already obtained - allows online filing for subsequent forms including Modelo 149.',
      'Once registered, your fiscal address is locked in for tax correspondence and your first Modelo 100 return will be expected.',
    ],
  },

  d7_application: {
    id: 'd7_application',
    title: 'Portugal D7 visa application brief',
    intro:
      'The Portuguese D7 is the passive-income residency visa for retirees and rentiers. Threshold ~€820/month primary applicant (100% SMN 2026). No salaried Portuguese work allowed during D7. 2-year initial residence, 3-year renewals, citizenship at year 5. This brief captures the data for your consulate filing.',
    pdfTitle: 'D7 application brief',
    sections: [
      COMMON_PERSONAL,
      {
        title: 'Move details',
        fields: [
          { id: 'plannedArrivalDate', label: 'Planned Portugal arrival date', type: 'date', required: true },
          { id: 'portugueseAddress', label: 'Portuguese address (lease or property)', type: 'textarea', required: true, fullWidth: true },
          { id: 'whyPortugal', label: 'Reason for choosing Portugal', type: 'textarea', required: true, fullWidth: true, help: 'Lifestyle, family, climate. Avoid pure tax-arbitrage language.' },
        ],
      },
      {
        title: 'Income evidence (passive only)',
        fields: [
          { id: 'ukStatePension', label: 'Annual UK State Pension (£GBP, gross)', type: 'currency' },
          { id: 'ukPrivatePension', label: 'Annual UK private / workplace pension (£GBP, gross)', type: 'currency' },
          { id: 'ukRentalIncome', label: 'Annual UK rental income (£GBP, net)', type: 'currency' },
          { id: 'dividendIncome', label: 'Annual dividend / investment income (£GBP)', type: 'currency' },
          { id: 'savingsForSupport', label: 'Liquid savings backing the application (£GBP)', type: 'currency', hint: 'If savings used to support income threshold' },
          { id: 'totalAnnualIncome', label: 'Total annual passive income (£GBP)', type: 'currency', required: true, help: 'Must clear €820/month primary (~€9,840/year) plus dependant additions.' },
        ],
      },
      {
        title: 'Family inclusion',
        fields: [
          { id: 'includingSpouse', label: 'Including spouse as dependant?', type: 'select', options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ] },
          { id: 'childrenCount', label: 'Number of children moving with you', type: 'number', min: 0, max: 12 },
        ],
      },
    ],
    nextSteps: [
      'Book consulate appointment at your nearest Portuguese consulate.',
      'Submit: D7 form, apostilled birth + marriage + ACRO, certified translations, income evidence, savings evidence, medical certificate, private health insurance, photo.',
      'Decision typically 60-120 days.',
      'Enter Portugal within 90 days of visa, apply for Título de Residência at AIMA within 30 days of arrival.',
      'Note: D7 holders are NOT IFICI-eligible. Standard Portuguese IRS applies to worldwide income.',
    ],
  },

  d8_application: {
    id: 'd8_application',
    title: 'Portugal D8 digital nomad visa application brief',
    intro:
      'The Portuguese D8 is the digital nomad residency visa for remote workers and qualifying freelancers. Threshold ~€3,680/month primary (4x SMN 2026). 2-year initial residence. IFICI eligibility ONLY if your role is in a listed qualifying activity (most generic remote work does not qualify). This brief captures the data for your consulate filing.',
    pdfTitle: 'D8 application brief',
    sections: [
      COMMON_PERSONAL,
      {
        title: 'Move and accommodation',
        fields: [
          { id: 'plannedArrivalDate', label: 'Planned Portugal arrival date', type: 'date', required: true },
          { id: 'portugueseAddress', label: 'Portuguese address (lease or property)', type: 'textarea', required: true, fullWidth: true },
          { id: 'preferredCity', label: 'Preferred Portuguese city', type: 'select', options: [
            { value: 'lisbon', label: 'Lisbon' },
            { value: 'porto', label: 'Porto' },
            { value: 'cascais', label: 'Cascais' },
            { value: 'algarve', label: 'Algarve' },
            { value: 'madeira', label: 'Madeira' },
            { value: 'azores', label: 'Azores' },
            { value: 'other', label: 'Other' },
          ] },
        ],
      },
      {
        title: 'Income and employment track',
        fields: [
          { id: 'employmentTrack', label: 'Application track', type: 'select', required: true, options: [
            { value: 'employee', label: 'Employee track (single non-Portuguese employer)' },
            { value: 'self_employed', label: 'Self-employed (multiple clients)' },
          ] },
          { id: 'employerName', label: 'Employer or principal client name', type: 'text', required: true },
          { id: 'employerCountry', label: 'Employer country', type: 'text', required: true, hint: 'Must NOT be Portugal for employee track' },
          { id: 'monthlyIncome', label: 'Average monthly income (€EUR, gross)', type: 'currency', required: true, hint: 'Must clear €3,680/month threshold' },
          { id: 'incomeSource', label: 'Income source description', type: 'textarea', required: true, fullWidth: true, help: 'For self-employed: confirm Portuguese clients under 25% of total.' },
        ],
      },
      {
        title: 'IFICI eligibility check',
        fields: [
          { id: 'ificiQualifyingActivity', label: 'Is your role in a listed IFICI qualifying activity?', type: 'select', options: [
            { value: 'unknown', label: 'Unknown - need to verify' },
            { value: 'category_a', label: 'Category A - Scientific research / higher education' },
            { value: 'category_b', label: 'Category B - Productive investment project role' },
            { value: 'category_c', label: 'Category C - Startup Portugal certified employer' },
            { value: 'category_d', label: 'Category D - Listed high-value-added profession' },
            { value: 'category_e', label: 'Category E - Madeira / Azores incentivised activity' },
            { value: 'none', label: 'No - role does not qualify for IFICI' },
          ] },
          { id: 'ificiEvidence', label: 'Evidence supporting IFICI qualifying activity', type: 'textarea', fullWidth: true, help: 'e.g. Startup Portugal certificate number, ANI innovation certification, listed profession ID.' },
        ],
      },
    ],
    nextSteps: [
      'Book Portuguese consulate appointment.',
      'Submit: D8 form, apostilled documents, employer letter, income evidence, private health insurance, medical certificate, financial bank statements.',
      'Decision typically 60-90 days.',
      'Enter Portugal within 90 days of visa, apply for Título de Residência at AIMA within 30 days.',
      'If IFICI-eligible: file IFICI application by 31 March of year following Portuguese tax residency commencement.',
    ],
  },

  ifici_election: {
    id: 'ifici_election',
    title: 'Portugal IFICI election brief',
    intro:
      'IFICI (Incentivo Fiscal à Investigação Científica e Inovação) is the successor to NHR. 20% flat Portuguese tax on qualifying activity income for 10 years. Foreign-source dividends, interest, gains, rental largely Portugal-exempt. Election filed by 31 March of the year following Portuguese tax residency. This brief gathers the data your contabilista will need to file.',
    pdfTitle: 'IFICI election brief',
    sections: [
      COMMON_PERSONAL,
      {
        title: 'Portuguese identifiers',
        fields: [
          { id: 'nifNumber', label: 'NIF (Portuguese tax number)', type: 'text', required: true, hint: '9-digit format' },
          { id: 'portugueseAddress', label: 'Portuguese residential address', type: 'textarea', required: true, fullWidth: true },
          { id: 'atestadoDate', label: 'Date of Atestado de Residência', type: 'date', required: true },
        ],
      },
      {
        title: 'Qualifying activity',
        fields: [
          { id: 'qualifyingCategory', label: 'IFICI qualifying activity category', type: 'select', required: true, options: [
            { value: 'category_a', label: 'A - Scientific research / higher education' },
            { value: 'category_b', label: 'B - Productive investment project role' },
            { value: 'category_c', label: 'C - Startup Portugal certified employer' },
            { value: 'category_d', label: 'D - Listed high-value-added profession' },
            { value: 'category_e', label: 'E - Madeira / Azores incentivised activity' },
          ] },
          { id: 'qualifyingEvidence', label: 'Evidence of qualifying activity', type: 'textarea', required: true, fullWidth: true, help: 'Employer name, certification number, contract reference, research institution name.' },
          { id: 'priorPortugueseResidency', label: 'Were you Portuguese tax resident in any of the prior 5 calendar years?', type: 'select', required: true, options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes (you cannot elect IFICI)' },
          ] },
        ],
      },
      {
        title: 'Move and election timing',
        fields: [
          { id: 'taxResidencyDate', label: 'Date of Portuguese tax residency commencement', type: 'date', required: true, help: 'Typically the date you crossed the 183-day threshold or established centre of vital interests.' },
          { id: 'electionDeadline', label: 'IFICI election deadline (auto-calculated)', type: 'text', help: '31 March of the year following your tax residency year. Filed by your contabilista.' },
          { id: 'estimatedPortugueseIncome', label: 'Estimated annual Portuguese-source qualifying income (€EUR)', type: 'currency', required: true },
        ],
      },
      {
        title: 'Family election',
        fields: [
          { id: 'spouseElecting', label: 'Will your spouse also elect IFICI?', type: 'select', options: [
            { value: 'no', label: 'No / not applicable' },
            { value: 'yes', label: 'Yes - independent election' },
          ] },
          { id: 'childrenUnder25', label: 'Number of children under 25 also moving', type: 'number', min: 0, max: 12 },
        ],
      },
    ],
    nextSteps: [
      'Share this brief with your Portuguese contabilista.',
      'Contabilista files the IFICI application via the portaldofinanças portal by 31 March of the year following your residency commencement.',
      'Agency decision typically 30-90 days.',
      'IFICI status applies retroactively from the date of your Portuguese tax residency. The 10-year regime window starts from there.',
    ],
  },
};

export function getFormSchema(id: string): FormSchema | undefined {
  return FORM_SCHEMAS[id];
}
