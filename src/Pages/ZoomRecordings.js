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

import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function ZoomRecordings() {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data with a timeout
    const fetchRecordings = async () => {
      setLoading(true);
      try {
        // Sample data to simulate an API response
        const sampleData = [
          {
            title: 'Lecture One',
            url: 'https://zoom.us/sample-recording-1',
          },
          {
            title: 'Lecture Two',
            url: 'https://zoom.us/sample-recording-2',
          },
          {
            title: 'Lecture Three',
            url: 'https://zoom.us/sample-recording-3',
          },
        ];
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setRecordings(sampleData);
      } catch (error) {
        console.error('Error fetching recordings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecordings();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center' }}>Loading recordings...</div>;
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
        <div style={{ textAlign: 'center' }}>No recordings available.</div>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        borderRadius: 3,
        backgroundColor: "rgb(180, 180, 179, 0.5 )",
        margin: '1rem',
        padding: '1rem',
        width: '75vw',   // Set a reasonable width to avoid overflow
        float: 'left',  // Align the Card to the left
        boxSizing: 'border-box', // Ensures padding is included in width and height
      }}
      elevation={2}
    >
      <div>
        <h2 style={{ textAlign: 'center', marginTop: 10, marginBottom: 30 }}><b>LECTURE RECORDINGS</b></h2>
  
        <Card 
          sx={{ 
            borderRadius: 3, 
            margin: 1,
            padding: 2, 
          }}
        >
          <h2>Subject One</h2>
          <ul>
            {recordings.map((recording, index) => (
              <Stack spacing={2} key={index}>
                <li>
                  <a href={recording.url} target="_blank" rel="noopener noreferrer">
                    {recording.title}
                  </a>
                </li>
              </Stack>
            ))}
          </ul>
        </Card>
  
        <Card 
          sx={{ 
            borderRadius: 3, 
            margin: 1,
            padding: 2, 
          }}
        >
          <h2>Subject Two</h2>
          <ul>
            {recordings.map((recording, index) => (
              <Stack spacing={2} key={index}>
                <li>
                  <a href={recording.url} target="_blank" rel="noopener noreferrer">
                    {recording.title}
                  </a>
                </li>
              </Stack>
            ))}
          </ul>
        </Card>
  
        <Card 
          sx={{ 
            borderRadius: 3, 
            margin: 1,
            padding: 2, 
          }}
        >
          <h2>Subject Three</h2>
          <ul>
            {recordings.map((recording, index) => (
              <Stack spacing={2} key={index}>
                <li>
                  <a href={recording.url} target="_blank" rel="noopener noreferrer">
                    {recording.title}
                  </a>
                </li>
              </Stack>
            ))}
          </ul>
        </Card>
  
      </div>
    </Card>
  );
}
