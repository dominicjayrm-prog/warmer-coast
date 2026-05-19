'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'wc_consent_v1';

type Consent = { functional: boolean; analytics: boolean; marketing: boolean };

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<Consent>({
    functional: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!localStorage.getItem(STORAGE_KEY)) {
      setOpen(true);
    }
  }, []);

  function save(values: Consent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...values, at: new Date().toISOString() }));
    document.cookie = `wc_consent=${values.analytics ? 'yes' : 'no'}; path=/; max-age=${60 * 60 * 24 * 365}`;
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed bottom-3 left-3 right-3 z-[90] sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md">
      <div className="rounded-card border border-border bg-white p-5 shadow-elevated">
        <div className="flex items-start gap-3">
          <span aria-hidden className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-warm-glow text-warm">
            🍪
          </span>
          <div className="flex-1 text-sm text-muted">
            We use a tiny set of cookies to make the site work and to count anonymous visits via
            Plausible. No third-party trackers. You can decline analytics any time.{' '}
            <Link href="/privacy" className="text-ink underline underline-offset-2 hover:text-warm">
              Privacy policy
            </Link>
            .
          </div>
        </div>

        {showSettings && (
          <div className="mt-4 grid gap-2">
            <ConsentRow
              label="Functional"
              description="Required, cannot be disabled"
              checked={true}
              disabled
              onChange={() => {}}
            />
            <ConsentRow
              label="Analytics"
              description="Plausible page views, no personal data"
              checked={consent.analytics}
              onChange={(v) => setConsent((c) => ({ ...c, analytics: v }))}
            />
            <ConsentRow
              label="Marketing"
              description="Conversion attribution for ad campaigns"
              checked={consent.marketing}
              onChange={(v) => setConsent((c) => ({ ...c, marketing: v }))}
            />
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => save({ functional: true, analytics: true, marketing: true })}
            className="inline-flex flex-1 items-center justify-center rounded-pill bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:-translate-y-px transition-all"
          >
            Accept all
          </button>
          <button
            onClick={() => save({ functional: true, analytics: false, marketing: false })}
            className="inline-flex flex-1 items-center justify-center rounded-pill border border-border px-4 py-2.5 text-sm font-semibold text-ink hover:border-ink"
          >
            Reject non-essential
          </button>
          {!showSettings ? (
            <button
              onClick={() => setShowSettings(true)}
              className="inline-flex items-center justify-center rounded-pill px-3 py-2.5 text-sm font-semibold text-muted hover:text-ink"
            >
              Customise
            </button>
          ) : (
            <button
              onClick={() => save(consent)}
              className="inline-flex items-center justify-center rounded-pill bg-warm px-4 py-2.5 text-sm font-semibold text-white hover:-translate-y-px transition-all"
            >
              Save choices
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ConsentRow({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-3 rounded-card border border-border bg-surface p-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 accent-warm"
      />
      <div className="text-sm">
        <div className="font-semibold text-ink">{label}</div>
        <div className="text-xs text-muted">{description}</div>
      </div>
    </label>
  );
}
