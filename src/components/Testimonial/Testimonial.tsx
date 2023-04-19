import { Box, Typography } from "@mui/material";
import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import {
  faBeer,
  faDatabase,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import CustomGradientCard from "../GradientCard/GradientCard";

const Testimonial = () => {
  return (
    <Box
      sx={{
        py: 5,
        px: 2,
        backgroundColor: " #A020F0",
        color: "#FFF",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        background: "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)",
      }}
    >
      <Box>
        <Typography variant="h4">Here’s what people</Typography>
        <Typography variant="h4">have to say about us</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        <CustomGradientCard
          color="#000"
          sx={{
            backgroundColor: "#A9C9FF",
            backgroundImage:
              "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
          }}
          feature="Better user experience"
          icon={faLaptopCode}
          description=" Designing digital products and services that are user-centered and provide users with positive emotions, high satisfaction, and ease of use."
        />
        <CustomGradientCard
          sx={{
            backgroundColor: "#A9C9FF",
            backgroundImage:
              "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
          }}
          color="#000"
          feature="Scalability"
          icon={faDatabase}
          description="Handle increasing amounts of work, growth, and traffic without sacrificing performance or functionality"
        />
      </Box>
    </Box>
  );
};

export default Testimonial;
