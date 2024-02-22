<template>
  <div class="generalCard">

    <section class="cards">

      <article class="card card--1">
        <img :src="bouquet.image[0].url" alt="pas de photo">

        <p>{{ bouquet.image.url}} </p>
        <div class="card__info">
          <span class="card__category"> {{ bouquet.type }}</span>
          <h3 class="card__title">{{ bouquet.nom }}</h3>
          <h2 class="card__price">{{ bouquet.prix }}</h2>
          <h1 v-if="isPanierParticulierRoute" class="card__price">Quantité : {{ bouquet.quantiteAchat }}</h1>
        </div>
      </article>
      <button v-if="!isPanierParticulierRoute && getIsConnected " @click="addItemPanier" class="buttonStyle">Ajouter au panier</button>
      <div v-if="showPopup" class="popup">
        <p>Vous venez d'ajouter {{bouquet.nom}} </p>
        <p>quantite : {{ bouquet.quantiteAchat }}</p>
      </div>
    </section>

  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props:{
    bouquet:Object
  },
  data() {
    return {
      showPopup: false
    };
  },
  methods:{
    ...mapGetters("PanierParticulier",["getPanierparticulier"]),
    addItemPanier(){
      this.showPopup = true
      setTimeout(() => {
        this.showPopup = false;
      }, 3000);
      this.$store.dispatch('PanierParticulier/addArticleToPanier', this.bouquet);
    },

  },
  computed:{
    ...mapGetters(['getCurrentUser','getIsConnected']),

    isPanierParticulierRoute() {
      return this.$route.name === 'PanierParticulier'; // Remplacez 'panierParticulier' par le nom de votre route
    }
  }
}

</script>


<style scoped>

.generalCard {
  height: 100%;
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

.buttonStyle {
  width: 50%;
  background-color: transparent;
  border:none;
  padding: 10px;
}

.buttonStyle:hover {
  background-color: green;
}
.cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-justify-content: center;
  max-width: 820px;
}

.card--1 .card__img, .card--1 .card__img--hover {
}


.card__clock {
  width: 15px;
  vertical-align: middle;
  fill: #AD7D52;
}

.card__time {
  font-size: 12px;
  color: #AD7D52;
  vertical-align: middle;
  margin-left: 5px;
}

.card__clock-info {
  float: right;
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

.card__info-hover {
  position: absolute;
  padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
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
  width: 50%;
}

.card:hover {
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

.card__author {
  font-weight: 600;
  text-decoration: none;
  color: #AD7D52;
}

.card:hover .card__img--hover {
  height: 100%;
  opacity: 0.3;
}

.card:hover .card__info {
  background-color: transparent;
  position: relative;
}

.card:hover .card__info-hover {
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

</style>