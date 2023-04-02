import { Box, Typography } from "@mui/material";
import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";

const Testimonial = () => {
  return (
    <Box
      sx={{
        py: 3,
        my: 2,
        backgroundColor: "#807d7d",
        color: "#FFF",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">
        Here’s what people have to say about us.
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
      </Typography>
    </Box>
  );
};

export default Testimonial;
