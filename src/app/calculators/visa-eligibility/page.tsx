import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Visa eligibility quiz | Spain, Portugal, Gibraltar for Brits',
  description:
    '12-question visa eligibility quiz. Branching logic, recommendation by country and route. Email-gated final result.',
  alternates: { canonical: '/calculators/visa-eligibility' },
};

export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-3xl">
        <Badge tone="warm" uppercase>Quiz</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          Which visa route fits you?
        </h1>
        <p className="mt-3 text-[18px] text-muted">
          12 questions, 4 minutes. The same decision tree we use in the playbook.
        </p>

        <Card variant="elevated" className="mt-8">
          <CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Quick start
            </div>
            <p className="mt-2 text-sm text-muted">
              The full branching quiz is identical to the &ldquo;Should you move abroad?&rdquo;
              quiz at <Link href="/quiz" className="text-ink underline-offset-2 hover:underline">/quiz</Link>{' '}
              but focused on visa route specifically.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/quiz?focus=visa"
                className="inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-white hover:-translate-y-px transition-all"
              >
                Start the quiz →
              </Link>
              <Link
                href="/calculators/compare-countries"
                className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-5 py-3 text-sm font-semibold text-ink hover:border-ink"
              >
                Compare countries first
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'UK to Iberia visa eligibility quiz',
            description:
              'Twelve-question branching quiz that recommends the right Spanish, Portuguese or Gibraltar residency route for British applicants in 2026.',
            url: 'https://warmercoast.com/calculators/visa-eligibility',
            applicationCategory: 'UtilitiesApplication',
            operatingSystem: 'Web',
            isAccessibleForFree: true,
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
            inLanguage: 'en-GB',
            audience: { '@type': 'PeopleAudience', geographicArea: 'United Kingdom' },
          }),
        }}
      />
    </section>
  );
}
