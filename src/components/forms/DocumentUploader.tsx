'use client';

import { useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';
import type { Country } from '@/lib/site';

interface Props {
  country: Country;
  formType: string;
  formName: string;
  onUploaded?: () => void;
}

const MAX_BYTES = 10 * 1024 * 1024;
const ACCEPTED = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp', 'image/heic'];

/**
 * Single-file uploader for scanned / photographed completed forms.
 * Two-step flow: (1) ask the API for a signed upload URL, (2) upload directly
 * to supabase storage, (3) tell our API to record the doc row.
 *
 * The buyer can pick a PDF up to 10MB or a phone photo. Anything else is
 * rejected client-side; storage RLS also enforces this.
 */
export function DocumentUploader({ country, formType, formName, onUploaded }: Props) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleFile(file: File) {
    setErr(null);
    if (file.size > MAX_BYTES) {
      setErr('File is too large (max 10 MB).');
      return;
    }
    if (!ACCEPTED.includes(file.type)) {
      setErr('Use a PDF or a photo (JPG / PNG / HEIC).');
      return;
    }
    setBusy(true);
    try {
      const r1 = await fetch('/api/forms/upload-url', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ country, form_type: formType, filename: file.name }),
      });
      if (!r1.ok) {
        const j = await r1.json().catch(() => ({}));
        throw new Error(j.error ?? 'Failed to get upload URL');
      }
      const { path, token } = (await r1.json()) as { path: string; token: string };

      const supabase = getSupabaseBrowserClient();
      const { error: upErr } = await supabase
        .storage
        .from('wc-user-documents')
        .uploadToSignedUrl(path, token, file, { contentType: file.type, upsert: false });
      if (upErr) throw upErr;

      const r2 = await fetch('/api/forms/documents', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          country,
          form_type: formType,
          file_path: path,
          file_size_bytes: file.size,
          mime_type: file.type,
          source: 'upload',
        }),
      });
      if (!r2.ok) {
        const j = await r2.json().catch(() => ({}));
        throw new Error(j.error ?? 'Failed to record document');
      }
      onUploaded?.();
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  }

  return (
    <label
      className={`flex flex-col items-start gap-2 rounded-card border border-dashed border-border bg-surface/40 p-4 ${
        busy ? 'opacity-60' : 'cursor-pointer hover:border-ink/30'
      }`}
    >
      <div className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
        Upload completed {formName}
      </div>
      <div className="text-sm text-muted">
        PDF or phone photo, up to 10 MB. Stored privately in your account.
      </div>
      <input
        type="file"
        className="text-sm"
        accept=".pdf,.jpg,.jpeg,.png,.webp,.heic,application/pdf,image/*"
        disabled={busy}
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) void handleFile(f);
          e.target.value = '';
        }}
      />
      {busy && <div className="text-xs text-muted">Uploading...</div>}
      {err && <div className="text-xs text-warm">{err}</div>}
    </label>
  );
}
