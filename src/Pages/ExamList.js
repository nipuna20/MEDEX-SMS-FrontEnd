import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Grid,
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
import Loade from "../componant/Loader";

export default function ExamList() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [examList, setExamList] = useState([]);

    useEffect(() => {
        setLoading(true);
        services.getExamDetails().then((response) => {
            if (response.isSuccess) {
                setExamList(response.data); // Populate the exam list
            } else {
                console.log("Error fetching exam details.");
            }
            setLoading(false);
        });
    }, []);

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
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px 24px",
                    }}
                >
                    <Typography variant="h5" fontWeight="bold">
                        Exam List
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "rgb(33, 150, 243)",
                            color: "white",
                            fontSize: 16,
                            borderRadius: 3,
                        }}
                        onClick={() => navigate("/AddExam")}
                    >
                        Add New Exam
                    </Button>
                </Box>

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        py: 4,
                    }}
                >
                    <Container maxWidth="lg" sx={{ padding: 2 }}>
                        <Stack spacing={2}>
                            <Card sx={{ borderRadius: 6 }} elevation={10}>
                                <CardHeader title="Exam Details"></CardHeader>
                                <CardContent>
                                    {loading ? (
                                        <Loade />
                                    ) : (
                                        <TableContainer>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="center"><strong>#</strong></TableCell>
                                                        <TableCell align="center"><strong>Course Name</strong></TableCell>
                                                        <TableCell align="center"><strong>Student ID</strong></TableCell>
                                                        <TableCell align="center"><strong>Student Name</strong></TableCell>
                                                        <TableCell align="center"><strong>Email</strong></TableCell>
                                                        <TableCell align="center"><strong>Marks</strong></TableCell>
                                                        <TableCell align="center"><strong>Grade</strong></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {examList.map((exam, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell align="center">{index + 1}</TableCell>
                                                            <TableCell align="center">{exam.courseName}</TableCell>
                                                            <TableCell align="center">{exam.studentId}</TableCell>
                                                            <TableCell align="center">{exam.studentName}</TableCell>
                                                            <TableCell align="center">{exam.email}</TableCell>
                                                            <TableCell align="center">{exam.marks}</TableCell>
                                                            <TableCell align="center">{exam.grade}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    )}
                                </CardContent>
                            </Card>
                        </Stack>
                    </Container>
                </Box>
            </Card>
        </>
    );
}
