import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
      colors: { accent: { DEFAULT: "#4f46e5", soft: "#eef2ff" } },
    },
  },
  plugins: [],
};
export default config;
