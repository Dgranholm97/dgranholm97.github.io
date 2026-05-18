import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dgranholm97.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
