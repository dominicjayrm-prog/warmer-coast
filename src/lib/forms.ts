import type { Country } from '@/lib/site';

/**
 * Form template registry.
 *
 * Each entry describes one official form a buyer might need to fill during
 * their move. Forms come in two flavours:
 *   - `nativeFill`: we render a React form, validate inputs, then stamp values
 *                   onto the official PDF template with pdf-lib on submit
 *   - `download`:   we link to the official PDF; users fill offline and either
 *                   upload the scan back to their dashboard or just print it
 *
 * Templates are picked up by /app/[country]/documents to render the form list.
 */

export type FormFlavour = 'nativeFill' | 'download';

export interface FormTemplate {
  /** Stable identifier, used as form_type in wc_form_drafts and wc_user_documents. */
  id: string;
  /** Country this form belongs to. */
  country: Country;
  /** Display name shown in the buyer dashboard. */
  name: string;
  /** Short blurb explaining what the form does and when to file it. */
  blurb: string;
  /** Issuing authority (HMRC, AEAT, Income Tax Office Gibraltar, etc.) */
  authority: string;
  /** Module number this form is referenced from. */
  module?: number;
  /** Where users can download the blank official PDF, if available. */
  officialPdfUrl?: string;
  /** Flavour: native React form vs simple download link. */
  flavour: FormFlavour;
  /** Estimated time to fill (display only). */
  timeMinutes: number;
  /** Ordering hint within the country dashboard. */
  order: number;
}

export const FORM_TEMPLATES: FormTemplate[] = [
  // SPAIN
  {
    id: 'p85',
    country: 'spain',
    name: 'HMRC Form P85',
    blurb:
      'Notify HMRC you are leaving the UK. Triggers UK split-year treatment and stops UK PAYE on overseas income. File once you have a Spanish address.',
    authority: 'HM Revenue & Customs',
    module: 1,
    officialPdfUrl: 'https://www.gov.uk/government/publications/income-tax-leaving-the-uk-getting-your-tax-right-p85',
    flavour: 'nativeFill',
    timeMinutes: 10,
    order: 1,
  },
  {
    id: 'modelo_149',
    country: 'spain',
    name: 'Modelo 149 (Beckham Law election)',
    blurb:
      'Election form for the Spanish impatriate special tax regime. Must be filed within 6 months of social security registration.',
    authority: 'Agencia Tributaria (AEAT)',
    module: 3,
    officialPdfUrl: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GI20.shtml',
    flavour: 'nativeFill',
    timeMinutes: 15,
    order: 2,
  },
  {
    id: 'nie_ex15',
    country: 'spain',
    name: 'NIE application (EX-15)',
    blurb:
      'Foreigner identification number. Required for almost every Spanish transaction. File in Spain or at a Spanish consulate.',
    authority: 'Ministerio del Interior',
    module: 4,
    officialPdfUrl: 'https://extranjeros.inclusion.gob.es/ficheros/ModelosSolicitudes/mod_solicitudes2/15-Formulario_EX15.pdf',
    flavour: 'nativeFill',
    timeMinutes: 10,
    order: 3,
  },
  {
    id: 'modelo_030',
    country: 'spain',
    name: 'Modelo 030 (tax address registration)',
    blurb:
      'Register your Spanish fiscal address with Hacienda. Filed after empadronamiento and before your first tax return.',
    authority: 'Agencia Tributaria (AEAT)',
    module: 4,
    flavour: 'nativeFill',
    timeMinutes: 8,
    order: 4,
  },
  {
    id: 'modelo_720',
    country: 'spain',
    name: 'Modelo 720 (foreign assets declaration)',
    blurb:
      'Annual declaration of foreign assets above €50,000 per category. Filed 1 January to 31 March of the year following residency.',
    authority: 'Agencia Tributaria (AEAT)',
    module: 6,
    flavour: 'download',
    timeMinutes: 45,
    order: 5,
  },

  // PORTUGAL
  {
    id: 'ifici_election',
    country: 'portugal',
    name: 'IFICI election application',
    blurb:
      'Registration for the Portuguese IFICI regime (NHR successor). Filed by 15 January of the year following residency — a hard window.',
    authority: 'Autoridade Tributária (AT)',
    module: 3,
    flavour: 'nativeFill',
    timeMinutes: 15,
    order: 1,
  },
  {
    id: 'd7_application',
    country: 'portugal',
    name: 'D7 visa application',
    blurb:
      'Portuguese passive-income visa for retirees and rentiers. Filed at the Portuguese consulate before travelling.',
    authority: 'AIMA / Portuguese Consulate',
    module: 2,
    flavour: 'nativeFill',
    timeMinutes: 20,
    order: 2,
  },
  {
    id: 'd8_application',
    country: 'portugal',
    name: 'D8 digital nomad visa application',
    blurb:
      'Portuguese remote-worker visa. Income threshold €3,680/month (4x minimum wage). Filed at consulate or AIMA.',
    authority: 'AIMA / Portuguese Consulate',
    module: 2,
    flavour: 'nativeFill',
    timeMinutes: 20,
    order: 3,
  },

  // GIBRALTAR
  {
    id: 'p85_gib',
    country: 'gibraltar',
    name: 'HMRC Form P85',
    blurb:
      'Notify HMRC you are leaving the UK. Required regardless of whether you are moving to Spain, Portugal or Gibraltar.',
    authority: 'HM Revenue & Customs',
    module: 1,
    officialPdfUrl: 'https://www.gov.uk/government/publications/income-tax-leaving-the-uk-getting-your-tax-right-p85',
    flavour: 'nativeFill',
    timeMinutes: 10,
    order: 1,
  },
  {
    id: 'cat2_application',
    country: 'gibraltar',
    name: 'Category 2 application',
    blurb:
      'Application for Gibraltar Cat 2 residency status. Caps assessable worldwide income at £118,000 (tax band £37,000-£42,380). £2m net worth required.',
    authority: 'Finance Centre, Gibraltar',
    module: 2,
    flavour: 'nativeFill',
    timeMinutes: 25,
    order: 2,
  },
  {
    id: 'hepss_application',
    country: 'gibraltar',
    name: 'HEPSS application (employer-led)',
    blurb:
      'Application for High Executive Possessing Specialist Skills status. Filed by your Gibraltar employer. Tax capped on the first £160,000 of earnings (≈ £39,940/yr).',
    authority: 'Finance Centre, Gibraltar',
    module: 3,
    flavour: 'nativeFill',
    timeMinutes: 20,
    order: 3,
  },
  {
    id: 'gibraltar_income_tax',
    country: 'gibraltar',
    name: 'Income Tax Return (ABS or GIBS election)',
    blurb:
      'Annual return for the year ended 30 June, due 30 November. Choose annually between the Allowance-Based and Gross-Income-Based schemes — whichever is lower.',
    authority: 'Income Tax Office, Gibraltar',
    module: 6,
    flavour: 'nativeFill',
    timeMinutes: 30,
    order: 4,
  },
];

export function formsForCountry(country: Country): FormTemplate[] {
  return FORM_TEMPLATES.filter((f) => f.country === country).sort(
    (a, b) => a.order - b.order,
  );
}

export function getFormTemplate(id: string): FormTemplate | undefined {
  return FORM_TEMPLATES.find((f) => f.id === id);
}
