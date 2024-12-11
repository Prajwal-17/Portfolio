/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      hind:["Hind","sans-serif"],
      epilogue:["Epilogue","sans-serif"],
      motterdam:["Motterdam","sans-serif"]
      }
    },
  },
  plugins: [],
}