<template>
  <div class="contenu">
    <Etage1ContenuVue ></Etage1ContenuVue>
    <Etage2ContenueVueImagePuisTexte></Etage2ContenueVueImagePuisTexte>
    <Etage2ContenueVueTextePuisImage></Etage2ContenueVueTextePuisImage>
  </div>
</template>

<script>
import Etage1ContenuVue from "@/components/Etage1ContenuVue.vue";
import Etage2ContenueVueTextePuisImage from "@/components/Etage2ContenueVueTextePuisImage.vue";
import Etage2ContenueVueImagePuisTexte from "@/components/Etage2ContenueVueImagePuisTexte.vue";

export default {
  name: "ContenuVue",
  components: {Etage2ContenueVueImagePuisTexte, Etage2ContenueVueTextePuisImage, Etage1ContenuVue}
}
</script>


<style scoped>

.test {
  height:50vh;
  width: 100%;
}
.contenu {
  display: grid;
  gap: 20px;
  text-align: center;
}
</style>