import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { createClient } from '@/lib/supabase/server';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Reviews · WarmerCoast',
  description:
    'Verified buyer reviews of the WarmerCoast Spain, Portugal and Gibraltar relocation playbooks. Every review is tied to a verified Stripe purchase.',
  alternates: { canonical: '/reviews' },
  openGraph: { url: '/reviews' },
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

  const rated = testimonials.filter((t) => t.rating != null);
  const avg = rated.length > 0 ? rated.reduce((s, t) => s + (t.rating ?? 0), 0) / rated.length : null;

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content">
        <div className="max-w-2xl">
          <Badge tone="warm" uppercase>Reviews</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            {testimonials.length === 0
              ? 'Buyer reviews'
              : `${testimonials.length} verified ${testimonials.length === 1 ? 'buyer' : 'buyers'}${
                  avg != null ? ` · ${avg.toFixed(1)} stars` : ''
                }.`}
          </h1>
          <p className="mt-3 text-[18px] text-muted">
            Each review is from a buyer with a verified Stripe purchase. We don&apos;t hide low
            ratings, we don&apos;t pay for reviews, we don&apos;t use affiliates.
          </p>
        </div>

        {testimonials.length === 0 ? (
          <Card variant="bordered" className="mt-10 max-w-2xl">
            <CardBody>
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                Pre-launch
              </div>
              <h2 className="display mt-2 text-2xl font-semibold tracking-tight text-ink">
                No verified buyer reviews yet.
              </h2>
              <p className="mt-2 text-muted">
                WarmerCoast launched recently and we&apos;re refusing to seed this page with
                placeholder testimonials. Once buyers complete a playbook and submit a review through
                the email we send 14 days post-purchase, real reviews will appear here, tied to a
                Stripe purchase ID and never edited by us.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-white"
                >
                  See which playbook fits →
                </Link>
                <Link
                  href="/refund-policy"
                  className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink"
                >
                  Read the 30-day refund policy
                </Link>
              </div>
            </CardBody>
          </Card>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
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
                      <div className="text-sm font-semibold text-ink">{t.display_name ?? 'Verified buyer'}</div>
                      {t.display_location && <div className="text-xs text-muted">{t.display_location}</div>}
                    </div>
                    {t.product_slug && <Badge tone="neutral">{t.product_slug}</Badge>}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      </div>

      {avg != null && testimonials.length >= 3 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AggregateRating',
              itemReviewed: { '@type': 'Organization', name: 'WarmerCoast', url: SITE.url },
              ratingValue: avg.toFixed(1),
              reviewCount: testimonials.length,
            }),
          }}
        />
      )}
    </section>
  );
}
