import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spain Cost of Living 2026 | Real Numbers by Region for UK Movers',
  description:
    'Real 2026 Spanish cost of living for British movers. Andalucía vs Valencia vs Madrid vs Cataluña vs the islands. Rent, groceries, healthcare, schools. Sourced from INE, Numbeo, ONS.',
  alternates: { canonical: '/spain/cost-of-living' },
  openGraph: { url: '/spain/cost-of-living' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      subPillarSlug="cost-of-living"
      eyebrow="Cost of living · 2026"
      h1="What Spain actually costs in 2026"
      intro="Cost of living varies dramatically across Spain. The €2,200 monthly that gets you a comfortable Andalucía lifestyle is tight in Barcelona, uncomfortable in Mallorca, and luxurious in Almería. Regional differences are larger than UK equivalents — comparing Madrid to Cádiz is closer to comparing London to Liverpool than London to Manchester. Here&apos;s the realistic 2026 picture broken down by region and household size, benchmarked against UK reference cities."
      bullets={[
        'Andalucía (Cádiz, Málaga, Sevilla): cheapest mainland region, €600-€1,300 rent',
        'Valencia: best value city for British remote workers, €800-€1,400 rent',
        'Madrid: most expensive non-coastal, €1,200-€2,000, but Spanish salaries match',
        'Barcelona: premium pricing, €1,300-€2,200, controlled rent caps in some districts',
        'Balearics (Mallorca, Ibiza): summer-premium pricing, €1,400-€2,800',
        'Groceries 25-35% cheaper than UK; eating out 40-50% cheaper',
      ]}
      sections={[
        {
          id: 'rent-by-region',
          title: 'Rent by region: the dominant line item',
          body: (
            <>
              <p>
                Housing dominates almost every Spanish move budget. The cheapest mainland
                region for British movers is interior Andalucía — Cádiz capital, Jerez,
                Sevilla outskirts, Granada, Almería. A 2-bedroom flat in good condition runs
                €600-€900 per month. Coastal Andalucía (Málaga, Marbella, Estepona, Tarifa)
                doubles that to €1,100-€1,800 depending on proximity to the beach.
              </p>
              <p>
                Valencia has become the structural value play for working-age British remote
                workers. The city itself offers €900-€1,400 for a central 2-bed, with an
                excellent food and transport ecosystem, a growing English-speaking
                infrastructure, and the cheapest digital-nomad community in Western Europe.
                Madrid sits 30-50% above Valencia on housing, balanced by higher Spanish
                salaries — but most British movers do not earn Spanish salaries, so Madrid
                disproportionately suits the Beckham Law / remote-tech crowd who can absorb
                the housing premium.
              </p>
              <p>
                Cataluña, the Balearics, and Bilbao are the structural high-cost regions.
                Barcelona has rent caps in designated districts but landlords route around
                them via increased deposits and 11-month contracts. Mallorca and Ibiza
                command €1,400-€2,800 for a 2-bed depending on the season and the village.
                For pure cost optimisation, almost every mainland alternative wins.
              </p>
            </>
          ),
        },
        {
          id: 'monthly-budget',
          title: 'A realistic monthly budget for a UK couple',
          body: (
            <>
              <p>
                For two adults living in a typical Andalucía town (Cádiz, Vejer, Tarifa), expect
                a baseline monthly budget around €2,400-€3,200 covering rent (€900),
                utilities (€140), groceries (€500), eating out (€350), transport (€80, mostly
                walking + occasional Cabify/Uber), private health insurance (€140), leisure
                (€200), and contingency. That&apos;s comfortably above the local Spanish median
                — most Andalusian Spanish households live on under €2,000 per month.
              </p>
              <p>
                The same couple in Valencia adds roughly €200-€400 per month, mostly housing
                differential. In Madrid central the budget rises to €3,600-€4,400. In
                Barcelona similar. In Mallorca year-round, €4,000+ is realistic, with summer
                spikes if you rent rather than own. International school fees are a separate
                category, see below.
              </p>
            </>
          ),
        },
        {
          id: 'healthcare-schools',
          title: 'Healthcare and schools: the line items that catch people out',
          body: (
            <>
              <p>
                The Spanish public healthcare system (SAS in Andalucía, Servei Català de
                Salut in Cataluña, etc.) is generally excellent in urban areas, free at the
                point of use for residents, and consistently outperforms UK NHS in waiting
                times for non-urgent care. Most British movers also take private insurance —
                Sanitas, Adeslas, DKV — at €60-€120 per person per month, primarily to bypass
                waiting lists for specialists and to get English-speaking GPs.
              </p>
              <p>
                International schools cluster in the Costa del Sol (Málaga, Marbella, Estepona),
                Madrid, Barcelona, and Valencia. British, IB, American, and bilingual options
                exist. Fees are €10,500-€18,500 per child per year for primary, rising to
                €14,000-€22,000 for secondary. A family of four with two school-age children
                in Marbella can easily face €35,000+ per year in school fees. Spanish state
                schools are free, generally good, and bilingual programmes growing rapidly.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Instituto Nacional de Estadística (INE)', href: 'https://www.ine.es/' },
        { label: 'Numbeo Spain — cost of living index', href: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Spain' },
        { label: 'Eurostat — household consumption Spain', href: 'https://ec.europa.eu/eurostat' },
        { label: 'gov.uk — UK nationals in Spain (consular guidance)', href: 'https://www.gov.uk/guidance/living-in-spain' },
      ]}
      faqs={[
        { q: 'Is Spain still cheaper than the UK?', a: 'Materially yes for most categories outside central Madrid and Barcelona housing. Groceries 25-35% cheaper, eating out 40-50% cheaper, healthcare significantly cheaper (private supplemental). Housing varies dramatically by region — Andalucía and Valencia are dramatically cheaper than UK reference cities, Madrid central is comparable.' },
        { q: 'How much do I need to live comfortably as a single person in Valencia?', a: 'About €1,800-€2,400 per month covers a comfortable lifestyle in central Valencia: a nice 1-bed flat, eating out 3-4 times a week, gym membership, weekend trips. Cheaper in Cádiz capital or interior Andalucía at €1,500-€2,000.' },
        { q: 'What about winter heating costs?', a: 'Significantly higher than expected. Spanish houses, especially in southern Spain, are often poorly insulated against winter cold. Electric heating bills can hit €150-€250 per month in older properties from December to February. Northern Spain (Asturias, Galicia, País Vasco) has milder summers but proper Atlantic winters.' },
        { q: 'Are Spanish private schools good?', a: 'Spanish concertados (state-subsidised private schools) and fully private Spanish schools generally produce strong academic outcomes. International schools serve families wanting an English-language curriculum and onward UK or US university pathway. Most British movers in Andalucía and Valencia choose Spanish state schools for primary and switch to international for secondary.' },
      ]}
      relatedResources={[
        { kind: 'Calculator', href: '/calculators/cost-of-living', label: 'UK city vs Spain city cost comparator', blurb: 'Plug in your UK city and a Spanish target. Numbeo + ONS sourced, monthly breakdown.' },
        { kind: 'Calculator', href: '/calculators/school-cost', label: 'International school cost estimator', blurb: 'Sliding-scale fees for the main British-curriculum schools in Andalucía, Valencia, Catalonia.' },
        { kind: 'Compare', href: '/portugal/cost-of-living', label: 'Cost of living: Portugal vs Spain', blurb: 'Where Portugal is cheaper, where it’s not, and how Lisbon now compares to Madrid.' },
        { kind: 'Deep dive', href: '/spain/banking', label: 'Spanish banking for British movers', blurb: 'The fees and FX bleed that show up in your monthly outgoings if you don’t set it up right.' },
        { kind: 'Reference', href: '/thresholds', label: '2026 income thresholds for visas', blurb: 'Match your monthly outgoings to the NLV / DNV income proofs Spain requires.' },
      ]}
    />
  );
}
