/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'law-pattern': "url('/src/assets/bg-pattern.png')",
      },
    },
  },
  plugins: [],
}
