import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Box,
} from '@mui/material';

const exams = [
  { id: '1', name: 'Math Exam' },
  { id: '2', name: 'Science Exam' },
  { id: '3', name: 'History Exam' },
  // Add more exams as needed
];

const ExamResultViewer = () => {
  const [selectedExam, setSelectedExam] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [result, setResult] = useState(null);

  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };

  const handleReferenceIdChange = (event) => {
    setReferenceId(event.target.value);
  };

  const handleViewResults = () => {
    // Fetch or calculate the result based on selectedExam and referenceId
    // Mock result data for demonstration
    const fetchedResult = {
      examName: exams.find((exam) => exam.id === selectedExam)?.name || '',
      referenceId,
      score: '85%',
      status: 'Passed',
    };
    setResult(fetchedResult);
  };

  const handleClear = () => {
    setSelectedExam('');
    setReferenceId('');
    setResult(null);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 4, backgroundColor: "rgb(180, 180, 179, 0.1 )", borderRadius: 3}}>
        <Typography variant="h5" align="center" gutterBottom>
          View Exam Results
        </Typography>
        
        <TextField
          select
          label="Select Exam"
          value={selectedExam}
          onChange={handleExamChange}
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
          value={referenceId}
          onChange={handleReferenceIdChange}
          fullWidth
          margin="normal"
        />
        
        <Button
          variant="contained"
          color="primary"
          onClick={handleViewResults}
          fullWidth
          sx={{ mt: 2 }}
          disabled={!selectedExam || !referenceId}
        >
          View Results
        </Button>
        
        {result && (
          <>
            <Box sx={{ mt: 4, p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
              <Typography variant="subtitle1">
                Exam: {result.examName}
              </Typography>
              <Typography variant="subtitle1">
                Reference ID: {result.referenceId}
              </Typography>
              <Typography variant="subtitle1">
                Score: {result.score}
              </Typography>
              <Typography variant="subtitle1">
                Status: {result.status}
              </Typography>
            </Box>
            
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClear}
              fullWidth
              sx={{ mt: 2 }}
            >
              Clear
            </Button>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default ExamResultViewer;
