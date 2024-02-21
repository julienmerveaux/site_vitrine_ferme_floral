<template>
  <div class="generalCard">
    <section class="cards">
      <article class="card card--1">
        <div class="card__img"></div>
        <a href="#" class="card_link">
          <div class="card__img--hover"></div>
        </a>
        <div class="card__info">
          <h3 class="card__title">{{ fleur.nom }}</h3>
          <span class="card__category"> {{ fleur.couleur }}</span>
          <span class="card__price">{{ fleur.prix }}</span>
          <h3 v-if="!isPanierProRoute"> Quantité : {{ fleur.quantite }}</h3>
          <h3 v-if="isPanierProRoute"> Quantité : {{ fleur.quantiteAchat }}</h3>
        </div>
        <div class="info">
          <button class="buttonAchat" @click="afficherPopup">Voir plus</button>
          <button v-if="isPanierProRoute" class="buttonAchat" @click="supprimerArticle">Supprimer</button>
        </div>
        <PopUpDescriptionVue v-if="popupVisible" @fermerPopup="fermerPopup"/>
      </article>
      <div v-if="showPopup" class="popup">
        <p>Vous venez d'ajouter {{ fleur.nom }} </p>
        <p>quantite : {{ fleur.quantiteAchat }} </p>
      </div>
    </section>
  </div>
</template>

<script>
import PopUpDescriptionVue from "@/components/PopUpDescriptionVue.vue";

export default {
  props: {
    fleur: Object
  },

  components: {
    PopUpDescriptionVue
  },
  data() {
    return {
      popupVisible: false,
      showPopup: false
    };
  },
  methods: {
    afficherPopup() {
      this.$store.dispatch('PlantesInformation/fleurWithId', this.fleur.id);
      this.popupVisible = true;
    },
    fermerPopup() {
      this.popupVisible = false;
      this.showPopup = true
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
  computed:{
    isPanierProRoute() {
      console.log(this.$route.name);
      return this.$route.name === 'PanierPro';
    },
  }
};
</script>

<style scoped>

.info {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.buttonAchat {
  background-color: transparent;
  color: black;
  border-radius: 5px;
  padding: 20px;
}

.generalCard {
  height: 100%;
}

.buttonAchat:hover {
  border-color: red;
}

* {
  box-sizing: border-box;
}

body, html {
  font-family: 'Roboto Slab', serif;
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 0;
}

body {
  background-color: #D2DBDD;
  display: flex;
  display: -webkit-flex;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  justify-content: center;
  align-items: center;
}

.cards {
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 820px;
}

.card--1 .card__img, .card--1 .card__img--hover {
  background-image: url('https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
}

.card__img {
  visibility: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 235px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

}

.card__img--hover {
  transition: 0.2s all ease-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: absolute;
  height: 235px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  top: 0;

}

.card {
  margin-right: 25px;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
}

.buttonAchat:hover {
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
  transform: scale(1.10, 1.10);
}

.card__info {
  z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px 24px 24px 24px;
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


.card:hover .card__img--hover {
  height: 100%;
  opacity: 0.3;
}

.card:hover .card__info {
  background-color: transparent;
  position: relative;
}

.card:hover {
  opacity: 1;
}

.popup {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: green;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 9999; /* Assurez-vous que la popup est au-dessus de tous les autres éléments */
}


@media (max-width: 600px) {
  .card {
    margin-right: 0;
  }
}

@media (max-width: 425px) {

}


</style>