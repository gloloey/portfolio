import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: true })],
  site: 'https://example.com', // update to your domain later
});
