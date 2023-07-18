import React from "react";

// 구조
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// 언어 변경
import { useTranslation } from "react-i18next";

export default function Edit() {
   const { t } = useTranslation("common");

   return (
      <>
         <Stack spacing={3} sx={{ marginTop: 4 }}>
            <Box>
               <TextField id='standard-basic' variant='standard' label='제목' sx={{ width: "100%" }} />
            </Box>
            <Paper>
               <TextField id='outlined-basic' variant='outlined' multiline rows={27} sx={{ width: "100%" }} />
            </Paper>
            <Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={1}>
               <Button href='/' variant='outlined'>{t("cancel")}</Button>
               <Button href='/' variant='contained'>{t("save")}</Button>
            </Stack>
         </Stack>
      </>
   );
}
