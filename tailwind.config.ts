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
