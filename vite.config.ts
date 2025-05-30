import MillionLint from '@million/lint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [MillionLint.vite({
    enabled: true,
    telemetry: false,
  }), react()],
});
