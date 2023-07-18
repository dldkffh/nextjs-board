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
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from "@mui/icons-material/Logout";

import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import SegmentIcon from "@mui/icons-material/Segment";

import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage, changeMode, checkBIC } from "@/store/slice/bicSlice";

import { signIn, useSession, signOut } from "next-auth/react";

const Header = () => {
   const dispatch = useDispatch();
   const { data, status } = useSession();

   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   const { t } = useTranslation("common");

   const { language, mode, isDarkTheme } = useSelector((state) => state.bic);

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
                  <Link href='/' underline='none' color='inherit'>
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
                              padding: "12px",
                           }}
                        >
                           {/* <Button variant='outlined' onClick={handleClose}>
                              {t("logout")}
                              <LogoutIcon sx={{ position: "absolute", right: "10px", width: "16px", height: "16px" }} />
                           </Button> */}
                           {data?.user ? (
                              <>
                                 <Box
                                    sx={{
                                       marginTop: "7.5px",
                                       marginBottom: "17.5px",
                                    }}
                                 >
                                    {/* 사용자 프로필 */}
                                    <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
                                       <Avatar
                                          alt='Remy Sharp'
                                          src={data?.user?.image}
                                          sx={{ width: "96px", height: "96px" }}
                                       />
                                       <Grid
                                          container
                                          direction='row'
                                          justifyContent='space-between'
                                          alignItems='center'
                                       >
                                          <Box>
                                             <Typography variant='body2'>{data?.user?.name}</Typography>
                                             <Typography variant='body2'>{data?.user?.email}</Typography>
                                          </Box>
                                          <Box>
                                             <IconButton onClick={handleClose} aria-label='delete' color='inherit'>
                                                <SettingsIcon sx={{ width: "16px", height: "16px" }} />
                                             </IconButton>
                                          </Box>
                                       </Grid>
                                    </Stack>
                                 </Box>
                                 <Button href='/' onClick={() => signOut()}>Logout</Button>
                              </>
                           ) : (
                              <Button to='/' onClick={() => signIn("google")}>Google Login</Button>
                           )}
                        </Stack>
                     </Box>
                     {/* 언어 설정 */}
                     <ListItemButton component='a'>
                        <ListItemText primary={t("set_language")} />
                        <Typography variant='body2'>{t("current_language")}</Typography>
                     </ListItemButton>
                     <ListItem sx={{ paddingRight: "10px", paddingLeft: "10px" }}>
                        <Select
                           labelId='demo-select-small-label'
                           id='demo-select-small'
                           value={language}
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
                           {t(mode + "_mode")}
                        </Typography>
                     </ListItemButton>
                     <ListItem sx={{ paddingRight: "10px", paddingLeft: "10px" }}>
                        <Select
                           labelId='demo-select-small-label'
                           id='demo-select-small'
                           value={mode}
                           // label='Age'
                           // onChange={handleChange}
                           sx={{ width: "100%", marginBottom: "3px" }}
                           size='small'
                        >
                           <MenuItem value={"light"} onClick={() => dispatch(changeMode("light"))}>
                              {t("light_mode")}
                           </MenuItem>
                           <MenuItem value={"dark"} onClick={() => dispatch(changeMode("dark"))}>
                              {t("dark_mode")}
                           </MenuItem>
                           <MenuItem value={"system"} onClick={() => dispatch(changeMode("system"))}>
                              {t("system_mode")}
                           </MenuItem>
                        </Select>
                     </ListItem>
                  </Popover>
               </Stack>
            </Container>
         </AppBar>
      </>
   );
};

export default Header;
