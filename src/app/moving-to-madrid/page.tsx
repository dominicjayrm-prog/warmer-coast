import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Moving to Madrid from the UK in 2026: Cost, Areas, Beckham Law, Schools';
const DESC =
  'Practical 2026 guide to moving from the UK to Madrid. Cost of living, neighbourhoods (Salamanca, Chamberí, Chamartín, Las Rozas/Pozuelo), Madrid\'s zero-Patrimonio tax position, Beckham Law eligibility, the elite British and international school network. Sourced for British movers.';

export const metadata: Metadata = {
  title: TITLE, description: DESC, alternates: { canonical: '/moving-to-madrid' }, openGraph: { url: '/moving-to-madrid', title: TITLE, description: DESC },
  keywords: ['moving to Madrid from UK', 'Madrid British expat', 'Madrid cost of living 2026', 'Madrid Beckham Law', 'Madrid wealth tax zero', 'British school Madrid', 'King\'s College Madrid'],
};

const FAQS = [
  { q: 'Is Madrid expensive in 2026?', a: 'Mid-range relative to London. Central rents (Salamanca, Chamberí, Justicia) run €1,600-€2,800/month for a 2-bed; family rents in the western suburbs (Pozuelo, Las Rozas, Majadahonda) €1,800-€3,500 for a 3-bed villa. Day-to-day costs (groceries, restaurants, transport) are 30-40% cheaper than London. Total monthly cost for a couple typically €3,000-€4,800; family of 4 €5,500-€10,000+ depending on schools.' },
  { q: 'Why is Madrid attractive for HNW British movers?', a: 'Madrid runs a 100% Patrimonio bonificación — zero regional wealth tax. Sucesiones is 99% relieved for spouses and children. Beckham Law applies on full standard terms. Combined with proximity to UK (multiple daily flights), strong professional services market in English, and elite British/IB school options, Madrid is the strongest single city in Spain for high-earning British employees and HNW residents below €3m net worth. Above €3m the Solidaridad surcharge applies nationally.' },
  { q: 'What are the best British schools in Madrid?', a: 'King\'s College Madrid (Soto de Viñuelas), Hastings School, The British School of Madrid, Runnymede College, St George\'s British International School (Tres Cantos). Fee ranges €8,000-€22,000/year. Most cluster in the northwest (Soto, Pozuelo, Majadahonda) — driving British family residential choice. Application 12+ months ahead for popular entry years. See /spain/schools for the full NABSS list.' },
  { q: 'Which Madrid neighbourhoods are best for British families?', a: 'Northwestern suburbs dominate: Pozuelo de Alarcón, Majadahonda, Las Rozas, La Moraleja. They\'re leafy, low-density, near the international schools, and offer space at a level central Madrid can\'t. For families committed to city living, Chamberí and northern Chamartín are the central alternatives. The northwest suburb pattern is well-established — most British family moves to Madrid end up there within 18 months.' },
  { q: 'How does Madrid compare to Barcelona for British movers?', a: 'Madrid wins on tax (zero Patrimonio vs Cataluña\'s full scale), on UK-airport connections (more daily flights), and on professional-services market in English. Barcelona wins on climate (Mediterranean vs continental), culture for some tastes (Gaudí, Mediterranean), and proximity to the French border. For working-age employees with Beckham Law eligibility, Madrid usually wins on net financial outcomes; for retirees and lifestyle buyers Barcelona may be preferable.' },
  { q: 'How is Madrid\'s climate?', a: 'Continental — meaning hot dry summers (35-40°C July-August) and cold winters (3-8°C December-February, occasional sub-zero nights). Spring and autumn are excellent. Around 250 sun days/year. If you want Mediterranean climate, Madrid is not it — Costa del Sol or Valencia are warmer year-round. Madrid trades climate for the urban depth and tax position.' },
];

export default function Page() {
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: TITLE, description: DESC, datePublished: '2026-05-25', dateModified: '2026-05-25', author: { '@type': 'Person', '@id': `${SITE.url}/about#dominic-roworth`, name: 'Dominic Roworth', url: `${SITE.url}/author/dominic-roworth`, image: `${SITE.url}/dominic-roworth.jpg` }, publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url }, mainEntityOfPage: `${SITE.url}/moving-to-madrid`, about: { '@type': 'Place', name: 'Madrid, Spain' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url }, { '@type': 'ListItem', position: 2, name: 'Spain', item: `${SITE.url}/spain` }, { '@type': 'ListItem', position: 3, name: 'Moving to Madrid', item: `${SITE.url}/moving-to-madrid` }] };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb"><Link href="/" className="hover:text-ink underline-offset-2 hover:underline">Home</Link><span aria-hidden>›</span><Link href="/spain" className="hover:text-ink underline-offset-2 hover:underline">Spain</Link><span aria-hidden>›</span><span className="text-ink">Moving to Madrid</span></nav>
          <Badge tone="warm" uppercase>🇪🇸 Madrid · 2026 sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">Moving to Madrid from the UK in 2026</h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">Madrid is the strongest financial proposition for high-earning British employees moving to Spain: zero regional wealth tax, near-zero Sucesiones for close family, Beckham Law on standard terms, and an elite international school network. The climate is continental (hot summers, real winters) not Mediterranean — that&apos;s the trade-off. For Beckham-eligible movers and HNW residents below €3m of net worth, Madrid produces the cleanest tax-and-lifestyle stack in Iberia.</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-faint"><span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span><span aria-hidden>·</span><span>Reviewed 25 May 2026</span><span aria-hidden>·</span><span>2026 figures</span></div>

          <Card variant="bordered" className="mt-8"><CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">At a glance</div>
            <ul className="mt-2 grid gap-1.5 text-[15px] text-ink/90 sm:grid-cols-2">
              <li><strong>Region:</strong> Comunidad de Madrid (100% Patrimonio rebate)</li>
              <li><strong>Population:</strong> 3.3m (metro 6.8m)</li>
              <li><strong>Airport:</strong> MAD — 30+ daily UK flights</li>
              <li><strong>Climate:</strong> Continental, 16°C avg</li>
              <li><strong>2-bed central rent:</strong> €1,600-€2,800</li>
              <li><strong>3-bed northwest suburb:</strong> €1,800-€3,500</li>
              <li><strong>Patrimonio:</strong> 0% regional (100% rebate)</li>
              <li><strong>Best fit:</strong> High-earning employees, HNW under €3m, families</li>
            </ul>
          </CardBody></Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Why British movers choose Madrid</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">Three reinforcing factors drive the British move to Madrid. First, the tax stack: the Comunidad de Madrid applies a 100% bonificación on Patrimonio (zero regional wealth tax) and 99% relief on Sucesiones for spouses/children — the strongest HNW position in mainland Spain below €3m. Above €3m, Solidaridad applies nationally and the regional advantage shrinks but doesn&apos;t disappear. Second, Beckham Law: Madrid is the most common Beckham Law destination because employer demand is concentrated here — tech, finance, professional services, consulting. Third, the British/international school network: King&apos;s College, Hastings, Runnymede, BSM and others form the densest UK-tradition cluster in continental Europe outside London.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">The trade-offs are real. Climate is continental — hot dry summers (35-40°C July-August) and proper cold winters (3-8°C, occasional sub-zero nights). Distance to coast is 4-5 hours by car. The city is dense and big — central living means apartment living, suburban means commuting. For movers who prioritised &ldquo;sunshine and beach&rdquo; from the UK move, Madrid may not deliver — Costa del Sol or Valencia are better climate matches.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Cost of living in 2026</h2>
          <div className="mt-4 overflow-hidden rounded-card border border-border">
            <table className="w-full text-left text-[14.5px]">
              <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted"><tr><th className="px-4 py-3">Category</th><th className="px-4 py-3">Couple</th><th className="px-4 py-3">Family of 4</th></tr></thead>
              <tbody className="divide-y divide-border bg-white">
                <tr><td className="px-4 py-3 font-semibold text-ink">Rent (2-3 bed central / suburb)</td><td className="px-4 py-3 text-ink/85">€1,800-€2,800</td><td className="px-4 py-3 text-ink/85">€2,200-€4,200</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Utilities + internet</td><td className="px-4 py-3 text-ink/85">€150-€220</td><td className="px-4 py-3 text-ink/85">€200-€320</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Groceries</td><td className="px-4 py-3 text-ink/85">€450-€650</td><td className="px-4 py-3 text-ink/85">€800-€1,150</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Eating out</td><td className="px-4 py-3 text-ink/85">€300-€600</td><td className="px-4 py-3 text-ink/85">€500-€950</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Health insurance</td><td className="px-4 py-3 text-ink/85">€120-€220</td><td className="px-4 py-3 text-ink/85">€240-€440</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">School fees (per child, British)</td><td className="px-4 py-3 text-ink/85">—</td><td className="px-4 py-3 text-ink/85">€1,100-€2,000/mo</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Transport</td><td className="px-4 py-3 text-ink/85">€100-€280</td><td className="px-4 py-3 text-ink/85">€150-€450</td></tr>
                <tr className="bg-surface"><td className="px-4 py-3 font-bold text-ink">Indicative monthly total</td><td className="px-4 py-3 font-bold text-ink">€2,900-€4,800</td><td className="px-4 py-3 font-bold text-ink">€5,300-€9,700</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Neighbourhoods worth knowing</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Salamanca</div><p className="mt-2 text-[14.5px] text-ink/85">Madrid&apos;s most upmarket central district. Wide boulevards, embassies, luxury retail. Premium pricing. Family-friendly with private school accessibility.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Chamberí</div><p className="mt-2 text-[14.5px] text-ink/85">Refined central residential, leafy, family-typical, walkable to centre. The Spanish &ldquo;old money&rdquo; alternative to Salamanca.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Chamartín / Tetuán north</div><p className="mt-2 text-[14.5px] text-ink/85">Northern Madrid family residential. Closer to international schools, AVE station, business district. Modern apartment stock.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Pozuelo de Alarcón / Majadahonda</div><p className="mt-2 text-[14.5px] text-ink/85">Northwest suburbs. The British and HNW family default — near international schools, low-density villa stock, green space. 25-40 min from centre.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Las Rozas / La Moraleja</div><p className="mt-2 text-[14.5px] text-ink/85">Further northwest suburbs. La Moraleja is gated luxury HNW; Las Rozas is suburban-family standard. Both near schools.</p></CardBody></Card>
            <Card variant="bordered"><CardBody><div className="font-semibold text-ink">Avoid for residency</div><p className="mt-2 text-[14.5px] text-ink/85">Sol / Gran Vía (tourist core) for living; the southern industrial belt unless you have specific reason; immediate Barajas surroundings (airport noise).</p></CardBody></Card>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Tax, schools, transport</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Tax:</strong> 100% Patrimonio bonificación = zero regional wealth tax below €3m. Sucesiones 99% relief for Group I&II. Standard Beckham Law applies — see <Link href="/spain/tax-residency/beckham-law" className="text-warm underline-offset-2 hover:underline">/spain/tax-residency/beckham-law</Link>. Above €3m, Solidaridad applies nationally — see <Link href="/spain/solidaridad" className="text-warm underline-offset-2 hover:underline">/spain/solidaridad</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Schools:</strong> Madrid hosts King&apos;s College, Hastings, Runnymede, BSM, St George&apos;s British International School, plus IB schools and a strong network of bilingual public/concertado options. The cluster is concentrated northwest. Full landscape at <Link href="/spain/schools" className="text-warm underline-offset-2 hover:underline">/spain/schools</Link>.</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85"><strong>Transport:</strong> MAD airport (Barajas) is the largest Spanish airport with 30+ daily UK flights. 12 metro lines + dense bus network + Cercanías commuter rail. AVE high-speed rail to Barcelona 2h30, Málaga 2h35, Valencia 1h45, Sevilla 2h30. Madrid is genuinely walkable in many central neighbourhoods; northwest suburbs require a car for school runs.</p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Common mistakes British movers to Madrid make</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15.5px] text-ink/85">
            <li><strong>Choosing central living for a family.</strong> Most British families move to the northwest suburbs (Pozuelo, Majadahonda, Las Rozas) within 18 months for school proximity. Skip the year-one detour — go suburbs from day one if school is central to the plan.</li>
            <li><strong>Underestimating summer heat.</strong> July-August Madrid is intensely hot and many residents leave the city. Plan for A/C costs €150-€350/month in summer; some families maintain a coastal second home for the worst weeks.</li>
            <li><strong>Skipping the Beckham election.</strong> The 6-month window is absolute — see <Link href="/spain/tax-residency/beckham-law" className="text-warm underline-offset-2 hover:underline">/spain/tax-residency/beckham-law</Link> for the worked sequencing.</li>
            <li><strong>Forgetting AVE for weekend escapes.</strong> Madrid is landlocked but the AVE makes Málaga, Valencia, Sevilla, Alicante all weekend-trip-friendly. Use it.</li>
            <li><strong>Underestimating Spanish-language pressure.</strong> Madrid&apos;s English coverage in everyday life is weaker than Marbella&apos;s. Plan for genuine conversational Spanish in the first 12-18 months.</li>
          </ul>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5"><Accordion items={FAQS} /></div>
        </div>
      </section>

      <RelatedResources tone="surface" heading="Keep planning your Madrid move" items={[
        { kind: 'Pillar', href: '/spain', label: 'Move to Spain from the UK', blurb: 'Full Spain topic cluster.' },
        { kind: 'Deep dive', href: '/spain/tax-residency/beckham-law', label: 'Beckham Law deep dive', blurb: 'The 6-year flat-tax regime most Madrid-moving British employees use.' },
        { kind: 'Deep dive', href: '/spain/patrimonio', label: 'Why Madrid Patrimonio is zero', blurb: 'The 100% regional bonificación mechanic.' },
        { kind: 'Compare', href: '/moving-to-malaga', label: 'Moving to Málaga instead', blurb: 'Same tax region (Andalucía vs Madrid both zero) plus climate.' },
        { kind: 'Compare', href: '/moving-to-barcelona', label: 'Moving to Barcelona instead', blurb: 'Where Barcelona&apos;s climate wins but Cataluña&apos;s wealth tax loses.' },
        { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Step-by-step Madrid move with Beckham Law sequencing and vetted asesor intros.' },
      ]} />
    </article>
  );
}
