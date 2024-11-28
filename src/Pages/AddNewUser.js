import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { ModifiedTextField } from "../Theam/Theam";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { services } from "../Services/services";
import Loade from "../componant/Loader";

export default function AddNewUser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { courseId } = useParams();

  

  const handleCreating = (values) => {
    setLoading(true);
    console.log("valuse : ", values);

    

    services.createNewUser(values).then((response) => {
      if (response.isSuccess) {
        console.log("valuse in respons : ", values);
        navigate("/AdminDashBoard");
        // alert("your Course create successfully");
      } else {
        console.log("add Course respons error");
      }
      setLoading(false);
    });
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().max(255).required("User mail is required"),
    password: Yup.string()
      .max(255)
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const initialValues = {
   
    username: "",
    password: "",
  };

  if (!initialValues) return <Loade />;

  return (
    <>
      <Card
        sx={{
          borderRadius: 10,
          backgroundColor: "rgb(180, 180, 179, 0.5 )",
          marginLeft: 4,
          marginRight: 4,
        }}
        elevation={2}
      >
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
            setFieldValue,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Button
                variant="contained"
                sx={{
                  marginTop: 4,
                  marginLeft: 4,
                  borderRadius: 5,
                  paddingLeft: 2.5,
                  paddingRight: 2.5,
                  paddingTop: 1.2,
                  paddingBottom: 1.2,
                  backgroundColor: "rgb(216, 0, 50, 0.2)",
                  color: "red",
                  fontSize: 16,
                  border: "1px solid red",
                }}
                onClick={() => {
                  navigate("/AdminDashBoard");
                }}
              >
                <b> {" < "} back </b>
              </Button>

              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  py: 8,
                }}
              >
                <Container maxWidth="lg" sx={{ padding: 2 }}>
                  <Stack spacing={2}>
                    <div>
                      <Grid
                        container
                        spacing={2}
                        sx={{ justifyContent: "space-around" }}
                      >
                        <Grid item xs={12} md={7} lg={7} xl={8} margin={2}>
                          <Card sx={{ borderRadius: 6 }} elevation={10}>
                            <CardHeader title="ADD New User"></CardHeader>
                            <hr
                              style={{
                                color: "white",
                                marginLeft: 15,
                                marginRight: 15,
                              }}
                            />
                            <CardContent>
                              <Box
                                sx={{
                                  alignItems: "center",
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <Grid container spacing={1}>
                                  <ModifiedTextField
                                    type="email"
                                    id="outlined-basic"
                                    label="User Email"
                                    name="username"
                                    placeholder="Enter Your User Email"
                                    variant="outlined"
                                    fullWidth
                                    value={values.username}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    helperText={errors.username}
                                    error={Boolean(
                                      touched.username && errors.username
                                    )}
                                  />
                                  <br />
                                  <br />
                                  <ModifiedTextField
                                    id="outlined-basic"
                                    label="Password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    variant="outlined"
                                    fullWidth
                                    //   type={showPassword ? "text" : "password"}
                                    value={values.password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    helperText={errors.password}
                                    error={Boolean(
                                      touched.password && errors.password
                                    )}
                                    InputProps={{
                                      endAdornment: (
                                        <InputAdornment position="end">
                                          {/* <IconButton onClick={togglePasswordVisibility}>
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton> */}
                                        </InputAdornment>
                                      ),
                                    }}
                                  />

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
                                    Create New User
                                  </Button>
                                </Grid>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      </Grid>
                    </div>
                  </Stack>
                </Container>
              </Box>
            </form>
          )}
        </Formik>
        {loading && <Loade />}
      </Card>
    </>
  );
}
