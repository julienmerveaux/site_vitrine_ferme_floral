<script>
export default {
  name: "EvenementView"
}
</script>

<template>
  <div class="divIntroduction">
    <p class="colorTextIntro">Mon expérience en tant que fleuriste éco responsable liée à mon métier de productrice me permet de vous proposer des créations florales sur mesure, répondant à vos envies. Je réalise des bouquets et des compositions en utilisant de la mousse florale biodégradable et la technique du No Floral Foam. Les formes, les textures et les couleurs variés qui sont produits dans notre ferme mettent en avant un style bucolique et naturel.</p>
  </div>
  <div class="contain">
    <iframe class="airtable-embed" src="https://airtable.com/embed/appbmkbokhHog6r1K/pagPeWEJ5VJ2wim2z/form"
            width="50%" height="1200" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>

</template>

<style scoped>
.divIntroduction {
  padding: 10px 0;
}

.colorTextIntro {
  text-align: center;
  width: 90%;
  margin: 0 auto;
  font-size: 20px;
  font-family: Belleza,sans-serif;
  color: var(--couleur-texte);
  white-space: break-spaces;
}

.contain {
  margin: 10px auto;
  display: flex;
  justify-content: center;
}
@media (max-width: 485px) {
  .airtable-embed {
    width: 100%;
  }
}
</style>