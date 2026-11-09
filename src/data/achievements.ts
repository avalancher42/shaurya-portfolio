export interface Cta {
  label: string;
  href: string;
  external?: boolean;
}

export interface Station {
  id: string;
  label: string[];        // short caption lines drawn on the map
  year: string;
  name: string;           // title in the side panel
  institution?: string;   // left out when none is given
  overview: string;
  highlights: string[];   // only what is actually listed; never padded
  cta?: Cta;              // the blue button at the bottom of the panel
}

export interface Branch {
  id: string;
  name: string;
  colour: string;
  chipText: string;       // readable text colour on this line's chip
  stations: Station[];
}

// Start of the map: a plain named station, then a deliberately blurred stretch.
export const startStation = { name: 'Loyola School, Jamshedpur', lines: ['Loyola School,', 'Jamshedpur'] };
// The interchange where the line comes back into focus and splits.
export const hub = { name: "St. Xavier\u2019s College", sub: 'Transit Hub' };
export const blurFrom = '#9AA5AD';
export const blurTo = '#0F3D56';

// Add a station to a branch (or a whole branch) here and the map redraws itself.
export const branches: Branch[] = [
  {
    id: 'national-finals',
    name: 'National Finals',
    colour: '#0F3D56',
    chipText: '#ffffff',
    stations: [
      {
        id: 'beyond-180',
        label: ['Beyond 180'],
        year: '2026',
        name: 'Beyond 180',
        institution: 'MDI Gurgaon',
        overview: 'National finalist in a business strategy case competition.',
        highlights: ['National Finalist, 5th position'],
      },
      {
        id: 'policy-hackathon',
        label: ['National Policy', 'Hackathon'],
        year: '2026',
        name: 'National Policy Hackathon',
        institution: 'IIM Calcutta & IIFT Kolkata',
        overview:
          'National finalist in a fiscal federalism policy challenge, competing in the finals against MBA and PhD teams.',
        highlights: [
          'Competed in the final round against MBA and PhD teams',
          'Proposed an Outcome-Linked Social Sector Transfer Framework using a Social Deprivation Index to replace input-based grants',
          'Designed a phased, budget-neutral 3-year rollout using existing government infrastructure (PFMS)',
        ],
        cta: { label: 'See the Research', href: '/research/outcome-linked-transfer-framework/' },
      },
      {
        id: 'aethera',
        label: ['AETHERA'],
        year: '2026',
        name: 'AETHERA',
        institution: 'IIT (ISM) Dhanbad',
        overview:
          'Finalist, Top 10 of 280+ teams nationally, in a sustainability consulting challenge on converting agricultural waste into battery-grade silicon.',
        highlights: [
          'Finalist, Top 10 of 280+ teams nationally',
          'Proposed converting rice husk ash, an agricultural waste byproduct, into battery-grade engineered silicon',
          'Designed a staged two-pathway model with three sequential kill-gates to de-risk capital commitment',
        ],
        cta: { label: 'See the Case Competition', href: '/case-competitions/#aethera' },
      },
      {
        id: 'dealplexus-tic',
        label: ['DealPlexus \u00d7 TIC'],
        year: '2026',
        name: 'DealPlexus \u00d7 TIC',
        institution: "St. Stephen\u2019s College",
        overview: 'National finalist in a financial-services growth strategy case competition.',
        highlights: [
          'National Finalist',
          'Designed a readiness-scoring framework to route advisory clients to the right capital path (private investment vs. SME listing)',
          "Proposed a trust-first redesign of the platform\u2019s angel fund and a gated plan for cross-border acquisition debt expansion",
        ],
        cta: { label: 'See the Case Competition', href: '/case-competitions/#dealplexus' },
      },
    ],
  },
  {
    id: 'semifinals-finalists',
    name: 'Semifinals & Finalists',
    colour: '#84B3CE',
    chipText: '#111111',
    stations: [
      {
        id: 'tata-imagination',
        label: ['Tata Imagination', 'Challenge'],
        year: '2025',
        name: 'Tata Imagination Challenge',
        overview: 'National semi-finalist in an open-innovation case challenge.',
        highlights: ['National Semi-Finalist'],
      },
      {
        id: 'de-beers',
        label: ['De Beers \u00d7 Ashoka', 'University'],
        year: '2026',
        name: 'De Beers \u00d7 Ashoka University',
        overview: 'Semifinalist across two rounds of a diamond-industry market positioning case.',
        highlights: [
          'Semifinalist across two rounds of the competition',
          'Round 2: proposed a phased single-use-plastic elimination strategy for a packaging transition case',
          'Round 3 (Semifinal): repositioned natural diamonds around irreplaceable geological time against the lab-grown diamond threat',
        ],
        cta: { label: 'See the Case Competition', href: '/case-competitions/#de-beers' },
      },
      {
        id: 'xavrang',
        label: ['Xavrang'],
        year: '2026',
        name: 'Xavrang',
        institution: 'St. Xavier University',
        overview: '2nd Runner-Up and Best Manager in a business strategy simulation.',
        highlights: ['2nd Runner-Up', 'Awarded Best Manager'],
      },
    ],
  },
  {
    id: 'certifications',
    name: 'Certifications',
    colour: '#1A1A1A',
    chipText: '#ffffff',
    stations: [
      {
        id: 'mckinsey',
        label: ['McKinsey', 'Forward Program'],
        year: '2025',
        name: 'McKinsey Forward Program',
        institution: 'McKinsey & Company',
        overview: 'A professional business-skills certification programme by McKinsey & Company.',
        highlights: ['Completed October\u2013December 2025', 'Credly-verified credential'],
        cta: {
          label: 'View credential',
          href: 'https://www.credly.com/badges/bb2a8c53-05ea-4194-a528-85f7e720791a/public_url',
          external: true,
        },
      },
    ],
  },
  {
    id: 'academic',
    name: 'Academic',
    colour: '#A89A82',
    chipText: '#111111',
    stations: [
      {
        id: 'bhattacharya',
        label: ['Bhattacharya Pursuit', 'of Excellence Award'],
        year: '2025\u201326',
        name: 'Bhattacharya Pursuit of Excellence Award',
        institution: 'Loyola School, Jamshedpur',
        overview:
          'Awarded for consistent attendance, discipline, and academic performance across the school year.',
        highlights: [
          'Awarded for consistent attendance and discipline',
          'Recognised for steady academic performance across the school year',
        ],
      },
    ],
  },
];
