import type { FileBlogPost } from '../registry';

const content = `
<p>
  Within the first 30 days of a UK-to-Iberia move, every British mover faces the same question:
  what&apos;s the cheapest way to move money between my UK bank, my Spanish (or Portuguese,
  or Gibraltarian) bank, and the multi-currency wallets everyone keeps recommending? The
  honest 2026 answer is a three-account stack that costs you almost nothing — provided you
  set it up before you go. Done wrong, you bleed 1-3% on every transaction. Across a typical
  first year of moving £30,000-£80,000 in setup and ongoing income, that&apos;s £600-£2,400
  of avoidable FX cost.
</p>

<p>
  This is the 2026 sourced version — real fee structures, worked examples, country-specific
  quirks (Bizum in Spain, MB WAY in Portugal, GBP-zone Gibraltar), and the order to set up
  accounts in. It pairs with our
  <a href="/blog/cost-to-move-from-uk-to-spain-2026">full cost-of-moving breakdown</a> — the
  transfers this guide optimises are the ones that budget assumes.
</p>

<h2>The 30-second TL;DR</h2>

<p>
  For 95% of British movers in 2026, the optimal stack is:
</p>

<ol>
  <li><strong>Keep your UK bank account open</strong> (Monzo, Starling, HSBC, whoever) — your UK income and pension flows in here.</li>
  <li><strong>Use Wise as your FX engine</strong> for any UK→EUR transfer above £200. Mid-market rate plus ~0.4% fee.</li>
  <li><strong>Open a Spanish/Portuguese/Gibraltarian bank account</strong> for direct debits, local payments, salary if employed locally.</li>
  <li><strong>Add Revolut as a card-spending layer</strong> if you travel between UK and EU frequently.</li>
  <li><strong>Use a currency broker (Currencies Direct, OFX, TorFX) only for property-scale transfers</strong> above €30,000-€50,000 where the slim Wise spread starts to be beatable.</li>
</ol>

<p>
  Skip traditional UK→Spanish-bank wire transfers (worst rates of any option). Skip multi-currency
  &ldquo;world&rdquo; cards from UK high-street banks (still expensive in 2026). The Wise + local
  bank + UK account stack is the answer for almost everyone.
</p>

<h2>Why FX matters more than British movers think it does</h2>

<p>
  The size of the FX bleed surprises people. A worked example with realistic 2026 numbers:
  a couple moving from London to Valencia, transferring funds for their first year. They send
  £4,000 per month from UK income to Spanish current account for ongoing living costs, plus
  a one-off £15,000 setup transfer for deposit/agency/furniture.
</p>

<p>
  Annual flow: £48,000 × 12 monthly + £15,000 one-off = £63,000 of GBP→EUR conversion.
</p>

<ul>
  <li><strong>Via traditional Spanish bank wire (~2.5% all-in markup):</strong> £1,575 lost to FX over year one.</li>
  <li><strong>Via UK high-street bank international transfer (~3% all-in):</strong> £1,890 lost.</li>
  <li><strong>Via Wise (~0.5% effective):</strong> £315 lost.</li>
  <li><strong>Via Revolut Standard (free on weekdays, 1% weekend markup, varies by tier):</strong> £200-£500 depending on usage pattern.</li>
  <li><strong>Via currency broker (Currencies Direct, ~0.4% on volume):</strong> £252 lost.</li>
</ul>

<p>
  The difference between worst (traditional bank) and best (Wise) in year one alone is
  <strong>£1,260</strong>. Over a typical 5-year move that compounds to £6,300+. Almost nobody
  notices because the cost is buried in the exchange rate, not itemised as a fee.
</p>

<h2>How each option actually works in 2026</h2>

<h3>Wise (the default recommendation)</h3>

<p>
  Wise is a UK-regulated multi-currency account that holds balances in GBP, EUR, USD, and 50+
  other currencies. Conversions use the mid-market rate (the actual interbank rate) plus a
  flat fee that&apos;s typically 0.4-0.6% for GBP→EUR transfers in 2026. No hidden spread.
</p>

<ul>
  <li><strong>Fee on a £10,000 GBP→EUR transfer:</strong> roughly £45-£65 all-in.</li>
  <li><strong>Delivery time:</strong> usually instant for SEPA recipients; 1-3 hours for first-time recipient verification.</li>
  <li><strong>Free physical debit card:</strong> works at Spanish/Portuguese ATMs (no withdrawal fee on the first £200/month, then 1.75%).</li>
  <li><strong>EUR account details:</strong> Wise gives you a real Belgian IBAN you can use as your &ldquo;EUR account&rdquo; for receiving SEPA transfers — no Spanish/Portuguese bank required just to receive money.</li>
</ul>

<p>
  The only situation where Wise loses: very large transfers (€50,000+) where currency brokers
  can sometimes offer marginally better rates because they price by relationship, not per-
  transaction.
</p>

<h3>Revolut</h3>

<p>
  Revolut is a European-licensed app-based account that handles multi-currency, card spending,
  and FX. Three tiers in 2026: Standard (free), Premium (£7.99/month), Metal (£14.99/month).
</p>

<ul>
  <li><strong>FX rates:</strong> mid-market on weekdays within monthly limits (£1,000/month free on Standard); 1% markup outside that. Weekends always add 0.5-1.5% extra markup. Premium and Metal lift the free limits substantially.</li>
  <li><strong>Card spending:</strong> excellent abroad — fee-free up to monthly limits, then 2%.</li>
  <li><strong>ATM withdrawals:</strong> £200/month free on Standard; higher on paid tiers.</li>
  <li><strong>Receiving GBP:</strong> Standard accounts get a UK sort code + account number for GBP payments.</li>
</ul>

<p>
  Revolut is excellent for card-spending and small frequent FX (e.g. paying a Spanish supplier
  £400, withdrawing €200 from an ATM in Lisbon). For larger one-off transfers Wise typically
  beats it on transparency and weekend pricing.
</p>

<h3>Currencies Direct / OFX / TorFX (currency brokers)</h3>

<p>
  Currency brokers occupy a middle ground between Wise and traditional banks. They give you a
  relationship manager, lock-in rates for forward contracts, and can offer below-Wise pricing
  on large volumes. For typical British movers they&apos;re overkill — but for property
  purchase transfers above €50,000, they often win.
</p>

<ul>
  <li><strong>Typical markup:</strong> 0.3-0.8% on transfers above £10,000; up to 1.5% on smaller transfers.</li>
  <li><strong>Forward contracts:</strong> lock in today&apos;s rate for a future transfer (useful for property purchase scheduled in 3-6 months).</li>
  <li><strong>Delivery:</strong> same-day or next-day to Spanish bank account.</li>
  <li><strong>Catch:</strong> minimum transaction often £1,000-£5,000.</li>
</ul>

<p>
  Currencies Direct has the largest Iberia presence — Spanish-based support, English-speaking
  account managers in Marbella and Mallorca offices. OFX and TorFX are similar; choose by
  whoever offers you the better quoted rate on your specific transfer.
</p>

<h3>Traditional Spanish, Portuguese, Gibraltarian bank wires</h3>

<p>
  The default option if you do nothing. UK bank wires GBP to Spanish bank, Spanish bank
  converts at its own rate, you receive the EUR. Almost always the worst option in 2026.
</p>

<ul>
  <li><strong>Spanish bank receiving markup:</strong> typically 1-2.5% spread vs mid-market.</li>
  <li><strong>UK bank sending fee:</strong> £10-£25 per international transfer (waived by some digital banks).</li>
  <li><strong>Delivery time:</strong> 2-5 business days.</li>
  <li><strong>Visibility of cost:</strong> opaque. The bank doesn&apos;t itemise the FX spread; you just see &ldquo;EUR received&rdquo; on the other end.</li>
</ul>

<p>
  Used only when your Spanish bank requires a specific named source for a regulatory reason
  (rare). Otherwise this is the FX bleed pattern most British movers fall into by default.
</p>

<h2>Country-specific quirks you need to know</h2>

<h3>Spain: Bizum is the killer app</h3>

<p>
  Bizum is Spain&apos;s instant peer-to-peer payment system, integrated into every major
  Spanish bank&apos;s app. You send EUR to anyone&apos;s mobile number instantly, free. It
  handles 90% of day-to-day Spanish life — splitting a restaurant bill, paying the cleaner,
  refunding a friend, paying the local plumber. Bizum is bank-account-linked, so you need a
  Spanish bank account (or some Spanish-licensed e-money provider) to use it.
</p>

<p>
  Wise and Revolut do NOT integrate with Bizum. If you try to live in Spain without a real
  Spanish bank account using only Wise/Revolut, you&apos;ll be the only person at the dinner
  table who can&apos;t pay your share via Bizum. This is the single biggest reason almost
  every Spanish-resident British mover ends up with a Spanish bank account in year one — see
  the <a href="/spain/banking">Spain banking deep dive</a> for the best options.
</p>

<h3>Portugal: MB WAY plays the same role</h3>

<p>
  Portugal&apos;s equivalent is MB WAY, run by the Portuguese banking cooperative. Same logic
  as Bizum — instant P2P, mobile-linked, requires a Portuguese bank account. Multicare,
  Médis, ActivoBank and Millennium BCP all support it. Same recommendation as Spain: open a
  Portuguese bank account in year one for MB WAY access alone. See{' '}
  <a href="/portugal/banking">/portugal/banking</a>.
</p>

<h3>Gibraltar: Sterling-zone advantage</h3>

<p>
  Gibraltar is in the sterling area — same currency as the UK. The whole FX question doesn&apos;t
  apply for Gibraltar residents on Gibraltar-side income; you just use a Gibraltar GBP account
  and your UK GBP account interchangeably. The exception: if you live Spain-side (frontier
  worker pattern) and need to spend EUR for Spanish daily life, Wise + EUR account becomes
  the bridge. See <a href="/gibraltar/banking">/gibraltar/banking</a> and the{' '}
  <a href="/gibraltar/frontier-worker">frontier-worker deep dive</a>.
</p>

<h2>The optimal stack by mover profile</h2>

<h3>Single working-age remote worker on the DNV</h3>

<ul>
  <li><strong>UK bank:</strong> Monzo or Starling (free, app-based, easy international wires).</li>
  <li><strong>Wise:</strong> as the FX engine. Monthly GBP→EUR conversion of income.</li>
  <li><strong>Spanish bank:</strong> Sabadell Expat or BBVA Online for Bizum and direct debits.</li>
  <li><strong>Revolut:</strong> optional. Useful for travel between UK and EU.</li>
</ul>

<h3>Family of 4 with school fees and a Spanish mortgage</h3>

<ul>
  <li><strong>UK bank:</strong> retain main UK account for any remaining UK income.</li>
  <li><strong>Wise:</strong> monthly income transfer + school-fee transfers.</li>
  <li><strong>Spanish bank:</strong> Santander One or Sabadell — needed for the mortgage direct debit and salary deposit (Beckham Law route requires Spanish payroll).</li>
  <li><strong>Currencies Direct or Currencies UK:</strong> only for the one-off property-purchase deposit transfer.</li>
</ul>

<h3>UK pensioner retiring to the Algarve on D7</h3>

<ul>
  <li><strong>UK bank:</strong> retain for state pension and any UK savings.</li>
  <li><strong>Wise:</strong> monthly pension transfer to EUR (consistent 0.4-0.5% beats UK bank international wires).</li>
  <li><strong>Portuguese bank:</strong> ActivoBank or Millennium BCP for MB WAY, utility direct debits, local life.</li>
  <li><strong>Revolut Premium (£7.99/mo):</strong> often worth it for the higher fee-free FX limits and travel insurance bundled.</li>
</ul>

<h3>HNW Cat 2 holder living in Gibraltar</h3>

<ul>
  <li><strong>UK bank:</strong> retain (GBP zone, no FX needed for UK income).</li>
  <li><strong>Gibraltar bank:</strong> Gibraltar International Bank or NatWest International — GBP-denominated.</li>
  <li><strong>EUR account (Wise or similar):</strong> only if you spend EUR regularly for Spanish-side life or travel.</li>
</ul>

<h2>Pre-move: the account opening sequence</h2>

<p>
  The single biggest mistake British movers make is waiting until they arrive in Spain to open
  any of these accounts. The right pre-move sequence:
</p>

<ol>
  <li><strong>3 months before move:</strong> open Wise (5-10 minute online application, free).</li>
  <li><strong>3 months before move:</strong> open Revolut (5-10 minute online application, free Standard tier).</li>
  <li><strong>2-3 months before move:</strong> obtain Spanish NIE remotely via a lawyer or fiscal representative. Cost ~£100-£200.</li>
  <li><strong>2 months before move:</strong> open a Spanish bank account remotely. Some banks (BBVA, Sabadell&apos;s expat stream) accept remote opening with NIE + passport + Wise/UK bank reference. Others need in-person.</li>
  <li><strong>1 month before move:</strong> for Portugal, obtain NIF + Portuguese bank account remotely (ActivoBank does the cleanest remote onboarding for D7/D8 applicants). See <a href="/portugal/nif">/portugal/nif</a>.</li>
  <li><strong>Arrival week:</strong> verify all accounts are active, do a small £100 test transfer through each, identify any onboarding issues while you&apos;re fresh.</li>
</ol>

<p>
  Arriving with Wise + Revolut + Spanish/Portuguese bank already operational means you can rent,
  pay agency fees, set up utilities and pay your asesor on day one. Arriving with none of these
  set up means a 4-8 week scramble in which everything stalls.
</p>

<h2>The property transfer: where the rules change</h2>

<p>
  If you&apos;re buying property — particularly anywhere above €200,000 — the FX strategy shifts.
  A property purchase typically involves a 10% deposit at signing (€20,000-€100,000+) and a final
  balance at completion (the rest, often 3-12 weeks later). Two specific factors matter:
</p>

<ol>
  <li><strong>Volume pricing:</strong> currency brokers price below Wise for one-off transfers above ~€50,000. On a €80,000 transfer, the difference can be £300-£600.</li>
  <li><strong>Forward contracts:</strong> brokers let you lock in today&apos;s rate for completion 3-6 months out, protecting against GBP/EUR moves. Wise doesn&apos;t offer this.</li>
</ol>

<p>
  For a typical €400,000 Spanish property purchase by a British buyer in 2026, the FX broker
  saves around £2,000-£4,000 vs Wise on the property-purchase transfers alone — often enough
  to justify the broker relationship for the property leg, while continuing to use Wise for
  ongoing monthly income flow.
</p>

<h2>Hidden costs nobody talks about</h2>

<ul>
  <li><strong>Weekend FX surcharges on Revolut.</strong> The 0.5-1.5% weekend markup catches people who do their personal admin on a Saturday. Either upgrade to Premium/Metal or do FX on weekdays only.</li>
  <li><strong>Spanish bank monthly maintenance fees.</strong> Some Spanish accounts charge €10-€20/month if conditions (salary deposit, direct debits, account balance) aren&apos;t met. Sabadell Expat and BBVA Online both have free tiers with reasonable conditions; check the small print.</li>
  <li><strong>UK bank international transfer fees.</strong> HSBC, Barclays, Lloyds, NatWest all charge £4-£25 per international wire. Monzo and Starling are usually free for outgoing international transfers but apply their own FX markup if you don&apos;t route through Wise.</li>
  <li><strong>ATM withdrawal fees.</strong> Outside of Wise/Revolut free limits, ATM withdrawal abroad costs 1.5-3% plus a fixed fee. Use Wise/Revolut for cash; avoid using UK debit cards.</li>
  <li><strong>Cross-border non-resident landlord withholding.</strong> If you&apos;re a UK landlord with rental income going to a UK bank, then transferring to Spain, you need NRL1i form filed with HMRC or 20% gets withheld at source. Separate from FX but lives in the same mental category.</li>
  <li><strong>The Bizum-absence tax.</strong> Not a real fee, but trying to live in Spain without Bizum (because you only have Wise) leads to constant small frictions — splitting bills, paying tradesmen, transferring to friends. Worth opening a Spanish account for Bizum alone, even if your main banking is Wise.</li>
</ul>

<h2>Worked example: family of 4 in their first 6 months in Málaga</h2>

<p>
  A family of 4 moves from Manchester to Málaga in September 2026. Two working adults on
  DNV/autónomo, two school-age children. UK income £8,000/month total, transferring most of
  it to Spain monthly. Plus a one-off £25,000 setup transfer for deposit, agency, furniture,
  and first-month school fees.
</p>

<p>
  First-6-month flow: £48,000 ongoing + £25,000 setup = £73,000 of GBP→EUR conversion.
</p>

<table>
  <thead>
    <tr><th>Method</th><th>Effective markup</th><th>FX cost over 6 months</th></tr>
  </thead>
  <tbody>
    <tr><td>Traditional Spanish bank wire</td><td>~2.5%</td><td>£1,825</td></tr>
    <tr><td>UK high-street bank international</td><td>~3%</td><td>£2,190</td></tr>
    <tr><td>Wise (monthly + setup)</td><td>~0.5%</td><td>£365</td></tr>
    <tr><td>Currencies Direct (setup) + Wise (monthly)</td><td>~0.5%</td><td>£365 (similar; broker saves marginally on setup)</td></tr>
    <tr><td>Revolut Standard (mixed weekday/weekend)</td><td>~1%</td><td>£730</td></tr>
    <tr><td>Revolut Premium (£7.99/mo, higher limits)</td><td>~0.4%</td><td>£292 + £48 subscription = £340</td></tr>
  </tbody>
</table>

<p>
  Best outcome (Wise or Revolut Premium): roughly £340-£365. Worst outcome (UK high-street
  bank): £2,190. The gap is £1,850 in 6 months — about &euro;2,150 — and it&apos;s entirely
  invisible if you let the default option happen.
</p>

<p>
  Retirees moving on pension income: the visa side of your money flow is covered in the
  <a href="/blog/portugal-d7-visa-british-retirees-2026">Portugal D7 guide</a> and the
  <a href="/blog/spain-non-lucrative-visa-british-retirees-2026">Spain NLV guide</a> — both
  visas care about exactly the income evidence these transfers create. And if your plan is
  half the year in Spain and half in the UK rather than a full move, read
  <a href="/blog/can-i-live-in-spain-6-months-and-uk-6-months">whether 6 months Spain /
  6 months UK actually works in 2026</a> before you set up any recurring transfer — the
  90/180 rule caps the no-visa version at far less time than most people assume.
</p>

<h2>Common mistakes British movers make</h2>

<ul>
  <li><strong>Closing the UK bank account before opening the Spanish one.</strong> You end up with no account at all for 2-4 weeks. Keep the UK account running for at least 12 months.</li>
  <li><strong>Using HSBC or Barclays international wire for monthly income transfer.</strong> The opaque spread eats £80-£200/month of income for a typical mover.</li>
  <li><strong>Forgetting Wise has a real EUR IBAN.</strong> You can give the Wise EUR IBAN to your UK employer/pension provider and receive EUR directly without ever touching a Spanish bank wire.</li>
  <li><strong>Buying GBP→EUR on a Saturday via Revolut Standard.</strong> 1.5% weekend markup. Always weekday or upgrade tier.</li>
  <li><strong>Skipping the Spanish bank account &ldquo;because Wise covers everything.&rdquo;</strong> Until you try to pay your share at dinner via Bizum, or set up an electricity direct debit, you don&apos;t realise how much Spanish daily life assumes you have a Spanish bank.</li>
  <li><strong>Using a currency broker for £200 transfers.</strong> Brokers&apos; minimums and small-transfer markups make them expensive for monthly income. Wise wins below €30,000.</li>
  <li><strong>Letting the GBP balance accumulate in the EUR account.</strong> Wise doesn&apos;t auto-convert; if you accidentally hold £8,000 in GBP inside Wise expecting it to be EUR, you&apos;ve exposed yourself to GBP/EUR moves without protection. Convert promptly after transferring in.</li>
</ul>

<h2>The bottom line</h2>

<p>
  The single largest piece of advice: <strong>open Wise + your Spanish/Portuguese bank
  account before you leave the UK</strong>. Done in advance, both are free; done in panic in
  month one, both cost you weeks. Run Wise as your FX engine. Run the local bank for direct
  debits and the local instant-payment app (Bizum/MB WAY). Keep your UK bank for UK-side
  income. Add Revolut if you travel between UK and EU often. Add a currency broker only for
  property-scale transfers.
</p>

<p>
  The £1,000-£2,000 of FX bleed in year one isn&apos;t inevitable. It&apos;s the cost of
  defaulting to the wrong stack. Building the right stack takes 30 minutes of pre-move admin
  and pays for itself within the first month.
</p>

<p>
  For the country-specific bank options the playbook walks through:
  <a href="/spain/banking">/spain/banking</a>,
  <a href="/portugal/banking">/portugal/banking</a>,
  <a href="/gibraltar/banking">/gibraltar/banking</a>. For the side-by-side bank comparator
  including Wise and Revolut, see the
  <a href="/calculators/bank-comparator">free bank comparator tool</a>.
</p>
`;

export const post202605WiseRevolut: FileBlogPost = {
  id: 'file-2026-05-27-wise-vs-revolut-vs-spanish-bank-fx',
  slug: 'how-to-transfer-money-uk-to-spain-2026',
  title: 'How to Transfer Money from the UK to Spain in 2026: Wise vs Revolut vs Banks',
  excerpt:
    'The 2026 FX stack for British movers — sourced. Wise (~0.5%), Revolut, currency brokers (Currencies Direct, OFX), or traditional bank wires (~2.5%). On £63,000 of year-one transfers the gap between best and worst is £1,260. Worked examples for solo movers, families, retirees, Gibraltar Cat 2. Plus the Bizum / MB WAY trap nobody warns you about.',
  content,
  cover_image: '/blog/transfer-money-uk-spain-2026.jpg',
  cover_image_alt:
    'Airplane wing over the Mediterranean coast at sunset — moving money and life from the UK to Spain',
  category: 'Banking',
  read_time_minutes: 10,
  published_at: '2026-05-27T07:00:00.000Z',
  updated_at: '2026-05-27T07:00:00.000Z',
  author_name: 'Dominic Roworth',
  meta_title: 'Wise vs Revolut vs Spanish Bank 2026: UK to Iberia FX Strategy',
  meta_description:
    'How British movers should transfer money UK to Spain, Portugal or Gibraltar in 2026. Wise ~0.5%, Revolut, currency brokers, vs traditional bank wires ~2.5%. Worked examples + pre-move account opening sequence.',
  tags: [
    'Banking',
    'Wise',
    'Revolut',
    'FX',
    'Currency transfer',
    'Bizum',
    'MB WAY',
    'British expat',
    '2026',
  ],
  faqs: [
    {
      question: 'Is Wise really cheaper than my UK bank for transferring money to Spain?',
      answer:
        'Almost always yes. Wise charges approximately 0.4-0.6% all-in for GBP→EUR transfers in 2026, using the mid-market rate plus a transparent fee. Traditional UK bank international wires typically cost 2-3% in opaque spread plus £10-£25 per transfer. On a £10,000 transfer Wise costs roughly £45-£65; a UK high-street bank costs £200-£300. Over a year of typical mover-level transfers the gap can exceed £1,200.',
    },
    {
      question: 'Do I really need a Spanish bank account if I have Wise?',
      answer:
        'Yes, for practical Spanish life. Wise doesn\'t integrate with Bizum, Spain\'s instant peer-to-peer payment app used for splitting restaurant bills, paying cleaners, transferring to friends. Spanish banks also handle utility direct debits more reliably than Wise. Most British movers run a stack: Wise for FX, a Spanish bank (Sabadell Expat, BBVA Online, Santander) for Bizum and direct debits, UK bank for UK income. See /spain/banking for the bank-by-bank comparison.',
    },
    {
      question: 'Wise vs Revolut — which is better for British movers?',
      answer:
        'They\'re complementary rather than competing. Wise is better for one-off larger FX transfers (transparent 0.4-0.6%, no weekend markup, real EUR IBAN). Revolut is better for card spending abroad (free up to monthly limits) and travel between UK and EU. Most British movers use both: Wise for monthly income transfer, Revolut for card payments and small ATM withdrawals. Revolut\'s weekend FX markup (0.5-1.5%) is the main pitfall to avoid on Standard tier.',
    },
    {
      question: 'When should I use a currency broker like Currencies Direct or OFX?',
      answer:
        'Only for property-scale transfers above €30,000-€50,000. Brokers can offer marginally better rates than Wise on volume (saving £300-£600 on an €80,000 transfer) and crucially can offer forward contracts to lock in today\'s rate for a completion 3-6 months out. For monthly income transfers and amounts below €30,000, Wise is cheaper and simpler.',
    },
    {
      question: 'Can I open a Spanish or Portuguese bank account before I move?',
      answer:
        'Yes — and you should. BBVA Online and Sabadell Expat both accept remote Spanish account opening with NIE + passport. ActivoBank in Portugal handles remote D7/D8 onboarding cleanly. Allow 2-4 weeks for activation. Combined with Wise (5-minute online application) and Revolut (same), you can arrive in Spain or Portugal with the full FX stack already operational, ready to pay your first rental deposit and utility setup on day one.',
    },
    {
      question: 'What is Bizum and why does it matter so much?',
      answer:
        'Bizum is Spain\'s instant peer-to-peer payment system, integrated into every major Spanish bank\'s mobile app. You send EUR to anyone\'s mobile number instantly and free. Used for almost every casual Spanish transaction — splitting restaurant bills, paying the cleaner, refunding friends, paying the local plumber. Wise and Revolut do not support Bizum. Without a Spanish bank account, you can\'t use Bizum, which makes ordinary Spanish social and small-business life surprisingly inconvenient. Portugal\'s equivalent is MB WAY.',
    },
    {
      question: 'What\'s the optimal FX stack for a typical British family moving to Spain?',
      answer:
        'For a working family on DNV or NLV: (1) Keep your UK current account open for UK income. (2) Use Wise as the FX engine — monthly income transfer GBP→EUR at ~0.4-0.5%. (3) Open a Spanish bank account (Sabadell Expat, BBVA Online or Santander One) for Bizum, direct debits, school fees, salary deposit. (4) Optional Revolut Premium (£7.99/mo) if you travel UK↔EU frequently. Skip currency brokers unless you\'re buying property above €200,000. This stack costs roughly £340-£365 in FX over a typical first 6 months versus £1,800-£2,200 for the default-UK-bank-international-wire pattern.',
    },
  ],
  canonical_url: null,
};
