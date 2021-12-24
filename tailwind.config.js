module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f05b72',
      },
      transitionProperty: {
        width: 'width',
      },
      transitionDuration: {
        1300: '1300ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
