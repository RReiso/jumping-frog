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

const CartItem = ({ item, updateCart, removeItemFromCart }) => {
  console.log(item);
  return (
    <Card>
      <CardMedia
        sx={{ width: "fit-content", mx: "auto", my: 1 }}
        component="img"
        alt={item.name}
        image={item.image.url}
        className="cart-item-image"
      />
      <CardContent className="item-card-content">
        <Typography variant="body1">{item.name}</Typography>
        <Typography variant="h6">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions sx={{ bgcolor: "primary.light" }}>
        <Button
          onClick={() => updateCart(item.id, item.quantity - 1)}
          type="button"
          size="=small"
          color="secondary"
        >
          -
        </Button>
        <Typography>{item.quantity}</Typography>
        <Button
          onClick={() => updateCart(item.id, item.quantity + 1)}
          type="button"
          size="=small"
          color="secondary"
        >
          +
        </Button>
        <Button
          onClick={() => removeItemFromCart(item.id)}
          variant="contained"
          type="button"
          color="secondary"
        >
          Remove from cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
