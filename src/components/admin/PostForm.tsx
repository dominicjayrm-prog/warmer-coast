'use client';

import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { BlogEditor } from './BlogEditor';
import { Card, CardBody } from '@/components/ui/Card';

interface PostInput {
  id?: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  meta_title: string;
  meta_description: string;
  cover_image: string;
  content: string;
  read_time_minutes: number;
  status: 'draft' | 'published';
  author_name: string;
  tags: string[];
}

interface Props {
  initial?: Partial<PostInput> & { id?: string };
  mode: 'create' | 'edit';
}

const defaultPost: PostInput = {
  title: '',
  slug: '',
  category: 'Spain',
  excerpt: '',
  meta_title: '',
  meta_description: '',
  cover_image: '',
  content: '',
  read_time_minutes: 5,
  status: 'draft',
  author_name: 'Dominic Roworth',
  tags: [],
};

export function PostForm({ initial, mode }: Props) {
  const router = useRouter();
  const [post, setPost] = useState<PostInput>({ ...defaultPost, ...initial });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [autoSlug, setAutoSlug] = useState(mode === 'create');

  function update<K extends keyof PostInput>(key: K, value: PostInput[K]) {
    setPost((p) => ({ ...p, [key]: value }));
  }

  function setTitle(v: string) {
    update('title', v);
    if (autoSlug) {
      update('slug', slugify(v));
      if (!post.meta_title) update('meta_title', v);
    }
  }

  async function submit(e: FormEvent<HTMLFormElement>, publish?: boolean) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const payload = {
      ...post,
      status: publish !== undefined ? (publish ? 'published' : 'draft') : post.status,
      meta_title: post.meta_title || post.title,
      meta_description: post.meta_description || post.excerpt.slice(0, 155),
      read_time_minutes:
        Number(post.read_time_minutes) || Math.max(1, Math.round(stripHtml(post.content).split(/\s+/).length / 220)),
    };
    try {
      const url = mode === 'create' ? '/api/admin/posts' : `/api/admin/posts/${initial?.id}`;
      const method = mode === 'create' ? 'POST' : 'PATCH';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? 'Save failed');
      if (mode === 'create') {
        router.push(`/admin/blog/${data.id}`);
      } else {
        router.refresh();
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  async function deletePost() {
    if (!initial?.id) return;
    if (!confirm('Delete this post? This cannot be undone.')) return;
    const res = await fetch(`/api/admin/posts/${initial.id}`, { method: 'DELETE' });
    if (res.ok) router.push('/admin/blog');
    else alert('Delete failed');
  }

  return (
    <form onSubmit={(e) => submit(e)} className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="flex flex-col gap-4">
        <Card variant="bordered">
          <CardBody className="flex flex-col gap-3">
            <input
              required
              placeholder="Post title"
              value={post.title}
              onChange={(e) => setTitle(e.target.value)}
              className="display border-0 bg-transparent text-[34px] font-semibold tracking-tight text-ink outline-none placeholder:text-faint"
            />
            <textarea
              placeholder="Short excerpt (shows on listing and as meta description default)"
              value={post.excerpt}
              onChange={(e) => update('excerpt', e.target.value)}
              rows={2}
              className="border-0 bg-transparent text-base text-muted outline-none placeholder:text-faint resize-none"
            />
          </CardBody>
        </Card>

        <BlogEditor initialContent={post.content} onChange={(html) => update('content', html)} />
      </div>

      <aside className="flex flex-col gap-4">
        <Card variant="bordered">
          <CardBody className="flex flex-col gap-4 text-sm">
            <Field label="Slug">
              <div className="flex items-center gap-2">
                <span className="text-xs text-faint">/blog/</span>
                <input
                  value={post.slug}
                  onChange={(e) => {
                    setAutoSlug(false);
                    update('slug', slugify(e.target.value));
                  }}
                  className="flex-1 rounded-md border border-border bg-white px-2 py-1.5 text-sm outline-none focus:border-warm"
                />
              </div>
            </Field>
            <Field label="Category">
              <select
                value={post.category}
                onChange={(e) => update('category', e.target.value)}
                className="rounded-md border border-border bg-white px-2 py-1.5 text-sm outline-none focus:border-warm"
              >
                <option>Spain</option>
                <option>Portugal</option>
                <option>Gibraltar</option>
                <option>Tax</option>
                <option>Visa</option>
                <option>Banking</option>
                <option>Lifestyle</option>
                <option>News</option>
              </select>
            </Field>
            <Field label="Cover image URL">
              <input
                value={post.cover_image}
                onChange={(e) => update('cover_image', e.target.value)}
                placeholder="https://... or upload via editor"
                className="rounded-md border border-border bg-white px-2 py-1.5 text-sm outline-none focus:border-warm"
              />
              {post.cover_image && (
                <div
                  aria-hidden
                  className="mt-2 h-24 w-full rounded-md border border-border bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.cover_image})` }}
                />
              )}
            </Field>
            <Field label="Author name">
              <input
                value={post.author_name}
                onChange={(e) => update('author_name', e.target.value)}
                className="rounded-md border border-border bg-white px-2 py-1.5 text-sm outline-none focus:border-warm"
              />
            </Field>
            <Field label="Read time (minutes)">
              <input
                type="number"
                min={1}
                value={post.read_time_minutes}
                onChange={(e) => update('read_time_minutes', Number(e.target.value))}
                className="w-24 rounded-md border border-border bg-white px-2 py-1.5 text-sm outline-none focus:border-warm"
              />
            </Field>
          </CardBody>
        </Card>

        <Card variant="bordered">
          <CardBody className="flex flex-col gap-3">
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">SEO</div>
            <Field label="Meta title (60 chars max)">
              <input
                value={post.meta_title}
                onChange={(e) => update('meta_title', e.target.value)}
                maxLength={70}
                className="rounded-md border border-border bg-white px-2 py-1.5 text-sm outline-none focus:border-warm"
              />
              <span className="text-[11px] text-faint">{post.meta_title.length}/60</span>
            </Field>
            <Field label="Meta description (155 chars max)">
              <textarea
                value={post.meta_description}
                onChange={(e) => update('meta_description', e.target.value)}
                maxLength={170}
                rows={3}
                className="rounded-md border border-border bg-white px-2 py-1.5 text-sm outline-none focus:border-warm resize-none"
              />
              <span className="text-[11px] text-faint">{post.meta_description.length}/155</span>
            </Field>
          </CardBody>
        </Card>

        <Card variant="bordered">
          <CardBody className="flex flex-col gap-3">
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Publish</div>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                disabled={saving}
                onClick={(e) => submit(e as unknown as FormEvent<HTMLFormElement>, false)}
                className="rounded-pill border border-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-ink disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save draft'}
              </button>
              <button
                type="button"
                disabled={saving}
                onClick={(e) => submit(e as unknown as FormEvent<HTMLFormElement>, true)}
                className="rounded-pill bg-warm px-4 py-2 text-sm font-semibold text-white hover:-translate-y-px transition-all disabled:opacity-50"
              >
                {post.status === 'published' ? 'Update published' : 'Publish'}
              </button>
              {mode === 'edit' && (
                <button
                  type="button"
                  onClick={deletePost}
                  className="rounded-pill px-4 py-2 text-sm font-semibold text-gibraltar hover:bg-gibraltar/10"
                >
                  Delete post
                </button>
              )}
            </div>
            {error && <p className="text-xs text-gibraltar">{error}</p>}
            <p className="text-[11px] text-faint">
              Posts publish to <code className="rounded bg-surface px-1">/blog/{post.slug || 'slug'}</code>.
            </p>
          </CardBody>
        </Card>
      </aside>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ');
}
