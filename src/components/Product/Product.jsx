import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Product = ({ product }) => {
  return (
    <Card>
      <CardMedia image="" title={Product.name} />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h6" color="primary.dark">
          {product.price}
        </Typography>
        <Typography variant="body1">{product.description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add item to cart">
          <AddShoppingCartIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
