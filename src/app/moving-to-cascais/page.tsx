import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Moving to Cascais from the UK in 2026: HNW Lisbon Coast Guide';
const DESC =
  'Practical 2026 guide to moving from the UK to Cascais and the Lisbon coast. Premium HNW British destination — Estoril, Quinta da Marinha, Birre, Carcavelos. St Julian\'s School proximity, 25-40 min into central Lisbon by train, the highest-density British family corridor in Portugal.';

export const metadata: Metadata = {
  title: TITLE, description: DESC, alternates: { canonical: '/moving-to-cascais' }, openGraph: { url: '/moving-to-cascais', title: TITLE, description: DESC },
  keywords: ['moving to Cascais from UK', 'Cascais British expat', 'Quinta da Marinha', 'St Julian\'s Carcavelos', 'Lisbon coast', 'Estoril'],
};

const FAQS = [
  { q: 'What\'s rent in Cascais in 2026?', a: 'Cascais is premium. A 2-3 bed apartment in central Cascais runs €1,800-€3,000/month; villa in Quinta da Marinha or Birre €3,000-€7,000+/month. Carcavelos (the Lisbon-side of the line) is materially cheaper — €1,500-€2,500 for 2-3 bed. Estoril town €1,500-€2,800. The Cascais line as a whole has been one of the fastest-rising rental markets in Portugal 2020-2025.' },
  { q: 'Why is Cascais so popular with British families?', a: 'Three reinforcing factors: proximity to St Julian\'s and St Dominic\'s schools (Carcavelos), 25-40 min train into central Lisbon for working professionals, and Atlantic-coast beach access. The British community in Cascais has grown significantly since 2010 — there\'s now a critical mass of British-run amenities (cafés, gyms, services). Lifestyle balance is strong: beach + city + village character.' },
  { q: 'Cascais vs central Lisbon — which for a family?', a: 'For families with school-age children, Cascais/Estoril nearly always wins. St Julian\'s and St Dominic\'s are on the Cascais line; daily commute from central Lisbon is unworkable. For working-age couples without children, central Lisbon (Príncipe Real, Estrela) has more urban density and a stronger restaurant scene. Many families end up moving from central Lisbon to Cascais when children reach school age.' },
  { q: 'How do I get into central Lisbon?', a: 'The Cascais railway line — 25-40 minutes from Cascais to Cais do Sodré (central Lisbon), trains every 20 minutes. Modern stock, generally on time. By car the A5 motorway takes 25-50 minutes depending on traffic. Most working Cascais residents take the train to avoid Lisbon parking and traffic.' },
  { q: 'What\'s the climate like?', a: 'Mediterranean-Atlantic. Slightly cooler and breezier than central Lisbon due to Atlantic exposure. Summers 22-28°C with sea breeze (rarely uncomfortable); winters 11-16°C with occasional Atlantic storms. Around 280 sun days/year. The Cascais coast is windier than the Algarve — bring windbreakers in winter, ideal for outdoor sports year-round.' },
  { q: 'What\'s the path to becoming a Cascais resident?', a: 'Same as anywhere in Portugal: NIF → Portuguese bank → D7 or D8 visa application → AIMA residence permit → SNS registration. The Cascais area has the highest density of cross-border tax advisers and contabilistas in Portugal, so professional support is excellent. See /portugal/visa-guide for the full route.' },
];

export default function Page() {
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: TITLE, description: DESC, datePublished: '2026-05-25', dateModified: '2026-05-25', author: { '@type': 'Person', '@id': `${SITE.url}/about#dominic-roworth`, name: 'Dominic Roworth', url: `${SITE.url}/author/dominic-roworth`, image: `${SITE.url}/dominic-roworth.jpg` }, publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url }, mainEntityOfPage: `${SITE.url}/moving-to-cascais`, about: { '@type': 'Place', name: 'Cascais, Portugal' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url }, { '@type': 'ListItem', position: 2, name: 'Portugal', item: `${SITE.url}/portugal` }, { '@type': 'ListItem', position: 3, name: 'Moving to Cascais', item: `${SITE.url}/moving-to-cascais` }] };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb"><Link href="/" className="hover:text-ink underline-offset-2 hover:underline">Home</Link><span aria-hidden>›</span><Link href="/portugal" className="hover:text-ink underline-offset-2 hover:underline">Portugal</Link><span aria-hidden>›</span><span className="text-ink">Moving to Cascais</span></nav>
          <Badge tone="sea" uppercase>🇵🇹 Lisbon Coast · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">Moving to Cascais from the UK in 2026</h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">Cascais is the highest-density British family corridor in Portugal — anchored by St Julian&apos;s and St Dominic&apos;s schools, served by the 25-40 minute train into central Lisbon, blessed with Atlantic-coast beaches and a real Portuguese resort town at its centre. Premium pricing reflects the demand. For British professionals with school-age children who want both London-style commuter access and beach lifestyle, Cascais is the default and has been for two decades.</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-faint"><span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span><span aria-hidden>·</span><span>Reviewed 25 May 2026</span><span aria-hidden>·</span><span>2026 figures</span></div>

          <Card variant="bordered" className="mt-8"><CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">At a glance</div>
            <ul className="mt-2 grid gap-1.5 text-[15px] text-ink/90 sm:grid-cols-2">
              <li><strong>Population:</strong> 215,000 (Cascais municipality)</li>
              <li><strong>Airport:</strong> LIS, 25-35 min by car</li>
              <li><strong>Central Lisbon:</strong> 25-40 min by train</li>
              <li><strong>Climate:</strong> Mediterranean-Atlantic, 17°C avg</li>
              <li><strong>2-3 bed apartment:</strong> €1,800-€3,000</li>
              <li><strong>Villa (Quinta da Marinha):</strong> €3,000-€7,000+</li>
              <li><strong>Schools:</strong> St Julian&apos;s, St Dominic&apos;s, IPS, others</li>
              <li><strong>Best fit:</strong> HNW families, professional commuters, retirees</li>
            </ul>
          </CardBody></Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Cascais corridor towns</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Carcavelos</div><p className="mt-2 text-[14.5px] text-ink/85">Lisbon-end of the line. St Julian&apos;s School here. More affordable than central Cascais — €1,500-€2,500 for 2-3 bed. Strong British community concentration.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Parede</div><p className="mt-2 text-[14.5px] text-ink/85">Between Carcavelos and Cascais. Quieter, family-residential, marginally cheaper than Cascais centre.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Estoril</div><p className="mt-2 text-[14.5px] text-ink/85">Famous beachfront resort town next to Cascais. Old-money feel, casino, historic. €1,500-€2,800 for 2-3 bed.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Cascais centre</div><p className="mt-2 text-[14.5px] text-ink/85">Walkable resort town with marina, beaches, restaurants. Premium pricing — €1,800-€3,000 for 2-3 bed apartments.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Quinta da Marinha / Birre</div><p className="mt-2 text-[14.5px] text-ink/85">HNW villa areas inland from Cascais. Golf, gated communities, premium pricing — €3,000-€7,000+ for villas.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Avoid for residency</div><p className="mt-2 text-[14.5px] text-ink/85">Parts of Cascais waterfront in summer (tourist crush); the immediate marina core for sleeping (noise). Both fine for visiting.</p></CardBody></Card>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Tax, schools, transport</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Tax:</strong> Same as everywhere in Portugal — no wealth tax, no Modelo 720, IFICI (NHR 2.0) for qualifying activities, IRS Jovem for under-35s, standard IRS otherwise. See <Link href="/portugal/tax" className="text-warm underline-offset-2 hover:underline">/portugal/tax</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Schools:</strong> St Julian&apos;s School (Carcavelos) — the elite British-tradition option. St Dominic&apos;s International School (Outeiro de Polima, 10 min from Cascais). The British School of Lisbon (BSL) outside the corridor but reachable. IPS — International Preparatory School (Cascais). Application 12+ months ahead for elite Year 7 and sixth-form entry.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Transport:</strong> The Cascais railway line is the spine — trains every 20 minutes, 25-40 min to Cais do Sodré in central Lisbon. By car the A5 motorway. Most working families take the train to Lisbon; many have one car for weekend/school flexibility. Internal Cascais area is walkable in centre, car-dependent in Quinta da Marinha / Birre / inland.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Common mistakes</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Renting in central Lisbon with school-age children at St Julian&apos;s.</strong> The daily commute is unworkable — relocate to the Cascais corridor.</li>
            <li><strong>Underestimating Atlantic winter wind.</strong> Cascais is windier than central Lisbon. Older houses can be cold; modern apartments handle it.</li>
            <li><strong>Choosing Quinta da Marinha without testing.</strong> Beautiful but isolated. Test the actual lifestyle before committing to a villa.</li>
            <li><strong>Forgetting that the line ends at Cascais.</strong> Beyond Cascais towards Sintra requires a car or alternative transport.</li>
            <li><strong>Skipping S1 if pension-aged.</strong> Even premium Cascais retirees benefit from S1 — UK pays for Portuguese healthcare.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>
        </div>
      </section>

      <RelatedResources tone="surface" heading="Keep planning your Cascais move" items={[
        { kind: 'Pillar', href: '/portugal', label: 'Move to Portugal from the UK', blurb: 'Full Portugal topic cluster.' },
        { kind: 'Compare', href: '/moving-to-lisbon', label: 'Moving to Lisbon instead', blurb: 'Urban density vs Cascais commuter lifestyle.' },
        { kind: 'Deep dive', href: '/portugal/schools', label: 'Portugal schools incl. St Julian\'s', blurb: 'Why Cascais is the British-family default.' },
        { kind: 'Deep dive', href: '/portugal/tax', label: 'Portuguese tax: IFICI / NHR 2.0', blurb: 'Tax regime for Cascais professional movers.' },
        { kind: 'Compare', href: '/spain-vs-portugal', label: 'Spain vs Portugal compared', blurb: 'How Cascais stacks up against Costa del Sol alternatives.' },
        { kind: 'Playbook', href: '/playbook/portugal', label: 'The Portugal Playbook · £397', blurb: 'Step-by-step Cascais move plan.' },
      ]} />
    </article>
  );
}
