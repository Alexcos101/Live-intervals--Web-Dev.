import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06120C",       // near-black green background
        forest: "#0A1F14",    // panel green
        signal: "#3ED26B",    // bright accent green
        signaldim: "#1E5A38", // dimmer green for lines/borders
        cream: "#F7F3E6",     // footer background
        slate: "#3A4A40",     // footer body text
        navyink: "#12261C",   // footer heading text
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
