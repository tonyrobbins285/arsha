import type { Config } from "tailwindcss";

const config = {
  mode: "jit",
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "up-down": {
          "0%": {
            transform: "translateY(10px)",
          },
          "100%": {
            transform: "translateY(-10px)",
          },
        },
        "fade-up": {
          "0%": {
            translate: "0 150px",
            opacity: "0",
          },
          "100%": {
            translate: "0",
            opacity: "100",
          },
        },
        "zoom-in": {
          "0%": {
            scale: "0",
            opacity: "0",
          },
          "100%": {
            scale: "1",
            opacity: "100",
          },
        },
        "backdrop-fade": {
          from: {
            background: "transparent",
          },
          to: {
            background: "rgba(0,0,0, .6)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "up-down": "up-down 2s ease-in infinite alternate-reverse both",
        "fade-up": "fade-up 1s ease-in-out forwards",
        "zoom-in": "zoom-in 1s ease-in-out forwards",
        "backdrop-open": "backdrop-fade 1s ease forwards",
        "backdrop-close": "backdrop-fade 1s ease reverse backwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
