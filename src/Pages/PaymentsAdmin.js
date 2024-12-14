import React, { useEffect, useState } from "react";
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
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { services } from "../Services/services";
import { useNavigate } from "react-router-dom";
import { borderRadius } from "@mui/system";

const steps = [
    "Select a Course",
    "View Payment Plans",
    "Select a Plan",
    "Attach Pay Slip",
    "Submit",
];

export default function PaymentsAdmin() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedPlan, setSelectedPlan] = useState("");
    const [paySlip, setPaySlip] = useState(null);
    const [studentId, setStudentId] = useState("");
    const [error, setError] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [coursesData, setCoursesData] = useState([]);
    const [paymentPlansData, setPaymentPlansData] = useState([]);
    const [paidStudentData, setPaidStudentData] = useState([]);
    const [filteredPlans, setFilteredPlans] = useState([]);

    const fetchCoursesData = () => {
        services.CoursesData().then((response) => {
            if (response.isSuccess) {
                setCoursesData(response.data);
            }
        });
    };

    const fetchPaymentPlans = () => {
        services.paymentPlansData().then((response) => {
            if (response.isSuccess) {
                setPaymentPlansData(response.data);
                console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx", response)
            }
        });
    };

    const fetchPaidStudent = () => {
        services.paymentStudentData().then((response) => {
            if (response.isSuccess) {
                setPaidStudentData(response.data);
            }
        });
    };

    useEffect(() => {
        fetchCoursesData();
        fetchPaymentPlans();
        fetchPaidStudent();
    }, []);

    console.log("paidStudentData : ", paidStudentData);

    useEffect(() => {
        if (selectedCourse) {
            const filtered = paymentPlansData.filter(
                (plan) => plan.CourseName === selectedCourse
            );
            setFilteredPlans(filtered);
        } else {
            setFilteredPlans([]);
        }
    }, [selectedCourse, paymentPlansData]);

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
            const formData = new FormData();
            formData.append("courseName", selectedCourse);
            formData.append("paymentPlans", selectedPlan);
            formData.append("studentId", studentId);
            if (paySlip) {
                formData.append("file", paySlip);
            }

            services.createNewPayment(formData).then((response) => {
                if (response.isSuccess) {
                    console.log("Values in response:", formData);
                } else {
                    console.log("Add course response error");
                }
            });

            setIsSubmitted(true);
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

    const cellStyle = {
        border: '1px solid rgba(83, 81, 81, 0.8)',
        padding: '8px',
        textAlign: 'center',

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
                        {activeStep === 0 && (
                            <TextField
                                select
                                label="Select Course"
                                value={selectedCourse}
                                onChange={(e) => setSelectedCourse(e.target.value)}
                                fullWidth
                                margin="normal"
                            >
                                {coursesData.map((course, index) => (
                                    <MenuItem key={index} value={course.CourseName}>
                                        {course.CourseName}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}

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
                                    {filteredPlans.map((plan, index) => (
                                        <li key={index}>
                                            {plan.PaymentPlansName} - {plan.PaymentAmountForDuration}{" "}
                                            {plan.TmeDuration}
                                        </li>
                                    ))}
                                </ul>
                            </Typography>
                        )}

                        {activeStep === 2 && (
                            <TextField
                                select
                                label="Select a Payment Plan"
                                value={selectedPlan}
                                onChange={(e) => setSelectedPlan(e.target.value)}
                                fullWidth
                                margin="normal"
                            >
                                {filteredPlans.map((plan, index) => (
                                    <MenuItem key={index} value={plan.PaymentPlansName}>
                                        {plan.PaymentPlansName}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}

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
                <Box mt={4} textAlign="center">
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2, borderRadius: 3 }}
                        onClick={() => {
                            navigate("/PaymentPlan");
                        }}
                    >
                        Add New Payment Plan
                    </Button>
                </Box>
            </Paper>

            <TableContainer component={Paper} sx={{ marginTop: 10, borderRadius: 8 }} elevation={5}>
                <Table sx={{ minWidth: 650, marginBottom: 1 }} aria-label="courses table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#1976d2', borderRadius: 5 }}>
                            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
                                Name
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
                                Student ID
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
                                Payment Plan
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paidStudentData.map((course) =>
                            course.paidStudents.map((student) => (
                                <TableRow
                                    key={student._id}
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        '&:hover': { backgroundColor: '#f5f5f5' }, // Hover effect
                                    }}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {course.courseName}
                                    </TableCell>
                                    <TableCell align="center">{student.studentId}</TableCell>
                                    <TableCell align="center">{student.paymentPlans}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>



        </Container>
    );
}