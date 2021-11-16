import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "./CustomTextField";
import { commerce } from "../../lib/commerce";
import { Button, Grid, Typography } from "@mui/material";

const AddressForm = ({ shippingPrice, proceedToPayment }) => {
  const methods = useForm();
  // const [shippingPrice, setShippingPrice] = useState("");

  // const fetchShippingOption = async (checkoutTokenID) => {
  //   const shippingType = await commerce.checkout.getShippingOptions(
  //     checkoutTokenID,
  //     {
  //       country: "TR",
  //     }
  //   );
  //   console.log("shipping", shippingType);
  //   setShippingPrice(shippingType[0].price.formatted_with_symbol);
  //   console.log(shippingPrice);
  // };

  // useEffect(() => {
  //   fetchShippingOption(checkoutToken.id, "TR");
  // });

  // console.log("checkTOKEN", checkoutToken);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => proceedToPayment(data))}>
          <Grid container spacing={3}>
            <CustomTextField name="firstName" label="First Name" />
            <CustomTextField name="lastName" label="Last Name" />
            <CustomTextField name="address" label="Address" />
            <CustomTextField name="email" label="Email" />
            <CustomTextField name="city" label="City" />
            <CustomTextField name="postalCode" label="Postal Code" />
            <CustomTextField
              disabled
              name="country"
              label="Country"
              value="Turkey"
            />
          </Grid>
          <div className="form-buttons">
            <Button
              component={Link}
              variant="outlined"
              type="button"
              to="/cart"
            >
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Continue to Payment
            </Button>
          </div>
        </form>
        <Typography>Domestic Shipping -{shippingPrice} </Typography>
      </FormProvider>
    </>
  );
};

export default AddressForm;
