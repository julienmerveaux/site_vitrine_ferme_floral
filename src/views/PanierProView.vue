<script>
import {mapGetters} from "vuex";
import CardCatalogueParticulierVue from "@/components/CardCatalogueParticulierVue.vue";
import CardCatalogueProVue from "@/components/CardCatalogueProVue.vue";

export default {
  name: "PanierProView",
  components: {CardCatalogueProVue, CardCatalogueParticulierVue},

  computed:{
    ...mapGetters("PanierPro",["getPanierPro"])
  }
}
</script>

<template>
  <div class="divTitle">
    <H1 class="styleTitle">Votre panier</H1>
  </div>
  <div class="d-grid">
    <CardCatalogueProVue v-for="(fleur, id) in getPanierPro" :key="id" :fleur="fleur"></CardCatalogueProVue>
  </div>
</template>

<style scoped>
.d-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 0 auto;
  max-width: 1200px;
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