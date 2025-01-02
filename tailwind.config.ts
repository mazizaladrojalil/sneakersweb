import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'dot-mask': 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 2px, transparent 2px)',
      },
      backgroundSize: {
        'dot-mask': '5px 5px',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;
