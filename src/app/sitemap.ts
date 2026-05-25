import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { createClient } from '@/lib/supabase/server';

const staticRoutes = [
  '',
  '/spain',
  '/spain/visa-guide',
  '/spain/tax-residency',
  '/spain/banking',
  '/spain/cost-of-living',
  '/portugal',
  '/portugal/visa-guide',
  '/portugal/tax',
  '/portugal/banking',
  '/portugal/cost-of-living',
  '/gibraltar',
  '/gibraltar/residency',
  '/gibraltar/tax',
  '/gibraltar/frontier-worker',
  '/gibraltar/banking',
  '/playbook/spain',
  '/playbook/portugal',
  '/playbook/gibraltar',
  '/calculators',
  '/calculators/beckham-law',
  '/calculators/cost-of-living',
  '/calculators/compare-countries',
  '/calculators/visa-eligibility',
  '/calculators/pension-transfer',
  '/calculators/property-tax',
  '/calculators/school-cost',
  '/calculators/residency-timeline',
  '/calculators/bank-comparator',
  '/quiz',
  '/blog',
  '/thresholds',
  '/about',
  '/reviews',
  '/contact',
  '/privacy',
  '/terms',
  '/refund-policy',
  '/disclaimer',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const base: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : 0.7,
  }));

  try {
    const supabase = createClient();
    const { data } = await supabase
      .from('blog_posts')
      .select('slug,updated_at')
      .eq('site', SITE.siteKey)
      .eq('status', 'published');
    ((data as { slug: string; updated_at: string }[] | null) ?? []).forEach((post) => {
      base.push({
        url: `${SITE.url}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  } catch {}

  return base;
}
