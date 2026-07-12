import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 'https://yihao.shjingshuiji.cn';
const base = process.env.ASTRO_BASE || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [react(), sitemap()],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
