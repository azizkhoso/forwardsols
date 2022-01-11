module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f05b72',
        primaryHover: 'rgb(156, 59, 74)',
      },
      transitionProperty: {
        width: 'width',
        bgImg: 'backgroundImage',
        left: 'left',
        opacity: 'opacity',
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
