// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://suds-cmu.github.io', 
  vite: {
    plugins: [tailwind()]
  }
});
