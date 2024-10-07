import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      blink: "blink 1s linear infinite",
    },
    keyframes: {
      blink: {
        "0%": { opacity: "0" },
        "50%": { opacity: "1" },
        "100%": { opacity: "0" },
      },
    },
    fontFamily: {
      mono: ["ballingermono"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "almost-white": "#F7E2E4",
        "almost-black": "#0d0618",
        "spaceship-black": "#201112",
        "space-purple": "#5B3CB3",
        "cloud-pink": "#EE848D",
        "pop-pink": "#ff7f91",
      },
    },
  },
  plugins: [],
};
export default config;
