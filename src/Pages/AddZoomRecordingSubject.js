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

export default function AddZoomRecordingSubject() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { courseId } = useParams();
    // const [initialValues, setInitialValues] = useState(null);
  
    const handleCreating = (values) => {
      setLoading(true);
      console.log("valuse : ", values);
  
      services.createNewZoomRecordingSubject(values).then((response) => {
        if (response.isSuccess) {
          console.log("valuse in respons : ", values);
          navigate("/ZoomRecordings");
          alert("your Course create successfully");
        } else {
          console.log("add Course respons error");
        }
        setLoading(false);
      });
    };
  
  
    const validationSchema = Yup.object().shape({
      subject: Yup.string().required("Subject Name is required"),
    });
  
    const initialValues = {
      subject: "",
      
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
                    navigate("/ZoomRecordings");
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
                              <CardHeader title="ADD New Recording Subject"></CardHeader>
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
                                    <Grid item xs={12} md={12} padding={1}>
                                      <ModifiedTextField
                                        fullWidth
                                        label="subject Name"
                                        name="subject"
                                        value={values.subject}
                                        onBlur={handleBlur}
                                        helperText={errors.subject}
                                        onChange={handleChange}
                                        error={Boolean(
                                          touched.subject && errors.subject
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
  