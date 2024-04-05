/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        grey: "#b5b7bb",
      },
      fontFamily: {
        'Inter': ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'autofit': "repeat(auto-fit, minmax(258px, 1fr))",

        // Complex site-specific column configuration
        // 'footer': '200px minmax(900px, 1fr) 100px',
      },
      screens: {
        'sm': {'max': '657px'},
        // => @media (max-width: 639px) { ... }
      },
    },

    fontSize: {
      // sm: '0.8rem',
      // base: '1rem',
      // xl: '1.25rem',
      // '2xl': '1.563rem',
      '3xl': '2rem',
    '5xl':'3.5rem'},

    
  

    
  },
  plugins: [],
};
