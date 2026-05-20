import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portugal Cost of Living 2026 | Lisbon, Porto, Algarve for UK Movers',
  description:
    'Real Portuguese cost of living in 2026 for British movers. Lisbon rent vs Porto, Algarve coast vs inland, monthly budget per household size, healthcare, schools, sourced data.',
  alternates: { canonical: '/portugal/cost-of-living' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      subPillarSlug="cost-of-living"
      eyebrow="Cost of living · 2026"
      h1="What Portugal actually costs in 2026"
      intro="Portugal has shifted significantly since the 2020-2023 expat wave. Lisbon is no longer cheap by Western European standards — central districts now rival mid-tier London on housing. The Algarve has bifurcated: coastal towns from Lagos to Tavira have premium pricing, while inland villages just 20 minutes away remain remarkably affordable. Porto holds its title as the best-value major city. Northern and central interior regions remain genuinely cheap. Here&apos;s how that breaks down for a household."
      bullets={[
        'Lisbon centre: €1,400-€2,000 rent for a 2-bed, similar to Manchester or Bristol',
        'Porto: €900-€1,400 for a 2-bed, materially cheaper than Lisbon',
        'Algarve coast (Lagos, Tavira, Vilamoura): €1,200-€1,800',
        'Algarve inland (Loulé, São Brás de Alportel): €700-€1,100',
        'Groceries: €280-€350 per person per month, around 25% cheaper than UK',
        'Private healthcare: €40-€80 per person per month (PT2/Multicare/Médis)',
      ]}
      sections={[
        {
          id: 'rent-by-region',
          title: 'Rent by region: where the money actually goes',
          body: (
            <>
              <p>
                Housing dominates the budget for almost all British movers. The post-2020
                Lisbon boom pushed central rents up by roughly 60% in three years. A 2-bedroom
                flat in Príncipe Real, Chiado, or Avenida Liberdade is now €1,800-€2,500 per
                month. Move 20 minutes out to Areeiro or Marvila and you save €400-€600. The
                Lisbon metro area (Cascais, Sintra, Estoril) trades a sea-side or village
                lifestyle for a 45-minute commute and €1,100-€1,600 rent.
              </p>
              <p>
                Porto is the structural value play among major cities. The same 2-bed flat that
                rents for €1,800 in central Lisbon costs €1,000-€1,400 in central Porto, with
                broadly equivalent quality and an arguably better food culture. Porto&apos;s
                rents have risen but not at Lisbon&apos;s pace.
              </p>
              <p>
                The Algarve splits along the same axis as Spanish Andalucía: coastal premium,
                inland value. Lagos, Albufeira, Tavira, and Vilamoura attract the British and
                Northern European crowd at €1,200-€1,800 for a 2-bed. Drive 15-20 minutes
                inland to Loulé, São Brás de Alportel, or Silves and the same property runs
                €700-€1,100. The trade-off is a longer drive to the beach (still under 30
                minutes) and a more local Portuguese feel.
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
                For two adults living in Lisbon central, expect a baseline monthly budget
                around €3,200-€4,200 covering rent (€1,400), utilities (€140), groceries (€600),
                eating out (€450), transport (€90, mostly walking + Metro), private health
                insurance (€140), leisure (€200), and contingency. That&apos;s before any
                child-related costs and before school fees if you have children in international
                schools.
              </p>
              <p>
                The same couple in Porto reduces total budget by approximately €400-€600 per
                month, mostly from the housing differential. In the Algarve inland villages,
                further reductions are possible — a couple genuinely embedded in local life
                (shopping at markets, eating out at neighbourhood restaurants rather than
                tourist spots) can live well on €2,400-€2,800 per month.
              </p>
            </>
          ),
        },
        {
          id: 'healthcare-schools',
          title: 'Healthcare and schools: the hidden line items',
          body: (
            <>
              <p>
                The Portuguese SNS (Serviço Nacional de Saúde) is free at the point of use for
                residents. Quality is good in urban centres, less consistent in rural areas, and
                waiting times for non-urgent care can be longer than UK NHS in some regions.
                Most British movers supplement with private insurance at €40-€80 per person per
                month (Multicare, Médis, AdvanceCare). For a family of four, private health
                budget around €240-€320 per month.
              </p>
              <p>
                International schools cluster in Lisbon, Porto, the Algarve, and Cascais.
                British, IB, and American curricula are all available. Fees are €8,000-€18,000
                per child per year for primary, rising to €12,000-€22,000 for secondary. A
                family with two school-age children moving to the Algarve coast can easily face
                €30,000+ in annual school fees alone. Portuguese state schools are free and
                generally good in urban areas, with bilingual programmes growing.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Instituto Nacional de Estatística (INE) — Portuguese statistics', href: 'https://www.ine.pt/' },
        { label: 'Numbeo Portugal — cost of living index', href: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Portugal' },
        { label: 'Eurostat — household consumption Portugal', href: 'https://ec.europa.eu/eurostat' },
      ]}
      faqs={[
        { q: 'Is Portugal still cheaper than the UK?', a: 'Yes for most categories outside central Lisbon housing. Groceries, restaurants, utilities and healthcare are materially cheaper. Housing in Lisbon central is now comparable to Bristol or Manchester. Porto and the Algarve inland remain 30-40% cheaper than equivalent UK locations.' },
        { q: 'How much do I need to live comfortably as a single in Porto?', a: 'About €1,800-€2,400 per month covers a comfortable lifestyle in central Porto: nice 1-bed flat, eating out 3-4 times a week, Portuguese gym membership, occasional weekend trips. Lower if you cook at home, higher if you live in the most central streets.' },
        { q: 'What about winter heating costs?', a: 'Higher than people expect. Portuguese houses are often poorly insulated for cold weather. Winter electric or gas heating bills can hit €150-€250 per month in older properties from December to February. Newer-build apartments are dramatically better.' },
        { q: 'Is Portugal really safer than the UK?', a: 'Crime rates are materially lower. Portugal consistently ranks in the top 10 safest countries globally on the Global Peace Index. Pickpocketing in tourist areas (Lisbon trams, Porto metro) is the only meaningful day-to-day concern.' },
      ]}
    />
  );
}
