'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Card, CardBody } from '@/components/ui/Card';
import { cn } from '@/lib/cn';
import { NewsletterCapture } from '@/components/marketing/NewsletterCapture';

type Dest = 'spain' | 'portugal' | 'gibraltar' | 'unsure';
type IncomeType = 'passive' | 'remote' | 'local-job' | 'business' | 'none';
type Band = 'lt1k' | '1to2.5k' | '2.5to5k' | 'gt5k';
type Wealth = 'lt250k' | '250kto2m' | 'gt2m';
type Family = 'yes' | 'no';

interface Answers {
  dest?: Dest;
  incomeType?: IncomeType;
  band?: Band;
  wealth?: Wealth;
  euFamily?: Family;
}

interface Verdict {
  route: string;
  country: string;
  fit: 'strong' | 'possible' | 'blocked';
  why: string;
  threshold?: string;
  link: { href: string; label: string };
}

const BAND_MID: Record<Band, number> = { lt1k: 800, '1to2.5k': 1_750, '2.5to5k': 3_600, gt5k: 7_000 };

function decide(a: Required<Omit<Answers, 'dest'>> & { dest: Dest }): Verdict[] {
  const monthly = BAND_MID[a.band];
  const out: Verdict[] = [];

  const wantSpain = a.dest === 'spain' || a.dest === 'unsure';
  const wantPortugal = a.dest === 'portugal' || a.dest === 'unsure';
  const wantGib = a.dest === 'gibraltar' || a.dest === 'unsure';

  // EU family route trumps thresholds everywhere in the EU.
  if (a.euFamily === 'yes' && (wantSpain || wantPortugal)) {
    out.push({
      route: 'EU family member / family reunification',
      country: a.dest === 'portugal' ? 'Portugal' : 'Spain',
      fit: 'strong',
      why: 'Joining an EU-citizen family member bypasses the income-visa routes entirely — residence card with full work rights, no income threshold of your own.',
      link: { href: a.dest === 'portugal' ? '/portugal/visa-guide' : '/spain/visa-guide', label: 'Family route guide' },
    });
  }

  if (wantSpain) {
    if (a.incomeType === 'passive') {
      const ok = monthly >= 2_400;
      out.push({
        route: 'Spain — Non-Lucrative Visa (NLV)',
        country: 'Spain',
        fit: ok ? 'strong' : 'possible',
        threshold: '€2,400/month (€28,800/yr) + €600/month per dependant — 2026, 400% IPREM',
        why: ok
          ? 'Passive income above the 400% IPREM bar is exactly what the NLV is built for. Remember: zero work allowed, including remote.'
          : 'Your passive income sits under the €2,400/month bar — top up with documented savings (~4× the annual requirement) or reconsider Portugal\'s D7, whose bar is a third of Spain\'s.',
        link: { href: '/spain/visa-guide/non-lucrative', label: 'NLV deep dive' },
      });
    }
    if (a.incomeType === 'remote') {
      const ok = monthly >= 2_849;
      out.push({
        route: 'Spain — Digital Nomad Visa (DNV)',
        country: 'Spain',
        fit: ok ? 'strong' : 'possible',
        threshold: '€2,849/month gross (200% SMI, 2026) + uplifts for dependants',
        why: ok
          ? 'Remote income above 200% SMI qualifies — and the DNV unlocks Beckham Law (24% flat) on top. The strongest combined package in Iberia for remote workers.'
          : 'Under the €2,849/month bar the DNV fails. Portugal\'s D8 needs even more (€3,480) — consider growing the contract first, or Portugal\'s D7 if any of your income is passive.',
        link: { href: '/spain/visa-guide/digital-nomad', label: 'DNV deep dive' },
      });
    }
    if (a.incomeType === 'local-job') {
      out.push({
        route: 'Spain — work visa (cuenta ajena)',
        country: 'Spain',
        fit: 'possible',
        why: 'Needs a Spanish employer to sponsor. Realistic in tech, teaching (British schools), tourism management and healthcare; the employer drives the process.',
        link: { href: '/spain/visa-guide', label: 'Work-route guide' },
      });
    }
    if (a.incomeType === 'none' && a.wealth !== 'lt250k') {
      out.push({
        route: 'Spain — NLV on savings',
        country: 'Spain',
        fit: 'possible',
        threshold: 'Consulates typically want ~4× the annual bar (≈ €115k+) in liquid savings',
        why: 'No income but real capital: some consulates accept savings-backed NLV applications case-by-case. Pair with any recurring income you can evidence.',
        link: { href: '/spain/visa-guide/non-lucrative', label: 'NLV savings route' },
      });
    }
  }

  if (wantPortugal) {
    if (a.incomeType === 'passive') {
      const ok = monthly >= 870;
      out.push({
        route: 'Portugal — D7 (passive income)',
        country: 'Portugal',
        fit: ok ? 'strong' : 'possible',
        threshold: '≈ €870/month + 50% spouse + 30% per child (2026) — plus ~12 months of savings strengthens the file',
        why: ok
          ? 'The D7 bar is the lowest in Iberia and pensions, rent and dividends all count. Five years to dual-eligible citizenship is the kicker.'
          : 'Below even the D7 bar the numbers get hard everywhere — build the income base first.',
        link: { href: '/portugal/visa-guide', label: 'D7 deep dive' },
      });
    }
    if (a.incomeType === 'remote') {
      const ok = monthly >= 3_480;
      out.push({
        route: 'Portugal — D8 (digital nomad)',
        country: 'Portugal',
        fit: ok ? 'strong' : 'possible',
        threshold: '€3,480/month gross (4× minimum wage, 2026)',
        why: ok
          ? 'Remote income clears the 4× minimum-wage bar. Weigh IFICI eligibility (20% flat) — activity-gated, so check the qualifying list before assuming.'
          : 'Under €3,480/month the D8 fails while Spain\'s DNV (€2,849) may still work — that gap decides many Iberia choices.',
        link: { href: '/portugal/visa-guide', label: 'D8 deep dive' },
      });
    }
    if (a.incomeType === 'business') {
      out.push({
        route: 'Portugal — D2 (entrepreneur)',
        country: 'Portugal',
        fit: 'possible',
        why: 'For founders genuinely operating a Portuguese business — needs a credible business plan and means. Also compare the Golden Visa fund route (€500k) if this is about optionality rather than relocation.',
        link: { href: '/portugal/visa-guide', label: 'D2 / Golden Visa guide' },
      });
    }
  }

  if (wantGib) {
    if (a.wealth === 'gt2m') {
      out.push({
        route: 'Gibraltar — Category 2',
        country: 'Gibraltar',
        fit: 'strong',
        threshold: '£2m+ net worth + approved accommodation; tax capped £37,000–£42,380/yr',
        why: 'Above £2m net worth (and ideally £125k+ income) the Cat 2 cap beats anything Spain or Portugal can offer — no CGT, no IHT, no wealth tax.',
        link: { href: '/gibraltar/residency', label: 'Cat 2 guide' },
      });
    } else if (a.incomeType === 'local-job' && monthly >= 5_000) {
      out.push({
        route: 'Gibraltar — HEPSS (employer-sponsored)',
        country: 'Gibraltar',
        fit: 'possible',
        threshold: '£160,000+ salary in a specialist role; tax capped ≈ £39,940/yr',
        why: 'If a Gibraltar employer (gaming, insurance, fund management, fintech) will sponsor you above £160k, HEPSS caps your tax like Cat 2 without the wealth test.',
        link: { href: '/gibraltar/residency', label: 'HEPSS guide' },
      });
    } else if (a.dest === 'gibraltar') {
      out.push({
        route: 'Gibraltar — ordinary residence / frontier work',
        country: 'Gibraltar',
        fit: 'possible',
        why: 'Without £2m net worth or a £160k specialist role, Gibraltar means ordinary employment locally — or living Spain-side as a frontier worker (Spanish tax applies). The 2026 EU treaty makes crossing easy; the tax logic still favours picking a side deliberately.',
        link: { href: '/gibraltar/frontier-worker', label: 'Frontier-worker guide' },
      });
    }
  }

  if (out.length === 0) {
    out.push({
      route: 'No clean route yet',
      country: '—',
      fit: 'blocked',
      why: 'None of the standard routes fits the combination you selected. The usual fixes: grow documented income above a visa bar, use savings to back an NLV/D7 file, or check the EU-family route. The country guides map every route in detail.',
      link: { href: '/spain/visa-guide', label: 'All routes, all countries' },
    });
  }

  // Strong fits first.
  const order = { strong: 0, possible: 1, blocked: 2 } as const;
  return out.sort((x, y) => order[x.fit] - order[y.fit]);
}

const steps: { key: keyof Answers; title: string; options: { value: string; label: string; hint?: string }[] }[] = [
  {
    key: 'dest',
    title: 'Where are you heading?',
    options: [
      { value: 'spain', label: '🇪🇸 Spain' },
      { value: 'portugal', label: '🇵🇹 Portugal' },
      { value: 'gibraltar', label: '🇬🇮 Gibraltar' },
      { value: 'unsure', label: '🤷 Not sure yet', hint: 'We\'ll test all three' },
    ],
  },
  {
    key: 'incomeType',
    title: 'What will fund your life there?',
    options: [
      { value: 'passive', label: 'Passive income', hint: 'Pensions, rent, dividends, interest' },
      { value: 'remote', label: 'Remote work', hint: 'UK/foreign employer or clients' },
      { value: 'local-job', label: 'A local job', hint: 'Employer in the destination' },
      { value: 'business', label: 'My own business', hint: 'Founding/operating there' },
      { value: 'none', label: 'Savings only', hint: 'No recurring income' },
    ],
  },
  {
    key: 'band',
    title: 'Monthly income (gross, per month)',
    options: [
      { value: 'lt1k', label: 'Under €1,000' },
      { value: '1to2.5k', label: '€1,000 – €2,500' },
      { value: '2.5to5k', label: '€2,500 – €5,000' },
      { value: 'gt5k', label: 'Over €5,000' },
    ],
  },
  {
    key: 'wealth',
    title: 'Household net worth',
    options: [
      { value: 'lt250k', label: 'Under £250k' },
      { value: '250kto2m', label: '£250k – £2m' },
      { value: 'gt2m', label: 'Over £2m', hint: 'Opens Gibraltar Cat 2' },
    ],
  },
  {
    key: 'euFamily',
    title: 'Spouse/parent who is an EU citizen or EU resident?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
];

export function VisaRouteFinder() {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);

  const done = step >= steps.length;
  const verdicts = useMemo(
    () =>
      done
        ? decide({
            dest: answers.dest ?? 'unsure',
            incomeType: answers.incomeType ?? 'none',
            band: answers.band ?? 'lt1k',
            wealth: answers.wealth ?? 'lt250k',
            euFamily: answers.euFamily ?? 'no',
          })
        : [],
    [done, answers],
  );

  function pick(key: keyof Answers, value: string) {
    setAnswers((a) => ({ ...a, [key]: value as never }));
    setStep((s) => s + 1);
  }

  if (!done) {
    const s = steps[step];
    return (
      <Card variant="elevated">
        <CardBody>
          <div className="flex items-center justify-between text-xs font-semibold text-muted">
            <span>Question {step + 1} of {steps.length}</span>
            {step > 0 && (
              <button type="button" onClick={() => setStep((x) => x - 1)} className="text-muted hover:text-ink">
                ← Back
              </button>
            )}
          </div>
          <div className="mt-1 h-1.5 w-full overflow-hidden rounded-pill bg-border/60">
            <div className="h-full rounded-pill bg-warm transition-all duration-300" style={{ width: `${(step / steps.length) * 100}%` }} />
          </div>
          <h2 className="display mt-5 text-[24px] font-semibold tracking-tight text-ink">{s.title}</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {s.options.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => pick(s.key, o.value)}
                className="rounded-card border border-border bg-white p-4 text-left transition-all hover:-translate-y-px hover:border-ink/40 hover:shadow-card"
              >
                <span className="block text-[15px] font-semibold text-ink">{o.label}</span>
                {o.hint && <span className="mt-0.5 block text-xs text-muted">{o.hint}</span>}
              </button>
            ))}
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="display text-[24px] font-semibold tracking-tight text-ink">Your routes, ranked</h2>
        <button
          type="button"
          onClick={() => {
            setAnswers({});
            setStep(0);
          }}
          className="text-sm font-semibold text-muted hover:text-ink"
        >
          Start over
        </button>
      </div>
      {verdicts.map((v) => (
        <Card key={v.route} variant="bordered">
          <CardBody>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  'rounded-pill px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em]',
                  v.fit === 'strong' && 'bg-success/10 text-success',
                  v.fit === 'possible' && 'bg-warning/10 text-warning',
                  v.fit === 'blocked' && 'bg-gibraltar/10 text-gibraltar',
                )}
              >
                {v.fit === 'strong' ? 'Strong fit' : v.fit === 'possible' ? 'Possible' : 'Blocked'}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{v.country}</span>
            </div>
            <div className="display mt-2 text-[19px] font-semibold tracking-tight text-ink">{v.route}</div>
            {v.threshold && (
              <div className="mt-1 inline-block rounded-pill bg-warm-glow px-2.5 py-1 text-[12px] font-semibold text-warm">
                {v.threshold}
              </div>
            )}
            <p className="mt-2 text-sm leading-relaxed text-muted">{v.why}</p>
            <Link href={v.link.href} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-warm underline-offset-4 hover:underline">
              {v.link.label} →
            </Link>
          </CardBody>
        </Card>
      ))}
      <Card variant="bordered">
        <CardBody>
          <div className="text-sm font-semibold text-ink">Email yourself this result</div>
          <p className="mt-1 text-xs text-muted">
            Plus the document checklist for your top route and threshold updates when IPREM/SMI change.
          </p>
          <div className="mt-3">
            <NewsletterCapture source="visa_route_finder" cta="Send my route" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
