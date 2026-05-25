import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SubPillarTemplate, type SubPillarSection, type SpokeLink } from '@/components/marketing/SubPillarTemplate';

interface Spoke {
  eyebrow: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  bullets: string[];
  sections: SubPillarSection[];
  sources: { label: string; href: string }[];
  faqs: { q: string; a: string }[];
}

const allSpokeLinks: Record<string, SpokeLink> = {
  '183-day-rule': {
    href: '/spain/tax-residency/183-day-rule',
    label: 'The 183-day rule',
    excerpt: 'The day-count test plus the centre-of-vital-interests trap most Brits miss.',
  },
  'beckham-law': {
    href: '/spain/tax-residency/beckham-law',
    label: 'Beckham Law mechanics',
    excerpt: '24% flat tax for 6 years. The most valuable structuring decision.',
  },
  'modelo-720': {
    href: '/spain/tax-residency/modelo-720',
    label: 'Modelo 720 foreign-asset declaration',
    excerpt: '€50k thresholds, post-ECJ penalties, what to actually file.',
  },
  'uk-pensions': {
    href: '/spain/tax-residency/uk-pensions',
    label: 'UK pensions in Spain',
    excerpt: 'Article 17 treaty rules. Government vs private pension treatment.',
  },
  'cgt-on-uk-property': {
    href: '/spain/tax-residency/cgt-on-uk-property',
    label: 'CGT on UK property',
    excerpt: 'The most expensive year-one mistake British movers make.',
  },
  'isa-treatment': {
    href: '/spain/tax-residency/isa-treatment',
    label: 'UK ISA treatment',
    excerpt: 'ISAs do not exist in Spanish tax law. What to do before you move.',
  },
};

const spokes: Record<string, Spoke> = {
  '183-day-rule': {
    eyebrow: 'Spain · 183-day rule',
    h1: 'The Spain 183-day tax residency rule, properly explained for 2026',
    intro:
      'The day-count trigger most British movers focus on. Important, but not the only test, and easier to misread than people realise. This is the rule that catches Brits who think a long UK summer protects them. It does not.',
    metaTitle: 'Spain 183-Day Rule 2026: Tax Residency Properly Explained',
    metaDescription:
      'How the Spain 183-day tax residency rule works in 2026: counting, sporadic absences, the centre-of-vital-interests trap, planning around it.',
    bullets: [
      'Trigger: more than 183 days in Spain in a calendar year',
      'Arrival and departure days BOTH count',
      'Sporadic absences count toward Spanish total unless you prove tax residency elsewhere',
      'Second test: centre of vital interests (family, business, assets)',
      'Third test: presumption if spouse and minor children are habitually resident in Spain',
    ],
    sections: [
      {
        id: 'how-counting-works',
        title: 'How Spain actually counts your days',
        glance: { label: 'Trigger', value: '184 days', note: 'Both arrival and departure days count' },
        body: (
          <>
            <p>
              Spanish tax residency under Article 9.1 of the Personal Income Tax Law (LIRPF) is
              triggered when you spend more than 183 days in Spanish territory during a calendar
              year. The key counting rules:
            </p>
            <ul>
              <li><strong>Both arrival and departure days count</strong> as days in Spain</li>
              <li><strong>The calendar year is the unit</strong> (January to December), not any rolling 12-month window</li>
              <li><strong>You don&apos;t have to spend 183 consecutive days</strong> — they aggregate</li>
              <li>Days where you happen to fly through Spain in transit do not count</li>
            </ul>
            <p>
              The day-counting bar is set at 184+, not 183 exactly. Many people quote the rule
              imprecisely. The legal threshold is &quot;more than 183&quot;, so 184 days triggers
              residency.
            </p>
          </>
        ),
      },
      {
        id: 'sporadic-absences',
        title: 'Sporadic absences and the trap nobody mentions',
        body: (
          <>
            <p>
              The most misunderstood part of the rule is &quot;ausencias esporádicas&quot; — sporadic
              absences. Under the LIRPF, if you spend time outside Spain during a year where you
              would otherwise be Spanish resident, those absent days COUNT TOWARD your Spanish
              total <em>unless</em> you can prove tax residency in another country for that period
              by providing a tax-residency certificate from that other country.
            </p>
            <p>
              Practical impact for Brits: a 4-week UK summer back home doesn&apos;t protect you. If
              you can&apos;t prove you were UK tax resident during that time (and you usually
              can&apos;t, because the UK Statutory Residence Test uses different criteria), those
              days count as Spanish days.
            </p>
            <p>
              This is the rule that catches part-time residents who think alternating UK/Spain
              gives them flexibility. It does not, unless your day count is genuinely close to
              50/50 and you have clean UK tax-residency evidence.
            </p>
          </>
        ),
      },
      {
        id: 'centre-of-interests',
        title: 'The centre of vital interests test (the override)',
        glance: { label: 'Override factor', value: 'Family location', note: 'Spouse and minor children in Spain' },
        body: (
          <>
            <p>
              Article 9.1 has a second leg: even if you spend fewer than 184 days in Spain, you
              are Spanish tax resident if your &quot;centro de intereses económicos&quot; — your
              centre of economic and personal interests — is in Spain.
            </p>
            <p>This catches profiles like:</p>
            <ul>
              <li>UK property landlord whose income centre is the UK, but whose family lives full-time in Spain</li>
              <li>A British executive who travels constantly but whose home, spouse and children are in Spain</li>
              <li>Anyone who has clearly relocated their life to Spain but is careful with the day count</li>
            </ul>
            <p>
              There is a presumption (presunción legal) that if your spouse and minor children are
              habitually Spanish resident, you also are. Rebuttable but difficult.
            </p>
          </>
        ),
      },
      {
        id: 'split-year',
        title: 'Split-year treatment: does Spain do it like the UK?',
        body: (
          <>
            <p>
              Short answer: <strong>no</strong>. Spain&apos;s residency test is binary by calendar
              year. You are either Spanish resident for the entire year, or non-resident for the
              entire year. There is no UK-style split-year treatment that lets you bifurcate the
              tax year at the date of move.
            </p>
            <p>
              This is the single biggest tax planning lever for British movers. If you move to
              Spain in mid-November, you have approximately 47 days in Spain that year — under the
              184 threshold — so you remain UK tax resident for the full UK tax year (subject to
              UK SRT) and non-resident in Spain. Spanish residency clicks in from 1 January of the
              following year.
            </p>
            <p>
              If you move in early June, you are likely to cross 184 days and become Spanish
              resident for the WHOLE calendar year, including the months before you arrived. This
              has major consequences for any UK income, UK property sales or pension drawdowns
              made earlier that year.
            </p>
          </>
        ),
      },
      {
        id: 'planning',
        title: 'How to plan around the rule legitimately',
        body: (
          <>
            <p>The clean planning moves:</p>
            <ul>
              <li><strong>Time your move late in the calendar year</strong> if you have major UK income or capital gains crystallising</li>
              <li><strong>Crystallise UK CGT before the move</strong> if relevant (especially UK property sales)</li>
              <li><strong>Get a UK HMRC residency certificate</strong> if you&apos;ll be splitting time and want to argue Spanish non-residence</li>
              <li><strong>Don&apos;t fly under the radar</strong> — if you genuinely live in Spain, register and pay Spanish tax. Hacienda&apos;s data sharing with HMRC has improved dramatically post-CRS.</li>
              <li><strong>Consider Beckham Law eligibility</strong> if your situation suits — see <a href="/spain/tax-residency/beckham-law">our Beckham guide</a></li>
            </ul>
          </>
        ),
      },
    ],
    sources: [
      { label: 'AEAT - Personal Income Tax residency rules', href: 'https://sede.agenciatributaria.gob.es/' },
      { label: 'BOE - Ley 35/2006 IRPF', href: 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764' },
      { label: 'HMRC - UK Statutory Residence Test', href: 'https://www.gov.uk/government/publications/rdr3-statutory-residence-test-srt' },
    ],
    faqs: [
      { q: 'If I spend exactly 183 days in Spain, am I tax resident?', a: 'No. The threshold is "more than 183", so 183 exactly is non-resident, 184 is resident. Cutting it that fine is risky because immigration records and the centre-of-vital-interests test can override.' },
      { q: 'Do days I am physically in Spain on holiday count?', a: 'Yes. Every day in Spanish territory counts toward the 183 total, regardless of purpose. Holiday days, business trip days, family visit days all count.' },
      { q: 'I am UK tax resident under the SRT. Can I also be Spanish resident in the same year?', a: 'Yes — this is called dual residency. The UK-Spain double tax treaty has tie-breaker rules (Article 4) to determine which country has primary taxing rights. Permanent home, centre of interests, habitual abode are the cascading tests.' },
      { q: 'Does owning Spanish property automatically make me Spanish tax resident?', a: 'No. Property ownership alone does not trigger residency. You can own Spanish property as a non-resident and pay non-resident property tax (IRNR) without becoming a full tax resident.' },
      { q: 'What is the penalty for getting this wrong?', a: 'Late filing or under-declaring as a Spanish resident triggers regularisation. Standard interest is 4.0625% (2025-26 reference rate plus 25%). Material under-declaration can trigger penalties of 50-150% of the unpaid tax depending on intent finding.' },
    ],
  },

  'beckham-law': {
    eyebrow: 'Spain · Beckham Law',
    h1: 'Beckham Law in 2026: the mechanics, the election, the trade-offs',
    intro:
      'Spain&apos;s special tax regime for incoming workers (Régimen de Impatriados). 24% flat rate on Spanish employment income up to €600,000, foreign investment income largely exempt, for six years. The most valuable tax decision a senior British professional moving to Spain can make.',
    metaTitle: 'Spain Beckham Law 2026: 24% Flat Tax, 6 Years, Mechanics',
    metaDescription:
      'Spain Beckham Law 2026 in detail: 24% flat rate, six-year window, who qualifies, election timing, when NOT to elect. British senior-professional guide.',
    bullets: [
      'Flat 24% on Spanish-source employment income up to €600,000',
      '47% on Spanish-source employment income above €600,000',
      'Foreign-source dividends, interest, capital gains generally NOT taxable in Spain during regime',
      'No Modelo 720 obligation during regime',
      'Election deadline: 6 months from social security registration (strict)',
      'Duration: year of move plus 5 following years (6 total)',
    ],
    sections: [
      {
        id: 'who-qualifies',
        title: 'Who actually qualifies in 2026',
        body: (
          <>
            <p>
              The 2023 Startups Law materially widened eligibility. As of 2026, you qualify if all
              of these are true:
            </p>
            <ul>
              <li>You were NOT Spanish tax resident in any of the prior 5 years (reduced from 10 in 2023)</li>
              <li>You moved to Spain as a result of either: an employment contract with a Spanish company, becoming a director of a Spanish company, performing professional activity as a self-employed entrepreneur in an innovative sector, OR receiving a DNV-equivalent permit</li>
              <li>You do not earn Spanish-source income through a permanent establishment (PE)</li>
              <li>You elect into the regime within 6 months of social security registration</li>
            </ul>
            <p>
              The 2023 reform also extended the regime to spouses and children of the qualifying
              applicant, which was previously not possible.
            </p>
          </>
        ),
      },
      {
        id: 'how-the-math-works',
        title: 'The math: what is taxed and what is not',
        glance: { label: 'Flat rate', value: '24%', note: 'On Spanish-source employment income up to €600,000' },
        body: (
          <>
            <p>Under Beckham:</p>
            <ul>
              <li><strong>Spanish-source employment income up to €600,000</strong>: 24% flat (vs progressive 19-50%)</li>
              <li><strong>Spanish-source employment income above €600,000</strong>: 47% (no progressive ladder, no allowances)</li>
              <li><strong>Foreign-source dividends, interest, capital gains</strong>: generally NOT taxable in Spain</li>
              <li><strong>Foreign-source rental income</strong>: NOT taxable in Spain</li>
              <li><strong>Spanish-source investment income</strong>: taxed at standard Spanish rates 19-28%</li>
              <li><strong>Wealth tax</strong>: levied only on Spanish-situs assets</li>
              <li><strong>Modelo 720</strong>: NOT required during regime</li>
            </ul>
            <p>
              For a senior corporate move on €150,000 salary, the Beckham election typically saves
              €25,000-€35,000 per year vs the standard progressive regime. Over six years that&apos;s
              €150,000-€200,000 in tax saving — easily the single biggest financial decision of the
              move.
            </p>
          </>
        ),
      },
      {
        id: 'the-election',
        title: 'The election: how and when to file',
        glance: { label: 'Election deadline', value: '6 months', note: 'From social security registration. Strict.' },
        body: (
          <>
            <p>
              You elect into the regime by filing Modelo 149 with the AEAT within 6 months of your
              Spanish social security registration date. The election is approved or denied
              typically within 10 working days. No extensions for any reason.
            </p>
            <p>
              Critical: the clock starts at <strong>social security registration</strong>, not at
              your arrival date or visa date. For DNV holders, this is the date your gestor enrols
              you in the Spanish system. For employee moves, it&apos;s the date your Spanish
              employer registers you. Drive this proactively.
            </p>
          </>
        ),
      },
      {
        id: 'when-not-to-elect',
        title: 'When the Beckham election is the WRONG choice',
        body: (
          <>
            <p>Beckham is not always right. Skip the election if:</p>
            <ul>
              <li>
                <strong>You have major foreign-source investment income</strong> AND you would
                benefit from claiming UK tax credits against Spanish progressive tax. Beckham
                treats you as non-resident for treaty purposes, which can break some credit chains.
              </li>
              <li>
                <strong>You have large unrealised gains in your UK portfolio</strong> that you plan
                to realise during the regime. Beckham gives a clean shelter, but the post-regime
                step-up is not automatic.
              </li>
              <li>
                <strong>Your Spanish-source salary is under €60,000 a year.</strong> Standard
                progressive rates may produce similar effective tax with full allowances.
              </li>
              <li>
                <strong>You expect to leave Spain before year 4-5.</strong> The administrative
                effort of the election plus the post-departure complications may not be worth it.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 'post-regime',
        title: 'What happens at the end of year 6',
        body: (
          <>
            <p>
              At the end of the regime you transition to standard Spanish tax. Three planning
              moves are usually relevant:
            </p>
            <ul>
              <li>
                <strong>Crystallise gains in year 6 before transition.</strong> Spanish CGT applies
                to the full gain (no step-up to base cost on day 1 of regime exit). Realising
                inside the regime may be preferable depending on the gain.
              </li>
              <li>
                <strong>Start Modelo 720 reporting</strong> for the first year after regime end.
                Foreign-asset thresholds apply from year 7 onward.
              </li>
              <li>
                <strong>Consider re-residency abroad before year 6</strong> if your situation
                allows. The regime ends when you cease to meet the criteria, and re-entry to the
                regime is not generally available.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 'spouses',
        title: 'The 2023 reform: spouses and children now included',
        body: (
          <>
            <p>
              Before 2023, only the primary qualifying applicant could elect into Beckham. The
              spouse and children paid standard Spanish tax even when they moved as a unit. The
              2023 Startups Law fixed this.
            </p>
            <p>
              Under the new rules, the spouse and children under 25 of a Beckham-qualifying
              applicant can also elect, provided they move with or to join the applicant and meet
              the standard non-residency precondition. Each family member files their own Modelo
              149 within their own 6-month window.
            </p>
          </>
        ),
      },
    ],
    sources: [
      { label: 'AEAT - Régimen Especial Trabajadores Desplazados', href: 'https://sede.agenciatributaria.gob.es/' },
      { label: 'BOE - Ley 28/2022 Startups Law', href: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-22685' },
      { label: 'BOE - Article 93 LIRPF', href: 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764' },
    ],
    faqs: [
      { q: 'Can I elect Beckham if I move on a DNV?', a: 'Yes. The 2023 Startups Law explicitly included DNV holders. You must still meet the prior 5-year non-residence test and file within 6 months of social security registration.' },
      { q: 'Does Beckham apply to bonus payments and stock awards?', a: 'Yes for the qualifying portion. Bonuses and RSUs vesting during the regime are taxed at 24% up to the €600k threshold. Awards granted before move but vesting during regime are mostly covered (subject to apportionment rules for service-period attribution).' },
      { q: 'Can I keep my UK ISAs during Beckham?', a: 'Yes. Foreign-source investment income is generally NOT taxable in Spain during the regime, so UK ISA growth is not taxed. Practical effect: ISAs work as intended. This treatment ends at regime exit.' },
      { q: 'Does Beckham save me from inheritance tax in Spain?', a: 'Not as such. Beckham is for income tax. ISD (Impuesto de Sucesiones) is a separate tax with its own residency-based exposure. Some autonomous regions (Madrid, Andalucía) have effective 99% relief that helps regardless.' },
      { q: 'What if I miss the 6-month election deadline?', a: 'You miss the regime permanently. There are no extensions and no late elections. This is the single most common Beckham mistake.' },
    ],
  },

  'modelo-720': {
    eyebrow: 'Spain · Modelo 720',
    h1: 'Modelo 720 in 2026: what you actually need to declare',
    intro:
      'The foreign-asset declaration that scared a generation of Brits with absurd penalties. The 2022 ECJ ruling forced Spain to proportionalise the penalty regime, but the obligation itself remains. Here is what you actually file in 2026.',
    metaTitle: 'Spain Modelo 720 2026: Foreign Asset Declaration, Penalties',
    metaDescription:
      'Spain Modelo 720 declaration in 2026: three €50k thresholds, post-ECJ penalty regime, what UK assets to include, filing mechanics.',
    bullets: [
      'Three asset categories, each with €50,000 threshold',
      'Bank accounts, securities/funds/insurance, real estate',
      'Subsequent filings only required if value rises by €20,000+ in a category',
      'Filing window: 1 January to 31 March of year following relevant year',
      'Post-2022 ECJ ruling: penalties now proportionate to standard tax penalties',
    ],
    sections: [
      {
        id: 'three-categories',
        title: 'The three asset categories you must track',
        glance: { label: 'Threshold per category', value: '€50,000', note: 'Triggers full disclosure of that category' },
        body: (
          <>
            <p>Modelo 720 has three separate categories, each with its own €50,000 threshold:</p>
            <ul>
              <li>
                <strong>Category 1 - Bank accounts.</strong> Current accounts, savings accounts,
                fixed-term deposits, in any foreign bank. Threshold tested on the value at 31
                December OR the average of the final quarter, whichever is higher.
              </li>
              <li>
                <strong>Category 2 - Securities, rights, insurance, and annuities.</strong> Shares,
                funds, ETFs, UK ISAs, UK SIPPs (in some cases), life insurance with surrender
                value, annuities, certain crypto holdings. Threshold tested on year-end values.
              </li>
              <li>
                <strong>Category 3 - Real estate.</strong> Foreign-situs property, beneficial
                interests in property, time-shares. Threshold tested on acquisition cost.
              </li>
            </ul>
            <p>
              If any single category exceeds €50,000 at year-end, the WHOLE category must be
              disclosed in full. The other categories are not required to be disclosed if they
              don&apos;t exceed €50,000.
            </p>
          </>
        ),
      },
      {
        id: 'subsequent-filings',
        title: 'When you need to file in subsequent years',
        body: (
          <>
            <p>
              Once you have filed Modelo 720 for a category, you only need to refile that category
              if the year-end value has INCREASED by €20,000 or more compared to the most recent
              declaration. Decreases do not trigger refiling.
            </p>
            <p>
              You always need to refile if you have closed accounts, sold positions, or otherwise
              divested from any declared asset during the year (regardless of value change).
            </p>
            <p>
              First-time filers in 2026 will declare based on 31 December 2026 values, with the
              filing window 1 January to 31 March 2027.
            </p>
          </>
        ),
      },
      {
        id: 'uk-specific',
        title: 'The UK-specific assets that confuse people',
        body: (
          <>
            <p>Particular UK asset treatments:</p>
            <ul>
              <li>
                <strong>UK ISAs</strong> - DECLARABLE as securities (Category 2). The ISA wrapper
                does not exist in Spanish law; Spain sees the underlying investments. Aggregate ISA
                values with other Category 2 assets to test the €50k threshold.
              </li>
              <li>
                <strong>UK SIPPs</strong> - GENERALLY NOT declarable in Category 2 if it&apos;s a
                pure pension wrapper that you cannot freely access (preservation age, no surrender
                value). Once you reach preservation age (typically 55, rising to 57 from 2028) it
                may become declarable. This is one of the most contested areas — get specialist
                advice.
              </li>
              <li>
                <strong>UK life insurance</strong> - declarable if it has a surrender value (whole
                of life, investment-linked). Term life with no surrender value is not declarable.
              </li>
              <li>
                <strong>UK property held in your own name</strong> - declarable in Category 3 at
                acquisition cost (not market value). Stamp duty paid is included in acquisition
                cost.
              </li>
              <li>
                <strong>Crypto on overseas exchanges</strong> - declarable in Category 2 since
                2023. Spanish-exchange crypto holdings are declarable via Modelo 721 instead.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 'penalties',
        title: 'The post-ECJ penalty regime (much less terrifying now)',
        body: (
          <>
            <p>
              Before 2022, Modelo 720 penalties were notoriously brutal: a minimum penalty of 150%
              of the unpaid tax, treatment of undeclared assets as unjustified gains taxed at 47%,
              flat €5,000 fines per missing data point with no minimum.
            </p>
            <p>
              The European Court of Justice ruled in January 2022 (Case C-788/19) that this regime
              violated EU law on free movement of capital. Spain has since reformed:
            </p>
            <ul>
              <li>Penalties for late filing are now proportionate to standard Spanish tax penalties (typically 20-50%)</li>
              <li>Undeclared assets are no longer automatically treated as unjustified gains</li>
              <li>The flat per-data-point fines are largely gone</li>
            </ul>
            <p>
              The obligation remains. The penalty regime is now in line with other tax filing
              obligations. Late filing or non-filing still triggers regularisation, but the
              regime is no longer the financial death sentence it was pre-2022.
            </p>
          </>
        ),
      },
      {
        id: 'beckham-exception',
        title: 'The Beckham Law exception',
        body: (
          <>
            <p>
              Holders of <a href="/spain/tax-residency/beckham-law">Beckham Law status</a> are
              EXEMPT from Modelo 720 for the duration of the regime. This is one of the structural
              advantages of the regime — no foreign-asset reporting burden during the six years.
            </p>
            <p>
              At regime exit, Modelo 720 obligation kicks in for the following year if your
              foreign assets exceed the thresholds at that point.
            </p>
          </>
        ),
      },
    ],
    sources: [
      { label: 'AEAT - Modelo 720 official page', href: 'https://sede.agenciatributaria.gob.es/' },
      { label: 'CJEU Case C-788/19 ruling', href: 'https://curia.europa.eu/' },
      { label: 'BOE - Modelo 720 regulation', href: 'https://www.boe.es/' },
    ],
    faqs: [
      { q: 'Do I need to file Modelo 720 in my first year of Spanish residency?', a: 'You file the year following the first year you are Spanish tax resident, based on your asset values at 31 December of that first year. If you arrive in 2026 and become Spanish resident for that year, your first Modelo 720 is filed January-March 2027.' },
      { q: 'Is the UK State Pension declarable?', a: 'No. State pension entitlement (as opposed to a fund) is not declarable. The income flow is taxed separately under standard income-tax rules.' },
      { q: 'Do I need to declare UK property I rent out?', a: 'Yes. UK property in your name is declared in Category 3 at acquisition cost, regardless of whether you rent it or live in it.' },
      { q: 'What about jointly-held assets with a spouse?', a: 'Each spouse declares their own share. A jointly-held UK home held 50/50 means each spouse declares 50% of acquisition cost.' },
      { q: 'Can I just not declare and hope they don&apos;t find out?', a: 'No. Spain has full Common Reporting Standard (CRS) data exchange with the UK since 2017. Spanish Hacienda receives annual data on UK accounts, ISAs, and certain other holdings of Spanish-resident taxpayers automatically. Non-disclosure is a high-risk position.' },
    ],
  },

  'uk-pensions': {
    eyebrow: 'Spain · UK pensions',
    h1: 'How Spain taxes your UK pension in 2026',
    intro:
      'The UK-Spain double tax treaty (Article 17) determines which country has primary taxing rights on different pension types. Most British movers misunderstand which rule applies to their pension. Here is how it actually works.',
    metaTitle: 'Spain Tax on UK Pensions 2026: Treaty Article 17 Mechanics',
    metaDescription:
      'How Spain taxes UK pensions in 2026: government pensions stay UK, state and private pensions Spain-taxed, drawdown planning. UK-Spain DTT Article 17.',
    bullets: [
      'Government pensions (Civil Service, NHS, teachers, armed forces): taxed only in UK',
      'UK State Pension: taxed only in Spain once Spanish resident',
      'Private and occupational pensions: taxed only in Spain once Spanish resident',
      'UK no longer withholds tax on Spain-taxable pensions (form Spain-Individual filed)',
      'Drawdown timing critical: split timing across UK/Spain residency years',
    ],
    sections: [
      {
        id: 'three-pension-types',
        title: 'The three pension types and which country taxes them',
        body: (
          <>
            <p>The UK-Spain DTT (2014, in force since 2014) handles pensions across three articles:</p>
            <ul>
              <li>
                <strong>Article 17 - Pensions and similar payments.</strong> Covers UK State
                Pension and private/occupational pensions. Taxed ONLY in the resident country.
                For Spanish residents: only Spain taxes; UK has no taxing right.
              </li>
              <li>
                <strong>Article 18 - Government service.</strong> Covers pensions paid by reason
                of past government service: Civil Service, NHS, teachers, armed forces, police, fire
                service, local government. Taxed ONLY in the UK, regardless of where you live.
              </li>
              <li>
                <strong>Article 21 - Other income.</strong> Catches certain annuities and
                miscellaneous pension-like payments. Generally taxed in the resident country.
              </li>
            </ul>
            <p>
              The Article 18 rule for government pensions is the major gotcha for ex-NHS, ex-Civil
              Service and ex-armed-forces movers. Your government pension stays UK-taxed, and you
              should NOT include it in your Spanish tax return as Spanish-taxable income.
            </p>
          </>
        ),
      },
      {
        id: 'state-pension',
        title: 'UK State Pension specifically',
        glance: { label: 'Tax jurisdiction', value: 'Spain only', note: 'For Spanish-resident retirees' },
        body: (
          <>
            <p>
              Once you become Spanish tax resident, the UK no longer taxes your State Pension. You
              report the gross UK State Pension as Spanish-taxable income on your Spanish IRPF return.
            </p>
            <p>
              In practical terms, you file Form Spain-Individual with HMRC to confirm Spanish
              residency under the treaty. HMRC then stops applying any UK withholding to your
              State Pension. You receive the gross amount and pay Spanish progressive tax on it.
            </p>
            <p>
              For a Brit on full new State Pension (~£11,500/year in 2026), this typically
              produces a Spanish tax liability of around €1,200-€2,500 depending on other income
              and region.
            </p>
          </>
        ),
      },
      {
        id: 'private-pensions',
        title: 'Private and occupational pensions: drawdown vs annuity',
        body: (
          <>
            <p>
              Once Spanish resident, all your UK private/occupational pension drawdown is
              Spanish-taxable as employment-like income at progressive rates (up to ~50%
              regional max).
            </p>
            <p>The 25% tax-free lump sum quirk:</p>
            <ul>
              <li>
                <strong>UK rule</strong>: 25% of your pension pot can be taken as a tax-free lump
                sum under UK law (PCLS).
              </li>
              <li>
                <strong>Spanish rule</strong>: Spain does NOT recognise the 25% PCLS as tax-free.
                Spain taxes the full amount as pension income.
              </li>
              <li>
                <strong>Planning consequence</strong>: Take the 25% PCLS BEFORE becoming Spanish
                resident. If you take it after, Spain taxes a chunk of money the UK gave you tax-free.
              </li>
            </ul>
            <p>
              This is one of the most expensive year-one mistakes. A typical Brit moving with a
              £400k pension pot stands to lose €15,000-€25,000 by taking the PCLS in the wrong tax
              year.
            </p>
          </>
        ),
      },
      {
        id: 'sipp',
        title: 'UK SIPPs and the QROPS question',
        body: (
          <>
            <p>
              A UK SIPP remains accessible from Spain. You don&apos;t need to move it. Drawdown is
              Spanish-taxable under Article 17 once you&apos;re Spanish resident.
            </p>
            <p>
              QROPS (Qualifying Recognised Overseas Pension Schemes) used to be popular for Brits
              moving abroad as a way to crystallise out of the UK system. Post-Brexit and post the
              2017 25% transfer charge regime, most cross-border QROPS transfers from the UK to
              Spain are subject to that charge (subject to certain exclusions). For most movers,
              keeping the SIPP in the UK is now the cleaner path.
            </p>
            <p>
              The QROPS conversation is worth having with a UK-Spain pensions specialist if your
              pot is over £750k or you have specific reasons to want the pension outside the UK
              system. For most movers under that threshold, SIPP-in-UK is fine.
            </p>
          </>
        ),
      },
      {
        id: 'planning-summary',
        title: 'The drawdown-timing planning summary',
        body: (
          <>
            <p>The clean planning sequence for a typical UK-Spain mover:</p>
            <ol>
              <li>Take 25% PCLS BEFORE Spanish residency triggers</li>
              <li>Crystallise any DC pension drawdown into a flexi-access drawdown account while still UK resident</li>
              <li>Move to Spain late in calendar year to avoid full Spanish residency year</li>
              <li>File Form Spain-Individual with HMRC once you have your TIE</li>
              <li>From Spanish residency year 1, drawdown is Spanish-taxed at progressive rates</li>
              <li>Consider Beckham Law if you also have qualifying employment income — pension flow remains foreign-source and largely Spain-exempt during regime</li>
            </ol>
          </>
        ),
      },
    ],
    sources: [
      { label: 'HMRC - UK-Spain Double Taxation Convention', href: 'https://www.gov.uk/government/publications/spain-tax-treaties' },
      { label: 'AEAT - Pensiones de extranjero', href: 'https://sede.agenciatributaria.gob.es/' },
      { label: 'UK Government - Living in Spain', href: 'https://www.gov.uk/guidance/living-in-spain' },
    ],
    faqs: [
      { q: 'I have an NHS pension. Do I pay Spanish tax on it?', a: 'No. NHS pensions are government-service pensions under Article 18 of the UK-Spain DTT. They are taxed only in the UK regardless of where you live.' },
      { q: 'Will I lose my Triple Lock State Pension increases by moving to Spain?', a: 'No. Spain is one of the countries where the UK State Pension is uprated annually in line with the Triple Lock (under the EU/EEA reciprocal arrangement maintained post-Brexit).' },
      { q: 'Can I still take the 25% tax-free lump sum once Spanish resident?', a: 'Yes from the UK perspective — UK pension rules still allow it. But Spain will tax the entire withdrawal as pension income. The 25% UK tax-free status only matters for UK tax; Spain ignores it. Best to take PCLS pre-move.' },
      { q: 'Do I get any UK personal allowance against UK-only-taxed government pensions?', a: 'Yes. As a non-resident with UK-source government pension income, you typically still claim the UK personal allowance (currently £12,570) against that pension income. File a Self Assessment return as non-resident.' },
      { q: 'What is Form Spain-Individual?', a: 'A form filed jointly with HMRC and Spanish Hacienda confirming you are Spanish treaty resident, which causes HMRC to stop withholding UK tax on Spain-taxable pension income (private pensions and State Pension).' },
    ],
  },

  'cgt-on-uk-property': {
    eyebrow: 'Spain · CGT on UK property',
    h1: 'CGT on selling your UK home after moving to Spain',
    intro:
      'The single most expensive mistake we see in year-one British moves to Spain. Sell while UK resident and Principal Private Residence Relief usually shelters the gain entirely. Sell after Spanish residency triggers and Spain has primary taxing rights at 19-28% with no Spanish equivalent of PPR.',
    metaTitle: 'CGT on UK Property After Spain Move 2026: The Year-1 Trap',
    metaDescription:
      'How CGT works on UK property when you move to Spain in 2026: PPR relief disappears under Spanish tax, 2-year deemed disposal rules, planning the sale.',
    bullets: [
      'UK PPR relief: shelters gain on sole/main residence in UK',
      'Spain: no PPR equivalent for non-Spanish property, but does have main-home rollover relief',
      'UK-Spain DTT: Spain has primary taxing rights once you are Spanish resident',
      'Spanish CGT rates 2026: 19% up to €6k, 21% to €50k, 23% to €200k, 27% to €300k, 28% above',
      'The 2-year deemed disposal extension does not survive a permanent move',
    ],
    sections: [
      {
        id: 'the-trap',
        title: 'The trap explained in two paragraphs',
        body: (
          <>
            <p>
              You sell your UK home in the year after you move to Spain. You assume UK Principal
              Private Residence Relief shelters the gain. You report it to HMRC and pay zero UK
              CGT. You then file your Spanish tax return for that year and discover that Spain,
              under the UK-Spain double tax treaty, has primary taxing rights on the gain. Spain
              does not recognise UK PPR. You owe Spain CGT on a gain you thought was tax-free.
            </p>
            <p>
              On a typical British move with £400k of unrealised gain on the UK home accumulated
              over 15 years, this mistake costs €80,000-€110,000 in Spanish CGT. It is the single
              most expensive year-one error in our case histories.
            </p>
          </>
        ),
      },
      {
        id: 'the-treaty',
        title: 'What the UK-Spain treaty actually says',
        glance: { label: 'Treaty article', value: 'Article 13(1)', note: 'Gains on real estate taxable in the country of property situs' },
        body: (
          <>
            <p>
              Under Article 13 of the UK-Spain DTT, gains on immovable property are taxable in the
              country where the property is situated. UK property gains are therefore UK-taxable
              regardless of where the owner lives.
            </p>
            <p>
              But the treaty allows both countries to tax — it&apos;s a primary-taxing-right
              allocation, not an exclusive one. The other country gives credit for foreign tax
              paid. So for a Spanish resident selling UK property:
            </p>
            <ul>
              <li>UK taxes the gain (with UK PPR potentially sheltering it)</li>
              <li>Spain also taxes the gain (under Spanish CGT rules)</li>
              <li>Spain gives credit for UK tax actually paid</li>
              <li>If UK tax is zero due to PPR, Spain has nothing to credit and you pay full Spanish CGT</li>
            </ul>
          </>
        ),
      },
      {
        id: 'spanish-rates',
        title: 'Spanish CGT rates for 2026',
        body: (
          <>
            <p>Spanish savings-income tax (which includes CGT) is a progressive ladder:</p>
            <ul>
              <li>0 - €6,000: 19%</li>
              <li>€6,000 - €50,000: 21%</li>
              <li>€50,000 - €200,000: 23%</li>
              <li>€200,000 - €300,000: 27%</li>
              <li>Above €300,000: 28%</li>
            </ul>
            <p>
              For a £400k gain (~€470k), Spanish CGT works out at approximately €119,000 on the
              taxable gain. Adjustment for inflation indexation (coefficient de actualización) was
              abolished in 2015 so the entire nominal gain is taxable.
            </p>
            <p>
              Spain does have a main-home reinvestment rollover (reinversión en vivienda
              habitual) that can defer some of this if you buy a Spanish main home with the
              proceeds, but the rules are tight and don&apos;t fit every fact pattern.
            </p>
          </>
        ),
      },
      {
        id: 'reinvestment-relief',
        title: 'The Spanish main-home reinvestment rollover (limited help)',
        body: (
          <>
            <p>
              Spain&apos;s reinversión en vivienda habitual allows you to defer CGT on the sale of
              your main home if you reinvest the proceeds into a new main home within 2 years.
              The key constraints:
            </p>
            <ul>
              <li>Both old and new must qualify as &quot;vivienda habitual&quot; under Spanish rules</li>
              <li>You must have lived in the old home for at least 3 continuous years before sale (or have a justified early exit)</li>
              <li>Reinvestment within 2 years of sale</li>
              <li>The deferral is proportionate to the reinvested amount</li>
            </ul>
            <p>
              A UK home that you sold the year after moving to Spain is unlikely to qualify as
              your Spanish main home under these rules — you weren&apos;t Spanish-resident in the
              UK property. So this relief usually doesn&apos;t save you. The cleaner planning is
              to sell before the residency crossover.
            </p>
          </>
        ),
      },
      {
        id: 'planning',
        title: 'The clean planning sequence',
        glance: { label: 'Key decision', value: 'Sell before Spanish residency', note: 'PPR shelters gain entirely' },
        body: (
          <>
            <p>For a typical British mover:</p>
            <ol>
              <li>
                <strong>If you can sell BEFORE the move:</strong> sell while still UK tax
                resident, claim UK PPR, full shelter. Spain doesn&apos;t see the gain at all.
              </li>
              <li>
                <strong>If you can&apos;t sell before but can complete in same UK tax year as
                move:</strong> time the move to October/November so you remain UK tax resident
                for the full UK year of sale, and Spain doesn&apos;t become tax resident that
                calendar year either (under 184 days).
              </li>
              <li>
                <strong>If you must sell after Spanish residency triggers:</strong> consider
                Beckham Law if applicable (foreign property gains may be Spain-exempt under
                Beckham — though this is contested and needs specific advice).
              </li>
              <li>
                <strong>If renting out instead of selling:</strong> rental income is
                Spanish-taxable from year 1 of residency. UK income still flows through self-
                assessment as non-resident landlord. Treaty credit at Spanish tax time.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: 'rebasing',
        title: 'Rebasing under UK rules: not Spain rebasing',
        body: (
          <>
            <p>
              UK CGT rules allow some rebasing for non-residents on UK residential property at 5
              April 2015 (the start of the NRCGT regime). This is a UK-only relief and doesn&apos;t
              extend to Spanish CGT calculation.
            </p>
            <p>
              For Spanish CGT, the base cost is your original acquisition cost (purchase price
              plus acquisition costs). The full nominal gain since original purchase is taxable
              in Spain. The 2015 rebase saves UK CGT but not Spanish CGT.
            </p>
          </>
        ),
      },
    ],
    sources: [
      { label: 'HMRC - UK-Spain Double Taxation Convention', href: 'https://www.gov.uk/government/publications/spain-tax-treaties' },
      { label: 'HMRC - Capital Gains Tax on UK property for non-residents', href: 'https://www.gov.uk/capital-gains-tax-non-resident' },
      { label: 'AEAT - Ganancias y pérdidas patrimoniales', href: 'https://sede.agenciatributaria.gob.es/' },
    ],
    faqs: [
      { q: 'Can I sell the UK home after I move and still claim PPR?', a: 'Partial PPR applies for the period it was your main residence, plus the final 9 months. So a sale in the year after move can claim significant PPR on the UK side. But Spain still has primary taxing rights once you are Spanish resident and Spain does not recognise PPR.' },
      { q: 'Does it help if my spouse remains UK resident and the property is in their name?', a: 'Possibly. If only your spouse is on the title and your spouse remains UK tax resident for that year, the UK-side PPR applies cleanly and Spain has no taxing right on a UK-resident person&apos;s UK property gain. Joint ownership splits the analysis.' },
      { q: 'What if I sell to a family member at undervalue?', a: 'Both UK and Spanish CGT apply at market value for connected-party transactions, not at the actual sale price. You can&apos;t avoid CGT by selling cheap to a family member.' },
      { q: 'Are there any Spain reliefs for UK property sales?', a: 'No specific UK-property relief. The main-home rollover requires reinvestment into a Spanish main home and rarely applies to a UK home sold post-move. Beckham Law during its 6-year window arguably shelters foreign property gains, but this is a complex area requiring specialist advice.' },
      { q: 'What about renting out the UK property and selling later?', a: 'Renting out converts the UK home from PPR-qualifying main residence to investment property over time. UK PPR relief reduces. Spanish rental income is taxable from Spanish residency year 1. The optimal sell-window typically narrows post-move.' },
    ],
  },

  'isa-treatment': {
    eyebrow: 'Spain · UK ISA treatment',
    h1: 'What happens to your UK ISA when you move to Spain',
    intro:
      'ISAs do not exist in Spanish tax law. The wrapper is invisible to Spain. The growth, dividends and capital gains inside your ISA become taxable in Spain once you are Spanish tax resident. Here is what to do about it.',
    metaTitle: 'UK ISA Treatment in Spain 2026: What Becomes Taxable',
    metaDescription:
      'How Spain treats your UK ISA in 2026: dividends taxable, gains taxable, wrapper ignored, Modelo 720 reporting. Planning before the move.',
    bullets: [
      'ISAs are not recognised in Spanish tax law',
      'Income inside the ISA becomes Spanish-taxable as if no wrapper existed',
      'Capital gains realised inside ISA: Spanish CGT applies',
      'ISA value above €50k may need to be reported on Modelo 720',
      'No new ISA contributions allowed once UK non-resident',
      'Beckham Law during its 6-year window largely shelters ISA income',
    ],
    sections: [
      {
        id: 'wrapper-invisible',
        title: 'Why the ISA wrapper disappears under Spanish tax',
        body: (
          <>
            <p>
              UK ISAs work because UK tax law explicitly exempts income and gains inside the
              wrapper. The wrapper itself doesn&apos;t do anything magical — it&apos;s a tax
              fiction that depends on UK law granting the exemption.
            </p>
            <p>
              Spanish tax law has no concept of an ISA. Spain looks through the wrapper at the
              underlying investments and taxes them as if you held them directly. UK gilts inside
              an ISA are treated as UK gilts. UK equity inside a Stocks & Shares ISA is treated
              as UK equity. The fact that they sit inside an ISA is irrelevant.
            </p>
          </>
        ),
      },
      {
        id: 'what-becomes-taxable',
        title: 'What specifically becomes taxable',
        body: (
          <>
            <p>Once you&apos;re Spanish tax resident, every income event inside the ISA is taxable:</p>
            <ul>
              <li><strong>Dividends</strong> from UK equity holdings: 19-28% Spanish savings-income tax</li>
              <li><strong>Interest</strong> from cash ISAs or bond holdings: 19-28% Spanish savings-income tax</li>
              <li><strong>Capital gains</strong> from sales inside the ISA: 19-28% Spanish CGT</li>
              <li><strong>Distributions from ISA-held funds</strong>: 19-28%</li>
            </ul>
            <p>
              The UK doesn&apos;t apply withholding tax on UK dividends to Spanish residents
              (treaty residual rate is 0% for most cases). So you get the gross dividend and pay
              full Spanish tax on it. No double taxation, just full Spanish exposure where you
              were expecting full UK exemption.
            </p>
          </>
        ),
      },
      {
        id: 'modelo-720',
        title: 'Modelo 720 reporting of ISA holdings',
        glance: { label: 'Threshold', value: '€50,000', note: 'Combined Category 2 (securities) value' },
        body: (
          <>
            <p>
              ISAs are declared in Category 2 of <a href="/spain/tax-residency/modelo-720">Modelo
              720</a> (securities, funds, insurance with surrender value). The €50,000 threshold is
              tested across all Category 2 holdings combined, not per ISA.
            </p>
            <p>
              For most British movers with multiple ISA years of contributions, the combined ISA
              value will exceed €50,000 in year 1 of Spanish residency, triggering full Category 2
              disclosure. After that, refile only when value rises by €20,000+ across the category.
            </p>
          </>
        ),
      },
      {
        id: 'no-new-contributions',
        title: 'You cannot contribute to your ISA from Spain',
        body: (
          <>
            <p>
              UK ISA contribution rules require you to be UK tax resident in the tax year of
              contribution. Once you become UK non-resident, the year you leave, you can still
              make ISA contributions for the days you were UK resident. After that, no new
              contributions.
            </p>
            <p>
              You can keep the existing ISA holdings. You can sell and rebuy within the ISA. You
              just can&apos;t add new money. The ISA remains technically valid under UK law and
              the UK doesn&apos;t tax the income — Spain does.
            </p>
          </>
        ),
      },
      {
        id: 'planning',
        title: 'What to actually do before you move',
        body: (
          <>
            <p>The clean planning sequence for someone with significant ISA holdings:</p>
            <ol>
              <li>
                <strong>Crystallise gains while UK resident.</strong> Sell positions with large
                unrealised gains BEFORE the move. UK ISA tax exemption shelters the gain entirely.
                Rebuy within the ISA or hold as cash.
              </li>
              <li>
                <strong>Consider repositioning to growth (vs income) assets.</strong> Capital
                gains can be timed; dividends arrive on the schedule the company chooses. For
                Spanish tax efficiency post-move, low-yield growth holdings reduce annual income
                events.
              </li>
              <li>
                <strong>If Beckham Law is on the table:</strong> ISAs are largely sheltered during
                the regime because foreign-source investment income is Spain-exempt. This makes
                ISA-heavy portfolios much more workable for Beckham-eligible movers.
              </li>
              <li>
                <strong>If not Beckham-eligible:</strong> consider whether unwinding the ISA before
                move and using a Spanish-tax-efficient structure (e.g. a unit-linked life bond
                under Spanish rules) makes sense. Run the numbers carefully.
              </li>
              <li>
                <strong>Don&apos;t forget Modelo 720</strong> if combined securities exceed €50k.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: 'beckham-shelter',
        title: 'How Beckham Law affects ISA treatment',
        body: (
          <>
            <p>
              Under <a href="/spain/tax-residency/beckham-law">Beckham Law</a>, foreign-source
              investment income is largely NOT taxable in Spain during the 6-year regime. UK ISA
              income is foreign-source from the Spanish perspective. So ISA dividends, interest
              and (in most interpretations) capital gains are Spain-exempt during Beckham.
            </p>
            <p>
              Modelo 720 is also waived under Beckham. So the ISA effectively continues to function
              as a tax-efficient wrapper for Beckham-eligible movers, at least within Spain.
            </p>
            <p>
              At regime exit (end of year 6), Spanish tax treatment of the ISA kicks in fully.
              The pre-exit planning then matters again — see the planning section above.
            </p>
          </>
        ),
      },
    ],
    sources: [
      { label: 'HMRC - Individual Savings Accounts (ISAs)', href: 'https://www.gov.uk/individual-savings-accounts' },
      { label: 'AEAT - Rendimientos del capital mobiliario', href: 'https://sede.agenciatributaria.gob.es/' },
      { label: 'HMRC - UK-Spain Double Taxation Convention', href: 'https://www.gov.uk/government/publications/spain-tax-treaties' },
    ],
    faqs: [
      { q: 'Should I close my ISA before moving to Spain?', a: 'Not necessarily. Closing crystallises everything; keeping it intact may be more efficient. The right decision depends on the gain/income mix, whether Beckham applies, and your post-move income needs. Get specialist advice for sums over £100k.' },
      { q: 'What about Lifetime ISAs and Junior ISAs?', a: 'Same wrapper-invisibility applies. The LISA bonus rules are UK-tax-specific; Spain doesn&apos;t care. Junior ISAs continue but Spanish tax applies to the income from the year of Spanish residency.' },
      { q: 'Can I keep my ISA platform once I move?', a: 'Some UK platforms accept Spanish-resident customers; many do not under MiFID II rules. Check with your provider before the move. Worst case you may need to transfer to a platform that accepts EU-resident clients.' },
      { q: 'Are SIPP withdrawals also taxed without UK exemption?', a: 'SIPP is a pension, not an ISA. Different rules — see our UK pensions page. SIPP drawdown is Spanish-taxable as pension income under Article 17 of the UK-Spain DTT.' },
      { q: 'What if I return to the UK after a few years in Spain?', a: 'On return to UK residency, UK ISA tax exemption resumes from your UK-resident tax year. The Spanish exposure during your Spanish period doesn&apos;t affect UK treatment going forward.' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(spokes).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = spokes[params.slug];
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/spain/tax-residency/${params.slug}` },
    openGraph: { url: `/spain/tax-residency/${params.slug}` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const s = spokes[params.slug];
  if (!s) notFound();

  const relatedSpokes: SpokeLink[] = Object.entries(allSpokeLinks)
    .filter(([slug]) => slug !== params.slug)
    .map(([, v]) => v);

  return (
    <SubPillarTemplate
      country="spain"
      eyebrow={s.eyebrow}
      h1={s.h1}
      intro={s.intro}
      bullets={s.bullets}
      sections={s.sections}
      sources={s.sources}
      faqs={s.faqs}
      spokes={relatedSpokes}
      subPillarSlug={`tax-residency/${params.slug}`}
    />
  );
}
