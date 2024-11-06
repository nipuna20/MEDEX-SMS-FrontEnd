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

// export default function ZoomOnlineSessions() {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate an API call to fetch Zoom sessions
//     const fetchSessions = async () => {
//       try {
//         // Replace this with an actual API call
//         const response = await fetch('/api/zoom/sessions');
//         const data = await response.json();
//         setSessions(data);
//       } catch (error) {
//         console.error('Error fetching sessions:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   if (loading) {
//     return <div>Loading sessions...</div>;
//   }

//   if (sessions.length === 0) {
//     return (
//         <Card
//         sx={{
//           borderRadius: 3,
//           backgroundColor: "rgb(180, 180, 179, 0.5 )",
//           margin: 3,
//           paddingTop:1, paddingBottom: 1, paddingLeft: 2, paddingRight:2,
//           // marginLeft: 4,
//           // marginRight: 4,
//         }}
//         elevation={2}
//       >
//         <div>No online sessions available.</div>
//       </Card>
//     );
//   }

//   return (
//     <div>
//       <h2>Zoom Online Sessions</h2>
//       <ul>
//         {sessions.map((session, index) => (
//           <li key={index}>
//             <a href={session.url} target="_blank" rel="noopener noreferrer">
//               {session.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
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
                url: "https://zoom.us/sample-recording-1",
                description: "Details of session",
              },
              {
                title: "Lecture Two",
                url: "https://zoom.us/sample-recording-2",
                description: "Details of session",
              },
              {
                title: "Lecture Three",
                url: "https://zoom.us/sample-recording-3",
                description: "Details of session",
              },
            ],
          },
          {
            subject: "Subject Two",
            links: [
              {
                title: "Lecture One",
                url: "https://zoom.us/sample-recording-1",
                description: "Details of session",
              },
              {
                title: "Lecture Two",
                url: "https://zoom.us/sample-recording-2",
                description: "Details of session",
              },
              {
                title: "Lecture Three",
                url: "https://zoom.us/sample-recording-3",
                description: "Details of session",
              },
            ],
          },
          {
            subject: "Subject Tree",
            links: [
              {
                title: "Lecture One",
                url: "https://zoom.us/sample-recording-1",
                description: "Details of session",
              },
              {
                title: "Lecture Two",
                url: "https://zoom.us/sample-recording-2",
                description: "Details of session",
              },
              {
                title: "Lecture Three",
                url: "https://zoom.us/sample-recording-3",
                description: "Details of session",
              },
            ],
          },
          {
            subject: "Subject four",
            links: [
              {
                title: "Lecture One",
                url: "https://zoom.us/sample-recording-1",
                description: "Details of session",
              },
              {
                title: "Lecture Two",
                url: "https://zoom.us/sample-recording-2",
                description: "Details of session",
              },
              {
                title: "Lecture Three",
                url: "https://zoom.us/sample-recording-3",
                description: "Details of session",
              },
            ],
          },
        ];

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setRecordings(sampleArray);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecordings();
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
        }}
      >
        <Typography sx={{ fontSize: "32px" }}>{item.subject}</Typography>
        <ul>
          <Stack spacing={2} key={index}>
            {item.links.map((link, linkIndex) => (
              <ul key={linkIndex}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
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
            <b>LECTURE ONLINE SESSIONS</b>
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
