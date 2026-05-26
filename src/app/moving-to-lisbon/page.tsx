import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Moving to Lisbon from the UK in 2026: Cost, Areas, Tax, Schools';
const DESC =
  'Practical 2026 guide to moving from the UK to Lisbon. Real rental costs post the 2022-2024 rent surge, neighbourhoods (Príncipe Real, Estrela, Campo de Ourique, Parque das Nações, Cascais commute), IFICI eligibility, British-curriculum school options including St Julian\'s, the D7/D8 visa reality. Sourced for British movers.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/moving-to-lisbon' },
  openGraph: { url: '/moving-to-lisbon', title: TITLE, description: DESC },
  keywords: [
    'moving to Lisbon from UK',
    'living in Lisbon British expat',
    'Lisbon cost of living 2026',
    'Lisbon rents 2026',
    'St Julian\'s Carcavelos',
    'Príncipe Real Lisbon',
    'Lisbon British school',
  ],
};

const FAQS = [
  {
    q: 'What\'s rent in Lisbon in 2026?',
    a: 'After the 2022-2024 surge, central Lisbon now matches central Madrid. A one-bedroom in Príncipe Real, Estrela or Campo de Ourique runs €1,400-€2,200/month. A two-bed family flat €1,800-€3,000/month. The further suburbs (Telheiras, Carnide) and Cascais line (Carcavelos, Estoril, Cascais town) are cheaper by 10-25%. Porto remains materially cheaper than Lisbon (~30-35% lower for equivalent).',
  },
  {
    q: 'Is Lisbon still cheap for British movers in 2026?',
    a: 'Less than it used to be. Lisbon rents rose 40-60% from 2020 to 2025 driven by digital-nomad demand and remote-worker influx. In 2026 Lisbon city is broadly equivalent to Madrid on rent and roughly 10-15% cheaper than London. Day-to-day costs (groceries, eating out, public transport) are still meaningfully lower than UK — overall cost of living for a typical British family is roughly 25-35% below equivalent UK city living, with most of the saving coming from food and lifestyle rather than housing.',
  },
  {
    q: 'Can I qualify for IFICI in Lisbon?',
    a: 'Depends on your work activity, not your city. IFICI (NHR 2.0) requires you to be in a qualifying activity — scientific research, certified tech startup, highly qualified roles in companies with >50% exports, designated priority sectors. Lisbon has a denser concentration of qualifying employers than anywhere else in Portugal (tech hub, startup scene). If you work in a non-qualifying field (general marketing, sales, consulting), IFICI doesn\'t help wherever you live. The IRS Jovem under-35 regime is the alternative.',
  },
  {
    q: 'Where do British families typically live around Lisbon?',
    a: 'Most British families live outside central Lisbon — either in Estrela / Campo de Ourique for city-centre family vibe, or along the Cascais train line in Carcavelos / Parede / Estoril / Cascais for beach lifestyle + St Julian\'s school access. The Cascais line takes 25-40 minutes into central Lisbon and is the dominant commute route for the British family demographic. Central Lisbon (Príncipe Real, Chiado) is more single/couple territory.',
  },
  {
    q: 'How does the Lisbon-area school market compare to Costa del Sol?',
    a: 'Both are well-developed. Lisbon has 36 international schools, with St Julian\'s (Carcavelos) as the elite British-tradition option and St Dominic\'s as the leading IB school. Fee ranges €13,000-€21,000/year for senior schools. Costa del Sol has more total British schools (Sotogrande, Marbella) but fewer at the very top tier. Application lead times are similar (12+ months for top schools). See the Spain and Portugal school deep dives for the detailed comparison.',
  },
  {
    q: 'Do I need a car to live in Lisbon?',
    a: 'In central Lisbon (Príncipe Real, Chiado, Avenida, Estrela, Alfama, Campo de Ourique): no — the metro, trams and buses cover almost everything. In the Cascais-line suburbs: optional — you can live car-free if you commit to the train timetable, but most families have one car for the weekend / school flexibility. In the Sintra-line or Cascais-deeper suburbs (Quinta da Marinha, Birre): car becomes necessary.',
  },
];

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: TITLE, description: DESC,
    datePublished: '2026-05-25', dateModified: '2026-05-25',
    author: { '@type': 'Person', '@id': `${SITE.url}/about#dominic-roworth`, name: 'Dominic Roworth', url: `${SITE.url}/author/dominic-roworth`, image: `${SITE.url}/dominic-roworth.jpg` },
    publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/moving-to-lisbon`,
    about: { '@type': 'Place', name: 'Lisbon, Portugal', address: { '@type': 'PostalAddress', addressCountry: 'PT', addressRegion: 'Lisboa' } },
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Portugal', item: `${SITE.url}/portugal` },
      { '@type': 'ListItem', position: 3, name: 'Moving to Lisbon', item: `${SITE.url}/moving-to-lisbon` },
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
            <Link href="/portugal" className="hover:text-ink underline-offset-2 hover:underline">Portugal</Link>
            <span aria-hidden>›</span>
            <span className="text-ink">Moving to Lisbon</span>
          </nav>

          <Badge tone="sea" uppercase>🇵🇹 Lisbon · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            Moving to Lisbon from the UK in 2026
          </h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">
            Lisbon went from European bargain to Madrid-equivalent in five years. It&apos;s
            still the densest tech-and-startup ecosystem in Iberia, still has the best
            English-language professional services market outside London, still gets 290 sun
            days a year — but the 40-60% rent surge from 2020-2025 changed the maths.
            This is the honest 2026 picture: real rental ranges, neighbourhood positioning,
            who IFICI actually works for, and how the Cascais-line British school cluster
            shapes family decisions.
          </p>

          <div className="mt-6 flex items-center gap-3 text-xs text-faint">
            <span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span>
            <span aria-hidden>·</span>
            <span>Reviewed 25 May 2026</span>
            <span aria-hidden>·</span>
            <span>2026 figures</span>
          </div>

          <Card variant="bordered" className="mt-8">
            <CardBody>
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">At a glance</div>
              <ul className="mt-2 grid gap-1.5 text-[15px] text-ink/90 sm:grid-cols-2">
                <li><strong>Country:</strong> Portugal — 5-year EU citizenship route</li>
                <li><strong>Population:</strong> 545,000 (metro ~2.9m)</li>
                <li><strong>Airport:</strong> LIS — 10+ daily UK flights</li>
                <li><strong>Climate:</strong> 17°C avg, 290 sun days</li>
                <li><strong>1-bed central rent:</strong> €1,400-€2,200</li>
                <li><strong>3-bed family rent:</strong> €1,800-€3,500</li>
                <li><strong>International schools:</strong> 36 in Greater Lisbon</li>
                <li><strong>Best fit:</strong> Remote workers, IFICI-eligible, families wanting English-first</li>
              </ul>
            </CardBody>
          </Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Why British movers choose Lisbon</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Lisbon&apos;s draw in 2026 is the combination of climate, English fluency in
            professional life, the 5-year route to Portuguese (and therefore EU) citizenship,
            and the IFICI tax regime for those who qualify. It&apos;s also the only Iberian
            capital where English-speaking professional and social life is genuinely
            sustainable from day one — Madrid and Barcelona work hard at this; Lisbon does it
            naturally.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            What changed: the original NHR scheme that brought a wave of British retirees and
            FIRE movers (2009-2024) closed to new applicants end of 2024. IFICI (NHR 2.0) is
            narrower — only certain activities qualify. Pension income no longer gets
            preferential treatment. For UK retirees this means Portugal is now a lifestyle
            choice rather than a tax-saver; the actual after-tax position vs Spain or the UK
            is comparable rather than dominant. For under-35s, the revised IRS Jovem regime
            (100% Year-1 exemption capped at €29,542) is materially stronger than IFICI for
            non-qualifying activities.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Cost of living in 2026</h2>
          <div className="mt-4 overflow-hidden rounded-card border border-border">
            <table className="w-full text-left text-[14.5px]">
              <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted">
                <tr><th className="px-4 py-3">Category</th><th className="px-4 py-3">Couple</th><th className="px-4 py-3">Family of 4</th></tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                <tr><td className="px-4 py-3 font-semibold text-ink">Rent (2-3 bed central)</td><td className="px-4 py-3 text-ink/85">€1,800-€2,800</td><td className="px-4 py-3 text-ink/85">€2,200-€4,000</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Utilities + internet</td><td className="px-4 py-3 text-ink/85">€130-€180</td><td className="px-4 py-3 text-ink/85">€170-€260</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Groceries</td><td className="px-4 py-3 text-ink/85">€350-€550</td><td className="px-4 py-3 text-ink/85">€650-€950</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Eating out</td><td className="px-4 py-3 text-ink/85">€200-€400</td><td className="px-4 py-3 text-ink/85">€350-€650</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Health insurance top-up</td><td className="px-4 py-3 text-ink/85">€80-€160</td><td className="px-4 py-3 text-ink/85">€160-€320</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">School fees (per child)</td><td className="px-4 py-3 text-ink/85">—</td><td className="px-4 py-3 text-ink/85">€1,100-€1,800/mo</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Transport (1 car + transit)</td><td className="px-4 py-3 text-ink/85">€120-€280</td><td className="px-4 py-3 text-ink/85">€180-€420</td></tr>
                <tr className="bg-surface"><td className="px-4 py-3 font-bold text-ink">Indicative monthly total</td><td className="px-4 py-3 font-bold text-ink">€2,700-€4,400</td><td className="px-4 py-3 font-bold text-ink">€5,000-€9,200</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Neighbourhoods worth knowing</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered"><CardBody>
              <div className="font-semibold text-ink">Príncipe Real</div>
              <p className="mt-2 text-[14.5px] text-ink/85">Lisbon&apos;s most-internationalised hipster-luxury quarter. Cafés, design shops, walkable, dense. Best for working-age remote workers and couples. Premium pricing — €2,000-€3,500 for 2-bed.</p>
            </CardBody></Card>
            <Card variant="bordered"><CardBody>
              <div className="font-semibold text-ink">Estrela / Lapa</div>
              <p className="mt-2 text-[14.5px] text-ink/85">Old-money family residential. Embassy district, leafy, Estrela Basilica/Park. Strong British family presence. Premium — €2,500-€4,500 for 3-bed.</p>
            </CardBody></Card>
            <Card variant="bordered"><CardBody>
              <div className="font-semibold text-ink">Campo de Ourique</div>
              <p className="mt-2 text-[14.5px] text-ink/85">Village-feel residential west of the centre. Local markets, low traffic, families. Less premium than Estrela. €1,800-€3,000 for 2-3 bed.</p>
            </CardBody></Card>
            <Card variant="bordered"><CardBody>
              <div className="font-semibold text-ink">Parque das Nações</div>
              <p className="mt-2 text-[14.5px] text-ink/85">Modern post-Expo waterfront. Family-friendly, river views, the Vasco da Gama mall. International school presence. Less &ldquo;old Lisbon&rdquo; charm.</p>
            </CardBody></Card>
            <Card variant="bordered"><CardBody>
              <div className="font-semibold text-ink">Cascais-line: Carcavelos / Parede / Estoril / Cascais</div>
              <p className="mt-2 text-[14.5px] text-ink/85">The default British-family corridor. 25-40 min into central Lisbon by train, beaches, St Julian&apos;s + St Dominic&apos;s school catchment. €1,400-€3,000 for family rentals depending on town.</p>
            </CardBody></Card>
            <Card variant="bordered"><CardBody>
              <div className="font-semibold text-ink">Avoid for residency</div>
              <p className="mt-2 text-[14.5px] text-ink/85">Bairro Alto and central Alfama for short-term tourists. The Cais do Sodré nightlife area for short stays. Mafra/Loures further-out suburbs unless you have specific reason.</p>
            </CardBody></Card>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Tax, visa and school positioning</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>Tax:</strong> Standard Portuguese IRS rates 13%-48%. IFICI flat 20% if your
            activity qualifies — see <Link href="/portugal/tax" className="text-warm underline-offset-2 hover:underline">/portugal/tax</Link>.
            IRS Jovem for under-35s at 100%/75%/50%/25% taper over 10 years — see{' '}
            <Link href="/portugal/irs-jovem" className="text-warm underline-offset-2 hover:underline">/portugal/irs-jovem</Link>. No
            wealth tax, no Modelo 720 equivalent — a real advantage over Spain for HNW movers.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>Visa:</strong> D7 €920/mo passive income, D8 €3,680/mo + €11,040 savings.
            Lisbon&apos;s remote-worker demand pushed D8 applications hard 2022-2025; AIMA
            backlogs were significant but improving in 2026. See{' '}
            <Link href="/portugal/visa-guide" className="text-warm underline-offset-2 hover:underline">Portugal visa guide</Link>.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>Schools:</strong> 36 international schools in Greater Lisbon. St Julian&apos;s
            (Carcavelos) is the dominant British-tradition school; St Dominic&apos;s the
            leading IB; BSL the newer English-curriculum option. Application 12+ months ahead
            for elite Year 7 and Year 12 entry. Full school detail at{' '}
            <Link href="/portugal/schools" className="text-warm underline-offset-2 hover:underline">/portugal/schools</Link>.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Common mistakes British movers to Lisbon make</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Renting blind from the UK at &ldquo;cheap Lisbon&rdquo; expectations.</strong> 2020 prices are gone. Budget at 2026 rates from day one.</li>
            <li><strong>Assuming IFICI works for every job.</strong> Lots of British remote workers expect IFICI to apply automatically — it doesn&apos;t. Activity must qualify.</li>
            <li><strong>Sleeping on the Cascais-line.</strong> First-time movers default to central Lisbon and then realise the family-school catchment is on the Cascais line.</li>
            <li><strong>Underestimating winter heating.</strong> Older Lisbon apartments are poorly insulated. Budget €120-€220/month for electric heating Dec-Feb.</li>
            <li><strong>Forgetting NIF + bank account before the visa.</strong> Consulates strongly prefer applicants with both already in place. See <Link href="/portugal/nif" className="text-warm underline-offset-2 hover:underline">/portugal/nif</Link>.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>
        </div>
      </section>

      <RelatedResources tone="surface" heading="Keep planning your Lisbon move" items={[
        { kind: 'Pillar', href: '/portugal', label: 'Move to Portugal from the UK', blurb: 'The full Portugal topic cluster: D7/D8, IFICI, IRS, banking, life-admin.' },
        { kind: 'Deep dive', href: '/portugal/tax', label: 'Portuguese tax: IFICI / NHR 2.0', blurb: 'Who qualifies and who doesn\'t — critical Lisbon planning decision.' },
        { kind: 'Deep dive', href: '/portugal/schools', label: 'Schools in Portugal — St Julian\'s and beyond', blurb: 'The 36 international schools in Greater Lisbon, fee ranges by phase.' },
        { kind: 'Compare', href: '/spain-vs-portugal', label: 'Spain vs Portugal compared', blurb: 'How Lisbon stacks up against Madrid, Málaga, Valencia.' },
        { kind: 'Calculator', href: '/calculators/cost-of-living', label: 'UK city vs Lisbon comparator', blurb: 'Plug your UK city — see the real 2026 monthly differential.' },
        { kind: 'Playbook', href: '/playbook/portugal', label: 'The Portugal Playbook · £397', blurb: 'Step-by-step Lisbon move plan with vetted contabilista intros.' },
      ]} />
    </article>
  );
}
