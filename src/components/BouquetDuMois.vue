<template>
    <main class="container">
      <div class="image-side">
        <img v-if="bouquetMois.image && bouquetMois.image.length" :src="bouquetMois.image[0].url"
             alt="Fleurs de la ferme">
      </div>
      <div class="text-side">
        <h1>{{ bouquetMois.nom }}</h1>
        <p class="pStyle">{{ bouquetMois.text }}</p>
        <h3 class="h3Style">{{ bouquetMois.prix }} €</h3>
        <div class="payment-options">
          <router-link class="button" to="/catalogue_particulier">Voir boutique</router-link>
        </div>
      </div>
    </main>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: {
    bouquetMois: Object
  },
  name: 'BouquetDuMois',
  data() {
    return {
      showPopUp: false,
      showPopupValidation: false,
    };
  },
  computed: {
    ...mapGetters("UsersInformation", ["getIsConnected"])
  },
  methods: {
    startAnimation() {
      if (!this.$el.classList.contains('start-animation')) {
        this.$el.classList.add('start-animation');
      }
    }
  }
}
</script>

<style scoped>

@keyframes slideInFromLeft {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.start-animation {
  animation: slideInFromLeft 1s ease-out forwards;
}
.button {
  border: 1px solid;
  background-color: var(--couleur-button);
  padding: 5px;
  text-decoration: none;
  color: var(--couleur-button-texte);
  font-family: 'Belleza', sans-serif;
  font-weight: bold;
  font-size: x-large;
  border-radius: 10px
}

.pStyle {
  color: var(--couleur-texte);
  line-height: 1.6;
  font-size: x-large;
  white-space: break-spaces;
}

.text-side {
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;
  max-width: 900px;
  font-family: 'Arial', sans-serif; /* Nouveau style de police */
  font-weight: normal; /* Supprimer le style gras */
  gap: 20px;
  align-items: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  //background: linear-gradient(var(--couleur-button-texte),var(--couleur-principale));
}


.image-side {
  flex: 1;
  text-align: center;
  max-width: 600px;
  left: 100%;
}

.image-side img {
  max-width: 90%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


button {
  background-color: var(--couleur-button);
  color: var(--couleur-button-texte) !important;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: large;
}


button:hover {
  background-color: beige;
}

@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 0;
  }
}
@media (max-width: 1000px) {
  .pStyle {
    font-size: large;
  }
}
</style>
