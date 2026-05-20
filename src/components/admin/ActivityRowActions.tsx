'use client';

import { useTransition, useState } from 'react';
import { useRouter } from 'next/navigation';

export function ActivityRowActions({ id }: { id: string }) {
  const router = useRouter();
  const [, start] = useTransition();
  const [busy, setBusy] = useState(false);

  async function del() {
    if (!confirm('Delete this entry?')) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/activity/${id}`, { method: 'DELETE' });
      if (res.ok) start(() => router.refresh());
      else alert('Delete failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={del}
      disabled={busy}
      className="rounded-pill px-3 py-1 text-xs font-semibold text-gibraltar hover:bg-gibraltar/10 disabled:opacity-50"
    >
      Delete
    </button>
  );
}
