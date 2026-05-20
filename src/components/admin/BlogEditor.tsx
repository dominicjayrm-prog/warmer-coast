'use client';

import { useEditor, EditorContent, type Editor } from '@tiptap/react';
import { BubbleMenu } from '@tiptap/react/menus';
import StarterKit from '@tiptap/starter-kit';
import ImageExt from '@tiptap/extension-image';
import LinkExt from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { useCallback, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

interface Props {
  initialContent?: string;
  onChange: (html: string) => void;
}

export function BlogEditor({ initialContent = '', onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // H1 reserved for the post title (rendered by the page).
        // Body content uses H2/H3/H4 only - prevents duplicate H1 SEO penalty.
        heading: { levels: [2, 3, 4] },
        codeBlock: { HTMLAttributes: { class: 'rounded-card bg-surface p-4 text-sm' } },
        blockquote: { HTMLAttributes: { class: 'border-l-4 border-warm pl-4 italic text-muted' } },
      }),
      Underline,
      LinkExt.configure({
        openOnClick: false,
        HTMLAttributes: { class: 'text-warm underline underline-offset-2' },
      }),
      ImageExt.configure({
        HTMLAttributes: { class: 'rounded-card my-4 max-w-full' },
        inline: false,
      }),
      Placeholder.configure({
        placeholder: 'Start writing. Type / for blocks.',
      }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: initialContent,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'prose prose-base max-w-none focus:outline-none min-h-[480px] text-ink prose-headings:display prose-headings:tracking-tight prose-headings:text-ink prose-a:text-warm prose-img:rounded-card',
      },
    },
  });

  if (!editor) {
    return (
      <div className="rounded-card border border-border bg-white p-6 text-sm text-muted">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="rounded-card border border-border bg-white">
      <Toolbar editor={editor} />
      <div className="px-6 py-5">
        <BubbleMenu editor={editor} className="z-50">
          <InlineMenu editor={editor} />
        </BubbleMenu>
        <EditorContent editor={editor} />
      </div>
      <BlockHelp />
    </div>
  );
}

function Toolbar({ editor }: { editor: Editor }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const insertImage = useCallback(
    async (file: File) => {
      setUploading(true);
      try {
        const fd = new FormData();
        fd.append('file', file);
        const res = await fetch('/api/admin/upload-image', { method: 'POST', body: fd });
        const data = await res.json();
        if (!res.ok || !data.url) {
          alert(data?.error ?? 'Upload failed');
          return;
        }
        const alt = prompt('Alt text for screen readers and SEO (describe the image):') ?? '';
        editor.chain().focus().setImage({ src: data.url, alt }).run();
      } finally {
        setUploading(false);
      }
    },
    [editor],
  );

  const setLink = useCallback(() => {
    const prev = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('URL', prev ?? 'https://');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  return (
    <div className="sticky top-14 z-10 flex flex-wrap items-center gap-1 border-b border-border bg-white px-3 py-2">
      <Group>
        <Btn label="H2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Section heading" />
        <Btn label="H3" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Sub-heading" />
        <Btn label="H4" onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} active={editor.isActive('heading', { level: 4 })} title="Minor heading" />
        <Btn label="¶" onClick={() => editor.chain().focus().setParagraph().run()} active={editor.isActive('paragraph')} title="Paragraph" />
      </Group>

      <Sep />

      <Group>
        <Btn label="B" onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Bold" bold />
        <Btn label="I" onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italic" italic />
        <Btn label="U" onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} title="Underline" underline />
        <Btn label="S" onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive('strike')} title="Strikethrough" strike />
        <Btn label="</>" onClick={() => editor.chain().focus().toggleCode().run()} active={editor.isActive('code')} title="Inline code" />
      </Group>

      <Sep />

      <Group>
        <Btn label="• List" onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} />
        <Btn label="1. List" onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} />
        <Btn label='"Quote"' onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} />
        <Btn label="Code block" onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive('codeBlock')} />
        <Btn label="HR" onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal rule" />
      </Group>

      <Sep />

      <Group>
        <Btn label="← Align" onClick={() => editor.chain().focus().setTextAlign('left').run()} active={editor.isActive({ textAlign: 'left' })} />
        <Btn label="Center" onClick={() => editor.chain().focus().setTextAlign('center').run()} active={editor.isActive({ textAlign: 'center' })} />
        <Btn label="Align →" onClick={() => editor.chain().focus().setTextAlign('right').run()} active={editor.isActive({ textAlign: 'right' })} />
      </Group>

      <Sep />

      <Group>
        <Btn label="🔗 Link" onClick={setLink} active={editor.isActive('link')} />
        <Btn
          label={uploading ? 'Uploading...' : '🖼 Image'}
          onClick={() => fileRef.current?.click()}
        />
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) insertImage(f);
            e.target.value = '';
          }}
        />
      </Group>

      <Sep />

      <Group>
        <Btn label="Undo" onClick={() => editor.chain().focus().undo().run()} />
        <Btn label="Redo" onClick={() => editor.chain().focus().redo().run()} />
      </Group>
    </div>
  );
}

function InlineMenu({ editor }: { editor: Editor }) {
  return (
    <div className="flex items-center gap-1 rounded-pill border border-border bg-white px-1.5 py-1 shadow-elevated">
      <Btn label="B" onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} bold compact />
      <Btn label="I" onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} italic compact />
      <Btn label="U" onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} underline compact />
      <Btn label="H2" onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} compact />
      <Btn label="H3" onClick={() => editor.chain().focus().setHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} compact />
      <Btn label="🔗" onClick={() => {
        const url = window.prompt('URL') ?? '';
        if (url) editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
      }} compact />
    </div>
  );
}

function Group({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-0.5">{children}</div>;
}

function Sep() {
  return <span className="mx-1 inline-block h-5 w-px bg-border" aria-hidden />;
}

function Btn({
  label,
  onClick,
  active,
  title,
  bold,
  italic,
  underline,
  strike,
  compact,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
  title?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title ?? label}
      className={cn(
        'rounded-md transition-colors',
        compact ? 'h-7 px-2 text-xs' : 'h-8 px-2.5 text-[13px]',
        bold && 'font-bold',
        italic && 'italic',
        underline && 'underline underline-offset-2',
        strike && 'line-through',
        active ? 'bg-ink text-white' : 'text-muted hover:bg-surface hover:text-ink',
      )}
    >
      {label}
    </button>
  );
}

function BlockHelp() {
  return (
    <div className="border-t border-border bg-surface px-4 py-2 text-[11px] text-faint">
      <strong className="text-muted">Tip:</strong> select text to see the floating menu. Use the
      toolbar to add headings, images (with alt text prompt), links, lists, quotes, code blocks.
    </div>
  );
}
