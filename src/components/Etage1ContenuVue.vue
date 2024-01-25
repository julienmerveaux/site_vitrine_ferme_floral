<script>
export default {
  name: "Etage1ContenuVue"
}
</script>

<template>
  <main class="container">
    <div class="gallery">


      <!-- Image 1 -->
      <figure>
        <img src="https://source.unsplash.com/random/300x200?flower" alt="Fleurs fraîches">
        <figcaption>Bouquet</figcaption>
      </figure>


      <!-- Image 2 -->
      <figure>
        <img src="https://source.unsplash.com/random/300x201?flower" alt="Fleurs séchées">
        <figcaption>Fleurs séchées</figcaption>
      </figure>


      <!-- Image 3 -->
      <figure>
        <img src="https://source.unsplash.com/random/300x202?flower" alt="Compositions">
        <figcaption>Évènement</figcaption>
      </figure>


    </div>
  </main>
</template>

<style scoped>


.gallery {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.gallery figure {
  margin: 0;
  position: relative;
  overflow: hidden;
}

.gallery img {
  width: 100%;
  height: auto;
  transition: transform 0.5s ease;
}

.gallery figcaption {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem;
  font-size: 0.9rem;
}

.gallery figure:hover img {
  transform: scale(1.05);
}
</style>