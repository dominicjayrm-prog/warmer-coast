import { createClient, createServiceClient } from '@/lib/supabase/server';
import type { Country } from '@/lib/site';
import { PLAYBOOK_MODULES, type PlaybookModule } from '@/lib/playbook-modules';

export interface DbModule {
  id: string;
  country: Country;
  slug: string;
  module_number: number;
  title: string;
  summary: string;
  duration: string;
  published: boolean;
  updated_at: string;
}

export interface DbModuleSection {
  id: string;
  module_id: string;
  position: number;
  title: string;
  body_html: string;
}

export interface DbModuleChecklist {
  id: string;
  module_id: string;
  position: number;
  item_id: string;
  label: string;
  detail: string | null;
  deadline: string | null;
}

/**
 * Single source of truth for modules. Reads from Supabase (wc_modules).
 * Falls back to the hardcoded `PLAYBOOK_MODULES` so the buyer dashboard
 * keeps working even if Supabase is briefly unavailable.
 */
export async function listModules(country: Country): Promise<PlaybookModule[]> {
  try {
    const supabase = createClient();
    const { data: modules } = await supabase
      .from('wc_modules')
      .select('id,slug,module_number,title,summary,duration,published')
      .eq('country', country)
      .eq('published', true)
      .order('module_number', { ascending: true });

    if (!modules || modules.length === 0) return PLAYBOOK_MODULES[country];

    const ids = modules.map((m: { id: string }) => m.id);
    const [sectionsRes, checklistRes] = await Promise.all([
      supabase
        .from('wc_module_sections')
        .select('module_id,position,title,body_html')
        .in('module_id', ids)
        .order('position', { ascending: true }),
      supabase
        .from('wc_module_checklist')
        .select('module_id,position,item_id,label,detail,deadline')
        .in('module_id', ids)
        .order('position', { ascending: true }),
    ]);

    const sectionsByModule = new Map<string, DbModuleSection[]>();
    ((sectionsRes.data as DbModuleSection[] | null) ?? []).forEach((s) => {
      const arr = sectionsByModule.get(s.module_id) ?? [];
      arr.push(s);
      sectionsByModule.set(s.module_id, arr);
    });

    const checklistByModule = new Map<string, DbModuleChecklist[]>();
    ((checklistRes.data as DbModuleChecklist[] | null) ?? []).forEach((c) => {
      const arr = checklistByModule.get(c.module_id) ?? [];
      arr.push(c);
      checklistByModule.set(c.module_id, arr);
    });

    return modules.map(
      (m: { id: string; slug: string; module_number: number; title: string; summary: string; duration: string }) => {
        const sections = (sectionsByModule.get(m.id) ?? []).map((s) => ({
          title: s.title,
          body: s.body_html,
        }));
        const checklist = (checklistByModule.get(m.id) ?? []).map((c) => ({
          id: c.item_id,
          label: c.label,
          detail: c.detail ?? undefined,
          deadline: c.deadline ?? undefined,
        }));
        return {
          n: m.module_number,
          slug: m.slug,
          title: m.title,
          duration: m.duration,
          summary: m.summary,
          sections,
          checklist,
        };
      },
    );
  } catch (e) {
    console.error('listModules fallback to code', e);
    return PLAYBOOK_MODULES[country];
  }
}

export async function getModuleBySlug(
  country: Country,
  slug: string,
): Promise<PlaybookModule | null> {
  const all = await listModules(country);
  return all.find((m) => m.slug === slug) ?? null;
}

/**
 * Admin variant. Returns ALL modules (including drafts) via service role.
 * Also returns the row id which the admin UI needs for editing.
 */
export interface AdminModuleRow {
  id: string;
  country: Country;
  slug: string;
  module_number: number;
  title: string;
  summary: string;
  duration: string;
  published: boolean;
  updated_at: string;
}

export async function listModulesForAdmin(): Promise<AdminModuleRow[]> {
  try {
    const supabase = createServiceClient();
    const { data } = await supabase
      .from('wc_modules')
      .select('id,country,slug,module_number,title,summary,duration,published,updated_at')
      .order('country', { ascending: true })
      .order('module_number', { ascending: true });
    return (data as AdminModuleRow[] | null) ?? [];
  } catch {
    return [];
  }
}

export interface AdminModuleDetail {
  module: AdminModuleRow;
  sections: DbModuleSection[];
  checklist: DbModuleChecklist[];
}

export async function getModuleForAdmin(id: string): Promise<AdminModuleDetail | null> {
  try {
    const supabase = createServiceClient();
    const [modRes, secRes, chkRes] = await Promise.all([
      supabase
        .from('wc_modules')
        .select('id,country,slug,module_number,title,summary,duration,published,updated_at')
        .eq('id', id)
        .maybeSingle(),
      supabase
        .from('wc_module_sections')
        .select('id,module_id,position,title,body_html')
        .eq('module_id', id)
        .order('position', { ascending: true }),
      supabase
        .from('wc_module_checklist')
        .select('id,module_id,position,item_id,label,detail,deadline')
        .eq('module_id', id)
        .order('position', { ascending: true }),
    ]);
    if (!modRes.data) return null;
    return {
      module: modRes.data as AdminModuleRow,
      sections: (secRes.data as DbModuleSection[] | null) ?? [],
      checklist: (chkRes.data as DbModuleChecklist[] | null) ?? [],
    };
  } catch {
    return null;
  }
}
