import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Stack, Typography } from "@mui/material";
import heroImage from "../../assets/hero.jpg";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "78vh",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      style={{
        clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2em",
          alignItems: "flex-end",
          height: "100%",
        }}
      >
        <Box
          sx={{
            marginRight: "10%",
          }}
        >
          <Typography variant="h2" component="h2" color="#FFF">
            Open Market Hub
          </Typography>
          <Typography
            variant="h4"
            color="#00ffea"
            sx={{ maxWidth: "550px", marginY: 4 }}
          >
            Welcome to the Smart, Safe and Best Responsive Way to Buy and Sell
            Products Locally!
          </Typography>
          <Typography variant="h5" color="#FFF"></Typography>

          <Stack direction="row" gap={2}>
            <Button
              variant="contained"
              color="warning"
              sx={{
                height: "70px",
                borderRadius: "20px",
                fontSize: "23px",
                padding: 3,
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="info"
              size="large"
              sx={{
                height: "70px",
                borderRadius: "20px",
                fontSize: "23px",
                padding: 3,
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
