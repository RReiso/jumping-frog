import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";
import "./checkout-styles.css";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@mui/material";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart, refreshCart }) => {
  console.log("rendering");
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingPrice, setShippingPrice] = useState("");
  const [addressFormData, setAddressFormData] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log("cart.id", cart.id);
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        console.log("token", token);
        setCheckoutToken(token);
      } catch (error) {
        if (activeStep !== steps.length) history.push("/");
      }
    };
    generateToken();
  }, [cart]);

  useEffect(() => {
    console.log("Runnign sec usef", checkoutToken);
    const fetchShippingOption = async (checkoutTokenID) => {
      try {
        const shippingType = await commerce.checkout.getShippingOptions(
          checkoutTokenID,
          {
            country: "CA",
          }
        );
        console.log("shipping", shippingType);
        const formattedPrice = shippingType[0].price.formatted_with_symbol;
        console.log(formattedPrice);
        setShippingPrice(formattedPrice);
        console.log("shipPR", shippingPrice);
      } catch (error) {}
    };
    if (checkoutToken) fetchShippingOption(checkoutToken.id);
  }, [checkoutToken, shippingPrice]);

  const moveActiveStep = (num) => {
    setActiveStep((prevActiveStep) => prevActiveStep + num);
  };
  const proceedToPayment = (addressFormData) => {
    setAddressFormData(addressFormData);
    moveActiveStep(1);
  };

  const captureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      console.log("captureCheckoutError", error);
      setErrorMessage(error.data.error.message);
    }
  };

  const Action = () => {
    if (activeStep === 0) {
      return (
        <AddressForm
          checkoutToken={checkoutToken}
          proceedToPayment={proceedToPayment}
          shippingPrice={shippingPrice}
        />
      );
    } else if (activeStep === steps.length) {
      return <Confirmation order={order} error={error} />;
    } else {
      return (
        <PaymentForm
          checkoutToken={checkoutToken}
          moveActiveStep={moveActiveStep}
          addressFormData={addressFormData}
          captureCheckout={captureCheckout}
        />
      );
    }
  };

  return (
    <>
      <main>
        <Paper sx={{ mt: 10 }}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep}>
            {console.log("activestep", activeStep)}
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* Render <Action/> only if checkoutToken is not null*/}
          {checkoutToken && <Action />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
