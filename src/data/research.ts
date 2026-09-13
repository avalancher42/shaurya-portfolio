export interface ResearchPiece {
  slug: string;
  tag: string;
  title: string;
  description: string;
  keyFinding: string;
}

// Add a new entry here, and a matching page at src/pages/research/<slug>.astro,
// to publish another case study — the index card is generated from this list.
export const researchPieces: ResearchPiece[] = [
  {
    slug: 'the-missing-guarantee',
    tag: 'Credit-guarantee design',
    title: 'The Missing Guarantee',
    description:
      "A proposed AI and Deep-Tech Survival Bridge Guarantee (ADSBG), argued through the Tatas' 1907 financing gap and stress-tested against a Year-1 fee-to-payout shortfall.",
    keyFinding: 'Key finding: Rs 195 Cr Year-1 shortfall',
  },
  {
    slug: 'the-plough-and-the-guarantee',
    tag: 'Risk pricing',
    title: 'The Plough and the Guarantee',
    description:
      "A Bastiat-and-Kautilya reading of CGTMSE's flat guarantee fee, quantifying what uniform pricing costs against a risk-tiered alternative through FY30.",
    keyFinding: 'Key finding: Rs 15.02 lakh crore unpriced gap',
  },
  {
    slug: 'outcome-linked-transfer-framework',
    tag: 'Fiscal federalism',
    title: 'The Outcome-Linked Transfer Framework',
    description:
      "A pitch for restructuring India's intergovernmental transfers around measurable outcomes rather than input spending, built for the National Policy Hackathon at IIM Calcutta and IIFT Kolkata.",
    keyFinding: 'National Finalist — IIM Calcutta × IIFT Kolkata',
  },
];
