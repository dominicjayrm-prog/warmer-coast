import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Moving to Barcelona from the UK in 2026: Cost, Tax, Schools, Reality';
const DESC =
  'Practical 2026 guide to moving from the UK to Barcelona. Mediterranean climate, world-class culture, and Cataluña\'s punitive wealth tax — the real picture on rents, neighbourhoods (Eixample, Gràcia, Sarrià-Sant Gervasi), British school options, the Patrimonio reality, and why HNW Brits often choose Madrid instead.';

export const metadata: Metadata = {
  title: TITLE, description: DESC, alternates: { canonical: '/moving-to-barcelona' }, openGraph: { url: '/moving-to-barcelona', title: TITLE, description: DESC },
  keywords: ['moving to Barcelona from UK', 'Barcelona British expat', 'Barcelona cost of living 2026', 'Cataluña Patrimonio', 'Sarrià-Sant Gervasi', 'British school Barcelona'],
};

const FAQS = [
  { q: 'Is Barcelona expensive in 2026?', a: 'Yes — central Barcelona rents (Eixample, Born, Gràcia) run €1,500-€2,400 for a 2-bed; family rents in Sarrià-Sant Gervasi or Pedralbes €2,000-€4,000 for 3-bed. Roughly Madrid-equivalent or slightly higher in the popular districts. Day-to-day costs comparable to Madrid. The added factor is Cataluña\'s wealth tax — HNW movers pay materially more than in Madrid/Andalucía.' },
  { q: 'Why is Cataluña\'s wealth tax a problem?', a: 'Cataluña applies no bonificación on Patrimonio — full state scale, personal allowance of €500,000 (lower than €700,000 state default). A British mover with €1.5m net worth pays roughly €5,000-€10,000/year in Patrimonio in Cataluña; the same person pays zero in Madrid or Andalucía. Above €3m the national Solidaridad surcharge applies everywhere and the gap closes — but below €3m, Cataluña is the most punitive Spanish region for HNW residents.' },
  { q: 'What are the British school options?', a: 'British School of Barcelona (BSB), Kensington School, The Olive Tree, ES International School. Fee ranges €8,000-€18,000/year. Application 6-12 months ahead for popular intakes. Less dense than Madrid or Costa del Sol but enough to support the British family community. See /spain/schools.' },
  { q: 'Which Barcelona neighbourhoods are best for British families?', a: 'Sarrià-Sant Gervasi (upper Barcelona, leafy, near international schools, family-default), Pedralbes (most upscale, near IESE business school, premium pricing), Sant Just Desvern (suburb, near BSB, more affordable than Sarrià), Castelldefels (coastal commuter town south of city, popular British family choice). Central Eixample is more couple/working-age than family.' },
  { q: 'Is Catalan a problem for British movers?', a: 'Less than feared in central Barcelona — Spanish is widely spoken and most services operate bilingually. Outside Barcelona city, the Catalan emphasis is stronger; some municipal services prioritise Catalan. School curricula are bilingual (Catalan + Spanish) with English instruction at international schools. Most British families integrate Spanish first and pick up Catalan informally over time.' },
  { q: 'How does Barcelona compare to Madrid for British movers?', a: 'Barcelona wins on climate (Mediterranean vs continental), culture/lifestyle (beach + city + Pyrenees), and proximity to France. Madrid wins on tax position (Madrid zero Patrimonio vs Cataluña full scale), on UK-airport connections (more daily flights), and on professional-services market in English. For HNW movers and Beckham-Law-focused employees, Madrid usually wins on financial outcomes; for lifestyle-focused movers below the wealth-tax bands, Barcelona may be preferable.' },
];

export default function Page() {
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: TITLE, description: DESC, datePublished: '2026-05-25', dateModified: '2026-05-25', author: { '@type': 'Person', '@id': `${SITE.url}/about#dominic-roworth`, name: 'Dominic Roworth', url: `${SITE.url}/author/dominic-roworth`, image: `${SITE.url}/dominic-roworth.jpg` }, publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url }, mainEntityOfPage: `${SITE.url}/moving-to-barcelona`, about: { '@type': 'Place', name: 'Barcelona, Spain' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url }, { '@type': 'ListItem', position: 2, name: 'Spain', item: `${SITE.url}/spain` }, { '@type': 'ListItem', position: 3, name: 'Moving to Barcelona', item: `${SITE.url}/moving-to-barcelona` }] };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb"><Link href="/" className="hover:text-ink underline-offset-2 hover:underline">Home</Link><span aria-hidden>›</span><Link href="/spain" className="hover:text-ink underline-offset-2 hover:underline">Spain</Link><span aria-hidden>›</span><span className="text-ink">Moving to Barcelona</span></nav>
          <Badge tone="warm" uppercase>🇪🇸 Cataluña · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">Moving to Barcelona from the UK in 2026</h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">Barcelona offers the best lifestyle proposition in Spain — Mediterranean coast, world-class culture, mountains and beaches within an hour, exceptional eating culture. The catch is the regional tax position: Cataluña applies no Patrimonio bonificación, which makes Barcelona the most expensive Spanish region for HNW British movers below €3m of net worth. For lifestyle buyers below the wealth-tax bands and remote workers prioritising climate over tax, Barcelona remains compelling. This is the 2026 sourced version.</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-faint"><span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span><span aria-hidden>·</span><span>Reviewed 25 May 2026</span><span aria-hidden>·</span><span>2026 figures</span></div>

          <Card variant="bordered" className="mt-8"><CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">At a glance</div>
            <ul className="mt-2 grid gap-1.5 text-[15px] text-ink/90 sm:grid-cols-2">
              <li><strong>Region:</strong> Cataluña (no Patrimonio rebate)</li>
              <li><strong>Population:</strong> 1.6m (metro 4.8m)</li>
              <li><strong>Airport:</strong> BCN — 20+ daily UK flights</li>
              <li><strong>Climate:</strong> Mediterranean, 17°C avg, 270 sun days</li>
              <li><strong>2-bed central rent:</strong> €1,500-€2,400</li>
              <li><strong>3-bed family rent (Sarrià):</strong> €2,000-€4,000</li>
              <li><strong>Patrimonio:</strong> Full scale, €500k allowance</li>
              <li><strong>Best fit:</strong> Lifestyle buyers under €1m, remote workers</li>
            </ul>
          </CardBody></Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Why British movers choose Barcelona (and where it loses)</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">Barcelona has a lifestyle proposition almost no other European city matches: warm Mediterranean climate, world-class architecture (Gaudí, Modernisme), the beach within the city, the Pyrenees 90 minutes away, France 2 hours by car. The food scene is exceptional; the international community is large and well-integrated. For lifestyle-driven British movers below HNW wealth-tax bands, this is one of the strongest moves in Europe.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">Where it loses: Cataluña&apos;s tax regime. No regional bonificación on Patrimonio means HNW movers pay material wealth tax — €5,000-€10,000/year on €1.5m net worth versus zero in Madrid or Andalucía. Sucesiones is also less generous than Madrid/Andalucía. For movers with significant net worth or large estates, this tax gap is real money over time, and many ultimately choose Madrid or Andalucía despite preferring Barcelona&apos;s lifestyle.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Cost of living in 2026</h2>
          <div className="mt-4 overflow-hidden rounded-card border border-border">
            <table className="w-full text-left text-[14.5px]">
              <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted"><tr><th className="px-4 py-3">Category</th><th className="px-4 py-3">Couple</th><th className="px-4 py-3">Family of 4</th></tr></thead>
              <tbody className="divide-y divide-border bg-white">
                <tr><td className="px-4 py-3 font-semibold text-ink">Rent (2-3 bed central/Sarrià)</td><td className="px-4 py-3 text-ink/85">€1,700-€2,800</td><td className="px-4 py-3 text-ink/85">€2,200-€4,200</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Utilities + internet</td><td className="px-4 py-3 text-ink/85">€150-€220</td><td className="px-4 py-3 text-ink/85">€200-€320</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Groceries</td><td className="px-4 py-3 text-ink/85">€450-€650</td><td className="px-4 py-3 text-ink/85">€800-€1,150</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Eating out</td><td className="px-4 py-3 text-ink/85">€300-€600</td><td className="px-4 py-3 text-ink/85">€500-€950</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Health insurance</td><td className="px-4 py-3 text-ink/85">€120-€220</td><td className="px-4 py-3 text-ink/85">€240-€440</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">School fees (per child)</td><td className="px-4 py-3 text-ink/85">—</td><td className="px-4 py-3 text-ink/85">€900-€1,600/mo</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Transport</td><td className="px-4 py-3 text-ink/85">€100-€280</td><td className="px-4 py-3 text-ink/85">€150-€450</td></tr>
                <tr className="bg-surface"><td className="px-4 py-3 font-bold text-ink">Indicative monthly total</td><td className="px-4 py-3 font-bold text-ink">€2,800-€4,800</td><td className="px-4 py-3 font-bold text-ink">€5,000-€9,500</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Neighbourhoods worth knowing</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Eixample</div><p className="mt-2 text-[14.5px] text-ink/85">Central grid district, walkable, the architectural showpiece quarter. Best for working-age couples; family-friendly with the right block but limited green space.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Gràcia</div><p className="mt-2 text-[14.5px] text-ink/85">Bohemian-residential, village-within-city feel, cafés and squares. Strong working-age and creative-professional demographic.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Sarrià-Sant Gervasi</div><p className="mt-2 text-[14.5px] text-ink/85">Upper Barcelona family district. Leafy, residential, near international schools, premium. The British-family default.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Pedralbes</div><p className="mt-2 text-[14.5px] text-ink/85">Most upscale residential. Near IESE business school. Quiet, low-density, premium pricing.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Castelldefels / Sitges</div><p className="mt-2 text-[14.5px] text-ink/85">Coastal commuter towns south of Barcelona. Family-friendly, beach lifestyle, 30-45 min train into the city. Cheaper than central Barcelona for equivalent space.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Avoid for residency</div><p className="mt-2 text-[14.5px] text-ink/85">Las Ramblas / Barceloneta seafront (touristy, noisy); the Raval for families (still problematic in patches); the Sagrada Familia immediate area (tourist swarm).</p></CardBody></Card>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Tax, schools, transport</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Tax:</strong> Patrimonio full scale with €500k allowance (less generous than €700k state default). No bonificación. Sucesiones with lower relief than Madrid/Andalucía. Beckham Law applies normally. See <Link href="/spain/patrimonio" className="text-warm underline-offset-2 hover:underline">/spain/patrimonio</Link>. For HNW above €3m, Solidaridad applies nationally and effectively equalises with other regions.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Schools:</strong> BSB, Kensington School, The Olive Tree, ES International School. Lower density than Madrid but sufficient for the British family demographic. Full list at <Link href="/spain/schools" className="text-warm underline-offset-2 hover:underline">/spain/schools</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Transport:</strong> BCN airport 12 km, 20+ daily UK flights. AVE high-speed rail to Madrid 2h30, Sevilla 5h30, Málaga 5h45. Metro (12 lines) + bus + tram network covers the city well. Central Barcelona is genuinely walkable.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Common mistakes British movers to Barcelona make</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Choosing Barcelona over Madrid without modelling the tax cost.</strong> For HNW movers with €1m+ net worth, the Cataluña Patrimonio bill compounds materially over decades. Model the lifetime cost difference before committing.</li>
            <li><strong>Renting in tourist zones.</strong> Las Ramblas / Born / Barceloneta seafront are heavily short-term-let dominated. Look at Eixample, Gràcia, Sarrià for real residential.</li>
            <li><strong>Underestimating tourist pressure in summer.</strong> July-August central Barcelona is overrun. Many residents leave the city for Costa Brava or the Pyrenees during the worst weeks.</li>
            <li><strong>Forgetting Catalan-language factor at school.</strong> Public and concertado schools deliver curriculum bilingually (Catalan + Spanish). For British families wanting Spanish-only emphasis, international schools are the path.</li>
            <li><strong>Assuming the Cataluña political situation is stable for tax planning.</strong> Cataluña has been politically active around independence and regional finance; regional tax policy can shift more than in stable regions. Plan with some uncertainty buffer.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>
        </div>
      </section>

      <RelatedResources tone="surface" heading="Keep planning your Barcelona move" items={[
        { kind: 'Pillar', href: '/spain', label: 'Move to Spain from the UK', blurb: 'Full Spain topic cluster.' },
        { kind: 'Deep dive', href: '/spain/patrimonio', label: 'Spain Patrimonio by region', blurb: 'Why Cataluña costs HNW movers materially more than Madrid or Andalucía.' },
        { kind: 'Compare', href: '/moving-to-madrid', label: 'Moving to Madrid instead', blurb: 'The tax-vs-lifestyle trade-off Brits face most often.' },
        { kind: 'Compare', href: '/moving-to-valencia', label: 'Moving to Valencia instead', blurb: 'Same Mediterranean coast at 30% lower rent.' },
        { kind: 'Calculator', href: '/calculators/cost-of-living', label: 'UK vs Barcelona cost comparator', blurb: 'Real monthly differential.' },
        { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Step-by-step Barcelona move including HNW tax modelling.' },
      ]} />
    </article>
  );
}
