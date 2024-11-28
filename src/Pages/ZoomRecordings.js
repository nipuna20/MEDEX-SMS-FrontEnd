import React, { useEffect, useState } from "react";
import { Card, Divider, Grid, Stack, Typography, CircularProgress, Box } from "@mui/material";
import { services } from "../Services/services";

export default function ZoomRecordings() {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchZoomLinksData = async () => {
    try {
      const response = await services.ZoomRecordingsData();
      if (response.isSuccess) {
        console.log("Response data:", response.data);
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
          No Recordings Available
        </Typography>
      </Card>
    );
  }

  const subjectCards = (item, index) => (
    <Grid key={index} item xs={12} sm={12} md={12} lg={10} xl={12}>
      <Card
        sx={{
          borderRadius: 3,
          margin: 2,
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
            <Card
              key={linkIndex}
              sx={{
                padding: 4,
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                ":hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                color="primary"
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none" }}
              >
                {link.title}
              </Typography>
              <iframe
                width="100%"
                height="315"
                src={link.url}
                title={link.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ marginTop: "10px", borderRadius: "8px" }}
              ></iframe>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {link.description}
              </Typography>
            </Card>
          ))}
        </Stack>
      </Card>
    </Grid>
  );
  

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        <b>Lecture Recordings</b>
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {recordings.map((card, key) => subjectCards(card, key))}
      </Grid>
    </Box>
  );
}
