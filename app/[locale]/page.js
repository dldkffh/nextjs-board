"use client";

// import { useSelector, useDispatch } from "react-redux";
import { useTranslations } from "next-intl";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
   color: theme.status.danger,
   "&.Mui-checked": {
      color: theme.status.danger,
   },
}));

const theme = createTheme({
   status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
});

export default function Home() {
   // const isDarkTheme = useSelector((state) => state.bic.isDarkTheme);
   const t = useTranslations("Index");

   return (
      <>
         <ThemeProvider theme={theme}>
            {t("title")}
            Home
            <CustomCheckbox defaultChecked />
         </ThemeProvider>
      </>
   );
}
