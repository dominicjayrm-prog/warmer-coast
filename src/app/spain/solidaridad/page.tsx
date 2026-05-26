import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spain Solidaridad Surcharge (ITSGF) 2026 | National Wealth Tax Above €3m',
  description:
    'How Spain&apos;s ITSGF / Solidaridad surcharge works for British HNW movers in 2026. National wealth tax above €3m introduced to neutralise the Madrid/Andalucía zero-Patrimonio effect. Bracket rates, the Patrimonio-paid credit, how it interacts with regional rebates.',
  alternates: { canonical: '/spain/solidaridad' },
  openGraph: { url: '/spain/solidaridad' },
  keywords: [
    'Spain Solidaridad',
    'ITSGF',
    'Spain solidarity surcharge',
    'wealth tax above 3 million',
    'Spanish HNW tax',
    'Patrimonio credit',
  ],
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      subPillarSlug="solidaridad"
      eyebrow="National wealth surcharge · 2026"
      h1="Spain Solidaridad surcharge (ITSGF) — the €3m wealth tax"
      intro="Solidaridad — formally the Impuesto Temporal de Solidaridad de las Grandes Fortunas (ITSGF) — is a national wealth tax introduced in late 2022 to capture HNW Spanish residents in regions where Patrimonio was rebated to zero (primarily Madrid and Andalucía). It applies above €3m of net wealth and broadly mirrors the upper end of the Patrimonio scale. Critically, Patrimonio paid is creditable against Solidaridad — meaning Cataluña/Valencia residents pay almost no extra Solidaridad while Madrid/Andalucía residents pay it in full."
      bullets={[
        'Applies to Spanish tax residents with net wealth above €3m',
        'Three brackets: 1.7% (€3m-€5.35m), 2.1% (€5.35m-€10.7m), 3.5% (above €10.7m)',
        'Personal allowance: €700,000 (same as Patrimonio default)',
        'Primary residence: €300,000 allowance',
        'Patrimonio paid is creditable against the Solidaridad bill',
        'Net effect: equalises HNW wealth tax across Madrid, Andalucía and Cataluña',
        'Originally framed as &ldquo;temporary&rdquo; — currently in force and extended',
      ]}
      sections={[
        {
          id: 'why-it-exists',
          title: 'Why Solidaridad exists',
          body: (
            <>
              <p>
                Spanish autonomous communities have the power to apply bonificaciones of up to
                100% on Patrimonio. Madrid and Andalucía have used this for years to rebate
                Patrimonio to zero — making them attractive for HNW residency relative to
                Cataluña or Valencia. Politically this was contentious: critics argued the
                regional bonificaciones undermined the wealth-tax base nationally.
              </p>
              <p>
                The national government introduced ITSGF (Solidaridad) in Real Decreto-ley
                18/2022 to apply a national-level surcharge on net wealth above €3m, with no
                regional bonificación available. Crucially, the surcharge allows residents to
                deduct Patrimonio paid — so the effect is to ensure that everyone above €3m
                pays at least the surcharge rate, even if their region rebates Patrimonio to
                zero.
              </p>
              <p>
                Originally framed as a two-year temporary measure (covering 2022 and 2023 wealth
                positions), Solidaridad has been extended through subsequent legislation and is
                in force for 2026. Its long-term political future is uncertain but the current
                position is: it&apos;s the de facto floor on Spanish HNW wealth tax above €3m.
              </p>
            </>
          ),
        },
        {
          id: 'rate-structure',
          title: 'Bracket structure and rates',
          glance: { value: '1.7% – 3.5%', label: 'Above €3m', note: 'After €700k allowance' },
          body: (
            <>
              <p>
                Solidaridad applies a three-bracket structure above the €700,000 personal
                allowance:
              </p>
              <ul>
                <li><strong>€700,000 – €3,000,000:</strong> 0% (this band is the Patrimonio territory, no Solidaridad)</li>
                <li><strong>€3,000,000 – €5,347,998:</strong> 1.7%</li>
                <li><strong>€5,347,998 – €10,695,996:</strong> 2.1%</li>
                <li><strong>Above €10,695,996:</strong> 3.5%</li>
              </ul>
              <p>
                The €700,000 personal allowance is the same as the Patrimonio default. The
                primary-residence allowance of €300,000 also applies. So the effective starting
                point for any Solidaridad bill is €3,000,000 of net wealth (or €3,300,000 if you
                hold a primary residence valued at €300k+ to deduct).
              </p>
              <p>
                Where it bites: a Madrid resident with €5m net wealth pays €0 Patrimonio
                (regional 100% rebate), but pays Solidaridad on €5m minus €700k minus €300k =
                €4m above the allowances → bracket 1 covers €2.35m at 1.7% = €39,950, and
                bracket 2 covers the remaining €1.65m at 2.1% = €34,650 → total Solidaridad
                ~€74,600/year.
              </p>
            </>
          ),
        },
        {
          id: 'patrimonio-credit',
          title: 'The Patrimonio credit (and why it matters)',
          body: (
            <>
              <p>
                Solidaridad allows you to deduct the Patrimonio you&apos;ve actually paid in the
                same year from the Solidaridad bill. This is the mechanism that equalises the
                regional differences at the HNW level.
              </p>
              <p>
                Worked example with €5m net wealth, comparing two regions:
              </p>
              <ul>
                <li>
                  <strong>Madrid resident:</strong> €0 Patrimonio (100% regional rebate) →
                  Solidaridad bill ~€74,600 → no Patrimonio to credit → pays €74,600 total
                </li>
                <li>
                  <strong>Cataluña resident:</strong> Patrimonio ~€60,000-€70,000 depending on
                  exact composition → Solidaridad gross bill ~€74,600 → Patrimonio credit ~€65,000
                  → net Solidaridad ~€9,600 → total ~€69,600-€80,000
                </li>
              </ul>
              <p>
                The net wealth-tax burden at €5m is broadly similar across Madrid and Cataluña
                post-Solidaridad. Below €3m, Cataluña still costs more (no Solidaridad applies);
                above €10m, the regional differences become small in relative terms.
              </p>
              <p>
                Where Madrid/Andalucía still win post-Solidaridad: the filing simplicity
                (zero-Patrimonio return is shorter and lower-audit-risk) and the bracket
                positioning at the €3m-€5m band, where Cataluña residents pay Patrimonio but
                get only partial Solidaridad credit because the Patrimonio brackets at this
                wealth band are slightly different from Solidaridad brackets.
              </p>
            </>
          ),
        },
        {
          id: 'planning',
          title: 'What this means for British HNW movers',
          body: (
            <>
              <ul>
                <li>
                  <strong>Below €3m net wealth:</strong> Solidaridad doesn&apos;t apply. The
                  regional choice (Madrid vs Andalucía vs Cataluña vs Valencia) drives your
                  wealth tax bill — Madrid and Andalucía win cleanly.
                </li>
                <li>
                  <strong>€3m–€10m net wealth:</strong> Solidaridad equalises most of the
                  regional gap. Madrid/Andalucía still have edge through filing simplicity
                  and bracket positioning, but the absolute saving versus Cataluña is small.
                  Regional choice driven more by other factors (climate, lifestyle, schools).
                </li>
                <li>
                  <strong>Above €10m net wealth:</strong> Both Patrimonio and Solidaridad apply
                  at the upper bracket of 3.5%. Madrid/Andalucía still produce slightly cleaner
                  outcomes but you&apos;re paying material wealth tax everywhere. Consider
                  whether Spain is the right destination at all — Portugal (no wealth tax),
                  Gibraltar (Cat 2 capped at £42,380), or Italy&apos;s flat-tax regime become
                  more competitive at this level.
                </li>
                <li>
                  <strong>Asset structuring:</strong> Solidaridad applies the same exemptions as
                  Patrimonio — qualifying business assets, certain pension schemes, etc. Pre-
                  move restructuring of UK assets into Solidaridad/Patrimonio-friendlier
                  wrappers is a real planning area for HNW movers.
                </li>
                <li>
                  <strong>Non-resident position:</strong> Solidaridad applies to non-residents on
                  Spanish-situs assets too, with similar regional-rule election available from
                  2024 onwards. Non-residents with €3m+ of Spanish-situs assets (e.g. Marbella
                  property HNW buyers) need to factor this in.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 'common-mistakes',
          title: 'Common mistakes',
          body: (
            <>
              <ul>
                <li>
                  <strong>Assuming Madrid = zero wealth tax above €3m.</strong> True for
                  Patrimonio (100% regional rebate); not true for Solidaridad (full national
                  rate applies). Madrid HNW still pays significant Solidaridad.
                </li>
                <li>
                  <strong>Forgetting Solidaridad is creditable against Patrimonio paid.</strong>{' '}
                  Some calculators / older guides treat them as additive — they&apos;re not in
                  Cataluña/Valencia where Patrimonio is paid.
                </li>
                <li>
                  <strong>Filing Solidaridad late.</strong> Same deadline as Patrimonio (typically
                  end of June, year following). Late filing penalties are similar to IRPF —
                  5%-150% depending on delay and intent.
                </li>
                <li>
                  <strong>Treating Solidaridad as &ldquo;temporary&rdquo; for planning purposes.</strong>{' '}
                  It was originally framed as 2022-2023 only; it&apos;s been extended each year
                  since. Plan as if it&apos;s permanent.
                </li>
                <li>
                  <strong>Underestimating valuation aggressiveness.</strong> Hacienda has been
                  more aggressive on valuations under Solidaridad than under Patrimonio
                  historically. Get UK assets professionally valued at 31 December each year if
                  there&apos;s any prospect of being above €3m.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Agencia Tributaria · Impuesto Temporal de Solidaridad', href: 'https://sede.agenciatributaria.gob.es/' },
        { label: 'BOE · Real Decreto-ley 18/2022 (ITSGF)', href: 'https://www.boe.es/' },
        { label: 'BOE · Successive ITSGF extensions', href: 'https://www.boe.es/' },
      ]}
      faqs={[
        {
          q: 'Is Solidaridad permanent or temporary?',
          a: 'Legally it remains framed as a "temporary" surcharge — but it\'s been extended each year since 2022 and is currently in force for 2026. Plan as if permanent. Successive Spanish governments have prioritised maintaining it, and reversal would require active legislation against significant political resistance.',
        },
        {
          q: 'Do I pay Solidaridad if I\'m on Beckham Law?',
          a: 'Yes — Beckham Law affects IRPF only, not Patrimonio or Solidaridad. Both wealth taxes apply normally to Beckham-Law residents on worldwide wealth above the thresholds.',
        },
        {
          q: 'Does Solidaridad apply if I\'m a non-resident with Spanish property?',
          a: 'Yes for non-residents whose Spanish-situs assets exceed €3m (after the allowances). The most common case is HNW Marbella or Sotogrande property buyers holding €3m+ of Spanish real estate. From 2024 non-residents can elect to apply the regional rules of the autonomous community where their main Spanish asset is located.',
        },
        {
          q: 'How does Solidaridad compare to other countries\' wealth taxes?',
          a: 'Norway, Switzerland and Liechtenstein run permanent wealth taxes; France has the IFI (real-estate-only wealth tax) above €1.3m; the UK has no wealth tax. Spain\'s Solidaridad is in the middle bracket internationally — material above €3m but well below Norwegian rates at the top end.',
        },
        {
          q: 'What\'s the practical difference between Patrimonio and Solidaridad?',
          a: 'Patrimonio is the original wealth tax, administered regionally with up to 100% regional bonificaciones; Solidaridad is the national-level surcharge that catches the bonificación-zero gap. Mechanically they have the same valuation base and similar allowances; differently bracket structure. The Patrimonio-paid credit against Solidaridad means HNW residents typically pay one or the other (and roughly the same amount) rather than both in full.',
        },
      ]}
      reviewedOn="2026-05-25"
      relatedResources={[
        { kind: 'Deep dive', href: '/spain/patrimonio', label: 'Spain Patrimonio (regional wealth tax)', blurb: 'How the regional Patrimonio interacts with Solidaridad — and why Madrid still wins below €3m.' },
        { kind: 'Deep dive', href: '/spain/sucesiones', label: 'Spain inheritance tax (Sucesiones)', blurb: 'The other big HNW Spanish tax surprise.' },
        { kind: 'Deep dive', href: '/spain/tax-residency', label: 'Spain tax residency for British movers', blurb: 'When you become Spanish-resident and what gets taxed worldwide.' },
        { kind: 'Compare', href: '/spain-vs-portugal', label: 'Spain vs Portugal compared', blurb: 'Portugal has no general wealth tax — a major factor for HNW movers above €3m.' },
        { kind: 'Reference', href: '/thresholds', label: '2026 thresholds for British movers', blurb: 'All Iberian wealth and income thresholds in one place.' },
        { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'HNW worked examples with regional choice modelling.' },
      ]}
    />
  );
}
