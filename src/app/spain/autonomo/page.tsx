import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spain Autónomo 2026 | UK Mover\'s Guide to Self-Employment + Social Security',
  description:
    'Becoming autónomo in Spain as a British mover in 2026. The €88 flat rate first year (tarifa plana), the 15-bracket cuota system from year two, IRPF treatment, IVA quarterly returns, and how autónomo interacts with the Digital Nomad Visa and Beckham Law.',
  alternates: { canonical: '/spain/autonomo' },
  openGraph: { url: '/spain/autonomo' },
  keywords: [
    'Spain autonomo',
    'autonomo British expat',
    'autonomo flat rate 2026',
    'cuota autonomo brackets',
    'tarifa plana Spain',
    'autonomo DNV Spain',
    'autonomo IRPF IVA',
    'RETA Spain',
  ],
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      subPillarSlug="autonomo"
      eyebrow="Self-employment · 2026"
      h1="Becoming autónomo in Spain as a UK mover"
      intro="Autónomo is Spain&apos;s self-employed status — the route into Spanish social security and tax system for freelancers, sole traders and contractors. For British DNV holders, freelance consultants, remote workers with non-Spanish clients, and anyone who doesn&apos;t want to set up a Spanish company, this is the default. The 2023 reform restructured it into 15 income-based contribution brackets; the €88/month first-year flat rate (tarifa plana) remains the biggest single attraction for new entrants. Here&apos;s the 2026 walkthrough."
      bullets={[
        'Tarifa plana (flat rate): €88.64/month for first 12 months — extendable to 24 if income < SMI',
        '15 contribution brackets from year 2: ~€206/month (lowest) → ~€607/month (highest)',
        'You self-declare income bracket; reconciled annually against actual tax declaration',
        'IRPF: quarterly retentions (Modelo 130), annual Modelo 100 reconciliation',
        'IVA: quarterly Modelo 303 for VAT (most autónomos), unless intra-EU services or specific exemptions',
        'Provides full SNS healthcare access for autónomo and dependants',
        'Compatible with Beckham Law election for qualifying inbound talent',
        'DNV holders typically become autónomo once their visa is granted',
      ]}
      sections={[
        {
          id: 'who-becomes-autonomo',
          title: 'Who becomes autónomo and why',
          body: (
            <>
              <p>
                Autónomo is the simplest legal route for British movers who:
              </p>
              <ul>
                <li>Hold the Digital Nomad Visa and need a Spanish business vehicle to invoice non-Spanish clients</li>
                <li>Are freelance consultants, designers, developers, writers — anyone billing professional services</li>
                <li>Run a sole-trader business that doesn&apos;t need a corporate structure (Sociedad Limitada)</li>
                <li>Want SNS healthcare access without going through Convenio Especial</li>
                <li>Need to be Spanish-tax-recognised but don&apos;t employ anyone</li>
              </ul>
              <p>
                The alternative is to set up an SL (Sociedad Limitada) — a Spanish limited
                company. For movers turning over more than €60k-€80k of profit per year, an SL
                often beats autónomo on net tax (corporate tax 25% + dividend tax 19-28% vs
                autónomo IRPF up to 47% on the same income). For smaller earners and DNV
                holders, autónomo is cleaner and cheaper to administer.
              </p>
            </>
          ),
        },
        {
          id: 'tarifa-plana',
          title: 'The first-year flat rate (tarifa plana)',
          glance: { value: '€88.64/month', label: 'First 12 months', note: 'Extendable to 24 if income < SMI' },
          body: (
            <>
              <p>
                The tarifa plana is the single biggest reason to register autónomo early. New
                autónomos pay a flat €88.64/month social security contribution for the first 12
                months, regardless of declared income. The flat rate extends to 24 months if
                your net earnings remain below the Spanish minimum wage (SMI) during the
                additional period.
              </p>
              <p>
                Eligibility: you must be registering as autónomo for the first time, or be
                returning after at least 2 years away from autónomo status. Non-EU nationals
                (including post-Brexit Brits) qualify on the same terms as Spanish nationals
                provided you hold valid residency.
              </p>
              <p>
                What the €88 covers: full social security contributions (sick pay entitlement,
                state pension accrual, maternity/paternity rights, SNS healthcare access for
                you and registered dependants). This is materially cheaper than the equivalent
                UK National Insurance + private healthcare combination.
              </p>
              <p>
                What it doesn&apos;t cover: IRPF income tax and IVA — those are separate, paid
                quarterly on actual income generated.
              </p>
            </>
          ),
        },
        {
          id: 'bracket-system',
          title: 'The 15-bracket cuota system from year 2',
          body: (
            <>
              <p>
                After the tarifa plana period ends, you move into the 15-bracket cuota system.
                You self-declare your expected net earnings (after deductible business expenses)
                and pay the corresponding monthly cuota:
              </p>
              <div className="mt-4 overflow-hidden rounded-card border border-border">
                <table className="w-full text-left text-[14px]">
                  <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted">
                    <tr>
                      <th className="px-3 py-2">Expected net monthly earnings</th>
                      <th className="px-3 py-2">2026 monthly cuota (approx)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-white text-ink/85">
                    <tr><td className="px-3 py-2">Under €670</td><td className="px-3 py-2">€205.88</td></tr>
                    <tr><td className="px-3 py-2">€670 – €900</td><td className="px-3 py-2">€235</td></tr>
                    <tr><td className="px-3 py-2">€900 – €1,166</td><td className="px-3 py-2">€263</td></tr>
                    <tr><td className="px-3 py-2">€1,166 – €1,300</td><td className="px-3 py-2">€291</td></tr>
                    <tr><td className="px-3 py-2">€1,300 – €1,500</td><td className="px-3 py-2">€294</td></tr>
                    <tr><td className="px-3 py-2">€1,500 – €1,700</td><td className="px-3 py-2">€296</td></tr>
                    <tr><td className="px-3 py-2">€1,700 – €1,850</td><td className="px-3 py-2">€310</td></tr>
                    <tr><td className="px-3 py-2">€1,850 – €2,030</td><td className="px-3 py-2">€350</td></tr>
                    <tr><td className="px-3 py-2">€2,030 – €2,330</td><td className="px-3 py-2">€370</td></tr>
                    <tr><td className="px-3 py-2">€2,330 – €2,760</td><td className="px-3 py-2">€390</td></tr>
                    <tr><td className="px-3 py-2">€2,760 – €3,190</td><td className="px-3 py-2">€415</td></tr>
                    <tr><td className="px-3 py-2">€3,190 – €3,620</td><td className="px-3 py-2">€440</td></tr>
                    <tr><td className="px-3 py-2">€3,620 – €4,050</td><td className="px-3 py-2">€475</td></tr>
                    <tr><td className="px-3 py-2">€4,050 – €6,000</td><td className="px-3 py-2">€530</td></tr>
                    <tr><td className="px-3 py-2">Above €6,000</td><td className="px-3 py-2">€607.31</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-[15px] text-muted">
                Brackets are frozen at 2025 levels for 2026 except for the MEI (Mecanismo de
                Equidad Intergeneracional) surcharge moving from 0.8% to 0.9% — a small uplift
                across the board.
              </p>
              <p>
                You can change your bracket up to six times a year (March, May, July, September,
                November, January). Year-end reconciliation compares what you actually earned
                (declared on Modelo 100) against the brackets you paid; underpayment triggers
                top-up, overpayment refund.
              </p>
            </>
          ),
        },
        {
          id: 'irpf-and-iva',
          title: 'IRPF and IVA — the tax side',
          body: (
            <>
              <p>
                On top of social security contributions, autónomos pay regular Spanish income
                tax (IRPF) on their profit. Quarterly:
              </p>
              <ul>
                <li><strong>Modelo 130:</strong> quarterly IRPF pre-payment, 20% of net profit (after deductible expenses)</li>
                <li><strong>Modelo 303:</strong> quarterly IVA (VAT) return — typically 21% on Spanish-client invoices, 0% on intra-EU B2B services with reverse-charge mechanism, 0% on non-EU clients (export)</li>
                <li><strong>Modelo 100:</strong> annual IRPF reconciliation in April-June following the tax year</li>
                <li><strong>Modelo 390:</strong> annual IVA reconciliation</li>
              </ul>
              <p>
                Deductible expenses include: phone and internet (proportional to business use),
                car expenses (50% deductible if used for business), accountancy fees, software
                subscriptions, training, professional insurance. The deductible-expense regime
                is materially less generous than the UK&apos;s; expect to spend more time on
                expense documentation.
              </p>
              <p>
                Most British autónomos use a Spanish asesor fiscal or gestoría — typical fees
                €60-€120/month for quarterly returns + annual filing + bracket-change advice.
                Worth budgeting in.
              </p>
            </>
          ),
        },
        {
          id: 'beckham-and-dnv-interaction',
          title: 'How autónomo interacts with DNV and Beckham Law',
          body: (
            <>
              <p>
                The DNV (Digital Nomad Visa) explicitly contemplates remote work for non-Spanish
                clients but the visa holder needs a Spanish business vehicle to invoice through
                — either autónomo or an SL. Most DNV holders choose autónomo because it&apos;s
                simpler, cheaper to set up, and the first-year tarifa plana matches the visa&apos;s
                first year nicely.
              </p>
              <p>
                Beckham Law eligibility extended in 2023 to include qualifying self-employed
                entrepreneurs and inbound talent. A DNV-holding autónomo can elect Beckham Law
                provided their activity qualifies (broadly: innovative entrepreneurship, highly
                qualified professionals, or activities related to certain Spanish-incentivised
                sectors). When eligible, this combination — DNV + autónomo + Beckham — produces
                a 24% flat rate on Spanish-source income up to €600k, materially better than
                standard IRPF. The full mechanics are in the{' '}
                <a href="/spain/tax-residency/beckham-law" className="text-warm underline-offset-2 hover:underline">Beckham Law deep dive</a>.
              </p>
              <p>
                Not all autónomos qualify for Beckham. A standard freelance designer
                billing UK clients may not meet the &ldquo;innovative entrepreneurship&rdquo; or
                &ldquo;highly qualified&rdquo; criteria. Specialist legal advice on Beckham
                eligibility is worth getting before assuming you qualify.
              </p>
            </>
          ),
        },
        {
          id: 'common-mistakes',
          title: 'Common mistakes British autónomos make',
          body: (
            <>
              <ul>
                <li>
                  <strong>Registering autónomo before TIE.</strong> You need your residency card
                  before registering with the Tesorería General de la Seguridad Social. The
                  order is: TIE → NIE confirmed active → autónomo registration. Some asesores
                  rush the order and it produces administrative tangles.
                </li>
                <li>
                  <strong>Picking too low a bracket.</strong> Year-end reconciliation catches
                  under-declaration; you owe the difference plus interest. Self-declare honestly
                  based on realistic expected net income.
                </li>
                <li>
                  <strong>Missing the tarifa plana window.</strong> The €88/month is for first
                  12 months from registration — you can&apos;t backdate. Register as soon as
                  you start earning.
                </li>
                <li>
                  <strong>Forgetting IVA on intra-EU services.</strong> If you bill EU
                  businesses you need the reverse-charge mechanism on Modelo 303 — failure to
                  apply this correctly produces awkward IVA bills.
                </li>
                <li>
                  <strong>Treating UK NIC contributions as transferable.</strong> They&apos;re
                  not — Spanish social security accrues separately. Years contributed in Spain
                  count toward Spanish state pension; not UK state pension. The UK-Spain social
                  security agreement covers some areas (sickness, maternity, unemployment) but
                  not state pension aggregation directly.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Tesorería General de la Seguridad Social · RETA', href: 'https://www.seg-social.es/' },
        { label: 'Agencia Tributaria · Autónomos', href: 'https://sede.agenciatributaria.gob.es/' },
        { label: 'BOE · Ley 18/2022 (autónomo reform)', href: 'https://www.boe.es/' },
      ]}
      faqs={[
        {
          q: 'What does autónomo actually cost per month in 2026?',
          a: 'First 12 months: €88.64/month flat rate (tarifa plana). Year 2 onwards: between €205.88 (lowest bracket, net income under €670/month) and €607.31 (highest bracket, net income above €6,000/month). On top of social security you pay IRPF income tax quarterly via Modelo 130 and IVA quarterly via Modelo 303. Most autónomos also pay €60-€120/month for an asesor fiscal.',
        },
        {
          q: 'Can a DNV holder become autónomo?',
          a: 'Yes — most do. The DNV explicitly contemplates remote work for non-Spanish clients, and autónomo is the natural Spanish business vehicle. The tarifa plana for the first 12 months covers the visa\'s initial period at a low cost. Combined with Beckham Law (if eligible for the relevant sector), this is the strongest tax-and-visa stack available for British remote workers in Spain.',
        },
        {
          q: 'Do I need a Spanish address before registering autónomo?',
          a: 'Yes. Registration is done through the Tesorería General de la Seguridad Social and requires proof of address (padrón certificate). Order: secure your TIE/NIE → register on the padrón → register autónomo. Doing this in the wrong order creates Tesorería system mismatches that take weeks to fix.',
        },
        {
          q: 'How does autónomo accrue Spanish state pension?',
          a: 'Each year as autónomo paying full contributions counts toward Spanish state pension entitlement (currently 36 years of contributions for full pension). For British movers becoming autónomo mid-career, this builds a Spanish pension separately from any UK state pension already accrued. The UK and Spain have social security totalisation rules under the 2019 Withdrawal Agreement that protect cross-border pension rights, but the practical accrual happens in each country separately.',
        },
        {
          q: 'Can I deduct UK business expenses against Spanish autónomo income?',
          a: 'Only expenses genuinely incurred for the Spanish-registered business activity, regardless of where invoiced. UK-source business expenses incurred in the course of your autónomo activity (e.g. UK conference fees, UK supplier invoices) are deductible if properly documented. The Spanish deductibility regime is less permissive than HMRC\'s — expect to retain more documentation and have a higher rejection rate on borderline expenses.',
        },
        {
          q: 'When does it pay to incorporate (SL) instead of autónomo?',
          a: 'Rough rule of thumb: above €60,000-€80,000 net profit/year, an SL (Sociedad Limitada) typically beats autónomo on net tax — corporation tax 25% on profits, then dividend extraction at 19-28% gives a blended effective rate around 33-40% versus autónomo top IRPF rate of 47%. Below €60k, autónomo is cheaper and simpler. Above €80k it\'s worth modelling both. The playbook walks through a full incorporation decision tree.',
        },
      ]}
      reviewedOn="2026-05-25"
      relatedResources={[
        { kind: 'Deep dive', href: '/spain/visa-guide', label: 'Spain visa guide: DNV', blurb: 'How autónomo registration fits in the DNV post-arrival sequence.' },
        { kind: 'Deep dive', href: '/spain/tax-residency/beckham-law', label: 'Beckham Law deep dive', blurb: 'When autónomo activity qualifies for Beckham Law election.' },
        { kind: 'Deep dive', href: '/spain/tax-residency', label: 'Spain tax residency for British movers', blurb: 'When you become Spanish-tax-resident — autónomo registration is part of the picture.' },
        { kind: 'Calculator', href: '/calculators/beckham-law', label: 'Beckham Law tax calculator', blurb: 'Plug in autónomo income — see autónomo + Beckham vs autónomo + standard IRPF.' },
        { kind: 'Reference', href: '/thresholds', label: '2026 thresholds for British movers', blurb: 'All Spanish income thresholds including the DNV/autónomo income proofs.' },
        { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Step-by-step autónomo registration walkthrough with asesor introductions.' },
      ]}
    />
  );
}
