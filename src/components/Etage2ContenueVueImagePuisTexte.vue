
<template>
    <div class="general">

      <div class="image">
        <img class="petiteDivImage" src="../assets/Ferme%20florale%20les%205%20saisons%201.jpg" alt="logo de voir plus">
        <button class="button_voir_plus">Voir plus</button>
      </div>

      <div class="text">
        <div class="petiteDivTexte">
          Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam et tabernaculum offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus. Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam et tabernaculum offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus. Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam et tabernaculum offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus. Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam et tabernaculum offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus. Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam et tabernaculum offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus.
        </div>
      </div>

    </div>
</template>

<script setup>

</script>



<style scoped>

.button_voir_plus {
  position: absolute;
  bottom: 75%; /* Ajusté pour le positionnement en bas */
  right: 75%; /* Ajusté pour le positionnement à droite */
  margin: 0; /* Retiré la marge pour positionner exactement en bas à droite */
  height: 15%;
  width: 20%;
  font-size: large;
  background-color: #090909;
  opacity: 0.4;
  border:none;
  color: white;
}

.button_voir_plus:hover {
  opacity: 1;
}

.general {
  display: flex;
  height: 100vh;
  width: 100%;
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.image {
  position: relative; /* Ajouté pour le positionnement relatif */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.petiteDivImage > .button_voir_plus {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 20px; /* Ajoutez une marge pour l'espacement */
}

.petiteDivTexte {
  border: solid coral 10px;
  border-radius: 10px;
  padding: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 20%;
}

.petiteDivImage {
  width: 80%;
  height: 70%;
  margin: 15%; /* Ajusté pour centrer l'image */
  position: relative; /* Ajouté pour le positionnement relatif */
}
</style>