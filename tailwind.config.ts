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
        "nilor-black":"#000000",
        "nilor-offwhite":"#f2f2f2",
        "nilor-white":"#ffffff",
        "nilor-accent":"#d937d3"
      },
      boxShadow: {
        'soft-glow': '0 4px 20px rgba(255, 255, 255, 0.5)', // Custom white glow shadow
      },
      fontFamily: {
        sans: ["var(--font-nilor)", "sans-serif"], //overrides everywhere 
      },
      fontSize:{
        "landing-section-pre":['1.875rem', { lineHeight: '2.25rem' }],
        "landing-section-title":['4.5rem', { lineHeight: '1' }],
        "landing-section-text":['2.25rem', { lineHeight: '2.5rem' }],

      }
    },
  },
  plugins: [],
} satisfies Config;
