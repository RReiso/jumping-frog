import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "./CustomTextField";
import { commerce } from "../../lib/commerce";
import { Button, Grid, Typography, TextField } from "@mui/material";

const AddressForm = ({ shippingPrice, proceedToPayment }) => {
  const { handleSubmit, register } = useForm();
  // const [shippingPrice, setShippingPrice] = useState("");

  // const fetchShippingOption = async (checkoutTokenID) => {
  //   const shippingType = await commerce.checkout.getShippingOptions(
  //     checkoutTokenID,
  //     {
  //       country: "CA",
  //     }
  //   );
  //   console.log("shipping", shippingType);
  //   setShippingPrice(shippingType[0].price.formatted_with_symbol);
  //   console.log(shippingPrice);
  // };

  // useEffect(() => {
  //   fetchShippingOption(checkoutToken.id, "CA);
  // });

  // console.log("checkTOKEN", checkoutToken);

  const onSubmit = (data) => {
    console.log("data", data);
    proceedToPayment({ ...data, shippingPrice });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      {/* <FormProvider {...methods}> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <input {...register("testing")} />
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              {...register("HELLO")}
              label="TESTING"
            />
          </Grid>
          <CustomTextField label="First Name" register={register} />
          {/* <CustomTextField name="lastName" label="Last Name" />
          <CustomTextField name="address" label="Address" />
          <CustomTextField name="email" label="Email" />
          <CustomTextField name="city" label="City" />
          <CustomTextField name="postalCode" label="Postal Code" />
          <CustomTextField
            disabled
            name="country"
            label="Country"
            value="Canada"
          /> */}
        </Grid>
        <div className="form-buttons">
          <Button component={Link} variant="outlined" type="button" to="/cart">
            Back to Cart
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Continue to Payment
          </Button>
        </div>
      </form>
      <Typography>Domestic Shipping -{shippingPrice} </Typography>
      {/* </FormProvider> */}
    </>
  );
};

export default AddressForm;
