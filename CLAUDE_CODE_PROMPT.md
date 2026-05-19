# WarmerCoast.com: Claude Code Build Prompt (v2, Production-Grade)

Paste everything below the line as your first message to Claude Code. Attach the two reference JSX files (`WarmerCoastHome.jsx` and `RelocationProductApp.jsx`) so Claude Code can see the exact design language.

---

## WHAT YOU'RE BUILDING

A production-ready Next.js 14 site for **WarmerCoast.com**, an info-product business selling three interactive relocation playbooks (Spain £397, Portugal £397, Gibraltar £497, bundle £797) to UK adults aged 35-65 planning to move abroad.

This is a real business with real ad spend behind it. The site needs to convert cold Meta traffic at 1.5-3% to checkout, rank for SEO long-tail keywords within 6 months, and deliver a buyer experience that justifies premium pricing.

I've attached two design references:
- `WarmerCoastHome.jsx`: the marketing homepage (white background, Fraunces display + Inter body, warm orange #E67E3C primary accent)
- `RelocationProductApp.jsx`: the logged-in buyer dashboard with interactive playbook modules

Match both closely.

## NON-NEGOTIABLE TECH STACK

- Next.js 14 App Router with React Server Components by default
- TypeScript throughout, strict mode
- Tailwind CSS 3.4+ with custom theme
- Supabase (Postgres + Auth + Storage + RLS)
- Stripe Checkout + webhook handling
- Resend for transactional email
- ConvertKit API for marketing email
- Vercel hosting with edge functions
- Plausible Analytics (privacy-friendly) + Microsoft Clarity for heatmaps
- next-seo, next-sitemap, JSON-LD structured data
- Framer Motion for micro-interactions (used sparingly)

## DESIGN PRINCIPLES (THE 2026 STANDARD)

This is a premium info-product brand for sophisticated buyers spending £397-£797. The design follows these principles:

**Calmer UX:** Minimalist, distraction-free, generous whitespace. No competing elements. One clear action per screen. Buyers in this demographic reject anything that feels like "guru funnel design" with countdown timers and yellow highlights.

**Trust UX:** Privacy, consent, AI disclosure baked in from day one. Cookie banner respects GDPR properly. Clear disclaimers about educational content vs regulated advice. Sources cited inline where claims are made.

**Mobile-first:** 73% of buyers research on mobile. Every interaction must work flawlessly at 375px width. Sticky CTAs, thumb-reachable controls, scannable content. Mobile conversion is 67% higher than desktop-only on this category of product.

**Component-driven:** Build a unified design system. Every button, card, badge, input, calculator reuses primitives from a shared library. No one-off styling.

**Performance:** All marketing pages statically generated. LCP under 2 seconds. CLS under 0.1. INP under 200ms. Total page weight under 200KB above fold.

## SITE ARCHITECTURE

```
/                              Marketing homepage
/quiz                          "Should you move abroad?" 12-q quiz (lead magnet)
/calculators                   Free calculators index
/calculators/beckham-law
/calculators/cost-of-living
/calculators/visa-eligibility
/calculators/property-tax
/calculators/pension-transfer
/calculators/residency-timeline
/calculators/bank-comparator
/calculators/school-cost
/calculators/compare-countries  NEW: Spain vs Portugal vs Gibraltar interactive
/spain                         Spain country pillar
/spain/visa-guide              Visa sub-pillar
/spain/visa-guide/[slug]       Visa spokes
/spain/tax-residency
/spain/tax-residency/[slug]
/spain/banking
/spain/banking/[slug]
/spain/cost-of-living
/spain/cost-of-living/[slug]
/portugal                      Portugal country pillar + sub-structure
/portugal/visa-guide
/portugal/visa-guide/[slug]
/portugal/tax
/portugal/tax/[slug]
/portugal/banking
/portugal/cost-of-living
/gibraltar                     Gibraltar country pillar + sub-structure
/gibraltar/residency
/gibraltar/tax
/gibraltar/frontier-worker
/gibraltar/banking
/playbook/spain                Spain playbook sales page
/playbook/portugal
/playbook/gibraltar
/playbook/bundle
/blog                          Paginated blog index
/blog/[slug]                   MDX blog posts
/about                         Founders story (Dom + Sofia in Cádiz)
/reviews                       Aggregated reviews + video testimonials
/checkout/[playbook]
/checkout/success
/app                           Logged-in buyer dashboard
/app/[country]                 Country playbook viewer
/app/[country]/[module]        Individual module pages
/login                         Magic link auth
/account
/contact
/privacy
/terms
/refund-policy
/disclaimer
```

## DESIGN SYSTEM

### Colour palette (add to tailwind.config.ts)

```
white: #FFFFFF (background sitewide, hard rule)
ink: #0F1827 (primary text)
muted: #525866 (secondary text)
faint: #7A8294 (tertiary text)
warm: #E67E3C (primary accent, sunset orange)
warmLight: #FFB870
warmGlow: #FFE9D5
sea: #2E8585 (secondary accent, Mediterranean teal)
gibraltar: #9C3848 (third country accent)
border: #E8E4DC (subtle borders)
surface: #F8F9FB (alternate light background)
night: #0F1827 (dark sections)
nightDeep: #0A0E18 (footer)
success: #10B981 (positive states)
warning: #F59E0B (urgent states, use sparingly)
```

### Typography

Load via next/font/google:
- Fraunces (display, weights 400, 500, 600, 700, optical sizing, italic variants)
- Inter (body, weights 400, 500, 600, 700, 800, 900)

Type scale:
- Hero headlines: clamp(48px, 7vw, 88px), Fraunces 500, letter-spacing -0.035em
- Section headlines: clamp(36px, 5vw, 64px), Fraunces 500, letter-spacing -0.03em
- Sub-headlines: 28-32px, Fraunces 600
- Body: 17-18px, Inter 400, line-height 1.6
- Small/meta: 12-14px, Inter 500-600

### Component primitives (build first)

Create these in `/components/ui` as a unified system:
- Button (primary, secondary, ghost, with size variants and loading states)
- Card (default, elevated, bordered, with hover states)
- Badge (status indicators, country tags, "MOST POPULAR" style)
- Input (text, slider, select, with proper labels and error states)
- Modal/Drawer (accessible, focus-trapped)
- Toast (for confirmations, errors)
- ProgressBar (animated, with completion states)
- Checkbox (with check animation)
- Accordion (for FAQ sections)
- Tooltip (accessible, keyboard-navigable)

## CONVERSION ARCHITECTURE (CRITICAL)

This is where most info-product sites fail. Build these specifically:

### Hero section requirements

The homepage hero must include within the first viewport (above the fold):
1. Headline (Fraunces, large, with italic accent on key phrase)
2. Subheading (one sentence, value proposition)
3. Two CTAs (primary dark button + secondary outline)
4. **Visible social proof signal** (buyer count + star rating + specific anchor like "from 247 verified buyers")
5. **The live tax calculator** (the interactive trust-builder that does the selling)

The hero must work as a complete page in itself if the user never scrolls.

### Social proof placement

Per the research, top-performing sites place social proof above the fold and again every 2-3 sections. Build:
- **Trust strip after hero**: "AS RECOMMENDED IN" with 5 placeholder logos (set up as a configurable component for when you earn real mentions)
- **Live activity ticker** (optional, can disable): "Sarah from Manchester just got the Spain playbook 2 minutes ago" using real anonymised Stripe webhook data
- **Star rating with review count** in nav after scroll, in product cards, on sales pages
- **Testimonial section** with at least 6 testimonials, mix of text and video placeholders
- **Reviews page** with aggregated rating and recent reviews

### Email capture (universal, designed-in)

Build three email capture mechanisms:
1. **The quiz funnel** (`/quiz`): 12-question quiz, email captured before final result revealed. ConvertKit integration with quiz_completed tag.
2. **Exit-intent modal**: Triggers when cursor leaves viewport at top, only once per session, only on marketing pages (not checkout/app). Offers "Free Spain Relocation Starter Checklist" PDF in exchange for email.
3. **Scroll-triggered footer bar**: After 70% scroll on long pages, slim sticky bar appears with email capture for newsletter.

All captures go to Supabase `leads` table AND ConvertKit with source tagging.

### The "When are you moving?" gate

Add a soft-personalisation gate that appears on first visit (skippable). Three options: "In the next 6 months / In 6-18 months / Still researching". Stores in cookie + Supabase if logged in. Subsequent visits show personalised content:
- 6 months: emphasises urgency, immediate action items, "you don't have time to mess this up"
- 6-18 months: emphasises planning timeline, structured approach
- Still researching: emphasises the quiz, calculators, free guides

### Strong guarantee positioning

The 30-day refund policy must be positioned conditionally on sales pages:
> "Complete the first 3 modules within 30 days. If you haven't identified at least £1,000 in tax mistakes you'd have made without the playbook, email us for a full refund and keep the materials."

This converts 30%+ better than vanilla money-back guarantees because it shows confidence and encourages engagement.

### "Not ideal for" section

On every playbook sales page, include a transparent "This is not for you if..." section. Examples for Spain:
- You're already represented by an IFA who handles your relocation
- You're planning commercial property investment (not covered)
- You're unwilling to read 100+ pages of structured guidance
- You need legal advice on a current visa rejection (we recommend a regulated immigration lawyer)

Counter-intuitively this increases trust and conversion. The buyer feels you're being honest, not desperate to sell.

### Decision-support tools (Casper pattern)

For products over £200, decision-support tools embedded on the page convert better than redirects. Build:
- **Country comparison tool** at `/calculators/compare-countries`: side-by-side comparison of Spain vs Portugal vs Gibraltar across tax, cost, visa difficulty, lifestyle, English-speaking ease
- **Embedded calculators** on every relevant page (not just `/calculators/*`)
- **"Which playbook is right for me?" quiz** on the bundle page

### Sticky behaviours

- **Sticky nav** that becomes white-blurred after scroll (already in reference)
- **Sticky "buy now" bar** appears on sales pages after scrolling past hero
- **Sticky module navigator** in the buyer dashboard (already in app reference)

## SUPABASE SCHEMA

Single migration file:

```sql
-- Profiles
create table profiles (
  id uuid primary key references auth.users on delete cascade,
  email text unique,
  full_name text,
  uk_city text,
  target_country text,
  moving_timeframe text, -- '0-6m', '6-18m', 'researching'
  uk_income_estimate integer,
  family_size integer,
  intended_move_date date,
  has_partner boolean default false,
  partner_uk_income integer,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Purchases (Stripe)
create table purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  stripe_session_id text unique,
  stripe_customer_id text,
  product_slug text not null,
  amount_paid integer not null,
  currency text default 'gbp',
  status text default 'completed',
  refunded_at timestamptz,
  created_at timestamptz default now()
);

-- Module progress
create table user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  country text not null,
  module_number integer not null,
  completed boolean default false,
  completed_at timestamptz,
  time_spent_seconds integer default 0,
  unique(user_id, country, module_number)
);

-- Checklist items
create table user_checklist (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  country text not null,
  module_number integer not null,
  item_id text not null,
  completed boolean default false,
  completed_at timestamptz,
  unique(user_id, country, module_number, item_id)
);

-- Calculator saves (for return visits)
create table calculator_saves (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  session_id text, -- for anonymous saves
  calculator_type text not null,
  inputs jsonb not null,
  result jsonb,
  created_at timestamptz default now()
);

-- Leads (pre-purchase)
create table leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text, -- 'quiz', 'exit_intent', 'calculator', 'newsletter', 'starter_pack'
  metadata jsonb,
  convertkit_subscriber_id text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz default now()
);

-- Reviews/Testimonials
create table testimonials (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  product_slug text,
  rating integer check (rating >= 1 and rating <= 5),
  quote text not null,
  display_name text,
  display_location text,
  video_url text,
  verified boolean default false,
  featured boolean default false,
  approved boolean default false,
  created_at timestamptz default now()
);

-- Blog posts (CMS-lite)
create table blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  country text,
  category text,
  title text not null,
  meta_description text,
  excerpt text,
  content_mdx text not null,
  reading_time integer,
  published boolean default false,
  published_at timestamptz,
  updated_at timestamptz default now(),
  schema_type text default 'Article',
  featured_image_url text,
  author_name text default 'Dom Roworth',
  author_bio text
);

-- Activity log (for the social proof live ticker)
create table activity_log (
  id uuid primary key default gen_random_uuid(),
  event_type text not null, -- 'purchase', 'review', 'completion'
  product_slug text,
  anonymised_name text, -- 'Sarah from Manchester' style
  metadata jsonb,
  created_at timestamptz default now()
);
```

Enable Row Level Security on all user tables. Add policies so users only read/write their own data. Service role bypasses RLS for webhooks.

## STRIPE INTEGRATION

- Stripe Checkout (hosted, no Payment Intents complexity)
- Four products: spain (£397), portugal (£397), gibraltar (£497), bundle (£797)
- Webhook at `/api/stripe/webhook` verifies signature and handles:
  - `checkout.session.completed`: create/update profile, create purchase, write to activity_log, trigger Resend purchase email, add to ConvertKit "buyers" sequence
  - `charge.refunded`: mark purchase refunded, revoke app access, trigger refund email
- Stripe Tax enabled for UK/EU VAT compliance
- Customer Portal enabled for self-serve refunds/billing

## EMAIL FLOWS (RESEND + CONVERTKIT)

Transactional (Resend):
1. Magic link login
2. Purchase confirmation with login link
3. Refund confirmation
4. Tax law update broadcast template

Marketing sequences (ConvertKit, triggered by webhook):
1. **Quiz completion sequence** (5 emails over 14 days): personalised based on quiz answers, ends with playbook pitch
2. **Starter pack sequence** (4 emails over 10 days): educational content, soft sell at email 4
3. **Buyer sequence** (post-purchase, 6 emails over 30 days): onboarding, module reminders, upsell to bundle if single-country buyer
4. **Abandoned checkout** (3 emails over 5 days): for Stripe Checkout abandoned sessions

## SEO REQUIREMENTS (P0)

### On every page:
- Unique title tag (60 char max, keyword front-loaded)
- Unique meta description (155 char max, CTR-optimised)
- Canonical URL
- Open Graph image (1200x630, auto-generated where possible)
- Twitter card meta
- JSON-LD structured data appropriate to page type

### Schema types to implement:
- Article (blog posts)
- FAQPage (on FAQ sections, critical for AI Overview citations)
- HowTo (guide pages)
- Product + Offer + AggregateRating (playbook sales pages)
- BreadcrumbList (every non-homepage page)
- Organization (homepage)
- Person (author bios)
- WebSite with SearchAction (homepage)

### Technical SEO:
- Auto-generated XML sitemap via next-sitemap
- robots.txt: allow all, disallow /app, /account, /checkout, /api
- All marketing pages use generateStaticParams (SSG, not SSR)
- All images via next/image with proper alt text, WebP format
- Internal linking with descriptive anchor text
- Every blog post links to its parent sub-pillar + 3-5 related articles
- Pillar pages link to all child sub-pillars and most-relevant spokes
- Hub-and-spoke architecture enforced via category/tag system

### Performance:
- Homepage LCP under 2 seconds (target 1.5s)
- All marketing pages 95+ Lighthouse
- Fonts preloaded with font-display: swap
- Critical CSS inlined
- Above-the-fold content under 200KB
- Below-fold lazy loaded
- Vercel Edge caching enabled

## INTERACTIVE COMPONENTS

### Live tax calculator (homepage + /calculators/beckham-law)
Already designed in reference. Build with:
- Income slider (£20k-£200k)
- Country selector (Spain/Portugal/Gibraltar)
- Live calculation: UK tax vs country tax vs Beckham Law (Spain only)
- Big number "you save" display
- "Save over 6 years" cumulative
- Save calculation to localStorage (anonymous) or Supabase (logged in)
- CTA to relevant country playbook
- Embedded version on country pillar pages

### Visa eligibility quiz (`/quiz` + `/calculators/visa-eligibility`)
- 12 questions with branching logic
- Stores progress in localStorage so users can return
- Email capture at question 10 before final reveal
- Final result: country recommendation + visa route + estimated tax savings
- Adds to ConvertKit quiz sequence with all answers tagged

### Country comparison tool (`/calculators/compare-countries`)
- Side-by-side comparison of Spain, Portugal, Gibraltar
- Toggle factors: tax, cost of living, visa difficulty, weather, English-speaking, healthcare, family-friendliness
- Visual radar chart or bar comparison
- "Best for you" recommendation based on selected priorities

### Cost-of-living comparator (`/calculators/cost-of-living`)
- UK city input + target city input
- Monthly breakdown: rent, utilities, groceries, eating out, transport, healthcare, leisure
- Side-by-side bar chart visualisation
- Annual savings + over-5-years calculation
- Sources cited (Numbeo, Eurostat, ONS)

### Other calculators
Each calculator at `/calculators/[name]` is a standalone interactive tool with email capture for "save your results" feature.

### Visa decision tree (inside `/app/[country]/visa`)
- 8-10 question branching tree
- Animated transitions (Framer Motion, subtle)
- Final recommendation with reasoning
- Saves to user_progress

### Interactive checklist (inside `/app/[country]/[module]`)
- Items grouped by section
- Click to toggle complete, persists to Supabase
- Deadline tracking with relative dates
- Progress bar at module level
- Subtle confetti animation on 100% complete

## TRUST UX REQUIREMENTS

The buyer demographic is sophisticated. Build trust through:

### Disclaimers (visible, not hidden)
- Educational content disclaimer at footer of every page
- "Not regulated financial advice" badge on tax-related content
- Source citations inline ("According to gov.uk's pension drawdown guidance...")
- Link to free government resources (Pension Wise, gov.uk Spain section)

### Privacy/consent
- Proper GDPR cookie banner (functional, analytics, marketing toggles)
- Clear privacy policy explaining what's collected and why
- Data export feature in /account
- Account deletion feature in /account
- Marketing email unsubscribe in every email footer

### AI disclosure
- Statement that some content is AI-assisted but human-edited
- Real author bios (Dom + Sofia) on every blog post
- No AI-generated stock photography that misrepresents lifestyle (use real photos or clearly illustrated graphics)

### Refund clarity
- 30-day strong conditional guarantee on every product page
- Simple refund process (one-click via Stripe Customer Portal)
- Transparent refund stats if available ("Less than 4% of buyers request refunds")

## HARD CONSTRAINTS (NON-NEGOTIABLE)

1. **NO em dashes anywhere in code, content, or generated copy.** Use commas, full stops, or rewrite. If you find yourself wanting to use an em dash, restructure the sentence.
2. **White background sitewide** (#FFFFFF). Only dark sections are the final CTA and footer.
3. **No fake metrics.** Statistics like "2,121 Brits relocated" are clearly marked placeholder. Pull real numbers from Supabase activity_log once data exists.
4. **No Lorem Ipsum.** Use plausible filler content about Spanish visas, Portuguese tax, etc.
5. **Mobile-first responsive.** Test at 375px. Every interactive element must work on touch.
6. **WCAG AA accessibility minimum.** Real alt text, proper heading hierarchy, focusable elements, AA colour contrast.
7. **No client-side rendering of static marketing content.** Pre-render everything for SEO.
8. **No third-party tracking scripts beyond Plausible + Clarity.** Privacy-first.
9. **No countdown timers or fake urgency.** Real deadlines only (tax filing dates, season changes, etc).

## BUILD ORDER

Execute in sequence. Don't skip:

1. **Foundation**: Next.js project, TypeScript, Tailwind theme, font loading, root layout, nav, footer, component primitives library
2. **Homepage**: Match `WarmerCoastHome.jsx` exactly. White background, no em dashes, the calculator working.
3. **Country pillar pages**: `/spain`, `/portugal`, `/gibraltar` as 2,500+ word content-ready templates with hub-and-spoke link structure
4. **Sub-pillar templates**: All 12 sub-pillars structured for content insertion
5. **Blog system**: `/blog` index, `/blog/[slug]` dynamic route, MDX support, full schema markup, related-articles algorithm
6. **Calculator pages**: All 8 free calculators with working logic and email capture
7. **Quiz funnel**: `/quiz` with 12-question branching logic, email capture, ConvertKit integration
8. **Playbook sales pages**: `/playbook/spain`, `/playbook/portugal`, `/playbook/gibraltar`, `/playbook/bundle` with strong conditional guarantee, "not ideal for" sections, embedded comparison tools
9. **Stripe integration**: Checkout flow, webhook, success page, refund handling, Customer Portal
10. **Supabase auth**: Magic link login, protected routes for /app/*
11. **Buyer dashboard**: `/app` routes matching `RelocationProductApp.jsx` exactly
12. **Email flows**: All Resend transactional + ConvertKit marketing sequences
13. **Trust UX**: GDPR banner, privacy/terms/refund/disclaimer pages, About page with founders story
14. **SEO polish**: Full schema audit, sitemap, robots.txt, Lighthouse optimization to 95+
15. **Analytics**: Plausible + Clarity setup, conversion tracking, funnel events

## ENVIRONMENT VARIABLES (.env.local)

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
RESEND_API_KEY=
CONVERTKIT_API_KEY=
CONVERTKIT_FORM_ID_QUIZ=
CONVERTKIT_FORM_ID_STARTER=
CONVERTKIT_FORM_ID_NEWSLETTER=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=warmercoast.com
NEXT_PUBLIC_CLARITY_ID=
NEXT_PUBLIC_SITE_URL=https://warmercoast.com
```

## SUCCESS CRITERIA

The site is "done" when:
1. All routes return 200 with proper SEO meta and structured data
2. Stripe test purchase completes end to end (Checkout → webhook → Supabase profile + purchase → magic link email → login → buyer dashboard access)
3. A test user can buy any playbook, receive magic link, log into dashboard, see their playbook with progress tracking working
4. Lighthouse 95+ on homepage and all pillar pages
5. Zero em dashes anywhere in codebase or content
6. Site visually matches both reference files on desktop and works fluidly on mobile at 375px
7. GDPR cookie banner functional, privacy/terms pages live
8. At least one full email sequence (quiz funnel) firing correctly via ConvertKit
9. Quiz, country comparison tool, and tax calculator all working with state persistence
10. Activity log writing to Supabase so live ticker can show real (anonymised) data

## QUESTIONS TO ASK ME BEFORE STARTING

Before writing code, confirm:
1. Should I use Supabase MDX storage or filesystem-based MDX (recommend filesystem for blog, Supabase for user-generated content)?
2. Do you want me to set up Stripe Tax with EU VAT compliance, or handle that later?
3. For the activity log live ticker, do you want it visible on launch or feature-flagged off until you have real activity?
4. Any specific Plausible custom events you want tracked beyond pageviews and purchases?
5. Should I include a `/founders` page with placeholder copy about you and Sofia, or leave that for you to write?

Wait for my answers, then proceed in the specified build order. Take your time on each phase. Quality over speed.

---

End of brief.
