import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Moving to Valencia from the UK in 2026: Cost, Areas, Tax, Schools';
const DESC =
  'Practical 2026 guide to moving from the UK to Valencia. Mid-budget alternative to Madrid and Barcelona. Real rental costs, neighbourhoods (Ruzafa, El Carmen, Ensanche, Cabanyal), British school options, the 2025-2026 Valencia Patrimonio reform raising the wealth-tax allowance to €1m, beach lifestyle plus a real city.';

export const metadata: Metadata = {
  title: TITLE, description: DESC, alternates: { canonical: '/moving-to-valencia' }, openGraph: { url: '/moving-to-valencia', title: TITLE, description: DESC },
  keywords: ['moving to Valencia from UK', 'Valencia British expat', 'Valencia cost of living 2026', 'Ruzafa Valencia', 'Valencia Patrimonio reform', 'Caxton College Valencia'],
};

const FAQS = [
  { q: 'Is Valencia cheaper than Madrid or Barcelona?', a: 'Yes, materially. Central Valencia rents run 25-40% below central Madrid for equivalent properties. A 2-bed central flat in Ruzafa or Ensanche is €1,100-€1,700/month vs €1,800-€2,800 in Madrid Salamanca. Day-to-day costs (groceries, eating out, public transport) are also lower. Valencia is currently the strongest mid-budget Spanish city option for British movers wanting urban lifestyle without Madrid/Barcelona prices.' },
  { q: 'Has Valencia\'s wealth tax position changed?', a: 'Yes — the Valencian government raised the individual Patrimonio allowance to €1m and the primary-residence allowance to €300k in 2025, taking effect from 2026 tax year. This is materially better than the state default (€700k allowance) but still less generous than Madrid/Andalucía (100% rebate). For HNW British movers Valencia now sits as a middle option — better than Cataluña, worse than Madrid/Andalucía on wealth tax.' },
  { q: 'What are the British school options in Valencia?', a: 'Caxton College (Puçol, 20 min north) is the established premium British-curriculum school. The British School of Vila-real (1 hour north) and El Plantío International School (Burjassot) are alternatives. Fee ranges €8,000-€18,000/year. Application 6-12 months ahead for popular intakes. Coverage is less dense than Costa del Sol but sufficient for the British community in greater Valencia.' },
  { q: 'Where do British families typically live in Valencia?', a: 'Central families: Ruzafa, El Pla del Real, or near Turia gardens. Beach families: Cabanyal-Canyamelar (rapidly gentrifying), El Saler southward. Suburb families: Puçol/El Vedat (proximity to Caxton College), Bétera, Rocafort. Each has trade-offs — central is car-free, beach areas mean longer school commutes, suburbs are quietest.' },
  { q: 'How is Valencia\'s climate vs Madrid or the Costa del Sol?', a: 'Better than Madrid (more moderate winters, cooling sea breeze in summer), slightly cooler than the Costa del Sol (winters 10-15°C vs 12-18°C). Around 300 sun days a year. Summer can hit 35-38°C inland; the coast moderates it. Less humid than the Costa del Sol but warmer than Barcelona in winter.' },
  { q: 'Is Valencia practical for a British remote worker?', a: 'Strongly yes. The Valencia airport (VLC) runs UK flights to Heathrow, Gatwick, Stansted, Manchester, Birmingham, Edinburgh. AVE high-speed rail to Madrid in 1h45, to Barcelona in 3h. Fast fibre infrastructure citywide. Strong remote-work and DNV community formed during 2020-2024 — coworking spaces, English-friendly cafés. Valencia is one of the top three Spanish DNV destinations alongside Madrid and Barcelona.' },
];

export default function Page() {
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: TITLE, description: DESC, datePublished: '2026-05-25', dateModified: '2026-05-25', author: { '@type': 'Person', '@id': `${SITE.url}/about#dominic-roworth`, name: 'Dominic Roworth', url: `${SITE.url}/author/dominic-roworth`, image: `${SITE.url}/dominic-roworth.jpg` }, publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url }, mainEntityOfPage: `${SITE.url}/moving-to-valencia`, about: { '@type': 'Place', name: 'Valencia, Spain' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url }, { '@type': 'ListItem', position: 2, name: 'Spain', item: `${SITE.url}/spain` }, { '@type': 'ListItem', position: 3, name: 'Moving to Valencia', item: `${SITE.url}/moving-to-valencia` }] };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb"><Link href="/" className="hover:text-ink underline-offset-2 hover:underline">Home</Link><span aria-hidden>›</span><Link href="/spain" className="hover:text-ink underline-offset-2 hover:underline">Spain</Link><span aria-hidden>›</span><span className="text-ink">Moving to Valencia</span></nav>
          <Badge tone="warm" uppercase>🇪🇸 Comunidad Valenciana · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">Moving to Valencia from the UK in 2026</h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">Valencia is the value pick: real Spanish city, Mediterranean coast, AVE-connected to Madrid in 1h45, 25-40% cheaper than Madrid or Barcelona on housing, and the most sustainable mid-budget Spanish destination for British families. The 2025-2026 Patrimonio reform improved its HNW positioning materially. This is the 2026 sourced version — neighbourhoods, real costs, the school landscape and the tax picture.</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-faint"><span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span><span aria-hidden>·</span><span>Reviewed 25 May 2026</span><span aria-hidden>·</span><span>2026 figures</span></div>

          <Card variant="bordered" className="mt-8"><CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">At a glance</div>
            <ul className="mt-2 grid gap-1.5 text-[15px] text-ink/90 sm:grid-cols-2">
              <li><strong>Region:</strong> Comunidad Valenciana</li>
              <li><strong>Population:</strong> 790,000 (metro 1.6m)</li>
              <li><strong>Airport:</strong> VLC — direct UK flights daily</li>
              <li><strong>Climate:</strong> 18°C avg, 300 sun days</li>
              <li><strong>1-bed central rent:</strong> €700-€1,200</li>
              <li><strong>3-bed family rent:</strong> €1,200-€2,200</li>
              <li><strong>Patrimonio 2026:</strong> €1m individual allowance</li>
              <li><strong>Best fit:</strong> Mid-budget families, remote workers, value retirees</li>
            </ul>
          </CardBody></Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Why British movers choose Valencia</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">Valencia hits the sweet spot for British movers who want a Spanish city without the Madrid/Barcelona price point. You get Mediterranean climate, the Turia park (a former riverbed turned 9km linear park through the city), the City of Arts and Sciences architecture, a serious eating culture (paella valenciana originated here), and a real Spanish-resident demographic rather than expat-dominated bubbles. The British community is established but not overwhelming — about 8,000-12,000 British residents in greater Valencia.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">The DNV/digital-nomad community in Valencia exploded 2022-2024 with coworking spaces, English-friendly cafés and a remote-work-friendly municipal positioning. Combined with the new Patrimonio allowance of €1m (vs €700k state default), Valencia became materially more competitive for mid-HNW British movers in 2026.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Cost of living in 2026</h2>
          <div className="mt-4 overflow-hidden rounded-card border border-border">
            <table className="w-full text-left text-[14.5px]">
              <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted"><tr><th className="px-4 py-3">Category</th><th className="px-4 py-3">Couple</th><th className="px-4 py-3">Family of 4</th></tr></thead>
              <tbody className="divide-y divide-border bg-white">
                <tr><td className="px-4 py-3 font-semibold text-ink">Rent (2-3 bed central)</td><td className="px-4 py-3 text-ink/85">€1,000-€1,600</td><td className="px-4 py-3 text-ink/85">€1,200-€2,200</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Utilities + internet</td><td className="px-4 py-3 text-ink/85">€130-€180</td><td className="px-4 py-3 text-ink/85">€170-€250</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Groceries</td><td className="px-4 py-3 text-ink/85">€350-€500</td><td className="px-4 py-3 text-ink/85">€600-€900</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Eating out</td><td className="px-4 py-3 text-ink/85">€200-€400</td><td className="px-4 py-3 text-ink/85">€350-€650</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Health insurance</td><td className="px-4 py-3 text-ink/85">€90-€180</td><td className="px-4 py-3 text-ink/85">€180-€380</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">School fees (per child)</td><td className="px-4 py-3 text-ink/85">—</td><td className="px-4 py-3 text-ink/85">€700-€1,500/mo</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Transport</td><td className="px-4 py-3 text-ink/85">€100-€220</td><td className="px-4 py-3 text-ink/85">€150-€350</td></tr>
                <tr className="bg-surface"><td className="px-4 py-3 font-bold text-ink">Indicative monthly total</td><td className="px-4 py-3 font-bold text-ink">€2,100-€3,400</td><td className="px-4 py-3 font-bold text-ink">€3,900-€7,500</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Neighbourhoods worth knowing</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Ruzafa</div><p className="mt-2 text-[14.5px] text-ink/85">Hipster-gentrifying quarter south of the centre. Best café/bar density. Best for working-age couples and DNV holders.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Ensanche (Eixample)</div><p className="mt-2 text-[14.5px] text-ink/85">Wide-boulevard residential, dignified, mixed-age. Walking distance to centre. Strong family demographic.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">El Carmen</div><p className="mt-2 text-[14.5px] text-ink/85">Old town. Touristy in the day, atmospheric. Best for adults without children who prioritise atmosphere over schools.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Cabanyal-Canyamelar</div><p className="mt-2 text-[14.5px] text-ink/85">Beach neighbourhood, gentrifying fast, atmospheric old fishing-village houses. Beach 5 min walk. Good value still in 2026.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Puçol / El Vedat / Rocafort</div><p className="mt-2 text-[14.5px] text-ink/85">Northern suburbs. Near Caxton College, lower density, family-typical. 20-30 min drive into central Valencia.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Avoid for residency</div><p className="mt-2 text-[14.5px] text-ink/85">Russafa/Ruzafa weekend nightlife strip for sleeping; the Marina sur for full-time living; the immediate airport surroundings.</p></CardBody></Card>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Tax, schools, transport</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Tax:</strong> Patrimonio allowance €1m individual + €300k primary residence (2025-2026 reform) — much better than €700k state default but not Madrid/Andalucía-tier. Sucesiones: 99% bonificación for Groups I&II plus €100k allowance — effectively close to zero for spouse/child inheritance. Beckham Law applies on standard terms. See <Link href="/spain/patrimonio" className="text-warm underline-offset-2 hover:underline">/spain/patrimonio</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Schools:</strong> Caxton College Puçol is the main British-curriculum option; El Plantío International School and others fill secondary needs. Application 6-12 months ahead. See <Link href="/spain/schools" className="text-warm underline-offset-2 hover:underline">/spain/schools</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Transport:</strong> VLC airport 8 km from centre, daily UK flights. AVE high-speed rail to Madrid 1h45, Barcelona 3h. Within Valencia: 4 metro lines, dense bus network, the city is genuinely walkable (Turia park makes it especially pleasant). Many British families remain car-free in Valencia.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Common mistakes British movers to Valencia make</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Renting in tourist short-term zones.</strong> The El Carmen / Plaza de la Reina core is heavily short-term-let dominated. Look in Ruzafa, Ensanche, or beach for real residential.</li>
            <li><strong>Underestimating Valencia&apos;s Catalan/Valencian factor.</strong> Some official forms are bilingual; the regional language (Valencià) appears in school curricula. Less of a barrier than Cataluña but worth noting.</li>
            <li><strong>Choosing Valencia for the Madrid commute.</strong> 1h45 AVE is fine for occasional trips but not a daily commute. If you need Madrid daily, live in Madrid.</li>
            <li><strong>Comparing Valencia to Costa del Sol on English coverage.</strong> Valencia has less English-default infrastructure than Marbella; the trade-off is more Spanish integration and lower costs.</li>
            <li><strong>Forgetting the 2026 Patrimonio change.</strong> Anyone planning HNW residency with €1m+ net worth needs to model the new Valencia allowance carefully — modelling against the old €500k allowance gives the wrong answer.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>
        </div>
      </section>

      <RelatedResources tone="surface" heading="Keep planning your Valencia move" items={[
        { kind: 'Pillar', href: '/spain', label: 'Move to Spain from the UK', blurb: 'Full Spain topic cluster: tax, visas, banking, residency.' },
        { kind: 'Deep dive', href: '/spain/patrimonio', label: 'Spain Patrimonio by region', blurb: 'How Valencia\'s 2025-2026 reform changes its HNW positioning.' },
        { kind: 'Compare', href: '/moving-to-madrid', label: 'Moving to Madrid instead', blurb: 'Where Madrid wins (zero Patrimonio) and where Valencia wins (cost, climate, beach).' },
        { kind: 'Compare', href: '/moving-to-barcelona', label: 'Moving to Barcelona instead', blurb: 'Why Valencia is the value play vs Barcelona for British families.' },
        { kind: 'Calculator', href: '/calculators/cost-of-living', label: 'UK vs Valencia cost comparator', blurb: 'Real monthly differential by UK city.' },
        { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Step-by-step move plan with Valencia-specific neighbourhood guidance.' },
      ]} />
    </article>
  );
}
