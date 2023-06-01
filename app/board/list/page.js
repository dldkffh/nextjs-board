"use client";
import React from "react";
import { Table, TableBody, Pagination, Stack, Box, Grid, List, ListItem, ListItemText } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

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
      "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
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

export default function BoardList() {
   return (
      <>
         <Typography variant='h6' component='div' sx={{ flexGrow: 1, marginBottom: "20px" }}>
            게시판
         </Typography>

         <Grid
            container
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            spacing={2}
            sx={{ marginBottom: "20px" }}
         >
            <TextField size='small' variant='outlined' />
            <Button variant='outlined' href='#outlined-buttons' size='medium'>
               <SearchIcon />
            </Button>
         </Grid>

         {/* <TableContainer component={Paper} sx={{}}>
            <Table sx={{ border: 0 }} aria-label='a table'>
               <TableBody>
                  {rows.map((row) => (
                     <TableRow
                        key={row.name}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 }, minHeight: "200px", border: 2 }}
                     >
                        <TableCell component='th' scope='row' sx={{ border: 1 }}>
                           {row.name}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer> */}

         <Box sx={{ marginBottom: "20px" }}>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
               {rows.map((row) => (
                  <ListItem key={row.name}>
                     <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Box>
                           <Typography variant='body2' sx={{ marginBottom: "10px" }}>
                              {row.name} {row.uid} {row.date}
                           </Typography>
                           <Typography variant='h6' sx={{ marginBottom: "10px" }}>
                              {row.title}
                           </Typography>
                           <Typography variant='body2' component='div'>
                              {row.contents}
                           </Typography>
                        </Box>
                        <Box>
                           {/* <img
                              src={`${rows.img}?w=164&h=164&fit=crop&auto=format`}
                              srcSet={`${rows.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                              alt={rows.title}
                              loading='lazy'
                           /> */}
                        </Box>
                     </Grid>
                  </ListItem>
   
               ))}
            </List>
         </Box>

         <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Pagination count={10} variant='outlined' shape='rounded' />
         </Grid>
      </>
   );
}
