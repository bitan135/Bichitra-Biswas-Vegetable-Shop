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
        dark: "#081510",
        darker: "#060f0a",
        green: "#0d2418",
        surface: "#1a3a2a",
        gold: "#c9a84c",
        gold2: "#f0d080",
        sage: "#8aab96",
        sage2: "#a8d5b0",
        cream: "#f5f0e8",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        bengali: ['var(--font-noto-bengali)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
