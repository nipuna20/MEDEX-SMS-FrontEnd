import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Box,
  Grid,
  Divider,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { services } from "../Services/services";
import { useNavigate } from "react-router-dom";

export default function ResourcesAdmin() {
  const [resources, setResources] = useState(null);
  const [showResources, setShowResources] = useState(false);
  const [coursesData, setCoursesData] = useState([]);
  const [courseResources, setCourseResources] = useState({});
  const navigate = useNavigate();

  const fetchLectureMaterial = () => {
    services.lectureMaterialData().then((response) => {
      if (response.isSuccess) {
        setCourseResources(response.data);
        //  console.log("Aaaaaaaaaaaaaaaaaaaa",response)
      }
    });
  };

  const fetchCoursesData = () => {
    services.CoursesData().then((response) => {
      if (response.isSuccess) {
        setCoursesData(response.data);
      }
    });
  };

  useEffect(() => {
    fetchCoursesData();
    fetchLectureMaterial();
  }, []);

  console.log("courseResources sample final array :", courseResources);

  const handleClear = () => {
    setResources(null);
    setShowResources(false);
  };

  const handleCreating = (values) => {
    console.log("Form values: ", values);

    const selectedCourseFromAPI = coursesData.find(
      (course) => course.CourseName === values.selectedCourse
    );

    if (!selectedCourseFromAPI) {
      console.error("Course name not found in fetched data.");
      return;
    }

    const matchedCourse = courseResources.find(
      (resource) => resource.courseName === selectedCourseFromAPI.CourseName
    );

    if (matchedCourse) {
      const matchedStudent = matchedCourse.paidStudents.find(
        (student) => student.studentId.toString() === values.ID
      );

      if (matchedStudent) {
        setResources(matchedCourse);
        setShowResources(true);
      } else {
        console.error("ID not found in the selected course.");
        alert("Your ID is incorrect, give me correct Paid User ID");
        window.location.reload();
      }
    } else {
      console.error("Course name not found in local resources.");
    }
  };

  const validationSchema = Yup.object().shape({
    ID: Yup.string().required("ID is required"),
    selectedCourse: Yup.string().required("Course selection is required"),
  });

  const initialValues = {
    ID: "",
    selectedCourse: "",
  };

  return (
    <>
      <Container maxWidth="xl">
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "rgba(240, 240, 240, 0.8)",
            padding: 4,
            mt: 4,
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            View Available Resources
          </Typography>

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
              isSubmitting,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      select
                      label="Select Course"
                      name="selectedCourse"
                      value={values.selectedCourse}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      margin="normal"
                      helperText={
                        touched.selectedCourse && errors.selectedCourse
                          ? errors.selectedCourse
                          : ""
                      }
                      error={Boolean(
                        touched.selectedCourse && errors.selectedCourse
                      )}
                    >
                      {coursesData.map((course, index) => (
                        <MenuItem key={index} value={course.CourseName}>
                          {course.CourseName}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="ID"
                      name="ID"
                      value={values.ID}
                      onBlur={handleBlur}
                      helperText={touched.ID && errors.ID ? errors.ID : ""}
                      onChange={handleChange}
                      error={Boolean(touched.ID && errors.ID)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={!(isValid || isSubmitting)}
                      fullWidth
                      sx={{
                        mt: 2,
                        borderRadius: 3,
                      }}
                    >
                      Resources
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>

          {showResources && resources && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Course Name: {resources.courseName}
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Typography variant="subtitle1">Lecture Materials:</Typography>
              {resources.lectureMaterials.map((material, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="body1">
                    <strong>Name:</strong> {material.materialName}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Description:</strong> {material.materialDescription}
                  </Typography>
                  {material.materialLink && (
                    <Box sx={{ mt: 2 }}>
                      {material.materialType === "pdf" ? (
                        <iframe
                          src={`${process.env.REACT_APP_IMAGE_URL}${material.materialLink}`}
                          title={material.materialName}
                          style={{
                            width: "100%",
                            height: "500px",
                            border: "1px solid #ccc",
                          }}
                        />
                      ) : (
                        <img
                          src={`${process.env.REACT_APP_IMAGE_URL}${material.materialLink}`}
                          alt={material.materialName}
                          style={{
                            width: "100%",
                            maxHeight: "500px",
                            objectFit: "contain",
                          }}
                        />
                      )}
                    </Box>
                  )}
                </Box>
              ))}

              {/* Clear Button */}
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClear}
                fullWidth
                sx={{ mt: 2 }}
              >
                Clear
              </Button>
            </Box>
          )}
        </Paper>
        <Box mt={4} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            sx={{ margin: 2, mt: 2, borderRadius: 3 }}
            onClick={() => navigate("/AddLectureMaterial")}
          >
            Add Lecture Material
          </Button>
          <Button
            variant="contained"
            sx={{ margin: 2, mt: 2, borderRadius: 3 }}
            onClick={() => navigate("/AddPayedStudent")}
          >
            Add Payed Student
          </Button>
        </Box>
      </Container>
    </>
  );
}