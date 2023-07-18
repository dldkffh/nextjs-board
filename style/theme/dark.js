import { createTheme } from "@mui/material";

const darkTheme = createTheme({
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
      mode: "dark",
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
      subBg: "#121212",
      contrastTheme: "#ffffff",
      primary: {
         main: "#7EB4D9",
         dark: "#3B95D2",
         // dark: '#2C719E',
      },
      secondary: {
         main: "#9891D9",
         dark: "#5E50D9",
         // dark: '#3D348B',
      },
      error: {
         main: "#CE6D9F",
         dark: "#C52D7C",
         // dark: '#91215B',
      },
      warning: {
         main: "#F7BC91",
         dark: "#F69148",
         // dark: '#C27238',
      },
      info: {
         main: "#e3f2fd",
         dark: "#90caf9",
         // dark: '#42a5f5',
      },
      success: {
         main: "#81E06E",
         dark: "#36A61F",
         // dark: '#30951C',
      },
   },
});

export default darkTheme