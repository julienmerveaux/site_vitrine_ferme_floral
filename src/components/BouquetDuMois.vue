<template>
  <div class="popup-overlay" v-if="showPopUp && !getIsConnected">
    <div class="popup">
      <p class="popup-message">Veuillez vous connecter ou vous inscrire pour ajouter le bouquet du mois à votre panier.</p>
      <div class="popup-buttons">
        <router-link class="button-link" to="/inscription">S'inscrire</router-link>
        <router-link class="button-link" to="/login">Se connecter</router-link>
        <button class="button close" @click="closePopup">Fermer</button>
      </div>
    </div>
  </div>
  <main class="container">
    <div class="image-side">
      <img v-if="bouquetMois.image && bouquetMois.image.length" :src="bouquetMois.image[0].url" alt="Fleurs de la ferme">
    </div>

    <div class="text-side">
      <h1>{{ bouquetMois.nom }}</h1>
      <p class="pStyle">{{ bouquetMois.text }}</p>
      <h3 class="h3Style">{{ bouquetMois.prix }} €</h3>
      <div class="payment-options">
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    bouquetMois: Object
  },
  name: 'BouquetDuMois',
  data() {
    return {
      showPopUp:false,
      showPopupValidation: false
    };
  },
  computed: {
    ...mapGetters("UsersInformation", ["getIsConnected"])
  },
  methods: {
    addItemPanier() {
      if (!this.getIsConnected) {
        console.log(true)
        this.showPopUp = true;
        return;
      }

      const quantite = this.bouquetMois.quantiteAchat;
      if (quantite > 0 && quantite <= 5) {
        // Ajoutez l'article au panier
        this.showPopupValidation = true;
        setTimeout(() => this.showPopupValidation = false, 3000);
      } else {
        alert('Au-delà de 5 bouquets, vous pouvez me contacter au 07 83 93 45 86 ou par email à audrey@les-5-saisons.fr');
      }
    },
    closePopup() {
      this.showPopUp = false;
    }
  }
}
</script>

<style scoped>

.pStyle {
  color: var(--couleur-texte);
  line-height:1.6;
  font-size: x-large;
}

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

.margin_bottom {
  margin-bottom: 20px;
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
  font-family: 'Arial', sans-serif; /* Nouveau style de police */
  font-weight: normal; /* Supprimer le style gras */
}

.popup-validation {
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: #4CAF50;
  color: white;
  padding: 20px 40px;
  border-radius: 5px;
  z-index: 100;
  font-size: 1em;
  font-family: 'Arial', sans-serif; /* Nouveau style de police */
  font-weight: normal; /* Supprimer le style gras */
}

.title {
  text-align: center;
  font-family: 'Arial', sans-serif; /* Nouveau style de police */
  font-weight: normal; /* Supprimer le style gras */
  color: black;
}

.text-side {
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;
  max-width: 900px;
  font-family: 'Arial', sans-serif; /* Nouveau style de police */
  font-weight: normal; /* Supprimer le style gras */
  gap: 20px;
  align-items: center;
}


.popup-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}



.button.close {
  background-color: var(--couleur-button);
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}


.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--couleur-separeted-part);
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

.quantity-input {
  text-align: center;
  width: 200px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

button {
  background-color: var(--couleur-button);
  color: var(--couleur-button-texte) !important;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: large;
}


button:hover {
  background-color: beige;
}

@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 0;
  }
}
</style>
