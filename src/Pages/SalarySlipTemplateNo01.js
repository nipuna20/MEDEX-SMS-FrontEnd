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
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { ModifiedTextField } from "../Theam/Theam";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { services } from "../Services/services";

export default function SalarySlipTemplateNo01() {
  const navigate = useNavigate();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  let [salarySlipOne, setSalarySlipOne] = useState([]);
  const [slipFormData, SetSlipFormData] = useState();
  const [slipFormDataYear, SetSlipFormDataYear] = useState();

  const months = [
    { month: "JANUARY" },
    { month: "FEBRUARY" },
    { month: "MARCH" },
    { month: "APRIL" },
    { month: "MAY" },
    { month: "JUNE" },
    { month: "JULY" },
    { month: "AUGUST" },
    { month: "SEPTEMBER" },
    { month: "OCTOBER" },
    { month: "NOVEMBER" },
    { month: "DECEMBER" },
  ];

  const Years = [
    { Year: "2018" },
    { Year: "2019" },
    { Year: "2020" },
    { Year: "2021" },
    { Year: "2022" },
    { Year: "2023" },
    { Year: "2024" },
    { Year: "2025" },
    { Year: "2026" },
    { Year: "2027" },
    { Year: "2028" },
    { Year: "2029" },
  ];

  const handleCreating = (values) => {
    // setLoading(true)
    console.log("valuse : ", values);
    SetSlipFormData(values.month);
    SetSlipFormDataYear(values.Year);
    setShowUpdateForm(true);
    // navigate("/SlipOne");
    services.slipOneDetails(values).then((response) => {
      if (response.isSuccess) {
        // const checkData = response.data;

        // console.log(" respons is  rfggghg : ", checkData);
        setSalarySlipOne(response.data);
      }

      // setLoading(false);
    });
  };

  console.log("valuse : ", slipFormData);
  console.log(" respons is  rfggghg : ", salarySlipOne);

  const validationSchema = Yup.object().shape({
    EmpID: Yup.string().required("Emplyee ID is required"),
    month: Yup.string().required("Job Position is required"),
    Year: Yup.string().required("Job Position is required"),
  });
  const initialValues = {
    EmpID: "",
    month: "",
    Year:""
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
            navigate("/SalarySlipTemplate");
          }}
        >
          <b> {" < "} back </b>
        </Button>
        {showUpdateForm ? (
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
            </Container>
            <Container maxWidth="lg" sx={{ padding: 2 }}>
              <Stack spacing={3}>
                <div>
                  <Typography variant="h4">SALARY SLIP TEMPLATE 01</Typography>
                  <br />
                  <Divider />
                </div>
                <Grid
                  container
                  spacing={2}
                  sx={{ justifyContent: "space-around" }}
                >
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} margin={2}>
                    <Card
                      sx={{
                        borderRadius: 6,
                        justifyContent: "space-around",
                        margin: 2,
                      }}
                      elevation={10}
                    >
                      <CardContent>
                        <Typography variant="h4">SALARY SLIP</Typography>
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
                          <br />
                          <br />
                          <table width="100%" border="1">
                            <tr>
                              <td style={{ textAlign: "center" }}>
                                <ul type="circle">
                                  <li style={{ fontSize: "40px" }}>
                                    <b>Adeona Technologies (Private) Limited</b>
                                  </li>
                                  <li>
                                    14, Sir Baron Jayathilaka Mawatha, Colombo
                                    01, Sri lanka
                                  </li>
                                  <li>
                                    Mob:(+94)777 888 665 Tel:(+94)117 033 272
                                  </li>
                                  <li>
                                    Web:https://adeonatech.net
                                    Email:info@adeonatech.net
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  textAlign: "center",
                                  fontSize: "25px",
                                }}
                              >
                                PAY SLIP FOR THE MONTH OF : {slipFormData}&nbsp;
                                / &nbsp;{slipFormDataYear}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <ul>
                                  <li>
                                    &nbsp; Employee
                                    ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                                    {salarySlipOne.EmpID}
                                  </li>
                                  <li>
                                    &nbsp; Name
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    : {salarySlipOne.EmpName}
                                  </li>
                                  <li>
                                    &nbsp; Designation &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                                    {salarySlipOne.JobPosition}
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <ul>
                                  <li
                                    style={{
                                      textAlign: "center",
                                      fontSize: "25px",
                                    }}
                                  >
                                    DETAILS OF EARNINGS
                                  </li>
                                  <li>
                                    &nbsp; BASIC
                                    SALARY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    : {salarySlipOne.BasicSalary}
                                  </li>
                                  <li>
                                    &nbsp; TELEPHONE ALLOWANCE &nbsp;&nbsp; :
                                  </li>
                                  <li>
                                    &nbsp; OTHER
                                    ALLOWANCE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                                    {salarySlipOne.TotalAllowance}
                                  </li>
                                  <br />
                                  <li>
                                    &nbsp; NOPAY DEDUCATIONS
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                  </li>
                                  <li>
                                    &nbsp; OTHER DEDUCATIONS
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                &nbsp; NET PAY
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                :{" "}
                                {parseInt(salarySlipOne.BasicSalary) +
                                  parseInt(salarySlipOne.TotalAllowance)}
                              </td>
                            </tr>
                          </table>
                        </Grid>
                        <br />
                      </Box>
                      {/* </Grid> */}
                    </Card>
                  </Grid>
                </Grid>
              </Stack>
            </Container>
          </Card>
        ) : (
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
              <Form noValidate onSubmit={handleSubmit}>
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
                              <CardHeader title="SALARY SLIP TEMPLATE ONE"></CardHeader>
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
                                    </Grid>
                                    <Grid item xs={12} md={12} padding={1}>
                                      <Box sx={{ minWidth: 120 }}>
                                        <FormControl
                                          fullWidth
                                          sx={{
                                            borderRadius: 100,
                                            borderColor: "blue",
                                          }}
                                        >
                                          <InputLabel id="month">
                                            Working Location
                                          </InputLabel>
                                          <Select
                                            labelId="month"
                                            name="month"
                                            value={values.mounth}
                                            label="Month "
                                            onChange={handleChange}
                                          >
                                            {/* <MenuItem value={2}>Office</MenuItem>
                                <MenuItem value={1}>WFH</MenuItem> */}
                                            {months.map((date) => (
                                              <MenuItem
                                                key={date.month}
                                                value={date.month}
                                              >
                                                {date.month}
                                              </MenuItem>
                                            ))}
                                          </Select>
                                        </FormControl>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={12} md={12} padding={1}>
                                      <Box sx={{ minWidth: 120 }}>
                                        <FormControl
                                          fullWidth
                                          sx={{
                                            borderRadius: 100,
                                            borderColor: "blue",
                                          }}
                                        >
                                          <InputLabel id="Year">
                                            Select Year
                                          </InputLabel>
                                          <Select
                                            labelId="Year"
                                            name="Year"
                                            value={values.Year}
                                            label=" Year "
                                            onChange={handleChange}
                                          >
                                            {/* <MenuItem value={2}>Office</MenuItem>
                                          <MenuItem value={1}>WFH</MenuItem> */}
                                            {Years.map((date) => (
                                              <MenuItem
                                                key={date.Year}
                                                value={date.Year}
                                              >
                                                {date.Year}
                                              </MenuItem>
                                            ))}
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
                                      Create SLIP
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
              </Form>
            )}
          </Formik>
        )}

        {/* {loading && <Loade />} */}
      </Card>
    </>
  );
}
