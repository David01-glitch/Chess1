import { Link } from 'react-router-dom';
import PageHeader from './PageHeader.jsx';

export default function LegalLayout({ title, updated, intro, children }) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} lead={intro} />
      <section className="container-wide grid gap-12 py-16 lg:grid-cols-[1fr_3fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm text-graphite/70">Last updated: {updated}</p>
          <nav aria-label="Legal pages" className="mt-4 space-y-2 text-sm">
            <Link to="/legal/privacy" className="block text-walnut underline underline-offset-2">
              Privacy Policy
            </Link>
            <Link to="/legal/terms" className="block text-walnut underline underline-offset-2">
              Terms of Service
            </Link>
            <Link to="/legal/refund" className="block text-walnut underline underline-offset-2">
              Refund Policy
            </Link>
          </nav>
        </aside>
        <div className="prose-article max-w-prose">{children}</div>
      </section>
    </>
  );
}
