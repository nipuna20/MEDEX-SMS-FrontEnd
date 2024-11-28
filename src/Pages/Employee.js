import React, { useState, useEffect } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { services } from "../Services/services";
import { blue } from "@mui/material/colors";
import { FaGithub } from "react-icons/fa";
import { tableCellClasses } from "@mui/material/TableCell";
import * as Yup from "yup";
import { Formik } from "formik";
import { ModifiedTextField } from "../Theam/Theam";
import Loade from "../componant/Loader";

//// table ////
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

////table////

export default function Cards() {
  const navigate = useNavigate();
  let [allEmpData, setAllEmpData] = useState([]);
  let [allEmpWorkLocation, setAllEmpWorkLocation] = useState([]);
  let [allEmpType, setAllEmpType] = useState([]);
  let [allEmpJobPosition, setAllEmpJobPosition] = useState([]);
  const [EmpID, SetEmpID] = useState();
  const [loading, setLoading] = useState(false);

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const EmployeeDtailsInDB = () => {
    setLoading(true);
    services.employeeDetails().then((Response) => {
      if (Response.isSuccess) {
        const checkData = Response.data;
        setAllEmpData(
          checkData.filter((checkData) => checkData.delete_status == 0)
        );
        console.log("check responssssssss", Response.data);
      }
      setLoading(false);
    });
  };

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
//// for development
  // useEffect(() => {
  //   EmployeeDtailsInDB();
  //   workLocationDtailsInDB();
  //   employeeTypeDtailsInDB();
  //   JobPositionDtailsInDB();
  // }, []);

  console.log("all Employee Data are ", allEmpData);

  const handleDelete = async (values) => {
    setLoading(true);
    console.log(" deleted table ID is : ", values);
    services.deleteEmployee(values).then((response) => {
      if (response.isSuccess) {
        console.log("valuse : ", values);
        alert("row delete successfully");
        window.location.reload();
      } else {
        console.log("Salary delete respons error");
      }
      setLoading(false);
    });
  };

  const handleUpdate = async (values) => {
    console.log("table ID ia : ", values);
    SetEmpID(values);
    setShowUpdateForm(true);
  };

  const handleCancelUpdate = () => {
    setShowUpdateForm(false);
  };
  /// ubdate the employee
  const handleUpdateRowData = (values) => {
    setLoading(true);
    console.log("values are : ", values);
    services.updateEmployee(values).then((response) => {
      if (response.isSuccess) {
        console.log("valuse : ", values);

        window.location.reload();
        alert("your card create successfully");
      } else {
        console.log("add card respons error");
      }
      setLoading(false);
    });
  };

  const validationSchema = Yup.object().shape({
    // EmplyeeID: Yup.string().required("Emplyee ID is required"),
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
    // BasicSalary: Yup.string().required(" Basic Salary is required"),
    Location: Yup.string().required("Work Location is required"),
  });

  const initialValues = {
    EmpID: "",
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
    // BasicSalary: "",
    Location: "",
  };

  return (
    <>
      {/* <Grid item xs={4} sm={6} md={8} lg={12} xl={12} margin={2}> */}
      <Card
        sx={{
          borderRadius: 6,
          backgroundColor: "rgb(180, 180, 179, 0.5 )",
          marginLeft: 2,
          marginRight: 2,
          marginTop: 4,
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
                  EmpID: EmpID,
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
                                      <Grid item xs={12} md={6} padding={1}>
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
                                              {allEmpJobPosition.map(
                                                (Position) => (
                                                  <MenuItem
                                                    key={Position.JobPositionID}
                                                    value={Position}
                                                  >
                                                    {Position.JobTitle}
                                                  </MenuItem>
                                                )
                                              )}
                                            </Select>
                                          </FormControl>
                                        </Box>
                                      </Grid>
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
                                            touched.WorkEmail &&
                                              errors.WorkEmail
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
                                          error={Boolean(
                                            touched.NIC && errors.NIC
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
                                      {values.JobPosition.Reporting && (
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
                                      )}
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
                                            touched.FinalDate &&
                                              errors.FinalDate
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
                                                    key={
                                                      Location.workingLocationID
                                                    }
                                                    value={
                                                      Location.workingLocation
                                                    }
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
            {loading && <Loade />}
          </>
        ) : (
          <>
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
              <Container
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: 25,
                }}
              >
                <br />
                <Button
                  variant="contained"
                  sx={{ borderRadius: 2 }}
                  onClick={() => {
                    navigate("/AddEmployee");
                  }}
                >
                  + Add Employee
                </Button>
              </Container>
              <br />
              <br />
              <TableContainer component={Paper} sx={{ marginBottom: 10 }}>
                <Table
                  sx={{ maxWidthWidth: 700, overflowX: "auto" }}
                  aria-label="customized table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>EmpID</StyledTableCell>
                      <StyledTableCell align="right">FName</StyledTableCell>
                      <StyledTableCell align="right">LName</StyledTableCell>
                      <StyledTableCell align="right">HomeCnt</StyledTableCell>
                      <StyledTableCell align="right">
                        PersonalCnt
                      </StyledTableCell>
                      <StyledTableCell align="right">WorkCnt</StyledTableCell>
                      <StyledTableCell align="right">Address</StyledTableCell>
                      <StyledTableCell align="right">Email</StyledTableCell>
                      <StyledTableCell align="right">NIC</StyledTableCell>
                      <StyledTableCell align="right">
                        JobPosition
                      </StyledTableCell>
                      <StyledTableCell align="right">Type</StyledTableCell>
                      <StyledTableCell align="right">Manager</StyledTableCell>
                      <StyledTableCell align="right">EmpDate</StyledTableCell>
                      <StyledTableCell align="right">FinalDate</StyledTableCell>
                      <StyledTableCell align="right">Location</StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allEmpData.map((row) => (
                      <StyledTableRow key={row.EmpID}>
                        <StyledTableCell component="th" scope="row">
                          {row.EmpID}
                        </StyledTableCell>
                        {/* <StyledTableCell align="right">{row.EmpID}</StyledTableCell> */}
                        <StyledTableCell align="right">
                          {row.FName}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.LName}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.HomeCnt}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.PersonalCnt}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.WorkCnt}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.Address}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.WorkEmail}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.NIC}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.JobPosition}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.EmploymentType}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.Manager}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.EmpDate}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.FinalDate}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.Location}
                        </StyledTableCell>
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
                              backgroundColor: "rgb(48, 133, 195, 0.2)",
                              color: "blue",
                              fontSize: 14,
                              border: "1px solid blue",
                            }}
                            onClick={() => handleUpdate(row.EmpID)}
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
                              backgroundColor: "rgb(216, 0, 50, 0.2)",
                              color: "red",
                              fontSize: 14,
                              border: "1px solid blue",
                            }}
                            onClick={() => handleDelete(row.EmpID)}
                          >
                            DELETE
                          </Button>
                        </TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </>
        )}
        {loading && <Loade />}
      </Card>
      {/* </Grid> */}
    </>
  );
}
