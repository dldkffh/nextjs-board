import React from "react";

// 구조
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// 언어 변경
import { useTranslation } from "react-i18next";

export default function View() {
   const { t } = useTranslation("common");

   return (
      <>
         <Stack spacing={3} sx={{ marginTop: 6 }}>
            <Box>
               <Typography component='h1' variant='h5'>
                  제목
               </Typography>
            </Box>
            <Box>
               <Typography component='body1'>본문 글씨</Typography>
            </Box>
            <Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={1}>
               <Button href='/' variant='outlined'>{t("delete")}</Button>
               <Button variant='contained'>{t("edit")}</Button>
            </Stack>
         </Stack>
      </>
   );
}
