import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#f1f5f9",
        primary: {
          DEFAULT: "#7c3aed",
          light: "#a78bfa",
          dark: "#5b21b6",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#22d3ee",
          light: "#67e8f9",
          dark: "#0891b2",
        },
        accent: {
          DEFAULT: "#fb7185",
          light: "#fda4af",
          dark: "#e11d48",
        },
        surface: {
          DEFAULT: "#0f172a",
          light: "#1e293b",
          lighter: "#334155",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-outfit)"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "spotlight-sweep": "spotlightSweep 2.5s ease-in-out forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(139, 92, 246, 0.6), 0 0 120px rgba(6, 182, 212, 0.2)" },
        },
        spotlightSweep: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
