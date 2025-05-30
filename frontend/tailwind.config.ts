import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#1a237e",
          800: "#283593",
          700: "#303f9f",
        },
        "primary-dark": "#7A5C76",

        secondary: {
          500: "#ffd600",
          400: "#ffea00",
        },
        "secondary-dark": "#E8B7BC",
        accent: "#F3E9DC", // Cream
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [forms, typography, heroui()],
} satisfies Config;
