<template>
  <HeaderVuePourAutrePage/>
  <Etage2ContenueVueImagePuisTexte
      title="Qui suis-je"
      text="Mes fleurs sont cultivées près de Lyon, de Saint-Etienne et de Clermont-Ferrand
dans le respect de la nature qui nous entoure. Je cultive des fleurs coupées, des
feuillages mais aussi des arbustes et arbres à fleurs. Je suis une amoureuse du
monde végétal et me lancer dans la production de fleurs est un rêve qui se
réalise ! Nous sommes labellisés Agriculture Biologique et Label LPO. Je crois
fermement aux auxiliaires de production, les oiseaux et les insectes sont nos
alliées ! Les fleurs poussent en pleine terre et en extérieur sous abri non chauffé
en respectant les saisons
Les fleurs ont toujours été pour moi une passion, j’ai quitté la profession de
fleuriste durant plusieurs années mais le monde des fleurs n’a jamais très loin...
Je reviens donc à mon métier passion mais avec une partie production. Je me suis
donc formé pendant plusieurs moi et j’ai été accompagné pour créer ma ferme
florale."
      :imageUrl="imageUrl"
  />
  <PiedDePageVue/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Etage2ContenueVueImagePuisTexte from "@/components/Etage2ContenueVueImagePuisTexte.vue";
import HeaderVue from "@/components/HeaderVuePourHomePage.vue";
import FooterVue from "@/components/FooterVue.vue";
import PiedDePageVue from "@/components/PiedDePageVue.vue";
import HeaderVuePourAutrePage from "@/components/HeaderVuePourAutrePage.vue";

// Use a ref to hold the image URL
const imageUrl = ref('');

onMounted(async () => {
  // Dynamically import the image and update the imageUrl ref
  const imageModule = await import('@/assets/visageAudrey.png');
  imageUrl.value = imageModule.default;
});
</script>
