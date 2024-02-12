<template>
  <div class="generalCatalogue">

    <CardCatalogueProVue v-for="(fleur, id) in getFleurs" :key="id" :fleur="fleur"></CardCatalogueProVue>

  </div>

</template>

<script>


import CardCatalogueProVue from "@/components/CardCatalogueProVue.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {CardCatalogueProVue},
  computed: {
    ...mapGetters("PlantesInformation",["getFleurs"])
  },
  methods: {
    ...mapActions("PlantesInformation", ["allFleurs"])
  },
  created() {
    this.allFleurs();
  }
}
</script>


<style scoped>

.generalCatalogue {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 0 auto;
  max-width: 1200px;
}

@media only screen and (max-width: 768px) {
  .generalCatalogue {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>