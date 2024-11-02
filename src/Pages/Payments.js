import React, { useState } from "react";
import {
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';

const steps = ["Select a Course", "View Payment Plans", "Select a Plan", "Attach Pay Slip", "Submit"];

const PaymentForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [paySlip, setPaySlip] = useState(null);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Reset the form when submitting
      setActiveStep(0);
      setSelectedCourse("");
      setSelectedPlan("");
      setPaySlip(null);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFileUpload = (event) => {
    setPaySlip(event.target.files[0]);
  };

  return (
    <Container
      sx={{
        borderRadius: 3,
        backgroundColor: "rgb(180, 180, 179, 0.2 )",
        margin: "2rem",
        padding: "1rem",
        width: "75vw",
        float: "left", 
        boxSizing: "border-box",
      }} maxWidth="sm">
      <Typography sx={{margin:"1rem"}} variant="h4" align="center" gutterBottom>
        <b>Course Enrollment</b>
      </Typography>
      <Stepper sx={{marginTop:"2rem"}} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      {activeStep === 0 && (
        <FormControl sx={{marginTop:"2.5rem"}} fullWidth margin="normal">
          <InputLabel>Select a Course</InputLabel>
          <Select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
            <MenuItem value="Course 1">Course 1</MenuItem>
            <MenuItem value="Course 2">Course 2</MenuItem>
            <MenuItem value="Course 3">Course 3</MenuItem>
          </Select>
        </FormControl>
      )}

      {activeStep === 1 && (
        <Typography sx={{ marginTop: "1.5rem", marginLeft: "2rem", marginBottom: "2rem" }} variant="h6" gutterBottom>
        Available Payment Plans:
        <ul style={{ fontSize: "0.875rem", marginLeft: "1rem" }}>
          <li>Plan 1 - $200 per month</li>
          <li>Plan 2 - $500 upfront</li>
          <li>Plan 3 - $100 per week</li>
        </ul>
      </Typography>
      
      )}

      {activeStep === 2 && (
        <FormControl  sx={{marginTop:"2.5rem"}} fullWidth margin="normal">
          <InputLabel>Select a Payment Plan</InputLabel>
          <Select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
            <MenuItem value="Plan 1">Plan 1</MenuItem>
            <MenuItem value="Plan 2">Plan 2</MenuItem>
            <MenuItem value="Plan 3">Plan 3</MenuItem>
          </Select>
        </FormControl>
      )}

      {activeStep === 3 && (
        <Button sx={{marginTop:"2.5rem", marginLeft:"2rem", marginBottom: "1rem"}}
          variant="outlined"
          component="label"
          startIcon={<UploadFileIcon />}
        >
          Attach Pay Slip
          <input type="file" hidden onChange={handleFileUpload} />
        </Button>
      )}

      {activeStep === 4 && (
        <Typography sx={{marginTop:"1.5rem", marginBottom:"1.5rem", backgroundColor: "rgb(100, 180, 179, 0.2 )", padding:"0.5rem"}} variant="h6" align="center" color="primary">
          Thank you! Your application has been submitted.
        </Typography>
      )}

      <div style={{ marginTop: 20 }}>
        <Button disabled={activeStep === 0} onClick={handleBack} variant="contained">
          Back
        </Button>
        <Button
          onClick={handleNext}
          variant="contained"
          color="primary"
          style={{ marginLeft: 8 }}
          disabled={
            (activeStep === 0 && !selectedCourse) ||
            (activeStep === 2 && !selectedPlan) ||
            (activeStep === 3 && !paySlip)
          }
        >
          {activeStep === steps.length - 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </Container>
  );
};

export default PaymentForm;
