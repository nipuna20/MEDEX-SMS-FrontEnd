import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ModifiedTextField } from "../Theam/Theam";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { services } from "../Services/services";
import * as Yup from "yup";
import Loade from "../componant/Loader";

export default function JobPosition() {
  const navigate = useNavigate();

  let [allEmpJobPosition, setAllEmpJobPosition] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [JobPositionID, SetJobPositionID] = useState();
  const [loading, setLoading] = useState(false);

  const JobPositionDtailsInDB = () => {
    setLoading(true)
    services.jobpositionDetails().then((Response) => {
      if (Response.isSuccess) {
        const checkData = Response.data;
        setAllEmpJobPosition(
          checkData.filter((checkData) => checkData.delete_status == 0)
        );
        console.log("check responssssssss", Response.data);
      }
      setLoading(false)
    });
  };
  useEffect(() => {
    JobPositionDtailsInDB();
  }, []);

  console.log("all Employee Data are ", allEmpJobPosition);

  const handleDelete = async (values) => {
    setLoading(true)
    console.log("table ID ia : ", values);
    services.deleteJobPosition(values).then((response) => {
      if (response.isSuccess) {
        console.log("valuse : ", values);
        alert("row delete successfully");
        window.location.reload();
      } else {
        console.log("job position delete respons error");
      }
      setLoading(false)
    });
  };

  const handleUpdate = async (values) => {
    console.log("table ID ia : ", values);
    SetJobPositionID(values);
    setShowUpdateForm(true);
  };

  const handleCancelUpdate = () => {
    setShowUpdateForm(false);
  };
  console.log("JobPositionID : ", JobPositionID);

  const handleUpdateRowData = (values) => {
    setLoading(true)
    console.log("valuse : ", values);
    services.updateJobPosition(values).then((response) => {
      if (response.isSuccess) {
        console.log("valuse : ", values);
        alert("employment type update successfully");
        window.location.reload();
      } else {
        console.log("empolyment update respons error");
      }
      setLoading(false)
    });
  };

  const validationSchema = Yup.object().shape({
    // JobPositionID: Yup.string().required("Job Position ID is required"),
    JobTitle: Yup.string().required("Job Title is required"),
    DepartmentName: Yup.string().required("Department name is required"),
    Reporting: Yup.boolean().required("Switch Value is required"),
    NumberOfEmployees: Yup.number()
      .required("Number of Employees is required")
      .integer("Number of Employees must be an integer")
      .min(0, "Number of Employees must be greater than or equal to 0"),
  });

  const initialValues = {
    //  JobPositionID: "",
    JobTitle: "",
    DepartmentName: "",
    NumberOfEmployees: "",
    Reporting: false,
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
        {showUpdateForm ? (
          <>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                const updateValues = {
                  ...values,
                  JobPositionID: JobPositionID,
                };
                handleUpdateRowData(updateValues);
              }}
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
                    onClick={handleCancelUpdate}
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
                                <CardHeader title="ADD JOB POSITION"></CardHeader>
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
                                          label="Job Title"
                                          name="JobTitle"
                                          value={values.JobTitle}
                                          onBlur={handleBlur}
                                          helperText={errors.JobTitle}
                                          onChange={handleChange}
                                          error={Boolean(
                                            touched.JobTitle && errors.JobTitle
                                          )}
                                          // required
                                        />
                                      </Grid>
                                      <Grid item xs={12} md={6} padding={1}>
                                        <ModifiedTextField
                                          fullWidth
                                          label="Department Name"
                                          name="DepartmentName"
                                          value={values.DepartmentName}
                                          onBlur={handleBlur}
                                          helperText={errors.DepartmentName}
                                          onChange={handleChange}
                                          error={Boolean(
                                            touched.DepartmentName &&
                                              errors.DepartmentName
                                          )}
                                          // required
                                        />
                                      </Grid>
                                      <Grid item xs={12} md={6} padding={1}>
                                        <ModifiedTextField
                                          fullWidth
                                          label="Number Of Employees"
                                          name="NumberOfEmployees"
                                          value={values.NumberOfEmployees}
                                          onBlur={handleBlur}
                                          helperText={errors.NumberOfEmployees}
                                          onChange={handleChange}
                                          error={Boolean(
                                            touched.NumberOfEmployees &&
                                              errors.NumberOfEmployees
                                          )}
                                          // required
                                        />
                                      </Grid>
                                      <Grid item xs={12} md={6} padding={1}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <FormControl component="fieldset">
                                          <Typography variant="h6">
                                            Reporting
                                          </Typography>
                                          <FormControlLabel
                                            control={
                                              <Switch
                                                name="Reporting"
                                                checked={values.Reporting}
                                                onChange={handleChange}
                                              />
                                            }
                                            label={
                                              values.Reporting ? "Yes" : "No"
                                            }
                                          />
                                        </FormControl>
                                      </Grid>

                                      <Divider />
                                      <br />

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
                                        Create Job Position
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
          </>
        ) : (
          <>
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
                navigate("/Employee");
              }}
            >
              <b> {" < "} back </b>
            </Button>
            <Card
              sx={{
                borderRadius: 6,
                marginLeft: 2,
                marginRight: 2,
                marginTop: 4,
                marginBottom: 4,
              }}
              elevation={2}
            >
              <br />
              <Container
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: 1,
                }}
              >
                <br />
                <Button
                  variant="contained"
                  sx={{ borderRadius: 2 }}
                  onClick={() => {
                    navigate("/AddJobPosition");
                  }}
                >
                  + Add Job Position
                </Button>
              </Container>
              <Container maxWidth="lg" sx={{ padding: 2 }}>
                <Stack spacing={3}>
                  <div>
                    <Typography variant="h4">JOB POSITION</Typography>
                    <br />
                    <Divider />
                  </div>
                  <Grid
                    container
                    spacing={2}
                    sx={{ justifyContent: "space-around" }}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      margin={2}
                    >
                      <Card
                        sx={{
                          borderRadius: 6,
                          justifyContent: "space-around",
                          margin: 2,
                        }}
                        elevation={10}
                      >
                        <CardContent>
                          <Typography variant="h4">Job Position</Typography>
                        </CardContent>
                        <Divider />
                        {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12} margin={2}  > */}
                        <Box sx={{ margin: 3 }}>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            xl={12}
                            margin={2}
                          >
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 270 }}
                                aria-label="simple table"
                              >
                                <TableHead>
                                  <TableRow>
                                    <TableCell sx={{ fontSize: 17 }}>
                                    Job Title
                                    </TableCell>
                                    {/* <TableCell
                                      align="right"
                                      sx={{ fontSize: 17 }}
                                    >
                                      Job Title
                                    </TableCell> */}
                                    <TableCell
                                      align="right"
                                      sx={{ fontSize: 17 }}
                                    >
                                      Department Name
                                    </TableCell>
                                    <TableCell
                                      align="right"
                                      sx={{ fontSize: 17 }}
                                    >
                                      Number Of Employees
                                    </TableCell>
                                    <TableCell
                                      align="right"
                                      sx={{ fontSize: 17 }}
                                    >
                                      Reporting
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {allEmpJobPosition.map((row) => (
                                    <TableRow
                                      key={row.JobPositionID}
                                      sx={{
                                        "&:last-child td, &:last-child th": {
                                          border: 0,
                                        },
                                      }}
                                    >
                                      <TableCell component="th" scope="row">
                                        {row.JobTitle}
                                      </TableCell>
                                      {/* <TableCell align="right">
                                        {row.JobTitle}
                                      </TableCell> */}
                                      <TableCell align="right">
                                        {row.DepartmentName}
                                      </TableCell>
                                      <TableCell align="right">
                                        {row.NumberOfEmployees}
                                      </TableCell>
                                      <TableCell align="right">
                                        {row.Reporting ? "Yes" : "No"}
                                      </TableCell>
                                      <TableCell align="right">
                                        <Button
                                          variant="contained"
                                          sx={{
                                            // marginTop: 0.5,
                                            // marginLeft: 4,
                                            borderRadius: 5,
                                            paddingLeft: 1.2,
                                            paddingRight: 1.2,
                                            paddingTop: 0.5,
                                            paddingBottom: 0.5,
                                            backgroundColor:
                                              "rgb(48, 133, 195, 0.2)",
                                            color: "blue",
                                            fontSize: 14,
                                            border: "1px solid blue",
                                          }}
                                          onClick={() =>
                                            handleUpdate(row.JobPositionID)
                                          }
                                        >
                                          UPDATE
                                        </Button>
                                      </TableCell>
                                      <TableCell align="right">
                                        <Button
                                          variant="contained"
                                          sx={{
                                            // marginTop: 0.5,
                                            // marginLeft: 4,
                                            borderRadius: 5,
                                            paddingLeft: 1.2,
                                            paddingRight: 1.2,
                                            paddingTop: 0.5,
                                            paddingBottom: 0.5,
                                            backgroundColor:
                                              "rgb(216, 0, 50, 0.2)",
                                            color: "red",
                                            fontSize: 14,
                                            border: "1px solid blue",
                                          }}
                                          onClick={() =>
                                            handleDelete(row.JobPositionID)
                                          }
                                        >
                                          DELETE
                                        </Button>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Grid>
                        </Box>
                        {/* </Grid> */}
                      </Card>
                    </Grid>
                  </Grid>
                </Stack>
              </Container>
            </Card>
          </>
        )}
        {loading && <Loade />}
      </Card>
    </>
  );
}
