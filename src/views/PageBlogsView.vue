<template>
  les blogs
</template>

<script setup>

import Etage2ContenueVueImagePuisTexte from "@/components/BouquetDuMois.vue";
import Etage2ContenueVueTextePuisImage from "@/components/Etage2ContenueVueTextePuisImage.vue";


import {onMounted, ref} from "vue";

// Use a ref to hold the image URL
const imageUrl = ref('');

onMounted(async () => {
  // Dynamically import the image and update the imageUrl ref
  const imageModule = await import('@/assets/visageAudrey.png');
  imageUrl.value = imageModule.default;
});
</script>


<style scoped>

</style>