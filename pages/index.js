import React from "react";

import Head from "next/head";
import Image from "next/image";
// import styles from '../style/Home.module.scss'
import { useSelector, useDispatch } from "react-redux";

// 테마
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "@/style/theme/dark";
import lightTheme from "@/style/theme/light";

// 구조
import { Paper, Box } from "@mui/material";

// 언어 변경
import { useTranslation } from "react-i18next";

export default function Home() {
   const language = useSelector((state) => state.bic.language);
   const isDarkTheme = useSelector((state) => state.bic.isDarkTheme);
   const { t } = useTranslation("common");

   return (
      <MuiThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
         <CssBaseline /> 
         <Paper sx={{ display: "flex", width: "100%", height: "100%" }}>
            {String(isDarkTheme)}\n
            {t("hello")}
         </Paper>
      </MuiThemeProvider>
   );
}
