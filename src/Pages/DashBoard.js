import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import MEDEXLogo from "../componant/MEDEXLogo.jpg";
import { useSelector } from "react-redux";
import { ModifiedTextField } from "../Theam/Theam";
import { services } from "../Services/services";

export default function Payments() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const user = useSelector((state) => state.auth.authData?.email);
  const [loading, setLoading] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .max(255)
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Password must be at least 8 characters long, including uppercase, lowercase, a number, and a special character."
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
      setLoading(false);
      if (response.isSuccess) {
        alert("Password updated successfully");
        window.location.reload();
      } else {
        alert("Error updating password. Please try again.");
      }
    } catch (error) {
      alert("An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <Box sx={{ marginX: { xs: 2, sm: 6, lg: 12 }, marginTop: 4 }}>
      {/* Header Card */}
      <Card
        sx={{
          borderRadius: 8,
          backgroundColor: theme.palette.background.paper,
          textAlign: "center",
          padding: 3,
        }}
        elevation={3}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: 1 }}>
          User Profile
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Manage your profile and update your account details
        </Typography>
      </Card>

      {/* Main Content */}
      <Box display="flex" justifyContent="center" paddingTop={5}>
        <Paper
          elevation={4}
          sx={{
            padding: { xs: 3, sm: 4, md: 5 },
            maxWidth: 600,
            borderRadius: 5,
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Grid container spacing={3}>
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

            <Divider sx={{ width: "100%", marginY: 2 }} />

            {/* Edit Password Button */}
            <Grid item xs={12} textAlign="center">
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontSize: "1rem",
                  textTransform: "none",
                  paddingX: 3,
                  borderRadius: 5,
                }}
                onClick={() => setShowPasswordForm(!showPasswordForm)}
              >
                Edit User Password
              </Button>
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
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
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
                                : "Must be at least 8 characters."
                            }
                            error={Boolean(touched.password && errors.password)}
                          />
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{
                              borderRadius: 5,
                              paddingX: 4,
                              paddingY: 1.2,
                              textTransform: "none",
                              fontSize: "1rem",
                              width: { xs: "100%", sm: "auto" },
                            }}
                            disabled={!isValid || loading}
                          >
                            {loading ? (
                              <CircularProgress
                                size={24}
                                sx={{ color: "white" }}
                              />
                            ) : (
                              "Update Password"
                            )}
                          </Button>
                        </Grid>
                      </Grid>
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
