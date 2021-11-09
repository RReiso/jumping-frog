import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { commerce } from "./lib/commerce";
import theme from "./theme";
import Products from "./components/AllProducts";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    const { data } = response;
    setProducts(data);
  };
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const addToCart = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity);
    console.log("item ", item);
    console.log("item.cart ", item.cart);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Products products={products} addToCart={addToCart} />
    </ThemeProvider>
  );
};

export default App;
