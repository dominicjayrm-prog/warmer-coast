import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Moving to Sevilla from the UK in 2026: The Underserved Andalucía Pick';
const DESC =
  'Practical 2026 guide to moving from the UK to Sevilla. Andalucía\'s tax position, real city scale, lower costs than Madrid or Costa del Sol, less British expat density. Neighbourhoods (Triana, Los Remedios, Nervión), the climate trade-off, AVE to Madrid in 2h30.';

export const metadata: Metadata = {
  title: TITLE, description: DESC, alternates: { canonical: '/moving-to-sevilla' }, openGraph: { url: '/moving-to-sevilla', title: TITLE, description: DESC },
  keywords: ['moving to Sevilla from UK', 'Sevilla British expat', 'Sevilla cost of living', 'Triana', 'Andalucía tax', 'Sevilla vs Málaga'],
};

const FAQS = [
  { q: 'Is Sevilla cheaper than Málaga?', a: 'Yes, materially — Sevilla rents run 25-35% below central Málaga for equivalent properties. A 2-bed central flat in Los Remedios or Triana is €700-€1,200/month; Málaga equivalent €1,000-€1,600. Sevilla\'s lower density of British expats means less price pressure and a more authentic Spanish residency experience. The trade-off: fewer British amenities, less English coverage, no beach (inland river city).' },
  { q: 'Why isn\'t Sevilla more popular with British movers?', a: 'Three reasons. Distance from coast (60 min to Cádiz beaches, but it\'s an inland city). Summer heat — Sevilla regularly hits 38-44°C July-August, well above Costa del Sol. Lower density of British-amenity infrastructure (schools, English-speaking services). For movers prioritising Spanish-resident integration over expat-bubble convenience, these become advantages rather than drawbacks.' },
  { q: 'What\'s the tax position?', a: 'Sevilla is in Andalucía — same favourable tax stack as Málaga. 100% Patrimonio bonificación (zero regional wealth tax). Effectively zero Sucesiones for spouses/children. Standard IRPF with modest Andalucía surcharge. Beckham Law applies normally. Above €3m the Solidaridad surcharge applies nationally. See /spain/patrimonio.' },
  { q: 'Which Sevilla neighbourhoods work for British families?', a: 'Los Remedios (residential, walkable, near schools, premium), Nervión (modern, central, family-typical), Triana (across the river — historic, atmospheric, real-Sevilla feel), Bellavista (suburb, family-residential, near British international school). Avoid Casco Antiguo for living — touristy and noisy.' },
  { q: 'Are there British schools in Sevilla?', a: 'St Mary\'s School Sevilla and BSS (British School of Sevilla) cover the British-curriculum demand. Fee ranges €6,000-€14,000/year. Fewer options than Málaga or Madrid but sufficient for the small British community. See /spain/schools.' },
  { q: 'How does the AVE help?', a: 'AVE high-speed rail makes Madrid 2h30 and Málaga 2h45 from Sevilla. This puts Sevilla within easy weekend reach of both — many residents use the AVE for medical specialists, business meetings, weekend trips. Sevilla Airport (SVQ) has direct UK flights (London, Manchester, Birmingham) but less density than Málaga.' },
];

export default function Page() {
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: TITLE, description: DESC, datePublished: '2026-05-25', dateModified: '2026-05-25', author: { '@type': 'Person', '@id': `${SITE.url}/about#dominic-roworth`, name: 'Dominic Roworth', url: `${SITE.url}/author/dominic-roworth`, image: `${SITE.url}/dominic-roworth.jpg` }, publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url }, mainEntityOfPage: `${SITE.url}/moving-to-sevilla`, about: { '@type': 'Place', name: 'Sevilla, Spain' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url }, { '@type': 'ListItem', position: 2, name: 'Spain', item: `${SITE.url}/spain` }, { '@type': 'ListItem', position: 3, name: 'Moving to Sevilla', item: `${SITE.url}/moving-to-sevilla` }] };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb"><Link href="/" className="hover:text-ink underline-offset-2 hover:underline">Home</Link><span aria-hidden>›</span><Link href="/spain" className="hover:text-ink underline-offset-2 hover:underline">Spain</Link><span aria-hidden>›</span><span className="text-ink">Moving to Sevilla</span></nav>
          <Badge tone="warm" uppercase>🇪🇸 Andalucía · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">Moving to Sevilla from the UK in 2026</h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">Sevilla is the underserved Andalucía pick. Same tax stack as Málaga (100% Patrimonio rebate, near-zero Sucesiones), 25-35% cheaper rents, a real Spanish city with deep culture and university scale — and materially lower British-expat density. The trade-offs are real: summer heat is brutal, no beach (inland river city), fewer English amenities. For British movers wanting genuine Spanish residency rather than an expat bubble, Sevilla delivers what Costa del Sol can&apos;t.</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-faint"><span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span><span aria-hidden>·</span><span>Reviewed 25 May 2026</span><span aria-hidden>·</span><span>2026 figures</span></div>

          <Card variant="bordered" className="mt-8"><CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">At a glance</div>
            <ul className="mt-2 grid gap-1.5 text-[15px] text-ink/90 sm:grid-cols-2">
              <li><strong>Region:</strong> Andalucía (zero regional Patrimonio)</li>
              <li><strong>Population:</strong> 685,000 (metro 1.5m)</li>
              <li><strong>Airport:</strong> SVQ — direct UK flights</li>
              <li><strong>Climate:</strong> Hot summers, mild winters, ~280 sun days</li>
              <li><strong>2-bed central rent:</strong> €700-€1,200</li>
              <li><strong>3-bed family rent:</strong> €1,100-€1,900</li>
              <li><strong>AVE to Madrid:</strong> 2h30</li>
              <li><strong>Best fit:</strong> Real-Spain integration, value HNW, families happy without beach</li>
            </ul>
          </CardBody></Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Why British movers choose Sevilla</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">Sevilla offers the Andalucía tax advantage at materially lower cost than Málaga or Marbella, with a real Spanish city ecosystem rather than an expat-tourist hybrid. The cathedral, the Alcázar, the river, the bullring, Triana — Sevilla&apos;s cultural depth is significant. The university brings a young demographic; the regional government brings white-collar professional employment. For British movers wanting integration into Spanish life (Spanish neighbours, Spanish schools or bilingual public programmes, Spanish in everyday transactions), Sevilla works far better than the Costa del Sol.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">Where Sevilla loses: summer heat (38-44°C July-August is genuinely punishing), distance to coast (60 minutes to Cádiz beaches), fewer English-default amenities. For sun-and-beach-driven movers Sevilla is the wrong choice.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Cost of living in 2026</h2>
          <div className="mt-4 overflow-hidden rounded-card border border-border">
            <table className="w-full text-left text-[14.5px]">
              <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted"><tr><th className="px-4 py-3">Category</th><th className="px-4 py-3">Couple</th><th className="px-4 py-3">Family of 4</th></tr></thead>
              <tbody className="divide-y divide-border bg-white">
                <tr><td className="px-4 py-3 font-semibold text-ink">Rent (2-3 bed central)</td><td className="px-4 py-3 text-ink/85">€900-€1,400</td><td className="px-4 py-3 text-ink/85">€1,100-€2,000</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Utilities + internet (incl. summer A/C)</td><td className="px-4 py-3 text-ink/85">€150-€280</td><td className="px-4 py-3 text-ink/85">€200-€400</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Groceries</td><td className="px-4 py-3 text-ink/85">€350-€500</td><td className="px-4 py-3 text-ink/85">€600-€900</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Eating out</td><td className="px-4 py-3 text-ink/85">€200-€400</td><td className="px-4 py-3 text-ink/85">€350-€650</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Health insurance</td><td className="px-4 py-3 text-ink/85">€90-€180</td><td className="px-4 py-3 text-ink/85">€180-€380</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">School fees (per child)</td><td className="px-4 py-3 text-ink/85">—</td><td className="px-4 py-3 text-ink/85">€600-€1,200/mo</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Transport</td><td className="px-4 py-3 text-ink/85">€100-€220</td><td className="px-4 py-3 text-ink/85">€150-€350</td></tr>
                <tr className="bg-surface"><td className="px-4 py-3 font-bold text-ink">Indicative monthly total</td><td className="px-4 py-3 font-bold text-ink">€1,800-€3,000</td><td className="px-4 py-3 font-bold text-ink">€3,400-€6,500</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Common mistakes</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Underestimating summer heat.</strong> Sevilla in August can be unliveable for unacclimatised Brits. Plan for €200-€400/month A/C bills June-September. Many residents escape to coast or cooler regions for two months.</li>
            <li><strong>Choosing Sevilla expecting beaches.</strong> It&apos;s an inland river city. Cádiz coast is 60 minutes away.</li>
            <li><strong>Underestimating Andalusian Spanish.</strong> Local accent is significantly distinct from standard Castilian — challenging for new Spanish speakers. The compensation: faster integration once you settle in.</li>
            <li><strong>Renting in Casco Antiguo.</strong> Historic centre, touristy, narrow streets, summer heat traps. Triana or Los Remedios are much better residential options.</li>
            <li><strong>Forgetting AVE.</strong> Madrid 2h30, Málaga 2h45, Córdoba 45 min. AVE makes Sevilla less isolated than it feels on a map.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>
        </div>
      </section>

      <RelatedResources tone="surface" heading="Keep planning your Sevilla move" items={[
        { kind: 'Pillar', href: '/spain', label: 'Move to Spain from the UK', blurb: 'Full Spain topic cluster.' },
        { kind: 'Compare', href: '/moving-to-malaga', label: 'Moving to Málaga instead', blurb: 'Coast vs inland, same Andalucía tax.' },
        { kind: 'Compare', href: '/moving-to-madrid', label: 'Moving to Madrid instead', blurb: 'Both zero Patrimonio — Sevilla wins on cost, Madrid on professional opportunities.' },
        { kind: 'Deep dive', href: '/spain/patrimonio', label: 'Andalucía Patrimonio — zero regional', blurb: 'The tax position that makes any Andalucía city competitive.' },
        { kind: 'Calculator', href: '/calculators/cost-of-living', label: 'UK vs Sevilla cost comparator', blurb: 'Real monthly differential.' },
        { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Step-by-step Sevilla move plan with vetted asesor introductions.' },
      ]} />
    </article>
  );
}
