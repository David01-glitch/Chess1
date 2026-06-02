import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes.jsx';
import { trackPageView } from './utils/analytics.js';
import './index.css';

// ViteReactSSG prerenders every route in routes.jsx to static HTML at build time
// and hydrates the same tree in the browser. All page content therefore exists in
// the raw HTML source even when JavaScript is disabled.
//
// Scroll restoration and GA page_view tracking are wired to the router on the
// client only — avoiding any router-context hooks during the static render pass.
export const createRoot = ViteReactSSG({ routes }, ({ router, isClient }) => {
  if (!isClient || !router) return;
  let last = router.state?.location?.pathname;
  router.subscribe((state) => {
    const path = state.location.pathname;
    if (path === last) return;
    last = path;
    window.scrollTo(0, 0);
    trackPageView(path);
  });
});
