import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faLock } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

interface FeatureCardInfo {
  feature: string;
  description: string;
  icon: IconDefinition;
}

const FeatureCard = ({ feature, description, icon }: FeatureCardInfo) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: "25px",
          background: "#0f1624",
          color: "#FFF",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 3,
          }}
        >
          <FontAwesomeIcon icon={icon} size="5x" />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            {feature}
          </Typography>
          <Typography variant="body2" color="white">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="info">
            Share
          </Button>
          <Button size="small" color="info">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default FeatureCard;
