/** @type {import('tailwindcss').Config} */
import colors, { purple, indigo } from "tailwindcss/colors";
import tailwindScrollbar from "tailwind-scrollbar";

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      ...colors,
      primary: purple,
      secondary: indigo,
      neutral: purple,
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
};
export const plugins = [tailwindScrollbar];
