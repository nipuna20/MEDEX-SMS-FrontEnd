import React, { useEffect, useState } from "react";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import { services } from "../Services/services";
import { useNavigate } from "react-router-dom";


export default function ZoomRecordingsAdmin() {
 
    const [recordings, setRecordings] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
  
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
      return <div style={{ textAlign: "center" }}>Loading Recordings..</div>;
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
                  {/* <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a> */}
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
          <Button
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 2, 
            width: "100%", 
            maxWidth: "200px", 
          }}
          onClick={() => navigate(`/AddZoomSessionRecording?cardId=${item._id}`)}
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
            backgroundColor: "rgb(180, 180, 179, 0.5 )",
            margin: "1rem",
            padding: "1rem",
            width: "75vw", // Set a reasonable width to avoid overflow
            float: "left", // Align the Card to the left
            boxSizing: "border-box", // Ensures padding is included in width and height
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
      </>
    );
  }
  