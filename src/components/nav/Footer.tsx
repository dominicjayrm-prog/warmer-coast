import Link from 'next/link';
import { NewsletterCapture } from '@/components/marketing/NewsletterCapture';

const columns = [
  {
    title: 'Playbooks',
    links: [
      { href: '/playbook/spain', label: 'Move to Spain · £397' },
      { href: '/playbook/portugal', label: 'Move to Portugal · £397' },
      { href: '/playbook/gibraltar', label: 'Move to Gibraltar · £497' },
      { href: '/quiz', label: 'Which country fits you?' },
    ],
  },
  {
    title: 'Countries',
    links: [
      { href: '/spain', label: 'Spain' },
      { href: '/portugal', label: 'Portugal' },
      { href: '/gibraltar', label: 'Gibraltar' },
      { href: '/spain-vs-portugal', label: 'Spain vs Portugal' },
      { href: '/spain-vs-gibraltar', label: 'Spain vs Gibraltar' },
      { href: '/portugal-vs-gibraltar', label: 'Portugal vs Gibraltar' },
    ],
  },
  {
    title: 'Free tools',
    links: [
      { href: '/calculators/beckham-law', label: 'Beckham Law calculator' },
      { href: '/calculators/cost-of-living', label: 'Cost of living comparator' },
      { href: '/calculators/compare-countries', label: 'Country comparison' },
      { href: '/calculators/visa-eligibility', label: 'Visa eligibility quiz' },
      { href: '/calculators/pension-transfer', label: 'Pension transfer' },
      { href: '/calculators/property-tax', label: 'Property tax' },
      { href: '/calculators/school-cost', label: 'School cost' },
      { href: '/calculators/residency-timeline', label: 'Residency timeline' },
      { href: '/thresholds', label: '2026 thresholds reference' },
      { href: '/quiz', label: 'Should you move? quiz' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Dominic' },
      { href: '/author/dominic-roworth', label: 'Author: Dominic Roworth' },
      { href: '/reviews', label: 'Reviews' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' },
      { href: '/refund-policy', label: 'Refund policy' },
      { href: '/disclaimer', label: 'Disclaimer' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-night-deep text-white/90">
      <div className="container-content py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.4fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-pill bg-gradient-to-br from-warm-light to-warm" />
              <span className="display text-[19px] font-semibold tracking-tightest">
                warmer<span className="italic text-warm-light">coast</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Honest UK to Iberia relocation playbooks. Visas, tax residency, banking, healthcare,
              schools. Updated for 2026 rules including the new Gibraltar-EU border treaty.
            </p>
            <div className="mt-6 max-w-sm">
              <NewsletterCapture variant="dark" source="footer" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {columns.map((c) => (
              <div key={c.title}>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">
                  {c.title}
                </div>
                <ul className="mt-3 flex flex-col gap-2 text-sm">
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-white/80 hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/50">
          <p className="leading-relaxed">
            WarmerCoast publishes educational content on cross-border tax, residency and
            relocation. This is not regulated financial, legal or tax advice. We cite sources
            inline. For decisions specific to your situation, please consult an FCA-regulated
            adviser, a colegiado abogado or asesor fiscal, or a Gibraltar Cat 2 specialist.
          </p>
          <p className="mt-4 flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} WarmerCoast Ltd.</span>
            <span>VAT compliant via Stripe Tax.</span>
            <span>GDPR compliant.</span>
            <span>Privacy first analytics (Plausible).</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
