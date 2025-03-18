import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
      },
      colors: {
        // background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': '#C778DD',
        'grey': '#ABB2BF',
        'background': '#282C33',
      },
    },
  },
  plugins: [],
} satisfies Config;
