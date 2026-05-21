import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Gibraltar Frontier Worker Guide 2026 | EU Treaty, Tax, Schengen Border',
  description:
    'How to live in Spain and work in Gibraltar as a UK citizen in 2026. The UK-EU treaty from 15 July 2026, EES exemption at the land border, tax residency, social security A1 certificate, where to live.',
  alternates: { canonical: '/gibraltar/frontier-worker' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="gibraltar"
      subPillarSlug="frontier-worker"
      eyebrow="Frontier worker · 2026"
      h1="Frontier worker: living in Spain, working in Gibraltar"
      intro="On 15 July 2026 the UK-EU treaty on Gibraltar applies provisionally, transforming what it means to be a frontier worker. The physical border with Spain comes down, the EU Entry/Exit System does not apply to land crossings, and the queue times that defined post-Brexit commutes effectively disappear. Tax residency, social security coordination, and day counting still matter, but the practical mechanics get dramatically easier."
      bullets={[
        '15 July 2026: provisional application of the UK-EU treaty removes physical border, fence at La Línea comes down',
        'EES (Entry/Exit System) does NOT apply at the Spain-Gibraltar land frontier',
        'Schengen rules apply at Gibraltar port and airport (not the land border with Spain)',
        'Spanish 183-day tax residency trigger still applies — day-counting log is essential',
        'A1 social security certificate prevents double-contribution to UK/Gibraltar AND Spanish systems',
        'Most cost-effective frontier locations: La Línea (cheapest), Sotogrande (premium) or Algeciras',
      ]}
      sections={[
        {
          id: 'eu-treaty-impact',
          title: 'What the UK-EU treaty actually changes for frontier workers',
          glance: {
            value: '15 July 2026',
            label: 'Provisional application of the UK-EU Gibraltar treaty',
            note: 'No physical border with Spain · EES does not apply at land frontier',
          },
          body: (
            <>
              <p>
                On 1 April 2026 the Committee of Permanent Representatives in the EU Council
                greenlit the long-negotiated treaty between the UK and the EU on Gibraltar. The
                agreement applies provisionally from 15 July 2026. For the 15,000-plus workers
                who cross the border every day, this is the most significant change to daily
                life since Brexit.
              </p>
              <p>
                The physical land border comes down. The fence at La Línea is removed. Schengen
                external border checks no longer happen at the Spain-Gibraltar crossing — they
                happen at Gibraltar&apos;s port and airport instead. The EU Entry/Exit System
                (EES), which would have required biometric registration and 90/180-day day
                counting at the land border, does <strong>not</strong> apply to the frontier.
              </p>
              <p>
                For UK citizens currently working from Gibraltar while living in La Línea or
                Sotogrande, summer-peak crossings that used to take 40 minutes drop to under 5.
                Frontier-worker status is formally recognised, social security coordination
                continues under the existing UK-EU Trade and Cooperation Agreement framework,
                and the Spanish-side tax residency analysis remains unchanged. The convenience
                win is massive. The legal complexity stays roughly the same.
              </p>
            </>
          ),
        },
        {
          id: 'tax-residency',
          title: 'Spanish tax residency: still the biggest risk',
          body: (
            <>
              <p>
                Spanish tax residency triggers when you spend more than 183 days in Spain in a
                calendar year (arrival and departure days both count) OR when your centre of
                economic interests is in Spain. The treaty does not change either test.
              </p>
              <p>
                For frontier workers who sleep in Spain and work in Gibraltar, the day count is
                effectively automatic — you are physically in Spain most nights. Most frontier
                workers therefore become Spanish tax residents and pay Spanish IRPF on worldwide
                income, while remaining UK or Gibraltar tax residents for source-country
                purposes. The UK-Spain double tax treaty resolves overlaps but the practical
                filing burden falls in Spain.
              </p>
              <p>
                The exception is workers who structure deliberately to remain UK or Gibraltar
                tax resident: short-term assignments under 183 days per year, properties in both
                countries with documented centre of vital interests in Gibraltar, or formal
                posting arrangements. These need careful structuring and are the territory of a
                qualified asesor fiscal or Gibraltar-licensed adviser, not a blog post.
              </p>
            </>
          ),
        },
        {
          id: 'social-security',
          title: 'Social security: the A1 certificate is non-optional',
          body: (
            <>
              <p>
                Under the UK-EU TCA you contribute to ONE social security system, not both. The
                A1 certificate (issued by HMRC for UK-employer workers, or by the Gibraltar
                Income Tax Office for Gibraltar-employer workers) certifies which system you
                contribute to. Without it, Spain can demand contributions in addition to the
                contributions already being paid in the UK or Gibraltar.
              </p>
              <p>
                The A1 is typically valid for up to 24 months and is renewable. It must be
                obtained before you start cross-border work, not afterwards. Spanish authorities
                have stepped up enforcement since 2023 and frontier workers without an A1 have
                been hit with back-contributions plus penalties going several years deep.
              </p>
            </>
          ),
        },
        {
          id: 'where-to-live',
          title: 'La Línea, Sotogrande, or Algeciras: where to live',
          body: (
            <>
              <p>The three main frontier-worker locations have different trade-offs:</p>
              <ul>
                <li>
                  <strong>La Línea de la Concepción</strong>: walking distance to the Gibraltar
                  border. Cheapest of the three. Rougher around the edges, recently improving.
                  Smallest commute, biggest reliance on the border being open.
                </li>
                <li>
                  <strong>Sotogrande</strong>: 20-minute drive. Premium expat community, golf,
                  international school. Most expensive housing. Most common choice for higher
                  earners on HEPSS or remote tech.
                </li>
                <li>
                  <strong>Algeciras</strong>: 30-minute drive. Working Spanish port city,
                  significantly cheaper than Sotogrande, better infrastructure than La Línea.
                  Underrated middle option.
                </li>
              </ul>
              <p>
                The treaty improves all three but disproportionately benefits La Línea, where
                the border-crossing time was historically the worst.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'House of Commons Library — UK-EU Agreement on Gibraltar (CBP-10572)', href: 'https://commonslibrary.parliament.uk/research-briefings/cbp-10572/' },
        { label: 'EU Council press release, 1 April 2026', href: 'https://www.consilium.europa.eu/en/press/press-releases/2026/04/01/eu-uk-relations-member-states-greenlight-eu-uk-deal-on-gibraltar/' },
        { label: 'HM Government of Gibraltar — Treaty text published', href: 'https://www.gbc.gi/news/treaty-text-published' },
        { label: 'gov.uk — Social Security A1 Certificate guidance', href: 'https://www.gov.uk/guidance/employees-working-in-the-eu-eea-or-switzerland' },
      ]}
      faqs={[
        { q: 'Do I need to apply for anything before 15 July 2026?', a: 'No new application is required for existing frontier workers. The treaty operates at border-control level. You continue to use your existing Gibraltar work or residence permit. If you do not already hold either, the underlying requirements are unchanged by the treaty.' },
        { q: 'Will EES apply at all for Gibraltar residents?', a: 'EES does not apply to Gibraltar residents at the land border with Spain. EES may apply at Gibraltar\'s port and airport under the Schengen rules that take effect there. The practical impact for daily frontier workers is minimal.' },
        { q: 'Do I become Spanish tax resident if I work in Gibraltar but live in Spain?', a: 'Almost always yes. Sleeping in Spain most nights means you will exceed the 183-day threshold and become Spanish tax resident. You then file IRPF in Spain on worldwide income. The UK-Spain double tax treaty prevents double taxation on UK-source income.' },
        { q: 'Can I keep my UK ISA?', a: 'You can keep the account, but Spain does not recognise the ISA wrapper. Income and gains inside the ISA become Spanish-taxable from the date you become Spanish resident. Most movers wind down ISAs before the crossover.' },
      ]}
    />
  );
}
