<template>
  <main class="container">
    <div class="image-side">
      <img src="https://source.unsplash.com/600x400/?flowers" alt="Fleurs de la ferme">
    </div>
    <div class="text-side">
      <h1>Bienvenue à notre ferme florale</h1>
      <p>ezfezfezDécouvrez notre passion pour la floriculture et notre engagement envers une agriculture durable. Plongez dans l'univers de nos fleurs de saison, cultivées avec amour et respect de la nature.</p>
    </div>
  </main>
</template>


<script setup>

</script>




<style scoped>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}
.text-side {
  flex: 1;
  max-width: 600px;
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
    flex-direction: column;
    border:solid;
  }
}

</style>
