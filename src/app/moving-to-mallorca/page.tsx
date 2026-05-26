import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Moving to Mallorca from the UK in 2026: Cost, Areas, Tax, Schools';
const DESC =
  'Practical 2026 guide to moving from the UK to Mallorca. Balearic Patrimonio €3m allowance — competitive HNW tax. Real costs by area (Palma, southwest coast, Pollença, Sóller), British school options, 2.5-hour flight from UK, the German-and-British expat duopoly.';

export const metadata: Metadata = {
  title: TITLE, description: DESC, alternates: { canonical: '/moving-to-mallorca' }, openGraph: { url: '/moving-to-mallorca', title: TITLE, description: DESC },
  keywords: ['moving to Mallorca from UK', 'Mallorca British expat', 'Palma de Mallorca cost', 'Balearic Patrimonio', 'British school Mallorca', 'Mallorca residency'],
};

const FAQS = [
  { q: 'What\'s the Mallorca tax position?', a: 'Mallorca is in the Balearic Islands, which apply a €3m Patrimonio personal allowance for residents (vs €700k state default) plus a 100% reduction on Sucesiones for Group I&II inheritances. Below €3m of net worth, Patrimonio is effectively zero. This is more generous than most Spanish regions and competitive with Madrid/Andalucía at the HNW level. Standard IRPF and Beckham Law apply normally.' },
  { q: 'How much does Mallorca cost in 2026?', a: 'Premium. Central Palma 2-bed runs €1,400-€2,200/month; southwest coast (Portals, Andratx, Camp de Mar) €2,000-€4,000+ for similar; Pollença/Sóller €1,200-€2,200. Villa rentals in southwest coastal areas commonly €4,000-€15,000+/month. Tourist-driven demand is intense and the island has no AVE alternative — costs reflect the captive market.' },
  { q: 'Where do British families live in Mallorca?', a: 'The southwest coast corridor (Portals Nous, Bendinat, Costa d\'en Blanes, Santa Ponsa) for HNW British families — near schools, beaches, marinas. Palma city for working-age and young families wanting urban density. The north (Pollença, Alcúdia) for retirees seeking quieter authentic Mallorca. The interior for those wanting genuine rural Spanish life.' },
  { q: 'British school options on Mallorca?', a: 'Bellver International College Palma (long-established British-curriculum), King Richard III College (Pollença area), Queen\'s College and several smaller schools. Fee ranges €7,000-€16,000/year. Application 6-12 months ahead. Less dense than Costa del Sol but sufficient for the British community.' },
  { q: 'What\'s the climate like?', a: 'Excellent Mediterranean. 300 sun days/year, summers 25-31°C with sea-breeze moderation, winters 14-18°C with occasional Atlantic storm passage. Better summers than mainland Spain (humidity moderated by sea); winter mild enough for outdoor lifestyle most days. The island microclimates matter — northwest (Sóller, Pollença) cooler and wetter; southwest sunny and dry.' },
  { q: 'Is Mallorca too expat-dominated for proper Spanish integration?', a: 'Honest answer: in the southwest coastal corridor, yes — German and British expat density is high and you can live in those bubbles. In Palma city and inland villages, no — real Spanish/Mallorquín life is dominant. Choose your area knowing this trade-off. For British movers prioritising integration, Palma or the interior is better than Portals Nous.' },
];

export default function Page() {
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: TITLE, description: DESC, datePublished: '2026-05-25', dateModified: '2026-05-25', author: { '@type': 'Person', '@id': `${SITE.url}/about#dominic-roworth`, name: 'Dominic Roworth', url: `${SITE.url}/author/dominic-roworth`, image: `${SITE.url}/dominic-roworth.jpg` }, publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url }, mainEntityOfPage: `${SITE.url}/moving-to-mallorca`, about: { '@type': 'Place', name: 'Mallorca, Spain' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url }, { '@type': 'ListItem', position: 2, name: 'Spain', item: `${SITE.url}/spain` }, { '@type': 'ListItem', position: 3, name: 'Moving to Mallorca', item: `${SITE.url}/moving-to-mallorca` }] };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb"><Link href="/" className="hover:text-ink underline-offset-2 hover:underline">Home</Link><span aria-hidden>›</span><Link href="/spain" className="hover:text-ink underline-offset-2 hover:underline">Spain</Link><span aria-hidden>›</span><span className="text-ink">Moving to Mallorca</span></nav>
          <Badge tone="warm" uppercase>🇪🇸 Balearic Islands · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">Moving to Mallorca from the UK in 2026</h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">Mallorca runs the strongest HNW Patrimonio position in Spain — a €3m personal allowance vs €700k state default — combined with Mediterranean climate, 2.5-hour flight to UK, and a long-established German/British expat infrastructure. Premium pricing reflects the demand. For HNW British movers wanting Mediterranean island lifestyle with competitive HNW tax positioning, Mallorca is one of the strongest single options in Iberia.</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-faint"><span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span><span aria-hidden>·</span><span>Reviewed 25 May 2026</span><span aria-hidden>·</span><span>2026 figures</span></div>

          <Card variant="bordered" className="mt-8"><CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">At a glance</div>
            <ul className="mt-2 grid gap-1.5 text-[15px] text-ink/90 sm:grid-cols-2">
              <li><strong>Region:</strong> Balearic Islands (€3m Patrimonio allowance)</li>
              <li><strong>Population:</strong> 950,000 (island)</li>
              <li><strong>Airport:</strong> PMI — 20+ daily UK flights summer; fewer winter</li>
              <li><strong>Climate:</strong> 18°C avg, 300 sun days</li>
              <li><strong>2-bed Palma rent:</strong> €1,400-€2,200</li>
              <li><strong>2-bed southwest coast:</strong> €2,000-€4,000+</li>
              <li><strong>Patrimonio:</strong> Effective zero below €3m</li>
              <li><strong>Best fit:</strong> HNW retirees, island-life lovers, families</li>
            </ul>
          </CardBody></Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Areas worth knowing</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Palma de Mallorca city</div><p className="mt-2 text-[14.5px] text-ink/85">Real city, working population, year-round amenities. Old town atmospheric; Santa Catalina trendy; Portixol seafront residential. 2-bed €1,400-€2,200/month.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Portals Nous / Bendinat</div><p className="mt-2 text-[14.5px] text-ink/85">Southwest coastal HNW corridor. Marinas, British and German expat density, near international schools. Premium pricing — villas €4,000-€12,000+/month.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Santa Ponsa / Andratx</div><p className="mt-2 text-[14.5px] text-ink/85">Further southwest. Beaches, more affordable than Portals, family-friendly. Strong British retirement community.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Pollença / Sóller / North</div><p className="mt-2 text-[14.5px] text-ink/85">Cooler, more authentic Mallorca, mountainous. Smaller expat density. Sóller has the famous train + tram. €1,200-€2,200 for 2-3 bed.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Inland villages</div><p className="mt-2 text-[14.5px] text-ink/85">Real Mallorcan life. Cheap by island standards. Genuine integration but limited amenities. Best for retirees comfortable with quiet.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Avoid for residency</div><p className="mt-2 text-[14.5px] text-ink/85">Magaluf / S&apos;Arenal (mass-tourist zones, completely different from rest of island); Cala d&apos;Or in summer (tourist-saturated). Both fine to visit, not to live.</p></CardBody></Card>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Tax, schools, transport</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Tax:</strong> Balearic Islands €3m Patrimonio allowance — effective zero wealth tax below that level. Sucesiones with 100% reduction for Group I&II. Standard IRPF, Beckham Law applies. Above €3m, Solidaridad applies nationally — see <Link href="/spain/patrimonio" className="text-warm underline-offset-2 hover:underline">/spain/patrimonio</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Schools:</strong> Bellver International College Palma (the main British-curriculum option), King Richard III College (Pollença area), Queen&apos;s College, smaller schools. Application 6-12 months ahead. See <Link href="/spain/schools" className="text-warm underline-offset-2 hover:underline">/spain/schools</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Transport:</strong> PMI airport 20+ daily UK flights in summer (5-10 in winter). No mainland Spain rail link — ferry to Barcelona/Valencia (8+ hours) for car transport. Within island: dense bus network, rental car or private car common. Palma is genuinely walkable; rest of island requires a car.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Common mistakes</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Choosing southwest coast for &ldquo;real Mallorcan life.&rdquo;</strong> Portals Nous and surrounding areas are expat-dominated. For Spanish integration, Palma or the interior.</li>
            <li><strong>Underestimating winter quietness.</strong> Tourist resorts effectively close November-March. If your social life depends on the British expat circuit, winter can be lonely.</li>
            <li><strong>Skipping the £3m Patrimonio modelling.</strong> Mallorca&apos;s €3m allowance is among the most generous in Spain. HNW movers with €1m-€3m net worth save thousands per year vs Cataluña or even Valencia.</li>
            <li><strong>Buying property in summer.</strong> Tourist-season prices are inflated. The October-March window has better value and seller motivation.</li>
            <li><strong>Forgetting flight density seasonality.</strong> Easy UK access in summer; significantly fewer flights November-March. For UK-frequent travellers, factor this.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>
        </div>
      </section>

      <RelatedResources tone="surface" heading="Keep planning your Mallorca move" items={[
        { kind: 'Pillar', href: '/spain', label: 'Move to Spain from the UK', blurb: 'Full Spain topic cluster.' },
        { kind: 'Deep dive', href: '/spain/patrimonio', label: 'Spain Patrimonio by region', blurb: 'Why the Balearic €3m allowance is competitive at the HNW level.' },
        { kind: 'Compare', href: '/moving-to-malaga', label: 'Moving to Málaga instead', blurb: 'Mainland vs island, same Patrimonio competitiveness.' },
        { kind: 'Compare', href: '/moving-to-marbella', label: 'Moving to Marbella instead', blurb: 'Costa del Sol expat density vs Mallorca island life.' },
        { kind: 'Calculator', href: '/calculators/cost-of-living', label: 'UK vs Mallorca cost comparator', blurb: 'Real monthly differential.' },
        { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Step-by-step Mallorca move with HNW tax modelling.' },
      ]} />
    </article>
  );
}
