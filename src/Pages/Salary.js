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
import { Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { services } from "../Services/services";
import * as Yup from "yup";

export default function Salary() {
  const navigate = useNavigate();
  let [allEmpSalary, SetAllEmpSalary] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [EmpID, SetEmpID] = useState();
  let [allEmpAllowance, setAllEmpAllowance] = useState([]);
  const [loading, setLoading] = useState(false);

  const employeeSalaryInDB = () => {
    setLoading(true);
    services.salaryDetails().then((Response) => {
      if (Response.isSuccess) {
        const checkData = Response.data;
        SetAllEmpSalary(
          checkData.filter((checkData) => checkData.delete_status == 0)
        );
        console.log("check responssssssss", Response.data);
      }
      setLoading(false);
    });
  };

  const employeeAllowanceDtailsInDB = () => {
    setLoading(true);
    services.allowanceDetails().then((Response) => {
      if (Response.isSuccess) {
        const checkData = Response.data;
        setAllEmpAllowance(
          checkData.filter((checkdata) => checkdata.delete_status == 0)
        );
        console.log("check responssssssss", Response.data);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    employeeSalaryInDB();
    employeeAllowanceDtailsInDB();
  }, []);

  console.log("all Employee Data are ", allEmpSalary);

  const handleDelete = async (values) => {
    setLoading(true);
    console.log("table ID ia : ", values);
    services.deleteSalary(values).then((response) => {
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

  const handleUpdateRowData = (values) => {
    setLoading(true)
    console.log("valuse : ", values);
    services.updateSalary(values).then((response) => {
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

  function CheckboxGroup(props) {
    const { label, name, options, ...rest } = props;
    return (
      <div>
        &nbsp;&nbsp;&nbsp;
        <label>{label}</label>
        <br />
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <>
                  <Grid item xs={12} md={12} padding={2}>
                    <React.Fragment key={option.AllowanceID}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="checkbox"
                        key={option.AllowanceID}
                        {...field}
                        value={option.AllowanceID}
                        // checked={field.value.includes(option.AllowanceName)}
                      />
                      &nbsp;&nbsp;&nbsp;
                      <label>
                        {option.AllowanceName}&nbsp;&nbsp;{"-"}&nbsp;&nbsp;
                        {option.AllowanceAmount}
                      </label>
                      <br />
                    </React.Fragment>
                  </Grid>
                </>
              );
            });
          }}
        </Field>
        {/* <ErrorMessage name={name} component={Text} /> */}
      </div>
    );
  }

  function FormikControler(props) {
    const { control, ...rest } = props;
    switch (control) {
      case "checkbox":
        return <CheckboxGroup {...rest} />;
      case "data":
      default:
        return null;
    }
  }

  const validationSchema = Yup.object().shape({
    EmpID: Yup.number()
      .integer("Number of Employees ID must be an integer")
      .min(0, "Number of Employees ID must be greater than or equal to 0"),
    EmpName: Yup.string().required("Employee Name is required"),
    BasicSalary: Yup.number()
      .required("BasicSalaray  is required")
      .integer("BasicSalaray must be an integer"),
    // .min(0, "BasicSalaray must be greater than or equal to 0")
    SalaryTemplate: Yup.string().required("SalaryTemplate is required"),
    allEmpAllowance: Yup.array().required("requred"),
  });

  const initialValues = {
    EmpID: "",
    EmpName: "",
    BasicSalary: 0,
    // Allowance: "",
    // TotalSalary: "",
    SalaryTemplate: "",
    allEmpAllowance: [],
  };

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
              initialValues={initialValues}
              validationSchema={validationSchema}
              //  onSubmit={(values) => handleCreating(values)}
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
                                      {/* <Grid item xs={12} md={6} padding={1}>
                                     <ModifiedTextField
                                       fullWidth
                                       label="Employee ID"
                                       name="EmpID"
                                       value={values.EmpID}
                                       onBlur={handleBlur}
                                       helperText={errors.EmpID}
                                       onChange={handleChange}
                                       error={Boolean(
                                         touched.EmpID && errors.EmpID
                                       )}
                                       // required
                                     />
                                   </Grid> */}
                                      <Grid item xs={12} md={12} padding={1}>
                                        <ModifiedTextField
                                          fullWidth
                                          label="Employee Name"
                                          name="EmpName"
                                          value={values.EmpName}
                                          onBlur={handleBlur}
                                          helperText={errors.EmpName}
                                          onChange={handleChange}
                                          error={Boolean(
                                            touched.EmpName && errors.EmpName
                                          )}
                                          // required
                                        />
                                      </Grid>
                                      <Grid item xs={12} md={6} padding={1}>
                                        <ModifiedTextField
                                          fullWidth
                                          label="Basic Salary"
                                          name="BasicSalary"
                                          value={values.BasicSalary}
                                          onBlur={handleBlur}
                                          helperText={errors.BasicSalary}
                                          onChange={handleChange}
                                          error={Boolean(
                                            touched.BasicSalary &&
                                              errors.BasicSalary
                                          )}
                                          // required
                                        />
                                      </Grid>

                                      <Grid item xs={12} md={6} padding={1}>
                                        <ModifiedTextField
                                          fullWidth
                                          label="Salary Template"
                                          name="SalaryTemplate"
                                          value={values.SalaryTemplate}
                                          onBlur={handleBlur}
                                          helperText={errors.SalaryTemplate}
                                          onChange={handleChange}
                                          error={Boolean(
                                            touched.SalaryTemplate &&
                                              errors.SalaryTemplate
                                          )}
                                          // required
                                        />
                                      </Grid>
                                      <Grid item xs={12} md={12} padding={2}>
                                        <FormikControler
                                          control="checkbox"
                                          label="Allowances"
                                          name="allEmpAllowance"
                                          options={allEmpAllowance}
                                        />
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
                    navigate("/AddSalary");
                  }}
                >
                  + Add Salary
                </Button>
              </Container>
              <Container maxWidth="lg" sx={{ padding: 2 }}>
                <Stack spacing={3}>
                  <div>
                    <Typography variant="h4">SALARY</Typography>
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
                          <Typography variant="h4">Salary</Typography>
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
                                      Employee ID
                                    </TableCell>
                                    <TableCell
                                      align="right"
                                      sx={{ fontSize: 17 }}
                                    >
                                      Employee Name
                                    </TableCell>
                                    <TableCell
                                      align="right"
                                      sx={{ fontSize: 17 }}
                                    >
                                      Basic Salary
                                    </TableCell>
                                    <TableCell
                                      align="right"
                                      sx={{ fontSize: 17 }}
                                    >
                                      Allowance
                                    </TableCell>
                                    <TableCell
                                      align="right"
                                      sx={{ fontSize: 17 }}
                                    >
                                      Total Salary
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {allEmpSalary.map((row) => (
                                    <TableRow
                                      key={row.EmpID}
                                      sx={{
                                        "&:last-child td, &:last-child th": {
                                          border: 0,
                                        },
                                      }}
                                    >
                                      <TableCell component="th" scope="row">
                                        {row.EmpID}
                                      </TableCell>
                                      <TableCell align="right">
                                        {row.EmpName}
                                      </TableCell>
                                      <TableCell align="right">
                                        {row.BasicSalary}
                                      </TableCell>
                                      <TableCell align="right">
                                        {row.TotalAllowance}
                                      </TableCell>
                                      <TableCell align="right">
                                        {row.TotalSalary}
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
                                            handleUpdate(row.EmpID)
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
                                            handleDelete(row.EmpID)
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
      </Card>
    </>
  );
}
