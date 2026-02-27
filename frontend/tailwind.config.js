/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],

  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "hsl(210 40% 98%)",      // Light elegant background
        foreground: "hsl(222 47% 11%)",      // Dark text

        card: {
          DEFAULT: "hsl(0 0% 100%)",         // White cards
          foreground: "hsl(222 47% 11%)",
        },

        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222 47% 11%)",
        },

        primary: {
          DEFAULT: "hsl(222 70% 45%)",       // Elegant Royal Blue
          foreground: "hsl(210 40% 98%)",
        },

        secondary: {
          DEFAULT: "hsl(210 40% 96%)",       // Soft light blue-gray
          foreground: "hsl(222 47% 11%)",
        },

        muted: {
          DEFAULT: "hsl(210 40% 96%)",
          foreground: "hsl(215 20% 40%)",
        },

        accent: {
          DEFAULT: "hsl(217 91% 60%)",       // Soft highlight blue
          foreground: "hsl(210 40% 98%)",
        },

        destructive: {
          DEFAULT: "hsl(0 72% 51%)",         // Alert red
          foreground: "hsl(210 40% 98%)",
        },

        border: "hsl(214 32% 91%)",
        input: "hsl(214 32% 91%)",
        ring: "hsl(222 70% 45%)",

        chart: {
          1: "hsl(222 70% 45%)",
          2: "hsl(217 91% 60%)",
          3: "hsl(210 40% 70%)",
          4: "hsl(200 70% 50%)",
          5: "hsl(190 60% 45%)",
        },

        sidebar: {
          DEFAULT: "hsl(210 40% 98%)",
          foreground: "hsl(222 47% 11%)",
          primary: "hsl(222 70% 45%)",
          "primary-foreground": "hsl(210 40% 98%)",
          accent: "hsl(217 91% 60%)",
          "accent-foreground": "hsl(210 40% 98%)",
          border: "hsl(214 32% 91%)",
          ring: "hsl(222 70% 45%)",
        },
      },

      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
        "4xl": "2rem",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};