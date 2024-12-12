import {
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import FinalLogo from "../componant/FinalLogo.png";
import BackgroundImage from "../componant/background.jpg"; // Ensure this path is correct

export default function MainLogin() {
  const navigate = useNavigate();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const paperStyle = {
    padding: 5,
    maxWidth: { xs: 400, lg: 475 },
    margin: { xs: 2.5, md: 3 },
    borderRadius: 8,
    "& > *": {
      flexGrow: 1,
      flexBasis: "50%",
    },
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
        <Paper elevation={10} sx={paperStyle}>
          <Grid align={"center"} marginTop={4}>
            <img alt="" src={FinalLogo} height={70} width={110} />
            <Typography fontSize="40px">Login</Typography>
            <Grid item>
              <Stack alignItems="center" justifyContent="center" spacing={1}>
                <Typography
                  fontWeight="bold"
                  color={theme.palette.primary.main}
                  gutterBottom
                  variant={matchDownSM ? "h3" : "h2"}
                >
                  Welcome
                </Typography>
                <Typography
                  variant="caption"
                  fontSize="18px"
                  textAlign={matchDownSM ? "center" : "inherit"}
                >
                  To Medex Institute
                </Typography>
                <br />

                <br />
                <br />
                <br />

                <br />
                <br />
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    navigate("/Login", { state: { role: "Admin" } });
                  }}
                >
                  Admin
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    navigate("/Login", { state: { role: "Student" } });
                  }}
                >
                  Student
                </Button>
                <br />
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    navigate("/Certi", { state: { role: "Admin" } });
                  }}
                >
                  Certificates
                </Button>

                <br />
              </Stack>
            </Grid>
            <br />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
