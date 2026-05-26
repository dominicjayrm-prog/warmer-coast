import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Moving to Tenerife from the UK in 2026: Cost, Areas, Tax, Schools';
const DESC =
  'Practical 2026 guide to moving from the UK to Tenerife and the Canary Islands. Year-round 20-25°C climate, Canarias 99.9% Sucesiones reduction, lower-VAT Canary regime (IGIC 7% vs mainland 21%), real areas (Costa Adeje, La Laguna, Puerto de la Cruz), British expat density, the long-flight trade-off.';

export const metadata: Metadata = {
  title: TITLE, description: DESC, alternates: { canonical: '/moving-to-tenerife' }, openGraph: { url: '/moving-to-tenerife', title: TITLE, description: DESC },
  keywords: ['moving to Tenerife from UK', 'Tenerife British expat', 'Canary Islands tax', 'IGIC Canarias', 'Costa Adeje', 'Tenerife cost of living'],
};

const FAQS = [
  { q: 'What\'s the Canary Islands tax position?', a: 'The Canary Islands operate under a special economic regime. IGIC (Impuesto General Indirecto Canario) replaces mainland IVA at a much lower 7% standard rate. Sucesiones offers 99.9% reduction for Group I&II beneficiaries. Patrimonio has regional bonificación. IRPF is standard with modest Canarias variations. For HNW movers, this combination makes the Canary Islands one of the most tax-favourable Spanish regions.' },
  { q: 'Is Tenerife really 20-25°C year-round?', a: 'Effectively yes for the south coast (Costa Adeje, Playa de las Américas). Winters 18-22°C, summers 25-30°C — the most stable climate in Spain. The north of the island (Puerto de la Cruz, La Laguna) is cooler and significantly wetter, more like Galicia. The microclimate split is real — choose your area knowing this.' },
  { q: 'Where do British movers live in Tenerife?', a: 'Costa Adeje and surrounding south coast (Playa de las Américas, Los Cristianos, La Caleta) — the dominant British expat zone with English-default infrastructure. La Laguna (university town, north interior) — real Spanish urban character. Santa Cruz (the capital, north coast) — proper Spanish city, less expat. Puerto de la Cruz — historic resort town in the north. Each has materially different lifestyle profiles.' },
  { q: 'What about flight times and connections?', a: 'TFS (south airport) and TFN (north airport) both run UK flights. TFS has more — 15+ daily UK flights to most major UK airports. Flight time UK-Tenerife is 4-4.5 hours — significantly longer than mainland Spain (2-2.5 hours). For UK-frequent travellers this is the largest single downside of the Canaries.' },
  { q: 'Are there British schools in Tenerife?', a: 'The British Yeoward School (Puerto de la Cruz) and Wingate School (south) are the main British-curriculum options. Fee ranges €5,000-€12,000/year. Some smaller English-curriculum and international schools cover specific niches. Less dense than Costa del Sol or Madrid but sufficient for the British community.' },
  { q: 'Is Tenerife better than the Costa del Sol?', a: 'For climate stability and IGIC-tax savings on consumption, yes. For UK flight time, mainland Spain wins (2-2.5h vs 4-4.5h). For British expat density of services, Costa del Sol is more saturated. For genuine Spanish integration, La Laguna or Santa Cruz works better than Costa del Sol. The right answer depends heavily on personal priorities.' },
];

export default function Page() {
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: TITLE, description: DESC, datePublished: '2026-05-25', dateModified: '2026-05-25', author: { '@type': 'Person', '@id': `${SITE.url}/about#dominic-roworth`, name: 'Dominic Roworth', url: `${SITE.url}/author/dominic-roworth`, image: `${SITE.url}/dominic-roworth.jpg` }, publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url }, mainEntityOfPage: `${SITE.url}/moving-to-tenerife`, about: { '@type': 'Place', name: 'Tenerife, Spain' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url }, { '@type': 'ListItem', position: 2, name: 'Spain', item: `${SITE.url}/spain` }, { '@type': 'ListItem', position: 3, name: 'Moving to Tenerife', item: `${SITE.url}/moving-to-tenerife` }] };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb"><Link href="/" className="hover:text-ink underline-offset-2 hover:underline">Home</Link><span aria-hidden>›</span><Link href="/spain" className="hover:text-ink underline-offset-2 hover:underline">Spain</Link><span aria-hidden>›</span><span className="text-ink">Moving to Tenerife</span></nav>
          <Badge tone="warm" uppercase>🇪🇸 Canary Islands · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">Moving to Tenerife from the UK in 2026</h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">Tenerife runs the most stable climate in Spain (20-25°C year-round on the south coast) combined with the Canary Islands&apos; special economic regime — 7% IGIC instead of 21% mainland IVA, near-zero Sucesiones for close family, Patrimonio bonificación. The trade-off is distance: 4-4.5 hour UK flights vs 2-2.5 for mainland Spain. For British retirees prioritising weather stability and the Canarias tax regime, Tenerife is one of the strongest Spanish destinations.</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-faint"><span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span><span aria-hidden>·</span><span>Reviewed 25 May 2026</span><span aria-hidden>·</span><span>2026 figures</span></div>

          <Card variant="bordered" className="mt-8"><CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">At a glance</div>
            <ul className="mt-2 grid gap-1.5 text-[15px] text-ink/90 sm:grid-cols-2">
              <li><strong>Region:</strong> Canary Islands (special economic regime)</li>
              <li><strong>Population:</strong> 950,000 (island)</li>
              <li><strong>Airports:</strong> TFS + TFN — 15+ daily UK flights</li>
              <li><strong>Climate:</strong> 20-22°C year-round south coast</li>
              <li><strong>IGIC vs IVA:</strong> 7% vs mainland 21%</li>
              <li><strong>Flight time UK:</strong> 4-4.5 hours</li>
              <li><strong>2-bed south coast rent:</strong> €1,000-€1,800</li>
              <li><strong>Best fit:</strong> Climate-driven retirees, value-conscious HNW</li>
            </ul>
          </CardBody></Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Areas worth knowing</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Costa Adeje / south coast</div><p className="mt-2 text-[14.5px] text-ink/85">British expat hub. Best climate stability, beaches, English-default services, tourist density. 2-3 bed apartments €1,000-€1,800/month.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">La Caleta / El Duque</div><p className="mt-2 text-[14.5px] text-ink/85">Upscale southwest coast. Quieter, premium, HNW expat. Villas €2,000-€5,000+/month.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">La Laguna</div><p className="mt-2 text-[14.5px] text-ink/85">UNESCO old-town university city in the north interior. Real Spanish life, cooler climate, much less expat density. 2-3 bed €700-€1,200.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Santa Cruz de Tenerife</div><p className="mt-2 text-[14.5px] text-ink/85">The island capital — actual Spanish city, north coast, cooler/wetter, proper urban density. €800-€1,400 for 2-3 bed.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Puerto de la Cruz</div><p className="mt-2 text-[14.5px] text-ink/85">Historic resort town, north coast. Older British/German retirement community. Cooler than south, more atmospheric. €700-€1,300.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Avoid for residency</div><p className="mt-2 text-[14.5px] text-ink/85">Playa de las Américas core (party-tourist zone); the immediate airport surroundings. Both fine to visit, not to live.</p></CardBody></Card>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Tax, schools, transport</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Tax:</strong> Canary Islands operates the special economic regime — IGIC at 7% standard (vs mainland IVA 21%) on most consumption. Sucesiones 99.9% reduction for Group I&II. Patrimonio has Canarias-specific bonificación. Beckham Law applies normally. The IGIC saving alone runs €2,000-€5,000/year for a typical British family. See <Link href="/spain/patrimonio" className="text-warm underline-offset-2 hover:underline">/spain/patrimonio</Link> and <Link href="/spain/sucesiones" className="text-warm underline-offset-2 hover:underline">/spain/sucesiones</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Schools:</strong> The British Yeoward School (Puerto de la Cruz), Wingate School (south), smaller English-curriculum and international options. Fee ranges €5,000-€12,000/year. See <Link href="/spain/schools" className="text-warm underline-offset-2 hover:underline">/spain/schools</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Transport:</strong> TFS (south) and TFN (north) airports. TFS runs 15+ daily UK flights to most major UK airports; TFN fewer. Flight time UK-Tenerife is 4-4.5 hours. No mainland Spain rail/ferry — flight is the only practical option to mainland Spain too (1-1.5h). Within the island: TITSA bus network covers main routes; car is essential for most lifestyles.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Common mistakes</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Choosing the north for &ldquo;guaranteed sunshine.&rdquo;</strong> The north is cooler and significantly wetter than the south. Only the south coast guarantees year-round warmth and sunshine.</li>
            <li><strong>Underestimating UK flight time.</strong> 4-4.5 hours each way significantly affects how often you visit UK. Plan for 2-4 UK trips per year max if frequent travel matters.</li>
            <li><strong>Forgetting Canarias is part of Spain.</strong> Standard Spanish residency/visa/tax rules apply — same NLV, DNV, IRPF, Beckham Law mechanics — plus the IGIC regime on top.</li>
            <li><strong>Renting in tourist-resort zones.</strong> Playa de las Américas core is loud and short-term-let-dominated. Costa Adeje residential streets, La Caleta, El Duque for real residential.</li>
            <li><strong>Skipping La Laguna out of habit.</strong> Most British movers default to the south coast. La Laguna and Santa Cruz offer real Spanish-city life at lower cost — worth visiting before committing.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>
        </div>
      </section>

      <RelatedResources tone="surface" heading="Keep planning your Tenerife move" items={[
        { kind: 'Pillar', href: '/spain', label: 'Move to Spain from the UK', blurb: 'Full Spain topic cluster.' },
        { kind: 'Deep dive', href: '/spain/sucesiones', label: 'Canarias 99.9% Sucesiones', blurb: 'One of the strongest inheritance-tax positions in Spain.' },
        { kind: 'Compare', href: '/moving-to-mallorca', label: 'Moving to Mallorca instead', blurb: 'Island lifestyle, mainland-close vs Atlantic far-island trade-off.' },
        { kind: 'Compare', href: '/moving-to-malaga', label: 'Moving to Málaga instead', blurb: 'Mainland Andalucía vs Canarias — flight time, climate stability.' },
        { kind: 'Calculator', href: '/calculators/cost-of-living', label: 'UK vs Tenerife cost comparator', blurb: 'Real monthly differential.' },
        { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Step-by-step Tenerife move plan including IGIC mechanics.' },
      ]} />
    </article>
  );
}
