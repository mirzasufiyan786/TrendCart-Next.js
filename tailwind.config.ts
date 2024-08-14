import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        red:"#FA3434",
        orange:"#FF9017",
        beig:"#FFE5BF",
        green:"#00B517",
        lightgreen:"#C3FFCB",
        blue:"#0D6EFD",
        slate:"#E3F0FF",
        dark:"#1C1C1C",
        borderColor:"#E0E0E0"
      }
    },
  },
  plugins: [],
};
export default config;
