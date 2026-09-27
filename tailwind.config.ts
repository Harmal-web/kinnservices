import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#EEF0EC",
        ink: "#14181B",
        steel: {
          DEFAULT: "#1B2A3A",
          light: "#28405A",
        },
        amber: {
          DEFAULT: "#E6A817",
          dark: "#C98E0C",
        },
        sage: "#4B6358",
        line: "#D8DBD3",
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-plex)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        badge: "1.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
