/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#09090a',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(43,62,161,1) 0%, rgba(41,37,92,1) 100%)',
        pentagon: "url('/assets/bg-pentagon.png')",
      }
    }
  },
  plugins: []
};
