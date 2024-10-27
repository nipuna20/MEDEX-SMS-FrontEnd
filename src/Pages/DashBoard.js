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
import { Button } from "bootstrap";
import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EBCM from "../componant/EBCM.png";
import { Key } from "@mui/icons-material";

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
const CardData = [{ Item: "1" }, { Item: "2" }, { Item: "3" }, { Item: "4" }, { Item: "5" }];


export default function Payments() {
  const [expandedCards, setExpandedCards] = useState({}); // State to track which cards are expanded

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
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            LG
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={EBCM} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
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
      <Collapse in={expandedCards[index] || false} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes.
            Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
            Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don't open.)
          </Typography>
          <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
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
        <h2 style={{ textAlign: 'center', marginTop: 30 }}><b>COURSES</b></h2>
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
                    <Grid container spacing={4} marginTop={3} marginBottom={3}>
                      {CardData.map((card, key) => cardData(card, key))}
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
