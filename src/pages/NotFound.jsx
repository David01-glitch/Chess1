import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { strategyNav } from '../data/site.js';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        path="/404"
        description="The page you were looking for could not be found. Explore our chess strategy guides instead."
      />
      <section className="container-wide flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 text-5xl sm:text-6xl">A move that isn’t on the board</h1>
        <p className="mt-5 max-w-xl text-lg text-graphite">
          The page you were looking for could not be found. It may have moved, or the link may be
          incomplete. No matter — every good player knows when to reposition.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
          <Link to="/blog" className="btn-outline">
            Browse the blog
          </Link>
        </div>
        <nav aria-label="Popular guides" className="mt-12 w-full max-w-2xl border-t border-graphite/15 pt-8">
          <h2 className="text-sm uppercase tracking-wide text-graphite/60">Popular guides</h2>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {strategyNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-walnut underline underline-offset-2">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}
