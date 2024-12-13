import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { services } from "../Services/services";


    return (
        <Container maxWidth="md">
          
                <Box mt={4} textAlign="center">
                    <img
                        src={qrCodeUrl}
                        alt="Certificate QR Code"
                        style={{ width: 200, height: 200 }}
                    />
                    <Typography sx={{ marginTop: 2 }}>
                        Scan the QR code to download your certificate.
                    </Typography>
                </Box>
          
                <Typography mt={4} textAlign="center">
                    Generating QR code, please wait...
                </Typography>
           
        </Container>
    );
}
