<template>
  <main class="container">
    <div class="grid">
      <section class="image-container">
        <img src="../assets/flower-3700083_640.jpg" alt="Image Aléatoire" class="responsive-images">
        <div class="divBouton">
          <svg class="vague" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1"
                  d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,208C840,245,960,267,1080,277.3C1200,288,1320,288,1380,288L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
          <button class="image-button">
            <router-link class="textColor" to="/catalogue_fleurs_sechee">Fleurs séchées</router-link>
          </button>
        </div>
      </section>
      <section class="image-container">
        <img src="../assets/bouquet-2041844_640.jpg" alt="Image Aléatoire" class="responsive-images">
        <div class="divBouton">
          <svg class="vague" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1"
                  d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,208C840,245,960,267,1080,277.3C1200,288,1320,288,1380,288L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
          <button class="image-button">
            <router-link class="textColor" to="/catalogue_fleurs_fraiche">Bouquets</router-link>
          </button>
        </div>
      </section>
      <section class="image-container">
        <img src="../assets/mathildaperrot-suites-ile-barbe-evenementiel-web-7%20(2).jpg" alt="Image Aléatoire"
             class="responsive-images">
        <div class="divBouton">
          <svg class="vague" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1"
                  d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,208C840,245,960,267,1080,277.3C1200,288,1320,288,1380,288L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
          <button class="image-button">
            <router-link class="textColor" to="/">Évènement</router-link>
          </button>
        </div>
      </section>

      <!-- Répétez les sections pour les autres images -->
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 100%;
  padding: 0 15px;
}

.image-container {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  box-shadow: 0 5px 5px #c4c0c0;
}

.textColor {
  text-decoration: none;
  color: black;
  font-size: xx-large;
}
.image-button {
  position: relative;
  z-index: 102;
  background-color: transparent;
  color: black;
  border: none;
  padding: 30px 50px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: x-large;
}

.divBouton {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 10;
}

.vague {
  position: absolute;
  width: 100%;
  bottom: -1px;
  left: 0;
  fill: #ffffff;
}

.responsive-images {
  width: 100%;
  height: auto;
  display: block;
}

@media (min-width: 751px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .image-button {
    padding: 0;
    font-size: large;
  }

  .divBouton {
    padding: 5px 0;

  }
}

@media (max-width: 750px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }

  .image-button {
    padding: 10px 10px; /* Augmenter la taille du bouton pour les écrans plus petits */
  }
}

@media (min-width: 1075px) {
  .image-button {
    font-size: x-large;
    padding: 0 10px;
  }
}

@media (min-width: 1265px) {
  .image-button {
    font-size: x-large;
    padding: 3% 5%;
  }
}
</style>
<script setup>
</script>