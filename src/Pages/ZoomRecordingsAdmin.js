import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";
import { services } from "../Services/services";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

export default function ZoomRecordingsAdmin() {
  const [record, setRecordings] = useState([]); // Default to an empty array
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchZoomLinksData = async () => {
    try {
      const response = await services.ZoomRecordingsData();
      if (response.isSuccess) {
        console.log("Sample data:", response.data);
        return response.data.map((item) => ({
          ...item,
          links: Array.isArray(item.links) ? item.links : [], // Ensure links is an array
        }));
      } else {
        console.error("Failed to fetch course details");
        return [];
      }
    } catch (error) {
      console.error("Error fetching course details:", error);
      return [];
    }
  };

  const subjectDelete = async (subjectId) => {
    try {
      const response = await services.recordingSubjectDelete(subjectId);
      if (response.isSuccess) {
        alert("Subject deleted successfully");
        setRecordings((prev) =>
          prev.filter((item) => item._id !== subjectId)
        );
      } else {
        console.error("Failed to delete subject");
      }
    } catch (error) {
      console.error("Error deleting subject:", error);
    }
  };

  const lectureDelete = async (subjectId, lectureId) => {
    const value = {
      subjectId: subjectId,
      lectureId: lectureId,
    };
    try {
      const response = await services.recordingLectureDelete(value);
      if (response.isSuccess) {
        alert("Lecture deleted successfully");
        setRecordings((prev) =>
          prev.map((item) =>
            item._id === subjectId
              ? {
                ...item,
                links: item.links.filter((link) => link._id !== lectureId),
              }
              : item
          )
        );
      } else {
        console.error("Failed to delete lecture");
      }
    } catch (error) {
      console.error("Error deleting lecture:", error);
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

  const ReactPlayerComponent = ({ url }) => {
    return (
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="360px"
        onError={(e) => console.error("Error loading video. Check URL or format.", e)}
      />
    );
  };

  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading Recordings...</div>;
  }

  if (record.length === 0) {
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
    <Grid key={index} item xs={12} sm={10} md={8}>
      <Card
        sx={{
          borderRadius: 3,
          marginTop: 1,
          padding: 2,
          position: "relative",
        }}
      >
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            top: "8px",
            right: "8px",
            zIndex: 1,
          }}
          onClick={() => subjectDelete(item._id)}
        >
          <CloseIcon />
        </IconButton>
        <Typography sx={{ fontSize: "32px" }}>{item.subject}</Typography>
        <ul>
          <Stack spacing={2} key={index}>
            {Array.isArray(item.links) && item.links.length > 0 ? (
              item.links.map((link, linkIndex) => (
                <ul key={linkIndex}>
                  <Typography sx={{ fontSize: 20, color: "rgb(61, 59, 243)" }}>
                    {link.title}
                  </Typography>
                  <ReactPlayerComponent url={link.url} />
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{
                      marginLeft: "20px",
                      height: "fit-content",
                      marginTop: "10px",
                    }}
                    onClick={() => lectureDelete(item._id, link._id)}
                  >
                    Delete Lecture
                  </Button>
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
                    <Divider />
                  </li>
                </ul>
              ))
            ) : (
              <Typography>No links available</Typography>
            )}
          </Stack>
        </ul>
        <Button
          variant="outlined"
          sx={{
            marginTop: 2,
            width: "100%",
            maxWidth: "200px",
          }}
          onClick={() =>
            navigate(`/AddZoomSessionRecording?cardId=${item._id}`)
          }
        >
          Add new Recording
        </Button>
      </Card>
    </Grid>
  );

  return (
    <>
      <Card
        sx={{
          borderRadius: 3,
          backgroundColor: "rgb(180, 180, 179, 0.5)",
          margin: "1rem auto", // Center the card horizontally
          padding: "1rem",
          width: "90vw", // Increase the width
          maxWidth: "1200px", // Set a max-width for responsiveness
          boxSizing: "border-box",
          textAlign: "center", // Center all text inside
        }}
        elevation={2}
      >
        <div>
          <h2 style={{ textAlign: "center", marginTop: 10, marginBottom: 30 }}>
            <b>LECTURE RECORDINGS</b>
          </h2>
          <Grid container spacing={3} justifyContent="center">
            {record.map((card, key) => subjectCards(card, key))}
          </Grid>
          <Box
            display="flex"
            justifyContent="center"
            marginTop={8}
            style={{ width: "100%" }}
          >
            <IconButton
              size="large"
              sx={{
                borderRadius: "50%",
                backgroundColor: "#007BFF",
                padding: 1.5,
                color: "#FFFFFF",
                transition: "transform 0.2s, background-color 0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                  backgroundColor: "#0056b3",
                },
              }}
              onClick={() => navigate("/AddZoomRecordingSubject")}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </div>
      </Card>

    </>
  );
}
