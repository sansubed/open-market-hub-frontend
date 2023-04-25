import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSectionWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 5px",
}));

const HeroTextWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const HeroButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  borderColor: theme.palette.common.white,
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
  },
}));

const HeroIcon = styled(ArrowForwardIcon)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

function Api() {
  return (
    <HeroSectionWrapper>
      <HeroTextWrapper>
        <Typography variant="h2" color="#FFF" gutterBottom>
          OpenMarket Hub APIS
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          color="#c2c2c2"
          my={3}
          maxWidth="600px"
        >
          Our company's API enables developers and businesses to easily
          integrate our services and access our data in a secure and scalable
          way, allowing them to build innovative and customized applications
          that meet their specific needs.
        </Typography>
        <HeroButton
          variant="contained"
          color="primary"
          endIcon={<HeroIcon />}
          href="http://103.72.77.61:8080/swagger-ui/index.html"
        >
          Explore Interactive Apis
        </HeroButton>
      </HeroTextWrapper>
    </HeroSectionWrapper>
  );
}

export default Api;
