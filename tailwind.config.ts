import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#020712",
        midnight: "#061225",
        glass: "rgba(9, 22, 42, 0.66)",
        cyan: "#58e6ff",
        azure: "#5b9cff",
        gold: "#f6c86a",
        mint: "#6cf1c4",
        ember: "#ffad7a"
      },
      boxShadow: {
        glow: "0 0 28px rgba(88, 230, 255, 0.22)",
        gold: "0 0 24px rgba(246, 200, 106, 0.18)"
      },
      backgroundImage: {
        "radial-depth":
          "radial-gradient(circle at 20% 15%, rgba(88, 230, 255, 0.16), transparent 30%), radial-gradient(circle at 82% 20%, rgba(246, 200, 106, 0.12), transparent 28%), radial-gradient(circle at 50% 80%, rgba(108, 241, 196, 0.08), transparent 34%), linear-gradient(135deg, #020712 0%, #061225 42%, #030814 100%)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" }
        },
        dataFlow: {
          "0%": { strokeDashoffset: "58" },
          "100%": { strokeDashoffset: "0" }
        }
      },
      animation: {
        shimmer: "shimmer 4.8s ease-in-out infinite",
        pulseGlow: "pulseGlow 4.5s ease-in-out infinite",
        dataFlow: "dataFlow 3.6s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
