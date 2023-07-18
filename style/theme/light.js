import { createTheme } from "@mui/material";

const lightTheme = createTheme({
   typography: {
      fontSize: 14,
      fontFamily: [
         "Pretendard",
         "-apple-system",
         "BlinkMacSystemFont",
         '"Segoe UI"',
         "Roboto",
         "Oxygen",
         "Ubuntu",
         "Cantarell",
         '"Fira Sans"',
         '"Droid Sans"',
         '"Helvetica Neue"',
         "sans-serif",
      ].join(","),
   },
   palette: {
      mode: "light",
      fix: {
         bg: "#232323",
         text: "#F8F8F8",
         blur: "rgb(0,0,0,0)",
         darker: {
            bg: "#333333",
            textp: "#fff",
            texts: "rgba(225, 225, 225, 0.7)",
         },
      },
      subBg: "#efefef",
      contrastTheme: "#000000",
      primary: {
         light: "#7EB4D9",
         main: "#3B95D2",
         dark: "#2C719E",
      },
      secondary: {
         light: "#9891D9",
         main: "#5E50D9",
         dark: "#3D348B",
      },
      error: {
         light: "#CE6D9F",
         main: "#C52D7C",
         dark: "#91215B",
      },
      warning: {
         light: "#F7BC91",
         main: "#F69148",
         dark: "#C27238",
      },
      info: {
         light: "#e3f2fd",
         main: "#90caf9",
         dark: "#42a5f5",
      },
      success: {
         light: "#81E06E",
         main: "#36A61F",
         dark: "#30951C",
      },
   },
});

export default lightTheme
