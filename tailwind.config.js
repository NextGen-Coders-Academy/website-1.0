/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.{html,js,css} ",
    "./views/*.ejs",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        audiowide: ["Audiowide", "sans"],
        outfit: ["Outfit", "sans"],
      },
    },
  },
  plugins: [],
};
