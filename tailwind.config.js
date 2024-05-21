/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using src directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FDC31E3D', // Add your custom color with alpha value
      },
      borderWidth: {
        '0.8': '0.8px', // Add a custom border width
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(71.4deg, #FDF1EC 0%, #EEE3F8 96.24%)',
        'line-gradeint': 'linear-gradient(90deg, #FFFFFF 0%, #FFB35C 100%)'
      },
      fontFamily: {
        sans: ["Onest", "sans-serif"],
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "1rem",
        "2xl": "3rem",
        "3xl": "5rem",
        full: "9999px",
        large: "12px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [nextui()],
};
