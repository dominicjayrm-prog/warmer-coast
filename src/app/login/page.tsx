import type { Metadata } from 'next';
import { Suspense } from 'react';
import { LoginForm } from './LoginForm';

export const metadata: Metadata = {
  title: 'Log in',
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-content max-w-md">
        <h1 className="display text-display-2 font-semibold tracking-tight text-ink text-balance">
          Welcome back
        </h1>
        <p className="mt-3 text-muted">
          Enter your email, we&apos;ll send a magic link. No password to remember.
        </p>
        <div className="mt-8">
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
