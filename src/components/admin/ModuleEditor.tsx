'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BlogEditor } from '@/components/admin/BlogEditor';
import { cn } from '@/lib/cn';
import type {
  AdminModuleDetail,
  DbModuleChecklist,
  DbModuleSection,
} from '@/lib/modules-db';

type Tab = 'content' | 'checklist' | 'settings';

interface Props {
  initial: AdminModuleDetail;
}

interface SectionDraft {
  id: string;
  title: string;
  body_html: string;
}

interface ChecklistDraft {
  id: string;
  item_id: string;
  label: string;
  detail: string;
  deadline: string;
}

export function ModuleEditor({ initial }: Props) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('content');
  const [title, setTitle] = useState(initial.module.title);
  const [slug, setSlug] = useState(initial.module.slug);
  const [summary, setSummary] = useState(initial.module.summary);
  const [duration, setDuration] = useState(initial.module.duration);
  const [moduleNumber, setModuleNumber] = useState(initial.module.module_number);
  const [published, setPublished] = useState(initial.module.published);

  const [sections, setSections] = useState<SectionDraft[]>(
    initial.sections.map((s) => ({ id: s.id, title: s.title, body_html: s.body_html })),
  );
  const [checklist, setChecklist] = useState<ChecklistDraft[]>(
    initial.checklist.map((c) => ({
      id: c.id,
      item_id: c.item_id,
      label: c.label,
      detail: c.detail ?? '',
      deadline: c.deadline ?? '',
    })),
  );

  const [saving, setSaving] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);

  const markDirty = useCallback(() => setDirty(true), []);

  const save = useCallback(
    async (override?: { published?: boolean }) => {
      setSaving(true);
      setError(null);
      try {
        const payload = {
          title,
          slug,
          summary,
          duration,
          module_number: moduleNumber,
          published: override?.published ?? published,
          sections: sections.map((s, i) => ({ id: s.id, position: i, title: s.title, body_html: s.body_html })),
          checklist: checklist.map((c, i) => ({
            id: c.id,
            position: i,
            item_id: c.item_id,
            label: c.label,
            detail: c.detail || null,
            deadline: c.deadline || null,
          })),
        };
        const res = await fetch(`/api/admin/modules/${initial.module.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          const d = await res.json().catch(() => ({}));
          throw new Error(d.error ?? 'Save failed');
        }
        if (override?.published !== undefined) setPublished(override.published);
        setLastSavedAt(new Date());
        setDirty(false);
        router.refresh();
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Save failed');
      } finally {
        setSaving(false);
      }
    },
    [title, slug, summary, duration, moduleNumber, published, sections, checklist, initial.module.id, router],
  );

  // Debounced auto-save on dirty changes
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!dirty) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      save();
    }, 1500);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [dirty, save]);

  async function deleteModule() {
    if (!confirm('Delete this module? Buyer progress on its checklist will be orphaned.')) return;
    const res = await fetch(`/api/admin/modules/${initial.module.id}`, { method: 'DELETE' });
    if (res.ok) router.push('/admin/playbooks');
    else alert('Delete failed');
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      {/* Main column */}
      <div className="flex flex-col gap-4">
        {/* Header card */}
        <Card variant="bordered">
          <CardBody className="flex flex-col gap-3">
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                markDirty();
              }}
              className="display border-0 bg-transparent text-[28px] font-semibold tracking-tight text-ink outline-none"
              placeholder="Module title"
            />
            <textarea
              value={summary}
              onChange={(e) => {
                setSummary(e.target.value);
                markDirty();
              }}
              rows={2}
              placeholder="One-line summary shown in the module list"
              className="border-0 bg-transparent text-base text-muted outline-none placeholder:text-faint resize-none"
            />
          </CardBody>
        </Card>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-border">
          {(['content', 'checklist', 'settings'] as Tab[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                'px-4 py-2 text-sm font-semibold capitalize border-b-2 -mb-px transition-colors',
                tab === t ? 'border-warm text-ink' : 'border-transparent text-muted hover:text-ink',
              )}
            >
              {t}{' '}
              <span className="ml-1 text-xs text-faint">
                {t === 'content' ? `(${sections.length})` : t === 'checklist' ? `(${checklist.length})` : ''}
              </span>
            </button>
          ))}
        </div>

        {tab === 'content' && (
          <SectionsTab sections={sections} setSections={setSections} markDirty={markDirty} />
        )}
        {tab === 'checklist' && (
          <ChecklistTab checklist={checklist} setChecklist={setChecklist} markDirty={markDirty} />
        )}
        {tab === 'settings' && (
          <SettingsTab
            slug={slug}
            setSlug={(v) => {
              setSlug(v);
              markDirty();
            }}
            duration={duration}
            setDuration={(v) => {
              setDuration(v);
              markDirty();
            }}
            moduleNumber={moduleNumber}
            setModuleNumber={(v) => {
              setModuleNumber(v);
              markDirty();
            }}
            onDelete={deleteModule}
          />
        )}
      </div>

      {/* Sticky sidebar */}
      <aside className="flex flex-col gap-4 lg:sticky lg:top-32 lg:self-start">
        <Card variant="bordered">
          <CardBody className="flex flex-col gap-3">
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Status</div>
            <div className="flex items-center gap-2">
              {published ? <Badge tone="success">Published</Badge> : <Badge tone="warning">Draft</Badge>}
              {dirty && <Badge tone="neutral">Unsaved...</Badge>}
              {saving && <Badge tone="neutral">Saving...</Badge>}
              {!dirty && !saving && lastSavedAt && (
                <span className="text-[11px] text-faint">
                  Saved {lastSavedAt.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => save()}
                disabled={saving}
                className="rounded-pill border border-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-ink disabled:opacity-50"
              >
                Save now
              </button>
              <button
                type="button"
                onClick={() => save({ published: !published })}
                disabled={saving}
                className={cn(
                  'rounded-pill px-4 py-2 text-sm font-semibold text-white hover:-translate-y-px transition-all disabled:opacity-50',
                  published ? 'bg-muted' : 'bg-warm',
                )}
              >
                {published ? 'Unpublish' : 'Publish'}
              </button>
            </div>
            {error && <p className="text-xs text-gibraltar">{error}</p>}
          </CardBody>
        </Card>
        <Card variant="bordered">
          <CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Tip</div>
            <p className="mt-2 text-[12px] leading-relaxed text-muted">
              Sections and checklist items drag to reorder. Changes auto-save after a 1.5s pause.
              The checklist item-id stays stable across reorders so buyer progress is preserved.
            </p>
          </CardBody>
        </Card>
      </aside>
    </div>
  );
}

/* ---------------- Sections tab with drag-reorder ---------------- */

function SectionsTab({
  sections,
  setSections,
  markDirty,
}: {
  sections: SectionDraft[];
  setSections: (v: SectionDraft[]) => void;
  markDirty: () => void;
}) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  function onDragEnd(e: DragEndEvent) {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const oldIdx = sections.findIndex((s) => s.id === active.id);
    const newIdx = sections.findIndex((s) => s.id === over.id);
    setSections(arrayMove(sections, oldIdx, newIdx));
    markDirty();
  }

  function update(id: string, patch: Partial<SectionDraft>) {
    setSections(sections.map((s) => (s.id === id ? { ...s, ...patch } : s)));
    markDirty();
  }

  function addSection() {
    setSections([
      ...sections,
      { id: `new-${Date.now()}`, title: 'Untitled section', body_html: '<p></p>' },
    ]);
    markDirty();
  }

  function remove(id: string) {
    if (!confirm('Delete this section?')) return;
    setSections(sections.filter((s) => s.id !== id));
    markDirty();
  }

  return (
    <div className="flex flex-col gap-3">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={sections.map((s) => s.id)} strategy={verticalListSortingStrategy}>
          {sections.map((s, i) => (
            <SortableSection
              key={s.id}
              section={s}
              index={i}
              onChange={(patch) => update(s.id, patch)}
              onDelete={() => remove(s.id)}
            />
          ))}
        </SortableContext>
      </DndContext>
      <button
        type="button"
        onClick={addSection}
        className="rounded-card border-2 border-dashed border-border bg-white px-4 py-3 text-sm font-semibold text-muted hover:border-ink hover:text-ink transition-colors"
      >
        + Add section
      </button>
    </div>
  );
}

function SortableSection({
  section,
  index,
  onChange,
  onDelete,
}: {
  section: SectionDraft;
  index: number;
  onChange: (p: Partial<SectionDraft>) => void;
  onDelete: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: section.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  };
  const [open, setOpen] = useState(false);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="rounded-card border border-border bg-white"
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <button
          {...attributes}
          {...listeners}
          aria-label="Drag to reorder"
          className="cursor-grab text-faint hover:text-ink active:cursor-grabbing select-none"
        >
          ⋮⋮
        </button>
        <span className="text-xs font-semibold text-faint">{String(index + 1).padStart(2, '0')}</span>
        <input
          value={section.title}
          onChange={(e) => onChange({ title: e.target.value })}
          placeholder="Section title"
          className="flex-1 border-0 bg-transparent text-[15px] font-semibold text-ink outline-none placeholder:text-faint"
        />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-pill px-2 py-1 text-xs font-semibold text-muted hover:bg-surface hover:text-ink"
        >
          {open ? 'Collapse' : 'Edit'}
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="rounded-pill px-2 py-1 text-xs font-semibold text-gibraltar hover:bg-gibraltar/10"
        >
          Delete
        </button>
      </div>
      {open && (
        <div className="border-t border-border p-4">
          <BlogEditor
            initialContent={section.body_html}
            onChange={(html) => onChange({ body_html: html })}
          />
        </div>
      )}
    </div>
  );
}

/* ---------------- Checklist tab with drag-reorder ---------------- */

function ChecklistTab({
  checklist,
  setChecklist,
  markDirty,
}: {
  checklist: ChecklistDraft[];
  setChecklist: (v: ChecklistDraft[]) => void;
  markDirty: () => void;
}) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  function onDragEnd(e: DragEndEvent) {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const oldIdx = checklist.findIndex((c) => c.id === active.id);
    const newIdx = checklist.findIndex((c) => c.id === over.id);
    setChecklist(arrayMove(checklist, oldIdx, newIdx));
    markDirty();
  }

  function update(id: string, patch: Partial<ChecklistDraft>) {
    setChecklist(checklist.map((c) => (c.id === id ? { ...c, ...patch } : c)));
    markDirty();
  }

  function addItem() {
    const newId = `new-${Date.now()}`;
    setChecklist([
      ...checklist,
      {
        id: newId,
        item_id: `item-${Date.now()}`,
        label: 'New checklist item',
        detail: '',
        deadline: '',
      },
    ]);
    markDirty();
  }

  function remove(id: string) {
    if (!confirm('Delete this checklist item? Buyer progress on it will be lost.')) return;
    setChecklist(checklist.filter((c) => c.id !== id));
    markDirty();
  }

  return (
    <div className="flex flex-col gap-3">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={checklist.map((c) => c.id)} strategy={verticalListSortingStrategy}>
          {checklist.map((c, i) => (
            <SortableChecklistItem
              key={c.id}
              item={c}
              index={i}
              onChange={(patch) => update(c.id, patch)}
              onDelete={() => remove(c.id)}
            />
          ))}
        </SortableContext>
      </DndContext>
      <button
        type="button"
        onClick={addItem}
        className="rounded-card border-2 border-dashed border-border bg-white px-4 py-3 text-sm font-semibold text-muted hover:border-ink hover:text-ink transition-colors"
      >
        + Add checklist item
      </button>
    </div>
  );
}

function SortableChecklistItem({
  item,
  index,
  onChange,
  onDelete,
}: {
  item: ChecklistDraft;
  index: number;
  onChange: (p: Partial<ChecklistDraft>) => void;
  onDelete: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="rounded-card border border-border bg-white">
      <div className="flex items-start gap-3 p-4">
        <button
          {...attributes}
          {...listeners}
          aria-label="Drag to reorder"
          className="mt-1 cursor-grab text-faint hover:text-ink active:cursor-grabbing select-none"
        >
          ⋮⋮
        </button>
        <span className="mt-1 text-xs font-semibold text-faint">{String(index + 1).padStart(2, '0')}</span>
        <div className="flex-1 flex flex-col gap-2">
          <input
            value={item.label}
            onChange={(e) => onChange({ label: e.target.value })}
            placeholder="Checklist label (what buyer must do)"
            className="border-0 bg-transparent text-[15px] font-semibold text-ink outline-none placeholder:text-faint"
          />
          <input
            value={item.detail}
            onChange={(e) => onChange({ detail: e.target.value })}
            placeholder="Detail (optional, shown under the label)"
            className="border-0 bg-transparent text-sm text-muted outline-none placeholder:text-faint"
          />
          <div className="flex flex-wrap gap-2 text-xs">
            <input
              value={item.deadline}
              onChange={(e) => onChange({ deadline: e.target.value })}
              placeholder='Deadline (e.g. "by 30 June" or "within 90 days")'
              className="flex-1 rounded-md border border-border bg-white px-2 py-1 outline-none focus:border-warm"
            />
            <input
              value={item.item_id}
              onChange={(e) => onChange({ item_id: e.target.value.replace(/[^a-z0-9-]/gi, '-').toLowerCase() })}
              placeholder="stable-id"
              title="Stable identifier used to link buyer progress. Don't change once published."
              className="w-32 rounded-md border border-border bg-surface px-2 py-1 outline-none focus:border-warm font-mono text-faint"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onDelete}
          className="rounded-pill px-2 py-1 text-xs font-semibold text-gibraltar hover:bg-gibraltar/10"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

/* ---------------- Settings tab ---------------- */

function SettingsTab({
  slug,
  setSlug,
  duration,
  setDuration,
  moduleNumber,
  setModuleNumber,
  onDelete,
}: {
  slug: string;
  setSlug: (v: string) => void;
  duration: string;
  setDuration: (v: string) => void;
  moduleNumber: number;
  setModuleNumber: (v: number) => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Card variant="bordered">
        <CardBody className="flex flex-col gap-4">
          <Field label="URL slug">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-faint">/app/[country]/</span>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value.replace(/[^a-z0-9-]/gi, '-').toLowerCase())}
                className="flex-1 rounded-md border border-border bg-white px-3 py-1.5 outline-none focus:border-warm"
              />
            </div>
          </Field>
          <Field label="Duration estimate">
            <input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder='e.g. "90 min"'
              className="rounded-md border border-border bg-white px-3 py-1.5 text-sm outline-none focus:border-warm"
            />
          </Field>
          <Field label="Module number (order)">
            <input
              type="number"
              min={1}
              value={moduleNumber}
              onChange={(e) => setModuleNumber(Number(e.target.value))}
              className="w-32 rounded-md border border-border bg-white px-3 py-1.5 text-sm outline-none focus:border-warm"
            />
          </Field>
        </CardBody>
      </Card>
      <Card variant="bordered" className="border-gibraltar/30 bg-gibraltar/5">
        <CardBody className="flex flex-col gap-3">
          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-gibraltar">
            Danger zone
          </div>
          <p className="text-sm text-muted">
            Deleting a module also orphans any buyer checklist progress linked to it. Hide it via the
            Unpublish button if you only want to take it offline temporarily.
          </p>
          <button
            type="button"
            onClick={onDelete}
            className="self-start rounded-pill border border-gibraltar bg-white px-4 py-2 text-sm font-semibold text-gibraltar hover:bg-gibraltar hover:text-white transition-colors"
          >
            Delete module permanently
          </button>
        </CardBody>
      </Card>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}
