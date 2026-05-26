import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Moving to Marbella from the UK in 2026: Cost, Areas, Schools, Tax';
const DESC =
  'Practical 2026 guide to moving from the UK to Marbella and the western Costa del Sol. Real rental costs, the Golden Mile vs Nueva Andalucía vs Elviria split, British-curriculum school options (BIC, EIC, Aloha, Sotogrande), Andalucía wealth-tax advantage, the HNW British community.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/moving-to-marbella' },
  openGraph: { url: '/moving-to-marbella', title: TITLE, description: DESC },
  keywords: ['moving to Marbella from UK', 'Marbella British expat', 'Marbella cost of living', 'BIC Marbella school', 'Golden Mile Marbella', 'Nueva Andalucía', 'Sotogrande British'],
};

const FAQS = [
  { q: 'Is Marbella affordable in 2026?', a: 'Not really — Marbella is the most expensive Costa del Sol town for housing. A 2-3 bed villa in Nueva Andalucía or Elviria runs €2,500-€5,000/month; Golden Mile or coastal positioning pushes that to €5,000-€15,000+/month. Apartments in Marbella town are €1,400-€2,500/month for 2-bed. Compare with Málaga 30 minutes east where the same money buys materially more, or Estepona 25 minutes west which is 20-30% cheaper.' },
  { q: 'Best Marbella areas for British families?', a: 'Nueva Andalucía (close to schools, golf, restaurants, residential rather than tourist), Elviria (quiet eastern Marbella, beach access, school commute), Guadalmina (between Marbella and Estepona — good schools, less expensive than central Marbella). The Golden Mile is HNW-only and largely empty mid-week. San Pedro de Alcántara is a real town centre option with better value.' },
  { q: 'What\'s the school landscape?', a: 'Excellent NABSS density. BIC Marbella, English International College, Aloha College (Estepona), Swans International, Laude San Pedro, plus Sotogrande International 35 min west. Fee ranges €8,000-€20,000+/year. Application 6-18 months ahead for popular intake years. See the full NABSS list at /spain/schools.' },
  { q: 'Why do so many Brits live around Marbella?', a: 'Three factors compound: the 320 sun days a year, the English-speaking infrastructure (medical, legal, banking, schools all available in English natively), and the Andalucía tax position (zero regional Patrimonio, near-zero Sucesiones for close family). The British community is dense enough that you can live almost entirely in English if you choose, though most movers gradually integrate Spanish into daily life.' },
  { q: 'Marbella vs Málaga — which is better?', a: 'Different products. Marbella is a smaller resort town (140k residents) with HNW expat density, English-default infrastructure, golf-and-beach lifestyle, no university, fewer year-round amenities. Málaga is a real Spanish city (575k) with culture, business community, AVE rail, international airport. For working-age remote workers Málaga is usually better; for retirees and HNW lifestyle buyers Marbella has the edge. The two are 50 minutes apart — many families end up using both.' },
  { q: 'Will I need a car in Marbella?', a: 'Yes — the Costa del Sol is car-dependent. Public transport (Avanza buses) covers main routes but slowly. School runs, supermarket trips, eating out at non-immediate-neighbourhood restaurants all require a car. Most British families have two — one each. Budget €150-€350/month for vehicle costs including insurance and fuel.' },
];

export default function Page() {
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: TITLE, description: DESC, datePublished: '2026-05-25', dateModified: '2026-05-25', author: { '@type': 'Person', '@id': `${SITE.url}/about#dominic-roworth`, name: 'Dominic Roworth', url: `${SITE.url}/author/dominic-roworth`, image: `${SITE.url}/dominic-roworth.jpg` }, publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url }, mainEntityOfPage: `${SITE.url}/moving-to-marbella`, about: { '@type': 'Place', name: 'Marbella, Spain' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url }, { '@type': 'ListItem', position: 2, name: 'Spain', item: `${SITE.url}/spain` }, { '@type': 'ListItem', position: 3, name: 'Moving to Marbella', item: `${SITE.url}/moving-to-marbella` }] };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink underline-offset-2 hover:underline">Home</Link><span aria-hidden>›</span>
            <Link href="/spain" className="hover:text-ink underline-offset-2 hover:underline">Spain</Link><span aria-hidden>›</span>
            <span className="text-ink">Moving to Marbella</span>
          </nav>
          <Badge tone="warm" uppercase>🇪🇸 Costa del Sol · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">Moving to Marbella from the UK in 2026</h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">Marbella is where the British end up when their priority list is English-speaking ease, 320 sun days, beach lifestyle and Andalucía&apos;s zero-effective-wealth-tax. It&apos;s not cheap — central Marbella and the Golden Mile rival London on cost — but the wider Costa del Sol corridor (Estepona, Sotogrande, San Pedro, Elviria) offers a HNW British expat ecosystem that&apos;s genuinely unique in Europe.</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-faint"><span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span><span aria-hidden>·</span><span>Reviewed 25 May 2026</span><span aria-hidden>·</span><span>2026 figures</span></div>

          <Card variant="bordered" className="mt-8"><CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">At a glance</div>
            <ul className="mt-2 grid gap-1.5 text-[15px] text-ink/90 sm:grid-cols-2">
              <li><strong>Region:</strong> Andalucía (zero regional Patrimonio)</li>
              <li><strong>Population:</strong> 140,000 (plus seasonal)</li>
              <li><strong>Nearest airport:</strong> AGP Málaga, 40-50 min east</li>
              <li><strong>Climate:</strong> 19°C avg, 320 sun days</li>
              <li><strong>2-3 bed apartment rent:</strong> €1,400-€2,500</li>
              <li><strong>2-3 bed villa rent:</strong> €2,500-€8,000+</li>
              <li><strong>British school catchment:</strong> 10-40 min</li>
              <li><strong>Best fit:</strong> HNW, retirees, English-default families</li>
            </ul>
          </CardBody></Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Why British movers choose Marbella</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">Marbella has the densest UK-British infrastructure outside the UK itself. English-speaking GPs, dentists, opticians, lawyers, asesores fiscales, mortgage brokers, removals firms — every service a British mover needs operates in English natively. Eight British-curriculum schools sit within a 45-minute radius. The British community is large enough that you can join British-run golf clubs, British-run gyms, attend British-run church services. For movers who don&apos;t want — or don&apos;t have time for — the language and cultural transition of a real Spanish city, Marbella removes friction.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">The trade-offs: cost (Marbella is the most expensive Costa del Sol town); seasonal swings (July-August is intensely touristy, November-March quiet); and the &ldquo;British bubble&rdquo; risk where movers integrate less than they hoped. Most successful Marbella moves split time — Marbella for the lifestyle and English-default services, Málaga or Madrid for cultural depth and Spanish integration.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Cost of living in 2026</h2>
          <div className="mt-4 overflow-hidden rounded-card border border-border">
            <table className="w-full text-left text-[14.5px]">
              <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted"><tr><th className="px-4 py-3">Category</th><th className="px-4 py-3">Couple</th><th className="px-4 py-3">Family of 4</th></tr></thead>
              <tbody className="divide-y divide-border bg-white">
                <tr><td className="px-4 py-3 font-semibold text-ink">Rent (2-3 bed apt/villa)</td><td className="px-4 py-3 text-ink/85">€1,800-€3,500</td><td className="px-4 py-3 text-ink/85">€2,500-€5,500</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Utilities + internet</td><td className="px-4 py-3 text-ink/85">€160-€260</td><td className="px-4 py-3 text-ink/85">€220-€380</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Groceries</td><td className="px-4 py-3 text-ink/85">€450-€650</td><td className="px-4 py-3 text-ink/85">€800-€1,100</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Eating out</td><td className="px-4 py-3 text-ink/85">€350-€700</td><td className="px-4 py-3 text-ink/85">€600-€1,200</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Health insurance</td><td className="px-4 py-3 text-ink/85">€120-€220</td><td className="px-4 py-3 text-ink/85">€240-€440</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">School fees (per child)</td><td className="px-4 py-3 text-ink/85">—</td><td className="px-4 py-3 text-ink/85">€900-€1,800/mo</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Transport (2 cars typical)</td><td className="px-4 py-3 text-ink/85">€200-€450</td><td className="px-4 py-3 text-ink/85">€300-€600</td></tr>
                <tr className="bg-surface"><td className="px-4 py-3 font-bold text-ink">Indicative monthly total</td><td className="px-4 py-3 font-bold text-ink">€3,300-€6,000</td><td className="px-4 py-3 font-bold text-ink">€5,700-€11,000</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Areas worth knowing</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Nueva Andalucía</div><p className="mt-2 text-[14.5px] text-ink/85">Residential, family-focused, walking distance to Puerto Banús, near most schools. The default British-family choice in Marbella.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Elviria</div><p className="mt-2 text-[14.5px] text-ink/85">Eastern Marbella, quieter, beach access, less expensive than central. Strong British retirement community.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Guadalmina / San Pedro</div><p className="mt-2 text-[14.5px] text-ink/85">Between Marbella and Estepona. Lower-priced, school-friendly, year-round residential character.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Golden Mile</div><p className="mt-2 text-[14.5px] text-ink/85">HNW-only, beachfront. Empty most of the year, packed July-August. Premium pricing only — €5,000-€20,000+/month rentals common.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Sotogrande</div><p className="mt-2 text-[14.5px] text-ink/85">35 min west of Marbella. Polo, Sotogrande International School, Cádiz province (still Andalucía). Gated-community-dominant — quieter, more exclusive.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Avoid for residency</div><p className="mt-2 text-[14.5px] text-ink/85">Puerto Banús itself for living (touristy, noisy), the central Marbella town for families (limited family infrastructure). Both fine for visits/short stays.</p></CardBody></Card>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Tax and school summary</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">Andalucía tax stack: zero regional Patrimonio (100% bonificación), near-zero Sucesiones for spouses/children, standard IRPF with modest regional surcharge. Beckham Law applies on standard terms. Above €3m net worth, Solidaridad applies nationally — not avoidable via region. See <Link href="/spain/patrimonio" className="text-warm underline-offset-2 hover:underline">/spain/patrimonio</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">Schools cluster densely on the Marbella-to-Estepona strip — BIC Marbella, English International College, Swans, Laude San Pedro, Aloha College Estepona, Sotogrande International. Full list at <Link href="/spain/schools" className="text-warm underline-offset-2 hover:underline">/spain/schools</Link>.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Common mistakes British movers to Marbella make</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Buying property before testing residency.</strong> Marbella property is a long-term decision; rent for 12-18 months first to test which sub-area actually fits your family.</li>
            <li><strong>Joining the British bubble exclusively.</strong> Movers who stay 100% in English communities report higher loneliness and lower long-term satisfaction. Allocate time deliberately to mixed-Spanish settings.</li>
            <li><strong>Underestimating July-August.</strong> Population effectively doubles. School-aged children are out so it&apos;s family-friendly chaos. Plan around it or escape inland for the worst weeks.</li>
            <li><strong>Forgetting AGP airport is in Málaga.</strong> School-run-plus-airport days mean you&apos;re driving 90+ minutes east. Many families relocate east toward Mijas/Fuengirola precisely to compress this.</li>
            <li><strong>Missing the Andalucía tax advantage.</strong> Some Beckham-Law-focused advisors push Madrid as the default; for HNW under €3m Andalucía is competitive and Marbella delivers the lifestyle Madrid doesn&apos;t.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>
        </div>
      </section>

      <RelatedResources tone="surface" heading="Keep planning your Costa del Sol move" items={[
        { kind: 'Pillar', href: '/spain', label: 'Move to Spain from the UK', blurb: 'Full Spain topic cluster: tax, visas, banking, residency.' },
        { kind: 'Compare', href: '/moving-to-malaga', label: 'Moving to Málaga instead', blurb: '30 minutes east — more city, less expense, more cultural depth.' },
        { kind: 'Deep dive', href: '/spain/patrimonio', label: 'Andalucía Patrimonio (zero regional)', blurb: 'The tax-policy reason HNW Brits choose Andalucía over Cataluña.' },
        { kind: 'Deep dive', href: '/spain/schools', label: 'NABSS British schools in Spain', blurb: 'The Marbella-Sotogrande school corridor mapped.' },
        { kind: 'Calculator', href: '/calculators/cost-of-living', label: 'UK vs Marbella cost comparator', blurb: 'Plug your UK city — see real monthly differential.' },
        { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Step-by-step move to the Costa del Sol with vetted asesor introductions.' },
      ]} />
    </article>
  );
}
