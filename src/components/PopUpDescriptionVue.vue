<template>
  <div>
    <div class="popup" :class="{ open: isOpen }">
      <div class="popup_content">
        <div class="popup_general">
          <div class="popup_gauche">
            <img class="photoGauche" src="../assets/Ferme%20florale%20les%205%20saisons%201.jpg">
          </div>
          <div class="popup_droite">
            <h1 class="card__title">{{ getCurrentFleur.nom }}</h1>
            <h2 class="card__category">{{ getCurrentFleur.couleur }}</h2>
            <h3 class="card__price">{{ getCurrentFleur.prix }}</h3>
            <h3 class="card__price">{{ getCurrentFleur.botte }}</h3>
          </div>
        </div>
        <div class="button_popup">
          <button @click="addPanierPro" class="popup-buy">Ajouter au panier</button>
          <button class="popup-exit" @click="closePopup">Fermer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    closePopup() {
      this.isOpen = false;
      this.$emit('fermerPopup'); // Assurez-vous que le composant parent écoute cet événement
    },
    addPanierPro() {
      const currentFleur = this.getCurrentFleur;
      if (currentFleur) {
        this.$store.dispatch('PanierPro/addArticleToPanier', currentFleur);
      }
      this.closePopup();
    }
  },
  computed: {
    ...mapGetters("PlantesInformation", ["getCurrentFleur"])
  }
};
</script>

<style scoped>
.photoGauche {
  width: 100%;
  aspect-ratio: 1;
}

.button_popup {
  display: flex;
  justify-content: end;
  align-items: end;
}

.card__category {
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
}

.card__title {
  margin-top: 5px;
  margin-bottom: 10px;
  font-family: 'Roboto Slab', serif;
}

.card__price {
  font-size: 12px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
}


.popup_gauche {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 80%;
}

.popup_droite {
  text-align: center;
  width: 50%;
  height: 80%;
}

.popup_general {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
}

.popup {
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: #090909;
}

.popup_content {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 50%;
  height: auto;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
  gap: 10px;
}

.popup.open {
  color: black;
  display: flex;
}

.popup-exit {
  display: flex;
  justify-content: end;
  color: black;
  background-color: transparent;
  border: none;
  bottom: 100%;
  position: relative;
}

@media only screen and (max-width: 768px) {
  .popup {
    justify-content: start;
  }

  .popup_general {
    flex-direction: column;
  }

  .popup_droite {
    width: 100%;
    height: 100%;
  }

  .popup_gauche {
    width: 100%;
  }
}

@media only screen and (max-width: 466px) {
  .popup_content {
    width: 100%;
  }
}
</style>
