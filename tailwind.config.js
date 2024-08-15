/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      overusedgrotesk: [
        "var(--font-overusedgrotesk)",
        {
          fontFeatureSettings: '"ss03"',
        },
      ],
    },
    letterSpacing: {
      heading: "-0.0275em",
      base: "0em",
    },
    colors: {
      transparent: "transparent",
    },
    gap: {
      fluid: "var(--gap-fluid)",
      "space-3xs": "var(--space-3xs)",
      "space-2xs": "var(--space-2xs)",
      "space-xs": "var(--space-xs)",
      "space-sm": "var(--space-sm)",
      "space-md": "var(--space-md)",
      "space-lg": "var(--space-lg)",
      "space-xl": "var(--space-xl)",
      "space-2xl": "var(--space-2xl)",
    },
    padding: {
      0: "0",
      "space-3xs": "var(--space-3xs)",
      "space-2xs": "var(--space-2xs)",
      "space-xs": "var(--space-xs)",
      "space-sm": "var(--space-sm)",
      "space-md": "var(--space-md)",
      "space-lg": "var(--space-lg)",
      "space-xl": "var(--space-xl)",
      "space-2xl": "var(--space-2xl)",
    },
    margin: {
      0: "0",
      "space-3xs": "var(--space-3xs)",
      "space-2xs": "var(--space-2xs)",
      "space-xs": "var(--space-xs)",
      "space-sm": "var(--space-sm)",
      "space-md": "var(--space-md)",
      "space-lg": "var(--space-lg)",
      "space-xl": "var(--space-xl)",
      "space-2xl": "var(--space-2xl)",
    },
    fontSize: {
      "heading-1": "var(--heading-1)",
      "heading-2": "var(--heading-2)",
      "heading-3": "var(--heading-3)",
      "heading-4": "var(--heading-4)",
      "heading-5": "var(--heading-5)",
      "heading-6": "var(--heading-6)",
      "heading-display": "var(--heading-display)",
      base: "var(--text-base)",
      "base-small": "var(--text-base--small)",
      "base-large": "var(--text-base--large)",
    },
    lineHeight: {
      base: "130%",
      tight: "96.5%",
      none: "0%",
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    extend: {
      transitionTimingFunction: {
        "in-out-cubic": "cubic-bezier(0.65, 0, 0.35, 1)",
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      extend: {},
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    require("@tailwindcss/container-queries"),
  ],
};
