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
} from "@mui/material";
import { services } from "../Services/services";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function ExamList() {
 const navigate= useNavigate()
  const [resultData, setResultsData] = useState([]);
  const [result, setResult] = useState(null);

  const fetchResultsData = () => {
    services.ResultsData().then((response) => {
      if (response.isSuccess) {
        setResultsData(response.data); // Use the data directly as it is
      }
    });
  };

  useEffect(() => {
    fetchResultsData();
  }, []);

  const handleClear = () => {
    setResult(null); // Reset result only
    window.location.reload();
  };

  const handleCreating = (values) => {
    // Handle the result fetching or any logic to get the result for the selected course/subject
    const course = resultData.find(
      (course) => course.courseName === values.selectedCourse
    );
    const subject = course?.Subjects.find(
      (subject) => subject.subjectName === values.selectedSubject
    );
    const studentResult = subject?.StudentResults.find(
      (result) => result.studentId === parseInt(values.ID)
    );

    if (studentResult) {
      setResult({
        courseName: values.selectedCourse,
        subjectName: values.selectedSubject,
        result: studentResult.Result,
      });
    } else {
      setResult({
        courseName: values.selectedCourse,
        subjectName: values.selectedSubject,
        result: "No result found for the selected student",
      });
    }
  };

  const validationSchema = Yup.object().shape({
    ID: Yup.string().required("ID is required"),
    selectedCourse: Yup.string().required("Course selection is required"),
    selectedSubject: Yup.string().required("Subject selection is required"),
  });

  const initialValues = {
    ID: "",
    selectedCourse: "",
    selectedSubject: "",
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
          View Exam Results
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
                    {resultData.map((course, index) => (
                      <MenuItem key={index} value={course.courseName}>
                        {course.courseName}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {values.selectedCourse && (
                  <Grid item xs={12}>
                    <TextField
                      select
                      label="Select Subject"
                      name="selectedSubject"
                      value={values.selectedSubject}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                      helperText={
                        touched.selectedSubject && errors.selectedSubject
                          ? errors.selectedSubject
                          : ""
                      }
                      error={Boolean(
                        touched.selectedSubject && errors.selectedSubject
                      )}
                    >
                      {resultData
                        .find(
                          (course) =>
                            course.courseName === values.selectedCourse
                        )
                        ?.Subjects.map((subject, index) => (
                          <MenuItem key={index} value={subject.subjectName}>
                            {subject.subjectName}
                          </MenuItem>
                        ))}
                    </TextField>
                  </Grid>
                )}

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Student ID"
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
                    disabled={
                      !isValid ||
                      isSubmitting ||
                      !values.selectedCourse ||
                      !values.selectedSubject ||
                      !values.ID
                    }
                    fullWidth
                    sx={{ mt: 2, borderRadius: 3 }}
                  >
                    Show Result
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>

        {result && (
          <>
            <Box
              sx={{ mt: 4, p: 2, border: "1px solid #ddd", borderRadius: 1 }}
            >
              <Typography variant="subtitle1">
                Exam: {result.courseName}
              </Typography>
              <Typography variant="subtitle2">
                Subject: {result.subjectName}
              </Typography>
              <Typography variant="h6">Result: {result.result}</Typography>
            </Box>

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
      <Box mt={4} textAlign="center" justifyContent={"space-between"}>
        <Button
          variant="contained"
          color="primary"
          sx={{ margin: 2, mt: 2, borderRadius: 3 }}

            onClick={() => {
              navigate("/AddNewSubject");
            }}
        >
          Add New Subject
        </Button>

        <Button
          variant="contained"
          color="primary"
          sx={{ margin: 2, mt: 2, borderRadius: 3 }}
            onClick={() => {
              navigate("/AddStudentResult");
            }}
        >
          Add Student Result
        </Button>
      </Box>
    </Container>
  );
}
