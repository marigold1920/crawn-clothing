import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const pulishableKey =
        "pk_test_51H3kgLLrLeCHCUB4TSZGpMoWP7JZzHfYYtlramNgQYrtgn8Bmhsnz8ng65nvHzMB4nKipsPHR5kGlcXWBDgOtePk00Q3mablFJ";

    const onToken = token => {
        console.log(token);
        alert("Payment Successfully!");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CROWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${[price]}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={pulishableKey}
        />
    );
};

export default StripeCheckoutButton;
