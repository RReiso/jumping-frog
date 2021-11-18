import React from "react";
import { Typography, Button, Divider, Link } from "@mui/material";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({
  checkoutToken,
  moveActiveStep,
  addressFormData,
  captureCheckout,
}) => {
  const handleSubmit = (e, elements, stripe) => {
    e.preventDefault;
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.err(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: addressFormData.firstName,
          lastname: addressFormData.lastName,
          email: addressFormData.email,
        },
        shipping: {
          address: addressFormData.address,
          city: addressFormData.city,
          postal_code: addressFormData.postalCode,
          country: "Canada",
        },
        fulfillment: { shipping_method: addressFormData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      captureCheckout(checkoutToken.id, orderData);

      moveActiveStep(1);
    }
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {(elements, stripe) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <div>
                <Button variant="outlined" onClick={() => moveActiveStep(-1)}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!stripe}
                >
                  Place Order
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
