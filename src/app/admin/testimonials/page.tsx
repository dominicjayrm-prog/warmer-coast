import { createClient } from '@/lib/supabase/server';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { TestimonialActions } from '@/components/admin/TestimonialActions';

interface Testimonial {
  id: string;
  product_slug: string | null;
  rating: number | null;
  quote: string;
  display_name: string | null;
  display_location: string | null;
  approved: boolean;
  featured: boolean;
  created_at: string;
}

export default async function TestimonialsAdmin() {
  const supabase = createClient();
  const { data } = await supabase
    .from('wc_testimonials')
    .select('id,product_slug,rating,quote,display_name,display_location,approved,featured,created_at')
    .order('approved', { ascending: true })
    .order('created_at', { ascending: false })
    .limit(200);
  const rows = (data as Testimonial[] | null) ?? [];

  return (
    <section>
      <Badge tone="neutral" uppercase>Reviews</Badge>
      <h1 className="display mt-2 text-display-3 font-semibold tracking-tight text-ink">
        Testimonials ({rows.length})
      </h1>

      <div className="mt-6 flex flex-col gap-3">
        {rows.length === 0 && (
          <Card variant="bordered">
            <CardBody>
              <p className="text-muted text-sm">No testimonials yet. They&apos;ll appear here as buyers submit them.</p>
            </CardBody>
          </Card>
        )}
        {rows.map((t) => (
          <Card key={t.id} variant="bordered">
            <CardBody className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-warm">{'★'.repeat(t.rating ?? 5)}</span>
                  {t.approved ? <Badge tone="success">Approved</Badge> : <Badge tone="warning">Pending</Badge>}
                  {t.featured && <Badge tone="warm">Featured</Badge>}
                  {t.product_slug && <Badge tone="neutral">{t.product_slug}</Badge>}
                </div>
                <blockquote className="mt-3 text-[15px] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="mt-2 text-xs text-muted">
                  {t.display_name ?? 'anon'} {t.display_location ? `· ${t.display_location}` : ''} · {new Date(t.created_at).toLocaleDateString('en-GB')}
                </div>
              </div>
              <TestimonialActions id={t.id} approved={t.approved} featured={t.featured} />
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
