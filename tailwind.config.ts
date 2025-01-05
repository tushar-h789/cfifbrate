import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_bg: "#E5CC0C",
        secondary_bg: "#F5F3E0",
        primary_text: "#F0FBFB",
        secondary_text: "#070707",
        paragraph_text: "#4A4C56",
      },
      fontFamily: {
        hind: ["Hanno Test", "Hind"], 
        mono: ["Geist Mono", "monospace"],
      },
      screens: {
        '2xl': '1420px', 
      },
    },
  },
  plugins: [],
} satisfies Config;
