import React from "react";
import "./cart-styles.css";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <Card>
      <CardMedia
        component="img"
        alt={item.name}
        image={item.image.url}
        className="cart-item-image"
      />
      <CardContent>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions sx={{ bgcolor: "primary.light" }}>
        <Button type="button" size="=small" color="secondary">
          -
        </Button>
        <Typography>{item.quantity}</Typography>
        <Button type="button" size="=small" color="secondary">
          +
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
