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
import { services } from "../Services/services";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function ZoomOnlineSessionsAdmin() {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchZoomLinksData = async () => {
    try {
      const response = await services.ZoomLinksData();
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
    return <div style={{ textAlign: "center" }}>Loading sessions..</div>;
  }

  if (recordings.length === 0) {
    return (
      <Card
        sx={{
          borderRadius: 3,
          backgroundColor: "rgb(180, 180, 179, 0.5 )",
          margin: 3,
          paddingTop: 1,
          paddingBottom: 1,
          paddingLeft: 2,
          paddingRight: 2,
        }}
        elevation={2}
      >
        <div style={{ textAlign: "center" }}>No online sessions available.</div>
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
          position: "relative",
        }}
      >
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
          // onClick={() => couseDelete(item._id)}
        >
          <CloseIcon />
        </IconButton>

        <Typography sx={{ fontSize: "32px" }}>{item.subject}</Typography>
        <ul>
          <Stack spacing={2} key={index}>
            {item.links.map((link, linkIndex) => (
              <ul key={linkIndex}>
                <li>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      width: "100%", // Ensures the Stack takes full width
                      padding: "8px 0", // Adjusts padding for better layout
                    }}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ flex: 1 }}
                    >
                      {link.title}
                    </a>
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{
                        marginLeft: "20px", // Optional: Adds space between link and button
                      }}
                    >
                      Delete
                    </Button>
                  </Stack>
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
            ))}
          </Stack>
        </ul>
        <Button
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 2, // Adds some space above the button
            width: "100%", // Ensures the button takes full width for better centering
            maxWidth: "200px", // Optional: Restrict the max width if needed
          }}
        >
          Add new Lecture
        </Button>
      </Card>
    </Grid>
  );

  return (
    <>
      <Card
        sx={{
          borderRadius: 3,
          backgroundColor: "rgb(180, 180, 179, 0.5 )",
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
            <b>LECTURE ONLINE SESSIONS</b>
          </h2>

          <Grid
            sx={{
              margin: "1rem",
              padding: "1rem",
            }}
          >
            {recordings.map((card, key) => subjectCards(card, key))}
            <Box display="flex" justifyContent="center" marginTop={8} style={{ width: "100%" }}>
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
            onClick={() => navigate("/AddZoomSessionSubject")}
          >
            <AddIcon />
          </IconButton>
        </Box>
          </Grid>
        </div>
      </Card>
    </>
  );
}
