import React, { useEffect, useState } from "react";
import { Card, Grid, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { services } from "../Services/services";

export default function ZoomRecordings() {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchZoomLinksData = async () => {
    try {
      const response = await services.ZoomRecordingsData();
      if (response.isSuccess) {
        return response.data;
      } else {
        console.error("Failed to fetch recordings.");
        return [];
      }
    } catch (error) {
      console.error("Error fetching recordings:", error);
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
    return <div style={{ textAlign: "center" }}>Loading Recordings...</div>;
  }

  if (recordings.length === 0) {
    return (
      <Card
        sx={{
          borderRadius: 3,
          backgroundColor: "rgb(180, 180, 179, 0.5)",
          margin: 3,
          padding: 2,
        }}
        elevation={2}
      >
        <div style={{ textAlign: "center" }}>No Recordings available.</div>
      </Card>
    );
  }

  const subjectCards = (item, index) => (
    <Grid key={index} item xs={12} sm={12} md={12} lg={10} xl={10}>
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
              {/* ReactPlayer for video playback */}
              <ReactPlayer
                url={link.url}
                controls
                width="100%"
                height="360px"
                style={{
                  marginTop: "10px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              />
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
    <div>
      <Card
        sx={{
          borderRadius: 3,
          backgroundColor: "rgb(180, 180, 179, 0.5)",
          margin: "1rem",
          padding: "1rem",
        }}
        elevation={2}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "1.5rem" }}
        >
          <b>LECTURE RECORDINGS</b>
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "center",
          }}
        >
          {recordings.map((card, index) => subjectCards(card, index))}
        </Grid>
      </Card>
    </div>
  );
}
