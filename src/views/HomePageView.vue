<template>
  <div class="body">
    <div class="imageAccueil">
      <div class="conteneurTexte">
        <H1 class="H1Style"> Bienvenue à le Ferme Florale Les 5 Saisons</H1>
        <H3> Nos fleurs 100% en agriculture biologique, 100% de saison, cultivées avec 100% d'amour!. </H3>
      </div>
    </div>
    <div class="sectionCard">
      <CardSectionVue
          title="Local"
          text="Nos fleurs sont cultivées par des producteurs locaux au plus près de chez vous, soit -90% d’émissions carbone."
          :imageUrl="imageUrl1"
      ></CardSectionVue>
      <CardSectionVue
          title="Locales"
          text="Des fleurs locales, 100% bio, 100% éthique et cultivées aux rythmes des saisons"
          :imageUrl="imageUrl2"
      ></CardSectionVue>
      <CardSectionVue
          title="De saison"
          text="Ici nous respectons la faune et la flore, de la terre au vase....il n'y a qu'un pas!"
          :imageUrl="imageUrl3"
      ></CardSectionVue>
    </div>

    <ContenuVue class="Contenue"></ContenuVue>
  </div>
</template>

<script>

import ContenuVue from "@/components/ContenuVue.vue";
import HeaderVue from "@/components/HeaderVue.vue";
import CardSectionVue from "@/components/CardSectionVue.vue";
import localisation from "@/assets/localisation.png"
import fullTime from "@/assets/tout_les_temps.png"
import planteVert from "@/assets/plante_vert.png"

export default {
  name: 'HomePage',
  data() {
    return {
      imageUrl1:localisation ,
      imageUrl2: fullTime,
      imageUrl3: planteVert
    }
  },
  components: {
    CardSectionVue,
    HeaderVue,
    ContenuVue,
  }
}
</script>

<style>

.H1Style {
  margin: 0;
  font-weight: bold;
}
.sectionCard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  align-items: center;
  height: 25vh;
}

.imageAccueil {
  background-image: url("../assets/nature-3333236_1920.jpg");
  background-size: cover;
  width: 100%;
  height: 60vh;
  background-repeat: no-repeat;
}

.conteneurTexte {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: white;
  padding-left: 5%;
  width: 30%;
}

.texteImage {
  color: white;
  font-size: xx-large;
}

.body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

@media (max-width: 600px) {
  .imageAccueil {
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
