import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

export default {
  content: {
    extract,
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "nilor-black": "#000000",
        "nilor-offwhite": "#f2f2f2",
        "nilor-white": "#ffffff",
        "nilor-grey": "#D3D3D3",
        "nilor-accent": "#F8607D",
        "nilor-secondary": "#1d2939",
      },
      boxShadow: {
        "soft-glow": "0 4px 20px rgba(255, 255, 255, 0.5)", // Custom white glow shadow
      },
      fontFamily: {
        sans: ["var(--font-nilor)", "sans-serif"], //overrides everywhere
      },
      fontWeight: {
        "nilor-light": "200",
        "nilor-regular": "400",
        "nilor-medium": "500",
        "nilor-semibold": "600",
        "nilor-bold": "700",
      },
      fontSize: {
        // "nilor-pre":['1.5rem', { lineHeight: '2.25rem' }],
        // "nilor-title":['4.5rem', { lineHeight: '1' }],
        // "nilor-section-title":['3rem', {lineHeight:'1.15rem'}],
        // "nilor-text":['1.875rem', {lineHeight:'2.25rem'}],
        // "nilor-section-text":['1rem', {lineHeight:'1rem'}],
        // "nilor-title-sm":['4rem',{lineHeight:'1'}],
        // "nilor-hero-text":['2.25rem', { lineHeight: '2.5rem' }],
        // "nilor-text-small":['1.75rem', {lineHeight: '2rem'}]
      },
    },
  },
  plugins: [
    fluid,
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@xpd/tailwind-3dtransforms"),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (pluginApi: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { addUtilities } = pluginApi as {
        addUtilities: (utilities: Record<string, any>) => void;
      };
      addUtilities({
        ".nilor-pre": {
          "@apply ~text-lg/xl ~leading-8/9": {},
        },
        ".nilor-title": {
          "@apply ~text-[2.5rem]/[4.5rem]": {},
        },
        ".nilor-text": {
          "@apply ~text-xl/2xl ~leading-8/9": {},
        },
        ".nilor-section-text": {
          "@apply ~text-sm/base ~leading-4": {},
        },
        ".nilor-title-sm": {
          "@apply ~text-[2.5rem]/[4rem] ~leading-[1]": {},
        },
        ".nilor-hero-text": {
          "@apply ~text-sm/[1.43rem] ~leading-[1.75rem]/[2.rem]": {},
        },
        ".nilor-text-small": {
          "@apply ~text-base/lg ~leading-7/8": {},
        },
        ".nilor-section-title": {
          "@apply ~text-[2rem]/[3rem] ~leading-[2rem]/[2.15rem]": {},
        },
      });
    },
  ],
} satisfies Config;
