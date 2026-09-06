module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#3D3D3D",
        surface: "#FFFFFF",
        title: "#2B2B2B",
        primary: {
          DEFAULT: "#00B050",
          dark: "#1B5E20",
        },
        secondary: "#808080",
        link: "#4DA6FF",
        outline: "#D0D0D0",
        panel: "#BDBDBD",
        divider: "#F0F0F0",
        success: {
          bg: "#F0FAF4",
          border: "#C8ECD6",
        },
        warning: {
          bg: "#FFF8E1",
          amber: "#FFC107",
        },
      },
      borderRadius: {
        card: "16px",
        button: "12px",
      },
    },
  },
};