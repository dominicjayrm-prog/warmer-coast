'use client';

import { useEffect, useMemo, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { cn } from '@/lib/cn';

interface QuizQuestion {
  id: string;
  prompt: string;
  options: { value: string; label: string; weights: Partial<Record<'spain' | 'portugal' | 'gibraltar' | 'stay', number>> }[];
}

const questions: QuizQuestion[] = [
  {
    id: 'horizon',
    prompt: 'When are you actually planning to move?',
    options: [
      { value: '0-6m', label: 'Within 6 months', weights: { spain: 1, portugal: 1, gibraltar: 1 } },
      { value: '6-18m', label: '6-18 months', weights: { spain: 1, portugal: 1, gibraltar: 1 } },
      { value: '2y+', label: '2+ years out', weights: { stay: 1 } },
      { value: 'unknown', label: 'Still exploring', weights: { stay: 0.5 } },
    ],
  },
  {
    id: 'income',
    prompt: 'Your annual gross UK income (or pension drawdown):',
    options: [
      { value: 'under50', label: 'Under £50,000', weights: { portugal: 1.5, spain: 1 } },
      { value: '50-100', label: '£50k - £100k', weights: { spain: 1.5, portugal: 1 } },
      { value: '100-200', label: '£100k - £200k', weights: { spain: 2, gibraltar: 1 } },
      { value: '200+', label: '£200,000+', weights: { gibraltar: 2, spain: 1 } },
    ],
  },
  {
    id: 'income-source',
    prompt: 'Where does most of your income come from?',
    options: [
      { value: 'remote', label: 'Remote employment', weights: { spain: 2, portugal: 1.5 } },
      { value: 'pension', label: 'UK pension(s)', weights: { portugal: 1.5, spain: 1 } },
      { value: 'investment', label: 'Investment income', weights: { gibraltar: 2, portugal: 1 } },
      { value: 'business', label: 'UK business / consulting', weights: { spain: 1.5, gibraltar: 1.5 } },
    ],
  },
  {
    id: 'family',
    prompt: 'Family situation:',
    options: [
      { value: 'solo', label: 'Solo', weights: { spain: 1, portugal: 1, gibraltar: 1 } },
      { value: 'couple', label: 'Couple, no kids', weights: { spain: 1, portugal: 1 } },
      { value: 'family-kids', label: 'Family with school-age children', weights: { spain: 1.5, gibraltar: 0.5 } },
      { value: 'family-young', label: 'Family with under-5s', weights: { portugal: 1.5, spain: 1 } },
    ],
  },
  {
    id: 'language',
    prompt: 'Comfort with learning Spanish or Portuguese:',
    options: [
      { value: 'eager', label: 'Looking forward to it', weights: { spain: 1.5, portugal: 1 } },
      { value: 'willing', label: 'Willing, will be slow', weights: { spain: 1, portugal: 1 } },
      { value: 'reluctant', label: 'Reluctant, prefer English', weights: { gibraltar: 2, portugal: 0.5 } },
    ],
  },
  {
    id: 'tax-priority',
    prompt: 'How important is tax optimisation?',
    options: [
      { value: 'critical', label: 'Critical, key driver', weights: { gibraltar: 1.5, spain: 1.5 } },
      { value: 'important', label: 'Important but not the only factor', weights: { spain: 1, portugal: 1 } },
      { value: 'minor', label: 'Minor consideration', weights: { portugal: 1 } },
    ],
  },
  {
    id: 'climate',
    prompt: 'Climate priority:',
    options: [
      { value: 'hot-sun', label: 'Hot summers, mild winters', weights: { spain: 1.5 } },
      { value: 'mediterranean', label: 'Classic Mediterranean', weights: { spain: 1, portugal: 1 } },
      { value: 'atlantic', label: 'Atlantic, cooler', weights: { portugal: 1.5 } },
      { value: 'irrelevant', label: 'Climate isn\'t a driver', weights: { gibraltar: 0.5 } },
    ],
  },
  {
    id: 'housing',
    prompt: 'Housing plans:',
    options: [
      { value: 'rent-first', label: 'Rent for 12-24 months first', weights: { spain: 1, portugal: 1 } },
      { value: 'buy-soon', label: 'Buy within 6 months of moving', weights: { spain: 1, portugal: 1 } },
      { value: 'already-own', label: 'Already own property there', weights: { spain: 1.5, portugal: 1.5 } },
    ],
  },
  {
    id: 'work-after',
    prompt: 'Work plans once relocated:',
    options: [
      { value: 'continue-remote', label: 'Continue remote UK work', weights: { spain: 2, portugal: 1.5 } },
      { value: 'local-job', label: 'Find local employment', weights: { portugal: 1, spain: 1 } },
      { value: 'retire', label: 'Retire or semi-retire', weights: { portugal: 1.5, spain: 1 } },
      { value: 'business', label: 'Start or run a business', weights: { spain: 1, gibraltar: 1 } },
    ],
  },
  {
    id: 'uk-ties',
    prompt: 'How much UK life are you keeping?',
    options: [
      { value: 'cutting', label: 'Cutting ties, full move', weights: { spain: 1, portugal: 1 } },
      { value: 'split', label: 'Splitting time UK/abroad', weights: { gibraltar: 1.5, portugal: 0.5 } },
      { value: 'keep-property', label: 'Keeping UK property, letting it', weights: { spain: 1, portugal: 1 } },
    ],
  },
  {
    id: 'community',
    prompt: 'Community preference:',
    options: [
      { value: 'expat', label: 'Established British / international community', weights: { spain: 1.5, gibraltar: 1.5, portugal: 1 } },
      { value: 'mixed', label: 'Mixed local and international', weights: { portugal: 1.5, spain: 1 } },
      { value: 'local', label: 'Mostly local, full integration', weights: { spain: 1, portugal: 1 } },
    ],
  },
  {
    id: 'risk',
    prompt: 'Your tolerance for tax/visa scheme changes:',
    options: [
      { value: 'low', label: 'Low, want stability', weights: { gibraltar: 1.5, spain: 1 } },
      { value: 'medium', label: 'Medium', weights: { spain: 1, portugal: 1 } },
      { value: 'high', label: 'High, comfortable adapting', weights: { portugal: 1, spain: 1 } },
    ],
  },
];

type Country = 'spain' | 'portugal' | 'gibraltar' | 'stay';

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('wc_quiz_answers');
    if (stored) {
      try {
        setAnswers(JSON.parse(stored));
      } catch {}
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('wc_quiz_answers', JSON.stringify(answers));
  }, [answers]);

  const result = useMemo(() => {
    const scores: Record<Country, number> = { spain: 0, portugal: 0, gibraltar: 0, stay: 0 };
    Object.entries(answers).forEach(([qid, val]) => {
      const q = questions.find((x) => x.id === qid);
      if (!q) return;
      const opt = q.options.find((o) => o.value === val);
      if (!opt) return;
      (Object.entries(opt.weights) as [Country, number][]).forEach(([country, w]) => {
        scores[country] = (scores[country] ?? 0) + w;
      });
    });
    const ranked = (Object.entries(scores) as [Country, number][]).sort((a, b) => b[1] - a[1]);
    return { scores, top: ranked[0]?.[0] ?? 'spain', ranked };
  }, [answers]);

  function selectAnswer(qid: string, value: string) {
    setAnswers((a) => ({ ...a, [qid]: value }));
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 200);
    }
  }

  async function submitForResult(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'quiz',
          message: JSON.stringify(answers),
        }),
      });
      if (!res.ok) throw new Error('Could not submit');
      setShowResult(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not submit');
    } finally {
      setSubmitting(false);
    }
  }

  const allAnswered = Object.keys(answers).length === questions.length;
  const currentQ = questions[step];
  const pct = (step / questions.length) * 100;

  if (showResult) {
    const labels: Record<Country, { name: string; href: string; copy: string }> = {
      spain: { name: 'Spain', href: '/playbook/spain', copy: 'Beckham Law structuring, robust visa routes, deep cultural change.' },
      portugal: { name: 'Portugal', href: '/playbook/portugal', copy: 'IFICI-friendly remote work, English-friendly, calmer pace.' },
      gibraltar: { name: 'Gibraltar', href: '/playbook/gibraltar', copy: 'Cat 2 capped tax for high net worth, frontier-worker flexibility.' },
      stay: { name: 'Stay in the UK (for now)', href: '/blog', copy: 'Your profile suggests holding off and continuing research.' },
    };
    const winner = labels[result.top as Country];
    return (
      <Card variant="elevated">
        <CardBody className="flex flex-col gap-4">
          <Badge tone="warm" uppercase>Your result</Badge>
          <h1 className="display text-display-2 font-semibold tracking-tight text-ink text-balance">
            Your best fit: <span className="text-warm">{winner.name}</span>
          </h1>
          <p className="text-[17px] text-muted">{winner.copy}</p>
          <div className="rounded-card border border-border bg-surface p-4 text-sm">
            <div className="font-semibold text-ink">Full scores</div>
            <div className="mt-2 flex flex-col gap-1">
              {result.ranked.map(([country, score]) => (
                <div key={country} className="flex items-center justify-between">
                  <span className="capitalize">{country === 'stay' ? 'Stay (UK)' : country}</span>
                  <span className="font-semibold">{score.toFixed(1)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link
              href={winner.href}
              className="inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-white hover:-translate-y-px transition-all"
            >
              {result.top === 'stay' ? 'Read the blog' : `See the ${winner.name} playbook`} →
            </Link>
            <Link
              href="/calculators/compare-countries"
              className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-5 py-3 text-sm font-semibold text-ink hover:border-ink"
            >
              Compare in detail
            </Link>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <>
      <div className="mb-6">
        <Badge tone="warm" uppercase>Quiz</Badge>
        <h1 className="display mt-3 text-display-2 font-semibold tracking-tight text-ink text-balance">
          Should you move abroad?
        </h1>
        <p className="mt-2 text-muted">
          12 questions, 4 minutes. We&apos;ll recommend your best fit and the right playbook.
        </p>
        <div className="mt-5">
          <Progress value={pct} label={`Question ${step + 1} of ${questions.length}`} showValue />
        </div>
      </div>

      {!allAnswered ? (
        <Card variant="elevated">
          <CardBody className="flex flex-col gap-5">
            <h2 className="display text-2xl font-semibold tracking-tight text-ink">
              {currentQ.prompt}
            </h2>
            <div className="flex flex-col gap-2">
              {currentQ.options.map((o) => {
                const active = answers[currentQ.id] === o.value;
                return (
                  <button
                    type="button"
                    key={o.value}
                    onClick={() => selectAnswer(currentQ.id, o.value)}
                    className={cn(
                      'rounded-card border px-5 py-3.5 text-left text-[15px] transition-all',
                      active ? 'border-warm bg-warm/5 font-semibold text-ink' : 'border-border bg-white text-muted hover:border-ink/40',
                    )}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between text-sm">
              <button
                type="button"
                disabled={step === 0}
                onClick={() => setStep(Math.max(0, step - 1))}
                className="text-muted hover:text-ink disabled:opacity-30"
              >
                ← Back
              </button>
              <span className="text-faint">{Object.keys(answers).length} / {questions.length} answered</span>
            </div>
          </CardBody>
        </Card>
      ) : (
        <Card variant="elevated">
          <CardBody>
            <h2 className="display text-2xl font-semibold tracking-tight text-ink">
              Your result is ready
            </h2>
            <p className="mt-2 text-muted">
              Drop your email to see it. We&apos;ll also send you a personalised next-step email
              based on your answers.
            </p>
            <form onSubmit={submitForResult} className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-pill border border-border bg-white px-5 py-3 text-[15px] outline-none focus:border-warm focus:ring-2 focus:ring-warm/30"
              />
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-pill bg-ink px-6 py-3 text-sm font-semibold text-white hover:-translate-y-px transition-all disabled:opacity-60"
              >
                {submitting ? 'Sending...' : 'Show my result →'}
              </button>
            </form>
            {error && <p className="mt-2 text-sm text-gibraltar">{error}</p>}
            <p className="mt-3 text-xs text-faint">
              One email a fortnight, unsubscribe anytime. No spam.
            </p>
          </CardBody>
        </Card>
      )}
    </>
  );
}
