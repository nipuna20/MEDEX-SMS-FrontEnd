import React, { useEffect, useRef, useState } from "react";
import { Card, Grid, Stack, Typography } from "@mui/material";
import videojs from "video.js";
import "video.js/dist/video-js.css"; // Import Video.js styles
import { services } from "../Services/services";

export default function ZoomRecordings() {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);
  const playerRefs = useRef([]); // Store references to video players

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

  useEffect(() => {
    // Clean up video.js players when the component unmounts
    return () => {
      playerRefs.current.forEach((player) => {
        if (player) {
          player.dispose(); // Dispose of the video.js player instance
        }
      });
    };
  }, []);

  const initializePlayer = (el, index, url) => {
    if (el && !playerRefs.current[index]) {
      playerRefs.current[index] = videojs(el, {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
          {
            src: url,
            type: "video/mp4",
          },
        ],
        controlBar: {
          volumePanel: { inline: false },
        },
      });
    }
  };

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
