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
import "./product-styles.css";

const Product = ({ product }) => {
  return (
    <Card sx={{ mx: { xs: 1, sm: 2 } }}>
      <CardMedia
        sx={{ m: 1 }}
        image={product.image}
        component="img"
        alt={product.name}
      />
      <CardContent sx={{ bgcolor: "primary.light" }}>
        <div className="card-main">
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6">{product.price}</Typography>
        </div>
        <Typography variant="body1" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ bgcolor: "primary.light" }}>
        <IconButton aria-label="Add item to cart">
          <AddShoppingCartIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
