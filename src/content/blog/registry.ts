/**
 * File-based blog post registry — augments the DB-based blog_posts table.
 *
 * Posts defined here are first-class: they appear in /blog, /blog/[slug],
 * the author hub, and the sitemap, alongside DB-stored posts. The DB
 * remains the primary editor-friendly surface; file posts are for code-
 * resident, version-controlled long-form that ships with deploys.
 *
 * Shape matches the Post interface used in src/app/blog/[slug]/page.tsx.
 *
 * Content is rendered via dangerouslySetInnerHTML — write the content
 * field as HTML (with semantic <h2>, <h3>, <p>, <ul>, <a> etc.).
 */

export interface FileBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  cover_image_alt: string | null;
  category: string;
  read_time_minutes: number;
  published_at: string;
  updated_at: string;
  author_name: string;
  meta_title: string;
  meta_description: string;
  tags: string[] | null;
  faqs: { question: string; answer: string }[] | null;
  canonical_url: string | null;
}

import { post202605CostToMoveSpain } from './posts/2026-05-26-cost-to-move-from-uk-to-spain-2026';
import { post202605WiseRevolut } from './posts/2026-05-27-how-to-transfer-money-uk-to-spain-2026';
import { post202607GibraltarTreaty } from './posts/2026-07-08-gibraltar-eu-border-treaty-live';
import { post202607SixMonthsSpain } from './posts/2026-07-08-live-in-spain-6-months-uk-6-months';
import { post202607NhsSpain } from './posts/2026-07-10-can-i-still-use-the-nhs-if-i-move-to-spain';
import { post202607StatePension } from './posts/2026-07-11-what-happens-to-my-uk-state-pension-if-i-move-to-spain';
import { post202607UkBankAccount } from './posts/2026-07-12-can-i-keep-my-uk-bank-account-if-i-move-to-spain';

export const FILE_BLOG_POSTS: FileBlogPost[] = [
  post202607UkBankAccount,
  post202607StatePension,
  post202607NhsSpain,
  post202607SixMonthsSpain,
  post202607GibraltarTreaty,
  post202605WiseRevolut,
  post202605CostToMoveSpain,
];

/**
 * Scheduling: posts with a future published_at are invisible everywhere
 * (index, post page, latest-posts strip, author hub, sitemap) until their
 * timestamp passes. Pages that consume the registry are dynamic or ISR, so
 * scheduled posts surface automatically without a redeploy.
 */
export function visibleFileBlogPosts(now: number = Date.now()): FileBlogPost[] {
  return FILE_BLOG_POSTS.filter((p) => new Date(p.published_at).getTime() <= now);
}

export function findFileBlogPost(slug: string): FileBlogPost | null {
  return visibleFileBlogPosts().find((p) => p.slug === slug) ?? null;
}
