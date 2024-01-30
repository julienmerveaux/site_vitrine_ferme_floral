<template>
  <div class="body">
    <div class="imageAccueil">
      <HeaderVuePourHomePage></HeaderVuePourHomePage>
      <div class="conteneurTexte">
      </div>
    </div>
    <ContenuVue></ContenuVue>
    <PiedDePageVue></PiedDePageVue>
  </div>
</template>

<script>

import ContenuVue from "@/components/ContenuVue.vue";
import HeaderVue from "@/components/HeaderVuePourHomePage.vue";
import FooterVue from "@/components/FooterVue.vue";
import ContactVue from "@/components/ContactVue.vue";
import PiedDePageVue from "@/components/PiedDePageVue.vue";
import HeaderVuePourHomePage from "@/components/HeaderVuePourHomePage.vue";

export default {
  name: 'HomePage',
  components: {
    HeaderVuePourHomePage,
    PiedDePageVue,
    ContactVue,
    ContenuVue,
    HeaderVue,
    FooterVue
  }
}
</script>

<style>

.imageAccueil {
  background-image: url("../assets/nature-3333236_1920.jpg");

  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
}

.conteneurTexte {
  display: flex;
  align-items: center;
  height: 96%;
  padding-left: 10%;
}

.texteImage {
  color: white;
  font-size: xx-large;
}

.body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 10px;
}
</style>
