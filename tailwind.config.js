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
        'navbar-pattern': "url('src/assets/banner.png')",
        'why-pattern': "url('src/assets/why.jng')"
      },
    },
  },
  plugins: [],
}
