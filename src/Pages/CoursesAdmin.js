import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";
import Swal from "sweetalert2";
import EBCM from "../componant/EBCM.png";
import { services } from "../Services/services";
import { useNavigate } from "react-router-dom";

// Styled component for ExpandMore button
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CoursesAdmin() {
  const navigate = useNavigate();
  const [expandedCards, setExpandedCards] = useState({});
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    services.CoursesData().then((Response) => {
      if (Response.isSuccess) {
        setCoursesData(Response.data);
      }
    });
  }, []);

  const handleExpandClick = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const deleteCourse = async (id) => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this course? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Call API to delete the course
        services.courseDataDelete(id).then((response) => {
          if (response.isSuccess) {
            Swal.fire("Deleted!", "The course has been deleted.", "success");
            setCoursesData(coursesData.filter((course) => course._id !== id));
          } else {
            Swal.fire("Error!", "Failed to delete the course.", "error");
          }
        });
      }
    });
  };

  const renderCard = (item, index) => (
    <Grid key={index} item xs={12} sm={6} md={4}>
      <Card
        sx={{
          maxWidth: 400,
          borderRadius: 5,
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          },
        }}
        elevation={10}
      >
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }}>{item.CourseName[0]}</Avatar>}
          action={
            <>
              <IconButton
                aria-label="edit"
                sx={{ color: "primary.main" }}
                onClick={() => navigate(`/courseDataUpdate?cardId=${item._id}`)}
              >
                <UpdateIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                sx={{ color: "error.main" }}
                onClick={() => deleteCourse(item._id)}
              >
                <CloseIcon />
              </IconButton>
            </>
          }
          title={
            <Typography variant="h6" fontWeight="bold">
              {item.CourseName}
            </Typography>
          }
          subheader={`Duration: ${item.CourseDuration}`}
        />
        <CardMedia
          component="img"
          height="150"
          image={EBCM}
          alt="Course Image"
        />
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Course Fee
          </Typography>
          <Typography variant="body2">Full Payment: {item.FullPayment}</Typography>
          <Typography variant="body2">
            Installment Wise: {item.InstallmentWise}
          </Typography>
          <Typography variant="body2">
            First Payment: {item.FirstPayment}
          </Typography>
          <Typography variant="body2">
            Registration Fee: {item.RegistrationFee}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expandedCards[index]}
            onClick={() => handleExpandClick(index)}
            aria-expanded={expandedCards[index]}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expandedCards[index]} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {item.OtherDetails}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );

  return (
    <>
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          paddingY: 3,
          textAlign: "center",
          borderRadius: 2,
          marginBottom: 4,
          color: "white",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Courses Management
        </Typography>
        <Typography variant="subtitle1">
          Manage and update course details easily
        </Typography>
      </Box>

      {/* Add Courses Button */}
      <Box display="flex" justifyContent="flex-end" marginBottom={2}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            borderRadius: 3,
            backgroundColor: "#007BFF",
            "&:hover": { backgroundColor: "#0056b3" },
          }}
          onClick={() => navigate("/AddCourses")}
        >
          Add New Course
        </Button>
      </Box>

      {/* Courses List */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {coursesData.map((item, index) => renderCard(item, index))}
        </Grid>
      </Container>
    </>
  );
}
