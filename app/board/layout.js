"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Link from "@mui/material/Link";
import Select from "@mui/material/Select";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Popover from "@mui/material/Popover";
import Popper from "@mui/material/Popper";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Divider from "@mui/material/Divider";
import BodyFrame from "@/components/BodyFrame";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";

import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import SegmentIcon from "@mui/icons-material/Segment";

export default function BoardLayout({ children }) {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <>
         <AppBar position='static' sx={{ height: "60px", marginBottom: "20px" }}>
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
                                          이순신 <br/> @leess
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
                        <ListItemText primary='언어 설정' />
                        <Typography variant='body2'>
                           한국어
                        </Typography>
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
                           <MenuItem value=''>
                              <em>None</em>
                           </MenuItem>
                           <MenuItem value={10}>Ten</MenuItem>
                           <MenuItem value={20}>Twenty</MenuItem>
                           <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                     </ListItem>
                     {/* 모드 설정 */}
                     <ListItemButton component='a'>
                        <ListItemText primary='모드 설정' />
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
                           <MenuItem value=''>
                              <em>None</em>
                           </MenuItem>
                           <MenuItem value={10}>Ten</MenuItem>
                           <MenuItem value={20}>Twenty</MenuItem>
                           <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                     </ListItem>
                  </Popover>
               </Stack>
            </Container>
         </AppBar>

         <Container maxWidth='xl'>
            <main>{children}</main>
         </Container>
      </>
   );
}
