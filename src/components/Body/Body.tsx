import React from "react";
import Hero from "../Hero/Hero";
import { Box, Button, Typography } from "@mui/material";
import FeatureCard from "../FeatureCard/FeatureCard";
import Testimonial from "../Testimonial/Testimonial";
import Feedback from "../Feedback/Feedback";
import ValueSection from "../ValueSection/ValueSection";
import {
  faLock,
  faMicrochip,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  return (
    <Box>
      <Hero />
      <Box
        sx={{
          py: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2">Our features</Typography>
      </Box>

      <Box
        sx={{
          py: 3,
          maxWidth: "1300px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <FeatureCard
          feature="Higher Security"
          icon={faLock}
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctic"
        />
        <FeatureCard
          feature="Better user experience"
          icon={faUsers}
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctic"
        />
        <FeatureCard
          feature="Scalability"
          icon={faMicrochip}
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctic"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
        <Button
          variant="contained"
          sx={{
            height: "70px",
            background: "linear-gradient(270deg, #13adc7 0%, #945dd6 100%)",
            borderRadius: "15px",

            fontSize: "25px",
            padding: 4,
            textTransform: "capitalize",
            mt: 2.5,
          }}
        >
          Explore all features
        </Button>
      </Box>
      <Testimonial />
      <ValueSection />
      <Feedback />
    </Box>
  );
};

export default Body;
