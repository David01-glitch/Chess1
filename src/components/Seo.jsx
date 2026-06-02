import { Head } from 'vite-react-ssg';
import { site } from '../data/site.js';

// Renders per-route <head> tags into the prerendered static HTML: title,
// description, canonical, Open Graph, Twitter Card, and optional JSON-LD blocks.
export default function Seo({ title, description, path = '/', jsonLd = [] }) {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
  const canonical = `${site.url}${path === '/' ? '' : path}`;
  const desc = description || site.description;
  const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
}
