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
        primary: {
          DEFAULT: "#F5A623",
          hover: "#e0961f",
        },
        secondary: {
          DEFAULT: "#29ABE2",
          hover: "#228ebc",
        },
        dark: "#1A1A2E",
        light: "#F8F9FA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
