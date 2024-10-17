import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { ModifiedTextField } from "../Theam/Theam";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { services } from "../Services/services";
import { red } from "@mui/material/colors";
import Loade from "../componant/Loader";

export default function AddJobPosition() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreating = (values) => {
    setLoading(true)
    console.log("valuse : ", values);
    services.createJobPosition(values).then((response) => {
      if (response.isSuccess) {
        console.log("valuse : ", values);
        navigate("/JobPosition");
        alert("your card create successfully");
      } else {
        console.log("add card respons error");
      }
      setLoading(false)
    });
  };

  const validationSchema = Yup.object().shape({
    // JobPositionID: Yup.string().required("Job Position ID is required"),
    JobTitle: Yup.string().required("Job Title is required"),
    DepartmentName: Yup.string().required("Department name is required"),
    Reporting: Yup.boolean().required("Switch Value is required"),
    NumberOfEmployees: Yup.number()
      .required("Number of Employees is required")
      .integer("Number of Employees must be an integer")
      .min(0, "Number of Employees must be greater than or equal to 0"),
  });

  const initialValues = {
    //  JobPositionID: "",
    JobTitle: "",
    DepartmentName: "",
    NumberOfEmployees: "",
    // Reporting: "",
    Reporting: false,
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
                  navigate("/JobPosition");
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
                            <CardHeader title="ADD JOB POSITION"></CardHeader>
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
                                      label="Job Title"
                                      name="JobTitle"
                                      value={values.JobTitle}
                                      onBlur={handleBlur}
                                      helperText={errors.JobTitle}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.JobTitle && errors.JobTitle
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Department Name"
                                      name="DepartmentName"
                                      value={values.DepartmentName}
                                      onBlur={handleBlur}
                                      helperText={errors.DepartmentName}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.DepartmentName &&
                                          errors.DepartmentName
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Number Of Employees"
                                      name="NumberOfEmployees"
                                      value={values.NumberOfEmployees}
                                      onBlur={handleBlur}
                                      helperText={errors.NumberOfEmployees}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.NumberOfEmployees &&
                                          errors.NumberOfEmployees
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <FormControl component="fieldset">
                                      <Typography variant="h6">
                                        Reporting
                                      </Typography>
                                      <FormControlLabel
                                        control={
                                          <Switch
                                            name="Reporting"
                                            checked={values.Reporting}
                                            onChange={handleChange}
                                          />
                                        }
                                        label={
                                          values.Reporting ? "Yes" : "No"
                                        }
                                      />
                                    </FormControl>
                                  </Grid>

                                  <Divider />
                                  <br />

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
                                    Create Job Position
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
