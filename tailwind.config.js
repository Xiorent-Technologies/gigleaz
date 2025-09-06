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
          light: "#5FD3B6",       // optional, e.g. `text-primary-light` DACE74
          dark: "#1D7A61",        // optional, e.g. `bg-primary-dark`
        },
        secondary: {
          DEFAULT: "#DACE74",     // base color for `bg-primary`, `text-primary`, etc.
          light: "#E6DCA3",       // optional, e.g. `text-primary-light` DACE74
          dark: "#BFAF52",        // optional, e.g. `bg-primary-dark`
        },
      },
    },
  },
  plugins: [],
}
