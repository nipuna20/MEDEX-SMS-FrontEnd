import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ModifiedTextField } from "../Theam/Theam";

import { Field, Formik } from "formik";
// import { Formik, useField, useFormikContext } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Loade from "../componant/Loader";
import { services } from "../Services/services";
import { DatePicker } from "@mui/lab";
import "react-datepicker/dist/react-datepicker.css";
// import BackButton from "../MUI/BackButton";

export default function AddCard() {
  const navigate = useNavigate();
  let [allEmpWorkLocation, setAllEmpWorkLocation] = useState([]);
  let [allEmpType, setAllEmpType] = useState([]);
  let [allEmpJobPosition, setAllEmpJobPosition] = useState([]);
  const [loading, setLoading] = useState(false);

  /// get
  const workLocationDtailsInDB = () => {
    services.workLocationDetails().then((Response) => {
      if (Response.isSuccess) {
        const checkData = Response.data;
        setAllEmpWorkLocation(
          checkData.filter((checkData) => checkData.delete_status == 0)
        );
        console.log("check responssssssss", Response.data);
      }
    });
  };

  /// get
  const employeeTypeDtailsInDB = () => {
    services.employeeTypeDetails().then((Response) => {
      if (Response.isSuccess) {
        const checkdata = Response.data;
        setAllEmpType(
          checkdata.filter((checkdata) => checkdata.delete_status == 0)
        );
        console.log("check responssssssss", Response.data);
      }
    });
  };
  /// get
  const JobPositionDtailsInDB = () => {
    services.jobpositionDetails().then((Response) => {
      if (Response.isSuccess) {
        const checkData = Response.data;
        setAllEmpJobPosition(
          checkData.filter((checkData) => checkData.delete_status == 0)
        );
        console.log("check responssssssss", Response.data);
      }
    });
  };

  useEffect(() => {
    workLocationDtailsInDB();
    employeeTypeDtailsInDB();
    JobPositionDtailsInDB();
  }, []);

  console.log("allEmpWorkLocation are :", allEmpWorkLocation);
  console.log("allEmpType are :", allEmpType);
  console.log("allEmpJobPosition are :", allEmpJobPosition);

  const handleCreating = (values) => {
    setLoading(true);
    console.log("values are : ", values);
    services.creatEmployee(values).then((response) => {
      if (response.isSuccess) {
        console.log("valuse : ", values);
        navigate("/Employee");
        alert("your card create successfully");
      } else {
        console.log("add card respons error");
      }
      setLoading(false);
    });
  };

  const validationSchema = Yup.object().shape({
    EmplyeeID: Yup.string().required("Emplyee ID is required"),
    // JobPosition: Yup.string().required("Job Position is required"),
    FName: Yup.string().required(" First Name is required"),
    LName: Yup.string().required(" Last Name is required"),
    Address: Yup.string().required("Address is required"),
    WorkCnt: Yup.string().required(" Work Contact is required"),
    HomeCnt: Yup.string().required(" Home Contact is required"),
    PersonalCnt: Yup.string().required("Personal Conact is required"),
    WorkEmail: Yup.string().required(" Work Email is required"),
    NIC: Yup.string().required("NIC is required"),
    EmploymentType: Yup.string().required("Employment Type is required"),
    // Manager: Yup.string().required(" Manager is required"),
    EmpDate: Yup.string().required(" EmploymentDate is required"),
    FinalDate: Yup.string().required("Final Date is required"),
    Location: Yup.string().required("Work Location is required"),
  });

  const initialValues = {
    EmplyeeID: "",
    JobPosition: "",
    FName: "",
    LName: "",
    Address: "",
    WorkCnt: "",
    HomeCnt: "",
    PersonalCnt: "",
    WorkEmail: "",
    NIC: "",
    EmploymentType: "",
    Manager: "",
    EmpDate: "",
    FinalDate: "",
    Location: "",
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
                  navigate("/Cards");
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
                        <Grid item xs={12} md={12} lg={7} xl={8} margin={2}>
                          <Card sx={{ borderRadius: 6 }} elevation={10}>
                            <CardHeader title="ADD EMPLOYEE"></CardHeader>
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
                                      label="Emplyee ID"
                                      name="EmplyeeID"
                                      value={values.EmplyeeID}
                                      onBlur={handleBlur}
                                      helperText={errors.EmplyeeID}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.EmplyeeID && errors.EmplyeeID
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    {/* <ModifiedTextField
                                      fullWidth
                                      label="Job Position"
                                      name="JobPosition"
                                      value={values.JobPosition}
                                      onBlur={handleBlur}
                                      helperText={errors.JobPosition}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.JobPosition &&
                                          errors.JobPosition
                                      )}
                                      // required
                                    /> */}

                                    <Box sx={{ minWidth: 120 }}>
                                      <FormControl
                                        fullWidth
                                        sx={{
                                          borderRadius: 100,
                                          borderColor: "blue",
                                        }}
                                      >
                                        <InputLabel id="JobPosition">
                                          Job Position
                                        </InputLabel>
                                        <Select
                                          labelId="JobPosition"
                                          name="JobPosition"
                                          value={values.JobPosition}
                                          label="Job Position"
                                          onChange={handleChange}
                                        >
                                          {/* <MenuItem value={2}>intern</MenuItem>
                                          <MenuItem value={1}>
                                            Permanent
                                          </MenuItem> */}
                                          {allEmpJobPosition.map((position) => (
                                            <MenuItem
                                              key={position.JobPositionID}
                                              value={position}
                                            >
                                              {position.JobTitle}
                                            </MenuItem>
                                            // {Position.Reporting ? }
                                          ))}
                                        </Select>
                                      </FormControl>
                                    </Box>
                                  </Grid>
                                  {/* {console.log(
                                    "sample job position",
                                    values.JobPosition
                                  )}
                                  {console.log(
                                    "sample job position sample aaaaaaaaaa",
                                    values.JobPosition
                                  )} */}

                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="First Name"
                                      name="FName"
                                      value={values.FName}
                                      onBlur={handleBlur}
                                      helperText={errors.FName}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.FName && errors.FName
                                      )}
                                      // required
                                    />
                                  </Grid>

                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Last Name"
                                      name="LName"
                                      value={values.LName}
                                      onBlur={handleBlur}
                                      helperText={errors.LName}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.LName && errors.LName
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Address"
                                      name="Address"
                                      value={values.Address}
                                      onBlur={handleBlur}
                                      helperText={errors.Address}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.Address && errors.Address
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Work Contact"
                                      name="WorkCnt"
                                      value={values.WorkCnt}
                                      onBlur={handleBlur}
                                      helperText={errors.WorkCnt}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.WorkCnt && errors.WorkCnt
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Home Contact"
                                      name="HomeCnt"
                                      value={values.HomeCnt}
                                      onBlur={handleBlur}
                                      helperText={errors.HomeCnt}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.HomeCnt && errors.HomeCnt
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Personal Contact"
                                      name="PersonalCnt"
                                      value={values.PersonalCnt}
                                      onBlur={handleBlur}
                                      helperText={errors.PersonalCnt}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.PersonalCnt &&
                                          errors.PersonalCnt
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Work Email"
                                      name="WorkEmail"
                                      value={values.WorkEmail}
                                      onBlur={handleBlur}
                                      helperText={errors.WorkEmail}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.WorkEmail && errors.WorkEmail
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="NIC"
                                      name="NIC"
                                      value={values.NIC}
                                      onBlur={handleBlur}
                                      helperText={errors.NIC}
                                      onChange={handleChange}
                                      error={Boolean(touched.NIC && errors.NIC)}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <Box sx={{ minWidth: 120 }}>
                                      <FormControl
                                        fullWidth
                                        sx={{
                                          borderRadius: 100,
                                          borderColor: "blue",
                                        }}
                                      >
                                        <InputLabel id="EmploymentType">
                                          Employment Type
                                        </InputLabel>
                                        <Select
                                          labelId="EmploymentType"
                                          name="EmploymentType"
                                          value={values.EmploymentType}
                                          label="Employment Type"
                                          onChange={handleChange}
                                        >
                                          {/* <MenuItem value={2}>intern</MenuItem>
                                          <MenuItem value={1}>
                                            Permanent
                                          </MenuItem> */}
                                          {allEmpType.map((Type) => (
                                            <MenuItem
                                              key={Type.EmploymentTypeID}
                                              value={Type.EmploymentType}
                                            >
                                              {Type.EmploymentType}
                                            </MenuItem>
                                          ))}
                                        </Select>
                                      </FormControl>
                                    </Box>
                                  </Grid>
                                  {values.JobPosition.Reporting && 
                                    <Grid item xs={12} md={6} padding={1}>
                                      <ModifiedTextField
                                        fullWidth
                                        label="Manager"
                                        name="Manager"
                                        value={values.Manager}
                                        onBlur={handleBlur}
                                        helperText={errors.Manager}
                                        onChange={handleChange}
                                        error={Boolean(
                                          touched.Manager && errors.Manager
                                        )}
                                        // required
                                      />
                                    </Grid>
                                  }
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Employment Date"
                                      name="EmpDate"
                                      value={values.EmpDate}
                                      onBlur={handleBlur}
                                      helperText={errors.EmpDate}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.EmpDate && errors.EmpDate
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="FinalDate"
                                      name="FinalDate"
                                      value={values.FinalDate}
                                      onBlur={handleBlur}
                                      helperText={errors.FinalDate}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.FinalDate && errors.FinalDate
                                      )}
                                      // required
                                    />
                                  </Grid>

                                  <Grid item xs={12} md={6} padding={1}>
                                    <Box sx={{ minWidth: 120 }}>
                                      <FormControl
                                        fullWidth
                                        sx={{
                                          borderRadius: 100,
                                          borderColor: "blue",
                                        }}
                                      >
                                        <InputLabel id="Location">
                                          Working Location
                                        </InputLabel>
                                        <Select
                                          labelId="Location"
                                          name="Location"
                                          value={values.Location}
                                          label=" Work Location "
                                          onChange={handleChange}
                                        >
                                          {/* <MenuItem value={2}>Office</MenuItem>
                                          <MenuItem value={1}>WFH</MenuItem> */}
                                          {allEmpWorkLocation.map(
                                            (Location) => (
                                              <MenuItem
                                                key={Location.workingLocationID}
                                                value={Location.workingLocation}
                                              >
                                                {Location.workingLocation}
                                              </MenuItem>
                                            )
                                          )}
                                        </Select>
                                      </FormControl>
                                    </Box>
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
                                    Create Employee
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
      </Card>
      {loading && <Loade />}
    </>
  );
}
