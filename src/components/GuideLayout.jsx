import { Link } from 'react-router-dom';
import PageHeader from './PageHeader.jsx';
import images from '../assets/images.js';

const related = [
  { label: 'Opening Strategies', to: '/opening-strategies' },
  { label: 'Endgame Techniques', to: '/endgame-techniques' },
  { label: 'Chess for Brain Health', to: '/chess-for-brain-health' },
  { label: 'Classic Grandmasters', to: '/classic-grandmasters' },
  { label: 'Chess Puzzles', to: '/chess-puzzles' },
  { label: 'Tournament Guides', to: '/tournament-guides' },
];

// Shared two-column layout for the strategy guide pages: editorial header,
// long-form article column, and a sidebar with a hero image plus related links.
export default function GuideLayout({ eyebrow, title, lead, imageKey, imageAlt, current, children }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} lead={lead} />
      <section className="container-wide grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div className="prose-article max-w-prose">{children}</div>
        <aside className="space-y-6">
          <div className="overflow-hidden rounded-xl border border-graphite/15 shadow-soft">
            <img
              src={images[imageKey]}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              width="640"
              height="480"
              className="h-full w-full object-cover"
            />
          </div>
          <nav aria-label="Related guides" className="card p-6">
            <h2 className="text-lg">Related guides</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {related
                .filter((r) => r.to !== current)
                .map((r) => (
                  <li key={r.to}>
                    <Link to={r.to} className="text-walnut underline underline-offset-2">
                      {r.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link to="/blog" className="text-walnut underline underline-offset-2">
                  The full blog
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </section>
    </>
  );
}
