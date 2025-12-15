import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "class"], // Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FF784D", // Yunora Orange
          soft: "#FFF7F3", // soft section background
        },
        textPrimary: "#1F2937",
        textSecondary: "#4B5563",
        borderLight: "#E5E7EB",
        background: "#FFFFFF",
      },
      fontFamily: {
        serif: ["'DM Serif Display'", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.06)",
        hover: "0 16px 40px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
