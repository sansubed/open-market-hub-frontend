import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box } from "@mui/system";

const Marketplace = () => {
  return (
    <Box
      sx={{
        my: 5,
        mx: "10%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
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
