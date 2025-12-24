/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f14",
        panel: "#111827",
        acid: "#9CFF00",
        acidSoft: "#7CFF6B",
        textMain: "#E5E7EB",
        textDim: "#9CA3AF",
      },
      boxShadow: {
        glow: "0 0 40px rgba(156,255,0,0.25)",
        soft: "0 10px 40px rgba(0,0,0,0.5)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulse 4s ease-in-out infinite",
        fadeUp: "fadeUp 1s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
