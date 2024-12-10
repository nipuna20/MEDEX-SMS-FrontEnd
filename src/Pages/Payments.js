import React, { useState } from "react";
import {
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  MenuItem,
  Paper,
  Box,
  Alert,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { services } from "../Services/services";

const steps = [
  "Select a Course",
  "View Payment Plans",
  "Select a Plan",
  "Attach Pay Slip",
  "Submit",
];

const PaymentForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [paySlip, setPaySlip] = useState(null);
  const [studentId, setStudentId] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (
      (activeStep === 0 && !selectedCourse) ||
      (activeStep === 2 && !selectedPlan) ||
      (activeStep === 3 && (!paySlip || !studentId))
    ) {
      setError("Please complete the required fields.");
      return;
    }

    setError("");

    if (activeStep === steps.length - 1) {
      // Display collected data in the console
      const formData = new FormData();
      formData.append("courseName", selectedCourse);
      formData.append("paymentPlans", selectedPlan);
      formData.append("studentId", studentId);
      if (paySlip) {
        formData.append("file", paySlip);
      }
      

    services.createNewPayment(formData).then((response) => {
      if (response.isSuccess) {
        console.log("valuse in response : ",formData);
      //  window.location.reload()
        // alert("your Course create successfully");
      } else {
        console.log("add Course respons error");
      }
      // setLoading(false);
    });
      console.log("Selected Course:", formData);
      
      setIsSubmitted(true);

      // Reset the form after submission
      setActiveStep(0);
      setSelectedCourse("");
      setSelectedPlan("");
      setPaySlip(null);
      setStudentId("");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFileUpload = (event) => {
    setPaySlip(event.target.files[0]);
  };

  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        sx={{
          paddingX: 6,
          paddingY: 8,
          mt: 4,
          width: "80%",
          mx: "auto",
          backgroundColor: "rgba(240, 240, 240, 0.8)",
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Course Enrollment
        </Typography>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{
            marginY: 3,
            "& .MuiStepIcon-root.Mui-completed": { color: "green" },
            "& .MuiStepIcon-root.Mui-active": { color: "blue" },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {error && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {error}
          </Alert>
        )}

        {isSubmitted ? (
          <Typography
            sx={{
              marginY: 2,
              padding: 2,
              backgroundColor: "rgba(100, 180, 100, 0.2)",
              borderRadius: 2,
            }}
            variant="h6"
            align="center"
          >
            Thank you! Your application has been submitted successfully.
          </Typography>
        ) : (
          <>
            {/* Step 0: Select Course */}
            {activeStep === 0 && (
              <TextField
                select
                label="Select Course"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                fullWidth
                margin="normal"
              >
                <MenuItem value="Course 1">Course 1</MenuItem>
                <MenuItem value="Course 2">Course 2</MenuItem>
                <MenuItem value="Course 3">Course 3</MenuItem>
              </TextField>
            )}

            {/* Step 1: View Payment Plans */}
            {activeStep === 1 && (
              <Typography
                sx={{
                  marginY: 2,
                  padding: 2,
                  backgroundColor: "rgba(200, 200, 255, 0.2)",
                  borderRadius: 2,
                }}
                variant="h6"
                gutterBottom
              >
                Available Payment Plans:
                <ul>
                  <li>Plan 1 - $200 per month</li>
                  <li>Plan 2 - $500 upfront</li>
                  <li>Plan 3 - $100 per week</li>
                </ul>
              </Typography>
            )}

            {/* Step 2: Select a Plan */}
            {activeStep === 2 && (
              <TextField
                select
                label="Select a Payment Plan"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                fullWidth
                margin="normal"
              >
                <MenuItem value="Plan 1">Plan 1</MenuItem>
                <MenuItem value="Plan 2">Plan 2</MenuItem>
                <MenuItem value="Plan 3">Plan 3</MenuItem>
              </TextField>
            )}

            {/* Step 3: Attach Pay Slip */}
            {activeStep === 3 && (
              <>
                <TextField
                  label="Student ID"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  fullWidth
                  margin="normal"
                  required
                />
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<UploadFileIcon />}
                  fullWidth
                  sx={{ marginTop: 2 }}
                >
                  Attach Pay Slip
                  <input type="file" hidden onChange={handleFileUpload} />
                </Button>
                {paySlip && (
                  <Typography
                    sx={{
                      marginTop: 1,
                      color: "green",
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                    }}
                  >
                    {paySlip.name} uploaded successfully.
                  </Typography>
                )}
              </>
            )}

            {/* Navigation Buttons */}
            <Box display="flex" justifyContent="space-between" marginTop={4}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
                color="secondary"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                variant="contained"
                color="primary"
                disabled={
                  (activeStep === 0 && !selectedCourse) ||
                  (activeStep === 2 && !selectedPlan) ||
                  (activeStep === 3 && (!paySlip || !studentId))
                }
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default PaymentForm;
