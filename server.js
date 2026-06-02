import express from 'express';
import compression from 'compression';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

const app = express();

// Gzip/Brotli-friendly compression for all responses.
app.use(compression());

app.disable('x-powered-by');

// Long-cache immutable, fingerprinted assets (Vite hashes filenames).
app.use(
  '/assets',
  express.static(path.join(DIST, 'assets'), {
    immutable: true,
    maxAge: '1y',
  })
);

// Serve the rest of the prerendered site. HTML is revalidated; other files
// (images, robots, sitemap) get a sensible short cache.
app.use(
  express.static(DIST, {
    extensions: ['html'],
    // Don't 301-redirect directory requests to a trailing slash; the catch-all
    // below serves the prerendered index.html directly so canonical (no-slash)
    // URLs return 200.
    redirect: false,
    setHeaders(res, filePath) {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      } else if (/\.(jpg|jpeg|png|webp|svg|ico|woff2?)$/.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=86400');
      }
    },
  })
);

// SPA fallback: serve the prerendered HTML for a matching route if present,
// otherwise the prerendered 404 page. Every known route already has its own
// static HTML file, so crawlers and JS-disabled visitors get full content.
app.get('*', (req, res) => {
  const requested = path.join(DIST, req.path, 'index.html');
  const flat = path.join(DIST, `${req.path}.html`);

  if (req.path !== '/' && fs.existsSync(requested)) {
    return res.sendFile(requested);
  }
  if (fs.existsSync(flat)) {
    return res.sendFile(flat);
  }

  const notFound = path.join(DIST, '404', 'index.html');
  const notFoundFlat = path.join(DIST, '404.html');
  if (fs.existsSync(notFound)) {
    return res.status(404).sendFile(notFound);
  }
  if (fs.existsSync(notFoundFlat)) {
    return res.status(404).sendFile(notFoundFlat);
  }
  return res.status(404).sendFile(path.join(DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Senior Chess Academy is running on http://localhost:${PORT}`);
});
