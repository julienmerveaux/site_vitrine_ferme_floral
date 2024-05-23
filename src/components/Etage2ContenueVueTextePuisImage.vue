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


<script>


export default {
  props: {
    title: String,
    text: String,
    imageUrl: String
  },
  data() {

  },
  methods: {
    startAnimation() {
      // Appliquez les animations nécessaires
      this.$el.classList.add('start-animation');
    }
  }
}

</script>


<style scoped>

@keyframes slideInFromRight {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.start-animation {
  animation: slideInFromRight 1s ease-out forwards;
}
p {
  justify-content: space-around;
}

.textStyle {
  color: var(--couleur-texte);
  line-height: 1.6;
  font-size: x-large;
  white-space: break-spaces;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  //background:linear-gradient(var(--couleur-button-texte),var(--couleur-principale));
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
    flex-direction: column-reverse;
    margin-bottom: 10px;
    padding: 0;;
  }

}

@media (max-width: 1000px) {
  .textStyle {
    font-size: large;
  }
}

</style>
