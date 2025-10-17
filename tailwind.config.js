/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sora:["Sora", 'sans-serif']
      },
       colors: {
        // primary:" #000000ff",    // Rich Dark Charcoal
        accent: "#ff0000ff",     // Vibrant Coral Red
      },
    },
  },
  plugins: [],
}