import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from 'pdf-lib';
import type { FormSchema, FormField } from './schemas';

const PAGE_MARGIN = 50;
const LINE_HEIGHT = 14;
const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const TEXT_BOTTOM_MARGIN = 70;

const INK = rgb(0.08, 0.1, 0.13);
const MUTED = rgb(0.43, 0.48, 0.55);
const WARM = rgb(0.9, 0.5, 0.24);
const FAINT_BG = rgb(0.97, 0.97, 0.96);

interface DrawCtx {
  pdf: PDFDocument;
  page: PDFPage;
  font: PDFFont;
  bold: PDFFont;
  cursorY: number;
}

function ensureSpace(ctx: DrawCtx, needed: number) {
  if (ctx.cursorY - needed < TEXT_BOTTOM_MARGIN) {
    ctx.page = ctx.pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    ctx.cursorY = PAGE_HEIGHT - PAGE_MARGIN;
  }
}

function wrap(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = '';
  for (const w of words) {
    const trial = current ? `${current} ${w}` : w;
    if (font.widthOfTextAtSize(trial, size) <= maxWidth) {
      current = trial;
    } else {
      if (current) lines.push(current);
      current = w;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function drawText(ctx: DrawCtx, text: string, opts: {
  size?: number;
  font?: PDFFont;
  color?: ReturnType<typeof rgb>;
  indent?: number;
  maxWidth?: number;
  spaceBefore?: number;
  spaceAfter?: number;
} = {}) {
  const size = opts.size ?? 10;
  const font = opts.font ?? ctx.font;
  const color = opts.color ?? INK;
  const indent = opts.indent ?? 0;
  const maxWidth = opts.maxWidth ?? PAGE_WIDTH - PAGE_MARGIN * 2 - indent;
  if (opts.spaceBefore) ctx.cursorY -= opts.spaceBefore;

  const lines = wrap(text, font, size, maxWidth);
  ensureSpace(ctx, lines.length * (size + 2));
  for (const line of lines) {
    ctx.page.drawText(line, {
      x: PAGE_MARGIN + indent,
      y: ctx.cursorY,
      size,
      font,
      color,
    });
    ctx.cursorY -= size + 4;
  }
  if (opts.spaceAfter) ctx.cursorY -= opts.spaceAfter;
}

function drawHeading(ctx: DrawCtx, text: string, level: 1 | 2 | 3) {
  const sizes = { 1: 22, 2: 14, 3: 11 };
  const spaceBefore = { 1: 0, 2: 16, 3: 10 };
  drawText(ctx, text, {
    size: sizes[level],
    font: ctx.bold,
    color: INK,
    spaceBefore: spaceBefore[level],
    spaceAfter: 4,
  });
}

function drawAccentRule(ctx: DrawCtx) {
  ensureSpace(ctx, 8);
  ctx.page.drawRectangle({
    x: PAGE_MARGIN,
    y: ctx.cursorY + 2,
    width: 24,
    height: 2,
    color: WARM,
  });
  ctx.cursorY -= 8;
}

function formatValue(field: FormField, raw: unknown): string {
  if (raw === undefined || raw === null || raw === '') return '—';
  if (field.type === 'currency') {
    const n = typeof raw === 'number' ? raw : Number(String(raw).replace(/[^0-9.-]/g, ''));
    if (Number.isFinite(n)) {
      return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(n);
    }
  }
  if (field.type === 'select' && field.options) {
    const match = field.options.find((o) => o.value === String(raw));
    return match?.label ?? String(raw);
  }
  if (field.type === 'date') {
    const d = new Date(String(raw));
    if (!Number.isNaN(d.getTime())) {
      return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
    }
  }
  return String(raw);
}

interface GenerateOptions {
  schema: FormSchema;
  data: Record<string, unknown>;
  userEmail?: string | null;
}

/**
 * Generate a WarmerCoast-formatted brief PDF for a given form schema + user
 * data. The output is a clean, well-typeset summary of every input the user
 * provided, ready to attach to the official filing or keep as a record.
 *
 * We intentionally do NOT reproduce official PDFs - keeps us out of any
 * trademark / template-replication grey zone. Authorities expect their own
 * forms; we provide the structured data brief.
 */
export async function generateBriefPdf({
  schema,
  data,
  userEmail,
}: GenerateOptions): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  pdf.setTitle(schema.pdfTitle);
  pdf.setAuthor('WarmerCoast');
  pdf.setProducer('WarmerCoast pdf-lib generator');
  pdf.setSubject(schema.title);
  pdf.setCreationDate(new Date());

  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

  const page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  const ctx: DrawCtx = {
    pdf,
    page,
    font,
    bold,
    cursorY: PAGE_HEIGHT - PAGE_MARGIN,
  };

  // Cover band
  page.drawRectangle({
    x: 0,
    y: PAGE_HEIGHT - 130,
    width: PAGE_WIDTH,
    height: 130,
    color: FAINT_BG,
  });
  page.drawText('WarmerCoast', {
    x: PAGE_MARGIN,
    y: PAGE_HEIGHT - 60,
    size: 10,
    font: bold,
    color: WARM,
  });
  page.drawText(schema.pdfTitle, {
    x: PAGE_MARGIN,
    y: PAGE_HEIGHT - 90,
    size: 22,
    font: bold,
    color: INK,
  });
  page.drawText(
    `Generated ${new Date().toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}${userEmail ? ` · for ${userEmail}` : ''}`,
    {
      x: PAGE_MARGIN,
      y: PAGE_HEIGHT - 110,
      size: 9,
      font,
      color: MUTED,
    },
  );

  ctx.cursorY = PAGE_HEIGHT - 160;

  // Intro
  drawText(ctx, schema.intro, { size: 10, color: MUTED, spaceAfter: 14 });

  // Sections
  for (const section of schema.sections) {
    drawAccentRule(ctx);
    drawHeading(ctx, section.title, 2);
    if (section.description) {
      drawText(ctx, section.description, { size: 9, color: MUTED, spaceAfter: 6 });
    }
    for (const field of section.fields) {
      const value = formatValue(field, data[field.id]);
      ensureSpace(ctx, LINE_HEIGHT * 3);
      drawText(ctx, field.label.toUpperCase(), {
        size: 7,
        font: bold,
        color: MUTED,
        spaceBefore: 6,
      });
      drawText(ctx, value, { size: 11, color: INK });
    }
  }

  // Next steps
  drawAccentRule(ctx);
  drawHeading(ctx, 'What to do next', 2);
  for (const step of schema.nextSteps) {
    ensureSpace(ctx, LINE_HEIGHT * 2);
    drawText(ctx, `•  ${step}`, { size: 10, indent: 6, spaceAfter: 2 });
  }

  // Footer on every page
  const pages = pdf.getPages();
  for (let i = 0; i < pages.length; i++) {
    const p = pages[i];
    p.drawText('warmercoast.com', {
      x: PAGE_MARGIN,
      y: 30,
      size: 8,
      font,
      color: MUTED,
    });
    p.drawText(`Page ${i + 1} of ${pages.length}`, {
      x: PAGE_WIDTH - PAGE_MARGIN - 60,
      y: 30,
      size: 8,
      font,
      color: MUTED,
    });
    p.drawText('Informational brief - not legal or regulated tax advice', {
      x: PAGE_MARGIN,
      y: 18,
      size: 7,
      font,
      color: MUTED,
    });
  }

  return pdf.save();
}
