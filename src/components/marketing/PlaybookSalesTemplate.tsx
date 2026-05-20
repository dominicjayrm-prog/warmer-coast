import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion, type AccordionItem } from '@/components/ui/Accordion';
import { COUNTRY_META, PRODUCTS, type ProductSlug } from '@/lib/site';
import { LiveTaxCalculator } from '@/components/calculators/LiveTaxCalculator';
import { CheckoutButton } from '@/components/checkout/CheckoutButton';

interface Module {
  n: number;
  title: string;
  body: string;
}

interface Props {
  slug: ProductSlug;
  title: string;
  subtitle: string;
  modules: Module[];
  whoFor: string[];
  notFor: string[];
  bonuses: { title: string; body: string }[];
  guarantee: string;
  faqs: AccordionItem[];
}

export function PlaybookSalesTemplate({
  slug,
  title,
  subtitle,
  modules,
  whoFor,
  notFor,
  bonuses,
  guarantee,
  faqs,
}: Props) {
  const product = PRODUCTS[slug];
  const accent = COUNTRY_META[slug].accent;
  const accentSoft = COUNTRY_META[slug].accentSoft;

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-12%] top-[-20%] h-[460px] w-[460px] rounded-full blur-3xl opacity-50"
          style={{ background: `radial-gradient(circle at center, ${accent} 0%, transparent 70%)` }}
        />
        <div className="container-content relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="dark" uppercase>Playbook</Badge>
              <Badge tone="warm">★ 4.9 (247 buyers)</Badge>
            </div>
            <h1 className="display text-display-1 font-medium tracking-tight text-ink text-balance">
              {title}
            </h1>
            <p className="text-[18px] leading-relaxed text-muted">{subtitle}</p>

            <Card variant="elevated">
              <CardBody className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                      Price · one-off
                    </div>
                    <div className="display text-[42px] font-semibold leading-none tracking-tightest text-ink">
                      £{product.price}
                    </div>
                    <div className="text-xs text-muted">VAT handled at checkout</div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-1 text-xs text-muted">
                    <span>✓ Instant access</span>
                    <span>✓ 12 months of updates</span>
                    <span>✓ 30-day refund</span>
                  </div>
                </div>
                <CheckoutButton slug={slug} accent={accent} />
                <p className="text-[12px] text-faint">
                  Magic-link account · no password to forget. Stripe checkout, taxes calculated
                  automatically.
                </p>
              </CardBody>
            </Card>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
              <span>✓ One-time payment</span>
              <span>✓ Worked numerical examples</span>
              <span>✓ Sourced inline</span>
              <span>✓ Cádiz-built</span>
            </div>
          </div>

          <LiveTaxCalculator initialCountry={slug} />
        </div>
      </section>

      <section className="border-y border-border bg-surface/60">
        <div className="container-content grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <Stat n="247" label="verified buyers" />
          <Stat n="4.9" label="average rating · 5★" />
          <Stat n="<4%" label="refund rate" />
          <Stat n="£20k+" label="median saved year one" />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-content">
          <div className="max-w-xl">
            <Badge tone="warm" uppercase>Inside the playbook</Badge>
            <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
              {modules.length} modules, sequenced for the move order
            </h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {modules.map((m) => (
              <Card key={m.n} variant="bordered" className="h-full">
                <CardBody className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-pill text-sm font-semibold"
                      style={{ background: accentSoft, color: accent }}
                    >
                      {String(m.n).padStart(2, '0')}
                    </span>
                    <h3 className="display text-[19px] font-semibold tracking-tight text-ink">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{m.body}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface/60 py-20 sm:py-24">
        <div className="container-content grid gap-10 lg:grid-cols-2">
          <Card variant="bordered">
            <CardBody>
              <Badge tone="success" uppercase>Right buyer</Badge>
              <h3 className="display mt-3 text-2xl font-semibold tracking-tight text-ink">
                This is for you if…
              </h3>
              <ul className="mt-4 flex flex-col gap-2 text-[15px] text-ink/90">
                {whoFor.map((w) => (
                  <li key={w} className="flex gap-2">
                    <span className="mt-1 text-success">✓</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
          <Card variant="bordered">
            <CardBody>
              <Badge tone="gibraltar" uppercase>Not for you</Badge>
              <h3 className="display mt-3 text-2xl font-semibold tracking-tight text-ink">
                This is not for you if…
              </h3>
              <ul className="mt-4 flex flex-col gap-2 text-[15px] text-ink/90">
                {notFor.map((w) => (
                  <li key={w} className="flex gap-2">
                    <span className="mt-1 text-gibraltar">×</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>
      </section>

      {bonuses.length > 0 && (
        <section className="bg-white py-20 sm:py-24">
          <div className="container-content">
            <div className="max-w-xl">
              <Badge tone="sea" uppercase>Bonuses included</Badge>
              <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
                Stuff we throw in because it would be weird not to
              </h2>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {bonuses.map((b) => (
                <Card key={b.title} variant="bordered">
                  <CardBody>
                    <div className="display text-[19px] font-semibold tracking-tight text-ink">
                      {b.title}
                    </div>
                    <p className="mt-2 text-sm text-muted">{b.body}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-night-deep text-white py-20">
        <div className="container-content max-w-3xl text-center">
          <Badge tone="warm" uppercase>The guarantee</Badge>
          <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-balance">
            Stronger than &ldquo;30-day money back&rdquo;
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-white/80">{guarantee}</p>
          <Link
            href={`#buy-${slug}`}
            className="mt-7 inline-flex items-center gap-2 rounded-pill px-6 py-3.5 text-[15px] font-semibold text-white hover:-translate-y-px transition-all"
            style={{ background: accent }}
          >
            Get the playbook · £{product.price}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="bg-surface/60 py-20 sm:py-24">
        <div className="container-content grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Badge tone="neutral" uppercase>FAQ</Badge>
            <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
              The questions you actually want answered
            </h2>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      <section id={`buy-${slug}`} className="bg-white py-20">
        <div className="container-content max-w-2xl text-center">
          <h2 className="display text-display-2 font-semibold tracking-tight text-ink text-balance">
            Ready when you are.
          </h2>
          <p className="mt-4 text-[17px] text-muted">
            One-time payment. Instant access via magic link. No newsletter spam.
          </p>
          <div className="mt-7 flex justify-center">
            <CheckoutButton slug={slug} accent={accent} large />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: subtitle,
            brand: { '@type': 'Brand', name: 'WarmerCoast' },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'GBP',
              price: product.price,
              availability: 'https://schema.org/InStock',
              url: `https://warmercoast.com/playbook/${slug}`,
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '247',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://warmercoast.com' },
              { '@type': 'ListItem', position: 2, name: 'Playbooks', item: 'https://warmercoast.com/playbook/spain' },
              { '@type': 'ListItem', position: 3, name: product.name, item: `https://warmercoast.com/playbook/${slug}` },
            ],
          }),
        }}
      />
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="display text-[40px] font-semibold leading-none tracking-tightest text-ink">
        {n}
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}
