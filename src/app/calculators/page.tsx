import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Free relocation calculators for British movers to Iberia',
  description: 'Eight free interactive calculators: Beckham Law, cost of living, visa eligibility, country comparison, pension transfer, property tax, schools.',
  alternates: { canonical: '/calculators' },
};

const tools = [
  { href: '/calculators/compare-countries', title: 'Spain vs Portugal vs Gibraltar', blurb: 'Side-by-side tax, cost, visa difficulty, weather, English-speaking, schools.', tag: 'New' },
  { href: '/calculators/beckham-law', title: 'Beckham Law calculator', blurb: 'Full version of the homepage tool. Deductions, social security, family.', tag: 'Top' },
  { href: '/calculators/cost-of-living', title: 'Cost of living comparator', blurb: 'UK city → target city monthly breakdown, sourced from Numbeo + ONS.' },
  { href: '/calculators/visa-eligibility', title: 'Visa eligibility quiz', blurb: '12 questions, branching logic, recommendation by country and route.' },
  { href: '/calculators/pension-transfer', title: 'Pension transfer estimator', blurb: 'QROPS, OTS, lifetime allowance, UK→Iberia residency rules.' },
  { href: '/calculators/property-tax', title: 'Property purchase tax', blurb: 'IBI, ITP, plusvalía, IMI: the property-side surprises.' },
  { href: '/calculators/school-cost', title: 'International school cost', blurb: 'British, American, IB schools across Iberia.' },
  { href: '/calculators/residency-timeline', title: 'Residency timeline', blurb: 'When you become tax-resident, day counting, the 183-day clock.' },
  { href: '/calculators/bank-comparator', title: 'Bank comparator', blurb: 'Spanish, Portuguese, and Gibraltar banks for British movers.' },
];

export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content">
        <div className="max-w-2xl">
          <Badge tone="sea" uppercase>Free tools</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            Free relocation calculators
          </h1>
          <p className="mt-3 text-[18px] text-muted">
            Nine interactive tools. Good enough on their own that you might not need the playbook.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group flex h-full flex-col rounded-card border border-border bg-white p-5 transition-all hover:-translate-y-px hover:border-ink/40 hover:shadow-card"
            >
              <div className="flex items-center justify-between">
                <div className="display text-[17px] font-semibold tracking-tight text-ink">{t.title}</div>
                {t.tag && <Badge tone="warm">{t.tag}</Badge>}
              </div>
              <div className="mt-2 text-[13px] leading-relaxed text-muted">{t.blurb}</div>
              <div className="mt-4 text-[13px] font-semibold text-warm group-hover:translate-x-0.5 transition-transform">Open tool →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
