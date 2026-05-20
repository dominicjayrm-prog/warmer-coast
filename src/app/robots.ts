import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

// AI crawlers we explicitly welcome. Same allow/disallow as standard
// search bots — they index public content, not the buyer dashboard.
const AI_BOTS = [
  'GPTBot',           // OpenAI / ChatGPT
  'OAI-SearchBot',    // OpenAI SearchGPT
  'ChatGPT-User',     // OpenAI on-demand fetches
  'ClaudeBot',        // Anthropic
  'Claude-Web',
  'anthropic-ai',
  'Google-Extended',  // Google Gemini / AI Overviews
  'PerplexityBot',
  'Perplexity-User',
  'Amazonbot',
  'cohere-ai',
  'DuckAssistBot',
  'Applebot-Extended',
  'YouBot',
  'Bytespider',
  'meta-externalagent',
];

const DISALLOW = ['/app', '/account', '/checkout', '/api', '/auth', '/admin'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard search bots
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      // AI / LLM crawlers (explicit allow)
      ...AI_BOTS.map((ua) => ({
        userAgent: ua,
        allow: '/',
        disallow: DISALLOW,
      })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
