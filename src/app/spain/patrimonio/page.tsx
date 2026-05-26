import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spain Wealth Tax (Patrimonio) 2026 | Region-by-Region Guide for British Movers',
  description:
    'How Spain\'s Patrimonio wealth tax works in 2026, region by region. Madrid effective rate 0%, Andalucía 0%, Cataluña and Valencia punitive. State thresholds, regional bonificaciones, what counts as wealth, and how it stacks with the new national Solidaridad surcharge.',
  alternates: { canonical: '/spain/patrimonio' },
  openGraph: { url: '/spain/patrimonio' },
  keywords: [
    'Spain wealth tax',
    'Patrimonio Spain',
    'Spanish wealth tax 2026',
    'Patrimonio Madrid',
    'Patrimonio Andalucía',
    'Patrimonio Cataluña',
    'British HNW Spain',
    'Solidaridad surcharge',
  ],
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      subPillarSlug="patrimonio"
      eyebrow="Wealth tax · 2026"
      h1="Spain Patrimonio (wealth tax) — region by region"
      intro="Patrimonio is Spain&apos;s annual wealth tax on the net worth of residents (and on Spanish-situs assets of non-residents). It&apos;s set by national law but each autonomous community can apply rebates of up to 100%. The result is one of the most regionally-divergent taxes in Europe: zero in Madrid and Andalucía, materially punitive in Cataluña and Valencia. For British HNW movers this single tax is often the single biggest reason to choose one Spanish region over another."
      bullets={[
        'State scale: 0.2% on first €167,129, scaling to 3.5% above €10.7m of taxable wealth',
        'State personal allowance: €700,000 per individual (some regions raise this)',
        'Primary residence: state allowance €300,000 (some regions raise)',
        'Madrid: 100% bonificación — effective Patrimonio liability of zero',
        'Andalucía: 100% bonificación — effective zero',
        'Cataluña: no rebate, full state scale plus €500,000 allowance ceiling',
        'Valencia: from 2025/26, individual allowance €1m and primary residence €300k',
        'Solidaridad surcharge applies on top above €3m — see the separate page',
      ]}
      sections={[
        {
          id: 'how-it-works',
          title: 'How Patrimonio works at the state level',
          glance: { value: 'Annual wealth tax', label: 'On net worth above thresholds', note: 'Regional rebates dominate' },
          body: (
            <>
              <p>
                Patrimonio applies to your worldwide net wealth (assets minus debts) on
                31 December each year, with a Spanish tax return due alongside your IRPF.
                Tax residents are taxed on worldwide wealth; non-residents only on Spanish-situs
                assets (Spanish real estate, Spanish-account-holdings, etc.).
              </p>
              <p>
                The state scale (before regional rebates) is steeply progressive:
              </p>
              <ul>
                <li>Up to €167,129: 0.2%</li>
                <li>€167,129–€334,253: 0.3%</li>
                <li>€334,253–€668,500: 0.5%</li>
                <li>€668,500–€1,336,999: 0.9%</li>
                <li>€1,336,999–€2,673,999: 1.3%</li>
                <li>€2,673,999–€5,347,998: 1.7%</li>
                <li>€5,347,998–€10,695,996: 2.1%</li>
                <li>Above €10,695,996: 3.5%</li>
              </ul>
              <p>
                Two key state allowances apply before the scale kicks in: a personal allowance
                of €700,000 per individual, and a primary-residence allowance of €300,000
                (deducted from the value of your main home). Both are increased in some regions.
              </p>
              <p>
                The decisive question is which region you become resident in — because each
                autonomous community can apply a bonificación (rebate) of up to 100% on the
                regional share of the tax. Madrid and Andalucía rebate to zero. Cataluña does
                not rebate. Other regions sit in between.
              </p>
            </>
          ),
        },
        {
          id: 'region-by-region',
          title: 'Region-by-region position for 2026',
          glance: { value: 'Madrid + Andalucía = 0%', label: 'Cataluña + Valencia = punitive', note: 'Pick your region with this in mind' },
          body: (
            <>
              <p>
                For British HNW movers the regional choice is the single biggest planning lever.
                Headline 2026 positions across the most-relocated-to regions:
              </p>
              <ul>
                <li><strong>Madrid:</strong> 100% bonificación on the regional share — effective Patrimonio liability is zero up to the Solidaridad threshold. Madrid then captures Solidaridad above €3m at national rates, but the Solidaridad credit-back for Patrimonio paid means most Madrid residents still come out close to zero in absolute terms.</li>
                <li><strong>Andalucía:</strong> 100% bonificación. Effective zero Patrimonio. Long-standing strategic positioning to attract HNW residents and currently competitive with Madrid.</li>
                <li><strong>Cataluña:</strong> No bonificación. Full state scale applies. Personal allowance of €500,000 (lower than the state €700,000). This is the most punitive Patrimonio region for HNW movers and a major reason why Barcelona is a less common destination for £5m+ net-worth movers.</li>
                <li><strong>Valencia:</strong> The Valencian government raised the individual allowance to €1m and the primary-residence allowance to €300k in 2025, taking effect for 2026. Above those thresholds Valencia applies a modestly higher scale than the state default. Materially better than Cataluña; not as clean as Madrid/Andalucía.</li>
                <li><strong>Balearic Islands:</strong> Personal allowance €3m for residents (effectively a partial bonificación by another mechanism); above that, modest scale. Strong position for HNW Mallorca buyers.</li>
                <li><strong>Canary Islands:</strong> Bonificación applies but variable; check current year. Historically friendlier than Cataluña.</li>
                <li><strong>Basque Country and Navarra:</strong> Outside the standard regime — their own foral tax systems apply Patrimonio under separate rules.</li>
                <li><strong>Murcia, Asturias, Aragón, Galicia, Castilla y León, Castilla-La Mancha, Extremadura:</strong> Mostly state default with modest variations — neither aggressively punitive nor competitive on Patrimonio.</li>
              </ul>
              <p>
                Regional policy changes year to year; the regional autonomous parliaments can
                vote to add or remove bonificaciones. The Madrid/Andalucía 100% position has
                been politically stable for several years but is theoretically reversible.
                Confirm current-year position with the regional Hacienda before relying on it
                for a major move.
              </p>
            </>
          ),
        },
        {
          id: 'what-counts-as-wealth',
          title: 'What counts as taxable wealth',
          body: (
            <>
              <p>
                Patrimonio looks at virtually everything of value, with a few specific
                exemptions:
              </p>
              <ul>
                <li><strong>Real estate:</strong> all properties, valued at the higher of cadastral, transfer or market value</li>
                <li><strong>Bank accounts and deposits:</strong> 31 December balance</li>
                <li><strong>Listed securities:</strong> 31 December market value</li>
                <li><strong>Unlisted shares and business interests:</strong> book value or specific valuation rules</li>
                <li><strong>Collective investment schemes:</strong> 31 December NAV</li>
                <li><strong>Vehicles, boats, aircraft:</strong> market value (with depreciation tables)</li>
                <li><strong>Jewellery, art, antiques:</strong> above defined thresholds (currently €18,030 per item for jewellery; €90,151 for art)</li>
                <li><strong>Insurance policies and pension assets:</strong> generally yes for non-qualifying pensions, with specific exemptions for Spanish/EU qualifying schemes</li>
                <li><strong>Intellectual property:</strong> certain rights at market value</li>
              </ul>
              <p>
                Key exemptions: certain qualifying business assets (where the taxpayer is
                actively involved), works of art on permanent loan to public institutions,
                pension funds in qualifying schemes, household goods (below defined value).
              </p>
              <p>
                For British movers a common surprise is that UK pension assets in QROPS or
                International SIPP wrappers may be included in Patrimonio depending on
                structure and region. Pre-move structuring matters — see the{' '}
                <Link href="/qrops-vs-sipp-abroad" className="text-warm underline-offset-2 hover:underline">QROPS vs SIPP page</Link>{' '}
                for the cross-border pension angle.
              </p>
            </>
          ),
        },
        {
          id: 'solidaridad-stacking',
          title: 'How Patrimonio stacks with the Solidaridad surcharge',
          body: (
            <>
              <p>
                The Solidaridad surcharge (Impuesto Temporal de Solidaridad de las Grandes
                Fortunas — ITSGF) was introduced in 2022 to neutralise the Madrid/Andalucía
                zero-Patrimonio effect at the national level. It applies above €3m of net
                wealth at rates broadly mirroring the upper Patrimonio brackets.
              </p>
              <p>
                Critically, Solidaridad allows you to <strong>deduct the Patrimonio you&apos;ve
                actually paid</strong> from the Solidaridad bill. So:
              </p>
              <ul>
                <li>In Cataluña: you pay Patrimonio in full → Solidaridad bill is reduced by the Patrimonio paid → typically zero additional Solidaridad</li>
                <li>In Madrid: you pay zero Patrimonio (100% rebate) → Solidaridad bill is not reduced → you pay the full Solidaridad</li>
              </ul>
              <p>
                Net effect: for movers above €3m the Madrid/Andalucía advantage shrinks, but
                doesn&apos;t disappear. Below €3m, Madrid and Andalucía remain genuinely
                Patrimonio-free. Above €3m the regional advantage is mostly capped by
                Solidaridad — though the regional choice still matters for the exact bracketing
                and the practical filing burden.
              </p>
              <p>
                See the <Link href="/spain/solidaridad" className="text-warm underline-offset-2 hover:underline">Solidaridad deep dive</Link>{' '}
                for the full mechanics and bracket structure.
              </p>
            </>
          ),
        },
        {
          id: 'planning-for-british-movers',
          title: 'Planning for British movers',
          body: (
            <>
              <ul>
                <li>
                  <strong>If your net worth is below €700,000 (single) or €1.4m (married):</strong>{' '}
                  Patrimonio likely doesn&apos;t apply anywhere in Spain. The regional choice is
                  driven by other factors.
                </li>
                <li>
                  <strong>If your net worth is €1m-€3m:</strong> the regional choice matters a
                  lot. Madrid and Andalucía save you Patrimonio entirely; Cataluña could cost
                  €5,000-€30,000/year; Valencia (post-2026 reform) sits in the middle.
                </li>
                <li>
                  <strong>If your net worth is above €3m:</strong> Solidaridad equalises most of
                  the regional gap, but Madrid and Andalucía still produce slightly cleaner
                  outcomes through filing simplicity and small bracket differences.
                </li>
                <li>
                  <strong>Pre-move valuation:</strong> Spanish real estate is often valued lower
                  than market for Patrimonio (via cadastral); UK assets are typically valued at
                  market. Pre-move asset reorganisation (e.g. moving liquid UK assets into
                  Spanish real estate before becoming Spanish-resident) is sometimes used to
                  reduce the Patrimonio base. This needs careful UK CGT planning to avoid
                  triggering UK tax on the disposal.
                </li>
                <li>
                  <strong>Beckham Law and Patrimonio:</strong> Beckham Law doesn&apos;t shield
                  you from Patrimonio. Beckham elects you into being taxed only on
                  Spanish-source income for IRPF — but Patrimonio still applies on worldwide
                  wealth for residents. Some Beckham-Law-eligible movers find that the
                  Patrimonio bill alone makes regions like Cataluña uneconomical despite the
                  IRPF saving.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Agencia Tributaria · Impuesto sobre el Patrimonio', href: 'https://sede.agenciatributaria.gob.es/' },
        { label: 'BOE · Ley 19/1991 del Impuesto sobre el Patrimonio', href: 'https://www.boe.es/' },
        { label: 'gov.uk · Tax if you leave the UK to live abroad', href: 'https://www.gov.uk/tax-uk-income-live-abroad' },
        { label: 'BOE · Solidaridad (ITSGF) legislation', href: 'https://www.boe.es/' },
      ]}
      faqs={[
        {
          q: 'Does Madrid really have zero wealth tax?',
          a: 'Effectively yes for the regional component — Madrid applies a 100% bonificación on the regional share of Patrimonio, so residents pay no regional Patrimonio. Above €3m, the national Solidaridad surcharge still applies (and is not creditable against zero Patrimonio paid), so HNW movers above €3m pay Solidaridad regardless. Below €3m, Madrid is genuinely wealth-tax-free.',
        },
        {
          q: 'What\'s my Patrimonio if I live in Cataluña with €2m of net worth?',
          a: 'Rough calc: net wealth €2m minus €500k Cataluña personal allowance minus €300k primary residence (if applicable) = €1.2m taxable base. Applied to the state scale: ~€7,500 in Patrimonio. No regional bonificación applies in Cataluña. Compare to Madrid/Andalucía where the same wealth produces €0 Patrimonio. Multiply across years and the regional choice becomes very expensive.',
        },
        {
          q: 'Do non-residents pay Patrimonio in Spain?',
          a: 'Only on Spanish-situs assets — primarily Spanish real estate. A non-resident UK citizen owning a Spanish holiday property worth €600,000 with no mortgage falls below the €700k personal allowance and pays zero. Above that they pay on the excess at state rates. From 2023, non-residents can elect to apply the regional rules of the autonomous community where their main Spanish asset is located, which can dramatically reduce the bill for non-residents holding property in Madrid or Andalucía.',
        },
        {
          q: 'Does Beckham Law exempt me from Patrimonio?',
          a: 'No. Beckham Law is an IRPF (income tax) election — it doesn\'t affect Patrimonio. Beckham Law holders pay Patrimonio on the same basis as any other resident in the region they live in. The interaction matters: a Beckham-Law-eligible mover comparing Madrid vs Cataluña typically finds Madrid wins for both IRPF (because Beckham works the same) and Patrimonio (because of the 100% rebate).',
        },
        {
          q: 'How are UK pension assets treated under Patrimonio?',
          a: 'Depends on the wrapper structure. Pension assets in a qualifying scheme are generally exempt from Patrimonio under specific exclusions — but the criteria for qualifying (under Article 4 of the Patrimonio law) reference Spanish/EU pension structures. UK SIPPs and QROPS may or may not qualify depending on facts. Cross-border pension structuring against Patrimonio is a regulated-adviser area; talk to a Spanish asesor fiscal who handles UK pensions before assuming exemption.',
        },
        {
          q: 'When is the Patrimonio return due?',
          a: 'June 30 each year, alongside the IRPF return for the previous calendar year. The return is filed even if you owe zero (Cataluña, etc.) — the threshold for filing is generally gross assets above €2m (varies by region) or any tax liability. Patrimonio returns are scrutinised on UK-asset disclosure given the Modelo 720 cross-reference.',
        },
      ]}
      reviewedOn="2026-05-25"
      relatedResources={[
        { kind: 'Deep dive', href: '/spain/solidaridad', label: 'Solidaridad surcharge (above €3m)', blurb: 'How the national surcharge interacts with regional Patrimonio rebates.' },
        { kind: 'Deep dive', href: '/spain/tax-residency', label: 'Spain tax residency for British movers', blurb: 'Becoming Spanish resident triggers worldwide wealth basis — get the date right.' },
        { kind: 'Deep dive', href: '/spain/tax-residency/modelo-720', label: 'Modelo 720 foreign asset declaration', blurb: 'Patrimonio and Modelo 720 are cross-referenced annually.' },
        { kind: 'Deep dive', href: '/qrops-vs-sipp-abroad', label: 'QROPS vs SIPP for British expats', blurb: 'How pension wrappers interact with Patrimonio — pre-move structuring matters.' },
        { kind: 'Reference', href: '/thresholds', label: '2026 thresholds for British movers', blurb: 'All the income and wealth thresholds in one place.' },
        { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Worked examples of regional choice for HNW movers, with vetted asesor introductions.' },
      ]}
    />
  );
}
