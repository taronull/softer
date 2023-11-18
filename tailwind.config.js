/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces Variable", "serif"],
        callout: ["Inter Tight Variable", "sans-serif"],
        body:    ["Inter Variable", "sans-serif"],
      },
    },
  },

  plugins: [],
}

