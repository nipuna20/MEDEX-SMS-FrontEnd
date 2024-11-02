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
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EBCM from "../componant/EBCM.png";
import { Key } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import ListItemIcon from "@mui/material/ListItemIcon";
import { services } from "../Services/services";

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

// Sample data for cards
const CardData = [
  {
    CourseName: "Certificate in Pharmacy Practice",
    CourseDuration: "4 months",
    FullPayment: 18000,
    InstallmentWise: 20000,
    FirstPayment: 5000,
    RegistrationFee: 2500,
    OtherDetails:""
  },
  {
    CourseName: "Pharmacists’ Course",
    CourseDuration: "18 months",
    FullPayment: 55000,
    InstallmentWise: 63000,
    FirstPayment: 3500,
    RegistrationFee: 2500,
    OtherDetails:""
  },
  {
    CourseName: "Certificate in Pharmacy Practice",
    CourseDuration: "4 months",
    FullPayment: 18000,
    InstallmentWise: 20000,
    FirstPayment: 5000,
    RegistrationFee: 2500,
    OtherDetails:""
  },
  {
    CourseName: "Certificate in Pharmacy Practice",
    CourseDuration: "4 months",
    FullPayment: 18000,
    InstallmentWise: 20000,
    FirstPayment: 5000,
    RegistrationFee: 2500,
    OtherDetails:""
  },
];



export default function Payments() {
  const [expandedCards, setExpandedCards] = useState({}); // State to track which cards are expanded
  let [allEmpData, setAllEmpData] = useState([]);
  let [coursesData, setCoursesData] = useState([]);

const CoursesDtailsInDB = () => {
  // setLoading(true);
  services.CoursesData().then((Response) => {
    if (Response.isSuccess) {
      setCoursesData(Response.data);
      setAllEmpData(
        // checkData.filter((checkData) => checkData.delete_status == 0)
      );
      console.log("check responssssssss", Response.data);
    }
    // setLoading(false);
  });
};
 useEffect(() => {
  CoursesDtailsInDB();
    
  }, []);
 console.log("data is ",coursesData)

  // Function to handle card expand toggle
  const handleExpandClick = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Card rendering function
  const cardData = (item, index) => (
    <Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={4}>
      <Card sx={{ maxWidth: 345, borderRadius: 4 }} elevation={20}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={
            <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              {item.CourseName}
            </span>
          }
          subheader={`Duration : ${item.CourseDuration}`}
        />
        <CardMedia
          component="img"
          height="194"
          image={EBCM}
          alt="Paella dish"
        />
        <CardContent>
          <ListItem disablePadding>
            {/* <ListItemButton> */}
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Course Fee
                </span>
              }
            />
            {/* </ListItemButton> */}
          </ListItem>

          <ListItem
            disablePadding
            // sx={{ justifyContent: "center", textAlign: "center" }}
          >
            <ListItemText primary={`Full Payment : ${item.FullPayment}`} />
          </ListItem>
          <ListItem
            disablePadding
            // sx={{ justifyContent: "center", textAlign: "center" }}
          >
            <ListItemText
              primary={`Installment Wise : ${item.InstallmentWise}`}
            />
          </ListItem>
          <ListItem
            disablePadding
            // sx={{ justifyContent: "center", textAlign: "center" }}
          >
            <ListItemText primary={`First Payment : ${item.FirstPayment}`} />
          </ListItem>
          <ListItem
            disablePadding
            // sx={{ justifyContent: 'center', textAlign: 'center' }}
          >
            <ListItemText
              primary={`Registration Fee : ${item.RegistrationFee}`}
            />
          </ListItem>
        </CardContent>
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
          <ExpandMore
            expand={expandedCards[index] || false}
            onClick={() => handleExpandClick(index)}
            aria-expanded={expandedCards[index] || false}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse
          in={expandedCards[index] || false}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Other Details</Typography>
            <Typography sx={{ marginBottom: 2 }}>
             {item.OtherDetails}
            </Typography>

          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );

  return (
    <>
      <Card
        sx={{
          borderRadius: 10,
          backgroundColor: "rgb(180, 180, 179, 0.5 )",
          margin: 3,
          // marginLeft: 4,
          // marginRight: 4,
        }}
        elevation={2}
      >
        <h2 style={{ textAlign: "center", marginTop: 30 }}>
          <b>COURSES</b>
        </h2>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            // py: 8,
          }}
        >
          <Container maxWidth="lg" sx={{ padding: 0 }}>
            <Stack spacing={2}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Grid container spacing={3} marginTop={3} marginBottom={3}>
                  {coursesData.map((card, key) => cardData(card, key))}
                  {/* {data.map((card) => cardData(card, card.card_id))} */}
                </Grid>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Card>
    </>
  );
}
