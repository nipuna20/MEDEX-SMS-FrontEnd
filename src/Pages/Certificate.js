import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Stack,
    TextField, // Add TextField here
    Typography,
} from "@mui/material";
import { services } from "../Services/services";

export default function Certificate() {
    const [studentName, setStudentName] = useState("");
    const [courseName, setCourseName] = useState("");
    const [certificate, setCertificate] = useState(null);
    const [qrCodeUrl, setQrCodeUrl] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setCertificate(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!certificate) {
            setMessage("Please upload a PDF file.");
            return;
        }

        const formData = new FormData();
        formData.append("studentName", studentName);
        formData.append("courseName", courseName);
        formData.append("certificate", certificate);

        try {
            setLoading(true);
            const uploadResponse = await services.uploadCertificate(formData);

            if (uploadResponse.isSuccess) {
                const { result } = uploadResponse;
                const filename = result.data.filename; // Adjust this based on your backend response
                const qrCode = await services.generateQRCode(filename);
                setQrCodeUrl(qrCode);
                setMessage("Certificate uploaded successfully!");
            } else {
                setMessage("Upload failed. Please try again.");
            }
        } catch (error) {
            setMessage("Something went wrong!");
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="md">
            <Card sx={{ marginTop: 4, borderRadius: 6 }} elevation={10}>
                <CardHeader title="Certificate Upload" />
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <TextField
                                label="Student Name"
                                variant="outlined"
                                fullWidth
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                required
                            />
                            <TextField
                                label="Course Name"
                                variant="outlined"
                                fullWidth
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                                required
                            />
                            <Button variant="contained" component="label">
                                Upload Certificate (PDF)
                                <input type="file" hidden accept="application/pdf" onChange={handleFileChange} />
                            </Button>
                            <Button type="submit" variant="contained" color="primary" disabled={loading}>
                                {loading ? "Uploading..." : "Submit"}
                            </Button>
                            {message && <Typography color="error">{message}</Typography>}
                        </Stack>
                    </form>

                    {qrCodeUrl && (
                        <Box mt={4} textAlign="center">
                            <Typography variant="h6">Download Certificate</Typography>
                            <img
                                src={qrCodeUrl}
                                alt="Certificate QR Code"
                                style={{ marginTop: 16, width: 200, height: 200 }}
                            />
                            <Typography sx={{ marginTop: 2 }}>
                                Scan the QR code to download your certificate.
                            </Typography>
                        </Box>
                    )}
                </CardContent>
            </Card>
        </Container>
    );
}
