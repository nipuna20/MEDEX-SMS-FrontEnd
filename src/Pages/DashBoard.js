import React, { useState, useEffect } from "react";
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
  Grid,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import { services } from "../Services/services";
import EBCM from "../componant/EBCM.png";

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

export default function Payments() {
  const [expandedCards, setExpandedCards] = useState({}); // State to track which cards are expanded
  const [coursesData, setCoursesData] = useState([]);

  const fetchCoursesData = () => {
    services.CoursesData().then((response) => {
      if (response.isSuccess) {
        setCoursesData(response.data);
      }
    });
  };

  useEffect(() => {
    fetchCoursesData();
  }, []);

  const handleExpandClick = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const cardData = (item, index) => (
    <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          ":hover": {
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
          },
          transition: "all 0.3s ease",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="course">
              {item.CourseName.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={
            <Typography variant="h6" fontWeight="bold">
              {item.CourseName}
            </Typography>
          }
          subheader={<Typography variant="subtitle2">Duration: {item.CourseDuration}</Typography>}
        />
        <CardMedia component="img" height="180" image={EBCM} alt={item.CourseName} />
        <CardContent>
          <ListItem disablePadding>
            <ListItemIcon>
              <StarIcon sx={{ color: "gold" }} />
            </ListItemIcon>
            <ListItemText
              primary={<Typography fontWeight="bold">Course Fee</Typography>}
            />
          </ListItem>
          <Typography variant="body2">Full Payment: ₹{item.FullPayment}</Typography>
          <Typography variant="body2">Installment Wise: ₹{item.InstallmentWise}</Typography>
          <Typography variant="body2">First Payment: ₹{item.FirstPayment}</Typography>
          <Typography variant="body2">Registration Fee: ₹{item.RegistrationFee}</Typography>
        </CardContent>
        <CardActions>
          <ExpandMore
            expand={expandedCards[index] || false}
            onClick={() => handleExpandClick(index)}
            aria-expanded={expandedCards[index] || false}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expandedCards[index] || false} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Other Details:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.OtherDetails || "No additional details provided for this course."}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );

  return (
    <Box>
      <Card
        sx={{
          borderRadius: 8,
          backgroundColor: "rgba(240, 240, 240, 0.8)",
          padding: 3,
          marginBottom: 3,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          Available Courses
        </Typography>
      </Card>
      <Container>
        <Grid container spacing={4}>
          {coursesData.map((card, index) => cardData(card, index))}
        </Grid>
      </Container>
    </Box>
    
  );
}
