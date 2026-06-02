import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { grantConsent, denyConsent } from '../utils/analytics.js';

const KEY = 'sca_consent';

// Elegant slide-up consent banner. Defaults are 'denied' (set in index.html via
// Consent Mode v2); accepting updates consent to 'granted' and persists the
// choice in localStorage so the banner does not reappear.
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (!stored) setVisible(true);
    } catch (e) {
      setVisible(true);
    }
  }, []);

  function decide(choice) {
    try {
      localStorage.setItem(KEY, choice);
    } catch (e) {
      /* ignore storage failures */
    }
    if (choice === 'granted') grantConsent();
    else denyConsent();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 animate-[slideup_400ms_ease-out] px-4 pb-4"
      style={{ animationName: 'slideup' }}
    >
      <div className="container-wide">
        <div className="rounded-xl border border-graphite/20 bg-matte text-ivory shadow-lift">
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div
                className="mt-1 h-8 w-8 shrink-0 rounded bg-chess bg-[length:16px_16px]"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-ivory/85">
                We use cookies only to understand how the site is used and to improve our guides.
                Analytics stay disabled until you agree. Read our{' '}
                <Link to="/legal/privacy" className="underline decoration-gold underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => decide('denied')}
                className="rounded-xl border border-ivory/30 px-5 py-2.5 text-sm font-semibold text-ivory transition hover:border-ivory"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => decide('granted')}
                className="rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-matte transition hover:bg-golddim"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes slideup{from{transform:translateY(120%);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>
    </div>
  );
}
