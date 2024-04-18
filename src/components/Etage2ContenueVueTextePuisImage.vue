<template>
  <main :class="{ 'fade-right' : fadeRight }" ref="componentSide" class="container">
    <div class="text-side">
      <h1>{{ title }}</h1>
      <p class="textStyle">{{ text }}</p>
    </div>
    <div class="image-side">
      <img :src="imageUrl" alt="Fleurs de la ferme">
    </div>
  </main>
</template>


<script>


export default {
  props: {
    title: String,
    text: String,
    imageUrl: String
  },
  data() {
    return {
      fadeRight: false,
    }
  },
  methods: {
    handleScroll() {
      const imageElement = this.$refs.componentSide;
      const rect = imageElement.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Si l'image est visible dans la fenêtre
      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        this.fadeRight = true; // Déclenchez la transition
        window.removeEventListener('scroll', this.handleScroll); // Supprimez l'écouteur d'événements pour éviter de déclencher à nouveau
      }
    }
  },
  mounted() {
    // Ajoutez l'écouteur d'événements lors du montage du composant
    window.addEventListener('scroll', this.handleScroll);
  }
}

</script>


<style scoped>

.fade-right {
  transition: opacity 10s ease, transform 1s ease; /* Ajoutez une transition pour l'opacité et la transformation */
  transform: translateX(100%); /* Déplacez le composant vers la gauche */
}

p {
  justify-content: space-around;
}

.textStyle {
  font-size: x-large;
  white-space: break-spaces;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--couleur-separeted-part);
  padding: 2rem;
  right: 100%;
  position: relative;
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
    flex-direction: column-reverse;
    margin-bottom: 10px;
    padding: 0;;
    right: 100%;
  }

}

</style>
