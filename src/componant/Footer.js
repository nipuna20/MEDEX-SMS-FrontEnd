import { AppBar, Avatar, Box, Container, Grid, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <AppBar position="static" >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ marginBottom: 2 }}>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Grid container>
              <Grid items xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 4,
                    // width: 1300,
                  }}
                >
                  <Box sx={{ marginLeft: 2, display: "flex" }}>
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton sx={{ p: 0 }}>
                          <Avatar
                            alt="Remy Sharp"
                            src="https://dsuabgmmtxmj1.cloudfront.net/companyweb/adeona_new_logo_circle.png"
                          />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                        mr: 2,
                        // display: { xs: 'none', md: 'flex' },
                        marginLeft: 2,
                        display: "flex",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      Adeona Technologies
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box sx={{ marginRight: 3 }}>
                        <Typography
                          variant="h6"
                          noWrap
                          component="a"
                          href="/"
                          sx={{
                            display: { xs: "none", md: "flex" },

                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".0.5rem",
                            color: "inherit",
                            textDecoration: "none",
                          }}
                        >
                          Privacy Policy
                        </Typography>
                      </Box>
                      <Box sx={{ marginRight: 3 }}>
                        <Typography
                          variant="h6"
                          noWrap
                          component="a"
                          href="/"
                          sx={{
                            display: { xs: "none", md: "flex" },

                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".0.5rem",
                            color: "inherit",
                            textDecoration: "none",
                            marginLeft: 0,
                          }}
                        >
                          Terms
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid items xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 12,
                    marginLeft: 4,
                    // width: 1300,
                  }}
                >
                  <Box>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      display: { xs: "none", md: "flex" },
                      // display:"flex",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: "0.1rem",
                      color: "inherit",
                      textDecoration: "none",
                      marginLeft: 0,
                      fontSize: 12,
                    }}
                  >
                    @ 2023 Copyright: Adeona Technologies PVT (LTD) All Rights
                    Reserved
                  </Typography>
                  </Box>
                  <Box sx={{width:120, display:"flex" ,justifyContent:"space-between", }}>
                  <AiFillFacebook />

                  <AiOutlineTwitter />

                  <AiOutlineInstagram />

                  <AiFillLinkedin />
                  </Box>
                  <Box sx={{justifyContent:"space-between", display:"flex",  }}>
                    <Box>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      display: { xs: "flex", md: "none" },
                      // display:"flex",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".0.5rem",
                      color: "inherit",
                      textDecoration: "none",
                      marginLeft: 0,
                    }}
                  >
                    Privacy Policy
                  </Typography>
                  </Box>
                  <Box sx={{marginLeft:3}}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      display: { xs: "flex", md: "none" },
                      // display:"flex",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".0.5rem",
                      color: "inherit",
                      textDecoration: "none",
                      marginLeft: 0,
                    }}
                  >
                    Terms
                  </Typography>
                  </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
    // <div style={{width:"100%"}}>
    //   <Box sx={{ flexGrow: 1, marginBottom: 0 }}>
    //     <AppBar
    //       position="static"
    //       sx={{ backgroundColor: "rgb(39, 158, 255, 0.5 )" }}
    //     >
    //       <Toolbar>
    //         <Avatar
    //           sx={{
    //             backgroundColor: "rgb(39, 158, 255, 0.5 )",
    //             height: 55,
    //             width: 55,
    //             marginLeft: 45,
    //             marginTop: 3,
    //             marginBottom: 3,
    //           }}
    //           aria-label="recipe"
    //           src="https://dsuabgmmtxmj1.cloudfront.net/companyweb/adeona_new_logo_circle.png"
    //         />
    //         <div style={{ display: "flex", marginLeft: "auto" }}>
    //           <Typography>Privacy Policy</Typography>
    //           &nbsp;&nbsp; &nbsp;&nbsp;
    //           <Typography>Terms</Typography>
    //           &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
    //         </div>
    //       </Toolbar>

    //       <hr style={{ color: "white", margin: "40px 80px" }} />
    //       <div
    //         style={{
    //           display: "flex",
    //           marginRight: "auto",
    //           marginLeft: 350,
    //           marginTop: 45,
    //         }}
    //       >
    //         <Typography sx={{ fontSize: 10 }}> @ 2023 Copyright: </Typography>
    //         <Typography sx={{ color: "blue", fontSize: 10 }}>
    //           {" "}
    //           &nbsp; Adeona Technologies PVT (LTD) &nbsp;{" "}
    //         </Typography>{" "}
    //         <Typography sx={{ fontSize: 10 }}> All Rights Reserved </Typography>
    //       </div>
    //       <div
    //         style={{
    //           display: "flex",
    //           marginLeft: "auto",
    //           marginRight: 80,
    //           marginBottom: 20,
    //         }}
    //       >
    //         <AiFillFacebook />
    //         &nbsp;&nbsp;&nbsp;
    //         <AiOutlineTwitter />
    //         &nbsp;&nbsp;&nbsp;
    //         <AiOutlineInstagram />
    //         &nbsp;&nbsp;&nbsp;
    //         <AiFillLinkedin />
    //       </div>
    //     </AppBar>
    //   </Box>
    // </div>
  );
}
