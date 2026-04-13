import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#071127",
        navy: "#08142d",
        gold: "#f5cb67",
        blush: "#ff4fcb",
        cyan: "#5fd5ff",
        mist: "#d7e8ff",
      },
      fontFamily: {
        sans: ["Segoe UI Variable", "Aptos", "Trebuchet MS", "sans-serif"],
        display: ["Bahnschrift", "Arial Nova", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        aura: "0 0 0 1px rgba(116, 196, 255, 0.14), 0 0 40px rgba(95, 213, 255, 0.18), 0 0 90px rgba(255, 79, 203, 0.12)",
        card: "0 24px 80px rgba(4, 10, 24, 0.55)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(95, 213, 255, 0.24), transparent 30%), radial-gradient(circle at 20% 20%, rgba(255, 79, 203, 0.18), transparent 25%), radial-gradient(circle at 80% 30%, rgba(95, 213, 255, 0.14), transparent 24%)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)", opacity: "0.35" },
          "50%": { transform: "translate3d(0, -18px, 0) scale(1.1)", opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45", transform: "scale(0.95)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        blink: {
          "0%, 48%": { opacity: "1" },
          "52%, 100%": { opacity: "0" },
        },
        orbit: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
        pulseSoft: "pulseSoft 2.8s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        orbit: "orbit 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
