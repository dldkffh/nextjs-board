import React, { useState, useEffect } from "react";

import Header from "../header";
import Footer from "../footer";

import { useSelector, useDispatch } from "react-redux";
import { checkBIC } from "@/store/slice/bicSlice";

import { signIn, useSession, signOut } from "next-auth/react";

import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "@/style/theme/dark";
import lightTheme from "@/style/theme/light";

import { Container } from "@mui/material";

// https://react.i18next.com/latest/i18nextprovider

export default function Layout({ children }) {
   const dispatch = useDispatch();
   const language = useSelector((state) => state.bic.language);
   const isDarkTheme = useSelector((state) => state.bic.isDarkTheme);

   useEffect(() => {
      dispatch(checkBIC());
   }, []);

   return (
      <MuiThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
         <CssBaseline />
         <Header />
         <Container maxWidth='md' sx={{ marginBottom: "4rem" }}>
            <main>{children}</main>
         </Container>
         <Footer />
      </MuiThemeProvider>
   );
}
