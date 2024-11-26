import React, { useEffect, useState } from "react";
import { Card, Grid, Stack, Typography } from "@mui/material";
import { services } from "../Services/services";

export default function ZoomRecordings() {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);
  let audioContext = null; // Declare AudioContext globally to control it

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

  useEffect(() => {
    let oscillator; // Declare oscillator outside to control it globally

    const startSound = () => {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }

      oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.type = "sine"; // Use sine wave
      oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Set frequency (440 Hz)
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.start(); // Start sound
    };

    const stopSound = () => {
      if (oscillator) {
        oscillator.stop(); // Stop sound
        oscillator.disconnect();
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        startSound(); // Start the disruptive sound
      } else {
        stopSound(); // Stop the sound when user returns
      }
    };

    const disableContextMenu = (event) => event.preventDefault();

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      stopSound(); // Ensure sound stops when the component unmounts
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading Recordings..</div>;
  }

  if (recordings.length === 0) {
    return (
      <Card
        sx={{
          borderRadius: 3,
          backgroundColor: "rgb(180, 180, 179, 0.5)",
          margin: 3,
          paddingTop: 1,
          paddingBottom: 1,
          paddingLeft: 2,
          paddingRight: 2,
        }}
        elevation={2}
      >
        <div style={{ textAlign: "center" }}>No Recordings available.</div>
      </Card>
    );
  }

  const subjectCards = (item, index) => (
    <Grid key={index} item xs={7} sm={8} md={10} lg={10} xl={10}>
      <Card
        sx={{
          borderRadius: 3,
          marginTop: 1,
          padding: 2,
        }}
      >
        <Typography sx={{ fontSize: "32px" }}>{item.subject}</Typography>
        <ul>
          <Stack spacing={2} key={index}>
            {item.links.map((link, linkIndex) => (
              <ul key={linkIndex}>
                <iframe
                  width="50%"
                  height="315"
                  src={link.url}
                  title={link.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <li>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "grey",
                      marginTop: "2px",
                    }}
                  >
                    {link.description}
                  </Typography>
                </li>
              </ul>
            ))}
          </Stack>
        </ul>
      </Card>
    </Grid>
  );

  return (
    <Card
      sx={{
        borderRadius: 3,
        backgroundColor: "rgb(180, 180, 179, 0.5)",
        margin: "1rem",
        padding: "1rem",
        width: "75vw",
        float: "left",
        boxSizing: "border-box",
      }}
      elevation={2}
    >
      <div>
        <h2 style={{ textAlign: "center", marginTop: 10, marginBottom: 30 }}>
          <b>LECTURE RECORDINGS</b>
        </h2>

        <Grid
          sx={{
            margin: "1rem",
            padding: "1rem",
          }}
        >
          {recordings.map((card, key) => subjectCards(card, key))}
        </Grid>
      </div>
    </Card>
  );
}
