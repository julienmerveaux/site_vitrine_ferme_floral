<template>
  <div class="payment-button-container">
    <button @click="createStripeSession" class="buy-button">Acheter</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { loadStripe } from '@stripe/stripe-js';

export default {
  methods: {
    ...mapActions('Stripe', ['createSession']),
    async createStripeSession() {
      try {
        const stripe = await loadStripe('pk_test_51OmIQjBKIzdgim72RiUzEnydhCDovFYtoiy33c4hR2GFvgo9miJdVLRBBnw3aRR9bfAPyiYTnPxrMBtRA1TSjHsn00AFLYJ6bC');
        const { sessionId } = await this.createSession(); // Vuex action to create session
        await stripe.redirectToCheckout({
          sessionId: sessionId,
        });
      } catch (error) {
        console.error('Error creating Stripe session:', error);
      }
    },
  },
};
</script>

<style scoped>
.payment-button-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.buy-button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.buy-button:hover {
  background-color: #45a049;
}
</style>
