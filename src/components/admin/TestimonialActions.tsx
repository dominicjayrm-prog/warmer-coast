'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  id: string;
  approved: boolean;
  featured: boolean;
}

export function TestimonialActions({ id, approved, featured }: Props) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [busy, setBusy] = useState(false);

  async function call(body: Record<string, unknown>, method = 'PATCH') {
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/testimonials/${id}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: method === 'DELETE' ? undefined : JSON.stringify(body),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        alert(d.error ?? 'Action failed');
        return;
      }
      startTransition(() => router.refresh());
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col gap-2 shrink-0 sm:w-44">
      <button
        type="button"
        disabled={busy}
        onClick={() => call({ approved: !approved })}
        className="rounded-pill border border-border bg-white px-3 py-1.5 text-xs font-semibold text-ink hover:border-ink disabled:opacity-50"
      >
        {approved ? 'Unapprove' : 'Approve'}
      </button>
      <button
        type="button"
        disabled={busy || !approved}
        onClick={() => call({ featured: !featured })}
        className="rounded-pill border border-border bg-white px-3 py-1.5 text-xs font-semibold text-ink hover:border-ink disabled:opacity-50"
      >
        {featured ? 'Unfeature' : 'Feature'}
      </button>
      <button
        type="button"
        disabled={busy}
        onClick={() => {
          if (confirm('Delete this testimonial?')) call({}, 'DELETE');
        }}
        className="rounded-pill px-3 py-1.5 text-xs font-semibold text-gibraltar hover:bg-gibraltar/10 disabled:opacity-50"
      >
        Delete
      </button>
    </div>
  );
}
