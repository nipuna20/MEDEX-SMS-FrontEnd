import React from "react";
import { Box, Typography, Container } from "@mui/material";
import QRCode from "react-qr-code";

export default function StudentCertificate() {
    const qrCodeValue = "https://certificate-smoky-theta.vercel.app/"; // Replace with your target URL

    return (
        <Container maxWidth="md">
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
                    <QRCode value={qrCodeValue} size={200} />
                </Box>
                <Typography sx={{ marginTop: 2 }}>
                    After scanning, you will be redirected to the download page.
                </Typography>
            </Box>
        </Container>
    );
}
