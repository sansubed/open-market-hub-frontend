import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box } from "@mui/system";
import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";

const Marketplace = () => {
  //fetch all product from the api
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     let response = await fetch("http://103.72.77.61:8080/api/products/");
  //     let data = await response.json();
  //     console.log(data);
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <Box
      sx={{
        py: 5,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
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
          InputProps={{
            style: {
              color: "#fff",
              border: "2px solid #FFF",
              borderRadius: "20px",
              fontSize: "1.3em",
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
        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />

        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />
        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />

        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />
        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />

        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />

        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />

        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />
        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />
        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />
        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />
        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />
        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />
        <ProductCard
          title="Laptop"
          description="Brand new Surface Book"
          price="250"
          imageUrl="https://i5.walmartimages.com/asr/9c14c33b-8c37-4dba-973e-1e9025dcb086.f094e8d5ea04c09214ffd4d91060ff79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        />
      </Box>
    </Box>
  );
};

export default Marketplace;
