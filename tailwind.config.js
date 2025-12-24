/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0e14",
        panel: "rgba(255,255,255,0.06)",
        accent: "#7CFF00",
        muted: "#9CA3AF"
      },
      backdropBlur: {
        xs: "2px"
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,255,0,0.25)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulse 6s infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        }
      }
    }
  },
  plugins: []
}
