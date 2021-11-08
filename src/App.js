import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { commerce } from "./lib/commerce";
import theme from "./theme";
import Products from "./components/AllProducts";
import Navbar from "./components/Navbar/Navbar";
import useEnhancedEffect from "@mui/utils/useEnhancedEffect";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    const { data } = response;
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Navbar />
      <div>Oyuncak</div>;
      <Products />
    </ThemeProvider>
  );
};

export default App;
