<template>
  <div class="body">
    <div class="imageAccueil">
      <HeaderVue></HeaderVue>
      <div class="conteneurTexte">
        <div class="texteImage"> Les 5 saisons</div>
      </div>
    </div>
    <ContenuVue></ContenuVue>
    <PiedDePageVue></PiedDePageVue>
    <FooterVue class="footer"></FooterVue>
  </div>
</template>

<script>

import ContenuVue from "@/components/ContenuVue.vue";
import HeaderVue from "@/components/HeaderVue.vue";
import FooterVue from "@/components/FooterVue.vue";
import ContactVue from "@/components/ContactVue.vue";
import PiedDePageVue from "@/components/PiedDePageVue.vue";

export default {
  name: 'HomePage',
  components: {
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
  background-image: url("../assets/Ferme florale les 5 saisons 1.jpg");
  width: 100%;
  height: 100vh;
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
