import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { trackEvent } from '../utils/analytics.js';
import { site, addressLine } from '../data/site.js';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    trackEvent('contact_submit', { method: 'contact_form' });
    setSent(true);
  }

  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Contact Senior Chess Academy by email, phone, or mail. Real business identity, real people, weekday responses."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Senior Chess Academy',
          url: `${site.url}/contact`,
        }}
      />
      <PageHeader
        eyebrow="Contact"
        title="We would love to hear from you"
        lead="Questions about a guide, ideas for an article, or news of a chess club you are starting — every message reaches a real person on our team."
      />

      <section className="container-wide grid gap-12 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl">Reach the academy directly</h2>
          <p className="mt-3 text-graphite">
            Senior Chess Academy is an established blog and learning library based in Columbus, Ohio.
            We respond to messages on weekdays, usually within two business days.
          </p>

          <dl className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-ivory" aria-hidden="true">
                ✉
              </span>
              <div>
                <dt className="text-sm uppercase tracking-wide text-graphite/60">Email</dt>
                <dd className="text-lg">
                  <a href={`mailto:${site.email}`} className="text-walnut underline underline-offset-2">
                    {site.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-ivory" aria-hidden="true">
                ☎
              </span>
              <div>
                <dt className="text-sm uppercase tracking-wide text-graphite/60">Phone</dt>
                <dd className="text-lg">
                  <a href={`tel:${site.phoneHref}`} className="text-walnut underline underline-offset-2">
                    {site.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-ivory" aria-hidden="true">
                ⌂
              </span>
              <div>
                <dt className="text-sm uppercase tracking-wide text-graphite/60">Mailing address</dt>
                <dd className="text-lg not-italic">{addressLine}</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-ivory" aria-hidden="true">
                ◷
              </span>
              <div>
                <dt className="text-sm uppercase tracking-wide text-graphite/60">Hours</dt>
                <dd className="text-lg">{site.hours}</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="card p-6 sm:p-8">
          <h2 className="text-2xl">Send a message</h2>
          {sent ? (
            <p role="status" className="mt-6 rounded-xl border border-gold/40 bg-ivory p-6 text-ink">
              Thank you for writing to Senior Chess Academy. Your message has been noted and a member
              of our team will reply by email within two business days. For anything urgent, please
              call us at {site.phone}.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl border border-graphite/25 bg-marble px-4 py-3 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1 w-full rounded-xl border border-graphite/25 bg-marble px-4 py-3 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-ink">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-graphite/25 bg-marble px-4 py-3 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="mt-1 w-full rounded-xl border border-graphite/25 bg-marble px-4 py-3 focus:border-gold focus:outline-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send message
              </button>
              <p className="text-xs text-graphite/60">
                By sending this message you agree to our{' '}
                <a href="/legal/privacy" className="underline underline-offset-2">
                  Privacy Policy
                </a>
                . We will only use your details to reply to you.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
