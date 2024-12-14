import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  MenuItem,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ModifiedTextField } from "../Theam/Theam";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Loade from "../componant/Loader";
import { services } from "../Services/services";

export default function AddLectureMaterial() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    console.log("Submitted values:", values);

    // Example for file upload
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    services.addMaterialsForCourse(formData).then((response) => {
      if (response.isSuccess) {
        navigate("/Resources");
        alert("Your Course was created successfully!");
      } else {
        console.error("Error creating course");
      }
      setLoading(false);
    });
  };

  const validationSchema = Yup.object().shape({
    courseName: Yup.string().required("Course Name is required"),
    materialName: Yup.string().required("Material Name is required"),
    materialType: Yup.string().required("Material Type is required"),
    materialDescription: Yup.string().required(
      "Material Description is required"
    ),
    file: Yup.mixed()
      .required("File is required")
      .test("fileSize", "File size is too large", (value) =>
        value ? value.size <= 5 * 1024 * 1024 : true
      )
      .test("fileType", "Unsupported file format", (value) =>
        value
          ? ["application/pdf", "image/png", "image/jpeg"].includes(value.type)
          : true
      ),
  });

  const initialValues = {
    courseName: "",
    materialName: "",
    materialType: "",
    materialDescription: "",
    file: null,
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
            setFieldValue,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Button
                variant="contained"
                sx={{
                  marginTop: 4,
                  marginLeft: 4,
                  borderRadius: 5,
                  paddingLeft: "1.2em",
                  paddingRight: "1.2em",
                  backgroundColor: "rgb(216, 0, 50, 0.2)",
                  color: "red",
                  fontSize: 16,
                  border: "1px solid red",
                }}
                onClick={() => navigate("/Resources")}
              >
                <b>{" < "} Back</b>
              </Button>

              <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
                <Container maxWidth="lg" sx={{ padding: 2 }}>
                  <Stack spacing={2}>
                    <Grid
                      container
                      spacing={2}
                      sx={{ justifyContent: "space-around" }}
                    >
                      <Grid item xs={12} md={7} lg={7} xl={8} margin={2}>
                        <Card sx={{ borderRadius: 6 }} elevation={10}>
                          <CardHeader title="Add New Lecture Material" />
                          <hr
                            style={{
                              color: "white",
                              marginLeft: 15,
                              marginRight: 15,
                            }}
                          />
                          <CardContent>
                            <Grid container spacing={2}>
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

                              <Grid item xs={12}>
                                <ModifiedTextField
                                  fullWidth
                                  label="Material Name"
                                  name="materialName"
                                  value={values.materialName}
                                  onBlur={handleBlur}
                                  helperText={errors.materialName}
                                  onChange={handleChange}
                                  error={Boolean(
                                    touched.materialName && errors.materialName
                                  )}
                                />
                              </Grid>

                              <Grid item xs={12}>
                                <ModifiedTextField
                                  fullWidth
                                  label="Material Type"
                                  name="materialType"
                                  value={values.materialType}
                                  onBlur={handleBlur}
                                  helperText={errors.materialType}
                                  onChange={handleChange}
                                  error={Boolean(
                                    touched.materialType && errors.materialType
                                  )}
                                />
                              </Grid>

                              <Grid item xs={12}>
                                <ModifiedTextField
                                  fullWidth
                                  label="Material Description"
                                  name="materialDescription"
                                  value={values.materialDescription}
                                  onBlur={handleBlur}
                                  helperText={errors.materialDescription}
                                  onChange={handleChange}
                                  error={Boolean(
                                    touched.materialDescription &&
                                      errors.materialDescription
                                  )}
                                />
                              </Grid>

                              {/* File Upload Field */}
                              <Grid
                                item
                                xs={12}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                // sx={{ minHeight: "200px" }}
                              >
                                <input
                                  id="file-upload"
                                  name="file"
                                  type="file"
                                  style={{ display: "none" }} // Hide the default input
                                  onChange={(event) => {
                                    setFieldValue(
                                      "file",
                                      event.currentTarget.files[0]
                                    );
                                  }}
                                />
                                <label htmlFor="file-upload">
                                  <Button
                                    variant="contained"
                                    component="span"
                                    sx={{
                                      borderRadius: 3,
                                      backgroundColor: "#1976d2",
                                      color: "white",
                                      padding: "10px 20px",
                                      textTransform: "none",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignContent: "center",
                                    }}
                                  >
                                    Upload File
                                  </Button>
                                </label>
                                {errors.file && touched.file && (
                                  <div
                                    style={{
                                      color: "red",
                                      fontSize: "0.9em",
                                      marginTop: "8px",
                                    }}
                                  >
                                    {errors.file}
                                  </div>
                                )}
                              </Grid>

                              <Grid
                                item
                                xs={12}
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  // minHeight: "200px", // Optional: adjust height for vertical centering
                                }}
                              >
                                <Button
                                  type="submit"
                                  variant="contained"
                                  disabled={isSubmitting}
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
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
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
