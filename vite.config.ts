import path from 'node:path';
import MillionLint from '@million/lint';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-oxc';
import { defineConfig } from 'vite';
import biomePlugin from 'vite-plugin-biome';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: './src/*',
    }),
    tailwindcss(),
    MillionLint.vite({
      enabled: true,
      telemetry: false,
    }),
    biomePlugin({
      mode: 'check',
      applyFixes: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
