import React, { useEffect, useRef, useState } from "react";
import { Card, Grid, Stack, Typography } from "@mui/material";
import Plyr from "plyr";
import "plyr/dist/plyr.css"; // Import Plyr styles
import { services } from "../Services/services";

export default function ZoomRecordings() {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTabActive, setIsTabActive] = useState(true);
  const playerRefs = useRef([]); // To store Plyr instances

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

  // Detect tab visibility and pause videos when inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabActive(!document.hidden);
      if (document.hidden) {
        // Pause all active players
        playerRefs.current.forEach((player) => {
          if (player && typeof player.pause === "function") {
            player.pause();
          }
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    // Initialize Plyr instances for all video elements after rendering
    playerRefs.current = document.querySelectorAll(".plyr").forEach((el) => {
      const player = new Plyr(el, {
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "settings",
          "fullscreen",
        ],
        disableContextMenu: true,
      });
      return player;
    });
  }, [recordings]);

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
    <Grid key={index} item xs={12} sm={10} md={8} lg={6}>
      <Card
        sx={{
          borderRadius: 3,
          marginTop: 1,
          padding: 2,
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
          {item.subject}
        </Typography>
        <Stack spacing={2}>
          {item.links.map((link, linkIndex) => (
            <div key={linkIndex}>
              <video
                className="plyr" // Initialize Plyr on this video element
                playsInline
                controls
              >
                <source src={link.url} type="video/mp4" />
              </video>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "gray",
                  marginTop: "8px",
                }}
              >
                {link.description}
              </Typography>
            </div>
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
