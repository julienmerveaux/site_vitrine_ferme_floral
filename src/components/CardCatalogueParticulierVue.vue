<template>
  <div class="card" @click="togglePopup">
    <div class="card-image">
      <img :src="bouquet.image[0].url" alt="Pink Tulip">
    </div>
    <div class="card-body">
      <h2 class="card-title">{{ bouquet.nom }}</h2>
      <p class="card-price">{{ bouquet.prix }} € </p>
      <div v-if="!isPanierParticulierRoute" class="quantity-selector">
<!--        <div class="divGaucheCard">-->
<!--          <button @click="downCompteur">-</button>-->
<!--          <input style="-moz-appearance: textfield" type="number" @click="button" :value="quantiteAchat">-->
<!--          <button @click="upCompteur">+</button>-->
<!--        </div>-->
        <div class="divDroite">
          <FormulaireAchatVue
              :bouquetId="this.bouquet.id"
              :nom="this.bouquet.nom"
              :price="this.bouquet.prix"
              :quantiteAchat="this.bouquet.quantiteAchat"
              @click="cancelPropagation"
          ></FormulaireAchatVue>
        </div>

      </div>
    </div>
  </div>

  <div v-if="!isPanierParticulierRoute && showPopup" class="popup">
    <div class="popup-content">
      <div class="styleDivButtonClose">
        <button class="styleButtonClose" @click="togglePopup">x</button>
      </div>
      <div class="imgStyle">
        <img :src="bouquet.image[0].url" alt="Pink Tulip">
      </div>
      <h3>{{ bouquet.nom }}</h3>
      <p class="card-price2">Quantité : {{ bouquet.quantite }} </p>
      <p class="card-price2">{{ bouquet.prix }} € </p>
      <h4>A propos :</h4>
      <p>{{ bouquet.text }}</p>
      <div class="d-flex gap-10">
        <div class="divGaucheInfo">
          <div class="quantity-selector2">
            <button @click="downCompteur">-</button>
            <input style="-moz-appearance: textfield" type="number" :value="quantiteAchat">
            <button @click="upCompteur">+</button>
          </div>
        </div>

        <FormulaireAchatVue
            :bouquetId="this.bouquet.id"
            :nom="this.bouquet.nom"
            :price="this.bouquet.prix"
            :quantiteAchat="this.bouquet.quantiteAchat"
            @click="cancelPropagation"
            class="btnAbo"
        ></FormulaireAchatVue>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Test from "@/components/FormulaireAchatVue.vue";
import FormulaireAchatVue from "@/components/FormulaireAchatVue.vue";
import panierParticulier from "@/stores/PanierParticulier.js";
import router from "@/router/index.js";


export default {
  components: {FormulaireAchatVue, Test},
  props: {
    bouquet: Object,
  },
  data() {
    return {
      showPopup: false,
      showFacturation: false,
      quantiteAchat: 1
    };
  },
  computed: {
    panierParticulier() {
      return panierParticulier
    },
    ...mapGetters("UsersInformation", ['getIsConnected']),
    isPanierParticulierRoute() {
      return this.$route.name === 'PanierParticulierView';
    },
  },
  methods: {
    cancelPropagation(event) {
      event.stopPropagation();
    },
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
    async subscribeMonthly(event) {
      event.stopPropagation();
      try {
        const aboInfo = {
          bouquetId: this.bouquet.id,
          nom: this.bouquet.nom,
          price: this.bouquet.prix,
          quantiteAchat: this.bouquet.quantiteAchat,
        }
        console.log(aboInfo)
        const sessionId = await this.$store.dispatch('Stripe/createSessionAbonnement', aboInfo);
        const stripe = await this.$store.getters["Stripe/stripeInstance"];
        await stripe.redirectToCheckout({sessionId}); // Assurez-vous que sessionId est l'ID de la session, pas l'URL


      } catch (error) {
        console.error("Erreur lors de la création de l'abonnement mensuel :", error);
        alert("Une erreur s'est produite lors de la tentative d'abonnement.");
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
    button(event) {
      event.stopPropagation();
    }
  },

};
</script>

<style scoped>

h4 {
  margin: 0;
}

.gap-10 {
  gap: 60px;
}

.divGaucheInfo {
  display: flex;
}

.btnAbo {
  justify-content: center;
  align-items: center;
  display: flex;
}


.styleDivButtonClose {
  display: flex;
  justify-content: end;
}

.styleButtonClose {
  background: none;
  border: 1px white;
  font-size: x-large;
}

.styleButtonClose:hover {
  background: #f8f6f6;
  border-radius: 50%;

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
  max-width: 80vh; /* Limite la hauteur à 80% de la hauteur de la fenêtre */
  overflow-y: auto; /* Permet le défilement vertical si nécessaire */
}

img {
  width: 50%
}

.popup-content p {
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin: 10px auto;
  color: var(--couleur-texte);
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
  background-color: white;
}

.card-image img {
  width: 60%;
  display: block;
  margin: 20px 20%;
  border-radius: 20px;
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
  gap: 50px;
  justify-content: space-around;
}

.divGaucheCard {
  display: flex;
}

.quantity-selector2 {
  display: flex;
  align-items: center;
  gap: 5px;
}

.quantity-selector2 {
  display: flex;
  justify-content: end;
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
  max-width: 60px;
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

@media (max-width: 1217px) {
  .quantity-selector {
    flex-direction: column;
    gap:15px ;
  }
  .divDroite {
    justify-content: center;
    display: flex;
  }
}
@media (max-width: 380px) {
  .d-flex {
    flex-direction: column;
  }
  .gap-10 {
    gap: 20px;
  }
  .divGaucheInfo {
    justify-content: center;
  }
}
</style>
