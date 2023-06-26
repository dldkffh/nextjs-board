import Header from "../header";
import Footer from "../footer";

import { useSelector, useDispatch } from "react-redux";

import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "@/style/theme/dark";
import lightTheme from "@/style/theme/light";

import { Container } from "@mui/material";

// https://react.i18next.com/latest/i18nextprovider
import i18n from "@/lib/i18n";
import { I18nextProvider } from "react-i18next";

export default function Layout({ children }) {
   const language = useSelector((state) => state.bic.language);
   const isDarkTheme = useSelector((state) => state.bic.isDarkTheme);

   return (
      <MuiThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
         <I18nextProvider i18n={i18n} defaultNS={"common"}>
            <CssBaseline />
            <Header />
            <Container maxWidth='xl' sx={{ marginBottom: "4rem" }}>
               <main>{children}</main>
            </Container>
            <Footer />
         </I18nextProvider>
      </MuiThemeProvider>
   );
}
