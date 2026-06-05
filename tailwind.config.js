/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#030712",
          darkElevated: "#0B1020",
          light: "#F8FAFC",
          lightElevated: "#FFFFFF",
        },
        text: {
          darkPrimary: "#F8FAFC",
          darkSecondary: "#CBD5E1",
          lightPrimary: "#0F172A",
          lightSecondary: "#475569",
        },
        accent: {
          blue: "#3B82F6",
          violet: "#8B5CF6",
          cyan: "#22D3EE",
          green: "#22C55E",
        },
        border: {
          dark: "rgba(148, 163, 184, 0.18)",
          light: "rgba(15, 23, 42, 0.10)",
        },
        glow: {
          blue: "rgba(59, 130, 246, 0.35)",
          violet: "rgba(139, 92, 246, 0.35)",
        },
      },
      boxShadow: {
        glowBlue:
          "0 0 40px rgba(59, 130, 246, 0.35), 0 0 80px rgba(59, 130, 246, 0.15)",
        glowViolet:
          "0 0 40px rgba(139, 92, 246, 0.35), 0 0 80px rgba(139, 92, 246, 0.15)",
        planetGlow:
          "0 0 50px rgba(59, 130, 246, 0.45), 0 0 100px rgba(139, 92, 246, 0.3), 0 0 140px rgba(34, 211, 238, 0.12)",
        cardDark:
          "0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        cardLight:
          "0 4px 24px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
      },
      backgroundImage: {
        "hero-gradient-dark":
          "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(59, 130, 246, 0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 90%, rgba(34, 211, 238, 0.08) 0%, transparent 50%)",
        "hero-gradient-light":
          "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(59, 130, 246, 0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(139, 92, 246, 0.10) 0%, transparent 55%)",
        "hero-galaxy-core":
          "radial-gradient(circle at 50% 58%, rgba(59, 130, 246, 0.42) 0%, rgba(139, 92, 246, 0.22) 38%, transparent 68%)",
        "hero-galaxy-nebula":
          "radial-gradient(ellipse 95% 75% at 50% 45%, rgba(139, 92, 246, 0.2) 0%, transparent 55%), radial-gradient(ellipse 55% 45% at 25% 75%, rgba(34, 211, 238, 0.14) 0%, transparent 50%), radial-gradient(ellipse 45% 40% at 80% 30%, rgba(59, 130, 246, 0.12) 0%, transparent 45%)",
        "hero-planet-halo":
          "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.25) 0%, rgba(139, 92, 246, 0.12) 45%, transparent 70%)",
        "gradient-accent": "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
        "gradient-text": "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        orbitTilt: {
          "0%": { transform: "rotateX(72deg) rotateZ(0deg)" },
          "100%": { transform: "rotateX(72deg) rotateZ(360deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeOutScale: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.95)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.25)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        orbitTilt: "orbitTilt 28s linear infinite",
        orbitSlow: "orbit 36s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        fadeInScale: "fadeInScale 0.3s ease-out forwards",
        fadeOutScale: "fadeOutScale 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
