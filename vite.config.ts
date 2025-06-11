import MillionLint from '@million/lint';
import react from '@vitejs/plugin-react-oxc';
import { defineConfig } from 'vite';
import biomePlugin from 'vite-plugin-biome';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: './src/*',
    }),
    MillionLint.vite({
      enabled: true,
      telemetry: false,
    }),
    biomePlugin({
      mode: 'check',
      applyFixes: true,
    }),
  ],
});
