import {
  faFaceSmile,
  faShieldHalved,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import React from "react";

const ValueSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        my: 5,
        py: 3,
        height: "30vh",
      }}
    >
      <Box sx={{}}>
        <Typography variant="h3" mb={3}>
          Our Values
        </Typography>
        <Typography variant="h5">
          We Celebrate All The Students And Their Journey.
        </Typography>
        <Typography variant="h5">
          We Are Proud To Make Student's Life Easier
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FontAwesomeIcon icon={faUsers} size="5x" />
          <Typography variant="h5" mt={3}>
            Bringing Community Closer
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faFaceSmile} size="5x" />
          <Typography variant="h5" mt={3}>
            Guaranteed top notch User{" "}
          </Typography>
          <Typography variant="h5">Experience</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faShieldHalved} size="5x" />
          <Typography variant="h5" mt={3}>
            Ensuring topmost
          </Typography>
          <Typography variant="h5"> security</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ValueSection;
