/** @type {import('tailwindcss').Config} */
export default {
  // SİHİRLİ DOKUNUŞ: Sadece class'a bak, telefonu önemseme!
  darkMode: 'class', 
  
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}