'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/cn';
import type { ProductSlug } from '@/lib/site';
import { PRODUCTS } from '@/lib/site';

interface Props {
  slug: ProductSlug;
  accent?: string;
  large?: boolean;
}

export function CheckoutButton({ slug, accent = '#0F1827', large }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: slug }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Checkout failed');
      if (data.url) {
        window.location.href = data.url;
      } else if (data.fallback) {
        router.push(`/checkout/${slug}`);
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Something went wrong';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-pill font-semibold text-white shadow-card hover:-translate-y-px transition-all disabled:opacity-60',
          large ? 'px-7 py-4 text-base' : 'px-6 py-3 text-[15px]',
        )}
        style={{ background: accent }}
      >
        {loading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          <>
            Get the {PRODUCTS[slug].name.split(' ')[0]} playbook · £{PRODUCTS[slug].price}
            <span aria-hidden>→</span>
          </>
        )}
      </button>
      {error && (
        <p className="text-xs text-gibraltar">
          Checkout didn&apos;t open: {error}. Try again, or email{' '}
          <a href="mailto:hello@warmercoast.com" className="underline">hello@warmercoast.com</a>{' '}
          and we&apos;ll send you a direct payment link.
        </p>
      )}
    </div>
  );
}
