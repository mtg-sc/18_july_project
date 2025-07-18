module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "var(--bg-primary)",
          text: "var(--text-primary)"
        },
        secondary: {
          background: "var(--bg-secondary)",
          text: "var(--text-secondary)"
        },
        accent: {
          background: "var(--bg-accent)"
        },
        header: {
          background: "var(--header-bg)"
        },
        button: {
          background: "var(--button-bg)",
          text: "var(--button-text)"
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};