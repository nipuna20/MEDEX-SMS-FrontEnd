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

export default function AddPayedStudent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { courseId } = useParams();
  // const [initialValues, setInitialValues] = useState(null);

  const [coursesData, setCoursesData] = useState([]);

  const fetchCoursesData = () => {
    services.CoursesData().then((response) => {
      if (response.isSuccess) {
        setCoursesData(response.data);
      }
    });
  };

  useEffect(() => {
    fetchCoursesData();
  }, []);

  const handleCreating = (values) => {
    setLoading(true);
    console.log("valuse : ", values);

    services.addPaidStudentInLectureMaterial(values).then((response) => {
      if (response.isSuccess) {
        console.log("valuse in respons : ", values);
        navigate("/Resources");
        alert("your Course create successfully");
      } else {
        console.log("add Course response error");
      }
      setLoading(false);
    });
  };


  const validationSchema = Yup.object().shape({
    courseName: Yup.string().required("Course Name is required"),
    studentId: Yup.string().required("StudentId is required"),
    email: Yup.string().required("email is required"),
  });

  const initialValues = {
    courseName: "",
    studentId: "",
    email: "",

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
                  navigate("/Resources");
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
                            <CardHeader title="ADD New Paid Student"></CardHeader>
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
                                  <Grid item xs={12}>
                                    <ModifiedTextField
                                      select
                                      label="Select Course"
                                      name="courseName" // Update this to match initialValues and schema
                                      value={values.courseName} // Update this to match initialValues
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      fullWidth
                                      margin="normal"
                                      helperText={
                                        touched.courseName && errors.courseName
                                          ? errors.courseName
                                          : ""
                                      }
                                      error={Boolean(
                                        touched.courseName && errors.courseName
                                      )}
                                    >
                                      {coursesData.map((course, index) => (
                                        <MenuItem
                                          key={index}
                                          value={course.CourseName}
                                        >
                                          {course.CourseName}
                                        </MenuItem>
                                      ))}
                                    </ModifiedTextField>
                                  </Grid>
                                  <Grid item xs={12} md={12} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="studentId"
                                      name="studentId"
                                      value={values.studentId}
                                      onBlur={handleBlur}
                                      helperText={errors.studentId}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.studentId && errors.studentId
                                      )}
                                    // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={12} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="student Email"
                                      name="email"
                                      value={values.email}
                                      onBlur={handleBlur}
                                      helperText={errors.email}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.email && errors.email
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
                                    Create New Subject
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
