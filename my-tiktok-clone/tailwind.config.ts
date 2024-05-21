import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '28': '28px',
        '32': '32px',
      },
      fontSize: {
        '10': '10px',
      },
      maxHeight: {
        '640': '640px',
      },
    },
  },
  variants: {
    extend: {
      top: ['max-h'],
    },
  },
  plugins: [],
};

export default config;
