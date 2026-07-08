import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { VisaRouteFinder } from './VisaRouteFinder';

export const metadata: Metadata = {
  title: 'Visa Route Finder | Spain, Portugal, Gibraltar for Brits (2026)',
  description:
    'Answer 5 questions, get your visa route ranked: NLV, DNV, D7, D8, Cat 2, HEPSS or family. Real 2026 income thresholds, honest verdicts.',
  alternates: { canonical: '/calculators/visa-eligibility' },
  openGraph: { url: '/calculators/visa-eligibility' },
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
          Five questions, two minutes. The same decision tree we use in the playbooks — with the
          real 2026 income thresholds behind each verdict.
        </p>

        <div className="mt-8">
          <VisaRouteFinder />
        </div>
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
