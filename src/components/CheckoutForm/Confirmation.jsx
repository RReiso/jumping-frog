import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, CircularProgress } from "@mui/material";

const Confirmation = ({ order, error }) => {
  if (order.customer) {
    return (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname}!
          </Typography>
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    );
  } else if (error) {
    return (
      <>
        <Typography>{error}</Typography>
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    );
  } else {
    return <CircularProgress />;
  }
};

export default Confirmation;
