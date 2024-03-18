<template>
  <div class="generalCard">
    <article class="card">
      <img :src="bouquet.image[0].url" alt="pas de photo" class="card__img">
      <div class="card__info">
        <span class="card__category">{{ bouquet.type }}</span>
        <h3 class="card__title">{{ bouquet.nom }}</h3>
        <h2 v-if="getIsConnected" class="card__price">{{ bouquet.prix }} €</h2>

        <input type="number" v-if="getIsConnected && !isPanierParticulierRoute" v-model="bouquet.quantiteAchat"
               class="card__quantity-input">
        <h1 v-if="isPanierParticulierRoute" class="card__price">Quantité : {{ bouquet.quantiteAchat }}</h1>
      </div>
      <button v-if="!isPanierParticulierRoute && getIsConnected" @click="addItemPanier" class="buttonStyle">Ajouter au
        <p>{{isPanierParticulierRoute}}</p>
        panier
      </button>
    </article>
    <div v-if="showPopup" class="popupCardValidation">
      <p>Vous venez d'ajouter {{ bouquet.nom }}</p>
      <p>Quantité : {{ bouquet.quantiteAchat }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: {
    bouquet: Object,
  },
  data() {
    return {
      showPopup: false,
    };
  },
  computed: {
    ...mapGetters("UsersInformation",['getIsConnected']),
    isPanierParticulierRoute() {
      return this.$route.name === 'PanierParticulierView';
    },
  },
  methods: {
    addItemPanier() {
      if (this.bouquet.quantiteAchat > 0) {
        this.showPopup = true;
        setTimeout(() => {
          this.showPopup = false;
        }, 3000);
        this.$store.dispatch('PanierParticulier/addArticleToPanier', this.bouquet);
      } else {
        alert("Demande incorrecte");
      }
    },
  },
};
</script>

<style scoped>
.generalCard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Use auto-fit with minmax for responsive sizing */
  grid-gap: 20px;
  max-width: 1200px; /* Adjust the max-width to fit your design */
  margin: 0 auto;
}

.card {
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align content to the top */
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;
  height: auto; /* Height auto for content sizing */
  box-shadow: 5px 5px 20px #a49f9f;

}

.card__img {
  margin-top: 5%;
  box-shadow: 5px 5px 5px #a49f9f;
  border-radius: 10px;
  width: 95%;
  height: auto; /* Set to auto so the image's aspect ratio is maintained */
  object-fit: cover;
}

.card__info {
  padding: 15px;
  text-align: center;
  width: 100%; /* Full width to align text inputs and titles */
}

.card__quantity-input {
  padding: 5px;
  margin: 10px 0; /* Add some margin at the top and bottom */
  border: none;
  text-align: center;
}

.buttonStyle {
  width: 75%; /* Full width button */
  padding: 10px 20px; /* Increase padding for a larger button */
  margin-top: 20px;
  background-color: transparent;
  color: black;
  border: 1px solid;
  box-shadow: 0 5px 5px #c4c0c0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em; /* Increase font size if necessary */
}

/* You may also want to adjust the hover effect for a better feel */
.buttonStyle:hover {
  transform: scale(1.05); /* Slight increase in scale */
}

/* Adjust the popup for larger view */
.popupCardValidation {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4CAF50;
  color: white;
  padding: 20px 40px; /* Increase padding for larger popup */
  border-radius: 5px;
  z-index: 100;
  font-size: 1em; /* Adjust font size for readability */
}

@media (max-width: 768px) {
  .generalCard {
    grid-template-columns: 1fr; /* Single column for mobile */
  }
}
</style>
