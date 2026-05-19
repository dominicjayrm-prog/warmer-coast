import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';

const spokes: Record<string, { title: string; intro: string; body: string[] }> = {
  '183-day-rule': {
    title: 'Spain 183-day tax residency rule, properly explained',
    intro:
      'The trigger most Brits focus on. Important but not the only test, and easier to misread than people realise.',
    body: [
      'Tax residency is triggered if you spend more than 183 days in Spain in a calendar year. Days of arrival and departure both count.',
      '"Sporadic absences" outside Spain count toward your Spanish total unless you prove tax residency elsewhere. This catches Brits who think a long trip back to the UK protects them. It does not unless you are taxable in the UK for that period.',
      'The second test is centre of vital interests: where your spouse, children, business and most assets are. This can override the day count.',
    ],
  },
  'beckham-law': {
    title: 'Beckham Law in 2026: the actual mechanics',
    intro: 'The most important tax structuring decision a high-earning Brit can make. Six months to opt in.',
    body: [
      'Election within six months of social security registration (or first day of activity as employee in Spain).',
      '24% flat rate on Spanish-source employment income up to €600,000, 47% above. Foreign-source investment income generally not taxable in Spain during the regime.',
      'You stay in the regime for the year of move plus five more, six total. Then standard progressive tax kicks in.',
      'Not always the right choice. If you have major foreign investment income, the regime\'s treatment can be less favourable. Worked example in the playbook.',
    ],
  },
  'modelo-720': {
    title: 'Modelo 720: what you actually need to declare',
    intro:
      'The foreign-asset declaration that scared Brits for years. Penalties softened after the 2022 ECJ ruling, but the obligation remains.',
    body: [
      'Three asset categories, each with a €50,000 threshold: bank accounts, securities/funds/insurance, and real estate.',
      'If any category exceeds €50,000 at year-end, full declaration is required. Subsequent years required only if value rises by €20,000+.',
      'Post-ECJ ruling, penalties are now proportionate to standard Spanish tax penalty rules, not the previously absurd 150% minimum.',
      'Filing deadline: 31 March of the year following the relevant tax year.',
    ],
  },
  'uk-pensions': {
    title: 'How Spain taxes your UK pension',
    intro:
      'Article 17 of the UK-Spain double tax treaty. Different rules for government and private pensions.',
    body: [
      'Government pensions (Civil Service, NHS, teachers, armed forces) remain taxed only in the UK. Not taxable in Spain even when resident.',
      'State Pension and private/occupational pensions are taxable only in Spain once you are Spanish resident. UK no longer taxes them.',
      'Drawdown timing matters. A large drawdown in the year of move can be split-year treated, but the rules are precise.',
    ],
  },
  'cgt-on-uk-property': {
    title: 'CGT on selling your UK home after the Spain move',
    intro: 'The single most expensive mistake we see in year-one moves.',
    body: [
      'Sell while UK resident: UK CGT applies, principal residence relief usually fully shelters the gain.',
      'Sell after Spanish residency triggers: Spain has primary taxing rights at 19 to 28%, with no equivalent to UK principal residence relief.',
      'The 2-year deemed-disposal extension does not survive a permanent move. Plan the sale before the residency crossover.',
    ],
  },
  'isa-treatment': {
    title: 'What happens to your UK ISA when you move to Spain',
    intro: 'ISAs do not exist in Spanish tax law. The wrapper is invisible to them.',
    body: [
      'Once Spanish tax resident, the income and gains inside your ISAs are taxable in Spain as if the wrapper did not exist.',
      'You can keep the account open as a UK product, but it is no longer the tax-efficient vehicle you knew.',
      'Many buyers crystallise gains while still UK resident, then move the cash into Spain-friendly structures (e.g. a Spanish-compliant unit-linked bond).',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(spokes).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = spokes[params.slug];
  if (!s) return {};
  return { title: s.title, description: s.intro };
}

export default function Page({ params }: { params: { slug: string } }) {
  const s = spokes[params.slug];
  if (!s) notFound();

  return (
    <article className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-3xl">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/spain" className="text-muted hover:text-ink">Spain</Link>
          <span className="text-faint">/</span>
          <Link href="/spain/tax-residency" className="text-muted hover:text-ink">Tax residency</Link>
        </div>
        <Badge tone="warm" uppercase className="mt-5">Spain · Tax spoke</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          {s.title}
        </h1>
        <p className="mt-4 text-[18px] leading-relaxed text-muted">{s.intro}</p>

        <div className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-ink/90">
          {s.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className="mt-12 rounded-card border border-border bg-surface p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Related</div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {Object.entries(spokes)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 4)
              .map(([slug, sp]) => (
                <Link
                  key={slug}
                  href={`/spain/tax-residency/${slug}`}
                  className="rounded-card border border-border bg-white p-3 text-sm font-semibold text-ink hover:border-ink/30"
                >
                  {sp.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}
