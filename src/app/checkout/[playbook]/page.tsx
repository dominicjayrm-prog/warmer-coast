import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { CheckoutButton } from '@/components/checkout/CheckoutButton';
import { PRODUCTS, COUNTRY_META, type ProductSlug } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Checkout',
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map((slug) => ({ playbook: slug }));
}

export default function Page({ params }: { params: { playbook: string } }) {
  if (!(params.playbook in PRODUCTS)) notFound();
  const slug = params.playbook as ProductSlug;
  const product = PRODUCTS[slug];
  const accent = COUNTRY_META[slug].accent;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-content max-w-xl">
        <Badge tone="dark" uppercase>Checkout</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          {product.name}
        </h1>
        <p className="mt-3 text-muted">
          One-time payment, £{product.price}. Stripe Checkout handles cards, Apple Pay, Google Pay
          and SEPA. UK and EU VAT calculated automatically.
        </p>

        <Card variant="elevated" className="mt-8">
          <CardBody className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                  Total
                </div>
                <div className="display text-[42px] font-semibold leading-none tracking-tightest text-ink">
                  £{product.price}
                </div>
              </div>
              <div className="text-xs text-muted">
                <div>✓ Instant access</div>
                <div>✓ 12 months of updates</div>
                <div>✓ 30-day refund</div>
              </div>
            </div>
            <CheckoutButton slug={slug} accent={accent} large />
            <p className="text-xs text-faint">
              Secure payment via Stripe. VAT handled automatically at checkout. Problems
              paying? Email{' '}
              <a href="mailto:hello@warmercoast.com" className="underline underline-offset-2 hover:text-ink">
                hello@warmercoast.com
              </a>{' '}
              and we&apos;ll sort it within the day.
            </p>
          </CardBody>
        </Card>

        <Link href={`/playbook/${slug}`} className="mt-6 inline-block text-sm font-semibold text-muted hover:text-ink">
          ← Back to playbook page
        </Link>
      </div>
    </section>
  );
}
