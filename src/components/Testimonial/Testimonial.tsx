import { Box, Typography } from "@mui/material";
import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";

const Testimonial = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        my: 5,
        backgroundColor: " #A020F0",
        color: "#FFF",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      style={{
        clipPath: "polygon(0 13%, 100% 0, 100% 90%, 0% 100%)",
      }}
    >
      <Typography variant="h4" sx={{}}>
        Here’s what people have to say about us.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        <FeatureCard
          feature="Better user experience"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctic"
        />
        <FeatureCard
          feature="Scalability"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctic"
        />
      </Box>
    </Box>
  );
};

export default Testimonial;
