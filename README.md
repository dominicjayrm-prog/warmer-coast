# WarmerCoast

Production Next.js 14 site for **warmercoast.com**: three relocation playbooks (Spain, Portugal, Gibraltar, plus a bundle) for British adults moving to Iberia.

## Stack

- Next.js 14 (App Router, React Server Components, TypeScript strict)
- Tailwind CSS with a custom theme (Fraunces + Inter fonts, warm/sea/gibraltar accents)
- Supabase Postgres (multi-tenant DB shared across the Norry Empire, filtered by `site` column)
- Stripe Checkout + webhook (signature-verified, no SDK dependency)
- Resend transactional email (purchase confirmation)
- ConvertKit marketing email (quiz, exit-intent, newsletter sequences)
- Plausible + Microsoft Clarity (privacy-first)
- Vercel hosting target

## Database tables

Two patterns:

**Shared (filtered by `site='warmercoast.com'`)**: `public.blog_posts`, `public.leads`, `public.newsletter_subscribers`.

**WarmerCoast-specific (`wc_*` prefix)**: `wc_profiles`, `wc_purchases`, `wc_user_progress`, `wc_user_checklist`, `wc_calculator_saves`, `wc_testimonials`, `wc_activity_log`.

All `wc_*` tables have RLS enabled with self-access policies. `wc_activity_log` is public-read for the live ticker.

## Local development

```bash
pnpm install
cp .env.example .env.local   # fill in real values for Stripe, Resend, ConvertKit
pnpm dev
```

`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are wired to the Norry Empire project (`bfxroxboykuivgckmebw`) by default.

## Deploy to Vercel

1. Connect this repo in Vercel.
2. Add environment variables from `.env.example` (mark `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `RESEND_API_KEY`, `CONVERTKIT_API_KEY` as **secret**).
3. Set the Stripe webhook endpoint to `https://warmercoast.com/api/stripe/webhook` with the events `checkout.session.completed` and `charge.refunded`.
4. Add the custom domain.

## Routes (49 static + 10 dynamic)

- `/` homepage with live tax calculator
- `/spain`, `/portugal`, `/gibraltar` country pillars + sub-pillars + spokes
- `/playbook/{spain,portugal,gibraltar,bundle}` sales pages
- `/calculators/*` nine free interactive tools
- `/quiz` 12-question branching quiz with email-gated result
- `/blog`, `/blog/[slug]` Supabase-backed
- `/checkout/*` Stripe-driven
- `/login` Supabase magic-link auth
- `/app`, `/app/[country]`, `/app/[country]/[module]` buyer dashboard
- `/account`, `/about`, `/contact`, `/reviews`
- `/privacy`, `/terms`, `/refund-policy`, `/disclaimer`

Sitemap auto-generated at `/sitemap.xml`, robots at `/robots.txt`.

## Hard rules

- White background sitewide, dark sections only at CTAs and footer
- No em dashes anywhere in code or content
- No countdown timers, no fake urgency
- All marketing pages SSG, dashboard SSR with RLS-checked queries
- WCAG AA, mobile-first at 375px

## Reference files

- `WarmerCoastHome.jsx` — original homepage design reference
- `RelocationProductApp.jsx` — original buyer dashboard reference
- `CLAUDE_CODE_PROMPT.md` — full build brief
