// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kothar.ilien.dev',
  // 'preserve' writes es/404.html, which the Worker serves for missing pages under /es/.
  build: { inlineStylesheets: 'always', format: 'preserve' },
});
