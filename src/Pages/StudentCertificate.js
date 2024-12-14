import React from "react";
import { Box, Typography, Container, AppBar, Toolbar } from "@mui/material";
import QRCode from "react-qr-code";

export default function StudentCertificate() {
    const qrCodeValue = "https://certificate-smoky-theta.vercel.app/"; // Replace with your target URL

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            {/* Header */}
            <AppBar position="static" sx={{ backgroundColor: "#003366" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        MEDEX Academy of Pharmacy
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* QR Code Section */}
            <Container
                maxWidth="md"
                sx={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Scan the QR Code to Download:
                </Typography>
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
            </Container>

            {/* Footer */}
            <Box
                sx={{
                    backgroundColor: "#003366",
                    color: "white",
                    textAlign: "center",
                    padding: "10px 0",
                    position: "relative",
                }}
            >
                <Typography variant="body2">
                    &copy; 2024 MEDEX Academy of Pharmacy. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    );
}
