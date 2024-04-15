<script>
import {mapGetters} from "vuex";
import CardCatalogueParticulierVue from "@/components/CardCatalogueParticulierVue.vue";
import StripePayment from "@/components/StripePayment.vue";
import CardCatalogueProVue from "@/components/CardCatalogueProVue.vue";
import StripePayementPro from "@/components/StripePayementPro.vue";

export default {
  name: "PanierProView",
  components: {StripePayementPro, StripePayment, CardCatalogueProVue},

  computed:{
    ...mapGetters("PanierPro",["getPanierPro"])
  }
}
</script>

<template>
  <div class="divTitle">
    <h1 class="styleTitle">Votre panier</h1>
  </div>
  <div class="d-grid">
    <CardCatalogueProVue v-for="(fleurs, id) in getPanierPro" :key="id" :fleurs="fleurs"></CardCatalogueProVue>
  </div>
  <div class="stylePaiement">
    <StripePayementPro></StripePayementPro>
  </div>
</template>

<style scoped>
.d-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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