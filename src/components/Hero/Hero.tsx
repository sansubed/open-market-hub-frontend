import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Stack, Typography } from "@mui/material";
import heroImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "40vh",
        // backgroundImage: `url(${heroImage})`,
        background: "#000000",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2em",
          alignItems: "center",
          border: "2px solid white",
          height: "100%",
        }}
      >
        <Typography variant="h2" component="h2" color="#FFF">
          Open Market Hub
        </Typography>
        <Typography
          variant="h5"
          color="primary"
          color="#FFF"
          sx={{ maxWidth: "550px" }}
        >
          Welcome to the Smart, Safe and Best Responsive Way to Buy and Sell
          Products Locally!
        </Typography>
        <Typography variant="h5" color="#FFF"></Typography>

        <Stack direction="row" gap={2}>
          <Button variant="contained" color="warning" size="large">
            Get Started
          </Button>
          <Button variant="outlined" color="info" size="large">
            Learn More
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
