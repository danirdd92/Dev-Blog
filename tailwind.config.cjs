/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        xs: '380px'
      }
    },
  },
  daisyui: {
    logs: false,
    themes: ['night'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
