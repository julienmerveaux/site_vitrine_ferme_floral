<template>
  <div class="card" @click="togglePopup">
    <div class="card-image">
      <img :src="fleurs.image[0].url" alt="Pink Tulip">
    </div>
    <div class="card-body">
      <h2 class="card-title">{{ fleurs.nom }}</h2>
      <p class="card-price">Vendu par botte de : {{ fleurs.botte }} </p>
      <p class="card-price">{{ fleurs.prix }} € </p>
      <div v-if="!isPanierProRoute" class="quantity-selector">
        <button @click="downCompteur">-</button>
        <input style="-moz-appearance: textfield" type="number"  @click="button" :value="quantiteAchat">
        <button @click="upCompteur">+</button>
        <div class="quantity-selector2">
          <button class="styleButtonAddPanier" @click="addItemPanier">Ajouter au panier</button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showPopup" class="popup">
    <div class="popup-content">
      <div class="styleDivButtonClose">
        <button class="styleButtonClose" @click="togglePopup">x</button>
      </div>
      <div class="imgStyle">
        <img :src="fleurs.image[0].url" alt="Pink Tulip">
      </div>
      <h3>{{ fleurs.nom }}</h3>
      <p class="card-price2">Quantité : {{ fleurs.quantite }} </p>
      <p class="card-price2">Couleur(s) : {{ fleurs.couleur.join(",") }} </p>
      <p class="card-price2">Vendu par botte de : {{ fleurs.botte }} </p>
      <p class="card-price2">{{ fleurs.prix }} € </p>
      <div v-if="!isPanierProRoute" class="d-flex">
        <div class="quantity-selector2">
          <button @click="downCompteur">-</button>
          <input type="number" style="-moz-appearance: textfield" :value="quantiteAchat">
          <button @click="upCompteur">+</button>
        </div>
        <div class="quantity-selector2">
          <button class="styleButtonAddPanier" @click="addItemPanier">Ajouter au panier</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import StripePayementPro from "@/components/StripePayementPro.vue";

export default {
  components: {StripePayementPro},
  props: {
    fleurs: Object,
  },
  data() {
    return {
      showPopup: false,
      quantiteAchat:1
    };
  },
  computed: {
    ...mapGetters("UsersInformation", ['getIsConnected']),
    isPanierProRoute() {
      console.log(this.$route.name)
      return this.$route.name === 'PanierProView';
    },
  },
  methods: {
    addItemPanier() {
      if (this.fleurs.quantiteAchat > 0) {
        this.showPopup = true;
        setTimeout(() => {
          this.showPopup = false;
        }, 3000);
        this.$store.dispatch('PanierPro/addArticleToPanier', this.fleurs);
      } else {
        alert("Demande incorrecte");
      }
    },
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    downCompteur(event) {
      event.stopPropagation(); // Cela empêche l'événement de se propager
      if (this.quantiteAchat > 0) {
        this.quantiteAchat -= 1;
      }
    },
    upCompteur(event) {
      event.stopPropagation(); // Cela empêche l'événement de se propager
      this.quantiteAchat += 1;
    },
    button (event){
      event.stopPropagation();
    }
  },
};
</script>

<style scoped>


.styleButtonAddPanier {
  border: 1px solid #ccc; /* Border like the other buttons */
  background-color: #f8f8f8; /* Similar background color */
  color: #555; /* Font color */
  font-size: 16px; /* Font size */
  padding: 8px 16px; /* More padding for a wider button */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer; /* Mouse pointer */
  text-align: center; /* Center the text */
  margin-left: 10px; /* Add some space to the left of the button */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.styleButtonAddPanier:hover {
  background-color: #e9e9e9; /* Lighter background on hover */
}

/* Adding focus style for accessibility */
.styleButtonAddPanier:focus {
  outline: none; /* Remove default focus outline */
  border-color: blue; /* Blue border for focus */
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5); /* Glow effect to indicate focus */
}

.styleDivButtonClose {
  display: flex;
  justify-content: end;
}

.styleButtonClose {
  background: none;
  border:1px white ;
  font-size: x-large;
}
.styleButtonClose:hover {
  background: #f8f6f6;
  border-radius:50% ;

}

.d-flex {
  display: flex;
  justify-content: end;
  min-height: 100px;
}

.imgStyle {
  text-align: center;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

img {
  width: 50%
}

.card {
  cursor: pointer;
  border: 1px solid #ccc;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  font-family: Arial, sans-serif;
  height: fit-content;
  border-radius: 14px;
}

.card-image img {
  width: 60%;
  display: block;
  margin: 20px 20%;
}

.card-body {
  padding: 15px;
  color: #333;
}

.card-title {
  color: #333;
  font-size: 16px;
  margin-bottom: 5px;
}

.card-price {
  color: #888;
  font-size: 14px;
  margin-bottom: 15px;
}

.card-price2 {
  color: #888;
  font-size: large;
  margin-bottom: 15px;
}

.quantity-selector {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 5px;
}

.quantity-selector2 {
  display: flex;
  align-items: center;
  gap: 5px;

}

.quantity-selector button, .quantity-selector input, .quantity-selector2 button, .quantity-selector2 input {
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  color: #555;
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}

.quantity-selector input, .quantity-selector2 input {
  max-width: 80px;
  text-align: center;
  margin: 0 5px;
}

.quantity-selector button:hover, .quantity-selector2 button:hover {
  background: cornflowerblue;
}

.quantity-selector input:focus, .quantity-selector2 input:focus {
  border-color: red;
  box-shadow: red
}


</style>
