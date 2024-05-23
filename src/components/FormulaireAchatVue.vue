<template>
  <div>
    <button @click="isConnected" class="styleButtonAddAbo">S'abonner mensuellement</button>
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
            <input style="-moz-appearance: textfield" v-model="adresse_livraison_postal" type="number">
          </div>

          <div class="d-flex">
            <p> Dupliquer ces informations pour l’adresse de facturation </p>
            <button class="buy-button styleButtonDuplication" type="button"
                    @click="copierAdresseLivraisonToFacturation">Dupliquer
            </button>
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
            <input v-model="adresse_facturation_postal" type="text">
          </div>

          <p style="color: red;">{{ errorText }}</p>

          <h5 class="d-flex">
            <div> Cocher pour valider vos informations</div>
            <input class="checkBoxStyle" v-model="checkboxValidate" type="checkbox">
          </h5>
          <p>{{message}}</p>
          <div class="partiePopup">
            <button type="submit" class="buy-button">S'abonner</button>
            <button @click="showValidePanier = false" class="buy-button">Annuler</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import router from "@/router/index.js";

export default {
  name: 'FormulaireAchatVue',
  props:{
    bouquetId: Number,
    nom:String,
    price:Number,
    quantiteAchat: Number,
  },
  data() {
    return {
      showValidePanier: false,
      adresse_livraison_lieu: "",
      adresse_livraison_ville: "",
      adresse_livraison_postal: "",
      adresse_facturation_lieu: "",
      adresse_facturation_ville: "",
      adresse_facturation_postal: "",
      checkboxValidate: true,
      errorText: "",
      message:"En achetant ce produit local je contribue à la production de fleurs de saisons et je m’abonne jusqu’à ce que j’arrête mon abonnement dans mon compte client",
      text:""
    };
  },
  computed: {
    ...mapGetters("PanierParticulier", ["getPanierparticulier"]),
    ...mapGetters("UsersInformation", ["getCurrentUser","getIsConnected"]),
  },
  methods: {
    ...mapActions("Stripe", ["createSession","test"]),
    isConnected(){
      if (!this.getIsConnected){
        console.log(this.getIsConnected)
        router.push("/login")
      }else {
        this.showValidePanier = true
      }
    },
    async test(){
      const test = await this.$store.dispatch(
          "Stripe/test",
      );
      this.text = test
    },
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
          bouquetId: this.bouquetId,
          nom: this.nom,
          price: this.price,
          quantiteAchat: this.quantiteAchat,
          isParticulier:this.getCurrentUser.type

        };

        const sessionId = await this.$store.dispatch(
            "Stripe/createSessionAbonnement",
            adresses
        );
        const stripe = await this.$store.getters["Stripe/stripeInstance"];
        await stripe.redirectToCheckout({sessionId});
      } catch (error) {
        console.error(" Error creating Stripe session:", error);
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

<style scoped>
.partiePopup {
  display: flex;
  justify-content: space-between;
}
.styleButtonAddAbo {
  border: 1px solid #ccc;
  background-color: var(--couleur-button);
  color: var(--couleur-button-texte);;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;

}

.styleButtonAddAbo:hover {
  background-color: var(--couleur-button-texte); /* Lighter background on hover */
  color: black;
}

/* Adding focus style for accessibility */
.styleButtonAddAbo:focus {
  outline: none; /* Remove default focus outline */
  border-color: var(--couleur-button); /* Blue border for focus */
  color: var(--couleur-button-texte);
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5); /* Glow effect to indicate focus */
}

input[type="checkbox"] {
  accent-color: var(--couleur-button);
}

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


/* Styles pour le formulaire et les inputs */
.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  background-color: var(--couleur-button);
  color: var(--couleur-button-texte);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

button.buy-button:hover {
  background-color: var(--couleur-button-texte);
  color: black;
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* S'assure que l'overlay est toujours au-dessus des autres contenus */
}

</style>
