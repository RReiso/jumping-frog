import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import "./all-products-styles.css";
import { Typography } from "@mui/material";

const AllProducts = ({ products }) => {
  return (
    <main>
      <Typography variant="h6" sx={{ mt: 10, mb: 2, textAlign: "center" }}>
        Yüksek kaliteli oyuncak seçeneklerimize göz atıniz!
      </Typography>
      <Grid container justifyContent="center" spacing={1}>
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
