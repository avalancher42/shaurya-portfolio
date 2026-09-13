export interface PublishedPiece {
  title: string;
  url: string;
  description: string;
}

export interface DraftPiece {
  title: string;
  note: string;
}

// Live pieces — shown on /writing/. Add {title, url, description} here once
// something new is actually published; nothing else on the page needs editing.
export const publishedWriting: PublishedPiece[] = [
  {
    title: 'The Arithmetic India Keeps Ignoring',
    url: 'https://swarajyamag.com/economy/the-arithmetic-india-keeps-ignoring',
    description: 'On the growth accounting India tends to skip over.',
  },
  {
    title: 'Why Growth Matters and Why the Kind of Growth Matters More',
    url: 'https://swarajyamag.com/books/why-growth-matters-and-why-the-kind-of-growth-matters-more',
    description: 'An argument for why the quality of growth matters as much as its rate.',
  },
  {
    title: 'India Admired The Wrong Chinese City. It Should Have Studied The Province Next Door',
    url: 'https://swarajyamag.com/books/india-admired-the-wrong-chinese-city-it-should-have-studied-the-province-next-door',
    description: "A case for looking past China's headline megacities to its provincial growth story.",
  },
];

// Not yet live — kept here so they're one line away from publishWriting
// once they're actually up. Not rendered on the public site.
export const draftWriting: DraftPiece[] = [
  { title: 'A Sixth of Humanity', note: 'Critique of Subramanian & Kapur, on Dutch Disease.' },
  { title: 'Economic History of India', note: 'Commentary on Tirthankar Roy — labour absorption vs GDP.' },
  { title: 'A Culture of Growth', note: 'Review of Joel Mokyr.' },
];
