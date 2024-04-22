/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        buttons: "#6499E9",
        blue_fance:"#181E4B"
      }
    },
  },
  plugins: [],
}

