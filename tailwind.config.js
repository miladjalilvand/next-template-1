/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          primary: "var(--primary)",       // متغیر برای رنگ اصلی
          secondary: "var(--secondary)",   // متغیر برای رنگ ثانویه
          danger: "var(--danger)", 
          redc:"var(--redc)" ,
          txtl:"var(--txtl)" ,
  
          redasli: "var(--redasli)"       // متغیر برای رنگ خطر
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
