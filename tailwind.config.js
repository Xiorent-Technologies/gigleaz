/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#29AB87",     // base color for `bg-primary`, `text-primary`, etc.
          light: "#5FD3B6",       // optional, e.g. `text-primary-light`
          dark: "#1D7A61",        // optional, e.g. `bg-primary-dark`
        },
      },
    },
  },
  plugins: [],
}
