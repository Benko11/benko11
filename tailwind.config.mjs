/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: { display: ['"SF Mono"'], "sans-serif": ['"sans-serif"'] },
    colors: {
      bluom: {
        light: "hsl(200, 90%, 80%)",
        lighter: "hsl(200, 90%, 90%)",
        "select-tint": "hsl(200, 60%, 20%)",
        select: "hsl(200, 20%, 20%)",
        dark: "hsl(190, 100%, 4.5%)",
      },
      black: "#000",
      white: "#fff",
    },
  },
  plugins: [],
};
