'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/cn';

interface Input {
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  content: string;
}

type Severity = 'pass' | 'warn' | 'fail';
interface Check {
  label: string;
  severity: Severity;
  detail: string;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ');
}

function analyse({
  title,
  metaTitle,
  metaDescription,
  slug,
  excerpt,
  coverImage,
  coverImageAlt,
  content,
}: Input): Check[] {
  const text = stripHtml(content).trim();
  const words = text.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const internalLinks = (content.match(/href=["']\/(?!\/)[^"']*["']/g) ?? []).length;
  const externalLinks = (content.match(/href=["']https?:\/\/[^"']*["']/g) ?? []).length;
  const imagesWithoutAlt =
    (content.match(/<img[^>]*alt=["']\s*["'][^>]*>/gi) ?? []).length +
    (content.match(/<img(?![^>]*\balt=)[^>]*>/gi) ?? []).length;
  const h1InBody = (content.match(/<h1\b/gi) ?? []).length;
  const h2Count = (content.match(/<h2\b/gi) ?? []).length;
  const externalAnchors = content.match(/<a[^>]+href=["']https?:[^"']+["'][^>]*>/gi) ?? [];
  const externalWithoutNofollow = externalAnchors.filter(
    (a) => !/\brel=["'][^"']*\bnofollow\b/i.test(a),
  ).length;

  const t = metaTitle || title;
  const checks: Check[] = [];

  // Title length
  checks.push(
    t.length === 0
      ? { label: 'Meta title', severity: 'fail', detail: 'Empty. Add a title.' }
      : t.length < 30
        ? { label: 'Meta title', severity: 'warn', detail: `Only ${t.length} chars. Aim for 50-60.` }
        : t.length <= 60
          ? { label: 'Meta title', severity: 'pass', detail: `${t.length}/60 chars. Ideal length.` }
          : t.length <= 70
            ? { label: 'Meta title', severity: 'warn', detail: `${t.length} chars. May truncate in SERPs.` }
            : { label: 'Meta title', severity: 'fail', detail: `${t.length} chars. Will be cut off in Google results.` },
  );

  // Meta description
  const d = metaDescription || excerpt;
  checks.push(
    d.length === 0
      ? { label: 'Meta description', severity: 'fail', detail: 'Empty. Write one or it auto-fills from excerpt.' }
      : d.length < 70
        ? { label: 'Meta description', severity: 'warn', detail: `Only ${d.length} chars. Aim for 120-155.` }
        : d.length <= 155
          ? { label: 'Meta description', severity: 'pass', detail: `${d.length}/155 chars. Ideal length.` }
          : d.length <= 170
            ? { label: 'Meta description', severity: 'warn', detail: `${d.length} chars. May truncate in SERPs.` }
            : { label: 'Meta description', severity: 'fail', detail: `${d.length} chars. Will be cut off.` },
  );

  // Slug
  checks.push(
    slug.length === 0
      ? { label: 'URL slug', severity: 'fail', detail: 'Empty.' }
      : slug.length > 70
        ? { label: 'URL slug', severity: 'warn', detail: `${slug.length} chars. Shorter is better for SEO.` }
        : /^[a-z0-9-]+$/.test(slug)
          ? { label: 'URL slug', severity: 'pass', detail: `${slug} (${slug.length} chars).` }
          : { label: 'URL slug', severity: 'fail', detail: 'Uses non-URL-safe characters.' },
  );

  // Cover image
  checks.push(
    !coverImage
      ? { label: 'Cover image', severity: 'warn', detail: 'No image set. Social previews will be plain text.' }
      : !coverImageAlt
        ? { label: 'Cover image', severity: 'warn', detail: 'Image set but alt text missing. Will fall back to title.' }
        : { label: 'Cover image', severity: 'pass', detail: 'Image + alt text set.' },
  );

  // Word count
  checks.push(
    wordCount < 200
      ? { label: 'Content length', severity: 'fail', detail: `${wordCount} words. Too short for SEO weight (aim for 800+).` }
      : wordCount < 600
        ? { label: 'Content length', severity: 'warn', detail: `${wordCount} words. Reasonable but 800+ ranks better.` }
        : { label: 'Content length', severity: 'pass', detail: `${wordCount} words.` },
  );

  // H1 in body
  checks.push(
    h1InBody > 0
      ? { label: 'H1 in body', severity: 'fail', detail: `${h1InBody} H1 in body. The post title is already the H1 — use H2/H3 inside.` }
      : { label: 'H1 in body', severity: 'pass', detail: 'No duplicate H1.' },
  );

  // H2 structure
  checks.push(
    wordCount > 400 && h2Count === 0
      ? { label: 'Section structure', severity: 'warn', detail: 'No H2 headings. Long posts read better with H2 sections.' }
      : { label: 'Section structure', severity: 'pass', detail: `${h2Count} H2 section${h2Count === 1 ? '' : 's'}.` },
  );

  // Internal links
  checks.push(
    internalLinks === 0
      ? { label: 'Internal links', severity: 'warn', detail: 'No internal links. Add 2-3 to related pillar/sub-pillar pages for SEO.' }
      : { label: 'Internal links', severity: 'pass', detail: `${internalLinks} internal link${internalLinks === 1 ? '' : 's'}.` },
  );

  // External links
  checks.push(
    externalLinks === 0
      ? { label: 'External sources', severity: 'warn', detail: 'No external sources. Citing authoritative sources (gov.uk etc) boosts trust.' }
      : { label: 'External sources', severity: 'pass', detail: `${externalLinks} external link${externalLinks === 1 ? '' : 's'}.` },
  );

  // External nofollow
  if (externalLinks > 0) {
    checks.push(
      externalWithoutNofollow > 0
        ? { label: 'rel="nofollow" on external links', severity: 'warn', detail: `${externalWithoutNofollow} external link${externalWithoutNofollow === 1 ? '' : 's'} missing rel="nofollow noopener noreferrer".` }
        : { label: 'rel="nofollow" on external links', severity: 'pass', detail: 'All external links carry nofollow.' },
    );
  }

  // Images alt text
  if (/<img/i.test(content)) {
    checks.push(
      imagesWithoutAlt > 0
        ? { label: 'Image alt text', severity: 'fail', detail: `${imagesWithoutAlt} inline image${imagesWithoutAlt === 1 ? '' : 's'} missing alt text. Hurts SEO and accessibility.` }
        : { label: 'Image alt text', severity: 'pass', detail: 'All inline images have alt text.' },
    );
  }

  // Title keyword in slug
  const titleWords = title
    .toLowerCase()
    .split(/\W+/)
    .filter((w) => w.length > 3 && !STOP_WORDS.has(w));
  const slugWords = new Set(slug.split('-'));
  const overlap = titleWords.filter((w) => slugWords.has(w)).length;
  checks.push(
    titleWords.length > 0 && overlap === 0
      ? { label: 'Title ↔ slug match', severity: 'warn', detail: 'No keyword overlap between title and URL slug.' }
      : { label: 'Title ↔ slug match', severity: 'pass', detail: 'Title keywords appear in the URL slug.' },
  );

  return checks;
}

const STOP_WORDS = new Set([
  'the', 'and', 'for', 'with', 'from', 'this', 'that', 'your', 'have', 'will',
  'are', 'not', 'but', 'into', 'they', 'them', 'what', 'when', 'how', 'why',
  'who', 'all', 'can', 'one', 'two', 'three', 'about', 'over', 'under',
]);

export function SeoScanner(props: Input) {
  const checks = useMemo(() => analyse(props), [props]);
  const fails = checks.filter((c) => c.severity === 'fail').length;
  const warns = checks.filter((c) => c.severity === 'warn').length;
  const passes = checks.filter((c) => c.severity === 'pass').length;

  const score = checks.length > 0 ? Math.round((passes / checks.length) * 100) : 0;
  const scoreColor =
    score >= 85 ? '#10B981' : score >= 60 ? '#F59E0B' : '#9C3848';

  return (
    <div className="rounded-card border border-border bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
          SEO scanner
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold" style={{ color: scoreColor }}>
            {score}/100
          </span>
          {fails > 0 && (
            <span className="rounded-pill bg-gibraltar/10 px-2 py-0.5 text-[10px] font-semibold text-gibraltar">
              {fails} fail
            </span>
          )}
          {warns > 0 && (
            <span className="rounded-pill bg-warning/10 px-2 py-0.5 text-[10px] font-semibold text-warning">
              {warns} warn
            </span>
          )}
        </div>
      </div>
      <ul className="mt-3 flex flex-col gap-1.5">
        {checks.map((c, i) => (
          <li key={i} className="flex items-start gap-2">
            <span
              aria-hidden
              className={cn(
                'mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white',
                c.severity === 'pass' && 'bg-success',
                c.severity === 'warn' && 'bg-warning',
                c.severity === 'fail' && 'bg-gibraltar',
              )}
            >
              {c.severity === 'pass' ? '✓' : c.severity === 'warn' ? '!' : '×'}
            </span>
            <div className="flex-1 text-[12px] leading-snug">
              <div className="font-semibold text-ink">{c.label}</div>
              <div className="text-muted">{c.detail}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
