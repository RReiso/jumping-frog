import React, { useState } from "react";
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

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  // const Form = () => {
  //   return activeStep === 0 ? <AddressForm /> : <PaymentForm />;
  // };
  const Action = () => {
    if (activeStep === 0) {
      return <AddressForm />;
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
          <Action />
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
