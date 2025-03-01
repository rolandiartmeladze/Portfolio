import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xs": "375px",
        xs: "480px",
        "2xl": "1440px",
      },
      container: {
        padding: {
          DEFAULT: "1.5rem",
          "2xl": "4rem",
        },
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        waveLetter: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(-5px)", opacity: "0.7" },
        },
      },
      animation: {
        slideDown: "slideDown 1s ease-out",
        scaleUp: "scaleUp 2s ease-out",
        waveLetter: "waveLetter 1.5s ease-in-out infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
} satisfies Config;
