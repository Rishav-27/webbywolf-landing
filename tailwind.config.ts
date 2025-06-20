/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom Colors
      colors: {
        primary: "#1959AC",       // Button/Link Primary
        primaryDark: "#0546D2",   // Button Hover
        textDark: "#222222",      // Typography
      },

      // Fonts
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        inter: ["var(--font-inter)"],
      },

      // Font Sizes
      fontSize: {
        heading: ["42px", { lineHeight: "1.2" }],
        subheading: ["24px", { lineHeight: "1.5" }],
        body: ["20px", { lineHeight: "1.6" }],
      },

      // Letter Spacing
      letterSpacing: {
        tightest: "-0.02em",
      },

      // Animations
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
      },
      // (Optional) If you want custom delays as utility classes (requires a plugin normally)
      // animationDelay: {
      //   100: "100ms",
      //   300: "300ms",
      //   500: "500ms",
      //   700: "700ms",
      // },
    },
  },
  plugins: [],
};
