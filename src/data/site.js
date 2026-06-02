// Single source of truth for business identity, used in JSON-LD, footer,
// contact page, and meta tags. All values reflect the real business.
export const site = {
  name: 'Senior Chess Academy',
  shortName: 'SCA',
  tagline: 'Chess strategy and brain training, written for the unhurried mind.',
  description:
    'Senior Chess Academy is a chess strategy and brain-training blog designed for older adults. We publish patient, in-depth guides on openings, endgames, cognitive health, and the timeless art of the game.',
  url: 'https://www.seniorchessacademy.com',
  email: 'seniorchessacademy@gmail.com',
  phone: '(614) 428-7619',
  phoneHref: '+16144287619',
  address: {
    street: '390 Maple Grove Ln',
    city: 'Columbus',
    region: 'OH',
    postalCode: '43215',
    country: 'US',
  },
  founded: '2019',
  founder: 'Eleanor Whitfield',
  hours: 'Monday – Friday, 9:00 AM – 5:00 PM (Eastern)',
  gaId: 'G-4J046JXWVC',
};

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export const primaryNav = [
  { label: 'Home', to: '/' },
  { label: 'Strategy', to: '/opening-strategies' },
  { label: 'Brain Health', to: '/chess-for-brain-health' },
  { label: 'Blog', to: '/blog' },
  { label: 'Community', to: '/community' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const strategyNav = [
  { label: 'Opening Strategies', to: '/opening-strategies' },
  { label: 'Endgame Techniques', to: '/endgame-techniques' },
  { label: 'Chess for Brain Health', to: '/chess-for-brain-health' },
  { label: 'Classic Grandmasters', to: '/classic-grandmasters' },
  { label: 'Chess Puzzles', to: '/chess-puzzles' },
  { label: 'Tournament Guides', to: '/tournament-guides' },
];

export const footerNav = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/legal/privacy' },
  { label: 'Terms', to: '/legal/terms' },
  { label: 'Refund', to: '/legal/refund' },
];

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    foundingDate: site.founded,
    founder: { '@type': 'Person', name: site.founder },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone,
      email: site.email,
      contactType: 'customer support',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  };
}

export function faqJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
