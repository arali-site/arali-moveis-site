// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['shifting-donation-saturday.ngrok-free.dev'],
    },
  },
});