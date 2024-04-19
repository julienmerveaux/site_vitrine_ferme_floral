<template>
  <div class="contenu">
    <Etage1ContenuVue></Etage1ContenuVue>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e3eeee" fill-opacity="1" d="M0,288L80,282.7C160,277,320,267,480,250.7C640,235,800,213,960,202.7C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <BouquetDuMois ref="bouquetDuMois" :bouquetMois="getBouquetMois"/>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e3eeee" fill-opacity="1" d="M0,64L80,90.7C160,117,320,171,480,197.3C640,224,800,224,960,240C1120,256,1280,288,1360,304L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>    <Etage2ContenueVueTextePuisImage
        ref="etage2Contenu"
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
loin... Je reviens donc à mon métier passionnant tout en produisant mes propres fleurs ! A la ferme florale Les 5 Saisons, les fleurs vont un seul voyage.... De la
terre au bouquet"
        :imageUrl="imageUrlAudrey"
    ></Etage2ContenueVueTextePuisImage>
  </div>
</template>

<script>
import Etage1ContenuVue from "@/components/Etage1ContenuVue.vue";
import BouquetDuMois from "@/components/BouquetDuMois.vue";
import Etage2ContenueVueTextePuisImage from "@/components/Etage2ContenueVueTextePuisImage.vue";
import visageAudrey from '@/assets/visageAudrey.png';
import {mapGetters} from "vuex";

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
  mounted() {
    this.$nextTick(() => {
      this.observeElement();
    });
  },
  methods: {
    observeElement() {
      this.createObserver(this.$refs.bouquetDuMois, "bouquetDuMois");
      this.createObserver(this.$refs.etage2Contenu, "etage2Contenu");
    },
    createObserver(ref, refName) {
      if (ref && ref.$el) {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              ref.startAnimation();
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0 });

        observer.observe(ref.$el);
      } else {
        console.error(`Element ${refName} to observe not found!`);
      }
    }
  }
}
</script>

<style scoped>
.contenu {
  display: grid;
}
</style>
