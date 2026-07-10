import type { FileBlogPost } from '../registry';

const content = `
<p>
  Somewhere between booking the removal van and handing back the keys, every British mover
  has the same small panic: <strong>what happens to my UK bank account when I no longer
  have a UK address?</strong> The pension lands there. The direct debits live there. Forty
  years of banking history sits there. And the forums are full of horror stories about
  Barclays letters giving expats weeks to move their money.
</p>

<p>
  Here's the honest 2026 picture: usually you can keep it — but not always, not by
  default, and not by pretending you still live at your sister's place in Croydon. What
  actually happens, bank by bank, and the setup that makes the whole question relaxed.
</p>

<h2>Why banks started closing expat accounts</h2>

<p>
  Before Brexit, UK banks could "passport" their licence across the EU and serve a
  customer in Marbella as easily as one in Manchester. That ended in 2021: serving an
  EU-resident customer now means complying with that country's banking rules, bank by
  bank, country by country. Layer on the compliance cost of FATCA and the Common Reporting
  Standard — which force banks to track and report every customer's tax residency — and a
  few thousand expat current accounts stopped being worth the paperwork.
</p>

<p>
  The result: several high-street names — Barclays most famously, along with others —
  have written to customers in the EU closing their accounts, while other banks quietly
  tightened terms so a non-UK address breaches them. Policies differ by bank
  <em>and by country you're moving to</em>, and they change: the only answer that counts
  is your bank's current non-resident policy for Spain, in writing.
</p>

<h2>The one thing you must not do</h2>

<p>
  The forum favourite — keep the account registered at a family address and tell no one —
  is the worst available option. Banks cross-check: a Spanish IP every day, a Spanish
  mobile number, card usage that never leaves Andalucía. Under CRS your Spanish tax
  residency surfaces anyway, because the AEAT and HMRC exchange account data
  automatically. When the mismatch is spotted, accounts get frozen or closed <em>without
  the orderly notice period</em> you'd have had by being straight — potentially with your
  pension mid-flight to it. Using an address you don't live at is a breach of your
  account terms, and it buys you nothing: the honest route usually keeps the account
  open anyway.
</p>

<h2>What the honest route looks like</h2>

<ul>
  <li><strong>Before the move, ask your bank the exact question:</strong> "What is your
  policy for account holders resident in Spain?" Some keep you as-is with an overseas
  correspondence address. Some migrate you to an international arm — HSBC Expat, Lloyds
  International, NatWest International — typically with minimum balances (often
  £25,000–£100,000 deposited or invested) or monthly fees. Some give you notice to
  leave.</li>
  <li><strong>Open your replacement rails while you still have a UK address:</strong> a
  Spanish account for daily life (Bizum, utilities, rent) and a multi-currency account —
  Wise or Revolut — holding real GBP details and a EUR IBAN. Our
  <a href="/blog/how-to-transfer-money-uk-to-spain-2026">Wise vs Revolut vs banks
  breakdown</a> covers which to pick and what the FX actually costs.</li>
  <li><strong>Keep the UK account if they'll let you.</strong> A UK current account
  remains genuinely useful abroad: receiving your
  <a href="/blog/what-happens-to-my-uk-state-pension-if-i-move-to-spain">State Pension in
  sterling</a> so the DWP isn't doing your currency conversion, UK direct debits,
  returning-home optionality, and a credit history that dies if the account does.</li>
  <li><strong>Update your address and tax residency honestly</strong> — after the
  replacement rails are open and tested, not before.</li>
</ul>

<div class="rounded-xl border border-amber-200 bg-amber-50 p-5 my-6">
  <p class="font-semibold text-amber-900 mb-1">Sequence matters</p>
  <p class="text-amber-900">
    Everything above is easy with a UK address and nearly impossible without one. UK
    banks won't open new accounts for Spanish residents; even Wise and Revolut onboard
    more smoothly domestically. Set up the full stack — Spanish account, multi-currency
    account, international account if you want one — <em>before</em> moving day. It's
    week one of the <a href="/blog/cost-to-move-from-uk-to-spain-2026">moving
    checklist</a> for a reason.
  </p>
</div>

<h2>The bits nobody warns you about: ISAs, Premium Bonds and the AEAT</h2>

<p>
  Keeping the account is half the story. The wrapper products behave differently once
  you're Spanish tax resident:
</p>

<ul>
  <li><strong>ISAs:</strong> you can keep them, but you can't add new money once
  non-UK-resident — and the tax-free status is UK-only. Spain taxes ISA interest,
  dividends and gains like any other investment income, on the savings scale that runs
  19%–30% in 2026. An ISA that made perfect sense in Leeds is just a taxable account
  with a fee problem in Valencia — worth a planning conversation before you move.</li>
  <li><strong>Premium Bonds:</strong> you can hold them from Spain, but the prizes lose
  their magic — tax-free only in the UK, taxable income for a Spanish resident. Winning
  £1,000 and declaring it on your Modelo 100 is not the dream NS&amp;I sold you.</li>
  <li><strong>The AEAT already knows.</strong> Under CRS, UK institutions report your
  balances and income to Spain automatically. And once your combined foreign accounts
  pass €50,000, the <a href="/spain/tax-residency/modelo-720">Modelo 720
  declaration</a> applies — an information return with ugly penalties for silence.
  Neither is a reason to close anything; both are reasons to declare properly.</li>
</ul>

<h2>The setup that works in 2026</h2>

<p>
  The pattern that comes up again and again with movers who got it right:
  <strong>three accounts, each doing one job.</strong> A UK current account (kept honestly,
  or an international variant) for sterling income and UK life; a Wise or Revolut
  multi-currency account as the FX bridge; a Spanish bank account for everything local.
  Total running cost: often zero beyond FX spread. Total panic when a bank letter
  arrives: none, because no single closure can strand you.
</p>

<p>
  Same logic applies over the border — the
  <a href="/portugal/banking">Portugal banking guide</a> and
  <a href="/spain/banking">Spain banking deep dive</a> cover the local account half,
  including which banks open accounts before you have residency. And if your plan is
  half-year-in-each-country rather than a full move, you keep UK residency and none of
  this applies — but read
  <a href="/blog/can-i-live-in-spain-6-months-and-uk-6-months">what the 90/180 rule
  actually allows</a> before building on that assumption.
</p>

<p>
  The full banking module — account-opening scripts, the non-resident policies of the big
  six UK banks, Modelo 720 walkthrough — is in the
  <a href="/playbook/spain">Spain Playbook</a>, and every figure here is sourced on the
  <a href="/thresholds">2026 thresholds page</a>.
</p>
`;

export const post202607UkBankAccount: FileBlogPost = {
  id: 'file-2026-07-12-can-i-keep-my-uk-bank-account-if-i-move-to-spain',
  slug: 'can-i-keep-my-uk-bank-account-if-i-move-to-spain',
  title: 'Can I keep my UK bank account if I move to Spain?',
  excerpt:
    'Usually yes — but not by default, and never by pretending you still live at a family address. Which banks close expat accounts and why, the CRS data-sharing that makes hiding pointless, what happens to ISAs and Premium Bonds under Spanish tax, and the three-account setup that makes a Barclays letter a non-event. The 2026 picture, straight.',
  content,
  cover_image: '/blog/uk-bank-account-spain-2026.jpg',
  cover_image_alt:
    'A British bank card and phone beside a cortado on a café table in a sunlit Spanish plaza',
  category: 'Banking',
  read_time_minutes: 8,
  published_at: '2026-07-12T09:00:00.000Z',
  updated_at: '2026-07-12T09:00:00.000Z',
  author_name: 'Dominic Roworth',
  meta_title: 'Keep Your UK Bank Account After Moving to Spain? 2026 Rules',
  meta_description:
    'Can you keep your UK bank account when you move to Spain? Usually — but policies differ by bank, using a family address risks a frozen account, and CRS means Spain sees your balances anyway. The 2026 guide: expat account options, ISAs, Premium Bonds, Modelo 720.',
  tags: [
    'banking',
    'UK bank account',
    'expat banking',
    'Spain',
    'CRS',
    'ISA',
    'Premium Bonds',
    'Modelo 720',
    '2026',
  ],
  faqs: [
    {
      question: 'Will my UK bank close my account when I move to Spain?',
      answer:
        'It depends entirely on the bank. Since Brexit ended banking passporting, several high-street banks have closed accounts held by EU residents or tightened terms to require a UK address, while others keep serving expats directly or via international arms (HSBC Expat, Lloyds International, NatWest International — usually with minimum balances or fees). Ask your bank for its current written policy for Spanish residents before you move; policies vary by bank and destination country and change over time.',
    },
    {
      question: 'Do I have to tell my bank I\'ve moved abroad?',
      answer:
        'Yes. Your account terms almost certainly require accurate address and residency information, and banks must establish customers\' tax residency under CRS and FATCA. Not telling them risks a freeze or closure without notice once the mismatch is detected — and it will be, via IP addresses, card usage patterns and automatic tax-data exchange. Telling them usually goes better than the forums suggest: many movers keep their accounts with an overseas address on file.',
    },
    {
      question: 'Can I just use a family member\'s UK address for my bank?',
      answer:
        'You can, and plenty do — but it is a breach of your account terms, and it defeats nothing: under the Common Reporting Standard your Spanish tax residency is reported to the authorities regardless of the address on your statements. The realistic downside is not prosecution but an abrupt frozen or closed account at the worst possible moment, with none of the orderly notice an honest customer gets. Open proper replacement rails instead.',
    },
    {
      question: 'What happens to my ISA if I move to Spain?',
      answer:
        'You can keep existing ISAs but cannot contribute after the tax year you leave the UK. More importantly, the tax-free wrapper only works in the UK: as a Spanish resident, interest, dividends and gains inside your ISA are taxable in Spain on the savings scale (19%–30% in 2026), and the accounts count towards the Modelo 720 threshold. Many movers restructure before departure — this is genuinely worth advice for large ISA pots.',
    },
    {
      question: 'Are Premium Bonds still tax-free if I live in Spain?',
      answer:
        'No. You can hold Premium Bonds as a Spanish resident (NS&I permits it), but prize winnings are only tax-free under UK rules — Spain treats them as taxable income for its residents, declarable on your annual return. Combined with the sterling exposure and the Modelo 720 reporting threshold, most Spanish-resident holders conclude Premium Bonds no longer earn their place.',
    },
    {
      question: 'Will Spain know about my UK bank accounts?',
      answer:
        'Yes — automatically. Under the Common Reporting Standard, UK banks report non-resident customers\' balances, interest and account details to HMRC, which forwards them to the Spanish tax agency (AEAT) every year. Separately, once your total foreign assets pass €50,000 per category, Spain\'s Modelo 720 information declaration applies, with significant penalties for non-filing. The right response is clean declaration, not concealment.',
    },
    {
      question: 'What is the best banking setup for living in Spain?',
      answer:
        'Three accounts, one job each: a UK current account kept honestly (or an international/expat variant) for sterling income like pensions and any UK commitments; a multi-currency account such as Wise or Revolut with GBP details and a EUR IBAN as the exchange bridge; and a Spanish bank account for daily life — Bizum, rent, utilities and direct debits, which Spanish suppliers expect from a Spanish IBAN. Set all three up before you lose your UK address.',
    },
  ],
  canonical_url: null,
};
