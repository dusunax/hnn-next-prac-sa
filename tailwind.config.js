/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--roboto)"],
      },
      colors: {
        "light-gray": "#f2f4f5",
      },
      animation: {
        "slide-in-right": "slide-in-right 0.3s ease-in-out forwards",
      },
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
