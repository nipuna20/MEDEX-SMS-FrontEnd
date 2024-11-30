import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MEDEXLogo from "../componant/MEDEXLogo.jpg";
import { useSelector } from "react-redux";
import { ModifiedTextField } from "../Theam/Theam";
import { useNavigate } from "react-router-dom";
import { services } from "../Services/services";
import Loade from "../componant/Loader";

export default function AdminDashBoard() {
  const navigate = useNavigate();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const user = useSelector((state) => state.auth.authData?.email);
  const [showPasswordForm, setShowPasswordForm] = useState(false); // Visibility state
  const [loading, setLoading] = useState(false);

  const paperStyle = {
    padding: 5,
    maxWidth: { xs: 500, lg: 575 },
    margin: { xs: 2.5, md: 3 },
    borderRadius: 8,
    "& > *": {
      flexGrow: 1,
      flexBasis: "50%",
    },
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .max(255)
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const initialValues = {
    password: "",
  };

  const handleCreating = (values) => {
    setLoading(true);
    console.log("Values:", values);
    const updatedValues = {
      ...values,
      user,
    };
    console.log("updatedValues:", updatedValues);

    services.updateUserPassword(updatedValues).then((response) => {
      if (response.isSuccess) {
        console.log("valuse in respons : ", updatedValues);
        window.location.reload();
        alert("Update New Password successfully");
      } else {
        console.log("add Course respons error");
      }
      setLoading(false);
    });
  };

  return (
    <Box sx={{marginLeft:60, marginRight:60,}}>
      <Card
        sx={{
          borderRadius: 10,
          backgroundColor: "rgb(180, 180, 179, 0.5 )",
          paddingLeft: 20,
          paddingRight: 20,
        }}
        elevation={2}
      >
        <h2 style={{ textAlign: "center", marginTop: 30, marginBottom: 30 }}>
          <b>ADMIN PROFILE</b>
        </h2>
      </Card>
      <Box display="flex" justifyContent={"flex-start"} paddingTop={5}>
        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
          <Paper elevation={10} sx={paperStyle}>
            <Grid align={"center"} marginTop={4}>
              <img alt="" src={MEDEXLogo} height={70} width={110} />
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  display: "flex",
                  marginTop: 5,
                  fontSize: {
                    xs: "1.25rem",
                    sm: "1.5rem",
                    md: "1.75rem",
                  },
                  wordWrap: "break-word",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                {user}
              </Typography>
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
                  <Button
                    color="secondary"
                    sx={{
                      display: "flex",
                      marginTop: 5,
                      fontSize: "1.1rem",
                      wordWrap: "break-word",
                      textAlign: "center",
                    }}
                    onClick={() => setShowPasswordForm(!showPasswordForm)}
                  >
                    Edit User Password
                  </Button>

                  {/* Conditionally Render Password Form */}
                  {showPasswordForm && (
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={(values) => handleCreating(values)}
                    >
                      {({
                        errors,
                        touched,
                        values,
                        isSubmitting,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isValid,
                      }) => (
                        <form noValidate onSubmit={handleSubmit}>
                          <Box>
                            <Grid container spacing={1}>
                              <Grid item xs={12} md={12} padding={1}>
                                <ModifiedTextField
                                  fullWidth
                                  label="New Password"
                                  name="password"
                                  value={values.password}
                                  onBlur={handleBlur}
                                  helperText={errors.password}
                                  onChange={handleChange}
                                  error={Boolean(
                                    touched.password && errors.password
                                  )}
                                />
                              </Grid>
                              <Divider />
                              <Button
                                type="submit"
                                variant="contained"
                                disabled={!(isValid || isSubmitting)}
                                sx={{
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  textAlign: "center",
                                  margin: "auto",
                                  borderRadius: 3,
                                }}
                              >
                                Create New Password
                              </Button>
                            </Grid>
                          </Box>
                        </form>
                      )}
                    </Formik>
                  )}
                  {loading && <Loade />}
                  <br />

                  <br />

                  <Button
                    variant="contained"
                    startIcon={<AccountBoxIcon />}
                    sx={{ padding: 1.5 }}
                    onClick={() => navigate("/addNewUser")}
                  >
                    User Creation
                  </Button>
                </Stack>
              </Grid>
              <br />
            </Grid>
          </Paper>
        </Grid>
      </Box>
    </Box>
  );
}
