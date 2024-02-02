<template>
  <div class="contenu">
    <Etage1ContenuVue></Etage1ContenuVue>
    <Etage2ContenueVueImagePuisTexte
        title="Bouquet du mois"
        text="La tulipe est une magnifique fleur de saison qui annonce le retour du printemps. Elle a de nombreuses significations selon sa couleur et les circonstances dans lesquelles vous l’offrez. Au même titre que la rose, la tulipe est souvent considérée comme un symbole d’amour.
En bouquet, elles peuvent être offertes pour exprimer une large palette d’émotions comme la passion ou l’admiration.
Les tulipes rouges représentent souvent le véritable amour tandis que les tulipes jaunes représentent des pensées joyeuses.
Entrez avec nous dans ce nouveau printemps et profitez de nos tulipes exceptionnelles!"
        :imageUrl="imageUrlBouquetDuMois"
    />
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
    ></Etage2ContenueVueTextePuisImage>
  </div>
</template>

<script>
import Etage1ContenuVue from "@/components/Etage1ContenuVue.vue";
import Etage2ContenueVueImagePuisTexte from "@/components/Etage2ContenueVueImagePuisTexte.vue";
import visageAudrey from '@/assets/visageAudrey.png';
import Bouquet_du_mois from '@/assets/Bouquet_du_mois.png';
import Etage2ContenueVueTextePuisImage from "@/components/Etage2ContenueVueTextePuisImage.vue"; // Importez l'image avec ESM

export default {
  name: "ContenuVue",
  components: {
    Etage2ContenueVueTextePuisImage,
    Etage1ContenuVue,
    Etage2ContenueVueImagePuisTexte
  },
  data() {
    return {
      imageUrlAudrey: visageAudrey, // Utilisez l'importation comme référence d'image
      imageUrlBouquetDuMois: Bouquet_du_mois
    }
  }
}
</script>

<style scoped>
.contenu {
  gap: 20px;
}
</style>
