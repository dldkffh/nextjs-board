import React from "react";

// import styles from '../style/Home.module.scss'
import { useSelector, useDispatch } from "react-redux";

// 테마
// import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
// import darkTheme from "@/style/theme/dark";
// import lightTheme from "@/style/theme/light";

// 구조
import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import { Container, Paper, Box, Link } from "@mui/material";
import { Table, TableBody, Pagination, Stack, Grid, List, ListItem, ListItemText } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

// 언어 변경
import { useTranslation } from "react-i18next";

import { useSession } from "next-auth/react";

function createData(title, name, uid, date, contents, img) {
   return { title, name, uid, date, contents, img };
}

const rows = [
   createData(
      "Frozen yoghurt",
      "이순신",
      "@leess",
      "14:16",
      "유구한 역사와 전통에 빛나는 우리 대한국민은 3ㆍ1운동으로 건립된 대한민국임시정부의 법통과 불의에 항거한 4ㆍ19민주이념을 계승하고, 조국의 민주개혁과 평화적 통일의 사명에 입각하여 정의ㆍ인도와 동포애로써 민족의 단결을 공고히 하고, 모든 사회적 폐습과 불의를 타파하며, 자율과 조화를 바탕으로 자유민주적 기본질서를 더욱 확고히 하여 정치ㆍ경제ㆍ사회ㆍ문화의 모든 영역에 있어서 각인의 기회를 균등히 하고, 능력을 최고도로 발휘하게 하며, 자유와 권리에 따르는 책임과 의무를 완수하게 하여, 안으로는 국민생활의 균등한 향상을 기하고 밖으로는 항구적인 세계평",
      "/photo-1551963831-b3b1ca40c98e"
   ),
   createData(
      "Ice cream sandwich",
      "이순신",
      "@leess",
      "14:16",
      "유구한 역사와 전통에 빛나는 우리 대한국민은 3ㆍ1운동으로 건립된 대한민국임시정부의 법통과 불의에 항거한 4ㆍ19민주이념을 계승하고, 조국의 민주개혁과 평화적 통일의 사명에 입각하여 정의ㆍ인도와 동포애로써 민족의 단결을 공고히 하고, 모든 사회적 폐습과 불의를 타파하며, 자율과 조화를 바탕으로 자유민주적 기본질서를 더욱 확고히 하여 정치ㆍ경제ㆍ사회ㆍ문화의 모든 영역에 있어서 각인의 기회를 균등히 하고, 능력을 최고도로 발휘하게 하며, 자유와 권리에 따르는 책임과 의무를 완수하게 하여, 안으로는 국민생활의 균등한 향상을 기하고 밖으로는 항구적인 세계평"
   ),
   createData(
      "Eclair",
      "이순신",
      "@leess",
      "14:16",
      "유구한 역사와 전통에 빛나는 우리 대한국민은 3ㆍ1운동으로 건립된 대한민국임시정부의 법통과 불의에 항거한 4ㆍ19민주이념을 계승하고, 조국의 민주개혁과 평화적 통일의 사명에 입각하여 정의ㆍ인도와 동포애로써 민족의 단결을 공고히 하고, 모든 사회적 폐습과 불의를 타파하며, 자율과 조화를 바탕으로 자유민주적 기본질서를 더욱 확고히 하여 정치ㆍ경제ㆍ사회ㆍ문화의 모든 영역에 있어서 각인의 기회를 균등히 하고, 능력을 최고도로 발휘하게 하며, 자유와 권리에 따르는 책임과 의무를 완수하게 하여, 안으로는 국민생활의 균등한 향상을 기하고 밖으로는 항구적인 세계평"
   ),
   createData(
      "Cupcake",
      "이순신",
      "@leess",
      "14:16",
      "유구한 역사와 전통에 빛나는 우리 대한국민은 3ㆍ1운동으로 건립된 대한민국임시정부의 법통과 불의에 항거한 4ㆍ19민주이념을 계승하고, 조국의 민주개혁과 평화적 통일의 사명에 입각하여 정의ㆍ인도와 동포애로써 민족의 단결을 공고히 하고, 모든 사회적 폐습과 불의를 타파하며, 자율과 조화를 바탕으로 자유민주적 기본질서를 더욱 확고히 하여 정치ㆍ경제ㆍ사회ㆍ문화의 모든 영역에 있어서 각인의 기회를 균등히 하고, 능력을 최고도로 발휘하게 하며, 자유와 권리에 따르는 책임과 의무를 완수하게 하여, 안으로는 국민생활의 균등한 향상을 기하고 밖으로는 항구적인 세계평"
   ),
   createData(
      "Gingerbread",
      "이순신",
      "@leess",
      "14:16",
      "유구한 역사와 전통에 빛나는 우리 대한국민은 3ㆍ1운동으로 건립된 대한민국임시정부의 법통과 불의에 항거한 4ㆍ19민주이념을 계승하고, 조국의 민주개혁과 평화적 통일의 사명에 입각하여 정의ㆍ인도와 동포애로써 민족의 단결을 공고히 하고, 모든 사회적 폐습과 불의를 타파하며, 자율과 조화를 바탕으로 자유민주적 기본질서를 더욱 확고히 하여 정치ㆍ경제ㆍ사회ㆍ문화의 모든 영역에 있어서 각인의 기회를 균등히 하고, 능력을 최고도로 발휘하게 하며, 자유와 권리에 따르는 책임과 의무를 완수하게 하여, 안으로는 국민생활의 균등한 향상을 기하고 밖으로는 항구적인 세계평"
   ),
];

export default function Home() {
   const { data: session, status } = useSession();
   const { t } = useTranslation("common");

   return (
      <>
         <Box>
            <Typography className='page-title' component='h1'>
               {t("board")}
            </Typography>
         </Box>

         <Grid
            container
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            spacing={2}
            sx={{ marginTop: "1.75rem", height: "42px" }}
         >
            <TextField size='small' sx={{ height: "100%", width: "max-content" }} />
            <Button
               variant='outlined'
               size='small'
               href='#outlined-buttons'
               sx={{ padding: "0px", marginLeft: "10px", height: "100%", width: "42px" }}
            >
               <SearchIcon sx={{ height: "24px", width: "24px" }} />
            </Button>
         </Grid>

         <List sx={{ marginTop: 4, width: "100%", bgcolor: "background.paper" }}>
            {rows.map((row) => (
               <ListItem key={row.name} sx={{ marginTop: "10px" }}>
                  <Stack
                     container
                     justifyContent='flex-end'
                     alignItems='center'
                     spacing={2}
                     sx={{ flexDirection: { xs: "column", md: "row" } }}
                  >
                     <Link href='/view/id' underline='none' color='inherit'>
                        <Box>
                           <Typography variant='body2'>
                              {row.name} {row.uid} {row.date}
                           </Typography>
                           <Typography component='h2' variant='h5'>
                              {row.title}
                           </Typography>

                           <Typography variant='body2' component='div'>
                              {row.contents}
                           </Typography>
                        </Box>
                     </Link>
                  </Stack>
               </ListItem>
            ))}
         </List>

         <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ marginTop: "1.75rem" }}>
            <Pagination count={10} variant='outlined' shape='rounded' />
         </Grid>

         <Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={1} sx={{ marginTop: "1.75rem" }}>
            <Button disabled={!session} href='/edit/id' variant='contained'>
               {t("new_post")}
            </Button>
         </Stack>
      </>
   );
}
