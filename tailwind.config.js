/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple":"#081A51",
        "light-white":"rgba(255,255,255,0,0.17)"
      },
      boxShadow: {
        'right': '6px 0 10px rgba(0, 0, 0, 0.03)',
       'top': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
       'all':'0px 2px 4px rgba(0,0,0,0.3)'
      },
    },
  },
  plugins: [],
}