const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hanken Grotesk', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
