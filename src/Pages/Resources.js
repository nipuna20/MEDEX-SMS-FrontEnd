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
import { ModifiedTextField } from "../Theam/Theam";
import * as Yup from "yup";
import { Formik } from "formik";
import { services } from "../Services/services";

const courseResources = {
  "Course 1": [
    "Resource 1.1 - PDF Guide",
    "Resource 1.2 - Video Tutorial",
    "Resource 1.3 - Practice Quiz",
  ],
  "Course 2": [
    "Resource 2.1 - PDF Guide",
    "Resource 2.2 - Video Tutorial",
    "Resource 2.3 - Practice Quiz",
  ],
  "Course 3": [
    "Resource 3.1 - PDF Guide",
    "Resource 3.2 - Video Tutorial",
    "Resource 3.3 - Practice Quiz",
  ],
};

const ResourcesPage = () => {
  const [resources, setResources] = useState(null);
  const [showResources, setShowResources] = useState(false);
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

  const handleClear = () => {
    setResources(null);
    setShowResources(false);
  };

  const handleCreating = (values) => {
    console.log("Form values: ", values);
    const selectedResources = courseResources[values.selectedCourse] || [];
    setResources(selectedResources);
    setShowResources(true);
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
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          mt: 4,
          backgroundColor: "rgb(180, 180, 179, 0.1 )",
          borderRadius: 3,
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
                {/* Course Selection Field */}
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
                    {coursesData.map((course) => (
                      <MenuItem key={course._id} value={course._id}>
                        {course.CourseName}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* ID Field */}
                <Grid item xs={12}>
                  <ModifiedTextField
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

                {/* Submit Button */}
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

        {/* Resources Section */}
        {showResources && (
          <>
            <Typography>dwefaerfegfer</Typography>

            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClear}
              fullWidth
              sx={{ mt: 2 }}
            >
              Clear
            </Button>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default ResourcesPage;
