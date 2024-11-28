import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange:'#F2A043',
        green:'#001D23',
        grey:'#F8F8F9',
        blue:'#00AEEF'
        
      },
      backgroundImage:{
        hero:"url('../../public/images/background.svg')",
        donate:"url('../../public/images/donate.svg')"
      }
    },
  },
  plugins: [],
} satisfies Config;
