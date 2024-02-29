<template>
  <div class="d-grid">
    <CardCatalogueParticulierVue v-for="(bouquet, id) in getAllBouquetSechee" :key="id"
                                 :bouquet="bouquet"></CardCatalogueParticulierVue>
  </div>
</template>

<script>
import CardCatalogueParticulierVue from "@/components/CardCatalogueParticulierVue.vue";
import {mapActions, mapGetters} from "vuex";


export default {
  components: {CardCatalogueParticulierVue},
  props: ['type'],
  computed: {
    ...mapGetters("BouquetInformation", ["getAllBouquetSechee"])
  },
  methods: {},
  created() {
  }
};
</script>

<style scoped>
.d-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
@media only screen and (max-width: 768px) {
  .d-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
