'use client';

import { SimpleCalculator } from '@/components/calculators/SimpleCalculator';
import { formatGBP } from '@/lib/tax';

export function PropertyTaxCalc() {
  return (
    <SimpleCalculator
      inputs={[
        { id: 'price', label: 'Property price (£)', type: 'slider', min: 100_000, max: 2_000_000, step: 10_000, format: (n) => formatGBP(n) },
        {
          id: 'country',
          label: 'Country',
          type: 'select',
          options: [
            { value: 'spain-resale', label: 'Spain · resale (ITP applies)' },
            { value: 'spain-new', label: 'Spain · new build (IVA + AJD)' },
            { value: 'portugal', label: 'Portugal (IMT + stamp)' },
            { value: 'gibraltar', label: 'Gibraltar (stamp duty)' },
          ],
        },
      ]}
      initialValues={{ price: 350_000, country: 'spain-resale' }}
      compute={(v) => {
        const price = Number(v.price);
        const country = String(v.country);
        let purchase = 0;
        let purchaseLabel = '';
        let annual = 0;
        if (country === 'spain-resale') {
          purchase = price * 0.08;
          purchaseLabel = 'ITP (8% average)';
          annual = price * 0.005;
        } else if (country === 'spain-new') {
          purchase = price * 0.105;
          purchaseLabel = 'IVA 10% + AJD 0.5%';
          annual = price * 0.005;
        } else if (country === 'portugal') {
          purchase = price * 0.075;
          purchaseLabel = 'IMT + stamp (~7.5% blended)';
          annual = price * 0.004;
        } else {
          purchase = price * 0.03;
          purchaseLabel = 'Gibraltar stamp duty (~3%)';
          annual = price * 0.002;
        }
        const legal = Math.min(price * 0.012, 8000);
        const totalOneOff = purchase + legal;
        return [
          { label: purchaseLabel, value: formatGBP(Math.round(purchase)), accent: '#9C3848' },
          { label: 'Notary & legal (est)', value: formatGBP(Math.round(legal)) },
          { label: 'Total one-off', value: formatGBP(Math.round(totalOneOff)), accent: '#0F1827' },
          { label: 'Annual property tax (est)', value: formatGBP(Math.round(annual)), accent: '#E67E3C' },
        ];
      }}
      notes={[
        'Spanish ITP varies by region (6% Madrid, 10% Cataluña, 8% Andalucía typical)',
        'Portugal IMT brackets are progressive, capped above ~€1m',
        'Annual figures approximate and depend on cadastral value',
      ]}
      sources={[
        { label: 'Agencia Tributaria · ITP', href: 'https://sede.agenciatributaria.gob.es/' },
        { label: 'Portal das Finanças · IMT/IMI', href: 'https://www.portaldasfinancas.gov.pt/' },
      ]}
    />
  );
}
