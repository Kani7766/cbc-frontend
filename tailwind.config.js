/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#EFF3EA",
        "secondary" : "#EFF3EA",
        "accent" : "#352F44",
      }
    },
  },
  plugins: [],
}
