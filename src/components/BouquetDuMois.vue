<template>
  <div v-if="!getIsConnected && showPopUp" class="popup-overlay">
    <div class="popup">
      <p class="popup_styleText">Veuillez vous connecter ou vous inscrire pour ajouter le bouquet du mois a votre
        panier.</p>
      <div class="popup-buttons">
        <router-link class="button-link" to="/inscription">S'inscrire</router-link>
        <router-link class="button-link" to="/login">Se connecter</router-link>
        <button class="button close" @click="closePopup">Fermer</button>
      </div>
    </div>
  </div>
  <div class="styleDivtitle">
    <h1>Bouquet du mois</h1>
  </div>
  <main class="container">
    <div class="image-side">
      <img v-if="bouquetDuMois2.image && bouquetDuMois2.image.length" :src="bouquetMois.image[0].url"
           alt="Fleurs de la ferme">
    </div>
    <div class="text-side">
      <h1>{{ bouquetMois.nom }}</h1>
      <h2>{{ bouquetMois.text }}</h2>
      <h3>{{ bouquetMois.prix }} €</h3>
      <input type="number" ref="quantiteInput" v-model="bouquetMois.quantiteAchat" class="card__quantity-input">
      <div class="stylePaiement">
      </div>
      <button type=submit @click="addItemPanier">Ajouter au panier</button>
      <div v-if="showPopupValidation" class="popupCardValidation">
        <p>Vous venez d'ajouter {{ bouquetMois.quantiteAchat }} {{ bouquetMois.nom }}</p>
        <p>Quantité : {{ bouquetMois.quantiteAchat }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import StripePayment from "@/components/StripePayment.vue";
import StripePayementBouquetMois from "@/components/StripePayementBouquetMois.vue";

export default {
  props: {
    bouquetMois: Object
  },
  name: 'BouquetDuMois',
  components: {StripePayementBouquetMois, StripePayment},
  data() {
    return {
      showPopupValidation: false,
      quantiteAchat: 0,
      showPopUp: false
    };
  },
  computed: {
    ...mapGetters("UsersInformation", ["getCurrentUser", "getIsConnected"]),
    bouquetDuMois2() {
      return this.$store.getters['BouquetInformation/getBouquetMois'];
    }
  },
  methods: {
    addItemPanier() {
      if (!this.getIsConnected) {
        this.showPopUp = true;
        return; // Arrêter l'exécution si l'utilisateur n'est pas connecté
      }
      const quantite = this.bouquetMois.quantiteAchat;
      if (quantite > 0 && quantite <= 5) {
        this.$store.dispatch('PanierParticulier/addArticleToPanier', this.bouquetMois);

        this.showPopupValidation = true;
        setTimeout(() => this.showPopupValidation = false, 3000);
      } else {
        alert('Au-delà de 5 bouquets, vous pouvez me contacter au 07 83 93 45 86 ou par email à audrey@les-5-saisons.fr');
      }
    },
    closePopup() {
      this.showPopUp = false;
    }
    ,
  },
  created() {
  }

}
</script>

<style scoped>
.button-link {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.button-link:hover, .button.close:hover {
  background-color: #367c39;
}

.popupCardValidation {
  position: initial;
  left: 50%;
  top: 50%;
  background-color: #4CAF50;
  color: white;
  padding: 20px 40px; /* Increase padding for larger popup */
  border-radius: 5px;
  z-index: 100;
  font-size: 1em; /* Adjust font size for readability */
}

.button.close {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.popup_styleText {
  font-family: 'Belleza', sans-serif;
  font-size: xx-large;;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(50, 50, 50, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup {
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  padding: 25px;
  max-width: 90%;
  box-sizing: border-box;
  transform: translateY(-50%);
  position: relative;
}

.popup-message {
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
}

.popup-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

p {
  justify-content: center;
}

.styleDivtitle {
  text-align: center;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

.text-side {
  text-align: center;
  flex: 1;
  max-width: 600px;
}

.textSize {
  padding-right: 5px;
}

.text-side h1 {
  color: #333;
  font-size: 2rem;
}

.text-side p {
  color: #666;
  line-height: 1.6;
}

.image-side {
  flex: 1;
  text-align: center;
  max-width: 600px;
}

.image-side img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 0;;
  }

}

</style>
