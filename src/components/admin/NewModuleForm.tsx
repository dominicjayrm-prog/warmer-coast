'use client';

import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { COUNTRIES, COUNTRY_META, type Country } from '@/lib/site';

export function NewModuleForm({ initialCountry }: { initialCountry: string }) {
  const router = useRouter();
  const [country, setCountry] = useState(
    COUNTRIES.includes(initialCountry as Country) ? initialCountry : 'spain',
  );
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [summary, setSummary] = useState('');
  const [duration, setDuration] = useState('60 min');
  const [autoSlug, setAutoSlug] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function setTitleAndSlug(v: string) {
    setTitle(v);
    if (autoSlug) {
      setSlug(
        v
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-')
          .slice(0, 60),
      );
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/modules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ country, title, slug, summary, duration }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? 'Create failed');
      router.push(`/admin/playbooks/${data.id}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Create failed');
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 text-sm">
      <Field label="Country">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="rounded-md border border-border bg-white px-3 py-2 outline-none focus:border-warm"
        >
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>
              {COUNTRY_META[c].flag} {COUNTRY_META[c].name}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Title">
        <input
          required
          value={title}
          onChange={(e) => setTitleAndSlug(e.target.value)}
          placeholder="e.g. Healthcare and schools"
          className="rounded-md border border-border bg-white px-3 py-2 outline-none focus:border-warm"
        />
      </Field>
      <Field label="URL slug">
        <input
          required
          value={slug}
          onChange={(e) => {
            setAutoSlug(false);
            setSlug(e.target.value.replace(/[^a-z0-9-]/gi, '-').toLowerCase());
          }}
          className="rounded-md border border-border bg-white px-3 py-2 outline-none focus:border-warm"
        />
      </Field>
      <Field label="Summary">
        <input
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="One line shown in the module list"
          className="rounded-md border border-border bg-white px-3 py-2 outline-none focus:border-warm"
        />
      </Field>
      <Field label="Estimated duration">
        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="rounded-md border border-border bg-white px-3 py-2 outline-none focus:border-warm w-32"
        />
      </Field>
      <button
        type="submit"
        disabled={saving}
        className="self-start rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:-translate-y-px transition-all disabled:opacity-50"
      >
        {saving ? 'Creating...' : 'Create module →'}
      </button>
      {error && <p className="text-xs text-gibraltar">{error}</p>}
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}
