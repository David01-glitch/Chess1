// Thin, SSR-safe wrappers around gtag. All calls no-op during prerender (no
// window) and respect Google Consent Mode v2 — GA itself withholds storage
// until consent is granted in the cookie banner.
const GA_ID = 'G-4J046JXWVC';

function hasGtag() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

export function trackPageView(path) {
  if (!hasGtag()) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: typeof window !== 'undefined' ? window.location.href : path,
    send_to: GA_ID,
  });
}

export function trackEvent(action, params = {}) {
  if (!hasGtag()) return;
  window.gtag('event', action, params);
}

export function grantConsent() {
  if (!hasGtag()) return;
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  });
}

export function denyConsent() {
  if (!hasGtag()) return;
  window.gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
}
