<template>
  <div>
    <div class="popup" :class="{ open: isOpen }">
      <div class="popup_content">
        <div class="popup_general">
          <div class="popup_gauche">
            <img class="photoGauche" src=../assets/Ferme%20florale%20les%205%20saisons%201.jpg>
          </div>
          <div class="popup_droite">
            <H1>PHLOX PANICULATA PAX</H1>
            <H2>Plante vivace</H2>
            <H3>3,75€</H3>
            <h4>dazfdefzefceafeaf fezfze f fze fzef zef zefze fef  f zf zf fz fzfzfzfzefzefze f ze fzfzf zfz  fz fz</h4>
          </div>
        </div>
        <button class="popup-exit" @click="closePopup">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['fermerPopup']);
const isOpen = ref(false);

const closePopup = () => {
  isOpen.value = false;
  emit('fermerPopup');
}
</script>

<style scoped>

.photoGauche {
  width: 100%;
  aspect-ratio: 1;
}

.popup_gauche {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 80%;
}
.popup_droite {
  text-align: center;
  width: 50%;
  height: 80%;
}
.popup_general {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
}

.popup {
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:10;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: #090909;
}

.popup_content {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 50%;
  height: auto;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
  gap: 10px;
}

.popup.open {
  display: flex;
}

.popup-exit {
  background-color: transparent;
  border: none;
  bottom: 100%;
  left: 48%;
  position: relative;

}
</style>
