import { useState } from "react";
import { Box } from "@mui/system";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Description } from "@mui/icons-material";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

const AnimatedCard = styled(Card)(({ theme, isHovered }) => ({
  maxWidth: 300,
  borderRadius: 7,
  background: "#0d324d",
  transition: "transform 0.3s",
  transform: isHovered ? "scale(1.05)" : "scale(1)",
  boxShadow: isHovered ? theme.shadows[10] : theme.shadows[4],
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10],
  },
}));

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  imageUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box>
      <AnimatedCard
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isHovered={isHovered}
      >
        <CardMedia sx={{ height: 150 }} image={imageUrl} title="green iguana" />
        <CardContent sx={{ p: 1.5 }}>
          <Typography gutterBottom variant="h5" component="div" color="#FFF">
            {title}
          </Typography>
          <Typography variant="body2" color="#cfc4c4" py={1}>
            {description}
          </Typography>

          <Typography variant="h5" color="#FFF">
            {price}
          </Typography>
        </CardContent>

        <Divider component="div" role="presentation"></Divider>
        <CardActions sx={{ p: 2 }}>
          <Button variant="contained" color="success" size="small">
            Buy now
          </Button>
          <Button variant="outlined" size="small" color="warning">
            View Details
          </Button>
        </CardActions>
      </AnimatedCard>
    </Box>
  );
};

export default ProductCard;
