<template>
  <div class="styleDivtitle">
    <h1>Bouquet du mois</h1>
  </div>
  <main class="container">
    <div class="image-side">
      <img v-if="bouquetDuMois2.image && bouquetDuMois2.image.length" :src="bouquetMois.image[0].url" alt="Fleurs de la ferme">
    </div>
    <div class="text-side">
      <h1>{{ bouquetMois.nom }}</h1>
      <h2>{{ bouquetMois.text }}</h2>
      <h3>{{bouquetMois.prix}} €</h3>
      <input type="number" ref="quantiteInput" v-model="bouquetMois.quantiteAchat" class="card__quantity-input">
      <div class="stylePaiement">
      </div>
      <button type=submit @click="addItemPanier">Ajouter au panier</button>
      <div v-if="showPopup" class="popupCardValidation">
        <p>Vous venez d'ajouter {{  bouquetMois.quantiteAchat  }} {{ bouquetMois.nom }}</p>
        <p>Quantité : {{ bouquetMois.quantiteAchat }}</p>
      </div>
      <p>{{bouquetMois.quantiteAchat}}</p>
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
      showPopup: false,
      quantiteAchat:0
    };
  },
  computed: {
    ...mapGetters("UsersInformation", ["getCurrentUser"]),
    bouquetDuMois2() {
      return this.$store.getters['BouquetInformation/getBouquetMois'];
    }
  },
  methods: {
    addItemPanier() {
      console.log(this.bouquetMois,2)
      if (this.bouquetMois.quantiteAchat > 0 && this.bouquetMois.quantiteAchat<=5) {
        this.showPopup = true;
        setTimeout(() => {
          this.showPopup = false;
        }, 3000);
        switch (this.getCurrentUser.type) {
          case 'particulier':
            this.$store.dispatch('PanierParticulier/addArticleToPanier', this.bouquetMois);
            break;
          case undefined:
            this.$router.push("/login");
          default:
            console.log(this.getCurrentUser.type);
        }
      } else {
        alert("Demande incorrecte");
      }
    },
  },
  created() {
  }

}
</script>

<style scoped>

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
