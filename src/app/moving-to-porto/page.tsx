import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Moving to Porto from the UK in 2026: Cost, Areas, Schools, Tax';
const DESC =
  'Practical 2026 guide to moving from the UK to Porto. The value alternative to Lisbon — 25-35% cheaper rents, established British/IB schools (Oporto British School, CLIP), strong family expat community, the cooler-wetter climate trade-off, IFICI eligibility.';

export const metadata: Metadata = {
  title: TITLE, description: DESC, alternates: { canonical: '/moving-to-porto' }, openGraph: { url: '/moving-to-porto', title: TITLE, description: DESC },
  keywords: ['moving to Porto from UK', 'Porto British expat', 'Porto cost of living 2026', 'Oporto British School', 'CLIP Porto', 'Porto vs Lisbon'],
};

const FAQS = [
  { q: 'Is Porto cheaper than Lisbon in 2026?', a: 'Yes, materially — Porto rents are roughly 25-35% lower than equivalent central Lisbon. A 2-bed central Porto flat runs €900-€1,500/month; Lisbon €1,400-€2,200 for the same. Day-to-day costs (groceries, eating out, transport) are also 10-20% lower. For British movers prioritising value over Lisbon\'s tech-hub density, Porto is the materially cheaper Portuguese city option.' },
  { q: 'What are the British school options in Porto?', a: 'Oporto British School (founded 1894 — the oldest British school in Portugal), CLIP (bilingual Portuguese-English with IB Diploma), Lycée Français International, and CJD International School (Cambridge curriculum). Fee ranges €5,000-€16,000/year. Application 3-9 months ahead. Less elite than St Julian\'s in Lisbon but solidly British-tradition.' },
  { q: 'Which Porto neighbourhoods do British families choose?', a: 'Foz do Douro (coastal, leafy, walkable, near OBS school), Boavista (upscale modern, near schools and business district), Vila Nova de Gaia (across the river — port-wine country, cheaper, family-friendly), Matosinhos (north coast, beach lifestyle). Central old-town Ribeira is touristy and noisy for living. The Foz / Boavista corridor is the British-family default.' },
  { q: 'What\'s Porto\'s climate compared to Lisbon?', a: 'Materially cooler and wetter. Porto sits in the cooler Atlantic-influenced north — winters average 9-14°C with significant rainfall (October-March), summers 22-28°C with sea-breeze moderation. Around 220-240 sun days/year vs Lisbon\'s 290. If you want guaranteed sunshine you go to Algarve or Lisbon; Porto offers a more European-feel climate closer to Galicia in northwest Spain or northern France.' },
  { q: 'Is Porto a good DNV destination?', a: 'Yes — Porto\'s remote-worker community has grown significantly since 2022. Strong fibre internet, dense coworking scene (Selina, Porto i/o, several others), good café culture for working, easy lifestyle, AIMA processing slightly faster than Lisbon for D8 applications. Combined with the lower cost of living, Porto is increasingly preferred over Lisbon for the budget-conscious DNV cohort.' },
  { q: 'How do I qualify for IFICI in Porto?', a: 'Same rules as anywhere in Portugal — IFICI requires your activity to be on the qualifying list (research, certified tech startup, highly qualified roles in companies with >50% exports, designated priority sectors). Porto has a growing tech and export-manufacturing economy, so IFICI-qualifying employers exist but are less dense than Lisbon. If your work doesn\'t qualify, IRS Jovem (under 35) or standard IRS applies.' },
];

export default function Page() {
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: TITLE, description: DESC, datePublished: '2026-05-25', dateModified: '2026-05-25', author: { '@type': 'Person', '@id': `${SITE.url}/about#dominic-roworth`, name: 'Dominic Roworth', url: `${SITE.url}/author/dominic-roworth`, image: `${SITE.url}/dominic-roworth.jpg` }, publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url }, mainEntityOfPage: `${SITE.url}/moving-to-porto`, about: { '@type': 'Place', name: 'Porto, Portugal' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url }, { '@type': 'ListItem', position: 2, name: 'Portugal', item: `${SITE.url}/portugal` }, { '@type': 'ListItem', position: 3, name: 'Moving to Porto', item: `${SITE.url}/moving-to-porto` }] };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb"><Link href="/" className="hover:text-ink underline-offset-2 hover:underline">Home</Link><span aria-hidden>›</span><Link href="/portugal" className="hover:text-ink underline-offset-2 hover:underline">Portugal</Link><span aria-hidden>›</span><span className="text-ink">Moving to Porto</span></nav>
          <Badge tone="sea" uppercase>🇵🇹 Porto · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">Moving to Porto from the UK in 2026</h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">Porto is the value pick within Portugal — 25-35% cheaper than Lisbon on housing, a long-established British community (Oporto British School has run since 1894), and a more European feel than the Mediterranean-sunshine narrative of southern Iberia. Climate is cooler and wetter than Lisbon or the Algarve; growing remote-worker and DNV community since 2022. For British families and remote workers prioritising value over weather, Porto often wins.</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-faint"><span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span><span aria-hidden>·</span><span>Reviewed 25 May 2026</span><span aria-hidden>·</span><span>2026 figures</span></div>

          <Card variant="bordered" className="mt-8"><CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">At a glance</div>
            <ul className="mt-2 grid gap-1.5 text-[15px] text-ink/90 sm:grid-cols-2">
              <li><strong>Region:</strong> Norte (Portugal)</li>
              <li><strong>Population:</strong> 230,000 (metro 1.7m)</li>
              <li><strong>Airport:</strong> OPO — direct UK flights daily</li>
              <li><strong>Climate:</strong> 14°C avg, 220-240 sun days</li>
              <li><strong>1-bed central rent:</strong> €700-€1,200</li>
              <li><strong>3-bed family rent:</strong> €1,100-€2,200</li>
              <li><strong>International schools:</strong> 8 in metro Porto</li>
              <li><strong>Best fit:</strong> Value families, remote workers, value retirees</li>
            </ul>
          </CardBody></Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Why British movers choose Porto</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">Porto delivers Portugal&apos;s benefits — 5-year EU citizenship route, no wealth tax, no Modelo 720, IFICI for qualifying activities — at 25-35% lower housing cost than Lisbon. The Foz do Douro coastal residential corridor offers a strong family lifestyle; Boavista provides modern urban density; Vila Nova de Gaia across the river is genuinely affordable with growing British presence. The Oporto British School has anchored the British community here for over a century, with CLIP and others adding capacity in recent decades.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">The trade-offs are climate and amenity density. Porto winters are wet — January-March averages 100-150mm rainfall and 9-13°C — closer to a UK southern coast climate than Mediterranean. Restaurant and cultural amenity density is roughly half Lisbon&apos;s. For movers leaving the UK partly for sunshine and dryness, Porto disappoints; for movers prioritising value and a real city, it delivers.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Cost of living in 2026</h2>
          <div className="mt-4 overflow-hidden rounded-card border border-border">
            <table className="w-full text-left text-[14.5px]">
              <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted"><tr><th className="px-4 py-3">Category</th><th className="px-4 py-3">Couple</th><th className="px-4 py-3">Family of 4</th></tr></thead>
              <tbody className="divide-y divide-border bg-white">
                <tr><td className="px-4 py-3 font-semibold text-ink">Rent (2-3 bed central)</td><td className="px-4 py-3 text-ink/85">€1,000-€1,600</td><td className="px-4 py-3 text-ink/85">€1,300-€2,400</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Utilities + internet</td><td className="px-4 py-3 text-ink/85">€140-€200</td><td className="px-4 py-3 text-ink/85">€180-€280</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Groceries</td><td className="px-4 py-3 text-ink/85">€350-€500</td><td className="px-4 py-3 text-ink/85">€600-€900</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Eating out</td><td className="px-4 py-3 text-ink/85">€200-€400</td><td className="px-4 py-3 text-ink/85">€350-€600</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Health insurance</td><td className="px-4 py-3 text-ink/85">€80-€160</td><td className="px-4 py-3 text-ink/85">€160-€320</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">School fees (per child)</td><td className="px-4 py-3 text-ink/85">—</td><td className="px-4 py-3 text-ink/85">€800-€1,400/mo</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Transport</td><td className="px-4 py-3 text-ink/85">€100-€250</td><td className="px-4 py-3 text-ink/85">€150-€380</td></tr>
                <tr className="bg-surface"><td className="px-4 py-3 font-bold text-ink">Indicative monthly total</td><td className="px-4 py-3 font-bold text-ink">€1,900-€3,100</td><td className="px-4 py-3 font-bold text-ink">€3,500-€7,000</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Neighbourhoods worth knowing</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Foz do Douro</div><p className="mt-2 text-[14.5px] text-ink/85">Coastal residential, near OBS school, leafy and walkable. The default British-family choice. Premium for Porto but cheaper than equivalent Lisbon-coast.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Boavista</div><p className="mt-2 text-[14.5px] text-ink/85">Upscale modern urban district. Business and culture centre (Casa da Música), near international schools. Family-friendly, modern apartment stock.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Vila Nova de Gaia</div><p className="mt-2 text-[14.5px] text-ink/85">Across the river from Porto. Port-wine lodges, expanding residential, 20-30% cheaper than Foz. Family option for budget-conscious movers.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Matosinhos</div><p className="mt-2 text-[14.5px] text-ink/85">North-coast town, growing residential, beach-oriented, working seafood-port character. Real Porto-resident demographic.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Cedofeita / Bonfim</div><p className="mt-2 text-[14.5px] text-ink/85">Central upcoming districts. Cafés, design shops, mixed-demographic. Better for working-age couples than families.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Avoid for residency</div><p className="mt-2 text-[14.5px] text-ink/85">Ribeira (touristy, narrow streets, noisy); Sé old-town (similar); the Rua Santa Catarina shopping core. Fine to visit, not to live.</p></CardBody></Card>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Tax, schools, transport</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Tax:</strong> Portuguese IRS rates 13%-48%, IFICI flat 20% if eligible. No wealth tax, no Modelo 720. IRS Jovem (under-35) is materially attractive — see <Link href="/portugal/irs-jovem" className="text-warm underline-offset-2 hover:underline">/portugal/irs-jovem</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Schools:</strong> Oporto British School, CLIP (IB + bilingual), Lycée Français, CJD International School. Full list at <Link href="/portugal/schools" className="text-warm underline-offset-2 hover:underline">/portugal/schools</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Transport:</strong> OPO airport 12 km from centre, direct UK flights daily. Porto Metro (6 lines), Comboios de Portugal regional rail, easy buses. Porto is genuinely walkable in the central core; the outer Foz/Matosinhos corridor benefits from a car.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Common mistakes British movers to Porto make</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Underestimating Porto winters.</strong> January-March: cold, wet, dark by 6pm, often raining. If sunshine was your move motivation, Porto is the wrong Portuguese city.</li>
            <li><strong>Renting in the Ribeira / Sé.</strong> Touristy, noisy, short-term-let dominated. Look at Foz, Boavista, Gaia for real residential.</li>
            <li><strong>Skipping Boavista because it&apos;s &ldquo;modern.&rdquo;</strong> Some Brits expecting tile-fronted heritage Porto reject Boavista on aesthetics; it&apos;s the strongest family residential area and has the best service amenity density.</li>
            <li><strong>Forgetting Porto&apos;s climate matters for older properties.</strong> Older Porto granite houses can be cold and damp. Modern apartments handle winter much better.</li>
            <li><strong>Underestimating Porto&apos;s English coverage.</strong> Porto&apos;s English fluency is high in tourist and modern professional sectors but weaker than Lisbon&apos;s. Plan for Portuguese in everyday life.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>
        </div>
      </section>

      <RelatedResources tone="surface" heading="Keep planning your Porto move" items={[
        { kind: 'Pillar', href: '/portugal', label: 'Move to Portugal from the UK', blurb: 'Full Portugal topic cluster.' },
        { kind: 'Compare', href: '/moving-to-lisbon', label: 'Moving to Lisbon instead', blurb: 'Where Lisbon wins (climate, density) vs Porto (cost, family lifestyle).' },
        { kind: 'Deep dive', href: '/portugal/irs-jovem', label: 'Portugal IRS Jovem (under 35)', blurb: 'Strong tax break that works in Porto as well as Lisbon.' },
        { kind: 'Deep dive', href: '/portugal/schools', label: 'Schools in Portugal', blurb: 'Oporto British School, CLIP and the Porto international cluster.' },
        { kind: 'Calculator', href: '/calculators/cost-of-living', label: 'UK vs Porto cost comparator', blurb: 'Real monthly differential.' },
        { kind: 'Playbook', href: '/playbook/portugal', label: 'The Portugal Playbook · £397', blurb: 'Step-by-step Porto move plan.' },
      ]} />
    </article>
  );
}
