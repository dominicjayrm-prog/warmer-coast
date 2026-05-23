'use client';

import { useState, type FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';

type Mode = 'signin' | 'signup' | 'reset';

export function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const initialEmail = params?.get('email') ?? '';
  const next = params?.get('next') ?? '/app';
  const [mode, setMode] = useState<Mode>('signin');
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setInfo(null);
    const supabase = getSupabaseBrowserClient();
    try {
      if (mode === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push(next);
        router.refresh();
      } else if (mode === 'signup') {
        if (password.length < 8) throw new Error('Password must be at least 8 characters.');
        if (password !== confirmPassword) throw new Error('Passwords do not match.');
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
          },
        });
        if (error) throw error;
        setInfo(
          'Account created. Check your email to confirm, then sign in. If you already purchased a playbook, your access activates on first login.',
        );
        setMode('signin');
        setPassword('');
        setConfirmPassword('');
      } else if (mode === 'reset') {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent('/account/password')}`,
        });
        if (error) throw error;
        setInfo('Password reset email sent. Open the link to set a new password.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex gap-2 rounded-pill border border-border bg-surface p-1">
        <button
          type="button"
          onClick={() => { setMode('signin'); setError(null); setInfo(null); }}
          className={`flex-1 rounded-pill px-3 py-1.5 text-xs font-semibold transition-colors ${
            mode === 'signin' ? 'bg-white text-ink shadow-sm' : 'text-muted'
          }`}
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={() => { setMode('signup'); setError(null); setInfo(null); }}
          className={`flex-1 rounded-pill px-3 py-1.5 text-xs font-semibold transition-colors ${
            mode === 'signup' ? 'bg-white text-ink shadow-sm' : 'text-muted'
          }`}
        >
          Create account
        </button>
      </div>

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

      {mode !== 'reset' && (
        <>
          <label htmlFor="login-password" className="sr-only">Password</label>
          <input
            id="login-password"
            type="password"
            required
            autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={mode === 'signup' ? 'Choose a password (8+ chars)' : 'Password'}
            className="rounded-pill border border-border bg-white px-5 py-3.5 text-[15px] outline-none focus:border-warm focus:ring-2 focus:ring-warm/30"
          />
        </>
      )}

      {mode === 'signup' && (
        <>
          <label htmlFor="login-confirm" className="sr-only">Confirm password</label>
          <input
            id="login-confirm"
            type="password"
            required
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            className="rounded-pill border border-border bg-white px-5 py-3.5 text-[15px] outline-none focus:border-warm focus:ring-2 focus:ring-warm/30"
          />
        </>
      )}

      <button
        type="submit"
        disabled={busy}
        className="inline-flex items-center justify-center gap-2 rounded-pill bg-ink px-5 py-3.5 text-[15px] font-semibold text-white hover:-translate-y-px transition-all disabled:opacity-60"
      >
        {busy
          ? 'Working...'
          : mode === 'signin'
            ? 'Sign in →'
            : mode === 'signup'
              ? 'Create account →'
              : 'Send reset link →'}
      </button>

      {error && <p className="text-sm text-warm">{error}</p>}
      {info && <p className="text-sm text-muted">{info}</p>}

      {mode === 'signin' && (
        <button
          type="button"
          onClick={() => { setMode('reset'); setError(null); setInfo(null); }}
          className="text-xs text-muted underline-offset-2 hover:text-ink hover:underline"
        >
          Forgot password?
        </button>
      )}
      {mode === 'reset' && (
        <button
          type="button"
          onClick={() => { setMode('signin'); setError(null); setInfo(null); }}
          className="text-xs text-muted underline-offset-2 hover:text-ink hover:underline"
        >
          Back to sign in
        </button>
      )}
    </form>
  );
}
