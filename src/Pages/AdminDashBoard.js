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
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import EditIcon from "@mui/icons-material/Edit";
import MEDEXLogo from "../componant/MEDEXLogo.jpg";
import { useSelector } from "react-redux";
import { ModifiedTextField } from "../Theam/Theam";
import { useNavigate } from "react-router-dom";
import { services } from "../Services/services";

export default function AdminDashBoard() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const user = useSelector((state) => state.auth.authData?.email);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .max(255)
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must contain 8 characters, one uppercase, one lowercase, one number, and one special character."
      ),
  });

  const initialValues = {
    password: "",
  };

  const handleCreating = async (values) => {
    setLoading(true);
    const updatedValues = { ...values, user };

    try {
      const response = await services.updateUserPassword(updatedValues);
      if (response.isSuccess) {
        alert("Password updated successfully");
        setShowPasswordForm(false);
      } else {
        alert("Failed to update password");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ paddingX: { xs: 3, sm: 6, lg: 10 }, paddingY: 5 }}>
      {/* Profile Header */}
      <Card
        sx={{
          borderRadius: 5,
          backgroundColor: theme.palette.background.paper,
          textAlign: "center",
          padding: 4,
          boxShadow: theme.shadows[5],
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="primary.main">
          Admin Profile
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ marginTop: 1 }}>
          Manage your profile and admin activities
        </Typography>
      </Card>

      {/* Main Content */}
      <Box display="flex" justifyContent="center" paddingTop={5}>
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            maxWidth: 600,
            borderRadius: 5,
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Grid container spacing={3} justifyContent="center">
            {/* Logo and Welcome Section */}
            <Grid item xs={12} textAlign="center">
              <img alt="Medex Logo" src={MEDEXLogo} height={80} width={120} />
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ marginTop: 2, wordWrap: "break-word" }}
              >
                {user}
              </Typography>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                sx={{ marginTop: 1 }}
              >
                Welcome
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ marginTop: 1 }}
              >
                To Medex Institute
              </Typography>
            </Grid>

            <Divider sx={{ width: "100%", marginY: 3 }} />

            {/* Buttons Section */}
            <Grid item xs={12}>
              <Stack direction="column" spacing={2} alignItems="center">
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    textTransform: "none",
                    fontSize: "1rem",
                    paddingX: 3,
                    borderRadius: 5,
                  }}
                  onClick={() => setShowPasswordForm(!showPasswordForm)}
                >
                  Edit User Password
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<AccountBoxIcon />}
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    textTransform: "none",
                    fontSize: "1rem",
                    paddingX: 3,
                    borderRadius: 5,
                  }}
                  onClick={() => navigate("/addNewUser")}
                >
                  User Creation
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<PersonRemoveIcon />}
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    textTransform: "none",
                    fontSize: "1rem",
                    paddingX: 3,
                    borderRadius: 5,
                  }}
                  onClick={() => navigate("/deleteUser")}
                >
                  Delete User
                </Button>
              </Stack>
            </Grid>

            {/* Password Form */}
            {showPasswordForm && (
              <Grid item xs={12}>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => handleCreating(values)}
                >
                  {({
                    errors,
                    touched,
                    values,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isValid,
                  }) => (
                    <form noValidate onSubmit={handleSubmit}>
                      <Stack spacing={2}>
                        <ModifiedTextField
                          fullWidth
                          label="New Password"
                          name="password"
                          value={values.password}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          helperText={
                            touched.password && errors.password
                              ? errors.password
                              : "Enter a strong password"
                          }
                          error={Boolean(touched.password && errors.password)}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          disabled={!isValid || loading}
                          sx={{
                            width: "100%",
                            textTransform: "none",
                            padding: 1.5,
                            fontSize: "1rem",
                            borderRadius: 5,
                          }}
                        >
                          {loading ? (
                            <CircularProgress size={24} sx={{ color: "white" }} />
                          ) : (
                            "Update Password"
                          )}
                        </Button>
                      </Stack>
                    </form>
                  )}
                </Formik>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}
