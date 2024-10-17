import {
  Box,
  Button,
  Card,
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
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../Services/services";
import { Formik } from "formik";
import { ModifiedTextField } from "../Theam/Theam";
import * as Yup from "yup";
import Loade from "../componant/Loader";
export default function EmploymentType() {
  const navigate = useNavigate();
  let [allEmpType, setAllEmpType] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [EmploymentTypeID, SetEmploymentTypeID] = useState();
  const [loading, setLoading] = useState(false);

  /// get
  const employeeTypeDtailsInDB = () => {
    setLoading(true);
    services.employeeTypeDetails().then((Response) => {
      if (Response.isSuccess) {
        const checkdata = Response.data;
        setAllEmpType(
          checkdata.filter((checkdata) => checkdata.delete_status == 0)
        );
        console.log("check responssssssss", Response.data);
      }
    });
    setLoading(false);
  };
  useEffect(() => {
    employeeTypeDtailsInDB();
  }, []);

  console.log("all Employee Data are ", allEmpType);
  ////delete
  const handleDelete = async (values) => {
    setLoading(true);
    console.log("table ID ia : ", values);
    services.deleteEmployyeeType(values).then((response) => {
      if (response.isSuccess) {
        console.log("valuse : ", values);
        alert("your card delete successfully");
        window.location.reload();
      } else {
        console.log("empolyment delete respons error");
      }
      setLoading(false);
    });
  };
  /// update
  const handleUpdateRowData = (values) => {
    setLoading(true);
    console.log("valuse : ", values);
    services.updateEmployyeeType(values).then((response) => {
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
    SetEmploymentTypeID(values);

    setShowUpdateForm(true);
  };
  const handleCancelUpdate = () => {
    setShowUpdateForm(false);
  };
  console.log("EmploymentTypeID : ", EmploymentTypeID);

  const validationSchema = Yup.object().shape({
    // EmploymentTypeID: Yup.string().required("Emplyee ID is required"),
    EmploymentType: Yup.string().required("Job Position is required"),
  });

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
              initialValues={{
                EmploymentTypeID: "",
                EmploymentType: "",
              }}
              validationSchema={validationSchema}
              enableReinitialize={true}
              onSubmit={(values) => {
                const updateValues = {
                  ...values,
                  EmploymentTypeID: EmploymentTypeID,
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
                                <CardHeader title="ADD EMPOLYMENT TYPE"></CardHeader>
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
                                          label="Employment Type Name"
                                          name="EmploymentType"
                                          value={values.EmploymentType}
                                          onBlur={handleBlur}
                                          helperText={errors.EmploymentType}
                                          onChange={handleChange}
                                          error={Boolean(
                                            touched.EmploymentType &&
                                              errors.EmploymentType
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
                                        Create Employment Type
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
                    navigate("/AddEmploymentType");
                  }}
                >
                  + Add Employment Type
                </Button>
              </Container>
              <Container maxWidth="lg" sx={{ padding: 2 }}>
                <Stack spacing={3}>
                  <div>
                    <Typography variant="h4">EMPLOYMENT TYPES</Typography>
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
                          <Typography variant="h4">Employment Types</Typography>
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
                                    {/* <TableCell sx={{ fontSize: 17 }}>
                                      EmploymentTypeID
                                    </TableCell> */}
                                    <TableCell
                                      align="right"
                                      sx={{ fontSize: 17 }}
                                    >
                                      EmploymentType
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {allEmpType.map((row) => (
                                    <TableRow
                                      key={row.EmploymentTypeID}
                                      sx={{
                                        "&:last-child td, &:last-child th": {
                                          border: 0,
                                        },
                                      }}
                                    >
                                      <TableCell component="th" scope="row">
                                        {row.EmploymentType}
                                      </TableCell>
                                      {/* <TableCell align="right">
                                        {row.EmploymentType}
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
                                            handleUpdate(
                                              row.EmploymentTypeID
                                            )
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
                                            handleDelete(
                                              row.EmploymentTypeID
                                            )
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
