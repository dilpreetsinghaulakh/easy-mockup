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
        background: {
          primary: "rgb(var(--color-background-primary) , <alpha-value>)",
          secondary: "rgb(var(--color-background-secondary), <alpha-value>)",
        },
        text: {
          primary: "rgb(var(--color-text-primary), <alpha-value>)",
          secondary: "rgb(var(--color-text-secondary, <alpha-value>))",
          tertiary: "rgb(var(--color-text-tertiary), <alpha-value>)",
        },
      },
      fontFamily: {
        serif: "var(--font-serif)",
        sans: "var(--font-sans-serif)",
        mono: "var(--font-mono)",
      },
    },
  },
  plugins: [],
};
export default config;
