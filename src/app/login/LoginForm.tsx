'use client';

import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';

export function LoginForm() {
  const params = useSearchParams();
  const initialEmail = params?.get('email') ?? '';
  const next = params?.get('next') ?? '/app';
  const [email, setEmail] = useState(initialEmail);
  const [state, setState] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    setError(null);
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
        },
      });
      if (error) throw error;
      setState('sent');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Login failed');
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <div className="rounded-card border border-success/30 bg-success/5 p-6 text-center">
        <div className="text-3xl">📬</div>
        <h2 className="display mt-2 text-xl font-semibold text-ink">Check your email</h2>
        <p className="mt-1 text-sm text-muted">
          Magic link sent to <span className="font-semibold text-ink">{email}</span>. Click it to log
          in.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <label htmlFor="login-email" className="sr-only">Email</label>
      <input
        id="login-email"
        type="email"
        required
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="rounded-pill border border-border bg-white px-5 py-3.5 text-[15px] outline-none focus:border-warm focus:ring-2 focus:ring-warm/30"
      />
      <button
        type="submit"
        disabled={state === 'submitting'}
        className="inline-flex items-center justify-center gap-2 rounded-pill bg-ink px-5 py-3.5 text-[15px] font-semibold text-white hover:-translate-y-px transition-all disabled:opacity-60"
      >
        {state === 'submitting' ? 'Sending...' : 'Send magic link →'}
      </button>
      {error && <p className="text-sm text-gibraltar">{error}</p>}
      <p className="mt-1 text-xs text-faint">
        We use Supabase passwordless auth. By logging in you agree to our terms and privacy.
      </p>
    </form>
  );
}
