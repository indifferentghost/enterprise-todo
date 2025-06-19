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
      telemetry: false,
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
