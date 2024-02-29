// Initialize Stripe.js
import {Stripe} from "stripe";

const stripe = Stripe('pk_test_51OmIQjBKIzdgim72RiUzEnydhCDovFYtoiy33c4hR2GFvgo9miJdVLRBBnw3aRR9bfAPyiYTnPxrMBtRA1TSjHsn00AFLYJ6bC');

initialize();

// Fetch Checkout Session and retrieve the client secret
async function initialize() {
    const response = await fetch("/create-checkout-session", {
        method: "POST",
    });
    const { clientSecret } = await response.json();
    console.log(response)
    // Initialize Checkout
    const checkout = await stripe.initEmbeddedCheckout({
        clientSecret,
    });

    // Mount Checkout
    checkout.mount('#checkout');
}
