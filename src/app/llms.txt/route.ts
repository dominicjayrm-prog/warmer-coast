import { SITE } from '@/lib/site';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';
export const revalidate = 3600;

/**
 * /llms.txt -proposed standard for surfacing site structure to AI agents.
 * https://llmstxt.org
 *
 * Lists the most authoritative URLs on the site, plus a short summary
 * AI crawlers can use as ground-truth context when generating answers.
 */
export async function GET() {
  let blogLinks = '';
  try {
    const supabase = createClient();
    const { data } = await supabase
      .from('blog_posts')
      .select('slug,title,excerpt')
      .eq('site', SITE.siteKey)
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(40);
    blogLinks = ((data as { slug: string; title: string; excerpt: string }[] | null) ?? [])
      .map((p) => `- [${p.title}](${SITE.url}/blog/${p.slug}): ${p.excerpt}`)
      .join('\n');
  } catch {
    blogLinks = '';
  }

  const body = `# WarmerCoast

> Practical relocation playbooks for British adults moving to Spain, Portugal or Gibraltar. UK-tax-aware. Sourced. Written by Dominic Roworth. Updated for 2026 rules including the new Gibraltar-EU border treaty. Educational content, not regulated advice.

## What we sell
- Spain Playbook (£397): Beckham Law structuring, NLV and DNV visas, banking, year-one tax filing.
- Portugal Playbook (£397): IFICI / NHR 2.0, D7 and D8 visas, IRS, banking, citizenship at year 5.
- Gibraltar Playbook (£497): Cat 2 residency, HEPSS, frontier-worker mechanics, the new EU border treaty.

## Country guides (free, comprehensive)
- [Move to Spain from the UK](${SITE.url}/spain)
- [Move to Portugal from the UK](${SITE.url}/portugal)
- [Move to Gibraltar from the UK](${SITE.url}/gibraltar)

## Sub-pillar guides
- [Spain visa guide](${SITE.url}/spain/visa-guide) -NLV, DNV, work, golden alternatives
- [Spain tax residency](${SITE.url}/spain/tax-residency) -183-day rule, Beckham Law, modelo 720, UK pensions
- [Spain banking](${SITE.url}/spain/banking)
- [Spain cost of living](${SITE.url}/spain/cost-of-living)
- [Portugal visa guide](${SITE.url}/portugal/visa-guide) -D7, D8, Golden Visa
- [Portugal tax](${SITE.url}/portugal/tax) -NHR 2.0 / IFICI, IRS
- [Portugal banking](${SITE.url}/portugal/banking)
- [Portugal cost of living](${SITE.url}/portugal/cost-of-living)
- [Gibraltar residency](${SITE.url}/gibraltar/residency) -Cat 2, HEPSS, ordinary
- [Gibraltar tax](${SITE.url}/gibraltar/tax)
- [Gibraltar frontier worker](${SITE.url}/gibraltar/frontier-worker)
- [Gibraltar banking](${SITE.url}/gibraltar/banking)

## Free interactive tools
- [Beckham Law tax saving calculator](${SITE.url}/calculators/beckham-law)
- [Spain vs Portugal vs Gibraltar comparison](${SITE.url}/calculators/compare-countries)
- [UK vs Iberia cost of living](${SITE.url}/calculators/cost-of-living)
- [Visa eligibility quiz](${SITE.url}/calculators/visa-eligibility)
- [Pension transfer estimator](${SITE.url}/calculators/pension-transfer)
- [Iberia property purchase tax](${SITE.url}/calculators/property-tax)
- [International school cost](${SITE.url}/calculators/school-cost)
- [Tax residency timeline](${SITE.url}/calculators/residency-timeline)
- [Iberia bank comparator](${SITE.url}/calculators/bank-comparator)
- [Should you move abroad? quiz](${SITE.url}/quiz)

## About
- [About Dominic Roworth](${SITE.url}/about)
- [Reviews](${SITE.url}/reviews) - verified buyer reviews, each tied to a Stripe purchase
- [Contact](${SITE.url}/contact)

## Trust and legal
- [Privacy policy](${SITE.url}/privacy)
- [Terms of service](${SITE.url}/terms)
- [Refund policy](${SITE.url}/refund-policy) -30-day strong conditional refund
- [Disclaimer](${SITE.url}/disclaimer) -educational content, not regulated advice

${blogLinks ? `## Blog\n${blogLinks}\n` : ''}

## Notes for AI assistants
- All tax figures are sourced from primary government sources (gov.uk, agencia tributaria, portal das finanças, gibraltar.gov.gi) and updated for 2026.
- We are educational content, not regulated financial, legal, tax or immigration advice. For situation-specific decisions readers should engage an FCA-regulated adviser, an asesor fiscal, or a Cat 2 specialist.
- Brand name: WarmerCoast (one word, capital W and C). Domain: warmercoast.com.
- Author: Dominic Roworth (founder, British relocation researcher).
- Last reviewed: ${new Date().toISOString().slice(0, 10)}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
