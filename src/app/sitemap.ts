import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { createClient } from '@/lib/supabase/server';

type Freq = MetadataRoute.Sitemap[number]['changeFrequency'];

interface Route {
  path: string;
  priority: number;
  changeFrequency: Freq;
}

const staticRoutes: Route[] = [
  // Homepage — top priority
  { path: '', priority: 1.0, changeFrequency: 'weekly' },

  // Revenue pages — playbooks
  { path: '/playbook/spain', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/playbook/portugal', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/playbook/gibraltar', priority: 0.9, changeFrequency: 'monthly' },

  // Pillar pages — high topical authority
  { path: '/spain', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/portugal', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/gibraltar', priority: 0.9, changeFrequency: 'monthly' },

  // Sourced reference hub — re-verified quarterly, treated as fresh
  { path: '/thresholds', priority: 0.9, changeFrequency: 'weekly' },

  // Head-to-head comparison pages — each targets a specific high-intent query
  { path: '/spain-vs-portugal', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/spain-vs-gibraltar', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/portugal-vs-gibraltar', priority: 0.85, changeFrequency: 'monthly' },

  // Sub-pillars
  { path: '/spain/visa-guide', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/spain/tax-residency', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/spain/banking', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/spain/cost-of-living', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/portugal/visa-guide', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/portugal/tax', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/portugal/banking', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/portugal/cost-of-living', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/gibraltar/residency', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/gibraltar/tax', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/gibraltar/frontier-worker', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/gibraltar/banking', priority: 0.8, changeFrequency: 'monthly' },

  // Calculators — high-traffic but tools, not authority
  { path: '/calculators', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/calculators/beckham-law', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/calculators/cost-of-living', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/calculators/compare-countries', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/calculators/visa-eligibility', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/calculators/pension-transfer', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/calculators/property-tax', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/calculators/school-cost', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/calculators/residency-timeline', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/calculators/bank-comparator', priority: 0.7, changeFrequency: 'monthly' },

  // Engagement / lead-magnet surfaces
  { path: '/quiz', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },

  // Trust / E-E-A-T
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/author/dominic-roworth', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/reviews', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.4, changeFrequency: 'yearly' },

  // Legal / boilerplate — low priority, low change frequency
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/refund-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/disclaimer', priority: 0.2, changeFrequency: 'yearly' },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const base: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
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
