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
import { useNavigate } from "react-router-dom";
import { services } from "../Services/services";
import Loade from "../componant/Loader";

export default function AddExamDetails() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleCreating = (values) => {
        setLoading(true);
        console.log("Exam values: ", values);

        services.createExamDetails(values).then((response) => {
            if (response.isSuccess) {
                console.log("Exam details created successfully: ", values);
                navigate("/Exams");
                alert("Exam details added successfully!");
            } else {
                console.log("Error adding exam details.");
            }
            setLoading(false);
        });
    };

    const validationSchema = Yup.object().shape({
        courseName: Yup.string().required("Course Name is required"),
        studentId: Yup.string().required("Student ID is required"),
        studentName: Yup.string().required("Student Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        marks: Yup.number()
            .required("Marks are required")
            .min(0, "Marks cannot be less than 0")
            .max(100, "Marks cannot be more than 100"),
        grade: Yup.string().required("Grade is required"),
    });

    const initialValues = {
        courseName: "",
        studentId: "",
        studentName: "",
        email: "",
        marks: "",
        grade: "",
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
                                    navigate("/Results");
                                }}
                            >
                                <b> {" < "} Back </b>
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
                                                        <CardHeader title="Add Exam Details"></CardHeader>
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
                                                                            name="courseName"
                                                                            value={values.courseName}
                                                                            onBlur={handleBlur}
                                                                            helperText={errors.courseName}
                                                                            onChange={handleChange}
                                                                            error={Boolean(
                                                                                touched.courseName && errors.courseName
                                                                            )}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12} md={6} padding={1}>
                                                                        <ModifiedTextField
                                                                            fullWidth
                                                                            label="Student ID"
                                                                            name="studentId"
                                                                            value={values.studentId}
                                                                            onBlur={handleBlur}
                                                                            helperText={errors.studentId}
                                                                            onChange={handleChange}
                                                                            error={Boolean(
                                                                                touched.studentId && errors.studentId
                                                                            )}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12} md={6} padding={1}>
                                                                        <ModifiedTextField
                                                                            fullWidth
                                                                            label="Student Name"
                                                                            name="studentName"
                                                                            value={values.studentName}
                                                                            onBlur={handleBlur}
                                                                            helperText={errors.studentName}
                                                                            onChange={handleChange}
                                                                            error={Boolean(
                                                                                touched.studentName &&
                                                                                errors.studentName
                                                                            )}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12} md={6} padding={1}>
                                                                        <ModifiedTextField
                                                                            fullWidth
                                                                            label="Email"
                                                                            name="email"
                                                                            value={values.email}
                                                                            onBlur={handleBlur}
                                                                            helperText={errors.email}
                                                                            onChange={handleChange}
                                                                            error={Boolean(
                                                                                touched.email && errors.email
                                                                            )}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12} md={6} padding={1}>
                                                                        <ModifiedTextField
                                                                            fullWidth
                                                                            label="Marks"
                                                                            name="marks"
                                                                            type="number"
                                                                            value={values.marks}
                                                                            onBlur={handleBlur}
                                                                            helperText={errors.marks}
                                                                            onChange={handleChange}
                                                                            error={Boolean(
                                                                                touched.marks && errors.marks
                                                                            )}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12} md={6} padding={1}>
                                                                        <ModifiedTextField
                                                                            fullWidth
                                                                            label="Grade"
                                                                            name="grade"
                                                                            value={values.grade}
                                                                            onBlur={handleBlur}
                                                                            helperText={errors.grade}
                                                                            onChange={handleChange}
                                                                            error={Boolean(
                                                                                touched.grade && errors.grade
                                                                            )}
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
                                                                        Add Exam Details
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
