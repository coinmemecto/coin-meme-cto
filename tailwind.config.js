/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070A12",
        midnight: "#0B1220",
        neon: "#B8FF3D",
        neon2: "#7CFFB2",
        cyanpop: "#41D9FF",
        card: "rgba(255,255,255,0.06)",
        card2: "rgba(255,255,255,0.10)",
        stroke: "rgba(255,255,255,0.12)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 25px 80px rgba(0,0,0,0.65)",
        neon: "0 0 0 1px rgba(184,255,61,0.25), 0 20px 90px rgba(184,255,61,0.18)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-18px,0) scale(1.02)" },
        },
        drift: {
          "0%": { transform: "translate3d(-10%, -5%, 0)" },
          "50%": { transform: "translate3d(10%, 6%, 0)" },
          "100%": { transform: "translate3d(-10%, -5%, 0)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(-4%, 2%)" },
          "30%": { transform: "translate(3%, -4%)" },
          "40%": { transform: "translate(2%, 4%)" },
          "50%": { transform: "translate(-3%, 3%)" },
          "60%": { transform: "translate(4%, 0%)" },
          "70%": { transform: "translate(1%, -2%)" },
          "80%": { transform: "translate(-1%, 2%)" },
          "90%": { transform: "translate(2%, -1%)" },
        },
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        grain: "grain 7s steps(1) infinite",
        sheen: "sheen 1.4s ease-in-out",
      },
    },
  },
  plugins: [],
};
