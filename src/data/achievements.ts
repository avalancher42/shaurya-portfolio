export interface Station {
  head: string[];   // bold title lines
  sub: string[];    // event / institution lines
  date: string;     // italic date line
  href?: string;    // optional link on the title
}

export interface TransitLine {
  id: 'red' | 'yellow' | 'green';
  name: string;
  colour: string;
  stations: Station[];
}

// Each line is a group of achievements; each station is one achievement.
// Add a station to a line (or a whole new line) here and the map redraws.
export const achievementLines: TransitLine[] = [
  {
    id: 'red',
    name: 'National finals',
    colour: '#C8102E',
    stations: [
      {
        head: ['National Finalist'],
        sub: ['National Policy Hackathon', 'IIM Calcutta & IIFT Kolkata'],
        date: '2026',
      },
      {
        head: ['National Finalist'],
        sub: ['Beyond 180', 'MDI Gurgaon'],
        date: '2026',
      },
    ],
  },
  {
    id: 'yellow',
    name: 'Semifinals & podium places',
    colour: '#F5B800',
    stations: [
      {
        head: ['Semifinalist'],
        sub: ['De Beers × Ashoka University', 'Consulting Competition'],
        date: '2026',
      },
      {
        head: ['2nd Runner-Up, Best Manager'],
        sub: ['Xavrang', 'St. Xavier University'],
        date: '2026',
      },
    ],
  },
  {
    id: 'green',
    name: 'Credentials & awards',
    colour: '#1E8E3E',
    stations: [
      {
        head: ['McKinsey Forward Program'],
        sub: ['McKinsey & Company'],
        date: 'October – December 2025',
        href: 'https://www.credly.com/badges/bb2a8c53-05ea-4194-a528-85f7e720791a/public_url',
      },
      {
        head: ['Bhattacharya Pursuit of', 'Excellence Award'],
        sub: ['Loyola School, Jamshedpur'],
        date: '2025–26',
      },
    ],
  },
];
