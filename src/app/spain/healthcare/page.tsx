import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spanish Healthcare for UK Movers 2026 | SNS, S1, Convenio Especial',
  description:
    'How British movers access Spanish healthcare in 2026. SNS public system, the S1 form for UK pensioners, Convenio Especial at €60/€157 per month, NLV/DNV private insurance requirements, Sanitas vs Adeslas vs DKV. Sourced from gov.uk and the Spanish Ministry of Health.',
  alternates: { canonical: '/spain/healthcare' },
  openGraph: { url: '/spain/healthcare' },
  keywords: [
    'Spain healthcare for British',
    'SNS Spain',
    'Convenio Especial',
    'S1 form Spain',
    'Tarjeta Sanitaria',
    'private health insurance Spain expat',
    'Sanitas vs Adeslas vs DKV',
    'NLV health insurance requirement',
    'DNV health insurance requirement',
  ],
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      subPillarSlug="healthcare"
      eyebrow="Healthcare · 2026"
      h1="Spanish healthcare for UK movers"
      intro="Spain runs a tax-funded public health system (Sistema Nacional de Salud, SNS) that ranks consistently in the top 10 globally for outcomes. As a British mover in 2026, you access it through one of three routes — paying social security, registering a UK-issued S1 form, or buying into the Convenio Especial. NLV and DNV applicants need certified private insurance to even land. Here's the playbook for each path, the figures that apply, and the primary-source links to verify them."
      bullets={[
        'SNS access via employment/autónomo social security contributions = free at point of use',
        'UK state pensioners: register an S1 form — UK pays Spain for your healthcare',
        'Convenio Especial buy-in scheme: €60/month under 65, €157/month 65+',
        'NLV applicants: full private health insurance with zero copay and no annual cap (consulate requirement)',
        'DNV applicants: same — Sanitas, Adeslas, DKV are the three most consulate-accepted carriers',
        'Tarjeta Sanitaria Individual (TSI) is the regional health card you use at every visit',
        'Prescriptions: 40-60% patient copay depending on income and pensioner status',
      ]}
      sections={[
        {
          id: 'how-the-sns-works',
          title: 'How the SNS works (and where the cracks are)',
          glance: { value: 'Free at point of use', label: 'For residents in the system', note: 'Tax-funded, run regionally — quality varies' },
          body: (
            <>
              <p>
                The Sistema Nacional de Salud is decentralised. The central Ministerio de Sanidad
                sets the broad rules; each of Spain&apos;s 17 autonomous communities runs its own
                public health service (SAS in Andalucía, SERMAS in Madrid, CatSalut in Cataluña,
                Servei de Salut in Valencia, etc.). The funding is tax-based, and once you&apos;re
                inside the system there is no per-visit charge for GP visits, specialist referrals,
                hospital care or planned surgery.
              </p>
              <p>
                The crack: capacity is tight. Andalucía and Madrid are functioning well; Cataluña
                has been openly struggling under load since 2023; the islands (Mallorca, Canarias)
                have specialist-shortage backlogs. Family doctor (médico de familia) allocations
                in growth areas — Alicante province, Málaga capital, parts of Valencia city — can
                take 4-8 weeks from registration. Once allocated, weekday appointment availability
                is usually 24-72 hours. Specialist referrals can be 6-16 weeks depending on the
                speciality and region.
              </p>
              <p>
                The day-to-day card is the Tarjeta Sanitaria Individual (TSI), issued by your
                regional health service after you register at a Centro de Salud with your padrón
                certificate and proof of system entitlement. Carry it to every appointment;
                everything is keyed to its number.
              </p>
            </>
          ),
        },
        {
          id: 'three-routes-in',
          title: 'The three routes into the public system',
          body: (
            <>
              <p>
                As a British mover, exactly three doors open the public healthcare system for you.
                Knowing which applies is non-negotiable — it changes your visa documents, your
                first-year tax planning and your monthly budget.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">Route 1: Employment or autónomo social security</h3>
              <p>
                If you take a Spanish job or register as autónomo (self-employed), you and your
                dependants are automatically entitled to the SNS as part of the social security
                contributions you pay. Cost: bundled into your normal payroll deductions or the
                autónomo flat rate (currently roughly €87/month in the first year, scaling up
                thereafter). This is the cleanest route and the one most DNV holders end up on
                via the autónomo path.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">Route 2: S1 form (UK state pensioners)</h3>
              <p>
                If you receive a UK state pension or certain UK exportable benefits, you can
                request an S1 form from the NHS Business Services Authority. Once Spain&apos;s
                INSS registers it on your behalf, you and your registered dependants access the
                SNS as if you were a Spanish contributor — and the UK reimburses Spain for your
                care. The S1 also exempts you from the visa private-insurance requirement at
                renewal time, and from prescription full-price rules under the Convenio.
              </p>
              <p>
                This is the post-Brexit settled position confirmed by the UK Government&apos;s
                guidance for nationals in Spain. Apply for the S1 from the NHS BSA Overseas
                Healthcare Services team before you move; registration with INSS in Spain takes
                4-8 weeks after arrival.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">Route 3: Convenio Especial (the buy-in)</h3>
              <p>
                If neither of the above applies — typical NLV retirees under state pension age,
                or non-contributing spouses — the Convenio Especial is the formal buy-in scheme
                that gives you SNS access for a flat monthly fee. The 2026 fees set by the
                Ministry of Health are <strong>€60 per month for under-65s</strong> and{' '}
                <strong>€157 per month for those aged 65 or over</strong>. You qualify after
                12 months of continuous registered residency (padrón) and once you have no other
                healthcare entitlement.
              </p>
              <p>
                Two material catches British movers regularly miss. First, the Convenio is{' '}
                <strong>per person</strong> — partners and dependants apply separately, each
                paying their own fee. Second, you pay the full retail price for prescription
                medication on the Convenio (no income-based copay reduction), so factor pharmacy
                spend into your monthly budget separately. The Convenio is administered through
                regional Tesorería General de la Seguridad Social offices; the application
                process and current fee schedule are published by the Ministerio de Sanidad.
              </p>
            </>
          ),
        },
        {
          id: 'visa-insurance-requirement',
          title: 'NLV & DNV: what the consulate actually requires',
          glance: { value: 'Zero copay · no cap', label: 'Both visas demand this', note: 'Most rejections are insurance-spec failures' },
          body: (
            <>
              <p>
                Spanish consulates reject more NLV and DNV applications on insurance specification
                than on any other ground other than income proof. The requirement is specific and
                non-negotiable: you must submit certified private health insurance that provides
                full coverage equivalent to the SNS, <strong>with no copays and no annual
                coverage cap</strong>, for the visa period (typically one year initially).
              </p>
              <p>
                The three carriers that produce the right policy paperwork — and that Spanish
                consulates accept without back-and-forth — are{' '}
                <strong>Sanitas</strong> (Bupa-owned, the strongest English-language support and
                digital tools), <strong>Adeslas</strong> (the largest network — over 44,000
                providers — but consumer-facing Spanish-only), and <strong>DKV</strong> (strong
                in Catalonia, Valencia and the Balearics, lowest entry-level pricing).
              </p>
              <p>
                2026 pricing for a healthy 40-year-old applicant: Adeslas roughly €50-90/month,
                DKV roughly €50-75/month, Sanitas roughly €65-110/month. Above 60-65 the price
                steepens fast — Adeslas does not accept new applicants over 65, DKV runs to 74,
                ASSSA accepts to 75+. For older NLV applicants this is a real planning issue;
                the playbook walks through the renewal trade-off.
              </p>
              <p>
                Once you obtain your TIE and register at the padrón, you typically keep private
                insurance for the first year of residency anyway, then migrate to the SNS via one
                of the three routes above. The private policy then becomes optional — many
                movers keep it for faster specialist access and English-language clinics, but
                it&apos;s no longer a residency requirement.
              </p>
            </>
          ),
        },
        {
          id: 'prescriptions-and-costs',
          title: 'Prescriptions, copays and out-of-pocket costs',
          body: (
            <>
              <p>
                The SNS itself is free at point of use, but prescription medication is not. Your
                copay is income-graded:
              </p>
              <ul>
                <li><strong>Active workers earning under €18,000:</strong> 40% copay</li>
                <li><strong>Active workers €18,000–€100,000:</strong> 50% copay</li>
                <li><strong>Active workers above €100,000:</strong> 60% copay</li>
                <li><strong>Pensioners under €18,000 income:</strong> 10% copay, capped at €8.23/month</li>
                <li><strong>Pensioners €18,000–€100,000:</strong> 10% copay, capped at €18.52/month</li>
                <li><strong>Pensioners above €100,000:</strong> 60% copay, capped at €61.75/month</li>
                <li><strong>Convenio Especial holders:</strong> 100% retail price (no copay benefit)</li>
              </ul>
              <p>
                Pharmacy is privately operated but publicly regulated. The pharmacist scans your
                TSI, charges your copay only, and reclaims the rest from the regional health
                service. The pharmacy network is dense — even small towns usually have at least
                one — and weekend on-call duty (farmacia de guardia) is standard.
              </p>
              <p>
                Dental and most optical care is private in Spain, not covered by the SNS even
                for full residents. A standard cleaning runs €40-€70, basic fillings €60-€100,
                routine eye test €35-€60. Many British movers add a basic dental/optical rider
                to their private insurance for €5-€15/month.
              </p>
            </>
          ),
        },
        {
          id: 'common-mistakes',
          title: 'The mistakes that cost most Brits in year one',
          body: (
            <>
              <ul>
                <li>
                  <strong>Buying NLV-non-compliant insurance.</strong> A policy that has copays
                  or an annual cap reads as &ldquo;health insurance&rdquo; in the UK but fails the
                  Spanish consulate spec. Always confirm with the carrier that the policy is{' '}
                  <em>sin copagos y sin límite</em> — and request the carrier&apos;s formal
                  consulate-format certificate.
                </li>
                <li>
                  <strong>Not requesting the S1 before leaving the UK.</strong> If you receive UK
                  state pension and don&apos;t request the S1, you end up paying the Convenio
                  Especial unnecessarily — £127/month at the over-65 rate is £1,884/year of
                  avoidable spend.
                </li>
                <li>
                  <strong>Assuming the Convenio covers spouses.</strong> It does not. Plan
                  separately for each adult applicant.
                </li>
                <li>
                  <strong>Forgetting the 12-month padrón rule for Convenio eligibility.</strong>{' '}
                  If you arrive on an NLV and intend to switch to the Convenio at month 13, your
                  padrón must be continuous. A gap (e.g. re-registering after a regional move)
                  resets the clock.
                </li>
                <li>
                  <strong>Picking a private insurer that doesn&apos;t take your age band.</strong>{' '}
                  Adeslas caps new applicants at 65. If you&apos;re 62 now, you may renew fine
                  for three years and then face refusal at 66 if you ever lapse cover.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Ministerio de Sanidad · Convenio Especial', href: 'https://www.sanidad.gob.es/en/servCiudadanos/internacional/convenioEspecial.htm' },
        { label: 'gov.uk · Healthcare for UK nationals in Spain', href: 'https://www.gov.uk/guidance/healthcare-in-spain' },
        { label: 'NHS BSA · Overseas Healthcare (S1 form)', href: 'https://www.nhsbsa.nhs.uk/exemption-certificates/overseas-healthcare' },
        { label: 'Sistema Nacional de Salud · Citizen access', href: 'https://www.sanidad.gob.es/' },
      ]}
      faqs={[
        {
          q: 'Can I use my UK GHIC/EHIC card to get treatment in Spain?',
          a: 'Only for short visits. The GHIC (or older EHIC) covers necessary state-provided medical care for temporary stays — useful if you fall ill while visiting Spain, not for residency. Once you become Spanish resident, the GHIC stops applying and you need one of the three SNS routes (employment, S1, or Convenio Especial).',
        },
        {
          q: 'How much does Convenio Especial cost per month in 2026?',
          a: 'The Ministry of Health publishes a flat monthly fee of €60 for under-65s and €157 for those 65 or over. The fee is per person — partners and dependants apply separately at the same rate. You must have been padrón-registered continuously for 12 months immediately before applying.',
        },
        {
          q: 'Do I need private health insurance for the NLV or DNV?',
          a: 'Yes, both visas require certified private health insurance with no copays and no annual coverage cap, covering the full visa period. Adeslas, Sanitas (Bupa) and DKV are the three carriers most consistently accepted by Spanish consulates. You typically transition to the SNS in year two via employment, autónomo, or — for pensioners — the S1.',
        },
        {
          q: 'Is the NHS still recognised in Spain post-Brexit?',
          a: 'There is no NHS recognition as such — the UK and Spain run separate health systems. What survives post-Brexit is the GHIC for visitors, the S1 form for state pensioners (UK pays Spain for your care), and emergency reciprocal arrangements. For residents the Spanish SNS is your system, accessed through one of the three routes.',
        },
        {
          q: 'What does private GP / specialist care actually cost out of pocket?',
          a: 'A private GP visit at Sanitas/Quirónsalud/Vithas runs €60-€120 depending on the city; a private specialist consultation €90-€180; an MRI scan €350-€600. Private health insurance brings these to roughly €0 (full-cover policies) or to fixed copays of €5-€20 per visit (copay policies — which are cheaper monthly but fail the visa requirement).',
        },
        {
          q: 'Are British prescriptions valid in Spain?',
          a: 'No. UK NHS prescriptions are not dispensable at Spanish pharmacies. If you take regular medication, register with a Spanish GP within the first 30 days and transition your prescriptions onto the SNS or your private insurance. Bringing 3-6 months of supply for the transition period is sensible.',
        },
      ]}
      reviewedOn="2026-05-25"
      relatedResources={[
        { kind: 'Reference', href: '/thresholds', label: '2026 thresholds for British movers', blurb: 'Income thresholds for NLV/DNV applications — pair these with your insurance evidence.' },
        { kind: 'Deep dive', href: '/spain/visa-guide', label: 'Spain visa guide: NLV vs DNV', blurb: 'Where the private-insurance requirement fits in each visa\'s document pack.' },
        { kind: 'Deep dive', href: '/spain/tax-residency', label: 'Spain tax residency for British movers', blurb: 'Becoming SNS-entitled via autónomo or employment — tax + healthcare interlocked.' },
        { kind: 'Compare', href: '/spain-vs-portugal', label: 'Healthcare comparison: Spain vs Portugal', blurb: 'How the two SNS systems and their entry routes stack up for British movers.' },
        { kind: 'Calculator', href: '/calculators/cost-of-living', label: 'UK vs Spain cost of living', blurb: 'See where insurance + pharmacy fits in your monthly outgoings comparison.' },
        { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Step-by-step year-one healthcare setup, including vetted insurance broker introductions.' },
      ]}
    />
  );
}
