import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'QROPS vs International SIPP for British Expats in Spain, Portugal, Gibraltar (2026)';
const DESC =
  'Should you transfer your UK pension to a QROPS or keep it as a UK SIPP after moving to Spain, Portugal or Gibraltar in 2026? The 25% overseas transfer charge, the October 2024 rule change, the OTA, residency tests, plus the worked-example trade-off.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/qrops-vs-sipp-abroad' },
  openGraph: { url: '/qrops-vs-sipp-abroad', title: TITLE, description: DESC },
  twitter: { title: TITLE, description: DESC },
  keywords: [
    'QROPS',
    'International SIPP',
    'UK pension abroad',
    'overseas transfer charge',
    '25% overseas transfer charge',
    'UK pension Spain',
    'UK pension Portugal',
    'UK pension Gibraltar',
    'QROPS Malta',
    'OTA Overseas Transfer Allowance',
  ],
};

const FAQS = [
  {
    q: 'What is the 25% overseas transfer charge?',
    a: 'A 25% tax HMRC applies to UK pension transfers to a QROPS unless an exemption applies. Pre-October 2024, the main exemption was: QROPS in the EEA or Gibraltar and you reside in the EEA. From 30 October 2024, that exemption was tightened — you now need to be resident in the same country as the QROPS, not just anywhere in the EEA. That single rule change closed the most-used route for British expats in Spain/Portugal who were transferring to Malta-based or Gibraltar-based QROPS.',
  },
  {
    q: 'What\'s the Overseas Transfer Allowance (OTA)?',
    a: 'A lifetime cap on transfers you can make to a QROPS without triggering the 25% charge. The OTA is set at the same level as your Lump Sum and Death Benefit Allowance (LSDBA), which is £1,073,100 by default (subject to transitional protections). Transfers above the OTA face the 25% charge on the excess. For most UK movers this isn\'t the binding constraint — the residency-match rule is.',
  },
  {
    q: 'Can I still get a QROPS without the 25% charge if I live in Spain or Portugal?',
    a: 'Only if the QROPS is established in the same country you live in. Spain has very few HMRC-registered QROPS providers; Portugal has more but the market is small. Most UK advisers route Spain/Portugal expat QROPS transfers to Malta — which since 30 October 2024 triggers the 25% charge unless you also reside in Malta. The practical answer for most British movers in Iberia is: the QROPS route is now expensive or unavailable, and the International SIPP route is the new default.',
  },
  {
    q: 'What\'s the International SIPP?',
    a: 'A UK-registered SIPP (Self-Invested Personal Pension) designed for use by non-UK residents. Your pension stays on the UK regulatory regime — no 25% transfer charge, no QROPS list complexity, no overseas residency-match rule. You keep UK FCA protection, UK consumer regulation, UK tax treatment on the pension wrapper. The trade-off is you remain inside the UK pension framework with its withdrawal rules (MPAA, LTA-related caps where applicable) but you can hold international investments and the SIPP can pay you in EUR, GBP or other currencies.',
  },
  {
    q: 'Does Spanish, Portuguese or Gibraltar tax apply to my pension withdrawals?',
    a: 'Generally yes — once you\'re tax resident in the new country, pension income from a UK SIPP or QROPS is reportable locally and taxed under local rules. The exception is UK government pensions (civil service, military, NHS-employed): under most UK Double Tax Treaties (including Spain Article 17, Portugal Article 19), government pensions are taxable only in the UK. Private and state pensions are taxed in the new country of residence, with the UK potentially withholding and the treaty resolving overlap via credits.',
  },
  {
    q: 'What about Gibraltar QROPS specifically?',
    a: 'Gibraltar QROPS remain a viable option if you\'re resident in Gibraltar. The Gibraltar QROPS market is more developed than Spain\'s and the regulatory framework is well understood by UK advisers. For a Cat 2 holder living in Gibraltar, a Gibraltar QROPS can produce tax-efficient retirement income without triggering the 25% charge. For someone living in Spain on a frontier-worker basis, the QROPS is in the wrong country and the charge applies — making the International SIPP usually the better answer.',
  },
  {
    q: 'Will my Spanish/Portuguese pension wrapper be taxed differently?',
    a: 'Both countries treat UK pension withdrawals as taxable income under their domestic regimes. Beckham Law in Spain can shield non-Spanish-source income for the regime period, which can include UK pension income provided structuring is correct — talk to a regulated cross-border adviser, the playbook walks through this. Portugal\'s IFICI does not protect pension income — pension taxation is at standard Portuguese rates. This is one reason Portugal is no longer the no-brainer it was under the original NHR.',
  },
];

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    author: {
      '@type': 'Person',
      '@id': `${SITE.url}/about#dominic-roworth`,
      name: 'Dominic Roworth',
      url: `${SITE.url}/author/dominic-roworth`,
      image: `${SITE.url}/dominic-roworth.jpg`,
    },
    publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/qrops-vs-sipp-abroad`,
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'QROPS vs International SIPP', item: `${SITE.url}/qrops-vs-sipp-abroad` },
    ],
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink underline-offset-2 hover:underline">Home</Link>
            <span aria-hidden>›</span>
            <span className="text-ink">QROPS vs International SIPP</span>
          </nav>

          <Badge tone="warm" uppercase>Pension transfer · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            QROPS vs International SIPP for British expats in 2026
          </h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">
            For two decades the QROPS was the default cross-border pension structure for British
            expats. The October 2024 rule change broke that assumption hard. For most British
            movers to Spain or Portugal in 2026, the International SIPP is now the better
            answer; QROPS still works for Gibraltar Cat 2 holders. This is the sourced version
            of the decision, including the 25% transfer charge mechanics, the OTA cap, and the
            specific country-by-country answer.
          </p>

          <div className="mt-6 flex items-center gap-3 text-xs text-faint">
            <span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span>
            <span aria-hidden>·</span>
            <span>Reviewed 25 May 2026</span>
            <span aria-hidden>·</span>
            <span>Educational — not regulated pension advice</span>
          </div>

          <Card variant="bordered" className="mt-8">
            <CardBody>
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">The TL;DR</div>
              <p className="mt-2 text-[16.5px] leading-relaxed text-ink/90">
                <strong>Spain / Portugal:</strong> International SIPP usually wins. The 25%
                overseas transfer charge applies to QROPS unless the QROPS is in the same
                country as your residence — almost no British movers satisfy that for Iberia in
                2026. <strong>Gibraltar:</strong> Gibraltar QROPS remains viable for Gibraltar
                residents (Cat 2 / HEPSS). <strong>Frontier workers (Spain-side residence,
                Gibraltar work):</strong> SIPP usually wins because Spanish residence breaks the
                Gibraltar QROPS exemption.
              </p>
            </CardBody>
          </Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">What changed on 30 October 2024</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Until 30 October 2024, transfers to a QROPS established in the EEA or Gibraltar were
            exempt from the 25% overseas transfer charge provided the member was resident
            anywhere in the EEA. This meant a British expat in Spain could transfer to a Malta
            QROPS (Malta being an EEA member with a deep QROPS market) and pay no transfer
            charge.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            HMRC tightened the rule via the Autumn Statement 2024 measures: from 30 October
            2024, the exemption only applies if the QROPS is established in the <strong>same
            country</strong> as the member&apos;s residence. A British expat in Spain transferring
            to a Malta QROPS now triggers the 25% charge. To avoid the charge, the QROPS must
            be Spanish — and the Spanish QROPS market is tiny.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            This rule change was the single most disruptive event in UK expat pension planning
            since the 2017 OTC introduction. It made the QROPS route effectively unavailable for
            most British movers to Spain and Portugal unless they could find a same-country
            QROPS — which most cannot.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">The International SIPP: the new default</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            An International SIPP is a UK-registered Self-Invested Personal Pension provided by
            UK pension administrators for non-UK residents. The pension stays inside the UK
            pension regime — no overseas transfer happens, so no 25% charge applies.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            What you keep:
          </p>
          <ul className="mt-3 space-y-1 text-[15.5px] text-ink/85">
            <li>UK FCA-regulated pension structure</li>
            <li>UK Pension Protection Fund coverage (where applicable)</li>
            <li>Tax-free 25% lump sum option (subject to LSDBA limits)</li>
            <li>Investment flexibility — equities, funds, ETFs, multi-currency holdings</li>
            <li>Ability to pay benefits in EUR, GBP or other currencies</li>
            <li>UK income tax treatment on withdrawals (with DTA credit relief abroad)</li>
          </ul>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            What you accept:
          </p>
          <ul className="mt-3 space-y-1 text-[15.5px] text-ink/85">
            <li>UK pension rules including the MPAA (Money Purchase Annual Allowance) if you&apos;ve already drawn flexibly</li>
            <li>Withdrawals reportable in both UK and your new country of residence (treaty resolves the overlap)</li>
            <li>Provider charges typically 0.5%-1.5% per year all-in, with platform + adviser layers</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">When QROPS still makes sense</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Three narrow cases where QROPS still wins:
          </p>
          <ul className="mt-3 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Gibraltar resident (Cat 2 / HEPSS / ordinary).</strong> Gibraltar QROPS in Gibraltar = same-country residence = no 25% charge. Gibraltar&apos;s tax position on pension withdrawals (a flat 2.5% if structured correctly) makes this potentially very attractive for HNW Cat 2 holders.</li>
            <li><strong>Non-EEA destinations.</strong> If you&apos;re moving outside Europe (Australia, New Zealand, US, etc.), the country-match rule still applies but the maths and the broader retirement planning can favour QROPS in some scenarios. Out of scope for this Iberia-focused page.</li>
            <li><strong>Specific employer/public-service exemptions.</strong> Some defined-benefit transfers via employer arrangements retain QROPS exemptions even cross-border. Niche; check with the scheme.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">The country-by-country answer</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered">
              <CardBody>
                <Badge tone="warm" uppercase>Spain</Badge>
                <p className="mt-3 text-[14.5px] text-ink/90">
                  <strong>Default: International SIPP.</strong> QROPS market in Spain is tiny;
                  Malta QROPS triggers the 25% charge post-Oct 2024. Beckham Law can shield
                  non-Spanish-source income, including potentially UK pension income — talk to a
                  regulated cross-border adviser. Wealth tax (Patrimonio) may apply to the
                  pension value depending on region and balance — see the{' '}
                  <Link href="/spain/patrimonio" className="text-warm underline-offset-2 hover:underline">Patrimonio deep dive</Link>.
                </p>
              </CardBody>
            </Card>
            <Card variant="bordered">
              <CardBody>
                <Badge tone="sea" uppercase>Portugal</Badge>
                <p className="mt-3 text-[14.5px] text-ink/90">
                  <strong>Default: International SIPP.</strong> Same reasoning — Portuguese QROPS
                  market is small, Malta QROPS now triggers the charge. IFICI (NHR 2.0) does NOT
                  shield pension income, so pension withdrawals are taxed at standard Portuguese
                  IRS rates. Standard rates climb to 48% above €83,696/yr — pension drawdown
                  sequencing matters more in Portugal than it used to under the old NHR.
                </p>
              </CardBody>
            </Card>
            <Card variant="bordered">
              <CardBody>
                <Badge tone="gibraltar" uppercase>Gibraltar</Badge>
                <p className="mt-3 text-[14.5px] text-ink/90">
                  <strong>QROPS or SIPP both work.</strong> Gibraltar QROPS for Gibraltar
                  residents avoids the 25% charge and benefits from local pension tax efficiency.
                  For Cat 2 holders, this often beats SIPP on net retirement income. The
                  Gibraltar QROPS market is mature — multiple providers, well-understood by UK
                  advisers familiar with the Rock.
                </p>
              </CardBody>
            </Card>
            <Card variant="bordered">
              <CardBody>
                <Badge tone="neutral" uppercase>Frontier workers</Badge>
                <p className="mt-3 text-[14.5px] text-ink/90">
                  <strong>Default: International SIPP.</strong> Spain-side residence breaks the
                  Gibraltar QROPS exemption (you&apos;re not resident in Gibraltar). Unless you
                  shift to full Gibraltar Cat 2 residency, SIPP is the answer.
                </p>
              </CardBody>
            </Card>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Mistakes that cost the most</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Transferring to Malta QROPS post-30-October-2024 without checking residency.</strong> Triggers 25% on the whole transfer value. A £400k pension becomes £300k overnight.</li>
            <li><strong>Drawing a flexible UK pension before becoming non-UK-resident.</strong> Triggers the MPAA, reducing your annual pension contribution allowance permanently. Sequence the move before any drawdown.</li>
            <li><strong>Forgetting UK government pension special treatment.</strong> NHS, civil service, military, certain teachers&apos; pensions stay UK-taxed under Article 17 of the UK-Spain DTA / Article 19 of the UK-Portugal DTA. Don&apos;t accidentally re-route those.</li>
            <li><strong>Buying a QROPS just before moving to qualify for the old EEA exemption.</strong> The rule change was 30 October 2024. Anti-forestalling provisions catch transfers initiated in anticipation of the new rules.</li>
            <li><strong>Assuming Beckham Law shields pension income automatically.</strong> Pension structuring inside Beckham Law works but requires deliberate setup. Default treatment isn&apos;t automatic.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>

          <div className="mt-12 rounded-card border border-border bg-surface p-6 text-sm">
            <div className="font-semibold text-ink">Primary sources</div>
            <ul className="mt-2 space-y-1 text-muted">
              <li><a href="https://www.gov.uk/guidance/transferring-your-pension" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-ink hover:underline">gov.uk · Transferring your UK pension overseas</a></li>
              <li><a href="https://www.gov.uk/government/publications/list-of-recognised-overseas-pension-schemes-notifications" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-ink hover:underline">HMRC · QROPS list (recognised overseas pension schemes)</a></li>
              <li><a href="https://www.gov.uk/government/publications/changes-to-the-overseas-pension-transfer-charge" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-ink hover:underline">HMRC · Changes to the overseas pension transfer charge (Oct 2024)</a></li>
            </ul>
            <p className="mt-3 text-xs text-muted">
              This page is educational content and not regulated pension advice for your
              specific situation. Cross-border pension structuring decisions should be made
              with an FCA-regulated adviser who holds the relevant pension-transfer
              authorisation.
            </p>
          </div>
        </div>
      </section>

      <RelatedResources
        tone="surface"
        heading="Where to go from here"
        items={[
          { kind: 'Calculator', href: '/calculators/pension-transfer', label: 'Pension transfer estimator', blurb: 'Rough numbers on Spain/Portugal/Gibraltar pension tax positioning.' },
          { kind: 'Deep dive', href: '/uk-statutory-residence-test', label: 'UK Statutory Residence Test', blurb: 'Get your UK non-residence position right before any pension structuring.' },
          { kind: 'Deep dive', href: '/spain/tax-residency', label: 'Spain tax residency for British movers', blurb: 'Centre-of-vital-interests test, treaty tiebreakers, Beckham Law sequencing.' },
          { kind: 'Deep dive', href: '/portugal/tax', label: 'Portuguese tax: IFICI explained', blurb: 'Why IFICI doesn\'t shield pension income (and what does).' },
          { kind: 'Deep dive', href: '/spain/patrimonio', label: 'Spain Patrimonio (wealth tax)', blurb: 'Pension values can fall inside Patrimonio depending on region — pre-move planning matters.' },
          { kind: 'Reference', href: '/thresholds', label: '2026 thresholds', blurb: 'UK 2026/27 tax bands, Iberian visa income, all on one page.' },
        ]}
      />
    </article>
  );
}
