<template>
  <div class="body">
    <div class="imageAccueil">
      <div class="conteneurTexte">
        <h1 class="H1Style"> Bienvenue à la Ferme Florale Les 5 Saisons</h1>
        <h3 class="H3Style"> Nos fleurs 100% en agriculture biologique, 100% de saison, cultivées avec 100% d'amour ! </h3>
      </div>
    </div>
    <div class="sectionCard">
      <CardSectionVue
          title="Locales"
          text="La ferme florale Les 5 Saisons est située dans un cadre bucolique dans les Monts du Lyonnais"
          :imageUrl="imageUrl1"
      ></CardSectionVue>
      <CardSectionVue
          title="De saison"
          text="Des fleurs locales, 100% bio, 100% éthique et cultivées aux rythmes des saisons"
          :imageUrl="imageUrl2"
      ></CardSectionVue>
      <CardSectionVue
          title="Nos valeurs"
          text="Ici nous respectons la faune et la flore, de la terre au vase....il n'y a qu'un pas!"
          :imageUrl="imageUrl3"
      ></CardSectionVue>
    </div>
    <ContenuVue class="Contenue"></ContenuVue>

  </div>
</template>

<script>
import CardSectionVue from "@/components/CardSectionVue.vue";
import ContenuVue from "@/components/ContenuVue.vue";
import localisation from "@/assets/localisation.png";
import fullTime from "@/assets/tout_les_temps.png";
import planteVert from "@/assets/plante_vert.png";

export default {
  name: 'HomePage',
  data() {
    return {
      imageUrl1: localisation,
      imageUrl2: fullTime,
      imageUrl3: planteVert
    }
  },
  components: {
    CardSectionVue,
    ContenuVue,
  }
}
</script>

<style>

.H3Style {
  font-size: x-large;
}
.H1Style {
  font-weight: bold;
  font-size: xxx-large;
  margin-top:100px;
}
.sectionCard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  align-items: center;
  height: 25vh;
}

.imageAccueil {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/nature-3333236_1920.jpg");
  background-size: cover;
  width: 100%;
  height: 60vh;
  background-repeat: no-repeat;
}

.conteneurTexte {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: white;
  padding-left: 5%;
  width: 100%;
  text-align: center;
}



.body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

@media (max-width: 600px) {
  .imageAccueil {
    //background-image: url("../assets/nature-3333236_1920.jpg");
    background-image: url("../assets/nature-3333236_1920.jpg");
    display: flex;
    justify-content: center;
  }
  .conteneurTexte {
    width: 100%;
    height: 100%;
  }
  .sectionCard {
    grid-template-columns: repeat(1,1fr);
    height: auto;

  }
}
</style>
