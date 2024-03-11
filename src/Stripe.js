// Initialize Stripe.js
import { loadStripe } from '@stripe/stripe-js';

let stripePromise = null;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('pk_test_51OmIQjBKIzdgim72RiUzEnydhCDovFYtoiy33c4hR2GFvgo9miJdVLRBBnw3aRR9bfAPyiYTnPxrMBtRA1TSjHsn00AFLYJ6bC');
    }
    return stripePromise;
};

// Fetch Checkout Session and retrieve the client secret
async function initialize() {
    const stripe = await getStripe();

    const response = await fetch("/create-checkout-session", {
        method: "POST",
    });
    if (!response.ok) {
        console.error('Failed to create Stripe session');
        // Handle failure: alert the user, log error, etc.
        return;
    }

    const { clientSecret } = await response.json();

    // Initialize Checkout
    const checkout = await stripe.initEmbeddedCheckout({
        clientSecret,
    });

    // Mount Checkout
    checkout.mount('#checkout');
}

// Call this function when a client wants to pay
initialize();
