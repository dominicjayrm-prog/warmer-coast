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
};

export function getFormSchema(id: string): FormSchema | undefined {
  return FORM_SCHEMAS[id];
}
