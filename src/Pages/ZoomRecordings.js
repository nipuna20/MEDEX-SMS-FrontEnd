// import React, { useEffect, useState } from 'react';
// import {
//     Avatar,
//     Box,
//     Card,
//     CardActions,
//     CardContent,
//     CardHeader,
//     CardMedia,
//     Collapse,
//     Container,
//     Divider,
//     Grid,
//     IconButton,
//     Stack,
//     Typography,
//   } from "@mui/material";


// export default function ZoomRecordings() {
//   const [recordings, setRecordings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate an API call to fetch Zoom recordings
//     const fetchRecordings = async () => {
//       try {
//         // Replace this with actual API call
//         const response = await fetch('/api/zoom/recordings');
//         const data = await response.json();
//         setRecordings(data);
//       } catch (error) {
//         console.error('Error fetching recordings:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecordings();
//   }, []);

//   if (loading) {
//     return <div>Loading recordings...</div>;
//   }

//   if (recordings.length === 1) {
//     return (
//         <Card
//         sx={{
//           borderRadius: 3,
//           backgroundColor: "rgb(180, 180, 179, 0.5 )",
//           margin: 3,
//           paddingTop:1, paddingBottom: 1, paddingLeft: 2, paddingRight:2,
//         }}
//         elevation={2} >
//         <div>No recordings available.</div>
//       </Card>
//     );
//   }

//   return (
//     <Card
//         sx={{
//           borderRadius: 3,
//           backgroundColor: "rgb(180, 180, 179, 0.5 )",
//           margin: 3,
//           paddingTop:1, paddingBottom: 1, paddingLeft: 2, paddingRight:2,
//         }}
//         elevation={2} >
//         <div>
//             <h2>Zoom Recordings</h2>
//             <ul>
//                 {recordings.map((recording, index) => (
//                 <li key={index}>
//                     <a href={recording.url} target="_blank" rel="noopener noreferrer">
//                     {recording.title}
//                     </a>
//                 </li>
//                 ))}
//             </ul>
//         </div>
//     </Card>
//   );
// }

import React, { useEffect, useState } from "react";
import { Card, Grid, Stack, Typography } from "@mui/material";

export default function ZoomRecordings() {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data with a timeout
    const fetchRecordings = async () => {
      setLoading(true);
      try {
        // Sample data to simulate an API response
        const sampleArray = [
          {
            subject: "Subject One",
            links: [
              {
                title: "Lecture One",
                url: "https://www.youtube.com/embed/isJuOHVtXu0",
                description: "Details of session",
              },
              {
                title: "Lecture Two",
                url: "https://www.youtube.com/embed/isJuOHVtXu0",
                description: "Details of session",
              },
              {
                title: "Lecture Three",
                url: "https://www.youtube.com/embed/isJuOHVtXu0",
                description: "Details of session",
              },
            ],
          },
          {
            subject: "Subject Two",
            links: [
              {
                title: "Lecture One",
                url: "https://www.youtube.com/embed/isJuOHVtXu0",
                description: "Details of session",
              },
              {
                title: "Lecture Two",
                url: "https://www.youtube.com/embed/isJuOHVtXu0",
                description: "Details of session",
              },
              {
                title: "Lecture Three",
                url: "https://www.youtube.com/embed/isJuOHVtXu0",
                description: "Details of session",
              },
            ],
          },
          {
            subject: "Subject Tree",
            links: [
              {
                title: "Lecture One",
                url: "https://www.youtube.com/embed/isJuOHVtXu0",
                description: "Details of session",
              },
              {
                title: "Lecture Two",
                url: "https://www.youtube.com/embed/isJuOHVtXu0",
                description: "Details of session",
              },
              {
                title: "Lecture Three",
                url: "https://www.youtube.com/embed/isJuOHVtXu0",
                description: "Details of session",
              },
            ],
          },
          {
            subject: "Subject four",
            links: [
              {
                title: "Lecture One",
                url: "https://www.youtube.com/embed/isJuOHVtXu0",
                description: "Details of session",
              },
              {
                title: "Lecture Two",
                url: "https://www.youtube.com/embed/isJuOHVtXu0",
                description: "Details of session",
              },
              {
                title: "Lecture Three",
                url: "https://www.youtube.com/embed/isJuOHVtXu0",
                description: "Details of session",
              },
            ],
          },
        ];

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setRecordings(sampleArray);
      } catch (error) {
        console.error("Error fetching Recordings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecordings();
  }, []);

  useEffect(() => {
    const disableRightClick = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);
    return () => document.removeEventListener("contextmenu", disableRightClick);
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
