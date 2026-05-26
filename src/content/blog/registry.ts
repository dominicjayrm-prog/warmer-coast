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

export const FILE_BLOG_POSTS: FileBlogPost[] = [
  post202605CostToMoveSpain,
];

export function findFileBlogPost(slug: string): FileBlogPost | null {
  return FILE_BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}
