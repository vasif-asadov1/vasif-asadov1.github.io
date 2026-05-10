// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  // TERTEMİZ ROOT AYARI
  site: 'https://vasif-asadov1.github.io',
  base: '/', 
  
  vite: {
    plugins: [tailwindcss()]
  },
  
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeKatex, {
        output: 'htmlAndMathml',
        strict: false
      }]
    ],
    shikiConfig: {
      theme: 'dracula',
      wrap: true, 
    },
  },
});