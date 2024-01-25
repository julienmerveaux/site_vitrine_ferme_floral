
<template>
  <div class="general">
    <img class="image" src="../assets/Ferme%20florale%20les%205%20saisons%201.jpg">
    <fieldset class="texte">
      <legend class="legend">Notre histoire</legend>
      <H1>dezdfzefdzefezf</H1>
      <span>salut</span>
      <h3>43</h3>
    </fieldset>
  </div>
</template>

<script setup>

</script>



<style scoped>
.general {
  display: flex;
  width: 100%;
  height: 100%;
}

.legend {
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  background-color: white;
  height: 50px;
  width: 200px;
  font-size: xx-large;
}
.image {
  position: relative;
  aspect-ratio: 1;
  height: 80%;
  left: 15%;
  top:15%
}
.texte {
  border:solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  margin-left: 10px;
  background-color: white;
}
</style>