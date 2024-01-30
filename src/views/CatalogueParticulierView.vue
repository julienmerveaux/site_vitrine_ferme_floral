<template>
  <HeaderVuePourAutrePage/>
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
<PiedDePageVue></PiedDePageVue>

</template>

<script setup>

import CardCatagueProVue from "@/components/CardCatalogueParticulierVue.vue";
import HeaderVue from "@/components/HeaderVuePourHomePage.vue";
import FooterVue from "@/components/FooterVue.vue";
import CardCatalogueParticulierVue from "@/components/CardCatalogueParticulierVue.vue";
import PiedDePageVue from "@/components/PiedDePageVue.vue";
import HeaderVuePourAutrePage from "@/components/HeaderVuePourAutrePage.vue";
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