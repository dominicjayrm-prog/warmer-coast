'use client';

import { useState, type FormEvent } from 'react';

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      enquiry_type: String(data.get('enquiry') ?? 'general'),
      message: String(data.get('message') ?? ''),
      source: 'contact',
    };
    setState('submitting');
    setError(null);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Send failed');
      setState('sent');
      form.reset();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Send failed');
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <div className="rounded-card border border-success/30 bg-success/5 p-6">
        <div className="text-3xl">✉️</div>
        <h2 className="display mt-2 text-xl font-semibold text-ink">Message received</h2>
        <p className="mt-1 text-sm text-muted">
          We&apos;ll reply within 48 hours. If urgent, email hello@warmercoast.com directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          className="rounded-pill border border-border bg-white px-5 py-3 text-[15px] outline-none focus:border-warm focus:ring-2 focus:ring-warm/30"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className="rounded-pill border border-border bg-white px-5 py-3 text-[15px] outline-none focus:border-warm focus:ring-2 focus:ring-warm/30"
        />
      </div>
      <select
        name="enquiry"
        defaultValue="general"
        className="rounded-pill border border-border bg-white px-5 py-3 text-[15px] outline-none focus:border-warm"
      >
        <option value="general">General enquiry</option>
        <option value="presale">Pre-purchase question</option>
        <option value="post-purchase">Post-purchase support</option>
        <option value="affiliate">Affiliate / partnership</option>
        <option value="press">Press / media</option>
      </select>
      <textarea
        name="message"
        required
        placeholder="Tell us briefly what you need..."
        rows={6}
        className="rounded-card border border-border bg-white px-5 py-3 text-[15px] outline-none focus:border-warm focus:ring-2 focus:ring-warm/30"
      />
      <button
        type="submit"
        disabled={state === 'submitting'}
        className="inline-flex items-center justify-center gap-2 rounded-pill bg-ink px-6 py-3 text-sm font-semibold text-white hover:-translate-y-px transition-all disabled:opacity-60"
      >
        {state === 'submitting' ? 'Sending...' : 'Send message →'}
      </button>
      {error && <p className="text-sm text-gibraltar">{error}</p>}
    </form>
  );
}
