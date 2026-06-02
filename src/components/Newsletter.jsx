import { useState } from 'react';
import { trackEvent } from '../utils/analytics.js';

// Accessible newsletter signup. With JavaScript it confirms inline; with JS off
// the form and its labels remain fully present and readable in the HTML.
export default function Newsletter() {
  const [done, setDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    trackEvent('newsletter_signup', { method: 'inline_form' });
    setDone(true);
  }

  return (
    <section aria-labelledby="newsletter-heading" className="bg-matte text-ivory">
      <div className="container-wide grid items-center gap-8 py-16 md:grid-cols-2">
        <div>
          <p className="eyebrow !text-gold">The Weekly Gambit</p>
          <h2 id="newsletter-heading" className="mt-3 text-3xl text-marble sm:text-4xl">
            One thoughtful chess lesson, every Sunday morning.
          </h2>
          <p className="mt-4 max-w-xl text-ivory/75">
            Join thousands of readers aged 50 and beyond who start the week with a single, carefully
            chosen idea — an opening principle, an endgame technique, or a classic game worth
            replaying. No noise, no clutter, and you can unsubscribe at any time.
          </p>
        </div>
        <div>
          {done ? (
            <p
              role="status"
              className="rounded-xl border border-gold/40 bg-ink p-6 text-ivory"
            >
              Thank you for subscribing. Please watch your inbox on Sunday for your first lesson from
              Senior Chess Academy.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="rounded-xl border border-ivory/15 bg-ink p-6">
              <label htmlFor="newsletter-email" className="block text-sm font-medium text-ivory">
                Email address
              </label>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-ivory/20 bg-matte px-4 py-3 text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
                />
                <button type="submit" className="btn bg-gold text-matte hover:bg-golddim">
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs text-ivory/55">
                We respect your privacy and will never share your address.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
