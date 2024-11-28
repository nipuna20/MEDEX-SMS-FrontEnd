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
  import { useSearchParams } from "react-router-dom";

export default function AddZoomSessionRecording() {
    const [searchParams] = useSearchParams();
    const cardId = searchParams.get("cardId");
    console.log("Card ID:", cardId);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { courseId } = useParams();
    // const [initialValues, setInitialValues] = useState(null);
  
    const handleCreating = (values) => {
      setLoading(true);
      
      const updatedValues = {
        ...values, 
        cardId, 
      };
      console.log("valuse is updated : ", updatedValues);
  
        services.createNewRecordingLink(updatedValues).then((response) => {
          if (response.isSuccess) {
            console.log("valuse in respons : ", updatedValues);
            navigate("/ZoomRecordings");
            alert("yourLecture create successfully");
          } else {
            console.log("Add Lecture respons error");
          }
          setLoading(false);
        });
    };
  
    const validationSchema = Yup.object().shape({
      title: Yup.string().required("title is required"),
      url: Yup.string().required("url is required"),
    });
  
    const initialValues = {
      title: "",
      url: "",
      description: "",
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
                              <CardHeader title="ADD New Video"></CardHeader>
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
                                        label="Title of the Lecture"
                                        name="title"
                                        value={values.title}
                                        onBlur={handleBlur}
                                        helperText={errors.title}
                                        onChange={handleChange}
                                        error={Boolean(
                                          touched.title && errors.title
                                        )}
                                        required
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={6} padding={1}>
                                      <ModifiedTextField
                                        fullWidth
                                        label="URL of the Lecture"
                                        name="url"
                                        value={values.url}
                                        onBlur={handleBlur}
                                        helperText={errors.url}
                                        onChange={handleChange}
                                        error={Boolean(touched.url && errors.url)}
                                        required
                                      />
                                    </Grid>{" "}
                                    <Grid item xs={12} md={12} padding={1}>
                                      <ModifiedTextField
                                        fullWidth
                                        label="Description of the Lecture"
                                        name="description"
                                        value={values.description}
                                        onBlur={handleBlur}
                                        helperText={errors.description}
                                        onChange={handleChange}
                                        //   error={Boolean(
                                        //     touched.description && errors.description
                                        //   )}
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