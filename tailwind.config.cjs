/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '639px'},
        'md': {'min':'639px','max': '1023px'}
        // => @media (max-width: 639px) { ... }
      },
      fontFamily:{
        'Bellefair':['Bellefair'],
        'Barlow':['Barlow' , 'sans'],
        'BarlowCondensed' : ['Barlow Condensed']
      },
      colors:{
        'grey' :{
          light : '#D0D6F9',
          dark : '#383B4B'
        }
      },

      animation:{
        slide : 'slide 500ms ease-in-out',
        switchIn : 'switchIn 500ms ease-in-out',
      },

      keyframes:{
        slide : {
          '0%' : {transform : 'translateX(90%)'},
          '50% , 100%' : {transform : 'translateX(0)'},
        },

        switchIn :{
          '0%' : {transform: 'scaleX(0)'},
          '50% , 100%' : {transform : 'scaleX(100%)'}
        },

        fadeIn : {
          '0%' : {opacity: '0%'},
          '50% , 75%' : {opacity : '50%'},
          '100%' : {opacity : '100%'},
        }
      }
    },
  },
  plugins: [],
}
