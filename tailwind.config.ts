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

      // TAMBAHKAN BAGIAN INI
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '20%': { transform: 'translateY(0)', opacity: '1' },
          '80%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        }
      },

      animation: {
        floatUp: 'floatUp 4s ease-in-out infinite',
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