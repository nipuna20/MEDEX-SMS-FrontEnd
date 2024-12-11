import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
} from "@mui/material";

import React, { useState } from "react";
import { ModifiedTextField } from "../Theam/Theam";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loade from "../componant/Loader";
import { services } from "../Services/services";

export default function AddZoomSessionRecording() {
  const [searchParams] = useSearchParams();
  const cardId = searchParams.get("cardId");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreating = async (values) => {
    setLoading(true);

    const updatedValues = {
      ...values,
      duration: parseInt(values.duration, 10), // Ensure duration is a number
      cardId,
    };

    try {
      const response = await services.createNewRecordingLink(updatedValues);
      if (response.isSuccess) {
        alert("Lecture created successfully!");
        navigate("/ZoomRecordings");
      } else {
        alert("Failed to create lecture.");
      }
    } catch (error) {
      console.error("Error creating lecture:", error);
      alert("An error occurred while creating the lecture.");
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .min(3, "Title must be at least 3 characters long"),
    url: Yup.string()
      .required("URL is required")
      .url("Enter a valid URL"),
    description: Yup.string()
      .max(300, "Description must be under 300 characters"),
    duration: Yup.number()
      .required("Duration is required")
      .positive("Duration must be a positive number")
      .integer("Duration must be an integer")
      .min(1, "Duration must be at least 1 second"),
  });

  const initialValues = {
    title: "",
    url: "",
    description: "",
    duration: "",
  };

  return (
    <>
      {loading && <Loade />}
      <Card
        sx={{
          borderRadius: 10,
          backgroundColor: "rgba(240, 240, 240, 0.8)",
          margin: "2rem auto",
          maxWidth: "700px",
          padding: "1.5rem",
        }}
        elevation={3}
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
            handleBlur,
            handleChange,
            handleSubmit,
            isValid,
            isSubmitting,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ marginBottom: "1.5rem" }}
                onClick={() => navigate("/ZoomRecordings")}
              >
                {"< Back"}
              </Button>

              <CardHeader title="Add New Lecture" />
              <Divider sx={{ marginBottom: "1rem" }} />

              <CardContent>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <ModifiedTextField
                        fullWidth
                        label="Title"
                        name="title"
                        placeholder="Enter the title of the lecture"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ModifiedTextField
                        fullWidth
                        label="URL"
                        name="url"
                        placeholder="Enter the lecture video URL"
                        value={values.url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.url && errors.url)}
                        helperText={touched.url && errors.url}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ModifiedTextField
                        fullWidth
                        label="Duration (seconds)"
                        name="duration"
                        placeholder="Enter the duration in seconds (e.g., 300 for 5 minutes)"
                        value={values.duration}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.duration && errors.duration)}
                        helperText={touched.duration && errors.duration}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ModifiedTextField
                        fullWidth
                        label="Description"
                        name="description"
                        placeholder="Provide a brief description (optional)"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.description && errors.description)}
                        helperText={touched.description && errors.description}
                      />
                    </Grid>
                  </Grid>
                  <Divider sx={{ margin: "1.5rem 0" }} />
                  <Stack direction="row" justifyContent="center">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={!isValid || isSubmitting}
                      sx={{
                        padding: "0.8rem 2rem",
                        borderRadius: 5,
                        fontWeight: "bold",
                      }}
                    >
                      Create Lecture
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </form>
          )}
        </Formik>
      </Card>
    </>
  );
}
