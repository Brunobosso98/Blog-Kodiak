import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [tailwind(), react(), mdx()],

  // Habilita o modo servidor
  output: 'server',

  adapter: vercel()
});