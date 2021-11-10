import React from "react";
import { Typography, Grid, Button, Container } from "@mui/material";
import CartItem from "./CartItem";

const FullCart = ({ cart }) => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        spacing={3}
      >
        {cart.line_items.map((item) => (
          <Container key={item.id}>
            <CartItem item={item} />
          </Container>
        ))}
      </Container>
      <div className="item-details">
        <Typography variant="h4">
          Subtotal:{cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Proceed to checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default FullCart;
