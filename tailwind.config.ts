// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epunda: ["Epunda Slab", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
