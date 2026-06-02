import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { site, addressLine, strategyNav, footerNav } from '../data/site.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-graphite/15 bg-ink text-ivory/80">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-display text-lg text-marble">Senior Chess Academy</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ivory/70">{site.tagline}</p>
        </div>

        <nav aria-label="Strategy">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Learn</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {strategyNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-marble">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Academy</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-marble">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/blog" className="transition hover:text-marble">
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-ivory/80">
            <p>{addressLine}</p>
            <p>
              <a href={`mailto:${site.email}`} className="transition hover:text-marble">
                {site.email}
              </a>
            </p>
            <p>
              <a href={`tel:${site.phoneHref}`} className="transition hover:text-marble">
                {site.phone}
              </a>
            </p>
            <p className="text-ivory/60">{site.hours}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/60 sm:flex-row">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <Link to="/legal/privacy" className="hover:text-marble">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/legal/terms" className="hover:text-marble">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/legal/refund" className="hover:text-marble">
                Refund
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
