import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
  resolve: {
    // Guarantee a single instance of React and the router so context providers
    // and consumers share the same module during the SSG render pass.
    dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom'],
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: false,
    dirStyle: 'nested',
    includedRoutes() {
      return [
        '/',
        '/about',
        '/blog',
        '/community',
        '/contact',
        '/opening-strategies',
        '/endgame-techniques',
        '/chess-for-brain-health',
        '/classic-grandmasters',
        '/chess-puzzles',
        '/tournament-guides',
        '/legal/privacy',
        '/legal/terms',
        '/legal/refund',
        '/404',
      ];
    },
  },
});
