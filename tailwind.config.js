/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  extend: {
    fontFamily: {
      sans: ["Pretendard", "sans-serif"],
    },
    colors: {
      "bg-app": "#f6f5ef", // 배경색
    },
  },
  plugins: [],
};
