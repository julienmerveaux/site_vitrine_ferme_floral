<template>
  <div class="payment-button-container">
    <input v-model="adresse_livraison" type="text">
    <button @click="createStripeSession" class="buy-button">Acheter</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';


export default {
  data() {
    return {
      adresse_livraison: ""
    }
  },
  methods: {
    ...mapActions('Stripe', ['createSession']),
    async createStripeSession() {
      try {
        const sessionId = await this.$store.dispatch('Stripe/createSession',this.adresse_livraison);
        const stripe = await this.$store.getters['Stripe/stripeInstance'];
        await stripe.redirectToCheckout({ sessionId });
      } catch (error) {
        console.error('Error creating Stripe session:', error);
      }
    },
  }
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
