/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        bodyFont: ['Poppins', 'sans-serif'],
        titleFont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        bodyColor: '#212428',
        lightText: '#c4cfde',
        designColor: '#ff014f',
      },
      boxShadow: {
        shadowOne: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
      },
      animation: {
        'spin-slow': 'spin-slow 8s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        glass:
          'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
    },
  },
  plugins: [],
};
