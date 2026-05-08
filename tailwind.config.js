/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        /* Legacy aliases kept for any untouched code */
        ink: "#1a1a1a",
        pine: "#1b4d3e",
        fern: "#2d6a50",
        gold: "#c9963a",
        cream: "#faf8f4",
        mist: "#e8f0ec",
        /* New design-system tokens */
        primary: "#1b4d3e",
        "primary-dark": "#0f2e24",
        "primary-mid": "#2d6a50",
        "primary-light": "#e8f0ec",
        accent: "#c9963a",
        "accent-light": "#f5ecd7",
        "bg-base": "#faf8f4",
        "bg-alt": "#f2ede4",
        surface: "#ffffff",
        "text-secondary": "#4a4a4a",
        "text-muted": "#7a7a7a",
        border: "#e0d9d0"
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"]
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        md: "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.05)",
        lg: "0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)",
        hover: "0 16px 40px rgba(27,77,62,0.14), 0 4px 12px rgba(0,0,0,0.08)",
        premium: "0 24px 80px rgba(27,77,62,0.16)",
        card: "0 4px 12px rgba(0,0,0,0.07)"
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
        pill: "999px"
      },
      backgroundImage: {
        "radial-soft": "radial-gradient(circle at 20% 20%, rgba(201,150,58,.15), transparent 32%), radial-gradient(circle at 82% 16%, rgba(27,77,62,.12), transparent 28%)"
      }
    }
  },
  plugins: []
};
