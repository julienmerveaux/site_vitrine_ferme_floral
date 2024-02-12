<template>
  <div class="d-grid">
    <CardCatalogueParticulierVue v-for="(fleur, id) in getFleurs" :key="id" :fleur="fleur"></CardCatalogueParticulierVue>
  </div>
</template>

<script>
import CardCatalogueParticulierVue from "@/components/CardCatalogueParticulierVue.vue";
import { mapActions, mapGetters} from "vuex";

export default {
  components: { CardCatalogueParticulierVue },
  computed: {
    ...mapGetters("PlantesInformation",["getFleurs"])
  },
  methods: {
    ...mapActions("PlantesInformation", ["allFleurs"])
  },
  created() {
    this.allFleurs();
  }
};
</script>

<style scoped>
.d-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
}
</style>
