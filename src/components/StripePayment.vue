<template>
  <div class="payment-button-container">
    <button @click="showValidePanier = true" class="buy-button">Valider le panier</button>
    <div v-if="showValidePanier" class="overlay">
      <div class="modal">
        <h1>Adresse de livraison</h1>
        <form @submit.prevent="createStripeSession">
          <div class="d-flex">
            <p name="adresse_livraison_lieu"> Adresse : </p>
            <input v-model="adresse_livraison_lieu" type="text">
          </div>

          <div class="d-flex">
            <p name="adresse_livraison_ville"> Ville : </p>
            <input v-model="adresse_livraison_ville" type="text">
          </div>

          <div class="d-flex">
            <p name="adresse_livraison_postal"> Code postal : </p>
            <input v-model="adresse_livraison_postal" type="number">
          </div>

          <div class="d-flex">
            <p> Dupliquer ces informations pour l’adresse de facturation </p>
            <button  class="buy-button styleButtonDuplication" type="button" @click="copierAdresseLivraisonToFacturation">Dupliquer</button>
          </div>

          <h1>Adresse de facturation</h1>

          <div class="d-flex">
            <p name="adresse_facturation_lieu"> Adresse : </p>
            <input v-model="adresse_facturation_lieu" type="text">
          </div>

          <div class="d-flex">
            <p name="adresse_facturation_ville"> Ville : </p>
            <input v-model="adresse_facturation_ville" type="text">
          </div>

          <div class="d-flex">
            <p name="adresse_facturation_postal"> Postal : </p>
            <input v-model="adresse_facturation_postal" type="number">
          </div>

          <p style="color: red;">{{ errorText }}</p>

          <h5 class="d-flex">
            <div> Cocher pour valider vos informations</div>
            <input v-model="checkboxValidate" type="checkbox">
          </h5>

          <button type="submit" class="buy-button">Acheter</button>
        </form>
        <button @click="showValidePanier = false" class="buy-button">Annuler</button>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardCatalogueParticulierVue from "@/components/CardCatalogueParticulierVue.vue";

export default {
  components: { CardCatalogueParticulierVue },
  data() {
    return {
      showValidePanier: false,
      adresse_livraison_lieu: "19 rue des charmes",
      adresse_livraison_ville: "pont sur sambre",
      adresse_livraison_postal: "59138",
      adresse_facturation_lieu: "19 rue des charmes",
      adresse_facturation_ville: "pont sur sambre",
      adresse_facturation_postal: "59138",
      checkboxValidate: true,
      errorText: "",
    };
  },
  computed: {
    ...mapGetters("PanierParticulier", ["getPanierparticulier"]),
    ...mapGetters("UsersInformation",["getCurrentUser"])
  },
  methods: {
    ...mapActions("Stripe", ["createSession"]),
    async createStripeSession() {
      try {
        if (!this.checkboxValidate) {
          this.errorText = "Veuillez cocher pour valider vos informations.";
          return;
        }
        const adresses = {
          livraison:
              this.adresse_livraison_lieu +
              " " +
              this.adresse_livraison_ville +
              " " +
              this.adresse_livraison_postal,
          facturation:
              this.adresse_facturation_lieu +
              " " +
              this.adresse_facturation_ville +
              " " +
              this.adresse_facturation_postal,
          userId:this.getCurrentUser.userId
        };
        const sessionId = await this.$store.dispatch(
            "Stripe/createSession",
            adresses
        );
        const stripe = await this.$store.getters["Stripe/stripeInstance"];
        await stripe.redirectToCheckout({ sessionId });
      } catch (error) {
        console.error("Error creating Stripe session:", error);
      }
    },
    copierAdresseLivraisonToFacturation() {
      this.adresse_facturation_lieu = this.adresse_livraison_lieu;
      this.adresse_facturation_ville = this.adresse_livraison_ville;
      this.adresse_facturation_postal = this.adresse_livraison_postal;
    },
  },
};
</script>

<style>
.d-flex {
  display: flex;
}

.styleButtonDuplication {
  width: 30%;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* Noir avec opacité */
  display: flex;
  align-items: center; /* Centre verticalement */
  justify-content: center; /* Centre horizontalement */
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  /* Ajustez la taille selon vos besoins */
  aspect-ratio: 1;
  max-width: 800px;
}

/* Style de base pour s'assurer que la mise en page utilise tout l'espace disponible et se comporte bien sur tous les appareils */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  width: 100%;
  height: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Flexbox pour le conteneur principal pour centrer le contenu */
.payment-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

/* Styles pour le formulaire et les inputs */
.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
}

.d-flex {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.d-flex input[type="text"], .d-flex input[type="number"] {
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Styles pour les boutons */
button.buy-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

button.buy-button:hover {
  background-color: #0056b3;
}

/* Responsive design avec media queries */
@media (max-width: 768px) {
  .modal {
    width: 90%;
    margin: 20px;
  }

  .d-flex {
    flex-direction: column;
  }
}

/* Overlay style */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* S'assure que l'overlay est toujours au-dessus des autres contenus */
}

</style>
<style>
/* Vos styles CSS restent inchangés */
</style>
