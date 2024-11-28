import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CssBaseline,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Dashboard,
  Logout,
  School,
  VideoLibrary,
  Payment,
  Book,
} from "@mui/icons-material";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "./const";
import FinalLogo from './FinalLogo.png'

const drawerWidth = 280;

export default function LMSApp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData?.email);

  const [showZoomSessions, setShowZoomSessions] = useState(false);

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
  };

  // Reusable MenuItem Component with Icon Color
  const MenuItem = ({ icon, label, onClick, iconColor }) => (
    <Card
      sx={{
        borderRadius: 3,
        margin: 1,
        ":hover": {
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardActionArea
        sx={{
          padding: 1.5,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
        onClick={onClick}
      >
        <Box sx={{ color: iconColor }}>{icon}</Box>
        <Typography variant="body1" fontWeight="bold">
          {label}
        </Typography>
      </CardActionArea>
    </Card>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Top AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "primary.main",
        }}
      >
        <Toolbar>
          <Avatar
            sx={{ height: 55, width: 55 }}
            alt="Logo"
            src={FinalLogo}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              marginLeft: 2,
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            LMS
          </Typography>
          <Typography>Welcome, {user}</Typography>
          <Button
            variant="contained"
            onClick={handleLogout}
            sx={{
              marginLeft: 3,
              borderRadius: 2,
              textTransform: "none",
              backgroundColor: "secondary.main",
              ":hover": { backgroundColor: "secondary.dark" },
            }}
          >
            <Logout sx={{ marginRight: 1 }} /> Sign Out
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid #e0e0e0",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", padding: 2 }}>
          <List>
            {/* Main Menu Items */}
            <MenuItem
              icon={<Dashboard />}
              label="Courses"
              onClick={() => navigate("/")}
              iconColor="blue"
            />

            <Divider sx={{ my: 2 }} />

            {/* Zoom Sessions Menu */}
            <MenuItem
              icon={<VideoLibrary />}
              label="Zoom Sessions"
              onClick={() => setShowZoomSessions((prev) => !prev)}
              iconColor="green"
            />
            {showZoomSessions && (
              <>
                <MenuItem
                  icon={<School />}
                  label="Online Sessions"
                  onClick={() => navigate("/ZoomOnlineSessions")}
                  iconColor="purple"
                />
                <MenuItem
                  icon={<School />}
                  label="Recordings"
                  onClick={() => navigate("/ZoomRecordings")}
                  iconColor="purple"
                />
              </>
            )}

            <Divider sx={{ my: 2 }} />

            {/* Other Sections */}
            <MenuItem
              icon={<Payment />}
              label="Payments"
              onClick={() => navigate("/payments")}
              iconColor="orange"
            />
            <MenuItem
              icon={<Book />}
              label="Resources"
              onClick={() => navigate("/Resources")}
              iconColor="red"
            />
            <MenuItem
              icon={<Dashboard />}
              label="Exams"
              onClick={() => navigate("/EXAMS")}
              iconColor="teal"
            />
          </List>
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.900" : "grey.100",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {/* Content Rendered by React Router */}
        <Outlet />
      </Box>
    </Box>
  );
}
