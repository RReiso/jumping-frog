import React, { useState } from "react";
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
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <>
      <main>
        <Paper sx={{ mt: 10 }}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={currentStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
