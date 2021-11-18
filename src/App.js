import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { commerce } from "./lib/commerce";
import theme from "./theme";
import AllProducts from "./components/Products/AllProducts";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckoutForm/Checkout";

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
    const response = await commerce.cart.add(productID, quantity);

    setCart(response.cart); // all products in the cart after adding
  };

  const updateCart = async (productID, quantity) => {
    const response = await commerce.cart.update(productID, { quantity });
    setCart(response.cart); // all products in the cart after updating
  };

  const removeItemFromCart = async (productID) => {
    const response = await commerce.cart.remove(productID);
    console.log("removed response", response);
    setCart(response.cart);
  };

  const emptyCart = async () => {
    const response = await commerce.cart.empty();
    console.log("empty cart", response);
    setCart({});
  };

  const refreshCart = async () => {
    const emptyCart = await commerce.cart.refresh();
    setCart(emptyCart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            exact
            path="/"
            element={<AllProducts products={products} addToCart={addToCart} />}
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateCart={updateCart}
                removeItemFromCart={removeItemFromCart}
                emptyCart={emptyCart}
              />
            }
          />
          <Route
            exact
            path="/checkout"
            element={<Checkout cart={cart} refreshCart={refreshCart} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
