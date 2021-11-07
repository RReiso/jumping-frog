import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
const products = [
  { id: 1, name: "Bear", description: "Teddy", price: "$10" },
  { id: 2, name: "Doll", description: "Soft", price: "$8" },
  { id: 2, name: "Doll", description: "Soft", price: "$9" },
  { id: 2, name: "Doll", description: "lorem20 gfs isf seifh s", price: "$11" },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
