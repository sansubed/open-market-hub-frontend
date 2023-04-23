import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box } from "@mui/system";
import { InputAdornment, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";
import productsList from "../../seeding/products";

interface Product {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const Marketplace = () => {
  const [productList, setProductList] = useState(productsList);
  const [searchInput, setSearchInput] = useState<string>("");

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     let response = await fetch("http://103.72.77.61:8080/api/products/");
  //     let productList = await response.json();
  //     setProductList(productList);
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <Box
      sx={{
        py: 5,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "40%",
        }}
      >
        <TextField
          id="search"
          placeholder="What are you looking for?"
          fullWidth
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          InputProps={{
            style: {
              color: "#fff",
              border: "2px solid #FFF",
              borderRadius: "20px",
              fontSize: "1.1em",
            },
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faSearch} color="#FFF" size="1x" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box
        sx={{
          py: 5,
          mx: "5%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 5,
        }}
      >
        {productsList
          .filter(
            (product: {
              name: string;
              description: string;
              price: number;
              imageUrl: string;
            }) => product?.name?.includes(searchInput)
          )
          .map(
            (
              product: {
                name: string;
                description: string;
                price: number;
                imageUrl: string;
              },
              index
            ) => (
              <ProductCard
                key={index}
                title={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                description={product.description}
              />
            )
          )}
      </Box>
    </Box>
  );
};

export default Marketplace;
