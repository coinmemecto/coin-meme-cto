/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(12px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },
      },
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        muted: "#9ca3af",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,255,180,0.25)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
