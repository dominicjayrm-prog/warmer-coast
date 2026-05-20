// Reads src/lib/playbook-modules.ts (via a transpiled import) and prints
// SQL INSERT statements to stdout to seed the wc_modules tables.
// Run: node scripts/generate-modules-seed.mjs > /tmp/modules-seed.sql

import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

// Use tsx-style register so we can import the .ts file directly.
// Falls back to a manual JSON dump if tsx isn't available.

const sqlEscape = (s) => "'" + String(s).replace(/'/g, "''") + "'";
const sqlBool = (b) => (b ? 'true' : 'false');
const sqlNull = (v) => (v == null || v === '' ? 'null' : sqlEscape(v));

// Inline the module data (mirrors what's in src/lib/playbook-modules.ts).
// We deliberately keep this script self-contained so it can run without
// a TS build step.

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const src = readFileSync(resolve('src/lib/playbook-modules.ts'), 'utf8');

// Extract the three module arrays by name. We use eval inside a sandbox of
// a tiny TS-like context.
function extractArray(name) {
  const re = new RegExp(`const ${name}: PlaybookModule\\[\\] = (\\[[\\s\\S]*?\\n\\];)`, 'm');
  const m = src.match(re);
  if (!m) throw new Error(`Could not extract ${name}`);
  // Strip the trailing semicolon and run through Function so we get the JS array.
  const code = m[1].replace(/;$/, '');
  // eslint-disable-next-line no-new-func
  return new Function('return ' + code)();
}

const data = {
  spain: extractArray('spain'),
  portugal: extractArray('portugal'),
  gibraltar: extractArray('gibraltar'),
};

const lines = [];
lines.push('-- Seed WarmerCoast modules from src/lib/playbook-modules.ts');
lines.push('-- Run via Supabase SQL editor or `psql`. Idempotent: deletes by (country, slug) first.');
lines.push('');

for (const [country, modules] of Object.entries(data)) {
  for (const mod of modules) {
    // Delete-then-insert for idempotence.
    lines.push(`-- ${country}/${mod.slug}`);
    lines.push(
      `delete from public.wc_modules where country = ${sqlEscape(country)} and slug = ${sqlEscape(mod.slug)};`,
    );
    lines.push(
      `with m as (insert into public.wc_modules (country, slug, module_number, title, summary, duration, published) values (${sqlEscape(country)}, ${sqlEscape(mod.slug)}, ${mod.n}, ${sqlEscape(mod.title)}, ${sqlEscape(mod.summary)}, ${sqlEscape(mod.duration)}, true) returning id)`,
    );
    const sectionInserts = mod.sections.map(
      (s, i) =>
        `select id, ${i}, ${sqlEscape(s.title)}, ${sqlEscape(`<p>${s.body}</p>`)} from m`,
    );
    if (sectionInserts.length > 0) {
      lines.push(`, s as (insert into public.wc_module_sections (module_id, position, title, body_html) ${sectionInserts.join(' union all ')} returning module_id)`);
    }
    const checklistValues = mod.checklist.map(
      (c, i) =>
        `select m.id, ${i}, ${sqlEscape(c.id)}, ${sqlEscape(c.label)}, ${sqlNull(c.detail)}, ${sqlNull(c.deadline)} from m`,
    );
    if (checklistValues.length > 0) {
      lines.push(
        `insert into public.wc_module_checklist (module_id, position, item_id, label, detail, deadline) ${checklistValues.join(' union all ')};`,
      );
    } else {
      // Just close the CTE if no checklist
      lines.push('select 1;');
    }
    lines.push('');
  }
}

console.log(lines.join('\n'));
