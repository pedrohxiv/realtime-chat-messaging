import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1360px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
