interface Props {
  date: string;
  by?: string;
  note?: string;
}

const REVIEWER_DEFAULT = 'Dominic Roworth';

export function ReviewedBy({ date, by = REVIEWER_DEFAULT, note }: Props) {
  const d = new Date(date);
  const display = d.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <div className="my-6 flex flex-col gap-1 rounded-card border border-border bg-surface/60 px-4 py-3 text-[13px] text-muted">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <span className="font-semibold text-ink">Last reviewed {display}</span>
        <span aria-hidden>·</span>
        <span>by {by}</span>
      </div>
      {note && <div className="text-[12.5px] text-muted/90">{note}</div>}
    </div>
  );
}
