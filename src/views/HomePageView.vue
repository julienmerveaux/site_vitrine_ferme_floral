<template>
  <div class="body">
    <div class="imageAccueil">
      <div class="conteneurTexte">
        <H1 class="H1Style"> Hello word !</H1>
        <H3> Nos fleurs sont cultivées par des producteurs locaux au plus près de chez vous, soit -90% d’émissions carbone. </H3>
      </div>
    </div>
    <div class="sectionCard">
      <CardSectionVue
          title="Sobre"
          text="Nos fleurs sont cultivées par des producteurs locaux au plus près de chez vous, soit -90% d’émissions carbone."
          :imageUrl="imageUrl1"
      ></CardSectionVue>
      <CardSectionVue
          title="Locales"
          text="Nos fleurs soutiennent les horticulteurs et le commerce de proximité : elles contribuent au maintien des emplois de votre région."
          :imageUrl="imageUrl2"
      ></CardSectionVue>
      <CardSectionVue
          title="De saison"
          text="Nos fleurs sont cultivées en plein champ ou en serres non chauffées et non éclairées, dans le respect de leur saisonnalité."
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
import visageAudrey from "@/assets/visageAudrey.png";
import icon_monde from "@/assets/icon_monde.png"
import icons_marqueur from "@/assets/icons_marqueur.png"
import icons_soleil from "@/assets/icons_soleil.png"

export default {
  name: 'HomePage',
  data() {
    return {
      imageUrl1: icons_soleil,
      imageUrl2: icon_monde,
      imageUrl3: icons_marqueur
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
    background-image: url("../assets/test2t.webp")
  }
  .sectionCard {
    grid-template-columns: repeat(1,1fr);
    height: auto;

  }
}
</style>
