export interface CaseCompetitionEntry {
  eyebrow: string;
  title: string;
  description: string;
  fileHref: string;
}

// One entry per round/case. Add a new object here to publish another case
// competition — the page below just maps over this list.
export const caseCompetitions: CaseCompetitionEntry[] = [
  {
    eyebrow: 'De Beers Group Consulting Challenge, Ashoka University · Round 2',
    title: 'Listleri Packaging Transition Strategy',
    description:
      "Eliminate single-use plastic across all product lines — still water, carbonated drinks, and juice — without eroding market leadership. Our framework phased the transition across three stages: Compliance (Month 0–6, fast rollout through proven external suppliers), Optimisation (Month 6–18, reducing supplier dependency and launching a closed-loop deposit return scheme), and Ownership (Month 18+, developing an in-house R&D packaging blend and a fully closed-loop system positioned for licensing to other FMCGs).",
    fileHref: '/files/DeBeers_CaseComp.pdf',
  },
  {
    eyebrow: 'De Beers Group Consulting Challenge, Ashoka University · Semifinal / Round 3',
    title: 'Project Eternal',
    description:
      'Position India, which cuts and polishes 90% of the world\u2019s diamonds but consumes less than 6% domestically, as a growth market for natural diamonds against the rising lab-grown diamond threat. The recommendation repositioned natural diamonds around the irreplaceable value of geological time versus lab-grown diamonds\u2019 6\u201310 week manufacturing cycle, through a phased campaign comprising a social movement, artisan documentary series, Gen Z-first diamond-provenance app, and cultural ambassador. The proposal was backed by a \u20b93,250 Cr three-year investment plan.',
    fileHref: '/files/DeBeers_ProjectEternal.pdf',
  },
  {
    eyebrow: "IIMB National Student Case Competition '26 · Policy & Regulation Track",
    title: "DigiYatra's Expansion into Private-Sector Identity Services",
    description:
      "The case examined DigiYatra's proposed expansion into private-sector identity services such as hotel check-in and loyalty programmes. DigiYatra's biometric infrastructure is scaling rapidly, but its legal foundation has not kept pace: the DYBBS policy was never passed by Parliament, leaving DigiYatra Foundation without statutory enforcement authority even as DPDP Act obligations apply. The recommendation was to certify private-sector expansion immediately under a risk-tiered framework using purpose-bound tokenisation, mandatory pre-launch DPIAs, and a rule preventing raw biometric data from leaving the device, while pursuing statutory backing for the Foundation in parallel.",
    fileHref: '/files/IIMB_DigiYatra.pdf',
  },
  {
    eyebrow: 'SRCC Business Conclave 2026 · Maestro Case Competition',
    title: 'Project SilicoSphere',
    description:
      'Project SilicoSphere addressed a semiconductor company\u2019s geopolitical supply-chain concentration, with 88% of fabrication concentrated in the Taiwan\u2013Korea corridor and $120M+ of revenue exposed to a single point of failure. The recommendation was a 70/30 dual-node production architecture retaining the Taiwan\u2013Korea efficiency hub while developing a resilience hub in India and Vietnam, alongside a RISC-V-based IP sovereignty shift and a pivot towards higher-margin defence and government infrastructure contracts.',
    fileHref: '/files/SRCC_Maestro.pdf',
  },
];
