import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-white": "#FAFAFA",
        "medium-grey": "#686868",
        "light-grey": "#ADADAD",
        black: "#151515",
      },
      fontFamily: {
        epilogue: ["Epilogue"],
      },
    },
  },
  plugins: [],
} satisfies Config;
