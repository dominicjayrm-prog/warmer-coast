import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Moving to the Algarve from the UK in 2026: Cost, Areas, Schools, D7';
const DESC =
  'Practical 2026 guide to moving from the UK to the Algarve. Cost of living from Lagos to Tavira, the major towns (Lagos, Albufeira, Faro, Tavira, Vilamoura), British school options (NISA, Aljezur, Vale Verde), the D7 retirement reality, golf-and-beach lifestyle, what changed after the 2022-2024 rental surge.';

export const metadata: Metadata = {
  title: TITLE, description: DESC, alternates: { canonical: '/moving-to-the-algarve' }, openGraph: { url: '/moving-to-the-algarve', title: TITLE, description: DESC },
  keywords: ['moving to the Algarve from UK', 'Algarve British expat', 'Algarve cost of living', 'Lagos Portugal', 'Vilamoura', 'Tavira', 'NISA Algarve school'],
};

const FAQS = [
  { q: 'Is the Algarve still cheap for British retirees?', a: 'Less than the 2010-2020 era but still good value. Tourist-hot zones (central Albufeira, Vilamoura) approach Lisbon prices; quieter towns (Tavira, Lagos off-season, Olhão) remain 30-40% cheaper. A 2-bed flat in Tavira runs €700-€1,100/month; in Vilamoura €1,200-€2,000; in Lagos €900-€1,500. Day-to-day costs (groceries, eating out) are 15-25% below Lisbon — overall Algarve is the cheapest mainstream Portuguese destination for British retirees in 2026.' },
  { q: 'Which Algarve town is best for British movers?', a: 'Depends on lifestyle. Lagos for a real-town feel with British community and walkability. Tavira for the quieter eastern Algarve and lower costs. Vilamoura for golf-and-marina luxury lifestyle. Albufeira for tourist-heart density (better for visits than residence). Carvoeiro for picture-perfect retirement village. Most British movers settle in the Lagos-to-Vilamoura corridor on the central-western coast.' },
  { q: 'What are the British school options in the Algarve?', a: 'Nobel International School Algarve (NISA, Lagoa) — the major British-curriculum school with IGCSE, IB, A-Level pathways. Aljezur International School (primary/early secondary). Vale Verde International School (smaller, family-feel). The International School of the Algarve (Lagoa). Fee ranges €6,000-€17,000/year. Application 3-9 months ahead for most schools. See /portugal/schools.' },
  { q: 'How is the D7 visa for retirees in the Algarve?', a: 'The Algarve is the dominant D7 destination — minimum income €920/month (€11,040/year), accepts UK pensions, dividends, rental income. AIMA backlogs in the Algarve have been workable in 2026 — typically 3-6 month processing. Most British retirees pair D7 with an S1 form (UK state pension), giving them SNS healthcare access funded by the UK. See /portugal/visa-guide and /portugal/healthcare.' },
  { q: 'What\'s the climate really like?', a: 'Warmest in mainland Portugal. 300+ sun days/year, summers 28-32°C with sea-breeze moderation, winters 12-18°C with rare frost. The eastern Algarve (Tavira) is slightly warmer and drier than the western (Lagos, Sagres). The whole region benefits from southern Atlantic exposure with Mediterranean characteristics — closer to coastal Andalucía than to Porto.' },
  { q: 'Do I need a car in the Algarve?', a: 'Yes for most lifestyles outside immediate town centres. Within Lagos, Tavira, Faro town centres you can walk. Between towns or to inland areas a car is essential. Public transport (Eva Transportes buses) covers main routes but is sparse compared to a Spanish costa. Many British families have one or two cars per household.' },
];

export default function Page() {
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: TITLE, description: DESC, datePublished: '2026-05-25', dateModified: '2026-05-25', author: { '@type': 'Person', '@id': `${SITE.url}/about#dominic-roworth`, name: 'Dominic Roworth', url: `${SITE.url}/author/dominic-roworth`, image: `${SITE.url}/dominic-roworth.jpg` }, publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url }, mainEntityOfPage: `${SITE.url}/moving-to-the-algarve`, about: { '@type': 'Place', name: 'Algarve, Portugal' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url }, { '@type': 'ListItem', position: 2, name: 'Portugal', item: `${SITE.url}/portugal` }, { '@type': 'ListItem', position: 3, name: 'Moving to the Algarve', item: `${SITE.url}/moving-to-the-algarve` }] };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb"><Link href="/" className="hover:text-ink underline-offset-2 hover:underline">Home</Link><span aria-hidden>›</span><Link href="/portugal" className="hover:text-ink underline-offset-2 hover:underline">Portugal</Link><span aria-hidden>›</span><span className="text-ink">Moving to the Algarve</span></nav>
          <Badge tone="sea" uppercase>🇵🇹 Algarve · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">Moving to the Algarve from the UK in 2026</h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">The Algarve is Portugal&apos;s dominant British-retirement destination — 300+ sun days, the warmest mainland Portuguese climate, established UK community across Lagos, Vilamoura, Carvoeiro and the eastern Algarve. The D7 visa makes residency straightforward for pension-income retirees. Costs are higher than 2018 but still 30% below equivalent Costa del Sol towns. Here&apos;s the 2026 sourced version: town-by-town pricing, schools, D7 mechanics and the lifestyle reality.</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-faint"><span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span><span aria-hidden>·</span><span>Reviewed 25 May 2026</span><span aria-hidden>·</span><span>2026 figures</span></div>

          <Card variant="bordered" className="mt-8"><CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">At a glance</div>
            <ul className="mt-2 grid gap-1.5 text-[15px] text-ink/90 sm:grid-cols-2">
              <li><strong>Region:</strong> Algarve, southern Portugal</li>
              <li><strong>Population:</strong> 470,000 (peaks ~2m in summer)</li>
              <li><strong>Airport:</strong> FAO Faro — 15+ daily UK flights</li>
              <li><strong>Climate:</strong> 17°C avg, 300 sun days</li>
              <li><strong>2-bed flat (Tavira/Lagos):</strong> €700-€1,500</li>
              <li><strong>2-bed (Vilamoura/Albufeira):</strong> €1,200-€2,000</li>
              <li><strong>British schools:</strong> 4 main (Lagos to Lagoa)</li>
              <li><strong>Best fit:</strong> Retirees, golf-and-beach, value families</li>
            </ul>
          </CardBody></Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Why British movers choose the Algarve</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">The Algarve has been the dominant British retirement destination in mainland Portugal for 30+ years. Three forces sustain it in 2026: climate (warmest, sunniest mainland Portugal — winters in the 12-18°C range), established UK community (English widely spoken in tourist and service sectors, dense British-run amenity ecosystem), and the D7 visa pathway (€920/mo minimum, pension income qualifies). The 2022-2024 rental surge raised prices materially — Vilamoura and central Albufeira now approach Lisbon — but quieter towns (Tavira, Olhão, Lagos off-peak, inland) remain genuine value.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">The trade-offs are real. Outside Lagos and Faro, the Algarve is dispersed — no real city scale, public transport limited, car-dependent. July-August tourist crowding is intense in the central Algarve (Albufeira, Vilamoura). Winter quietness is significant — much of the resort infrastructure closes November-March. Inland villages can feel isolated. For British movers wanting urban depth, this is not the destination; for sun-and-beach retirement, it largely delivers.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Town-by-town cost of living in 2026</h2>
          <div className="mt-4 overflow-hidden rounded-card border border-border">
            <table className="w-full text-left text-[14.5px]">
              <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted"><tr><th className="px-4 py-3">Town</th><th className="px-4 py-3">2-bed rent</th><th className="px-4 py-3">Best for</th></tr></thead>
              <tbody className="divide-y divide-border bg-white">
                <tr><td className="px-4 py-3 font-semibold text-ink">Lagos</td><td className="px-4 py-3 text-ink/85">€900-€1,500</td><td className="px-4 py-3 text-ink/85">Real-town feel + British community</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Vilamoura</td><td className="px-4 py-3 text-ink/85">€1,200-€2,000</td><td className="px-4 py-3 text-ink/85">Golf + marina luxury lifestyle</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Carvoeiro</td><td className="px-4 py-3 text-ink/85">€900-€1,500</td><td className="px-4 py-3 text-ink/85">Picture-perfect village + retirees</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Faro (capital)</td><td className="px-4 py-3 text-ink/85">€800-€1,300</td><td className="px-4 py-3 text-ink/85">Year-round amenities + airport proximity</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Tavira</td><td className="px-4 py-3 text-ink/85">€700-€1,100</td><td className="px-4 py-3 text-ink/85">Quieter eastern Algarve + value</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Olhão</td><td className="px-4 py-3 text-ink/85">€650-€1,000</td><td className="px-4 py-3 text-ink/85">Working-port authentic feel</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Albufeira town</td><td className="px-4 py-3 text-ink/85">€900-€1,500</td><td className="px-4 py-3 text-ink/85">Tourist density (better for visits)</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Sagres / western tip</td><td className="px-4 py-3 text-ink/85">€700-€1,200</td><td className="px-4 py-3 text-ink/85">Surf community + isolation</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Schools, healthcare, D7</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Schools:</strong> NISA (Lagoa) is the main British-curriculum school with IGCSE/IB/A-Level. Aljezur International, Vale Verde, The International School of the Algarve add capacity. Fee ranges €6,000-€17,000/year. See <Link href="/portugal/schools" className="text-warm underline-offset-2 hover:underline">/portugal/schools</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Healthcare:</strong> Faro Hospital is the main acute centre; Algarve SNS coverage is workable but specialist depth requires Lisbon referral. Private hospitals (Hospital Particular do Algarve, several others) cover the English-speaking market. Most retirees use S1 form for SNS access. See <Link href="/portugal/healthcare" className="text-warm underline-offset-2 hover:underline">/portugal/healthcare</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>D7 visa:</strong> €920/mo minimum income, pension/dividend/rental qualifying. 90-day window to apply once you have NIF and Portuguese bank account. AIMA processing in the Algarve is workable in 2026 — 3-6 months typical. See <Link href="/portugal/visa-guide" className="text-warm underline-offset-2 hover:underline">/portugal/visa-guide</Link>.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Common mistakes British movers to the Algarve make</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Buying property in tourist-resort areas without testing winter.</strong> Central Albufeira and Vilamoura are quiet October-April. Test a winter month before committing.</li>
            <li><strong>Underestimating the car-dependence.</strong> Outside town centres, no car = no lifestyle. Budget €200-€400/month for vehicle costs.</li>
            <li><strong>Not requesting S1 before moving.</strong> Pensioners can have UK pay Portugal for their healthcare via S1 — many forget and end up paying for private care unnecessarily.</li>
            <li><strong>Renting in tourist short-term-let zones.</strong> Central Albufeira and Lagos resort areas are dominated by Airbnb. Look at residential streets and quieter towns for real rentals.</li>
            <li><strong>Forgetting Faro airport for UK trips.</strong> FAO has 15+ daily UK flights and is the most-connected Algarve point. Plan residency near the airport accessibility you need.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>
        </div>
      </section>

      <RelatedResources tone="surface" heading="Keep planning your Algarve move" items={[
        { kind: 'Pillar', href: '/portugal', label: 'Move to Portugal from the UK', blurb: 'Full Portugal topic cluster.' },
        { kind: 'Deep dive', href: '/portugal/visa-guide', label: 'D7 visa for retirees', blurb: 'The dominant Algarve-mover visa route.' },
        { kind: 'Deep dive', href: '/portugal/healthcare', label: 'Portuguese healthcare + S1', blurb: 'How UK state pensioners access free Algarve healthcare.' },
        { kind: 'Compare', href: '/moving-to-lisbon', label: 'Moving to Lisbon instead', blurb: 'Urban density vs Algarve sunshine — the typical British mover trade-off.' },
        { kind: 'Compare', href: '/portugal-vs-gibraltar', label: 'Portugal vs Gibraltar compared', blurb: 'For HNW Algarve-vs-Rock decisions.' },
        { kind: 'Playbook', href: '/playbook/portugal', label: 'The Portugal Playbook · £397', blurb: 'Step-by-step Algarve move with vetted contabilista intros.' },
      ]} />
    </article>
  );
}
