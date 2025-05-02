// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rich: '#071013',
        primary: '#23B5D3',
        secondary: '#75ABBC',
        muted: '#A2AEBB',
        light: '#DFE0E2',
      },
    },
  },
  plugins: [],
};
