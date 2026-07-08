import type { Country } from '@/lib/site';
import { spainModules } from '@/lib/playbook-content/spain';
import { portugalModules } from '@/lib/playbook-content/portugal';
import { gibraltarModules } from '@/lib/playbook-content/gibraltar';

export interface ChecklistItem {
  id: string;
  label: string;
  detail?: string;
  deadline?: string;
}

export interface PlaybookModule {
  n: number;
  slug: string;
  title: string;
  duration: string;
  summary: string;
  sections: { title: string; body: string }[];
  checklist: ChecklistItem[];
}

/**
 * Full module content lives in src/lib/playbook-content/{spain,portugal,gibraltar}.ts.
 * This file keeps the stable import surface (types + PLAYBOOK_MODULES + getModule)
 * that modules-db.ts, the app pages and the seed script all rely on.
 *
 * Note: the DB (wc_modules) overrides this content when rows exist — after editing
 * here, re-run scripts/generate-modules-seed.mjs and apply the seed, or clear the
 * DB rows so the code fallback serves.
 */
export const PLAYBOOK_MODULES: Record<Country, PlaybookModule[]> = {
  spain: spainModules,
  portugal: portugalModules,
  gibraltar: gibraltarModules,
};

export function getModule(country: Country, slug: string): PlaybookModule | undefined {
  return PLAYBOOK_MODULES[country].find((m) => m.slug === slug);
}
