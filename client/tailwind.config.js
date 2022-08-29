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
      black: "#1B1B1B",
      white: "#fff",
      shimgray: "#e5e5e5",
      lllgray: "#f4f5f6",
      llgray: "#F3F4F5",
      lgray: "#d1d7d3",
      gray: "#c2ccc6",
      background: "#e7e7e7",
      //primary
      lprimary: "#282775",
      primary: "#04035e",
      //secondary
      lsecondary: "#f7b229",
      secondary: "#f7ad19",
      //success
      lllsuccess: "#68dd89",
      llsuccess: "#3fd468",
      lsuccess: "#2fd15c",
      success: "#2bc255",
      //danger
      llldanger: "#dc6273",
      lldanger: "#d2364c",
      ldanger: "#c92c42",
      danger: "#b8293d",
      //warning
      lllwarning: "#f6a859",
      llwarning: "#f4912e",
      lwarning: "#f3881c",
      warning: "#f27f0c",
      //info
      lllinfo: "#7dcef6",
      llinfo: "#5bc1f3",
      linfo: "#4ebcf2",
      info: "#40b7f2",
    },

    extend: {
      fontFamily: {
        vazir: ["Vazirmatn", "Serif"],
      },
    },
  },
  plugins: [],
};
