'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/cn';

interface Props {
  variant?: 'light' | 'dark';
  source: string;
  cta?: string;
  placeholder?: string;
}

export function NewsletterCapture({
  variant = 'light',
  source,
  cta = 'Send it',
  placeholder = 'you@email.com',
}: Props) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.includes('@')) {
      setState('error');
      setMessage('Drop a real email so we can actually send it.');
      return;
    }
    setState('submitting');
    setMessage(null);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) throw new Error('Capture failed');
      setState('done');
      setMessage('Check your inbox in a minute.');
      setEmail('');
    } catch {
      setState('error');
      setMessage('Something glitched. Try again in a moment.');
    }
  }

  const dark = variant === 'dark';

  if (state === 'done') {
    return (
      <div className={cn('rounded-card border px-4 py-4 text-sm',
        dark ? 'border-white/20 bg-white/5 text-white' : 'border-success/30 bg-success/5 text-success')}>
        ✓ {message}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <label htmlFor={`nl-${source}`} className="sr-only">Email address</label>
        <input
          id={`nl-${source}`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={cn(
            'flex-1 rounded-pill px-4 py-2.5 text-sm outline-none transition-colors',
            dark
              ? 'bg-white/10 text-white placeholder:text-white/40 border border-white/20 focus:border-warm-light'
              : 'bg-white text-ink placeholder:text-faint border border-border focus:border-warm',
          )}
        />
        <button
          type="submit"
          disabled={state === 'submitting'}
          className={cn(
            'inline-flex items-center justify-center rounded-pill px-5 py-2.5 text-sm font-semibold transition-all disabled:opacity-60',
            dark ? 'bg-warm text-white hover:bg-warm/90' : 'bg-ink text-white hover:-translate-y-px',
          )}
        >
          {state === 'submitting' ? '...' : cta}
        </button>
      </div>
      {message && (
        <p className={cn('text-xs', dark ? 'text-white/60' : 'text-muted', state === 'error' && 'text-gibraltar')}>
          {message}
        </p>
      )}
    </form>
  );
}
