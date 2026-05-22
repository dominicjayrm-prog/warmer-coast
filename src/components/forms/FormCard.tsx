'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { FormTemplate } from '@/lib/forms';
import { DocumentUploader } from '@/components/forms/DocumentUploader';
import { UploadedDocsList } from '@/components/forms/UploadedDocsList';

interface Props {
  form: FormTemplate;
}

/**
 * One row in the documents dashboard. Shows the form metadata, an "Open
 * form" button (native fill path), a "Download blank PDF" link, and an
 * inline uploader for finished scans.
 */
export function FormCard({ form }: Props) {
  const [reloadKey, setReloadKey] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-card border border-border bg-white">
      <div className="flex flex-wrap items-start gap-4 p-5">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
            <span>{form.authority}</span>
            {form.module && <span>· Module {form.module}</span>}
            <span>· ~{form.timeMinutes} min</span>
          </div>
          <h3 className="display mt-1.5 text-[18px] font-semibold tracking-tight text-ink">
            {form.name}
          </h3>
          <p className="mt-1.5 text-sm text-muted">{form.blurb}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {form.flavour === 'nativeFill' && (
            <Link
              href={`/app/${form.country}/forms/${form.id}`}
              className="inline-flex items-center gap-1.5 rounded-pill bg-ink px-3.5 py-2 text-xs font-semibold text-white"
            >
              Fill in app →
            </Link>
          )}
          {form.officialPdfUrl && (
            <a
              href={form.officialPdfUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-3.5 py-2 text-xs font-semibold text-ink hover:border-ink"
            >
              Blank PDF ↗
            </a>
          )}
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-3.5 py-2 text-xs font-semibold text-ink hover:border-ink"
          >
            {expanded ? 'Hide uploads' : 'Upload scan'}
          </button>
        </div>
      </div>
      {expanded && (
        <div className="border-t border-border p-5">
          <DocumentUploader
            country={form.country}
            formType={form.id}
            formName={form.name}
            onUploaded={() => setReloadKey((k) => k + 1)}
          />
          <UploadedDocsList formType={form.id} reloadKey={reloadKey} />
        </div>
      )}
    </article>
  );
}
