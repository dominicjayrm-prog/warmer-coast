'use client';

import { useEffect, useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';

interface Doc {
  id: string;
  country: string;
  form_type: string;
  file_path: string;
  mime_type: string | null;
  status: string;
  notes: string | null;
  source: string;
  created_at: string;
  updated_at: string;
}

const STATUSES = ['draft', 'signed', 'submitted', 'accepted', 'rejected'] as const;
const STATUS_LABELS: Record<string, string> = {
  draft: 'Draft',
  signed: 'Signed',
  submitted: 'Submitted to authority',
  accepted: 'Accepted',
  rejected: 'Rejected',
};

interface Props {
  formType: string;
  reloadKey?: number;
}

/**
 * Lists uploaded documents for a given form template. Each row has:
 *   - filename + uploaded date
 *   - status pill (editable inline by the user)
 *   - download link (signed URL, 60 second TTL)
 *   - delete
 */
export function UploadedDocsList({ formType, reloadKey }: Props) {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      const r = await fetch('/api/forms/documents');
      if (!r.ok) {
        setLoading(false);
        return;
      }
      const j = (await r.json()) as { documents: Doc[] };
      if (!cancelled) {
        setDocs(j.documents.filter((d) => d.form_type === formType));
        setLoading(false);
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [formType, reloadKey]);

  async function updateStatus(id: string, status: string) {
    setDocs((prev) => prev.map((d) => (d.id === id ? { ...d, status } : d)));
    await fetch('/api/forms/documents', {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
  }

  async function remove(id: string) {
    if (!confirm('Delete this document?')) return;
    setDocs((prev) => prev.filter((d) => d.id !== id));
    await fetch(`/api/forms/documents?id=${id}`, { method: 'DELETE' });
  }

  async function download(path: string) {
    const supabase = getSupabaseBrowserClient();
    const { data } = await supabase.storage
      .from('wc-user-documents')
      .createSignedUrl(path, 60);
    if (data?.signedUrl) window.open(data.signedUrl, '_blank', 'noopener,noreferrer');
  }

  if (loading) return <div className="text-xs text-muted">Loading...</div>;
  if (docs.length === 0) return null;

  return (
    <ul className="mt-3 flex flex-col gap-2">
      {docs.map((d) => {
        const filename = d.file_path.split('/').pop() ?? d.file_path;
        return (
          <li
            key={d.id}
            className="flex flex-wrap items-center gap-3 rounded-card border border-border bg-white p-3 text-sm"
          >
            <div className="flex-1 min-w-0">
              <div className="truncate font-semibold text-ink">{filename}</div>
              <div className="text-xs text-faint">
                Uploaded {new Date(d.created_at).toLocaleDateString('en-GB')} ·{' '}
                {d.source === 'filled_in_app' ? 'Filled in app' : 'Uploaded scan'}
              </div>
            </div>
            <select
              value={d.status}
              onChange={(e) => updateStatus(d.id, e.target.value)}
              className="rounded-md border border-border bg-white px-2 py-1 text-xs"
              aria-label="Document status"
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {STATUS_LABELS[s]}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => download(d.file_path)}
              className="text-xs font-semibold text-ink underline-offset-2 hover:underline"
            >
              Download
            </button>
            <button
              type="button"
              onClick={() => remove(d.id)}
              className="text-xs font-semibold text-warm underline-offset-2 hover:underline"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
