import {like, dislike} from './src/style';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      keyframes: {
        like,
        dislike,
      },
      animation: {
        like: 'like 0.5s',
        dislike: 'dislike 0.5s',
      },
    },
  },
  plugins: [],
}

