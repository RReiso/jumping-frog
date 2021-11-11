import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, Button, Container } from "@mui/material";
import CartItem from "./CartItem";

const FullCart = ({ cart, updateCart, removeItemFromCart, emptyCart }) => {
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
            <CartItem
              item={item}
              updateCart={updateCart}
              removeItemFromCart={removeItemFromCart}
            />
          </Container>
        ))}
      </Container>
      <div className="item-details">
        <Typography variant="h4">
          Subtotal:{cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            onClick={emptyCart}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
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
