'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'wc_timeframe';

type Choice = '0-6m' | '6-18m' | 'researching';

export function TimeframeGate() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const v = localStorage.getItem(STORAGE_KEY) as Choice | null;
    if (v) setChoice(v);
    else setTimeout(() => setOpen(true), 2200);
  }, []);

  function pick(c: Choice) {
    setChoice(c);
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, c);
      document.cookie = `wc_timeframe=${c}; path=/; max-age=${60 * 60 * 24 * 180}`;
    } catch {}
  }

  if (!open && !choice) return null;
  if (choice && !open) {
    const labels: Record<Choice, string> = {
      '0-6m': 'Moving within 6 months',
      '6-18m': 'Moving in 6-18 months',
      researching: 'Still researching',
    };
    const next: Record<Choice, { href: string; label: string }> = {
      '0-6m': { href: '/quiz', label: 'Find your playbook' },
      '6-18m': { href: '/calculators/compare-countries', label: 'Compare countries' },
      researching: { href: '/quiz', label: 'Take the 12-q quiz' },
    };
    return (
      <div className="container-content -mt-4 mb-10 hidden md:block">
        <div className="flex items-center justify-between rounded-card border border-border bg-white px-5 py-3 text-sm">
          <span className="text-muted">
            Personalised for you: <span className="font-semibold text-ink">{labels[choice]}</span>{' '}
            <button
              onClick={() => {
                localStorage.removeItem(STORAGE_KEY);
                setChoice(null);
                setOpen(true);
              }}
              className="ml-2 text-xs text-faint underline-offset-2 hover:underline"
            >
              change
            </button>
          </span>
          <Link
            href={next[choice].href}
            className="text-sm font-semibold text-warm hover:underline underline-offset-4"
          >
            {next[choice].label} →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-content -mt-4 mb-10">
      <div className="rounded-card border border-border bg-white p-5 sm:p-6 shadow-card animate-fade-up">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-warm">
              Quick one
            </div>
            <h3 className="display mt-1 text-xl font-semibold tracking-tight text-ink">
              When are you actually moving?
            </h3>
            <p className="mt-1 text-sm text-muted">
              We&apos;ll show the right content first. Skippable, stored locally.
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-xs text-faint hover:text-ink"
            aria-label="Skip"
          >
            Skip
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {(
            [
              { v: '0-6m', label: 'Within 6 months', sub: 'Pre-move tax actions' },
              { v: '6-18m', label: '6-18 months', sub: 'Planning + comparison' },
              { v: 'researching', label: 'Still researching', sub: 'Quiz + free guides' },
            ] as { v: Choice; label: string; sub: string }[]
          ).map((opt) => (
            <button
              key={opt.v}
              onClick={() => pick(opt.v)}
              className="group rounded-card border border-border bg-surface px-4 py-3 text-left transition-all hover:-translate-y-px hover:border-warm hover:bg-warm/5"
            >
              <div className="text-sm font-semibold text-ink group-hover:text-warm">{opt.label}</div>
              <div className="text-xs text-muted">{opt.sub}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
