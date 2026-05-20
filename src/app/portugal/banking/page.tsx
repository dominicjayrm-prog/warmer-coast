import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portuguese banking for Brits | NIF, Millennium, ActivoBank, Wise',
  description: 'Opening a Portuguese bank account as a UK national. NIF first, then bank choice. Millennium BCP, ActivoBank, multi-currency strategies.',
  alternates: { canonical: '/portugal/banking' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      eyebrow="Banking"
      h1="Portuguese banking for British movers"
      intro="NIF (Portuguese tax number) is the first requirement. Then bank choice depends on whether you need branch access or are happy with app-only."
      bullets={[
        'NIF: obtainable before arrival via fiscal representative',
        'Millennium BCP, Novobanco, BPI: traditional with branches',
        'ActivoBank: app-only, popular with newer expats',
        'Wise and Revolut for UK transfers and multi-currency holding',
      ]}
    />
  );
}
