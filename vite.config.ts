import path from 'node:path';
import MillionLint from '@million/lint';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-oxc';
import { defineConfig } from 'vite';
import biomePlugin from 'vite-plugin-biome';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    MillionLint.vite({
      enabled: true,
      /**
       * `telemetry` is still trying to connect to posthog
       * https://github.com/aidenybai/million/issues/1178
       */
      telemetry: false,
      dev: process.env.NODE_ENV === 'development' ? 'debug' : false,
      turbo: false,
      react: '19',
      lite: process.env.NODE_ENV !== 'development',
    }),
    react({
      include: './src/**/*.{ts,tsx}',
    }),
    tailwindcss(),
    biomePlugin({
      mode: 'check',
      applyFixes: true,
    }),
  ],
  css: {
    transformer: 'lightningcss',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
