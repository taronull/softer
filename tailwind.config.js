/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        dark:  "#036",
        light: "#FFE",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body:    ["Inter", "sans-serif"],
        fixed:   ["Fira Code", "monospace"],
      },
    },
  },

  plugins: [],
}

