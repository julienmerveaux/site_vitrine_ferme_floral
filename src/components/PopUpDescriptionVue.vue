<template>
  <div>
    <div class="popup" :class="{ open: isOpen }">
      <div class="popup_content">
        <h1>test</h1>
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
.popup {
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup_content {
  background-color: white;
  max-width: 600px;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
}

.popup.open {
  display: flex;
}
</style>
