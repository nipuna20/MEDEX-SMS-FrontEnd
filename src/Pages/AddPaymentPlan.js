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
  
  import React, { useEffect, useState } from "react";
  import { ModifiedTextField } from "../Theam/Theam";
  import { Formik } from "formik";
  import * as Yup from "yup";
  import { useNavigate, useParams } from "react-router-dom";
  import { services } from "../Services/services";
  import Loade from "../componant/Loader";
export default function AddPaymentPlan() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { courseId } = useParams();
    // const [initialValues, setInitialValues] = useState(null);
  
    const handleCreating = (values) => {
      setLoading(true);
      console.log("valuse : ", values);
  
      services.createPaymentPlan(values).then((response) => {
        if (response.isSuccess) {
          console.log("valuse in respons : ", values);
          navigate("/payments");
          alert("your payments create successfully");
        } else {
          console.log("add payments response error");
        }
        setLoading(false);
      });
    };
  
  
    const validationSchema = Yup.object().shape({
      // AllowanceID: Yup.string().required("Emplyee ID is required"),
      CourseName: Yup.string().required("Course Name is required"),
      PaymentPlansName: Yup.string().required("Payment Plans Name is required"),
      PaymentAmountForDuration: Yup.number()
        .required("Payment Amount For Duration is required")
        .positive("Full Payment must be a positive number")
        .integer("Full Payment must be a whole number"),
        TmeDuration: Yup.string().required("Time Duration is required"),
    });
  
    const initialValues = {
      // AllowanceID: "",
      CourseName: "",
      PaymentPlansName: "",
      PaymentAmountForDuration: 0,
      TmeDuration:"",
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
                    navigate("/payments");
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
                              <CardHeader title="ADD New Payment Plan"></CardHeader>
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
                                        label="Payment Plan Name"
                                        name="PaymentPlansName"
                                        value={values.PaymentPlansName}
                                        onBlur={handleBlur}
                                        helperText={errors.PaymentPlansName}
                                        onChange={handleChange}
                                        error={Boolean(
                                          touched.PaymentPlansName &&
                                            errors.PaymentPlansName
                                        )}
                                        // required
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={6} padding={1}>
                                      <ModifiedTextField
                                        fullWidth
                                        label="Payment Amount For Duration"
                                        name="PaymentAmountForDuration"
                                        value={values.PaymentAmountForDuration}
                                        onBlur={handleBlur}
                                        helperText={errors.PaymentAmountForDuration}
                                        onChange={handleChange}
                                        error={Boolean(
                                          touched.PaymentAmountForDuration &&
                                            errors.PaymentAmountForDuration
                                        )}
                                        // required
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={6} padding={1}>
                                      <ModifiedTextField
                                        fullWidth
                                        label="Time Duration"
                                        name="TmeDuration"
                                        value={values.TmeDuration}
                                        onBlur={handleBlur}
                                        helperText={errors.TmeDuration}
                                        onChange={handleChange}
                                        error={Boolean(
                                          touched.TmeDuration && errors.TmeDuration
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
                                      Create New Payment Plan
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
  