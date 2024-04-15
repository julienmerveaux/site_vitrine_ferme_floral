<template>
  <main class="container">
    <div class="text-side">
      <h1>{{ title }}</h1>
      <p class="textStyle">{{ text }}</p>
    </div>
    <div class="image-side">
      <img :src="imageUrl" alt="Fleurs de la ferme">
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

p {
  justify-content: space-around;
}

.textStyle {
  font-size: x-large;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--couleur-separeted-part);
  padding: 2rem;
}
.text-side {
  text-align: center;
  flex: 1;
  max-width: 900px;
}
.text-side h1 {
  color: #333;
  font-size: 2rem;
}
.text-side p {
  color: #666;
  line-height: 1.6;
}
.image-side {
  flex: 1;
  text-align: center;
  max-width: 600px;
}
.image-side img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction:column-reverse;
    margin-bottom: 10px;
    padding: 0;
  ;
  }

}

</style>
