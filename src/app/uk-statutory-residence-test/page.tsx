import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'UK Statutory Residence Test (SRT) for 2026: Plain-English Guide';
const DESC =
  'The UK Statutory Residence Test (SRT) decides whether HMRC treats you as UK tax resident. Sourced 2026 walkthrough: automatic overseas tests, automatic UK tests, the sufficient ties test, day-counting, split-year treatment. Get this wrong moving abroad and HMRC will treat you as UK resident for years you thought you\'d escaped.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/uk-statutory-residence-test' },
  openGraph: { url: '/uk-statutory-residence-test', title: TITLE, description: DESC },
  twitter: { title: TITLE, description: DESC },
  keywords: [
    'UK Statutory Residence Test',
    'SRT 2026',
    'UK tax residence',
    'split year treatment',
    '183 day rule UK',
    'sufficient ties test',
    'RDR3',
    'UK tax residency leaving UK',
    'automatic overseas test',
  ],
};

const FAQS = [
  {
    q: 'What\'s the simplest way to become UK non-resident in the year I move?',
    a: 'The cleanest path for most British movers leaving the UK is the third automatic overseas test (full-time work abroad): work overseas for the whole tax year with no significant break, spend fewer than 91 days in the UK in the tax year, and work in the UK for more than 3 hours on fewer than 31 days. If that doesn\'t apply, the next-simplest is the first automatic overseas test (fewer than 16 UK days) provided you were UK resident in any of the prior three tax years — which most movers are.',
  },
  {
    q: 'What counts as a UK "day" for SRT purposes?',
    a: 'A day where you\'re present in the UK at midnight (the end of the day). Arrival on a Friday afternoon and departure Saturday lunchtime = 1 UK day (the Friday midnight). The "transit day" exception removes days where you\'re in the UK only between two international flights and don\'t leave the airport for non-incidental reasons. Work days are counted separately under the "work in the UK on more than 3 hours" test.',
  },
  {
    q: 'Can I become non-resident partway through a tax year?',
    a: 'Yes, via split-year treatment. The UK tax year (6 April–5 April) is split into a UK part and an overseas part, with you taxed as UK-resident only for the UK part. Eight Cases qualify (RDR3 cases 1-8); the most common for movers are Case 1 (starting full-time work abroad), Case 3 (ceasing to have a UK home), and Case 8 (starting to have an overseas home). Each case has specific conditions; you must meet them all to qualify.',
  },
  {
    q: 'Do I still need to file a UK tax return after becoming non-resident?',
    a: 'For the year you leave: yes, including form SA109 (residence section) to claim non-residence. For years after: only if you have UK-source income (rental, UK pension, UK employment) or certain UK-situs gains. Notify HMRC via form P85 when leaving — this is procedural, not a substitute for the SRT analysis itself.',
  },
  {
    q: 'I have a UK home and family there. Am I automatically UK resident?',
    a: 'Not automatically — but the family tie and accommodation tie both count in the sufficient ties test, which kicks in if no automatic test applies. A leaver (UK resident in any of the prior 3 tax years) with both family and accommodation ties becomes UK resident on as few as 91 UK days. An arriver (not UK resident in any of the prior 3 tax years) needs all 4 ties and 121+ days. The ties stack with day count to determine residence.',
  },
  {
    q: 'I\'m moving to Spain mid-year. Does the Spanish 183-day rule conflict with the UK SRT?',
    a: 'They can produce overlap (both countries claim residence) or gap (neither claims). The UK-Spain Double Tax Treaty has tiebreaker rules in Article 4: permanent home → centre of vital interests → habitual abode → nationality. Most clean moves use UK split-year treatment for the leaving year plus Spanish standard residence rules — but the sequencing is sensitive. The Spain tax-residency deep dive walks through the 183-day rule from the Spanish side.',
  },
  {
    q: 'Does Beckham Law (Spain) affect my UK SRT position?',
    a: 'No. Beckham Law is a Spanish tax election that changes how Spain taxes your Spanish-source income. It has no effect on whether HMRC considers you UK resident. Your UK SRT analysis is independent. What it does affect: under Beckham Law you elect into being taxed only on Spanish-source income, and the UK-Spain DTA tiebreakers may treat you as Spain resident anyway — but the SRT itself is unchanged.',
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
    mainEntityOfPage: `${SITE.url}/uk-statutory-residence-test`,
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
      { '@type': 'ListItem', position: 2, name: 'UK Statutory Residence Test', item: `${SITE.url}/uk-statutory-residence-test` },
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
            <span className="text-ink">UK Statutory Residence Test</span>
          </nav>

          <Badge tone="warm" uppercase>UK side · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            The UK Statutory Residence Test (SRT), in plain English
          </h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">
            The SRT is the test HMRC uses to decide whether you&apos;re UK tax resident for a
            given tax year. Get the analysis wrong moving abroad and you can stay UK tax
            resident for years you thought you&apos;d escaped — paying UK rates on world income
            on top of whatever Spain, Portugal or Gibraltar charge you. This is the structured
            walkthrough: three automatic tests, the sufficient ties fallback, day counting, and
            split-year treatment.
          </p>

          <div className="mt-6 flex items-center gap-3 text-xs text-faint">
            <span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span>
            <span aria-hidden>·</span>
            <span>Reviewed 25 May 2026</span>
            <span aria-hidden>·</span>
            <span>UK 2025/26 + 2026/27 tax years</span>
          </div>

          <Card variant="bordered" className="mt-8">
            <CardBody>
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">The TL;DR</div>
              <p className="mt-2 text-[16.5px] leading-relaxed text-ink/90">
                The SRT runs in a strict order. Step 1: check the three <strong>automatic
                overseas tests</strong> — if you pass any, you&apos;re non-resident, full stop.
                Step 2: if not, check the four <strong>automatic UK tests</strong> — if you pass
                any, you&apos;re resident. Step 3: if neither, run the <strong>sufficient ties
                test</strong> — combining your UK days with the number of UK ties you have.
                Layer split-year treatment on top to handle the move year itself.
              </p>
            </CardBody>
          </Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Step 1: the three automatic overseas tests</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Pass any one of these and HMRC treats you as non-UK-resident automatically for the
            tax year. Most British movers planning a clean exit aim to satisfy one of these
            three.
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-card border border-border bg-surface p-5">
              <div className="font-semibold text-ink">First automatic overseas test (leaver)</div>
              <p className="mt-2 text-[15.5px] text-ink/85">
                You were UK resident for one or more of the three preceding tax years, AND you
                spend <strong>fewer than 16 days</strong> in the UK during the current tax year.
              </p>
            </div>
            <div className="rounded-card border border-border bg-surface p-5">
              <div className="font-semibold text-ink">Second automatic overseas test (arriver)</div>
              <p className="mt-2 text-[15.5px] text-ink/85">
                You were not UK resident in any of the three preceding tax years, AND you spend{' '}
                <strong>fewer than 46 days</strong> in the UK during the current tax year.
              </p>
            </div>
            <div className="rounded-card border border-border bg-surface p-5">
              <div className="font-semibold text-ink">Third automatic overseas test (full-time work abroad)</div>
              <p className="mt-2 text-[15.5px] text-ink/85">
                You work full-time overseas for the whole tax year with no significant break, AND
                you spend <strong>fewer than 91 days</strong> in the UK in the tax year, AND you
                work in the UK for more than 3 hours on <strong>fewer than 31 days</strong>. This
                is the most common route for working-age movers — but the &ldquo;no significant
                break&rdquo; rule (no 31+ consecutive days without 3+ hours of work or annual
                leave) is strict and trips many people.
              </p>
            </div>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Step 2: the four automatic UK tests</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            If you didn&apos;t pass an automatic overseas test, check these. Pass any one and
            you&apos;re automatically UK resident.
          </p>
          <ul className="mt-3 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>183-day test:</strong> you spend 183+ days in the UK in the tax year.</li>
            <li><strong>UK home test:</strong> you have a UK home for at least 91 consecutive days (with at least 30 of those falling within the tax year), AND you spend at least 30 days in that UK home during the tax year, AND there is no overseas home in which you spend at least 30 days during the relevant period.</li>
            <li><strong>Full-time UK work test:</strong> you work in the UK for 365 days with no significant break, AND more than 75% of working days are UK days (3+ hours), AND at least one UK workday falls in the tax year.</li>
            <li><strong>Death-in-UK test:</strong> niche — applies to those who die in the UK during the tax year having been UK resident.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Step 3: the sufficient ties test</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            If neither the automatic overseas nor automatic UK tests apply, the sufficient ties
            test combines your UK days with your UK ties to determine residence. The required
            number of ties depends on whether you&apos;re a leaver or an arriver and how many UK
            days you spend.
          </p>
          <div className="mt-5 overflow-hidden rounded-card border border-border">
            <table className="w-full text-left text-[14.5px]">
              <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted">
                <tr>
                  <th className="px-4 py-3">UK days in tax year</th>
                  <th className="px-4 py-3">Leaver (resident in any of prior 3 years)</th>
                  <th className="px-4 py-3">Arriver (not resident in any of prior 3 years)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                <tr><td className="px-4 py-3 font-semibold text-ink">Under 16</td><td className="px-4 py-3 text-ink/85">Auto non-resident (test 1)</td><td className="px-4 py-3 text-ink/85">Auto non-resident (test 2)</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">16-45</td><td className="px-4 py-3 text-ink/85">Resident if 4 ties</td><td className="px-4 py-3 text-ink/85">Auto non-resident</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">46-90</td><td className="px-4 py-3 text-ink/85">Resident if 3+ ties</td><td className="px-4 py-3 text-ink/85">Resident if 4 ties</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">91-120</td><td className="px-4 py-3 text-ink/85">Resident if 2+ ties</td><td className="px-4 py-3 text-ink/85">Resident if 3+ ties</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">121-182</td><td className="px-4 py-3 text-ink/85">Resident if 1+ tie</td><td className="px-4 py-3 text-ink/85">Resident if 2+ ties</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">183+</td><td className="px-4 py-3 text-ink/85">Auto UK resident</td><td className="px-4 py-3 text-ink/85">Auto UK resident</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="display mt-8 text-2xl font-semibold tracking-tight text-ink">The five UK ties</h3>
          <ul className="mt-3 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Family tie:</strong> spouse/civil partner/cohabitee or minor child who is UK resident in the tax year.</li>
            <li><strong>Accommodation tie:</strong> UK accommodation available for a continuous period of 91+ days, used at least once in the tax year.</li>
            <li><strong>Work tie:</strong> at least 40 days in the UK with more than 3 hours of work each.</li>
            <li><strong>90-day tie:</strong> spent more than 90 days in the UK in either of the previous two tax years.</li>
            <li><strong>Country tie (leavers only):</strong> the UK is the country in which you spend the most days in the tax year.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Split-year treatment: the move year itself</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            By default, you&apos;re either UK resident or non-resident for a whole tax year. Split-
            year treatment lets you treat part of the year as UK-resident and part as
            non-resident — which is what most British movers need for the year they actually
            leave. HMRC RDR3 lists eight Cases that qualify:
          </p>
          <ul className="mt-3 space-y-1 text-[15.5px] text-ink/85">
            <li><strong>Case 1:</strong> starting full-time work overseas</li>
            <li><strong>Case 2:</strong> accompanying partner starting full-time work overseas</li>
            <li><strong>Case 3:</strong> ceasing to have a UK home</li>
            <li><strong>Case 4:</strong> starting to have a home only overseas</li>
            <li><strong>Case 5:</strong> starting full-time UK work after a period overseas (arriver)</li>
            <li><strong>Case 6:</strong> ceasing full-time work overseas (arriver)</li>
            <li><strong>Case 7:</strong> partner ceasing full-time work overseas (arriver)</li>
            <li><strong>Case 8:</strong> starting to have a UK home (arriver)</li>
          </ul>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Each Case has detailed conditions — meet them all to qualify. The most common
            leaver Cases are 1 (start full-time overseas job) and 3 (cease having any UK home).
            Case 3 requires you to have no UK home at all from the split point onwards; selling
            or letting a UK property to non-family typically satisfies this, but keeping a UK
            property available for your own use does not.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Common British-mover mistakes</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Counting visit days as transit days.</strong> Transit only applies if you don&apos;t leave the airport for non-incidental purposes. A weekend in London while changing flights = full UK days.</li>
            <li><strong>Assuming the 183-day rule alone determines residence.</strong> The full SRT can make you UK resident on as few as 16 days if you&apos;re a leaver with all 5 ties.</li>
            <li><strong>Keeping a UK home &ldquo;just in case.&rdquo;</strong> The accommodation tie + family tie alone can hold you UK-resident on 91+ days. If you want clean non-residence, you typically need the home let to non-family on at least 91 consecutive days of unavailability to you.</li>
            <li><strong>Working from a UK hotel for 31+ days.</strong> Breaks the third automatic overseas test. Track every 3+ hour UK work day.</li>
            <li><strong>Forgetting the 90-day tie tail.</strong> The 90-day tie looks at the previous two tax years — your residence position can stay sticky for two years even after the move year.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>

          <div className="mt-12 rounded-card border border-border bg-surface p-6 text-sm">
            <div className="font-semibold text-ink">Primary sources</div>
            <ul className="mt-2 space-y-1 text-muted">
              <li><a href="https://www.gov.uk/government/publications/rdr3-statutory-residence-test-srt/guidance-note-for-statutory-residence-test-srt-rdr3" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-ink hover:underline">HMRC RDR3: Statutory Residence Test guidance note</a></li>
              <li><a href="https://www.gov.uk/tax-foreign-income/residence" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-ink hover:underline">gov.uk · Tax on foreign income — residence</a></li>
              <li><a href="https://www.gov.uk/government/publications/income-tax-leaving-the-uk-getting-your-tax-right-p85" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-ink hover:underline">HMRC Form P85 — leaving the UK</a></li>
            </ul>
          </div>
        </div>
      </section>

      <RelatedResources
        tone="surface"
        heading="Where to go from here"
        subheading="The SRT is the UK side. These pages cover the Iberia side and how the two systems interact."
        items={[
          { kind: 'Deep dive', href: '/spain/tax-residency', label: 'Spain tax residency for British movers', blurb: '183-day rule, centre-of-vital-interests, the Spanish side of the equation.' },
          { kind: 'Deep dive', href: '/portugal/tax', label: 'Portuguese tax: NHR 2.0 / IFICI', blurb: 'How Portuguese residency interacts with UK SRT in the move year.' },
          { kind: 'Calculator', href: '/calculators/residency-timeline', label: 'Residency timeline calculator', blurb: 'Map your move dates against UK SRT day counts and Iberian 183-day rules.' },
          { kind: 'Reference', href: '/thresholds', label: '2026 thresholds, sourced', blurb: 'UK 2026/27 tax bands and the Iberian income thresholds you\'ll meet on arrival.' },
          { kind: 'Compare', href: '/spain-vs-portugal', label: 'Spain vs Portugal compared', blurb: 'For movers weighing destination — tax, visa, citizenship, dimension by dimension.' },
          { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Worked examples of SRT + Beckham Law sequencing in the move year.' },
        ]}
      />
    </article>
  );
}
