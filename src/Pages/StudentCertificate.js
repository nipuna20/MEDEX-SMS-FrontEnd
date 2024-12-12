import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import QRCode from "react-qr-code";
import { useLocation, useNavigate } from "react-router-dom";

export default function StudentCertificate() {
    const [studentName, setStudentName] = useState("");
    const [courseName, setCourseName] = useState("");
    const [certificate, setCertificate] = useState(null);
    const [qrCodeUrl, setQrCodeUrl] = useState("");
    const navigate = useNavigate();

    const handleCertificateUpload = async (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!studentName || !courseName || !certificate) {
            alert("Please fill in all fields and upload a certificate file.");
            return;
        }

        // Form data for uploading
        const formData = new FormData();
        formData.append("studentName", studentName);
        formData.append("courseName", courseName);
        formData.append("certificate", certificate);

        try {
            // Replace with your backend API endpoint for certificate upload
            const response = await fetch("/api/certificates/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                setQrCodeUrl(data.certificate.qrCode); // Assuming the backend returns a QR code URL
                alert("Certificate uploaded successfully!");
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            alert("An error occurred while uploading the certificate.");
            console.error(error);
        }
    };

    return (
        <Container maxWidth="md">
            <Card sx={{ marginTop: 4, borderRadius: 6 }} elevation={10}>
                <CardHeader title="Certificate Upload" />
                <CardContent>
                    <Stack spacing={3}>
                        <TextField
                            label="Student Name"
                            variant="outlined"
                            fullWidth
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                        />
                        <TextField
                            label="Course Name"
                            variant="outlined"
                            fullWidth
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            component="label"
                            fullWidth
                            sx={{ textTransform: "none" }}
                        >
                            Upload Certificate
                            <input
                                type="file"
                                hidden
                                accept=".jpg,.png,.pdf"
                                onChange={(e) => setCertificate(e.target.files[0])}
                            />
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleCertificateUpload}
                        >
                            Upload and Generate QR Code
                        </Button>
                        {qrCodeUrl && (
                            <Box sx={{ textAlign: "center", marginTop: 4 }}>
                                <Typography variant="h6">Scan the QR Code to Download:</Typography>
                                <Box
                                    sx={{
                                        padding: 2,
                                        background: "#fff",
                                        display: "inline-block",
                                        borderRadius: "8px",
                                    }}
                                >
                                    <QRCode value={qrCodeUrl} size={200} />
                                </Box>
                            </Box>
                        )}
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}
