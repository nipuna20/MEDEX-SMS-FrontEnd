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
import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "./const";
import { Dashboard } from "@mui/icons-material";

const drawerWidth = 280;

////// new side bar ///////

export default function ClippedDrawer() {
  const navigate = useNavigate();
  const [showZoomSessions, setShowZoomSessions] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData?.email);
  console.log("redux User",user)
  const handleChange = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Avatar
            sx={{ height: 55, width: 55 }}
            aria-label="recipe"
            // src="https://dsuabgmmtxmj1.cloudfront.net/companyweb/adeona_new_logo_circle.png"
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
            L M S
          </Typography>
          {/* <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography> */}
          <Typography>Welcome {user}</Typography>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            variant="contained"
            onClick={handleChange}
            sx={{ borderRadius: 3 }}
          >
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <br />
            <Card
              sx={{
                borderRadius: 3,
                marginTop: 0.3,
                marginBottom: 0.3,
                marginLeft: 1,
                marginRight: 1,
              }}
            >
              <CardActionArea
                sx={{ paddingTop: 1.5, paddingBottom: 1.5 }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <div style={{ display: "flex", marginLeft: 15 }}>
                  <Dashboard />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Typography>COURSES</Typography>
                </div>
              </CardActionArea>
            </Card>

            <br />
            <Divider />
            <br />

            <Card
              sx={{
                borderRadius: 3,
                marginTop: 0.3,
                marginBottom: 0.3,
                marginLeft: 1,
                marginRight: 1,
              }}
            >
              <CardActionArea
                sx={{ paddingTop: 1.5, paddingBottom: 1.5 }}
                onClick={() => setShowZoomSessions((prev) => !prev)} // Toggle visibility of zoom sessions
              >
                <div style={{ display: "flex", marginLeft: 15 }}>
                  <Dashboard />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Typography>ZOOM SESSIONS</Typography>
                </div>
              </CardActionArea>
            </Card>
            <br />
            {/* Conditionally render online sessions and recordings based on showZoomSessions state */}
            {showZoomSessions && (
              <>
                <CardActionArea
                  sx={{ paddingTop: 1.5, paddingBottom: 1.5 }}
                  onClick={() => navigate("/ZoomOnlineSessions")}
                >
                  <div style={{ display: "flex", marginLeft: 15 }}>
                    <MailIcon /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Typography sx={{ fontSize: "14px" }}>
                      ONLINE SESSIONS
                    </Typography>
                  </div>
                </CardActionArea>
                <CardActionArea
                  sx={{ paddingTop: 1.5, paddingBottom: 1.5 }}
                  onClick={() => navigate("/ZoomRecordings")}
                >
                  <div style={{ display: "flex", marginLeft: 15 }}>
                    <MailIcon /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Typography sx={{ fontSize: "14px" }}>
                      RECORDINGS
                    </Typography>
                  </div>
                </CardActionArea>
                <Divider />
              </>
            )}

            <br />
            <Divider />
            <br />

            <Card
              sx={{
                borderRadius: 3,
                marginTop: 0.3,
                marginBottom: 0.3,
                marginLeft: 1,
                marginRight: 1,
              }}
            >
              <CardActionArea
                sx={{ paddingTop: 1.5, paddingBottom: 1.5 }}
                onClick={() => {
                  navigate("/payments");
                }}
              >
                <div style={{ display: "flex", marginLeft: 15 }}>
                  <Dashboard />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Typography>PAYMENTS</Typography>
                </div>
              </CardActionArea>
            </Card>

            <br />
            <Divider />
            <br />

            <Card
              sx={{
                borderRadius: 3,
                marginTop: 0.3,
                marginBottom: 0.3,
                marginLeft: 1,
                marginRight: 1,
              }}
            >
              <CardActionArea
                sx={{ paddingTop: 1.5, paddingBottom: 1.5 }}
                onClick={() => {
                  navigate("/Resources");
                }}
              >
                <div style={{ display: "flex", marginLeft: 15 }}>
                  <Dashboard />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Typography>RESOURCES</Typography>
                </div>
              </CardActionArea>
            </Card>

            <br />
            <Divider />
            <br />

            <Card
              sx={{
                borderRadius: 3,
                marginTop: 0.3,
                marginBottom: 0.3,
                marginLeft: 1,
                marginRight: 1,
              }}
            >
              <CardActionArea
                sx={{ paddingTop: 1.5, paddingBottom: 1.5 }}
                onClick={() => {
                  navigate("/EXAMS");
                }}
              >
                <div style={{ display: "flex", marginLeft: 15 }}>
                  <Dashboard />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Typography>EXAMS</Typography>
                </div>
              </CardActionArea>
            </Card>
          </List>
        </Box>
      </Drawer>
      <Box>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

//////////////////////////

// const NAVIGATION = [
//   {
//     kind: 'header',
//     title: 'Main items',
//   },
//   {
//     segment: 'dashboard',
//     title: 'Dashboard',
//     icon: <DashboardIcon />,
//   },
//   {
//     segment: 'orders',
//     title: 'Orders',
//     icon: <ShoppingCartIcon />,
//   },
//   {
//     kind: 'divider',
//   },
//   {
//     kind: 'header',
//     title: 'Analytics',
//   },
//   {
//     segment: 'reports',
//     title: 'Reports',
//     icon: <BarChartIcon />,
//     children: [
//       {
//         segment: 'sales',
//         title: 'Sales',
//         icon: <DescriptionIcon />,
//       },
//       {
//         segment: 'traffic',
//         title: 'Traffic',
//         icon: <DescriptionIcon />,
//       },
//     ],
//   },
//   {
//     segment: 'integrations',
//     title: 'Integrations',
//     icon: <LayersIcon />,
//   },
// ];

// const demoTheme = createTheme({
//   cssVariables: {
//     colorSchemeSelector: 'data-toolpad-color-scheme',
//   },
//   colorSchemes: { light: true, dark: true },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// function DemoPageContent({ pathname }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <Typography>Dashboard content for {pathname}</Typography>
//     </Box>
//   );
// }

// DemoPageContent.propTypes = {
//   pathname: PropTypes.string.isRequired,
// };

// export default function ClippedDrawer(props) {
//   const { window } = props;

//   const [pathname, setPathname] = React.useState('/dashboard');

//   const router = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path) => setPathname(String(path)),
//     };
//   }, [pathname]);

//   // Remove this const when copying and pasting into your project.
//   const demoWindow = window !== undefined ? window() : undefined;

//   return (
//        // preview-start
//        <AppProvider
//        navigation={NAVIGATION}
//        router={router}
//        theme={demoTheme}
//        window={demoWindow}
//      >
//        <DashboardLayout>
//          <DemoPageContent pathname={pathname} />
//        </DashboardLayout>
//      </AppProvider>
//      // preview-end
//   );
// }
