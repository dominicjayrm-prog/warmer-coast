import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spain Tax Residency 2026 | Beckham Law, Modelo 720, 183-Day Rule for UK Movers',
  description:
    'How Spanish tax residency works for British citizens in 2026. 183-day rule, centre of economic interests, Modelo 720 foreign-asset declaration, Beckham Law 24% flat rate, UK-Spain DTA pension mechanics, ISA treatment, CGT on UK property.',
  alternates: { canonical: '/spain/tax-residency' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      subPillarSlug="tax-residency"
      eyebrow="Tax residency · 2026"
      h1="Spanish tax residency for UK movers"
      intro="The single most important topic for getting your move right. Spanish tax residency is binary — you either are or are not, and the trigger date can cost or save you £20,000 in year one alone. Two triggers operate independently: 183 days physical presence in a calendar year, or centre of economic interests being in Spain. Once you cross the line, worldwide income becomes Spanish-taxable, the Beckham Law election window opens (and closes), Modelo 720 reporting kicks in, and UK ISA wrappers stop working. Getting the timing and the elections right is the single biggest tax decision of the move."
      bullets={[
        '183-day rule: arrival and departure days both count; "sporadic absences" still count unless tax-resident elsewhere',
        'Beckham Law: 24% flat on Spanish-source employment income up to €600,000 for 6 years',
        'Beckham Law deadline: Modelo 149 within 6 months of Social Security registration — absolute',
        'Modelo 720: foreign-asset declaration if any of bank accounts / securities / real estate exceeds €50,000',
        'UK government pensions taxed only in UK; state and private pensions taxed only in Spain once resident',
        'UK ISA wrapper not recognised — income and gains become Spanish-taxable',
      ]}
      sections={[
        {
          id: '183-day-rule',
          title: 'The 183-day rule and centre of vital interests',
          body: (
            <>
              <p>
                Tax residency in Spain is determined by Article 9 of the Spanish Personal
                Income Tax Law (Ley 35/2006). Two tests operate independently: if either one
                triggers, you are Spanish tax resident for the whole calendar year.
              </p>
              <p>
                The first test is 183 days of physical presence in Spain during a calendar
                year. Arrival and departure days both count. &ldquo;Sporadic absences&rdquo;
                abroad still count toward the Spanish total unless you can prove tax residency
                in another
                country during the absence. This catches Brits who think a long UK trip
                protects them — it does not, unless during that trip you were a UK tax
                resident.
              </p>
              <p>
                The second test is centre of vital interests: where your spouse, dependent
                children, business activities, and most assets are located. This can override
                the day count. A British family who own a house in Madrid, send children to
                school in Madrid, and have most assets in Spain may be Spanish tax resident
                even if the working spouse is only physically in Spain 150 days a year.
              </p>
            </>
          ),
        },
        {
          id: 'beckham-law',
          title: 'Beckham Law: 24% flat rate, 6 months to elect',
          body: (
            <>
              <p>
                The Régimen Especial de Trabajadores Desplazados (Régimen impatriado, popularly
                known as Beckham Law) is the most valuable tax structuring opportunity for
                high-earning Brits moving to Spain. Once elected, qualifying Spanish-source
                employment income is taxed at 24% flat on the first €600,000 per year, with
                47% on any excess. Foreign-source investment income is generally not taxable
                in Spain during the regime period.
              </p>
              <p>
                The regime lasts six tax years: the year of arrival plus five subsequent. After
                that you transition to standard Spanish progressive tax (up to ~47% top rate).
              </p>
              <p>
                Three hard eligibility conditions: you must not have been Spanish tax resident
                in the prior 5 tax years; you must move because of a qualifying employment
                contract or qualifying self-employment (since 2023, the digital nomad visa
                qualifies); and you must file <strong>Modelo 149 within 6 months of Social
                Security registration</strong>. The 6-month deadline is absolute. Miss it and
                you forfeit Beckham Law for the entire stay, permanently. There is no extension
                mechanism.
              </p>
              <p>
                Beckham Law is not always the right call. The regime&apos;s treatment of
                foreign-source investment income can be less favourable for buyers with major
                non-UK portfolio income. The playbook walks through worked examples at £75k,
                £125k and £200k income levels showing where standard tax actually wins.
              </p>
            </>
          ),
        },
        {
          id: 'modelo-720',
          title: 'Modelo 720: declaring foreign assets',
          body: (
            <>
              <p>
                Modelo 720 is the Spanish foreign-asset declaration that has caused British
                expats more anxiety than any other single form. The obligation is to declare
                three asset categories — bank accounts, securities and life insurance, and
                real estate — separately, if any category exceeds €50,000 at year-end.
              </p>
              <p>
                If any category triggers, that category must be fully declared. Subsequent
                years require redeclaration only when the category value rises by €20,000 or
                more, or when an asset is liquidated.
              </p>
              <p>
                The original penalty regime was famously harsh — 150% minimum penalties on
                undeclared assets — until the European Court of Justice ruled it
                disproportionate in 2022. Penalties are now proportionate to standard Spanish
                tax penalty rules. The obligation itself remains: filing deadline is 31 March
                of the year following the relevant tax year.
              </p>
            </>
          ),
        },
        {
          id: 'uk-pensions',
          title: 'UK pensions under the UK-Spain double tax treaty',
          body: (
            <>
              <p>
                The UK-Spain DTA Article 17 governs pension treatment. UK government pensions
                — Civil Service, NHS, teachers, armed forces, police — remain taxable only in
                the UK, never in Spain, regardless of Spanish residency.
              </p>
              <p>
                The UK State Pension and private/occupational pensions including SIPP
                drawdowns are taxable only in Spain once you are Spanish resident. The UK no
                longer taxes them. You can apply for HMRC to stop UK withholding on private
                pensions via the DT-Individual form once Spanish residency is established.
              </p>
              <p>
                Drawdown timing matters significantly in the year of move. Large lump sums
                taken before Spanish residency triggers stay UK-taxable and benefit from any
                UK 25% tax-free element. The same drawdown after the trigger date becomes
                Spanish-taxable on the full amount — no 25% Spanish equivalent.
              </p>
            </>
          ),
        },
        {
          id: 'isa-and-property',
          title: 'UK ISAs and UK property: the moves to make before crossing the line',
          body: (
            <>
              <p>
                Two structural issues catch Brits who don&apos;t plan the residency crossover
                carefully:
              </p>
              <p>
                <strong>UK ISAs:</strong> Spain does not recognise the ISA wrapper. Once
                Spanish tax resident, all income and gains inside the ISA become Spanish-taxable
                as if the wrapper did not exist. You can keep the account open as a UK product,
                but it is no longer the tax-efficient vehicle it was. Most movers crystallise
                gains while still UK resident, then either close ISAs or move the cash into
                Spain-friendly structures (such as a Spanish-compliant unit-linked bond).
              </p>
              <p>
                <strong>UK principal residence:</strong> Sell while UK resident and Principal
                Residence Relief usually fully shelters the capital gain. Sell after Spanish
                residency triggers and Spain has primary taxing rights at 19-28%, with no
                equivalent to UK PRR. For a £400,000 gain on a UK family home, the timing
                difference can be £75,000-£100,000 of tax.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Agencia Tributaria — Régimen impatriado (Beckham Law)', href: 'https://sede.agenciatributaria.gob.es/' },
        { label: 'BOE — Ley 35/2006 (Article 9 tax residency, Article 93 impatriados)', href: 'https://www.boe.es/' },
        { label: 'gov.uk — UK-Spain Double Taxation Convention', href: 'https://www.gov.uk/government/publications/spain-tax-treaties' },
        { label: 'European Court of Justice — Modelo 720 ruling C-788/19 (2022)', href: 'https://curia.europa.eu/' },
      ]}
      faqs={[
        { q: 'Can I avoid Spanish tax residency by spending less than 183 days in Spain?', a: 'Only if your centre of vital interests is provably elsewhere. The 183-day test is one of two independent triggers. If your spouse, children, home, and major assets are in Spain, you can be Spanish tax resident on under 183 days physical presence.' },
        { q: 'What happens if I miss the Beckham Law 6-month deadline?', a: 'You lose Beckham Law for your entire current Spanish residency. The only path back into Beckham Law is to break Spanish tax residency for at least 5 years, then return under a new election. For most buyers this is not practical and Beckham Law is gone for good.' },
        { q: 'Does Modelo 720 still have crushing penalties?', a: 'No, not since the ECJ ruling in 2022. Penalties are now proportionate to standard Spanish tax penalty rules (typically 50-150% of unpaid tax, not 150% of asset value). The filing obligation itself remains, with a 31 March deadline annually.' },
        { q: 'Can my spouse stay UK resident while I become Spanish resident?', a: 'Yes, but it requires careful structuring. Each spouse is assessed independently on their own residency. Spouses with substantial joint property in Spain may both fail the centre-of-vital-interests test even if only one of them is physically resident. Specialist advice essential.' },
      ]}
      spokes={[
        { href: '/spain/tax-residency/183-day-rule', label: '183-day rule explained', excerpt: 'How Spain actually counts days, what "sporadic absences" means.' },
        { href: '/spain/tax-residency/beckham-law', label: 'Beckham Law mechanics', excerpt: 'Six-year window, 24% flat rate, the exact election process.' },
        { href: '/spain/tax-residency/modelo-720', label: 'Modelo 720 obligations', excerpt: 'Foreign asset declarations, post-ECJ-ruling penalty regime.' },
        { href: '/spain/tax-residency/uk-pensions', label: 'UK pensions taxed in Spain', excerpt: 'Article 17, government vs private pensions, drawdown timing.' },
        { href: '/spain/tax-residency/cgt-on-uk-property', label: 'CGT on UK property after Spain move', excerpt: 'Pre-move sale vs post-move sale, principal residence relief edge cases.' },
        { href: '/spain/tax-residency/isa-treatment', label: 'How Spain treats your UK ISA', excerpt: 'ISAs are not recognised. What to do before crossing residency line.' },
      ]}
    />
  );
}
