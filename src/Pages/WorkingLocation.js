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
  Grid,
  Paper,
  Stack,
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

export default function WorkingLocation() {
  const navigate = useNavigate();

  let [allEmpWorkLocation, setAllEmpWorkLocation] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [workingLocationID, SetWorkingLocationID] = useState();
  const [loading, setLoading] = useState(false);

  /// get
  const workLocationDtailsInDB = () => {
    setLoading(true);
    services.workLocationDetails().then((Response) => {
      if (Response.isSuccess) {
        const checkData = Response.data;
        setAllEmpWorkLocation(
          checkData.filter((checkData) => checkData.delete_status == 0)
        );
        console.log("check responssssssss", Response.data);
      }
      setLoading(false);
    });
  };
  useEffect(() => {
    workLocationDtailsInDB();
  }, []);

  console.log("all Employee Data are ", allEmpWorkLocation);
  /// delete
  const handleDelete = async (values) => {
    setLoading(true);
    console.log("table ID ia : ", values);
    services.deleteWorkLocation(values).then((response) => {
      if (response.isSuccess) {
        console.log("valuse : ", values);
        alert("row delete successfully");
        window.location.reload();
      } else {
        console.log("work location delete respons error");
      }
      setLoading(false);
    });
  };

  /// update
  const handleUpdateRowData = (values) => {
    setLoading(true);
    console.log("valuse : ", values);
    services.updateWorkLocation(values).then((response) => {
      if (response.isSuccess) {
        console.log("valuse : ", values);
        alert("employment type update successfully");
        window.location.reload();
      } else {
        console.log("empolyment update respons error");
      }
      setLoading(false);
    });
  };

  const handleUpdate = async (values) => {
    console.log("table ID ia : ", values);
    SetWorkingLocationID(values);

    setShowUpdateForm(true);
  };
  const handleCancelUpdate = () => {
    setShowUpdateForm(false);
  };
  console.log("workingLocationTableID : ", workingLocationID);

  const validationSchema = Yup.object().shape({
    // workingLocationID: Yup.string().required("Emplyee ID is required"),
    workingLocation: Yup.string().required("Job Position is required"),
  });

  return (
    <>
      <Card
        sx={{
          borderRadius: 6,
          backgroundColor: "rgb(180, 180, 179, 0.5 )",
          marginLeft: 2,
          marginRight: 2,
          marginTop: 4,
          marginBottom: 4,
        }}
        elevation={2}
      >
        {showUpdateForm ? (
          <>
            <Formik
              initialValues={{
                workingLocationID: "",
                workingLocation: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                const updateValues = {
                  ...values,
                  workingLocationID: workingLocationID,
                };
                handleUpdateRowData(updateValues);
              }}
              // onSubmit={(values) => handleCreating(values)}
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
                                <CardHeader title="ADD WORK LOCATION"></CardHeader>
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
                                          label="Working Location Name"
                                          name="workingLocation"
                                          value={values.workingLocation}
                                          onBlur={handleBlur}
                                          helperText={errors.workingLocation}
                                          onChange={handleChange}
                                          error={Boolean(
                                            touched.workingLocation &&
                                              errors.workingLocation
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
                                        Create Work Location
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
                    navigate("/AddWorkingLocation");
                  }}
                >
                  + Add Working Location
                </Button>
              </Container>
              <Container maxWidth="lg" sx={{ padding: 2 }}>
                <Stack spacing={3}>
                  <div>
                    <Typography variant="h4">WORKING LOCATIONS</Typography>
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
                          <Typography variant="h4">
                            Working Locations
                          </Typography>
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
                                      WorkingLocation
                                    </TableCell>
                                    {/* <TableCell align="right" sx={{ fontSize: 17 }}>
                                  WorkingLocation
                                </TableCell> */}
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {allEmpWorkLocation.map((row) => (
                                    <TableRow
                                      key={row.workingLocationID}
                                      sx={{
                                        "&:last-child td, &:last-child th": {
                                          border: 0,
                                        },
                                      }}
                                    >
                                      <TableCell component="th" scope="row">
                                        {row.workingLocation}
                                      </TableCell>
                                      {/* <TableCell align="right">
                                    {row.workingLocation}
                                  </TableCell> */}
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
                                            handleUpdate(row.workingLocationID)
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
                                            handleDelete(row.workingLocationID)
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
