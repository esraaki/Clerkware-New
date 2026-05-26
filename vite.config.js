import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config — static SPA, hash-routed, deployable to Cloudflare Pages.
export default defineConfig({
  plugins: [react()],
  // Relative base means asset URLs resolve correctly when the site is
  // served from the root on Cloudflare Pages or any static host.
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: false,
  },
  preview: {
    port: 4173,
  },
});
