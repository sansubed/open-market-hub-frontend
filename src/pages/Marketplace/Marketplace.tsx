import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box } from "@mui/system";

const Marketplace = () => {
  return (
    <Box
      sx={{
        py: 5,
        mx: "10%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Box>
  );
};

export default Marketplace;
