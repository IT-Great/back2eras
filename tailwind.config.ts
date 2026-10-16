import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Mendaftarkan variabel font dari next/font ke dalam utilitas Tailwind
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        pacifico: ["var(--font-pacifico)", "cursive"],
        roboto: ["var(--font-roboto-condensed)", "sans-serif"],
      },
      // Anda juga bisa menambahkan palet warna brand di sini 
      // jika tidak ingin menulis kode hex berulang kali di komponen
      colors: {
        brand: {
          teal: "#13bbad",
          blue: "#0fdff8",
          darkgreen: "#144333",
          orange: "#fe9d04",
          pink: "#ff1493",
          cream: "#eaddce",
          yellow: "#fadf29",
        }
      }
    },
  },
  plugins: [],
};

export default config;