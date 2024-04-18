<script>
import {mapGetters} from "vuex";

export default {
  props:{
    text:String
  },
  name: "Popup",
  data (){
    return {
      showPopUp:false
    }
  },

  methods:{
    closePopup() {
      this.$emit('close');
    },
  }
}
</script>

<template>
  <div class="popup">
    <p class="popup_styleText">{{ text }}</p>
    <div class="popup-buttons">
      <div class="divGauchePopUp">
        <router-link class="button-link" to="/inscription">S'inscrire</router-link>
        <router-link class="button-link" to="/login">Se connecter</router-link>
      </div>
      <button class="button close" @click="closePopup">Fermer</button>
    </div>
  </div>
</template>

<style scoped>
.popup_styleText {
  font-family: 'Belleza', sans-serif;
  font-size: xx-large;;
}
.divGauchePopUp {
  display: flex;
  gap: 10px;
}

.popup {
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  padding: 25px;
  max-width: 90%;
  box-sizing: border-box;
  transform: translateY(-50%);
  position: relative;
}

.popup-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.button-link {
  background-color: var(--couleur-button);
  color: var(--couleur-button-texte);
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.button-link:hover, .button.close:hover {
  background-color: var(--couleur-button-texte);
  color: black;
}

.button.close {
  background-color: var(--couleur-button);
  color: var(--couleur-button-texte);
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 600px) {
  .popup-buttons {
    flex-direction: column;
  }

  .button-link, .button.close {
    width: 100%;
    margin-bottom: 10px;
  }
}


</style>