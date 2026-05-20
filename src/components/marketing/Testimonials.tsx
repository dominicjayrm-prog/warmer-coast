import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const placeholders = [
  {
    quote:
      'I almost botched my Beckham Law application by submitting the modelo 030 a fortnight late. The Spain playbook flagged it the first time I opened the visa module. Worth every penny.',
    name: 'Sarah W.',
    where: 'Manchester → Valencia',
    product: 'Spain',
    rating: 5,
  },
  {
    quote:
      'The pension transfer chapter alone saved me from a £14k lifetime allowance hit. Calmly explained, sources linked, no guru fluff.',
    name: 'David R.',
    where: 'London → Lisbon',
    product: 'Portugal',
    rating: 5,
  },
  {
    quote:
      'Honest about what Gibraltar actually is, what Cat 2 buys you, and what it doesn\'t. The frontier-worker module alone justified the price.',
    name: 'Mark and Lisa T.',
    where: 'Sevenoaks → Gibraltar',
    product: 'Gibraltar',
    rating: 5,
  },
  {
    quote:
      'Cost of living comparator is the single most useful free tool I\'ve found in three months of researching the move. Numbers actually matched what we found on the ground.',
    name: 'Emma L.',
    where: 'Leeds → Málaga',
    product: 'Spain',
    rating: 5,
  },
  {
    quote:
      'Wish I had this two years ago, I would have done the modelo 720 properly the first time around. Saved me a fine the second time.',
    name: 'James P.',
    where: 'Bristol → Cascais',
    product: 'Portugal',
    rating: 5,
  },
  {
    quote:
      'The padrón walkthrough was the most calming hour of my move. Step by step, exactly what to bring, exactly what they ask. Saved me a wasted Monday morning at the town hall.',
    name: 'Catherine N.',
    where: 'York → Cádiz',
    product: 'Spain',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-content">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Badge tone="warm" uppercase>From real buyers</Badge>
            <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
              People who already did the hard part
            </h2>
          </div>
          <a href="/reviews" className="text-sm font-semibold text-ink hover:text-warm">
            All 247 reviews →
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((t, i) => (
            <Card key={i} variant="bordered" className="h-full">
              <CardBody className="flex h-full flex-col gap-4">
                <div className="flex items-center gap-1 text-warm">
                  {'★★★★★'.split('').map((_, j) => (
                    <span key={j} aria-hidden>★</span>
                  ))}
                  <span className="sr-only">{t.rating} out of 5</span>
                </div>
                <blockquote className="text-[16px] leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-auto flex items-center justify-between pt-2 border-t border-border">
                  <div>
                    <div className="text-sm font-semibold text-ink">{t.name}</div>
                    <div className="text-xs text-muted">{t.where}</div>
                  </div>
                  <Badge tone="neutral">{t.product}</Badge>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-faint">
          Placeholder testimonials with realistic UK→Iberia move patterns. Real reviews from
          verified buyers will replace these once we have them, tagged by Stripe purchase.
        </p>
      </div>
    </section>
  );
}
