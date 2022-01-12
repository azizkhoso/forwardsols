/* eslint-disable global-require */
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
        right: 'right',
        opacity: 'opacity',
        display: 'display',
      },
      transitionDuration: {
        1300: '1300ms',
      },
      aspectRatio: {
        square: '1 / 1',
        '2/1': '2 / 1',
        '1/2': '1/2',
      },
      backdropBrightness: {
        30: '0.3',
        10: '0.2',
        20: '0.1',
      },
    },
  },
  variants: {
    extend: {
      backdropBrightness: ['hover'],
      width: ['hover'],
      visibility: ['hover'],
    },
    right: ['hover', 'responsive'],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
