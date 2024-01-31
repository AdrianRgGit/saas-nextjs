import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-1": "#FFFFFF",

        "purple-1": "#F2EAFF",
        "purple-2": "#DED3FD",
        "purple-3": "#1B002D",

        "orange-1": "#FEE1D2",
        "orange-2": "#FE8751",

        "green-1": "#D1FFD4",
        "green-2": "#5BD560",

        "blue-1": "#68C7F6",

        "yellow-1": "#FDCC5E",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
