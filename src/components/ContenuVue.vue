<template>
  <div class="contenu">
    <Etage1ContenuVue></Etage1ContenuVue>
    <BouquetDuMois :bouquetMois="getBouquetMois" @transitionEnd="triggerFadeLeft"/>
    <Etage2ContenueVueTextePuisImage
        title="À propos"
        text="Mes fleurs sont cultivées près de Lyon, de Saint-Etienne et de Clermont-Ferrand
dans le respect de la nature qui nous entoure. Je cultive des fleurs coupées, des
feuillages, comprenant aussi des arbustes et arbres à fleurs. Je suis une
amoureuse du monde végétal et me lancer dans la production de fleurs est un
rêve qui se réalise !
Nous sommes labellisés Agriculture Biologique et labellisé LPO (ligue protection
des oiseaux). Je crois fermement aux auxiliaires de production. Les oiseaux et les
insectes sont nos alliés ! Nos fleurs poussent en pleine terre, en extérieur ou sous
abri non chauffé en respectant les saisons.
Les fleurs ont toujours été pour moi une passion, j’ai quitté la profession de
fleuriste durant plusieurs années, mais le monde des fleurs n’est jamais très
loin... Je reviens donc à mon métier passionnant tout en produisant mes propres"
        :imageUrl="imageUrlAudrey"
        @transitionEnd="triggerFadeRight"
    ></Etage2ContenueVueTextePuisImage>
  </div>
</template>

<script>
import Etage1ContenuVue from "@/components/Etage1ContenuVue.vue";
import BouquetDuMois from "@/components/BouquetDuMois.vue";
import Etage2ContenueVueTextePuisImage from "@/components/Etage2ContenueVueTextePuisImage.vue";
import visageAudrey from '@/assets/visageAudrey.png';
import { mapGetters } from "vuex";

export default {
  name: "ContenuVue",
  components: {
    Etage1ContenuVue,
    BouquetDuMois,
    Etage2ContenueVueTextePuisImage
  },
  data() {
    return {
      imageUrlAudrey: visageAudrey,
    }
  },
  computed: {
    ...mapGetters("BouquetInformation", ["getBouquetMois"]),
  },
  methods: {
    triggerFadeLeft() {
      this.fadeLeft = true;
    },
    triggerFadeRight() {
      this.fadeRight = true;
    },
  }
}
</script>

<style scoped>
.contenu {
  display: grid;
  gap: 20px;
}
</style>
