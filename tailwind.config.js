/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
 
      colors: {
        primary: '#6936C9',  
        secondary: '#0D9488',  
        tertiary: '#00EFFF', 
        quaternary:'#FF1000'
      },
    },
 
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [],
}

