import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import "./all-products-styles.css";
const products = [
  {
    id: 1,
    name: "Bear",
    description: "Teddy",
    price: "$10",
    image:
      "https://imgr.search.brave.com/OoY4UhvsBN4kt7UUtDv-jr-kEk2IaNAeV6aRDzAnsxo/fit/298/300/ce/1/aHR0cDovL2NsaXBn/cm91bmQuY29tL2lt/YWdlcy9zbWFsbC1m/bG93ZXJzLWNsaXBh/cnQtMy5wbmc",
  },
  {
    id: 2,
    name: "Doll",
    description: "Soft",
    price: "$8",
    image:
      "https://imgr.search.brave.com/OoY4UhvsBN4kt7UUtDv-jr-kEk2IaNAeV6aRDzAnsxo/fit/298/300/ce/1/aHR0cDovL2NsaXBn/cm91bmQuY29tL2lt/YWdlcy9zbWFsbC1m/bG93ZXJzLWNsaXBh/cnQtMy5wbmc",
  },
  {
    id: 3,
    name: "Doll",
    description: "Softrrrr",
    price: "$9",
    image:
      "https://imgr.search.brave.com/OoY4UhvsBN4kt7UUtDv-jr-kEk2IaNAeV6aRDzAnsxo/fit/298/300/ce/1/aHR0cDovL2NsaXBn/cm91bmQuY29tL2lt/YWdlcy9zbWFsbC1m/bG93ZXJzLWNsaXBh/cnQtMy5wbmc",
  },
  {
    id: 4,
    name: "Doll",
    description: "lorem20 gfs isf seifh s",
    price: "$11",
    image:
      "https://imgr.search.brave.com/OoY4UhvsBN4kt7UUtDv-jr-kEk2IaNAeV6aRDzAnsxo/fit/298/300/ce/1/aHR0cDovL2NsaXBn/cm91bmQuY29tL2lt/YWdlcy9zbWFsbC1m/bG93ZXJzLWNsaXBh/cnQtMy5wbmc",
  },
];

const AllProducts = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={1} sx={{ mt: 3 }}>
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
