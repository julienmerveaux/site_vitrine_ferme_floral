<template>
  <main>
    <div class="card">
      <img :src="imageUrl" alt="logo">
      <H1 class="titre"> {{ title }}</H1>
      <H3 class="text"> {{ text }}</H3>
    </div>
  </main>
</template>

<script setup>
const props = defineProps({
  title: String,
  text: String,
  imageUrl: String
})
</script>


<style scoped>
.titre {
  margin: 0;
}

.text {
  text-align: center;
  font-weight: normal;
  padding: 0 100px 0 100px;
  margin: 0;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>