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
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

import React, { useState } from "react";
import { ModifiedTextField } from "../Theam/Theam";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { services } from "../Services/services";
import Loade from "../componant/Loader";

export default function AddCourses() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreating = (values) => {
    // setLoading(true);
    console.log("valuse : ", values);

    services.createCourses(values).then((response) => {
      if (response.isSuccess) {
        console.log("valuse in respons : ", values);
        navigate("/AdminDashBoard");
        alert("your Course create successfully");
      } else {
        console.log("add Course respons error");
      }
      // setLoading(false);
    });
  };

  const validationSchema = Yup.object().shape({
    // AllowanceID: Yup.string().required("Emplyee ID is required"),
    CourseName: Yup.string().required("Course Name is required"),
    CourseDuration: Yup.string().required("Course Duration time is required"),
    FullPayment: Yup.number()
      .required("Full Payment is required")
      .positive("Full Payment must be a positive number")
      .integer("Full Payment must be a whole number"),
      InstallmentWise: Yup.number()
      .required("InstallmentWise is required")
      .positive("InstallmentWiset must be a positive number")
      .integer("InstallmentWise must be a whole number"),
      FirstPayment: Yup.number()
      .required("First Payment is required")
      .positive("First Payment must be a positive number")
      .integer("First Payment must be a whole number"),
      RegistrationFee: Yup.number()
      .required("Registration Fee is required")
      .positive("Registration Fee must be a positive number")
      .integer("Registration Fee must be a whole number"),
      OtherDetails: Yup.string().required("Course Name is required"),
  });

  const initialValues = {
    // AllowanceID: "",
    CourseName: "",
    CourseDuration: "",
    FullPayment: 0,
    InstallmentWise:0,
    FirstPayment:0,
    RegistrationFee:0,
    OtherDetails:"",
  };
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
                            <CardHeader title="ADD Course"></CardHeader>
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
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Course Name"
                                      name="CourseName"
                                      value={values.CourseName}
                                      onBlur={handleBlur}
                                      helperText={errors.CourseName}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.CourseName && errors.CourseName
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="CourseDuration"
                                      name="CourseDuration"
                                      value={values.CourseDuration}
                                      onBlur={handleBlur}
                                      helperText={errors.CourseDuration}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.CourseDuration &&
                                          errors.CourseDuration
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Full Payment"
                                      name="FullPayment"
                                      value={values.FullPayment}
                                      onBlur={handleBlur}
                                      helperText={errors.FullPayment}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.FullPayment &&
                                          errors.FullPayment
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Installment Wise"
                                      name="InstallmentWise"
                                      value={values.InstallmentWise}
                                      onBlur={handleBlur}
                                      helperText={errors.InstallmentWise}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.InstallmentWise &&
                                          errors.InstallmentWise
                                      )}
                                    //   required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="First Payment"
                                      name="FirstPayment"
                                      value={values.FirstPayment}
                                      onBlur={handleBlur}
                                      helperText={errors.FirstPayment}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.FirstPayment &&
                                          errors.FirstPayment
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Registration Fee"
                                      name="RegistrationFee"
                                      value={values.RegistrationFee}
                                      onBlur={handleBlur}
                                      helperText={errors.RegistrationFee}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.RegistrationFee &&
                                          errors.RegistrationFee
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={12} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Other Details"
                                      name="OtherDetails"
                                      value={values.OtherDetails}
                                      onBlur={handleBlur}
                                      helperText={errors.OtherDetails}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.OtherDetails && errors.OtherDetails
                                      )}
                                      // required
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
                                    Create New Course
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
