import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import "./all-products-styles.css";

const AllProducts = ({ products }) => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={1} sx={{ mt: 10 }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default AllProducts;
