import Link from 'next/link';
import { COUNTRY_META, type Country } from '@/lib/site';

interface Props {
  /** The country the current sub-pillar is about. Used to exclude self. */
  current: Country;
  /** Override the heading; default "Considering other countries?". */
  heading?: string;
}

/**
 * Compact cross-country callout for sub-pillar pages. Adds outbound internal
 * links to the other two country hubs with a relevance line per country.
 * Helps Google understand topical relationships and gives users a one-click
 * exit to the comparison they were probably going to run anyway.
 */
export function CountryAlternativesCallout({
  current,
  heading = 'Considering other countries?',
}: Props) {
  const blurbs: Record<Country, string> = {
    spain:
      'Beckham Law 24% flat tax for 6 years. Digital Nomad Visa from inside Spain.',
    portugal:
      'IFICI 20% flat tax for 10 years on qualifying activity. D7 for retirees.',
    gibraltar:
      'Cat 2 caps tax at ~£44,740. Treaty with EU means open border with Spain from 15 July 2026.',
  };

  const others = (Object.keys(COUNTRY_META) as Country[]).filter((c) => c !== current);

  return (
    <aside className="my-12 rounded-card border border-border bg-surface/60 p-6 sm:p-7">
      <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
        Cross-border options
      </div>
      <h3 className="display mt-2 text-[20px] font-semibold tracking-tight text-ink text-balance">
        {heading}
      </h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {others.map((c) => {
          const meta = COUNTRY_META[c];
          return (
            <Link
              key={c}
              href={`/${c}`}
              className="block rounded-card border border-border bg-white p-4 hover:border-ink/30 transition-colors"
            >
              <div className="display text-[17px] font-semibold tracking-tight text-ink">
                {meta.name}
              </div>
              <p className="mt-1.5 text-sm text-muted">{blurbs[c]}</p>
              <div
                className="mt-3 text-xs font-semibold"
                style={{ color: meta.accent }}
              >
                Compare {meta.name} →
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-4 text-xs text-faint">
        Or run the side-by-side:{' '}
        <Link
          href="/calculators/compare-countries"
          className="font-semibold text-ink hover:underline underline-offset-2"
        >
          Spain vs Portugal vs Gibraltar calculator
        </Link>
        .
      </div>
    </aside>
  );
}
