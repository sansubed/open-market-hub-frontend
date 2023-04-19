import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import heroImage from "../../assets/hero.jpg";
import AnimatedText from "../AnimatedText/AnimatedText";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        background: `linear-gradient(rgba(160, 32, 240, 0.2),rgba(160, 32, 240, 0.2)), url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "left", lg: "cover" },
        backgroundPosition: "left",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2em",
          alignItems: "flex-end",
          height: "100%",
        }}
      >
        <Box
          sx={{
            margin: "10%",
          }}
        >
          <AnimatedText color="white" text="Open Market Hub" variant="h2" />
          <Typography
            variant="h5"
            color="#d7d2d2"
            sx={{ maxWidth: "550px", marginY: 4 }}
          >
            Welcome to the Smart, Safe and Best Responsive Way to Buy and Sell
            Products Locally!
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
            gap={2}
          >
            <Button
              href="/marketplace"
              variant="contained"
              color="warning"
              sx={{
                borderRadius: "20px",
                fontSize: "1.5em",
                px: 3,
                py: 1.5,
              }}
            >
              Market Place
            </Button>
            <Button
              href="/create-new-account"
              variant="contained"
              color="inherit"
              sx={{
                borderRadius: "20px",
                fontSize: "1.5em",
                px: 3,
                py: 1.5,
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
