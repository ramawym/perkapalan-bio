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
        primary: "#000613", // The Void
        "primary-container": "#001f3f", // The Deep Navy
        surface: "#f7f9ff", // The Canvas
        secondary: "#50606f", // The Slate
        "outline-variant": "rgba(116, 119, 127, 0.15)", // Ghost Border
      },
      fontFamily: {
        headline: ["var(--font-manrope)"],
        body: ["var(--font-inter)"],
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px", // Memaksa semua border jadi tajam sesuai DESIGN.md
      },
    },
  },
  plugins: [],
};
export default config;