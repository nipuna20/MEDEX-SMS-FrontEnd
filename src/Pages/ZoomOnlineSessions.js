import React, { useEffect, useState } from "react";
import {
  Card,
  Grid,
  Stack,
  Typography,
  CircularProgress,
  Divider,
  Box,
} from "@mui/material";
import { services } from "../Services/services";

export default function ZoomRecordings() {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchZoomLinksData = async () => {
    try {
      const response = await services.ZoomLinksData();
      if (response.isSuccess) {
        return response.data;
      } else {
        console.error("Failed to fetch course details");
        return [];
      }
    } catch (error) {
      console.error("Error fetching course details:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const zoomData = await fetchZoomLinksData();
      setRecordings(zoomData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (recordings.length === 0) {
    return (
      <Card
        sx={{
          borderRadius: 3,
          backgroundColor: "rgba(240, 240, 240, 0.9)",
          margin: 3,
          padding: 3,
          textAlign: "center",
        }}
        elevation={3}
      >
        <Typography variant="h6" color="text.secondary">
          No online sessions available.
        </Typography>
      </Card>
    );
  }

  const subjectCards = (item, index) => (
    <Grid key={index} item xs={12} sm={12} md={10} lg={8}>
      <Card
        sx={{
          borderRadius: 3,
          marginBottom: 3,
          padding: 3,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          ":hover": {
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {item.subject}
        </Typography>
        <Stack spacing={3}>
          {item.links.map((link, linkIndex) => (
            <Box key={linkIndex} component="div" sx={{ padding: 2 }}>
              <Typography
                variant="subtitle1"
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                sx={{ textDecoration: "none", fontWeight: "bold" }}
              >
                {link.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {link.description}
              </Typography>
              <Divider sx={{ marginTop: 2 }} />
            </Box>
          ))}
        </Stack>
      </Card>
    </Grid>
  );

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Lecture Online Sessions
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {recordings.map((card, key) => subjectCards(card, key))}
      </Grid>
    </Box>
  );
}
