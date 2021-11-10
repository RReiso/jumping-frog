import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { commerce } from "./lib/commerce";
import theme from "./theme";
import AllProducts from "./components/Products/AllProducts";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";

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
    console.log("cart", cart);
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

  return (
    <ThemeProvider theme={theme}>
      <Navbar totalItems={cart.total_items} />
      <AllProducts products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </ThemeProvider>
  );
};

export default App;
