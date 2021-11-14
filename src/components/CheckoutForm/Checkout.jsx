import React, { useState, useEffect } from "react";
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

const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    console.log("cart.id", cart.id);
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        console.log("token", token);
        setCheckoutToken(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);

  const Action = () => {
    if (activeStep === 0) {
      return <AddressForm checkoutToken={checkoutToken} />;
    } else if (activeStep === steps.length) {
      return <Confirmation />;
    } else {
      return <PaymentForm />;
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
