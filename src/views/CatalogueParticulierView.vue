<template>
  <div class="generalCatalogue">

    <CardCatalogueParticulierVue/>
    <CardCatalogueParticulierVue/>
    <CardCatalogueParticulierVue/>
    <CardCatalogueParticulierVue/>
    <CardCatalogueParticulierVue/>
    <CardCatalogueParticulierVue/>
    <CardCatalogueParticulierVue/>
    <CardCatalogueParticulierVue/>
    <CardCatalogueParticulierVue/>
    <CardCatalogueParticulierVue/>
    <CardCatalogueParticulierVue/>
    <CardCatalogueParticulierVue/>

  </div>

</template>

<script setup>


import CardCatalogueParticulierVue from "@/components/CardCatalogueParticulierVue.vue";

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