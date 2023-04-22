import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Box, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BoxProps } from "@mui/material/Box";

interface MyComponentProps extends BoxProps {
  // add any additional props specific to your component
}

interface GradientCardProps {
  children: React.ReactNode;
}

interface FeatureCardInfo extends BoxProps {
  feature: string;
  description: string;
  icon: IconDefinition;
  color: string;
}

const GradientCard = styled(Card)<GradientCardProps>`
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  border-radius: 20px;
`;

const AnimatedCardContent = styled(CardContent)`
  animation: fadeIn 0.5s ease-in-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CustomGradientCard: React.FC<FeatureCardInfo> = ({
  sx,
  feature,
  description,
  icon,
  color,
}) => {
  return (
    <GradientCard sx={sx}>
      <AnimatedCardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            pt: 3,
            maxWidth: 300,
            m: 1,
          }}
        >
          <FontAwesomeIcon icon={icon} size="7x" color={color} />
          <Typography variant="h4" color={color} gutterBottom my={2}>
            {feature}
          </Typography>
          <Typography variant="body1" color={color}>
            {description}
          </Typography>
          <Button
            size="small"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              alignSelf: "center",
              mt: 3,
            }}
            href="marketplace"
          >
            Learn More
          </Button>
        </Box>
      </AnimatedCardContent>
    </GradientCard>
  );
};

export default CustomGradientCard;
