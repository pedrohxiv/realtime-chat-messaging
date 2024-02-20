import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
  plugins: [require("@tailwindcss/forms")],
};

export default config;
