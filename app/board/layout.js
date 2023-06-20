"use client";

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Popover from "@mui/material/Popover";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";

import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import SegmentIcon from "@mui/icons-material/Segment";

// import { useDispatch } from "react-redux";
// import { changeLanguage, checkBIC } from "@/store/bicSlice";
import { useTranslations } from "next-intl";

export default function BoardLayout({ children }) {
   // const dispatch = useDispatch();
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   //언어 설정
   const t = useTranslations("Index");

   // useEffect(() => {
   //    // Run! Like go get some data from an API.
   //    dispatch(checkBIC())
   //  }, []);

   return (
      <>
         <AppBar position='static' sx={{ height: "60px" }}>
            <Container maxWidth='xl' sx={{ height: "inherit" }}>
               <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  spacing={2}
                  sx={{ height: "inherit" }}
               >
                  <Link href='/board/list' underline='none' color='inherit'>
                     <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                        <FiberSmartRecordIcon sx={{ mr: 1 }} />
                        <Typography
                           variant='h6'
                           component='div'
                           sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}
                        >
                           Fiber Smart Record
                        </Typography>
                     </Stack>
                  </Link>

                  {/* 메뉴 버튼 */}
                  <IconButton onClick={handleClick} aria-label='delete' color='inherit'>
                     <SegmentIcon />
                  </IconButton>

                  {/* 메뉴 팝업 */}
                  <Popover
                     id='basic-menu'
                     anchorEl={anchorEl}
                     open={open}
                     onClose={handleClose}
                     sx={{
                        marginTop: "20px",
                        width: "100%",
                        padding: "0px 0px",
                     }}
                     anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                     }}
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     PaperProps={{
                        sx: {
                           border: 1,
                           borderRadius: "15px",
                        },
                     }}
                  >
                     <Box
                        sx={{
                           height: "auto",
                           width: "370px",
                           maxWidth: "100%",
                           padding: "10px",
                        }}
                     >
                        <Stack
                           sx={{
                              padding: "5px",
                              border: 1,
                              borderRadius: "10px",
                              paddingTop: "17.5px",
                              paddingBottom: "10px",
                              paddingLeft: "10px",
                              paddingRight: "10px",
                           }}
                        >
                           <Box
                              sx={{
                                 marginBottom: "17.5px",
                              }}
                           >
                              {/* 사용자 프로필 */}
                              <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
                                 <Avatar
                                    alt='Remy Sharp'
                                    // src='/static/images/avatar/1.jpg'
                                    sx={{ width: "96px", height: "96px" }}
                                 />
                                 <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                                    <Box>
                                       <Typography variant='body2'>
                                          이순신 <br /> @leess
                                       </Typography>
                                    </Box>
                                    <Box>
                                       <IconButton onClick={handleClose} aria-label='delete' color='inherit'>
                                          <EditIcon sx={{ width: "16px", height: "16px" }} />
                                       </IconButton>
                                    </Box>
                                 </Grid>
                              </Stack>
                           </Box>
                           <Button variant='outlined' onClick={handleClose}>
                              로그아웃
                              <LogoutIcon sx={{ position: "absolute", right: "10px", width: "16px", height: "16px" }} />
                           </Button>
                        </Stack>
                     </Box>
                     {/* 언어 설정 */}
                     <ListItemButton component='a'>
                        <ListItemText primary={t("set_language")} />
                        <Typography variant='body2'>{t("language")}</Typography>
                     </ListItemButton>
                     <ListItem sx={{ paddingRight: "10px", paddingLeft: "10px" }}>
                        <Select
                           labelId='demo-select-small-label'
                           id='demo-select-small'
                           // value={age}
                           // label='Age'
                           // onChange={handleChange}
                           sx={{ width: "100%" }}
                           size='small'
                        >
                           <MenuItem value={"en"} onClick={() => dispatch(changeLanguage("en"))}>
                              English(en)
                           </MenuItem>
                           <MenuItem value={"ko"} onClick={() => dispatch(changeLanguage("ko"))}>
                              한국어(ko)
                           </MenuItem>
                        </Select>
                     </ListItem>
                     {/* 모드 설정 */}
                     <ListItemButton component='a'>
                        <ListItemText primary={t("set_mode")} />
                        <Typography variant='body2' gutterBottom>
                           시스템
                        </Typography>
                     </ListItemButton>
                     <ListItem sx={{ paddingRight: "10px", paddingLeft: "10px" }}>
                        <Select
                           labelId='demo-select-small-label'
                           id='demo-select-small'
                           // value={age}
                           // label='Age'
                           // onChange={handleChange}
                           sx={{ width: "100%", marginBottom: "3px" }}
                           size='small'
                        >
                           <MenuItem value={"light"}>{t("light_mode")}</MenuItem>
                           <MenuItem value={"dark"}>{t("dark_mode")}</MenuItem>
                           <MenuItem value={"system"}>{t("system_mode")}</MenuItem>
                        </Select>
                     </ListItem>
                  </Popover>
               </Stack>
            </Container>
         </AppBar>

         <Container maxWidth='xl' sx={{ marginBottom: "4rem" }}>
            <main>{children}</main>
         </Container>
      </>
   );
}
