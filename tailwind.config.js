/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', "cursive"],
        mono:  ['"Space Mono"', "monospace"],
        raj:   ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
