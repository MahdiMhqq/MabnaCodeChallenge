module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1400px",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      shimgray: "#e5e5e5",
      gray: "#EEEEF0",
      dgray: "#B6B9C0",
      background: "#F8F7FC",
      //primary
      lprimary: "#58627D",
      primary: "#2E3440",
      //secondary
      lsecondary: "#f7b229",
      secondary: "#f7ad19",
      //success
      success: "#4FCCA4",
      //danger
      ldanger: "#f1807f",
      danger: "#ED5250",
      //warning
      warning: "#f27f0c",
      //info
      linfo: "#0597FA",
      info: "#1378A6",
    },

    extend: {
      fontFamily: {
        vazir: ["Vazirmatn", "Serif"],
      },
    },
  },
  plugins: [],
};
