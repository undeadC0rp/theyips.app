import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://theyips.app',
  output: 'static',
  // Compression drops line breaks next to inline tags, gluing words together
  // ("tracking</span>at the ball"). Authored line wraps must stay as spaces.
  compressHTML: false,
});
