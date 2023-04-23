import { useState } from "react";
import { Box } from "@mui/system";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Divider, PaperProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Description } from "@mui/icons-material";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

type MyPaperProps = Omit<PaperProps, "classes"> & {
  isHovered: boolean;
};

const AnimatedCard = styled(Card)(({ isHovered }: MyPaperProps) => ({
  width: 280,
  height: 380,
  borderRadius: 7,
  background: "#0d324d",
  transition: "transform 0.3s",
  transform: isHovered ? "scale(1.05)" : "scale(1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "&:hover": {
    transform: "scale(1.05)",
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
        <CardMedia sx={{ height: 250 }} image={imageUrl} />
        <CardContent sx={{ p: 1.5 }}>
          <Typography gutterBottom variant="h6" component="div" color="#FFF">
            {title}
          </Typography>
          <Typography variant="body2" color="#cfc4c4" py={1}>
            {description}
          </Typography>

          <Typography variant="h5" color="#9d3a3a">
            ${price}
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
