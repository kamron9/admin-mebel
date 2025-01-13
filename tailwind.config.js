/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
    textColor: {
      blue: "#108ee9",
      gray: "#EDEFF3",
      green: "#20D472",
      white: "#fff",
    },
    backgroundColor: {
      blue: "#108ee9",
      gray: "#EDEFF3",
      green: "#20D472",
      white: "#fff",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
