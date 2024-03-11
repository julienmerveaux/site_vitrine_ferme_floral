<script>
import {mapGetters} from "vuex";
import CardCatalogueParticulierVue from "@/components/CardCatalogueParticulierVue.vue";
import StripePayment from "@/components/StripePayment.vue";

export default {
  name: "PanierParticulierView",
  components: {StripePayment, CardCatalogueParticulierVue},

  computed:{
    ...mapGetters("PanierParticulier",["getPanierparticulier"])
  }
}
</script>

<template>
  <div class="divTitle">
    <h1 class="styleTitle">Votre panier</h1>
  </div>
  <div class="d-grid">
    <CardCatalogueParticulierVue v-for="(bouquet, id) in getPanierparticulier" :key="id" :bouquet="bouquet"></CardCatalogueParticulierVue>
  </div>
  <div class="stylePaiement">
    <StripePayment></StripePayment>
  </div>
</template>

<style scoped>
.d-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.divTitle {
  display: flex;
  justify-content: center;
}

.styleTitle {
  font-size: 120px
}

@media only screen and (max-width: 768px) {
  .d-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>