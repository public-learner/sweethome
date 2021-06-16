const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
  darkMode: "class",
  mode: process.env.NODE_ENV ? "jit" : undefined,
  theme: {
    extend: {
      colors: {
        coolGray: colors.coolGray,
        palevioletred: "#DB7093",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      borderWidth: {
        10: "12px",
      },
      animation: {
        blob: "blob 7s infinite",
        "fade-in": "fade-in 1000ms forwards",
        "fade-in-down": "fade-in-down 500ms ease-out",
        "fade-out-down": "fade-out-down 500ms ease-out",
        "fade-in-up-10": "fade-in-up-10 750ms ease-out forwards",
        "fade-in-up-30": "fade-in-up-30 750ms ease-out forwards",
        "fade-in-up-500": "fade-in-up-10 750ms ease-out forwards 500ms",
        "fade-out-up": "fade-out-up 500ms ease-out",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(50px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-40px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up-10": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-30": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
    },
  },
}
