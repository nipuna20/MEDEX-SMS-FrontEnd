import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componant/Header";
import Footer from "../componant/Footer";
import SideBar from "../componant/SideBar";
import { Box, Toolbar } from "@mui/material";

export default function AuthorHeader() {
  return (
    <div>
      {/* <Header /> */}

      {/* <div
        style={{
          minHeight: "70vh",
          width: "calc(100% - 88px)",
          marginLeft: 0,
          display: "flex",
          justifyContent: "left",
        }}
      > */}
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <Outlet/> */}
        <SideBar />
        {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box> */}
      </div>


{/* for development*/}


      {/* <Footer /> */}
    </div>
  );
}
