import { Box } from "@mui/material";
import React from "react";

const Api = () => {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <iframe
        id="iFrameExample"
        width="100%"
        height="100%"
        title="iFrame Example"
        src="http://103.72.77.61:8080/swagger-ui/index.html"
      ></iframe>
    </Box>
  );
};

export default Api;
