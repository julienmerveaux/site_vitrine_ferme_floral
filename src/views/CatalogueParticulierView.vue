<template>
  <HeaderVue/>
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
  <FooterVue/>

</template>

<script setup>

import CardCatagueProVue from "@/components/CardCatalogueParticulierVue.vue";
import HeaderVue from "@/components/HeaderVue.vue";
import FooterVue from "@/components/FooterVue.vue";
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

</style>