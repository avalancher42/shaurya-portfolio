export interface CaseRound {
  label?: string;
  title: string;
  description: string;
  fileHref: string;
}

export interface CaseCompetitionEntry {
  competition: string;
  track?: string;
  image?: string;
  rounds: CaseRound[];
}

// One entry per competition. An entry with more than one round renders as a
// single wide card with the rounds side by side. Add a new object here to
// publish another case competition — the page just maps over this list.
export const caseCompetitions: CaseCompetitionEntry[] = [
  {
    competition: 'De Beers Group Consulting Challenge, Ashoka University',
    image: '/images/diamond-debeers.jpg',
    rounds: [
      {
        label: 'Round 2',
        title: 'Listleri Packaging Transition Strategy',
        description:
          "Eliminate single-use plastic across all product lines — still water, carbonated drinks, and juice — without eroding market leadership. Our framework phased the transition across three stages: Compliance (Month 0–6, fast rollout through proven external suppliers), Optimisation (Month 6–18, reducing supplier dependency and launching a closed-loop deposit return scheme), and Ownership (Month 18+, developing an in-house R&D packaging blend and a fully closed-loop system positioned for licensing to other FMCGs).",
        fileHref: '/files/DeBeers_CaseComp.pdf',
      },
      {
        label: 'Semifinal / Round 3',
        title: 'Project Eternal',
        description:
          'Position India, which cuts and polishes 90% of the world\u2019s diamonds but consumes less than 6% domestically, as a growth market for natural diamonds against the rising lab-grown diamond threat. The recommendation repositioned natural diamonds around the irreplaceable value of geological time versus lab-grown diamonds\u2019 6\u201310 week manufacturing cycle, through a phased campaign comprising a social movement, artisan documentary series, Gen Z-first diamond-provenance app, and cultural ambassador. The proposal was backed by a \u20b93,250 Cr three-year investment plan.',
        fileHref: '/files/DeBeers_ProjectEternal.pdf',
      },
    ],
  },
  {
    competition: "IIMB National Student Case Competition '26",
    track: 'Centre for Digital Public Goods · Policy & Regulation Track',
    image: '/images/terminal-iimb.jpg',
    rounds: [
      {
        title: "DigiYatra's Expansion into Private-Sector Identity Services",
        description:
          "The case examined DigiYatra's proposed expansion into private-sector identity services such as hotel check-in and loyalty programmes. DigiYatra's biometric infrastructure is scaling rapidly, but its legal foundation has not kept pace: the DYBBS policy was never passed by Parliament, leaving DigiYatra Foundation without statutory enforcement authority even as DPDP Act obligations apply. The recommendation was to certify private-sector expansion immediately under a risk-tiered framework using purpose-bound tokenisation, mandatory pre-launch DPIAs, and a rule preventing raw biometric data from leaving the device, while pursuing statutory backing for the Foundation in parallel.",
        fileHref: '/files/IIMB_DigiYatra.pdf',
      },
    ],
  },
  {
    competition: 'SRCC Business Conclave 2026',
    track: 'Maestro Case Competition',
    image: '/images/cargo-srcc.jpg',
    rounds: [
      {
        title: 'Project SilicoSphere',
        description:
          'Project SilicoSphere addressed a semiconductor company\u2019s geopolitical supply-chain concentration, with 88% of fabrication concentrated in the Taiwan\u2013Korea corridor and $120M+ of revenue exposed to a single point of failure. The recommendation was a 70/30 dual-node production architecture retaining the Taiwan\u2013Korea efficiency hub while developing a resilience hub in India and Vietnam, alongside a RISC-V-based IP sovereignty shift and a pivot towards higher-margin defence and government infrastructure contracts.',
        fileHref: '/files/SRCC_Maestro.pdf',
      },
    ],
  },
  {
    competition: 'AETHERA 2026, IIT (ISM) Dhanbad',
    track: "Sustainability Consulting Challenge (CONCETTO'26) · Finalist, Top 10 of 280+ teams nationally",
    rounds: [
      {
        title: 'Pollutant to Product',
        description:
          "The brief asked how rice husk ash, an agricultural waste byproduct from rice mills, could be converted into battery-grade engineered silicon for India's growing lithium-ion anode market. The recommendation was a staged two-pathway model. Purified silica sales generate near-term revenue and prove the purification economics, while the higher-value engineered silicon pathway scales only after three sequential kill gates pass (material performance, customer qualification, and cost and carbon economics), which de-risks the capital commitment at each stage.",
        fileHref: '/files/Aethera_PollutantToProduct.pdf',
      },
    ],
  },
  {
    competition: "DealPlexus × The Incubation Centre (TIC), St. Stephen's College",
    track: 'Venture Circuit · Finalist',
    rounds: [
      {
        title: 'Strategic Growth Plan for DealPlexus',
        description:
          "The brief was to build DealPlexus, an Indian financial-services platform, from its current base to a ₹200 Cr revenue target over five years. The recommendation had three parts. A readiness-scoring framework routes advisory clients to the right capital path (private investment, SME listing, or 'get ready first') based on an evidence-based score. A trust-first redesign of the platform's angel fund, with independent deal approval, standardised documentation, and explicit per-deal consent, resolves the conflict-of-interest concerns. A gated, evidence-based expansion of cross-border acquisition debt structuring then extends into Gulf and Southeast Asian markets.",
        fileHref: '/files/DealPlexus_VentureCircuit.pdf',
      },
    ],
  },
];
