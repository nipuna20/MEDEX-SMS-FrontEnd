import React from "react";
import AdeonaA from "../componant/AdeonaA.png";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
} from "@mui/material";

export default function ProfileData() {
  return (
    <>
      <Card sx={{ borderRadius: 6 }}>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={AdeonaA}
              sx={{
                height: 110,
                mb: 2,
                width: 110,
              }}
            />
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button fullWidth variant="text">
            Upload picture
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
