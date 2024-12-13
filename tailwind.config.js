/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        gridTemplateColumns: {
          '18': 'repeat(18, minmax(60px, 1fr))',
        },
      },
    },
    plugins: [],
  };