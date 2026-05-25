import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';

export interface RelatedResource {
  href: string;
  label: string;
  blurb: string;
  /** Optional small chip label (e.g. "Calculator", "Reference", "Deep dive"). */
  kind?: string;
}

interface Props {
  heading?: string;
  subheading?: string;
  items: RelatedResource[];
  /** Light background by default — set tone="surface" on white sections to alternate. */
  tone?: 'white' | 'surface';
}

export function RelatedResources({
  heading = 'Keep going',
  subheading = 'Free, sourced resources that pair with this one.',
  items,
  tone = 'surface',
}: Props) {
  if (!items.length) return null;
  return (
    <section className={tone === 'white' ? 'bg-white py-16 sm:py-20' : 'bg-surface/60 py-16 sm:py-20'}>
      <div className="container-content">
        <div className="max-w-2xl">
          <Badge tone="neutral" uppercase>Related</Badge>
          <h2 className="display mt-4 text-display-3 font-semibold tracking-tight text-ink text-balance">
            {heading}
          </h2>
          <p className="mt-2 text-[15.5px] text-muted">{subheading}</p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group flex h-full flex-col rounded-card border border-border bg-white p-5 transition-all hover:-translate-y-px hover:border-ink/40 hover:shadow-card"
            >
              {r.kind && (
                <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-warm">
                  {r.kind}
                </div>
              )}
              <div className="display mt-1 text-[17px] font-semibold tracking-tight text-ink">
                {r.label}
              </div>
              <div className="mt-2 text-[13px] leading-relaxed text-muted">{r.blurb}</div>
              <div className="mt-4 text-[13px] font-semibold text-warm group-hover:translate-x-0.5 transition-transform">
                Read →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
