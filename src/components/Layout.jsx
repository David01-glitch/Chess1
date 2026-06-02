import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import CookieBanner from './CookieBanner.jsx';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-marble">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-matte focus:px-4 focus:py-2 focus:text-marble"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
