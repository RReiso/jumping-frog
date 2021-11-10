import React from "react";
import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";
import { Container, Typography, Button, Grid } from "@mui/material";

const Cart = ({ cart }) => {
  console.log("KART", cart);
  if (!cart.line_items) return "Yükleniyor...";
  const isEmptyCart = !cart.line_items.length; // !0=>true; !5=>false
  return (
    <Container>
      <Typography variant="h4">Your Shopping Cart</Typography>
      {isEmptyCart ? <EmptyCart /> : <FullCart cart={cart} />}
    </Container>
  );
};

export default Cart;
