import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SubPillarTemplate, type SubPillarSection, type SpokeLink } from '@/components/marketing/SubPillarTemplate';

interface Spoke {
  eyebrow: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  bullets: string[];
  sections: SubPillarSection[];
  sources: { label: string; href: string }[];
  faqs: { q: string; a: string }[];
}

const allSpokeLinks: Record<string, SpokeLink> = {
  'non-lucrative': {
    href: '/spain/visa-guide/non-lucrative',
    label: 'Non-Lucrative Visa',
    excerpt: 'Passive-income route. Established, well-understood, no work allowed.',
  },
  'digital-nomad': {
    href: '/spain/visa-guide/digital-nomad',
    label: 'Digital Nomad Visa',
    excerpt: 'Remote workers earning €2,849/mo+. Beckham Law eligible.',
  },
  'work-visa': {
    href: '/spain/visa-guide/work-visa',
    label: 'Work Visa',
    excerpt: 'Employer-sponsored. Slowest path but cleanest with an offer.',
  },
  'golden-alternatives': {
    href: '/spain/visa-guide/golden-alternatives',
    label: 'Golden Visa alternatives',
    excerpt: 'Property route closed April 2025. What remains in 2026.',
  },
  'family-reunification': {
    href: '/spain/visa-guide/family-reunification',
    label: 'Family Reunification',
    excerpt: 'Derived right for spouses, children and dependants.',
  },
  'student-visa': {
    href: '/spain/visa-guide/student-visa',
    label: 'Student Visa',
    excerpt: 'Niche but useful conversion route for younger applicants.',
  },
};

const spokes: Record<string, Spoke> = {
  'non-lucrative': {
    eyebrow: 'Spain · Non-Lucrative Visa',
    h1: 'Spain Non-Lucrative Visa (NLV) for 2026: full mechanics',
    intro:
      'The passive-income route. Best for retirees, people living off investment income, and anyone who genuinely does not need to work while in Spain. Established since the early 2000s, well-understood by every Spanish consulate in the UK.',
    metaTitle: 'Spain Non-Lucrative Visa 2026: Income, Process, Pitfalls',
    metaDescription:
      'How the Spain NLV works in 2026: ~€30,000 IPREM threshold, no work rule, renewal cycle, residency path. Sourced 2026 guide for British applicants.',
    bullets: [
      'Primary applicant income: roughly €30,000 per year (400% of IPREM 2026)',
      'Dependants: add approximately €7,500 per person (100% of IPREM)',
      'No work in or for Spain whatsoever during NLV status',
      'Initial 1-year visa, then 2-year renewals, permanent residency at 5 years',
      'Apply from the UK at the Spanish Consulate in London, Manchester or Edinburgh',
    ],
    sections: [
      {
        id: 'who-it-is-for',
        title: 'Who the NLV is actually for in 2026',
        glance: { label: 'Best-fit applicant', value: 'Retiree or rentier', note: 'Living off pension, rental income, dividends' },
        body: (
          <>
            <p>
              The NLV was designed for people who can fund their Spanish life from passive income.
              That includes retirees drawing UK State Pension plus an occupational pension,
              landlords with significant rental income, and people living off a substantial
              investment portfolio. If you have a remote job or freelance clients, the{' '}
              <a href="/spain/visa-guide/digital-nomad">Digital Nomad Visa</a> is the correct route,
              not this one.
            </p>
            <p>
              The post-2023 shift is that the Spanish consulate is materially stricter about
              applicants who admit to remote work, even for UK employers. The DNV exists; using
              NLV as a workaround invites refusal and forfeits the application fee.
            </p>
          </>
        ),
      },
      {
        id: 'income-threshold',
        title: 'The 2026 income threshold, properly calculated',
        glance: { label: 'Primary applicant minimum', value: '~€30,000', note: 'Plus ~€7,500 per dependant' },
        body: (
          <>
            <p>
              The threshold is set as a multiple of IPREM (Indicador Público de Renta de Efectos
              Múltiples), Spain&apos;s public income reference. IPREM 2026 is approximately €600
              monthly / €7,200 annually for a 12-month calculation, or €8,400 for the standard
              14-payment Spanish year.
            </p>
            <p>The NLV requires:</p>
            <ul>
              <li>Primary applicant: 400% of IPREM annually, roughly €30,000</li>
              <li>Each dependant: 100% of IPREM, roughly €7,500</li>
            </ul>
            <p>
              A British couple needs around €37,500 demonstrable annual income. A family of four
              with two children needs around €45,000. The consulate accepts UK pension statements,
              tax-return income, dividend records and rental income; you must show this is recurring
              and likely to continue.
            </p>
          </>
        ),
      },
      {
        id: 'work-rule',
        title: 'The no-work rule and the UK-remote-work grey zone',
        body: (
          <>
            <p>
              The NLV expressly prohibits any economic activity in or from Spain. Strict reading:
              you cannot work for a Spanish employer, you cannot freelance for Spanish clients,
              and you cannot perform remote work for a UK employer while physically in Spain.
            </p>
            <p>
              Loose reading, historically tolerated: many holders did discreet remote work for UK
              employers. Since the DNV launched in 2023, the consulate&apos;s tolerance has dropped
              sharply. Some applicants have had renewals questioned after social media or
              LinkedIn evidence of work. Treat this as a real prohibition for 2026.
            </p>
          </>
        ),
      },
      {
        id: 'application-process',
        title: 'The application timeline and process',
        glance: { label: 'Typical decision', value: '4-8 weeks', note: 'Apply 90 days before intended travel' },
        body: (
          <>
            <p>You apply at the Spanish consulate covering your UK region:</p>
            <ul>
              <li>London (most of England, Wales)</li>
              <li>Manchester (North of England, Scotland, Northern Ireland)</li>
              <li>Edinburgh (Scotland for some categories)</li>
            </ul>
            <p>
              The application includes Modelo EX-01, financial evidence, private health insurance
              with full Spanish coverage (no co-pays, no deductibles), apostilled and sworn
              translated UK criminal record check (ACRO), medical certificate, and proof of
              accommodation in Spain. Most applicants use a Spanish gestor for the in-Spain
              follow-up.
            </p>
          </>
        ),
      },
      {
        id: 'after-arrival',
        title: 'TIE card and the in-Spain procedure',
        body: (
          <>
            <p>
              You enter Spain on the visa, then within 30 days book a cita previa at the
              Extranjería to apply for your TIE (Tarjeta de Identidad de Extranjero). Empadronamiento
              (registering at the town hall), TIE biometrics and SIP card (for any healthcare access)
              all happen in those first weeks.
            </p>
            <p>
              First renewal at 1 year, then 2-year renewals. Permanent residency at 5 years,
              naturalisation pathway at 10 (with the language and culture tests).
            </p>
          </>
        ),
      },
      {
        id: 'tax-consequence',
        title: 'The tax consequence almost nobody calculates first',
        body: (
          <>
            <p>
              An NLV holder who spends 183+ days in Spain becomes Spanish tax resident. Beckham
              Law does not apply (NLV holders are not employed in Spain). Worldwide income then
              becomes taxable in Spain at progressive rates up to ~50% in some regions, with the
              UK-Spain double tax treaty determining which country has primary taxing rights.
            </p>
            <p>
              See <a href="/spain/tax-residency">our Spain tax-residency hub</a> for how this plays
              out for British pensions, ISA, UK property gains and Modelo 720 reporting.
            </p>
          </>
        ),
      },
    ],
    sources: [
      { label: 'Spanish Ministry of Foreign Affairs - Non-Lucrative Visa', href: 'https://www.exteriores.gob.es/Consulados/londres/en/ServiciosConsulares/Paginas/Consular/Visado-de-residencia-no-lucrativa.aspx' },
      { label: 'BOE - IPREM 2026 reference', href: 'https://www.boe.es/' },
      { label: 'UK Government - Living in Spain guide', href: 'https://www.gov.uk/guidance/living-in-spain' },
    ],
    faqs: [
      { q: 'Can I work remotely for a UK employer on the Non-Lucrative Visa?', a: 'No. Despite years of grey-zone tolerance, since the Digital Nomad Visa launched in 2023, Spanish consulates treat remote work on the NLV as a violation. Use the DNV instead.' },
      { q: 'Does the NLV give me access to Spanish healthcare?', a: 'Not automatically. You must hold private health insurance with full coverage (no deductibles, no co-pays) for the visa. After 1 year of legal residency you may access public healthcare via the convenio especial paid system or through a regional scheme.' },
      { q: 'Can I bring my children to Spanish state schools on an NLV?', a: 'Yes. Children of NLV holders have full access to Spanish state schooling at no charge from age 3 to 16.' },
      { q: 'What is the renewal income requirement?', a: 'At renewal you must demonstrate the same multiple of IPREM, plus typically 2 years of evidence (bank statements covering the prior visa period) showing the income was actually received.' },
      { q: 'Can I sell my UK property and use the proceeds as savings to qualify?', a: 'Spain prefers recurring income evidence, but consulates accept savings if the amount covers the income threshold multiplied by the visa period and you can show liquidity. Practice varies between consulates.' },
    ],
  },

  'digital-nomad': {
    eyebrow: 'Spain · Digital Nomad Visa',
    h1: 'Spain Digital Nomad Visa (DNV) in 2026: the real mechanics',
    intro:
      'The post-2023 route for remote workers and qualifying self-employed. The most common visa for British movers under 60 in 2026 and the only route with a clean Beckham Law eligibility argument.',
    metaTitle: 'Spain Digital Nomad Visa 2026: €2,849/mo Threshold, Beckham',
    metaDescription:
      'Spain DNV 2026 guide: €2,849 monthly income, eligibility for employees and self-employed, six-year Beckham Law option. Sourced for British applicants.',
    bullets: [
      'Minimum income €2,849/month for solo applicants (200% of SMI 2026)',
      'Eligible: employees of non-Spanish entity, freelancers with <20% Spanish-source income',
      'Beckham Law eligibility: 24% flat tax up to €600,000 for six years',
      'Initial 3-year residence card, renewable for 2 years thereafter',
      'Apply from UK consulate OR from inside Spain on a tourist stamp',
    ],
    sections: [
      {
        id: 'income-and-threshold',
        title: 'The 2026 income threshold and how Spain verifies it',
        glance: { label: 'Solo applicant minimum', value: '€2,849/mo', note: '200% of SMI 2026' },
        body: (
          <>
            <p>
              The threshold is set as 200% of Spain&apos;s SMI (Salario Mínimo Interprofesional).
              SMI 2026 is approximately €1,425 monthly. So the DNV requires roughly €2,849/month or
              €34,200/year for a solo applicant. The figure updates each January with the SMI.
            </p>
            <p>Dependants add:</p>
            <ul>
              <li>First dependant (usually spouse): 75% of SMI, roughly €1,068/month</li>
              <li>Each additional dependant: 25% of SMI, roughly €357/month</li>
            </ul>
            <p>
              A typical British family of four targets around €52,000 demonstrable annual income.
              Acceptable proof: employment contract, payslips (3+ months), employer letter,
              freelance contracts and invoices, and recent bank statements.
            </p>
          </>
        ),
      },
      {
        id: 'two-flavours',
        title: 'Employee DNV vs self-employed DNV: real differences',
        body: (
          <>
            <p>
              The DNV exists in two flavours, with materially different paperwork:
            </p>
            <p>
              <strong>Employee track</strong> - you have one employment contract with a non-Spanish
              entity. You need the employer&apos;s certificate of activity (typically 3+ years
              old), a letter authorising remote work, and proof the company has been operating for
              at least 12 months.
            </p>
            <p>
              <strong>Self-employed track</strong> - you have multiple clients, with no single
              client providing more than 80% of income, and Spanish clients providing under 20% of
              total income. You need contracts with each client and proof of ongoing relationships.
            </p>
            <p>
              The employee track is faster and more predictable. The self-employed track grants
              more flexibility but the consulate scrutinises invoicing patterns and client mix.
            </p>
          </>
        ),
      },
      {
        id: 'beckham-eligibility',
        title: 'The Beckham Law argument and why it matters',
        glance: { label: 'Flat rate', value: '24%', note: 'On Spanish-source income up to €600,000, for 6 years' },
        body: (
          <>
            <p>
              The structural prize of the DNV is the link to Beckham Law (Régimen de Impatriados).
              When you arrive on a DNV as an employee, you have six months from social security
              registration to opt in.
            </p>
            <p>Under Beckham:</p>
            <ul>
              <li>24% flat on Spanish-source employment income up to €600,000</li>
              <li>47% above €600,000</li>
              <li>Foreign-source investment income generally not taxable in Spain during the regime</li>
              <li>No Modelo 720 obligation</li>
              <li>Wealth tax exposure significantly reduced</li>
            </ul>
            <p>
              You stay in the regime for the year of move plus five more, six total. Then
              progressive Spanish tax. See{' '}
              <a href="/spain/tax-residency/beckham-law">Beckham Law full mechanics</a>.
            </p>
          </>
        ),
      },
      {
        id: 'apply-from-where',
        title: 'Apply from the UK or apply from inside Spain',
        body: (
          <>
            <p>
              The DNV is one of the few routes you can apply for from inside Spain. Two paths:
            </p>
            <p>
              <strong>From the UK</strong> - apply at the Spanish consulate, decision typically
              4-6 weeks, then enter Spain on the visa and apply for the TIE residence card within
              30 days.
            </p>
            <p>
              <strong>From inside Spain</strong> - enter as a tourist (90-day Schengen stay), apply
              directly to the UGE (Unidad de Grandes Empresas) in Madrid. Approval typically 20
              working days. Card issued directly. Faster but more administratively complex.
            </p>
            <p>
              The from-Spain route is usually cleaner if you have time. Beckham Law election
              clock starts on activity start date, so plan that with care.
            </p>
          </>
        ),
      },
      {
        id: 'pitfalls',
        title: 'The five mistakes we see repeatedly',
        body: (
          <ul>
            <li>
              <strong>Missing the Beckham window.</strong> Six months from social security
              registration is not extended for any reason. Spanish gestors are not always proactive.
              You must drive this.
            </li>
            <li>
              <strong>Underestimating dependant income proof.</strong> If your spouse is also
              working remotely, the cleanest structure has them on a separate DNV with their own
              income evidence, not as a dependant.
            </li>
            <li>
              <strong>Spanish clients over 20%.</strong> One large Spanish invoice in the prior
              year can torpedo a self-employed application. Plan invoice mix carefully.
            </li>
            <li>
              <strong>Company too young.</strong> Your employer must have been operating for at
              least 12 months. Start-up founders need additional documentation.
            </li>
            <li>
              <strong>Wrong tax base year.</strong> Beckham&apos;s 6 years is calendar years.
              Arriving in November means year 1 is just 2 months of relief; arriving in February
              gives you a near-full 6 years.
            </li>
          </ul>
        ),
      },
    ],
    sources: [
      { label: 'Spanish Ministry of Inclusion - DNV', href: 'https://www.inclusion.gob.es/' },
      { label: 'BOE - Law 28/2022 Startups Law', href: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-22685' },
      { label: 'AEAT - Régimen Impatriados', href: 'https://sede.agenciatributaria.gob.es/' },
    ],
    faqs: [
      { q: 'Can my UK employer hire me directly without a Spanish entity?', a: 'Yes. The DNV is specifically designed for this. Your UK employer remains your employer, you remain on their UK payroll, and the DNV gives you legal Spanish residency. They may need to register for Spanish social security via an alternative arrangement, but most foreign employers use a UK Employer of Record or A1 certificate route.' },
      { q: 'Does the DNV give me freedom of movement in Schengen?', a: 'Yes. As a Spanish residence permit holder you can travel visa-free in Schengen for 90 days in any 180. Working remotely from another Schengen country is technically not what the visa is for.' },
      { q: 'Can I switch from DNV to other Spanish residency later?', a: 'Yes. After 5 years of legal Spanish residency you become eligible for permanent residency. After 10 years, naturalisation.' },
      { q: 'Is freelancing for UK clients only definitely allowed?', a: 'Yes, and it is the cleanest case. Under 20% of total invoicing from Spanish clients keeps you compliant.' },
      { q: 'What happens if I lose my job during DNV residency?', a: 'You have grace period to find replacement income meeting the threshold. Repeated job loss without replacement can affect renewal. Consult a Spanish immigration lawyer early.' },
    ],
  },

  'work-visa': {
    eyebrow: 'Spain · Work Visa',
    h1: 'Spain work visa for British nationals (employer-sponsored route)',
    intro:
      'The clean legal route if you have a Spanish job offer. Slower than the DNV, but if you are being recruited by a Spanish employer, this is the path. Best fit for tech, engineering, healthcare specialists and senior corporate moves.',
    metaTitle: 'Spain Work Visa 2026: Employer Sponsorship for UK Nationals',
    metaDescription:
      'How the Spain employer-sponsored work visa works for British applicants in 2026. Process, timing, sectors, alternatives.',
    bullets: [
      'Employer-sponsored: requires Spanish job offer first',
      'Process runs through Public Employment Service (SEPE) for non-EU candidates',
      'Timeline typically 4-8 months from offer to arrival',
      'Initial residence is tied to the specific employer',
      'Strong fit: tech, engineering, healthcare specialists, senior corporate moves',
    ],
    sections: [
      {
        id: 'who-uses-this',
        title: 'When the work visa is actually the right choice',
        body: (
          <>
            <p>
              The Spanish employer-sponsored work visa is the right path if any of these is true:
            </p>
            <ul>
              <li>You have a Spanish employer offer (Spanish entity, Spanish payroll)</li>
              <li>The employer has a track record sponsoring non-EU staff</li>
              <li>Your role is in a shortage occupation (the Catálogo de Ocupaciones)</li>
              <li>Senior corporate move where the employer is doing the paperwork</li>
            </ul>
            <p>
              If you are remote-working for a UK employer, the{' '}
              <a href="/spain/visa-guide/digital-nomad">DNV</a> is correct, not this. If you have
              passive income and won&apos;t be working, the{' '}
              <a href="/spain/visa-guide/non-lucrative">NLV</a> is correct.
            </p>
          </>
        ),
      },
      {
        id: 'process',
        title: 'The two-stage process: employer first, then you',
        glance: { label: 'Typical total timeline', value: '4-8 months', note: 'From offer letter to arrival in Spain' },
        body: (
          <>
            <p>
              <strong>Stage 1 - Employer applies.</strong> The Spanish employer files with the
              Subdelegación del Gobierno demonstrating that the role cannot reasonably be filled by
              an EU candidate. They submit the contract offer, justification, and proof of
              compliance with collective bargaining wage minimums. This takes 8-12 weeks typically.
            </p>
            <p>
              <strong>Stage 2 - You apply.</strong> Once authorisation is granted, you apply for
              the visa at the Spanish consulate in the UK. With authorisation in hand, the visa
              decision takes 4-6 weeks. You then have 90 days to enter Spain, register and apply
              for your TIE.
            </p>
          </>
        ),
      },
      {
        id: 'sectors',
        title: 'Sectors where Spain genuinely wants UK talent',
        body: (
          <>
            <p>
              The Catálogo de Ocupaciones de Difícil Cobertura lists occupations with structural
              shortages. For 2026 this includes:
            </p>
            <ul>
              <li>Specialist engineering (aerospace, automotive, energy)</li>
              <li>Medical specialties (anaesthesia, radiology, geriatrics)</li>
              <li>Specialist nursing</li>
              <li>Senior software roles in regulated industries</li>
              <li>Merchant marine officers</li>
            </ul>
            <p>
              Hiring into a listed occupation skips the labour-market test, accelerating the
              employer&apos;s side of the application by weeks.
            </p>
          </>
        ),
      },
      {
        id: 'tied-employer',
        title: 'The initial residence is tied to the employer',
        body: (
          <>
            <p>
              The first residence card is tied to the specific employer and role. Changing
              employer in year 1 requires a new authorisation. From year 2 onward you have more
              flexibility, and by year 5 you can switch freely.
            </p>
            <p>
              This is the same constraint as the UK Skilled Worker route in reverse. If you are
              joining a startup, factor employer stability into the decision.
            </p>
          </>
        ),
      },
      {
        id: 'tax',
        title: 'Tax position and Beckham Law eligibility',
        body: (
          <>
            <p>
              You become Spanish tax resident immediately on starting work in Spain. As an employee
              of a Spanish entity, you have a strong Beckham Law claim: 6 months from social
              security registration to elect, 24% flat rate up to €600,000 for 6 years.
            </p>
            <p>
              The Beckham election is one of the most valuable decisions for a senior corporate
              move. Tax savings can be six figures over the regime period.{' '}
              <a href="/spain/tax-residency/beckham-law">Beckham Law mechanics in detail</a>.
            </p>
          </>
        ),
      },
    ],
    sources: [
      { label: 'Ministerio de Inclusión - Work permits', href: 'https://www.inclusion.gob.es/' },
      { label: 'Catálogo de Ocupaciones de Difícil Cobertura', href: 'https://www.sepe.es/' },
      { label: 'UK Government - Living in Spain', href: 'https://www.gov.uk/guidance/living-in-spain' },
    ],
    faqs: [
      { q: 'Can I start work in Spain before the visa is granted?', a: 'No. You must wait until the authorisation is granted AND you have entered Spain on the visa AND you have your TIE biometrics scheduled before legally starting.' },
      { q: 'Does my UK employer count as a Spanish employer?', a: 'No. The Spanish work visa requires a Spanish-registered employer with a Spanish CIF. UK employers without a Spanish presence should look at the DNV route.' },
      { q: 'Can I bring my family on a work visa?', a: 'Yes. After arrival you can sponsor family reunification, or your family can come with you on dependent visas applied for in parallel.' },
      { q: 'Is the Highly-Qualified Professional route different?', a: 'Yes. The HQP track is faster for senior salaries (typically €60,000+), runs through the UGE in Madrid, and has shorter decision times (20 working days for many cases).' },
    ],
  },

  'golden-alternatives': {
    eyebrow: 'Spain · Golden Visa alternatives',
    h1: 'Spain Golden Visa in 2026: what is still open after the property closure',
    intro:
      'The €500k property route closed on 3 April 2025. The Golden Visa scheme itself is being wound down. For 2026, the remaining investment paths exist but few British movers take them — most are better served by the DNV. Here is what is actually still available.',
    metaTitle: 'Spain Golden Visa 2026: What Remains After Property Closure',
    metaDescription:
      'Spain Golden Visa update 2026: property route closed April 2025. €1m bonds, €2m shares, business investment routes still available — with caveats.',
    bullets: [
      'Property route closed permanently 3 April 2025',
      '€1 million in Spanish government bonds remains',
      '€1 million in Spanish bank deposits remains',
      '€2 million in publicly-traded Spanish shares remains',
      '€1 million business investment with job creation remains',
      'For most British movers, the DNV is structurally better in 2026',
    ],
    sections: [
      {
        id: 'whats-closed',
        title: 'What closed and what is still open',
        body: (
          <>
            <p>
              The Spanish government published the property-route closure in the BOE in early
              2024, taking effect 3 April 2025. From that date no new Golden Visa applications can
              be made on the basis of property purchase. Existing holders are unaffected for the
              duration of their current authorisation.
            </p>
            <p>The investment routes that remain in 2026:</p>
            <ul>
              <li><strong>€1m in Spanish government bonds</strong> - the cleanest passive route</li>
              <li><strong>€1m in a Spanish bank deposit</strong> - simple but yield-light</li>
              <li><strong>€2m in publicly-traded Spanish shares</strong> - market risk but liquid</li>
              <li><strong>€1m investment in Spanish equities funds</strong> - if Spanish-domiciled</li>
              <li><strong>€1m business investment with job creation</strong> or significant economic impact</li>
            </ul>
          </>
        ),
      },
      {
        id: 'compared-to-dnv',
        title: 'Why most British movers now skip the Golden Visa',
        glance: { label: 'DNV minimum income', value: '€2,849/mo', note: 'vs €1m+ capital lock-in for Golden Visa' },
        body: (
          <>
            <p>
              Pre-2023, the Golden Visa was the obvious choice for a higher-net-worth Brit because
              it was the only route that didn&apos;t require minimum stay in Spain (and so
              didn&apos;t trigger Spanish tax residency). The DNV changed that calculus.
            </p>
            <p>
              The DNV gives you the same legal residency for a fraction of the capital commitment,
              IF you have qualifying income. The Golden Visa retains an advantage only for
              applicants who:
            </p>
            <ul>
              <li>Don&apos;t have qualifying remote work income</li>
              <li>Want minimum-stay residency (no 183-day Spain residency required)</li>
              <li>Have €1m+ that can be allocated to Spanish bonds or shares without strain</li>
            </ul>
            <p>
              For this profile, the Golden Visa still works. For most others, the DNV is cleaner.
            </p>
          </>
        ),
      },
      {
        id: 'minimum-stay',
        title: 'The minimum-stay rule and what it actually means',
        body: (
          <>
            <p>
              The Golden Visa famously has no minimum-stay requirement to maintain status. You
              must visit Spain at least once during the visa period (typically each 2-year
              renewal). That is the only physical-presence test.
            </p>
            <p>
              This is what makes the Golden Visa attractive for HNW applicants who want Spanish
              residency as an option rather than as their permanent home. You can hold it, use it
              for travel and for the ability to relocate quickly, without becoming Spanish tax
              resident.
            </p>
            <p>
              If you do spend 183+ days in Spain in a year, you become tax resident regardless of
              what your visa says. The minimum-stay rule is about visa status, not tax.
            </p>
          </>
        ),
      },
      {
        id: 'scheme-future',
        title: 'The future of the Golden Visa scheme itself',
        body: (
          <>
            <p>
              The Spanish government has signalled the Golden Visa scheme will be wound down
              entirely in the coming years, in line with broader EU pressure to phase out
              residence-by-investment programmes (the European Commission has been vocal on this
              since 2022).
            </p>
            <p>
              For 2026, the remaining routes are open. The 5-year and 10-year horizon is unclear.
              If you&apos;re considering the Golden Visa, the question is whether you have a
              specific application reason that the DNV cannot satisfy.
            </p>
          </>
        ),
      },
    ],
    sources: [
      { label: 'BOE - Real Decreto-ley closure of property route', href: 'https://www.boe.es/' },
      { label: 'European Commission - Investor citizenship/residence schemes', href: 'https://commission.europa.eu/' },
      { label: 'UK Government - Living in Spain', href: 'https://www.gov.uk/guidance/living-in-spain' },
    ],
    faqs: [
      { q: 'Is the Spain Golden Visa being closed completely?', a: 'The property route is closed since April 2025. The investment routes (bonds, shares, business) remain open in 2026 but are likely to be reformed or phased out in coming years.' },
      { q: 'Can I still buy Spanish property without a Golden Visa?', a: 'Yes. Anyone can buy Spanish property. What closed is using a €500k+ property purchase as the basis for a Golden Visa residency application.' },
      { q: 'Does the Golden Visa make me Spanish tax resident?', a: 'Not automatically. If you spend under 183 days a year in Spain and have your centre of vital interests elsewhere, you remain non-resident for Spanish tax purposes.' },
      { q: 'Can my family come on the Golden Visa?', a: 'Yes. Spouse and children under 18 (and dependent adult children, parents who depend on you financially) can be included.' },
    ],
  },

  'family-reunification': {
    eyebrow: 'Spain · Family Reunification',
    h1: 'Spain family reunification visa for British applicants',
    intro:
      'The derived right for spouses, children and dependants of an existing Spanish or EU resident. Different mechanics if your sponsor is Spanish-by-birth versus naturalised versus long-term resident.',
    metaTitle: 'Spain Family Reunification Visa 2026: UK Spouses, Children',
    metaDescription:
      'Spain family reunification rules for British spouses, children and dependants in 2026. Eligibility, process, timing.',
    bullets: [
      'Sponsor must have legal residency for at least 1 year (waived for Spanish citizens)',
      'Spouse, children under 18, dependent adult children and dependent parents eligible',
      'Sponsor must demonstrate adequate housing and income',
      'Process: sponsor files in Spain, applicant applies at UK consulate',
      'Faster path for spouses of Spanish citizens than for spouses of long-term residents',
    ],
    sections: [
      {
        id: 'who-qualifies',
        title: 'Who actually qualifies as family',
        body: (
          <>
            <p>The Spanish reagrupación familiar definition covers:</p>
            <ul>
              <li>Spouse or registered partner</li>
              <li>Children under 18 (biological, adopted, or under guardianship)</li>
              <li>Dependent adult children with documented incapacity</li>
              <li>Parents over 65 who depend financially on the sponsor</li>
            </ul>
            <p>
              Unmarried but cohabiting partners (parejas de hecho) are recognised but require
              registration in a Spanish autonomous community pareja de hecho registry, which has
              regional variation.
            </p>
          </>
        ),
      },
      {
        id: 'sponsor-requirements',
        title: 'What the sponsor must prove',
        glance: { label: 'Minimum sponsor residency', value: '12 months', note: 'Waived if sponsor is a Spanish citizen' },
        body: (
          <>
            <p>The Spanish sponsor must demonstrate:</p>
            <ul>
              <li>Legal residency in Spain for at least 12 months (waived for Spanish citizens)</li>
              <li>Adequate housing for the incoming family member(s)</li>
              <li>Income covering the family unit at IPREM-multiple thresholds</li>
              <li>Renewal of own residency authorised or pending</li>
            </ul>
            <p>
              Income thresholds are calculated as IPREM multiples that scale with family size.
              Typical numbers in 2026: sponsor + 1 dependant ~€1,200/month, sponsor + 2 dependants
              ~€1,500/month.
            </p>
          </>
        ),
      },
      {
        id: 'process',
        title: 'The two-stage process',
        body: (
          <>
            <p>
              <strong>Stage 1 - In Spain.</strong> The sponsor files for reagrupación at the
              Oficina de Extranjería with full documentation: marriage/birth certificates
              (apostilled and sworn translated), proof of housing, proof of income, sponsor&apos;s
              residency card.
            </p>
            <p>
              <strong>Stage 2 - UK consulate.</strong> Once Stage 1 is approved (typically 3-4
              months), the applicant applies at the Spanish consulate covering their UK region.
              Visa decision typically 4-6 weeks. Applicant then enters Spain and applies for TIE
              within 30 days.
            </p>
          </>
        ),
      },
      {
        id: 'special-cases',
        title: 'Three special cases worth knowing',
        body: (
          <>
            <p>
              <strong>Spouses of Spanish citizens.</strong> Faster track. The 12-month sponsor
              residency rule is waived. You can also apply directly under the EU citizen family
              regime if the Spanish citizen has exercised EU free movement rights.
            </p>
            <p>
              <strong>Children born in the UK to one Spanish parent.</strong> They have a route to
              Spanish citizenship by descent (typically registered at the consulate before age 21),
              which makes reunification unnecessary.
            </p>
            <p>
              <strong>British spouses of British movers.</strong> If both partners are British,
              the family member usually goes on their own DNV/NLV as dependant, not via the
              reunification visa. Reunification is for when the sponsor is already Spanish-resident
              and the family member needs to follow later.
            </p>
          </>
        ),
      },
    ],
    sources: [
      { label: 'Ministerio de Inclusión - Reagrupación Familiar', href: 'https://www.inclusion.gob.es/' },
      { label: 'Spanish Consulate London - Family visas', href: 'https://www.exteriores.gob.es/' },
      { label: 'UK Government - Living in Spain', href: 'https://www.gov.uk/guidance/living-in-spain' },
    ],
    faqs: [
      { q: 'Can my British spouse get a visa as my dependant on a DNV?', a: 'Yes. The cleanest route for British-British couples is for one partner to qualify for the DNV and the other to be included as dependant. Family reunification is the alternative track if your spouse has to come later.' },
      { q: 'How long does the full reunification process take?', a: 'Typically 5-8 months from sponsor filing in Spain to applicant arriving on the visa. Stage 1 is the bottleneck.' },
      { q: 'Can same-sex spouses use family reunification?', a: 'Yes. Spain has recognised same-sex marriage since 2005. Same-sex married couples have identical rights under reunification.' },
      { q: 'What if my marriage is not yet 12 months old?', a: 'Spain does not have a minimum-marriage-duration rule for reunification, but consulates do scrutinise recent marriages. Bring evidence of relationship history.' },
    ],
  },

  'student-visa': {
    eyebrow: 'Spain · Student Visa',
    h1: 'Spain student visa as a stepping stone for British applicants',
    intro:
      'The most underrated route for under-30s. A year of Spanish language school or accredited Spanish university programme converts cleanly into a work or residence permit. Niche but powerful for the right profile.',
    metaTitle: 'Spain Student Visa 2026: The Stepping-Stone Route for UK',
    metaDescription:
      'Spain student visa 2026 for British applicants: eligibility, part-time work rules, conversion to residency. The stepping-stone path.',
    bullets: [
      'Minimum 20 hours/week enrolled study at an accredited Spanish institution',
      'Part-time work allowed up to 30 hours/week from 2024 reform',
      'Time on student visa counts toward residency after conversion',
      'Convert to work or residence permit after 12 months of legal stay',
      'Best fit: under-30s, language students, postgraduate research, family-bringing-children path',
    ],
    sections: [
      {
        id: 'who-it-suits',
        title: 'Who the student visa actually suits',
        body: (
          <>
            <p>
              The student visa is a stepping stone, not a destination. It suits:
            </p>
            <ul>
              <li>Under-30 Brits doing 6-12 months of intensive Spanish before starting work</li>
              <li>Postgraduate students at Spanish universities (master&apos;s or PhD)</li>
              <li>British professionals doing a recognised Spanish vocational qualification</li>
              <li>Families using a child&apos;s educational route to anchor the move</li>
            </ul>
            <p>
              It does not suit anyone who wants to focus purely on remote work — that&apos;s the{' '}
              <a href="/spain/visa-guide/digital-nomad">DNV</a>. The student visa is constrained
              by the underlying study commitment.
            </p>
          </>
        ),
      },
      {
        id: 'requirements',
        title: 'The eligibility requirements',
        glance: { label: 'Minimum course length', value: '6 months', note: 'For full residence track; shorter for short-stay study' },
        body: (
          <>
            <p>To qualify you need:</p>
            <ul>
              <li>Acceptance letter from an accredited Spanish institution (university, language school registered with Cervantes or equivalent, vocational training centre)</li>
              <li>Course of at least 20 hours/week, ideally 6+ months duration for the residence-track variant</li>
              <li>Financial proof: typically €600+/month (100% of IPREM) for living costs</li>
              <li>Private health insurance with full Spanish coverage</li>
              <li>UK criminal record check (ACRO), apostilled and sworn-translated</li>
              <li>Medical certificate</li>
            </ul>
          </>
        ),
      },
      {
        id: 'work-rules',
        title: 'What the 2024 reform changed for work rights',
        body: (
          <>
            <p>
              Pre-2024, student visa holders could work up to 20 hours/week with employer
              authorisation. The 2024 reform raised this to 30 hours/week and simplified the
              employer paperwork. The employer no longer needs separate authorisation in most
              cases — your student status implies the right to work part-time.
            </p>
            <p>
              This makes the route materially more viable for British under-30s who want to fund
              their studies through part-time work in Spain.
            </p>
          </>
        ),
      },
      {
        id: 'conversion',
        title: 'Converting from student to resident or worker',
        body: (
          <>
            <p>
              After 12 months of legal residency on a student visa, you can convert to:
            </p>
            <ul>
              <li><strong>Work permit (Régimen General)</strong> - if you have a Spanish job offer</li>
              <li><strong>Highly-Qualified Professional</strong> - for senior offers above the salary threshold</li>
              <li><strong>Self-employment authorisation</strong> - if launching a business in Spain</li>
              <li><strong>NLV or DNV</strong> - if you now meet those income tests</li>
            </ul>
            <p>
              Time on the student visa does NOT count toward the 5-year permanent residency clock
              at face value, but it does count partially (typically 50%) and counts in full toward
              the 10-year naturalisation clock.
            </p>
          </>
        ),
      },
    ],
    sources: [
      { label: 'Ministerio de Universidades - International students', href: 'https://www.universidades.gob.es/' },
      { label: 'Spanish Consulate London - Student visa', href: 'https://www.exteriores.gob.es/' },
      { label: 'UK Government - Studying in Spain', href: 'https://www.gov.uk/guidance/living-in-spain' },
    ],
    faqs: [
      { q: 'Can I bring my family on a student visa?', a: 'Yes, but only if your course is at least 6 months. Spouse and children under 18 can join you. Spouse can also work part-time under the 2024 reform.' },
      { q: 'Does a Spanish language school count as an accredited institution?', a: 'It must be registered with the Instituto Cervantes or its regional equivalent. Most well-known schools in Madrid, Barcelona, Valencia and Seville qualify. Check the school&apos;s registration before applying.' },
      { q: 'Can the student visa give me access to Spanish state healthcare?', a: 'Not directly. You need private health insurance for the visa. Some autonomous communities offer student access to public healthcare through the educational institution.' },
      { q: 'How fast can I convert from student to DNV?', a: 'After 12 months of legal student residency, you can apply for DNV conversion in Spain. With the right income evidence, decisions in 2-4 weeks.' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(spokes).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = spokes[params.slug];
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/spain/visa-guide/${params.slug}` },
    openGraph: { url: `/spain/visa-guide/${params.slug}` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const s = spokes[params.slug];
  if (!s) notFound();

  const relatedSpokes: SpokeLink[] = Object.entries(allSpokeLinks)
    .filter(([slug]) => slug !== params.slug)
    .map(([, v]) => v);

  return (
    <SubPillarTemplate
      country="spain"
      eyebrow={s.eyebrow}
      h1={s.h1}
      intro={s.intro}
      bullets={s.bullets}
      sections={s.sections}
      sources={s.sources}
      faqs={s.faqs}
      spokes={relatedSpokes}
      subPillarSlug={`visa-guide/${params.slug}`}
    />
  );
}
