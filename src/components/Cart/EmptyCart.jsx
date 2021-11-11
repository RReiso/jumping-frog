import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const EmptyCart = () => {
  return (
    <Typography variant="subtitle1">
      Your shopping cart is currently empty.
      <Link to="/">Start shopping</Link>
    </Typography>
  );
};

export default EmptyCart;
