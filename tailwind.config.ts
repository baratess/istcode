import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)", 
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-in-out", 
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "90%": { opacity: "0.5" },
        },
      },
      spacing: {
        "128": "32rem", 
      },
      fontSize: {
        'xs-custom': '0.8rem',  
      },
    },
  },
  plugins: [],
};

export default config;
