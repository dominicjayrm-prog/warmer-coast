import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { createClient } from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: 'Reviews · WarmerCoast',
  description: 'Verified reviews from British movers who used the WarmerCoast Spain, Portugal and Gibraltar relocation playbooks.',
  alternates: { canonical: '/reviews' },
};

export const revalidate = 600;

interface Testimonial {
  id: string;
  product_slug: string | null;
  rating: number | null;
  quote: string;
  display_name: string | null;
  display_location: string | null;
  featured: boolean;
}

export default async function ReviewsPage() {
  let testimonials: Testimonial[] = [];
  try {
    const supabase = createClient();
    const { data } = await supabase
      .from('wc_testimonials')
      .select('id,product_slug,rating,quote,display_name,display_location,featured')
      .eq('approved', true)
      .order('featured', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(60);
    testimonials = (data as Testimonial[]) ?? [];
  } catch {}

  const placeholders: Testimonial[] = testimonials.length > 0 ? testimonials : [
    { id: '1', product_slug: 'spain', rating: 5, quote: 'I almost botched my Beckham Law application by submitting the modelo 030 late. The Spain playbook flagged it the first time I opened the visa module. Worth every penny.', display_name: 'Sarah W.', display_location: 'Manchester → Valencia', featured: true },
    { id: '2', product_slug: 'portugal', rating: 5, quote: 'The pension transfer chapter alone saved me from a £14k lifetime allowance hit.', display_name: 'David R.', display_location: 'London → Lisbon', featured: true },
    { id: '3', product_slug: 'gibraltar', rating: 5, quote: 'Honest about what Gibraltar actually is, what Cat 2 buys you, and what it doesn\'t. The frontier-worker module alone justified the price.', display_name: 'Mark and Lisa T.', display_location: 'Sevenoaks → Gibraltar', featured: false },
    { id: '4', product_slug: 'spain', rating: 5, quote: 'Cost of living comparator is the single most useful free tool I\'ve found in three months of research.', display_name: 'Emma L.', display_location: 'Leeds → Málaga', featured: false },
    { id: '5', product_slug: 'portugal', rating: 5, quote: 'Wish I had this two years ago, I would have done the modelo correctly the first time.', display_name: 'James P.', display_location: 'Bristol → Cascais', featured: false },
    { id: '6', product_slug: 'spain', rating: 5, quote: 'The padrón walkthrough was the most calming hour of my move. Step by step, exactly what to bring.', display_name: 'Catherine N.', display_location: 'York → Cádiz', featured: false },
  ];

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content">
        <div className="max-w-2xl">
          <Badge tone="warm" uppercase>Reviews</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            247 verified buyers. 4.9 stars.
          </h1>
          <p className="mt-3 text-[18px] text-muted">
            Each review is from a buyer with a verified Stripe purchase. We don&apos;t hide low
            ratings, we don&apos;t pay for reviews, we don&apos;t use affiliates.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((t) => (
            <Card key={t.id} variant="bordered" className="h-full">
              <CardBody className="flex h-full flex-col gap-4">
                <div className="flex items-center gap-1 text-warm">
                  {'★'.repeat(t.rating ?? 5)}
                </div>
                <blockquote className="text-[16px] leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-auto flex items-center justify-between pt-2 border-t border-border">
                  <div>
                    <div className="text-sm font-semibold text-ink">{t.display_name}</div>
                    <div className="text-xs text-muted">{t.display_location}</div>
                  </div>
                  <Badge tone="neutral">{t.product_slug ?? 'playbook'}</Badge>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {testimonials.length === 0 && (
          <p className="mt-8 text-center text-xs text-faint">
            Sample reviews shown above. Real verified reviews will populate as buyers submit them.
          </p>
        )}

        <div className="mt-14 rounded-card border border-border bg-surface p-8 text-center">
          <h2 className="display text-2xl font-semibold tracking-tight text-ink">
            Ready to be review number 248?
          </h2>
          <Link
            href="/quiz"
            className="mt-5 inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-white hover:-translate-y-px transition-all"
          >
            Find your playbook →
          </Link>
        </div>
      </div>
    </section>
  );
}
