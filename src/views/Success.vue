<script>
import {mapGetters} from "vuex";

export default {
  name: "Success",
  data(){
    return{
    }
  },
  computed: {
    ...mapGetters("Stripe", ["getSessionDetail"]),
  },
  async created() {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');
    if (sessionId) {
      try {
        // Appelez une action Vuex pour récupérer les informations de session ou faites une requête directe à votre API.
        const sessionDetails = await this.$store.dispatch('Stripe/retrieveSessionDetails', sessionId);
        this.test = sessionDetails.nom; // Supposons que 'retrieveSessionDetails' renvoie les détails de la session.
      } catch (error) {
        console.error('Erreur lors de la récupération des détails de la session:', error);
      }
    }
  }
}
</script>

<template>
  <div class="success-container">
    <h1>Succès!</h1>
    {{getSessionDetail}}
    <p>Votre achat a été complétée avec succès.</p>
  </div>
</template>

<style scoped>
.success-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #e9f6ec;
  border: 1px solid #b2d8b0;
  border-radius: 8px;
  color: #4F8A10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 50px auto;
  font-family: 'Arial', sans-serif;
}

h1 {
  margin: 0 0 10px 0;
  font-size: 24px;
}

p {
  margin: 0;
  font-size: 16px;
}
</style>
