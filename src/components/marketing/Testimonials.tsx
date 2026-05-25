import Link from 'next/link';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { createClient } from '@/lib/supabase/server';
import { SITE } from '@/lib/site';

export const revalidate = 600;

interface Row {
  id: string;
  product_slug: string | null;
  rating: number | null;
  quote: string;
  display_name: string | null;
  display_location: string | null;
}

export async function Testimonials({ productSlug, heading }: { productSlug?: string; heading?: string } = {}) {
  let rows: Row[] = [];
  try {
    const supabase = createClient();
    let q = supabase
      .from('wc_testimonials')
      .select('id,product_slug,rating,quote,display_name,display_location')
      .eq('approved', true)
      .order('featured', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(6);
    if (productSlug) q = q.eq('product_slug', productSlug);
    const { data } = await q;
    rows = (data as Row[]) ?? [];
  } catch {}

  if (rows.length === 0) return null;

  const totalRated = rows.filter((r) => r.rating != null);
  const avg =
    totalRated.length > 0
      ? totalRated.reduce((s, r) => s + (r.rating ?? 0), 0) / totalRated.length
      : null;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-content">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Badge tone="warm" uppercase>From verified buyers</Badge>
            <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
              {heading ?? 'People who already did the hard part'}
            </h2>
          </div>
          <Link href="/reviews" className="text-sm font-semibold text-ink hover:text-warm">
            All reviews →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((t) => (
            <Card key={t.id} variant="bordered" className="h-full">
              <CardBody className="flex h-full flex-col gap-4">
                <div className="flex items-center gap-1 text-warm">
                  {'★'.repeat(t.rating ?? 5).split('').map((_, j) => (
                    <span key={j} aria-hidden>★</span>
                  ))}
                  <span className="sr-only">{t.rating ?? 5} out of 5</span>
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

        {avg != null && rows.length >= 3 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'AggregateRating',
                itemReviewed: { '@type': 'Organization', name: 'WarmerCoast', url: SITE.url },
                ratingValue: avg.toFixed(1),
                reviewCount: rows.length,
              }),
            }}
          />
        )}
      </div>
    </section>
  );
}
