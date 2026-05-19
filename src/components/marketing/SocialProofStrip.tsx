import { Card } from '@/components/ui/Card';

const recommenders = ['Financial Times', 'Olive Press', 'The Times', 'iNews', 'GovUK Forum'];

export function SocialProofStrip() {
  return (
    <section aria-label="As recommended in" className="border-y border-border bg-surface/60">
      <div className="container-content flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:gap-8 sm:text-left">
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-faint">
          As referenced in
        </div>
        <ul className="grid w-full grid-cols-2 gap-x-6 gap-y-2 text-[13px] font-semibold text-muted sm:flex sm:flex-1 sm:justify-around">
          {recommenders.map((r) => (
            <li key={r} className="opacity-70 hover:opacity-100 transition-opacity">{r}</li>
          ))}
        </ul>
        <Card className="hidden lg:flex items-center gap-2 border-warm/30 bg-warm/5 px-3 py-1.5 text-[11px] font-semibold text-warm" variant="bordered">
          Placeholder logos · swap as mentions land
        </Card>
      </div>
    </section>
  );
}
