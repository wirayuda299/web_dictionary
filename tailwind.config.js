export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: {
        100: 'hsl(0, 0%, 2%)',
        200: 'hsl(0, 0%, 12%)',
        300: 'hsl(0, 0%, 18%)',
        400: 'hsl(0, 0%, 23%)',
      },
      gray: {
        100: 'hsl(0, 0%, 51%)',
        200: 'hsl(0, 0%, 91%)',
        300: 'hsl(0, 0%, 96%)',
      },
      white: 'hsl(0, 0%, 100%)',
      purple: 'hsl(274, 82%, 60%)',
      red: 'hsl(0, 100%, 66%)',
    },
    extend: {
      fontFamily: {
        inconsolata: ['Inconsolata', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
