import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { primaryNav, site } from '../data/site.js';

const linkBase =
  'text-sm font-medium text-graphite transition duration-300 hover:text-walnut';
const linkActive = 'text-walnut';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-graphite/15 bg-marble/90 backdrop-blur">
      <nav className="container-wide flex items-center justify-between py-3" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Logo />
          <span className="font-display text-lg font-600 leading-tight text-matte">
            Senior Chess<span className="text-walnut"> Academy</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn-primary !py-2 !px-5">
              Get in touch
            </Link>
          </li>
        </ul>

        {/* Mobile navigation — native <details> works without JavaScript */}
        <details className="group relative lg:hidden">
          <summary
            className="flex cursor-pointer list-none items-center gap-2 rounded-lg border border-graphite/20 px-3 py-2 text-sm font-medium text-ink"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Menu
          </summary>
          <ul className="absolute right-0 mt-2 w-56 rounded-xl border border-graphite/15 bg-marble p-2 shadow-lift">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-ivory text-walnut' : 'text-ink hover:bg-ivory'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
