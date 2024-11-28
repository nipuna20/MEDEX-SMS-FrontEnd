import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TableCell,
  TableRow,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { ModifiedTextField } from "../Theam/Theam";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { services } from "../Services/services";

export default function AddSalary() {
  const navigate = useNavigate();

  let [allEmpAllowance, setAllEmpAllowance] = useState([]);
  // const [showUpdateForm, setShowUpdateForm] = useState(false);
  // const [AllowanceID, SetAllowanceID] = useState();

  const employeeAllowanceDtailsInDB = () => {
    services.allowanceDetails().then((Response) => {
      if (Response.isSuccess) {
        const checkData = Response.data;
        setAllEmpAllowance(
          checkData.filter((checkdata) => checkdata.delete_status == 0)
        );
        console.log("check responssssssss", Response.data);
      }
    });
  };
  useEffect(() => {
    employeeAllowanceDtailsInDB();
  }, []);

  console.log("all Employee Data arezzzzzzzzzzzz ", allEmpAllowance);

  const handleCreating = (values) => {
    console.log("valuse : ", values);

    services.createSalary(values).then((response) => {
      if(response.isSuccess){
        console.log("valuse : ", values);
        navigate("/Salary");
        alert("your card create successfully");
      }else{
        console.log("add card respons error");
      }
    });



  };

  const validationSchema = Yup.object().shape({
    EmpID: Yup.number()
      .required("Number of Employees ID is required")
      .integer("Number of Employees ID must be an integer")
      .min(0, "Number of Employees ID must be greater than or equal to 0"),
    EmpName: Yup.string().required("Employee Name is required"),
    BasicSalary: Yup.number()
      .required("BasicSalaray  is required")
      .integer("BasicSalaray must be an integer")
      // .min(0, "BasicSalaray must be greater than or equal to 0")
      ,
    
    SalaryTemplate: Yup.string().required("SalaryTemplate is required"),
    allEmpAllowance: Yup.array().required("requred"),
  });

  

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
                  navigate("/Salary");
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
                                  <Grid item xs={12} md={6} padding={1}>
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
      </Card>
    </>
  );
}
  
 
  
 
