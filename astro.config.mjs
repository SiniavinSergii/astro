// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://shimmering-twilight-05417e.netlify.app",
  integrations: [preact()]
});