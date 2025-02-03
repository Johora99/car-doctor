/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      DarkGray:'rgb(68, 68, 68)',
      Vermilion:'rgb(255, 56, 17)',
      CharcoalBlack : 'rgb(21, 21, 21)',
      DarkSilver : 'rgb(115, 115, 115)',
      LightGary:'rgb(232, 232, 232)',

      },
    },
  },
  plugins: [
    daisyui,
  ],
};
