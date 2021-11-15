import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "./CustomTextField";
import { commerce } from "../../lib/commerce";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@mui/material";

const AddressForm = ({ checkoutToken }) => {
  const methods = useForm();
  const [shippingPrice, setShippingPrice] = useState("");

  const fetchShippingOption = async (checkoutTokenID) => {
    const shippingType = await commerce.checkout.getShippingOptions(
      checkoutTokenID,
      {
        country: "TR",
      }
    );
    console.log("shipping", shippingType);
    setShippingPrice(shippingType[0].price.formatted_with_symbol);
    console.log(shippingPrice);
  };

  useEffect(() => {
    fetchShippingOption(checkoutToken.id, "TR");
  });

  console.log("checkTOKEN", checkoutToken);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
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
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value="" fullWidth onChange="">
                <MenuItem key="" value="">
                  Hello
                </MenuItem>
              </Select>
            </Grid> */}
          </Grid>
        </form>
        <Typography>Domestic Shipping - {shippingPrice}</Typography>
      </FormProvider>
    </>
  );
};

export default AddressForm;
