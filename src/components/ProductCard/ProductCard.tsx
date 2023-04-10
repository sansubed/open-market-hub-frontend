import { Box } from "@mui/system";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";

const ProductCard = () => {
  return (
    <Box>
      <Card sx={{ maxWidth: 345, borderRadius: 7, background: "#F2F2F2" }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          title="green iguana"
        />
        <CardContent sx={{ p: 2 }}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" py={2}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>

          <Typography variant="h5" color="primary">
            $250
          </Typography>
        </CardContent>

        <Divider component="div" role="presentation"></Divider>
        <CardActions sx={{ p: 2 }}>
          <Button variant="contained" color="info">
            Buy now
          </Button>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
