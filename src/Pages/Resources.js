import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Box,
} from "@mui/material";

const courseResources = {
  "Course 1": ["Resource 1.1 - PDF Guide", "Resource 1.2 - Video Tutorial", "Resource 1.3 - Practice Quiz"],
  "Course 2": ["Resource 2.1 - PDF Guide", "Resource 2.2 - Video Tutorial", "Resource 2.3 - Practice Quiz"],
  "Course 3": ["Resource 3.1 - PDF Guide", "Resource 3.2 - Video Tutorial", "Resource 3.3 - Practice Quiz"],
};

const ResourcesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [resources, setResources] = useState(null);

  const exams = [
    { id: 'Course 1', name: 'Course 1' },
    { id: 'Course 2', name: 'Course 2' },
    { id: 'Course 3', name: 'Course 3' },
    // Add more exams as needed
  ];

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleViewResources = () => {
    setResources(courseResources[selectedCourse]);
  };

  const handleClear = () => {
    setSelectedCourse('');
    setResources(null);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 4, backgroundColor: "rgb(180, 180, 179, 0.1 )", borderRadius: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          View Available Resources
        </Typography>
        
        <TextField
          select
          label="Select Course"
          value={selectedCourse}
          onChange={handleCourseChange}
          fullWidth
          margin="normal"
        >
          {exams.map((exam) => (
            <MenuItem key={exam.id} value={exam.id}>
              {exam.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Reference ID"
          fullWidth
          margin="normal"
        />
        
        <Button
          variant="contained"
          color="primary"
          onClick={handleViewResources}
          fullWidth
          sx={{ mt: 2 }}
          disabled={!selectedCourse}
        >
          View Resources
        </Button>
        
        {resources && (
          <Box sx={{ mt: 4, p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              Available Resources for {selectedCourse}:
            </Typography>
            {resources.map((resource, index) => (
              <Typography key={index} variant="body1">
                {resource}
              </Typography>
            ))}
          </Box>
        )}
        
        {resources && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClear}
            fullWidth
            sx={{ mt: 2 }}
          >
            Clear
          </Button>
        )}
      </Paper>
    </Container>
  );
};

export default ResourcesPage;
