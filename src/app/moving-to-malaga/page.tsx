import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Moving to Málaga from the UK in 2026: Cost, Areas, Schools, Tax';
const DESC =
  'Practical 2026 guide to moving from the UK to Málaga and the Costa del Sol. Real rental costs, neighbourhoods (Centro, El Limonar, Pedregalejo, Cerrado de Calderón), British school options, Andalucía wealth-tax advantage, the airport-to-everywhere reality. Sourced for British movers.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/moving-to-malaga' },
  openGraph: { url: '/moving-to-malaga', title: TITLE, description: DESC },
  keywords: [
    'moving to Malaga from UK',
    'living in Malaga British expat',
    'Malaga cost of living 2026',
    'Malaga British schools',
    'Costa del Sol British expat',
    'Andalucia wealth tax Madrid',
    'moving to Costa del Sol',
  ],
};

const FAQS = [
  {
    q: 'What\'s rent in Málaga in 2026?',
    a: 'For a one-bedroom in central Málaga, expect €900-€1,400/month. A two-bed family flat in El Limonar or Pedregalejo runs €1,400-€2,200/month. A three-bed villa in Cerrado de Calderón or Limonar can be €2,500-€4,500/month. Rental supply tightened materially 2023-2025 driven by digital-nomad demand; budget at the higher end of these ranges for fast-moving British family rentals.',
  },
  {
    q: 'Is Málaga a good choice for British families?',
    a: 'Yes for most family profiles. Strong British-school presence (BIC Marbella 45 minutes west; Sotogrande International 80 minutes west; English International College Marbella; several local British-curriculum primary schools), public-healthcare infrastructure is good, airport connectivity to UK is unmatched on the Spanish mainland (15+ daily flights to UK airports). Beach lifestyle plus city amenities — fewer compromises than smaller Costa del Sol towns.',
  },
  {
    q: 'Does Andalucía really have zero wealth tax?',
    a: 'Yes — effectively. Andalucía applies a 100% bonificación on the regional share of Patrimonio (wealth tax), meaning residents pay zero regional wealth tax. Above €3m of net worth the national Solidaridad surcharge applies (1.7% to 3.5% over the €700k allowance), but for the £700k-€3m net-worth band, Andalucía is genuinely wealth-tax-free. Inheritance tax (Sucesiones) is similarly favourable. This is one of the largest single-region tax advantages in Western Europe and a major draw for British HNW movers.',
  },
  {
    q: 'How is Málaga compared to Marbella?',
    a: 'Málaga is a real Spanish city — 575,000 residents, university, working population, year-round amenities, international airport, cultural depth. Marbella is a smaller resort town (140,000) with more British/Northern European expat density, more luxury services, more golf-and-beach lifestyle. For working-age British movers Málaga is usually better; for retirees and remote-workers who prioritise English-speaking ease, Marbella has an edge. The two are 50 minutes apart — many families end up in one and commute to the other regularly.',
  },
  {
    q: 'How good is English coverage in Málaga?',
    a: 'Better than most Spanish cities but not at Marbella levels. The tourist core (Calle Larios, the port) operates in English fluently; the residential neighbourhoods (Pedregalejo, El Palo, Teatinos) are largely Spanish-only. Spanish public services (Hacienda, padrón, Seguridad Social) operate in Spanish only. Expect to need conversational Spanish within 12-18 months for genuine integration; survival English works for the first months.',
  },
  {
    q: 'What\'s the best Málaga neighbourhood for British remote workers?',
    a: 'El Limonar and Pedregalejo for the older-feel coastal residential vibe with cafés and beach access. Centro (specifically around Plaza de la Merced or Soho-Málaga) for urban density and walkable everything. Cerrado de Calderón for upscale residential with great schools nearby. Teatinos for university-area cheaper rents but further from beach/centre. Avoid the more touristy concentrations (Malagueta seafront for short-term) — they\'re for short stays, not residency.',
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
    author: { '@type': 'Person', '@id': `${SITE.url}/about#dominic-roworth`, name: 'Dominic Roworth', url: `${SITE.url}/author/dominic-roworth`, image: `${SITE.url}/dominic-roworth.jpg` },
    publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/moving-to-malaga`,
    about: { '@type': 'Place', name: 'Málaga, Spain', address: { '@type': 'PostalAddress', addressCountry: 'ES', addressRegion: 'Andalucía' } },
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
      { '@type': 'ListItem', position: 2, name: 'Spain', item: `${SITE.url}/spain` },
      { '@type': 'ListItem', position: 3, name: 'Moving to Málaga', item: `${SITE.url}/moving-to-malaga` },
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
            <Link href="/spain" className="hover:text-ink underline-offset-2 hover:underline">Spain</Link>
            <span aria-hidden>›</span>
            <span className="text-ink">Moving to Málaga</span>
          </nav>

          <Badge tone="warm" uppercase>🇪🇸 Andalucía · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            Moving to Málaga from the UK in 2026
          </h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">
            Málaga is the closest thing the Costa del Sol has to a real city: 575,000 residents,
            the most-connected UK airport on the Spanish mainland, a serious cultural circuit,
            and Andalucía&apos;s zero-effective-wealth-tax positioning. For British movers it
            beats Marbella on most working-age criteria and beats Madrid on climate and
            UK-airport access. This is the 2026 sourced version — real rent ranges,
            neighbourhood-by-neighbourhood guidance, and the tax + visa positioning that makes
            Andalucía the strongest Spanish region for HNW British residents below €3m.
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
                <li><strong>Region:</strong> Andalucía (zero regional Patrimonio)</li>
                <li><strong>Population:</strong> 575,000 (metro ~970,000)</li>
                <li><strong>Airport:</strong> AGP — 15+ daily UK flights</li>
                <li><strong>Climate:</strong> 19°C annual avg, ~300 sun days</li>
                <li><strong>1-bed central rent:</strong> €900-€1,400</li>
                <li><strong>3-bed family rent:</strong> €1,500-€2,500</li>
                <li><strong>British school catchment:</strong> 30-90 min</li>
                <li><strong>Best fit:</strong> Working-age, HNW under €3m, families</li>
              </ul>
            </CardBody>
          </Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Why British movers choose Málaga</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Three forces drive British relocation to Málaga in 2026. First, the tax position:
            Andalucía&apos;s 100% Patrimonio bonificación and the favourable Sucesiones regime
            make it one of the cheapest Spanish regions for HNW residency below €3m of net
            worth — see the <Link href="/spain/patrimonio" className="text-warm underline-offset-2 hover:underline">Patrimonio deep dive</Link>{' '}
            for the full mechanics. Second, airport connectivity: AGP runs 15+ daily UK
            flights to Heathrow, Gatwick, Manchester, Birmingham, Edinburgh, Bristol, Stansted
            and others — unmatched by any other Spanish destination. Third, the lifestyle
            balance: it&apos;s a working Spanish city with real culture (museums, opera,
            university) rather than a sleepy expat enclave, but the Costa del Sol beaches and
            British infrastructure are 15-60 minutes away.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            The decade since 2015 has materially changed Málaga. Tech hub momentum
            (Google&apos;s engineering office, Vodafone&apos;s European hub, multiple
            cybersecurity firms) brought remote-worker and DNV demand. Rents rose 40-60% in the
            same period. The Soho-Málaga creative quarter, the Centre Pompidou outpost, and
            the airport expansion programme cemented its transition from &ldquo;Costa del Sol
            transit point&rdquo; to genuine European mid-size destination.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Cost of living in 2026</h2>
          <div className="mt-4 overflow-hidden rounded-card border border-border">
            <table className="w-full text-left text-[14.5px]">
              <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Couple</th>
                  <th className="px-4 py-3">Family of 4</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                <tr><td className="px-4 py-3 font-semibold text-ink">Rent (2-3 bed)</td><td className="px-4 py-3 text-ink/85">€1,400-€2,200</td><td className="px-4 py-3 text-ink/85">€1,800-€3,500</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Utilities + internet</td><td className="px-4 py-3 text-ink/85">€140-€200</td><td className="px-4 py-3 text-ink/85">€180-€280</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Groceries</td><td className="px-4 py-3 text-ink/85">€400-€600</td><td className="px-4 py-3 text-ink/85">€700-€1,000</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Eating out (moderate)</td><td className="px-4 py-3 text-ink/85">€250-€450</td><td className="px-4 py-3 text-ink/85">€400-€700</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Health insurance (private top-up)</td><td className="px-4 py-3 text-ink/85">€100-€200</td><td className="px-4 py-3 text-ink/85">€200-€400</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">School fees (per child, British)</td><td className="px-4 py-3 text-ink/85">—</td><td className="px-4 py-3 text-ink/85">€700-€1,800/mo</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Transport (car + 1 metro card)</td><td className="px-4 py-3 text-ink/85">€150-€300</td><td className="px-4 py-3 text-ink/85">€200-€450</td></tr>
                <tr className="bg-surface"><td className="px-4 py-3 font-bold text-ink">Indicative monthly total</td><td className="px-4 py-3 font-bold text-ink">€2,600-€4,200</td><td className="px-4 py-3 font-bold text-ink">€4,500-€8,500</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[15px] text-muted">
            For a worked UK-to-Málaga comparison plug your specific numbers into the{' '}
            <Link href="/calculators/cost-of-living" className="text-warm underline-offset-2 hover:underline">cost-of-living comparator</Link>.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Neighbourhoods worth knowing</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered"><CardBody>
              <div className="font-semibold text-ink">Centro (Soho-Málaga, Plaza de la Merced)</div>
              <p className="mt-2 text-[14.5px] text-ink/85">Walkable everything, dense café culture, cultural circuit (Pompidou, Museo Picasso, theatres). Best for working-age singles and couples without children. Rents €1,000-€1,600 for 1-bed, €1,400-€2,400 for 2-bed.</p>
            </CardBody></Card>
            <Card variant="bordered"><CardBody>
              <div className="font-semibold text-ink">El Limonar</div>
              <p className="mt-2 text-[14.5px] text-ink/85">Coastal residential, classic Málaga old-money area. Family-friendly, near international schools, walkable to centre. Rents €1,800-€3,000 for 2-3 bed apartments; €2,500-€4,500 for villas.</p>
            </CardBody></Card>
            <Card variant="bordered"><CardBody>
              <div className="font-semibold text-ink">Pedregalejo & El Palo</div>
              <p className="mt-2 text-[14.5px] text-ink/85">Beach-village vibe within Málaga. Older fishing-village character merging into a residential strip. Strong eating culture (chiringuitos), real Málaga-resident feel. Rents broadly in line with El Limonar.</p>
            </CardBody></Card>
            <Card variant="bordered"><CardBody>
              <div className="font-semibold text-ink">Cerrado de Calderón</div>
              <p className="mt-2 text-[14.5px] text-ink/85">Upscale residential hillside area with views, large houses, families, and the British International College nearby. Premium pricing — villas €3,500-€7,000+/month, houses €2,500-€5,000.</p>
            </CardBody></Card>
            <Card variant="bordered"><CardBody>
              <div className="font-semibold text-ink">Teatinos</div>
              <p className="mt-2 text-[14.5px] text-ink/85">University quarter, modern, value-for-money rents, far from beach and centre. Good for budget-conscious singles/students; less appealing for families seeking British-school proximity.</p>
            </CardBody></Card>
            <Card variant="bordered"><CardBody>
              <div className="font-semibold text-ink">Avoid for residency</div>
              <p className="mt-2 text-[14.5px] text-ink/85">Malagueta seafront (touristy, short-term-let dominated), the immediate airport surroundings (Churriana — noisy), and the deep south industrial corridor. Fine for visits, not for living.</p>
            </CardBody></Card>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Schools, healthcare, transport</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>Schools:</strong> British-curriculum options sit mostly outside Málaga
            itself — BIC Marbella (50 min west), Sotogrande International (80 min west), English
            International College Marbella, Aloha College Estepona. In Málaga proper there are
            several smaller English-curriculum schools and the international-section
            concertados. Many families end up driving children to Marbella-area schools daily,
            or choosing a Spanish public/concertado school with bilingual programme. See the{' '}
            <Link href="/spain/schools" className="text-warm underline-offset-2 hover:underline">Spain schools deep dive</Link>{' '}
            for the full NABSS network.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>Healthcare:</strong> Málaga&apos;s public SNS network is good — Hospital
            Universitario Regional and Hospital Clínico Virgen de la Victoria are the major
            referral centres, with strong specialist depth. Private hospitals (Quirónsalud
            Málaga, Vithas Málaga, Hospital Vithas Xanit Benalmádena) cover the
            English-speaking private market well. See <Link href="/spain/healthcare" className="text-warm underline-offset-2 hover:underline">Spain healthcare</Link>.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>Transport:</strong> AGP airport is 15 minutes from Málaga centre by train
            or car. The Cercanías commuter rail connects the city to the coast (Torremolinos,
            Benalmádena, Fuengirola) in 30-50 minutes. AVE high-speed rail to Madrid in 2h35.
            Within the city, the metro (two lines) plus EMT buses cover most needs; many
            British families end up keeping one car for school runs and Costa del Sol day trips.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Tax and visa positioning</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Málaga&apos;s headline tax position comes from being in Andalucía:
          </p>
          <ul className="mt-3 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Patrimonio (regional wealth tax):</strong> 100% bonificación = zero. The major HNW draw below €3m net worth.</li>
            <li><strong>Solidaridad (national surcharge):</strong> applies above €3m at the standard national rates — Andalucía residency doesn&apos;t help here.</li>
            <li><strong>Sucesiones (inheritance tax):</strong> effectively zero for spouses/children/parents after the 2023 reform raising the €1m allowance per Group I/II beneficiary.</li>
            <li><strong>IRPF (income tax):</strong> Andalucía applies a small regional surcharge on the top bracket compared to Madrid, but the gap is modest in practical terms.</li>
            <li><strong>Beckham Law:</strong> standard election applies — 24% flat on Spanish-source income up to €600k for 6 years. Combine with autónomo registration if DNV-eligible. See the <Link href="/spain/tax-residency/beckham-law" className="text-warm underline-offset-2 hover:underline">Beckham deep dive</Link>.</li>
          </ul>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Visa-wise Málaga isn&apos;t different from anywhere else in Spain — NLV / DNV /
            work / family routes all apply on the same income thresholds. The{' '}
            <Link href="/spain/visa-guide" className="text-warm underline-offset-2 hover:underline">Spain visa guide</Link>{' '}
            walks through each.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Common mistakes British movers to Málaga make</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Underestimating summer.</strong> July-August inland Málaga regularly hits 38-42°C. Coastal areas moderate it but A/C is essential. Budget €100-€250/month in summer electricity.</li>
            <li><strong>Renting blind.</strong> Local rental practice is competitive and Spanish-language-dominant. Use a relocation agent or trusted asesor for first-year rental — saves €1,000+ in mistakes.</li>
            <li><strong>Assuming Marbella schools work without a car.</strong> The British school catchment is structurally west-coast. Without a car the school commute becomes unworkable.</li>
            <li><strong>Forgetting the AVE/Madrid factor.</strong> The 2h35 AVE makes Madrid weekend trips trivial. Many Málaga residents end up using Madrid for medical specialists, cultural events, business meetings. Plan for the AVE in your transport budget.</li>
            <li><strong>Skipping padrón registration in the first 30 days.</strong> Padrón is the catchment-priority key for public-school admission, healthcare registration and Convenio Especial eligibility 12 months later.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>
        </div>
      </section>

      <RelatedResources
        tone="surface"
        heading="Keep planning your Málaga move"
        items={[
          { kind: 'Pillar', href: '/spain', label: 'Move to Spain from the UK', blurb: 'The full Spain topic cluster: tax, visas, banking, residency, life-admin.' },
          { kind: 'Deep dive', href: '/spain/patrimonio', label: 'Spain Patrimonio by region', blurb: 'Why Andalucía is one of the best Spanish regions for HNW British movers below €3m.' },
          { kind: 'Deep dive', href: '/spain/schools', label: 'Schools in Spain — NABSS network', blurb: 'British-curriculum school options near Málaga and across the Costa del Sol.' },
          { kind: 'Compare', href: '/spain-vs-portugal', label: 'Spain vs Portugal compared', blurb: 'Where Andalucía wins, where the Algarve wins — for a different climate / lifestyle.' },
          { kind: 'Calculator', href: '/calculators/cost-of-living', label: 'UK city vs Málaga cost comparator', blurb: 'Plug your UK city — see the real monthly differential.' },
          { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Step-by-step move from UK to Andalucía with worked tax examples.' },
        ]}
      />
    </article>
  );
}
