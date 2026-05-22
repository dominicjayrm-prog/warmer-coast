'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { Country } from '@/lib/site';
import type { FormField, FormSchema } from '@/lib/forms/schemas';

interface Props {
  schema: FormSchema;
  country: Country;
}

type Values = Record<string, string | number | boolean>;

const SAVE_DEBOUNCE_MS = 1200;

function fieldDefaultValue(field: FormField): string | number | boolean {
  if (field.type === 'checkbox') return false;
  if (field.type === 'number' || field.type === 'currency') return '';
  return '';
}

function initialValues(schema: FormSchema): Values {
  const v: Values = {};
  for (const s of schema.sections) {
    for (const f of s.fields) v[f.id] = fieldDefaultValue(f);
  }
  return v;
}

/**
 * Generic form filler: renders any FormSchema, autosaves drafts to
 * /api/forms/draft on a debounce, and posts to /api/forms/generate to
 * produce + store the PDF on submit.
 */
export function FormFiller({ schema, country }: Props) {
  const [values, setValues] = useState<Values>(() => initialValues(schema));
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load draft
  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const r = await fetch(`/api/forms/draft?form_type=${schema.id}`);
        if (!r.ok) return;
        const j = (await r.json()) as { draft: { data: Values } | null };
        if (!cancelled && j.draft?.data) {
          setValues((prev) => ({ ...prev, ...j.draft!.data }));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [schema.id]);

  // Debounced autosave
  const scheduleSave = useCallback(
    (next: Values) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(async () => {
        setSaving(true);
        try {
          await fetch('/api/forms/draft', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ form_type: schema.id, data: next }),
          });
          setSavedAt(new Date());
        } finally {
          setSaving(false);
        }
      }, SAVE_DEBOUNCE_MS);
    },
    [schema.id],
  );

  function updateField(id: string, value: string | number | boolean) {
    setValues((prev) => {
      const next = { ...prev, [id]: value };
      scheduleSave(next);
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors([]);
    setSubmitting(true);
    setDownloadUrl(null);
    try {
      const r = await fetch('/api/forms/generate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ country, form_type: schema.id, data: values }),
      });
      const j = (await r.json()) as { error?: string; download_url?: string };
      if (!r.ok) {
        setErrors([j.error ?? 'Generation failed']);
      } else if (j.download_url) {
        setDownloadUrl(j.download_url);
      }
    } catch (err) {
      setErrors([err instanceof Error ? err.message : 'Network error']);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <div className="mt-8 text-sm text-muted">Loading your draft...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-10">
      {schema.sections.map((section) => (
        <fieldset key={section.title} className="rounded-card border border-border bg-white p-5 sm:p-7">
          <legend className="display text-[18px] font-semibold tracking-tight text-ink">
            {section.title}
          </legend>
          {section.description && (
            <p className="mt-1.5 text-sm text-muted">{section.description}</p>
          )}
          <div className="mt-5 grid gap-x-5 gap-y-4 sm:grid-cols-2">
            {section.fields.map((field) => (
              <FieldInput
                key={field.id}
                field={field}
                value={values[field.id]}
                onChange={(v) => updateField(field.id, v)}
              />
            ))}
          </div>
        </fieldset>
      ))}

      <div className="sticky bottom-2 z-10 rounded-card border border-border bg-white p-4 shadow-card sm:flex sm:items-center sm:justify-between sm:gap-4">
        <div className="text-xs text-muted">
          {saving
            ? 'Saving draft...'
            : savedAt
              ? `Draft saved ${savedAt.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`
              : 'Draft will autosave as you type.'}
        </div>
        <div className="mt-3 flex items-center gap-3 sm:mt-0">
          {downloadUrl && (
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-ink"
            >
              Open PDF ↗
            </a>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-1.5 rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
          >
            {submitting ? 'Generating PDF...' : 'Generate filled PDF'}
          </button>
        </div>
      </div>

      {errors.length > 0 && (
        <div className="rounded-card border border-warm/40 bg-warm/10 p-4 text-sm text-ink">
          {errors.map((e, i) => (
            <div key={i}>{e}</div>
          ))}
        </div>
      )}

      {downloadUrl && (
        <div className="rounded-card border border-border bg-surface/60 p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
            Generated
          </div>
          <h3 className="display mt-2 text-[18px] font-semibold tracking-tight text-ink">
            Your filled brief is ready
          </h3>
          <p className="mt-2 text-sm text-muted">
            The PDF is stored in your private account at{' '}
            <Link href={`/app/${country}/documents`} className="font-semibold text-ink underline-offset-2 hover:underline">
              Documents
            </Link>
            . The link above expires in 2 minutes; come back to your documents page to download
            again any time.
          </p>
          <h4 className="display mt-5 text-[15px] font-semibold tracking-tight text-ink">
            Next steps
          </h4>
          <ul className="mt-2 flex flex-col gap-1 text-sm text-muted">
            {schema.nextSteps.map((s, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-warm" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: FormField;
  value: string | number | boolean;
  onChange: (v: string | number | boolean) => void;
}) {
  const wrapperClass = field.fullWidth || field.type === 'textarea' ? 'sm:col-span-2' : '';
  const inputBase =
    'mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-warm/40 focus:border-warm';

  return (
    <div className={wrapperClass}>
      <label htmlFor={field.id} className="block text-[13px] font-semibold text-ink">
        {field.label}
        {field.required && <span className="ml-1 text-warm">*</span>}
      </label>

      {field.type === 'textarea' ? (
        <textarea
          id={field.id}
          required={field.required}
          placeholder={field.hint}
          value={value as string}
          rows={3}
          onChange={(e) => onChange(e.target.value)}
          className={inputBase}
        />
      ) : field.type === 'select' ? (
        <select
          id={field.id}
          required={field.required}
          value={value as string}
          onChange={(e) => onChange(e.target.value)}
          className={inputBase}
        >
          <option value="">Select...</option>
          {field.options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : field.type === 'checkbox' ? (
        <input
          id={field.id}
          type="checkbox"
          checked={Boolean(value)}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1.5 h-4 w-4 rounded border-border"
        />
      ) : (
        <input
          id={field.id}
          type={
            field.type === 'currency'
              ? 'number'
              : field.type === 'number'
                ? 'number'
                : field.type === 'date'
                  ? 'date'
                  : field.type === 'email'
                    ? 'email'
                    : field.type === 'tel'
                      ? 'tel'
                      : 'text'
          }
          required={field.required}
          placeholder={field.hint}
          value={value as string}
          min={field.min}
          max={field.max}
          step={field.type === 'currency' ? 100 : undefined}
          onChange={(e) =>
            onChange(field.type === 'number' || field.type === 'currency' ? Number(e.target.value) : e.target.value)
          }
          className={inputBase}
        />
      )}

      {field.help && <p className="mt-1 text-xs text-faint">{field.help}</p>}
    </div>
  );
}
