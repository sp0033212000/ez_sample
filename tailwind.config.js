// const colors = require('tailwindcss/colors')

/**
 *
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
  // mode: 'jit',
  purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1080px",
      },
      maxWidth: {
        contentList: "1080px",
      },
    },
  },
  plugins: [],
};
