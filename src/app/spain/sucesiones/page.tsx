import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spain Inheritance Tax (Sucesiones) 2026 | Region-by-Region for British Heirs',
  description:
    'Spanish inheritance tax (Sucesiones y Donaciones) hits British heirs harder than UK IHT in most regions. Madrid 99% relief, Andalucía effectively 0% for spouse/children, Cataluña and Valencia punitive. State rates 7.65%-34%, before regional adjustments. The 2026 region-by-region playbook for British movers.',
  alternates: { canonical: '/spain/sucesiones' },
  openGraph: { url: '/spain/sucesiones' },
  keywords: [
    'Spain inheritance tax',
    'Sucesiones Spain',
    'ISyD Spain',
    'inheritance tax Madrid Andalucia',
    'Spanish succession tax UK heir',
    'inherit Spanish property',
    'IHT vs Sucesiones',
  ],
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      subPillarSlug="sucesiones"
      eyebrow="Inheritance tax · 2026"
      h1="Spain inheritance tax (Sucesiones) — the region-by-region reality"
      intro="Spanish inheritance tax — Impuesto sobre Sucesiones y Donaciones (ISyD) — is administered regionally and varies more dramatically than any other Spanish tax. Spouses don&apos;t inherit free of tax the way they do under UK IHT — Spain applies tax to the beneficiary, not the estate, and surviving spouses are taxed on what they receive. State rates are 7.65% to 34%; regional bonificaciones range from effectively 0% (Madrid, Andalucía, Balearics, Canarias) to virtually full tax (some scenarios in Asturias). For British movers this is one of the largest single tax surprises."
      bullets={[
        'Tax falls on the beneficiary, not the estate (unlike UK IHT)',
        'Spouses are NOT exempt — they pay like any other Group II heir',
        'State scale: 7.65% on first €7,993 → 34% above €797,555',
        'Regional bonificaciones can reduce regional share to ~0%',
        'Madrid: 99% bonificación for Groups I & II (spouse, children, parents)',
        'Andalucía: effectively 0% for Groups I & II after recent reforms',
        'Cataluña: tax-free allowance lower, no 99% rebate — most punitive',
        'Multipliers apply by relationship: 1× (Groups I & II) to 2.4× (Group IV strangers)',
      ]}
      sections={[
        {
          id: 'how-it-differs-from-uk-iht',
          title: 'How Sucesiones differs from UK Inheritance Tax',
          body: (
            <>
              <p>
                Britons coming to Spain almost universally underestimate this tax because the
                mental model from UK IHT doesn&apos;t fit. Four critical differences:
              </p>
              <ol>
                <li><strong>Tax falls on the heir, not the estate.</strong> Each beneficiary calculates their own tax bill based on what they personally receive. A £2m estate split equally between three children produces three separate small-ish bills; the same estate going wholly to one child produces one large bill.</li>
                <li><strong>Spouses are not exempt.</strong> UK IHT exempts transfers between spouses entirely. Spanish Sucesiones taxes the surviving spouse on what they inherit — Group II under the relationship scale, with regional bonificaciones determining the actual bill.</li>
                <li><strong>Lifetime gifts are taxed.</strong> Donaciones (gifts) are taxed under the same system — there&apos;s no UK-style 7-year rule. Spanish tax residents pay on gifts received from anywhere; non-residents pay on Spanish-situs gifts.</li>
                <li><strong>No nil-rate band equivalent.</strong> Allowances are by Group (relationship) and region, not a per-estate threshold. A €200k inheritance can be tax-free for a child in Andalucía but generate €15,000+ tax for the same child in Cataluña.</li>
              </ol>
            </>
          ),
        },
        {
          id: 'rate-structure',
          title: 'The state scale and the multipliers',
          glance: { value: '7.65% – 34%', label: 'State scale', note: 'Before regional and relationship multipliers' },
          body: (
            <>
              <p>
                Sucesiones runs the calculation in two steps. First, the state scale on the
                taxable base after personal allowance:
              </p>
              <ul>
                <li>Up to €7,993: 7.65%</li>
                <li>€7,993 – €15,980: 8.5%</li>
                <li>€15,980 – €23,968: 9.35%</li>
                <li>€23,968 – €31,955: 10.2%</li>
                <li>(continues progressively…)</li>
                <li>€398,778 – €797,555: 29.75%</li>
                <li>Above €797,555: 34%</li>
              </ul>
              <p>
                Then a relationship multiplier is applied. The four Groups:
              </p>
              <ul>
                <li><strong>Group I:</strong> children, grandchildren under 21 — multiplier 1.0×, large personal allowance</li>
                <li><strong>Group II:</strong> children/grandchildren 21+, spouses, parents/grandparents — multiplier 1.0×, smaller personal allowance</li>
                <li><strong>Group III:</strong> siblings, aunts/uncles, nephews/nieces, in-laws — multiplier 1.5× to 1.9× depending on pre-existing wealth</li>
                <li><strong>Group IV:</strong> all other relatives or unrelated parties — multiplier 1.9× to 2.4×</li>
              </ul>
              <p>
                After the multiplier, regional bonificaciones (rebates) apply on the resulting
                bill. This is where the regional variation explodes.
              </p>
            </>
          ),
        },
        {
          id: 'region-by-region',
          title: 'Region-by-region position for British movers',
          glance: { value: 'Madrid + Andalucía ≈ 0%', label: 'For close family', note: 'Cataluña materially punitive' },
          body: (
            <>
              <p>
                For Group I and II (spouse, children, parents) inheritances — the most common
                British case — current 2026 regional positions:
              </p>
              <ul>
                <li><strong>Madrid:</strong> 99% bonificación on the resulting tax for Groups I & II. Effectively zero in most cases.</li>
                <li><strong>Andalucía:</strong> Effectively 0% for Groups I & II after the 2023 reform raising the personal allowance to €1m per Group I/II beneficiary.</li>
                <li><strong>Balearic Islands:</strong> 100% reduction for Groups I & II inheritances — effectively zero.</li>
                <li><strong>Canary Islands:</strong> 99.9% reduction for Groups I & II — effectively zero, one of the most generous regimes.</li>
                <li><strong>Valencia:</strong> 99% bonificación for Groups I & II plus a €100,000 tax-free allowance — effectively close to zero for most family inheritances.</li>
                <li><strong>Cantabria:</strong> 100% reduction for Group I (children under 21); 100% for Group II (spouses, adult children) above certain conditions.</li>
                <li><strong>Galicia:</strong> Significant reductions for Groups I & II.</li>
                <li><strong>Murcia:</strong> 99% bonificación for Groups I & II.</li>
                <li><strong>Cataluña:</strong> No 99% rebate. Standard allowances of €100,000 for spouses/children plus age-based reductions. Tax bills on €500,000+ inheritances can reach €30,000-€80,000 for a child or spouse.</li>
                <li><strong>Asturias:</strong> Low allowances, limited bonificaciones — historically among the most punitive regions for Sucesiones.</li>
                <li><strong>Aragón, Castilla-La Mancha, Castilla y León, Extremadura, La Rioja:</strong> Various intermediate positions; mostly favourable for Groups I & II but less than Madrid/Andalucía.</li>
                <li><strong>Basque Country and Navarra:</strong> Foral regimes — own rules, generally favourable.</li>
              </ul>
              <p>
                Regional rules change frequently; the headlines above reflect 2026 positioning
                but always confirm current-year specifics with a Spanish asesor when a real
                inheritance triggers.
              </p>
            </>
          ),
        },
        {
          id: 'cross-border-britons',
          title: 'Cross-border British scenarios',
          body: (
            <>
              <p>
                The most common British scenarios that trigger Sucesiones:
              </p>
              <ol>
                <li>
                  <strong>UK parent dies, Spanish-resident child inherits.</strong> Spanish
                  resident heir pays Sucesiones on the worldwide value received. UK estate may
                  pay UK IHT on the same assets — the UK-Spain double tax treaty does not
                  cover inheritance taxes specifically, but unilateral relief (under Article 23
                  of the Spanish Sucesiones law) allows Spain to credit UK IHT paid against the
                  Spanish bill.
                </li>
                <li>
                  <strong>British couple resident in Spain, one spouse dies.</strong> The
                  surviving spouse pays Sucesiones on what they inherit. UK IHT does not apply
                  to assets passing between UK-domiciled spouses, but Spanish Sucesiones does.
                  In Madrid/Andalucía/Valencia, post-bonificación this is usually small. In
                  Cataluña or Asturias, it can be a six-figure bill.
                </li>
                <li>
                  <strong>British parent dies leaving Spanish property to UK-resident child.</strong>{' '}
                  Non-resident child pays Sucesiones on the Spanish property only, applying the
                  regional rules of where the property is located (since 2018 ECJ case
                  C-127/12). UK IHT also applies; the unilateral relief mechanism applies.
                </li>
              </ol>
              <p>
                The UK domicile question still matters for UK IHT exposure. Becoming
                Spanish-resident does not automatically change UK domicile (which has its own
                test — see HMRC&apos;s domicile guidance). HNW British movers should expect
                UK IHT to apply to UK-situs assets for a minimum of three further UK tax years
                after becoming Spanish-resident, and longer if domicile of origin remains UK.
              </p>
            </>
          ),
        },
        {
          id: 'planning',
          title: 'Practical planning moves',
          body: (
            <>
              <ul>
                <li>
                  <strong>Regional choice matters more for HNW Brits than they think.</strong>{' '}
                  A £2m estate passing to a Spanish-resident child generates ~zero Sucesiones in
                  Madrid/Andalucía/Balearics and €200k+ in Cataluña. This single tax can
                  outweigh decades of Patrimonio savings.
                </li>
                <li>
                  <strong>Lifetime gifting (Donaciones) is taxed the same.</strong> You can&apos;t
                  use UK-style 7-year survivorship to gift around Sucesiones — Donaciones is
                  the same tax on the same scale.
                </li>
                <li>
                  <strong>Spanish wills are advisable.</strong> Article 9 of the Spanish Civil
                  Code lets British nationals choose UK succession law to apply to their Spanish
                  estate (via EU regulation 650/2012, still recognised in Spain post-Brexit for
                  Britons by treaty). This affects who inherits, not how much Sucesiones is
                  charged — but a properly drafted Spanish will reduces probate friction
                  significantly.
                </li>
                <li>
                  <strong>Pension wrappers may help.</strong> Some Spanish-qualifying pension
                  structures pass to nominated beneficiaries outside Sucesiones. The cross-
                  border interaction with UK SIPP/QROPS is complex and worth specialist advice.
                </li>
                <li>
                  <strong>Insurance-based structuring</strong> (seguros de vida) is the most
                  commonly used approach by HNW Spanish residents to reduce Sucesiones exposure
                  on liquid wealth. The Spanish life insurance industry has products designed
                  specifically for this; the playbook walks through which are worth considering.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Agencia Tributaria · Impuesto sobre Sucesiones y Donaciones', href: 'https://sede.agenciatributaria.gob.es/' },
        { label: 'BOE · Ley 29/1987 ISyD', href: 'https://www.boe.es/' },
        { label: 'gov.uk · UK Inheritance Tax cross-border guidance', href: 'https://www.gov.uk/inheritance-tax' },
      ]}
      faqs={[
        {
          q: 'Do spouses really pay inheritance tax in Spain?',
          a: 'Yes. Surviving spouses are Group II beneficiaries with no automatic exemption — they pay Sucesiones on what they inherit. In Madrid, Andalucía, Balearics, Canarias and Valencia the post-bonificación bill is effectively zero. In Cataluña and Asturias, surviving spouses face real tax bills. This is one of the largest single mental-model differences from UK IHT.',
        },
        {
          q: 'Can I avoid Sucesiones by gifting before death?',
          a: 'No. Spain taxes lifetime gifts (Donaciones) under the same Sucesiones y Donaciones regime, on the same state scale, with the same regional bonificaciones. The UK-style 7-year survival rule doesn\'t exist. You cannot gift your way around Sucesiones in life and reduce inheritance.',
        },
        {
          q: 'How does UK IHT interact with Spanish Sucesiones?',
          a: 'Both taxes can apply to the same assets. UK IHT applies if the deceased was UK-domiciled (a separate test from residence) and applies to worldwide assets, with cross-border relief mechanisms. Spanish Sucesiones applies to the Spanish-resident beneficiary on what they receive (worldwide for resident beneficiaries; Spanish-situs only for non-resident beneficiaries). The Spanish system allows unilateral credit for UK IHT paid against the Spanish bill, but the two systems don\'t mesh seamlessly and double tax can arise.',
        },
        {
          q: 'When is Sucesiones due?',
          a: 'Six months from the date of death, extendable by another six months on application. Late payment triggers penalties (5%-150% depending on circumstances). Bank accounts of the deceased are typically frozen until Sucesiones is settled, so heirs need to plan cashflow.',
        },
        {
          q: 'What\'s the deal for a Briton inheriting Spanish property from a UK parent?',
          a: 'You\'re a non-resident heir inheriting Spanish-situs assets. Since the 2018 ECJ ruling (C-127/12) you can apply the regional rules of the autonomous community where the property is located. For Madrid or Andalucía property the effective tax is usually small; for Cataluña property it can be significant. UK IHT also applies; the Spanish system gives unilateral credit for UK IHT paid.',
        },
        {
          q: 'Does Beckham Law help with Sucesiones?',
          a: 'No. Beckham Law affects IRPF (income tax) only. Sucesiones is unaffected — Beckham-Law-eligible movers pay Sucesiones on the same basis as any other resident in their region.',
        },
      ]}
      reviewedOn="2026-05-25"
      relatedResources={[
        { kind: 'Deep dive', href: '/spain/patrimonio', label: 'Spain Patrimonio (wealth tax)', blurb: 'The other major Spanish HNW tax — regional choice matters here too.' },
        { kind: 'Deep dive', href: '/spain/solidaridad', label: 'Solidaridad surcharge above €3m', blurb: 'How the national surcharge stacks with regional Patrimonio.' },
        { kind: 'Deep dive', href: '/spain/tax-residency', label: 'Spain tax residency for British movers', blurb: 'The Spanish residence trigger that brings worldwide Sucesiones into play.' },
        { kind: 'Compare', href: '/spain-vs-portugal', label: 'Spain vs Portugal compared', blurb: 'Portugal has no Sucesiones equivalent on close family — a real planning factor.' },
        { kind: 'Reference', href: '/thresholds', label: '2026 thresholds for British movers', blurb: 'All Spanish thresholds in one sourced reference.' },
        { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Regional choice modelling including Sucesiones impact on dynastic planning.' },
      ]}
    />
  );
}
