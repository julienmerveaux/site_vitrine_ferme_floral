<template>
  <main :class="{ 'fade-left': fadeLeft }" ref="imageSide" class="container">
    <div class="image-side">
      <img v-if="bouquetMois.image && bouquetMois.image.length" :src="bouquetMois.image[0].url" alt="Fleurs de la ferme">
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
import { mapGetters } from "vuex";

export default {
  props: {
    bouquetMois: Object
  },
  name: 'BouquetDuMois',
  data() {
    return {
      showPopUp:false,
      showPopupValidation: false,
      fadeLeft: false,
    };
  },
  computed: {
    ...mapGetters("UsersInformation", ["getIsConnected"])
  },
  methods: {
    handleScroll() {
      const imageElement = this.$refs.imageSide;
      const rect = imageElement.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      console.log(windowHeight)
      console.log(rect.bottom)
      console.log(rect.top)
      // Si l'image est visible dans la fenêtre
      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        console.log("gfzeg")
        this.fadeLeft = true; // Déclenchez la transition
        console.log( this.fadeLeft)
        window.removeEventListener('scroll', this.handleScroll); // Supprimez l'écouteur d'événements pour éviter de déclencher à nouveau
      }
    },
    addItemPanier() {
      if (!this.getIsConnected) {
        console.log(true)
        this.showPopUp = true;
        return;
      }

      const quantite = this.bouquetMois.quantiteAchat;
      if (quantite > 0 && quantite <= 5) {
        // Ajoutez l'article au panier
        this.showPopupValidation = true;
        setTimeout(() => this.showPopupValidation = false, 3000);
      } else {
        alert('Au-delà de 5 bouquets, vous pouvez me contacter au 07 83 93 45 86 ou par email à audrey@les-5-saisons.fr');
      }
    },
    closePopup() {
      this.showPopUp = false;
    }
  },
  mounted() {
    // Ajoutez l'écouteur d'événements lors du montage du composant
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.fade-left {
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform: translateX(-100%); /* Déplacez le composant vers la gauche */
}
.button{
  border: 1px solid;
  background-color: var(--couleur-button);
  padding: 5px;
  text-decoration: none;
  color: var(--couleur-button-texte);
  font-family: 'Belleza', sans-serif;
  font-weight: bold;
  font-size: x-large;
  border-radius:10px
}
.pStyle {
  color: var(--couleur-texte);
  line-height:1.6;
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
  background-color: var(--couleur-separeted-part);
  left: 100%;
  position: relative;
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
    //left: 0;
    position: relative;
  }
}
</style>
