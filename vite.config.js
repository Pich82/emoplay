import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const tempDirectory = process.env.TEMP || process.env.TMP || 'node_modules/.vite';

export default defineConfig({
  base: './',
  plugins: [react()],
  cacheDir: `${tempDirectory}/emoplay-vite-cache`,
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  build: {
    outDir: process.env.EMOPLAY_BUILD_DIR || 'dist',
  },
});
