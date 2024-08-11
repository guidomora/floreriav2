import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'custom-violet':'#f1f2ff'
      },
      fontFamily:{
        sans:["Rubik", 'sans-serif'],
        poppins:["Poppins", 'sans-serif'],
        goodSans:['GoodSans', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;


// e8e8e4 gris verde muy clarito
// d8e2dc gris verde un poco mas oscuro
// f9dcc4 color piel muy clarito
// -----------
// violeta #f1f2ff
// 