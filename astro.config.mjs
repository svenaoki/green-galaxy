// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://svenaoki.github.io",
  base: '/green-galaxy',
  integrations: [mdx(), sitemap()],
});
