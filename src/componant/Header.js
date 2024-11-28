import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "./const";

export default function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.authData.userData?.fname);

  /// for development
  // const user = useSelector((state) => state.auth.authData.data?.email);


  // console.log("user is a", user);

  const handleChange = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop:10 }}>
        <AppBar position="static">
          <Toolbar>
            <Avatar
              sx={{ height: 55, width: 55 }}
              aria-label="recipe"
              src="https://dsuabgmmtxmj1.cloudfront.net/companyweb/adeona_new_logo_circle.png"
            />
            
            &nbsp;&nbsp;
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Adeona Technogy
            </Typography>
            {/* <Typography>Welcome {user}</Typography> */}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" onClick={handleChange} sx={{ borderRadius: 3,}} >
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
     
    </>
  );
}
