<template>
  <HeaderVuePourAutrePage/>
  <div class="generalCatalogue">

    <CardCatalogueProVue/>
    <CardCatalogueProVue/>
    <CardCatalogueProVue/>
    <CardCatalogueProVue/>
    <CardCatalogueProVue/>
    <CardCatalogueProVue/>
    <CardCatalogueProVue/>
    <CardCatalogueProVue/>



  </div>
  <PiedDePageVue/>

</template>

<script setup>

import HeaderVue from "@/components/HeaderVuePourHomePage.vue";
import FooterVue from "@/components/FooterVue.vue";
import CardCatalogueProVue from "@/components/CardCatalogueProVue.vue";
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