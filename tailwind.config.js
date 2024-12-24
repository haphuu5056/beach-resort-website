/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      letterSpacing: {
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.25em',
      },
      // mainTransition: 'all 0.3s linear',
      // mainSpacing: '3px',
      // lightShadow: '2px 5px 3px 0px rgba(0, 0, 0, 0.5)',
      // darkShadow: '4px 10px 5px 0px rgba(0, 0, 0, 0.5)',
    extend: {
        colors:{
      primaryColor: '#af9a7d',
      mainWhite: '#fff',
      offWhite: '#f7f7f7',
      mainBlack: '#222',
      mainGrey: '#ececec',
      darkGrey: '#cfcfcf',
  },
    },
  },
  plugins: [],
}
