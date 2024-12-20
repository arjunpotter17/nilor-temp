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
        "nilor-grey": "#D3D3D3",
        "nilor-accent":"#F8607D",
        "nilor-secondary":"#F8607D"
      },
      boxShadow: {
        'soft-glow': '0 4px 20px rgba(255, 255, 255, 0.5)', // Custom white glow shadow
      },
      fontFamily: {
        sans: ["var(--font-nilor)", "sans-serif"], //overrides everywhere 
      },
      fontWeight: {
        "nilor-light": '200',
        "nilor-regular": '400',
        "nilor-medium": '500',
        "nilor-semibold": '600',
        "nilor-bold": '700',
      },
      fontSize:{
        "nilor-pre":['1.5rem', { lineHeight: '2.25rem' }],
        "nilor-title":['4.5rem', { lineHeight: '1' }],
        "nilor-section-title":['3rem', {lineHeight:'1.15rem'}],
        "nilor-text":['1.875rem', {lineHeight:'2.25rem'}],
        "nilor-section-text":['1rem', {lineHeight:'1rem'}],
        "nilor-title-sm":['4rem',{lineHeight:'1'}],
        "nilor-hero-text":['2.25rem', { lineHeight: '2.5rem' }],
        "nilor-text-small":['1.75rem', {lineHeight: '2rem'}]

      }
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@xpd/tailwind-3dtransforms")
  ],
} satisfies Config;
