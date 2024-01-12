/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        "purple-bold": "#170f23",
        "purple-light": "#231b2e",
        "white-color": "#fff",
        "gray-color": "#8c8791",
        "btn-color": "#302639",
      },
    },
  },
  plugins: [],
};
