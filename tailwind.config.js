/* eslint-disable global-require */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0097cc',
        primaryHover: '#0084b3',
      },
      transitionProperty: {
        width: 'width',
        bgImg: 'backgroundImage',
        left: 'left',
        right: 'right',
        opacity: 'opacity',
        display: 'display',
        translate: 'translate',
      },
      transitionDuration: {
        1300: '1300ms',
        1600: '1600ms',
        1900: '1900ms',
        2100: '2100ms',
        2400: '2400ms',
        2700: '2700ms',
      },
      transitionDelay: {
        1300: '1300ms',
        1600: '1600ms',
        1900: '1900ms',
        2100: '2100ms',
        2400: '2400ms',
        2700: '2700ms',
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
      inset: ['hover'],
      margin: ['odd', 'even'],
      filter: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
