<template>
  <Etage2ContenueVueImagePuisTexte
      title="À propos"
      text="Mes fleurs sont cultivées près de Lyon, de Saint-Etienne et de Clermont-Ferrand
dans le respect de la nature qui nous entoure. Je cultive des fleurs coupées, des
feuillages, comprenant aussi des arbustes et arbres à fleurs. Je suis une
amoureuse du monde végétal et me lancer dans la production de fleurs est un
rêve qui se réalise !
Nous sommes labellisés Agriculture Biologique et labellisé LPO (ligue protection
des oiseaux). Je crois fermement aux auxiliaires de production. Les oiseaux et les
insectes sont nos alliés ! Nos fleurs poussent en pleine terre, en extérieur ou sous
abri non chauffé en respectant les saisons.
Les fleurs ont toujours été pour moi une passion, j’ai quitté la profession de
fleuriste durant plusieurs années, mais le monde des fleurs n’est jamais très
loin... Je reviens donc à mon métier passionnant tout en produisant mes propres."
      :imageUrl="imageUrl"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Etage2ContenueVueImagePuisTexte from "@/components/Etage2ContenueVueImagePuisTexte.vue";

// Use a ref to hold the image URL
const imageUrl = ref('');

onMounted(async () => {
  // Dynamically import the image and update the imageUrl ref
  const imageModule = await import('@/assets/visageAudrey.png');
  imageUrl.value = imageModule.default;
});
</script>
