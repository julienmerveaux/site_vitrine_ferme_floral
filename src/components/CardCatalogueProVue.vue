<template>
  <div class="card-container">
    <div class="card">
      <div class="card-image"></div>
      <div class="card-content">
        <h2 class="card-title">{{ fleur.nom }}</h2>
        <p class="card-category">{{ fleur.couleur }}</p>
        <div class="card-details">
          <p class="card-price">{{ fleur.prix }} €</p>
          <p class="card-quantity">Nombre par botte: {{ fleur.botte }}</p>
          <p v-if="!isPanierProRoute">Quantité: {{ fleur.quantite }}</p>
          <p v-if="isPanierProRoute">Quantité: {{ fleur.quantiteAchat }}</p>
        </div>
        <div class="card-actions">
          <button v-if="!isPanierProRoute" @click="afficherPopup" class="btn">Voir plus</button>
          <button v-if="isPanierProRoute" @click="supprimerArticle" class="btn btn-danger">Supprimer</button>
        </div>
      </div>
    </div>
    <PopUpDescriptionVue v-if="popupVisible" @fermerPopup="fermerPopup" />
    <div v-if="showPopup" class="popup-notification">
      <p>Vous venez d'ajouter {{ fleur.nom }} </p>
      <p>Quantité: {{ fleur.quantiteAchat }} de {{fleur.botte}}</p>
    </div>
  </div>
</template>

<script>
import PopUpDescriptionVue from "@/components/PopUpDescriptionVue.vue";

export default {
  props: {
    fleur: Object,
  },
  components: {
    PopUpDescriptionVue,
  },
  data() {
    return {
      popupVisible: false,
      showPopup: false,
    };
  },
  methods: {
    afficherPopup() {
      this.$store.dispatch('PlantesInformation/fleurWithId', this.fleur.id);
      this.popupVisible = true;
    },
    fermerPopup() {
      this.popupVisible = false;
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 3000);
    },
    supprimerArticle() {
      if (this.isPanierProRoute()) {
        this.$store.dispatch('PanierPro/deleteArticleFromPanier', this.fleur.id);
      }
    },
  },
  computed: {
    isPanierProRoute() {
      return this.$route.name === 'PanierPro';
    },
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  max-width: 320px;
}

.card:hover {
  transform: translateY(-10px);
}

.card-image {
  background-image: url('https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
  background-size: cover;
  background-position: center;
  height: 200px;
}

.card-content {
  padding: 15px;
}

.card-title {
  font-size: 18px;
  margin-bottom: 5px;
}

.card-category, .card-price, .card-quantity {
  font-size: 14px;
  color: #666666;
  margin: 5px 0;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.btn {
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn:hover {
  opacity: 0.9;
}

.btn-danger {
  background-color: #d9534f;
  color: white;
}

.btn-danger:hover {
  background-color: #c9302c;
}

.popup-notification {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4CAF50;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
