import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Feedback = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        py: 2,
      }}
    >
      <Typography>We would love to hear back from you!</Typography>
      <Button variant="contained" size="large" color="success">
        Give Feedback
      </Button>
    </Box>
  );
};

export default Feedback;
