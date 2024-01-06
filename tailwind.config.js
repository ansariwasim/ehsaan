/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'sm': '320px',
    // MOBILE PHONES: BREAKPOINT 320PX TO 767PX 

      'md': '481px',
    // TABLETS: BREAKPOINT 768PX TO 991PX 

      'lg': '769px',
      // LAPTOPS AND DESKTOPS: BREAKPOINT 992PX TO 1199PX 

      'xl': '1025px',
// LARGE SCREENS: BREAKPOINT  

      '2xl': '1201px'

      

    },
    extend: {
     
    },
  },
  plugins: [],
}

