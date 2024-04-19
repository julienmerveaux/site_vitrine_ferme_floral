<template>
    <div>
      <div class="divBouton">
        <!-- Ajout des gestionnaires d'événements sur les boutons -->
        <button class="bouton" @click="choisirParticulier">Particulier / Entreprise</button>
        <button class="bouton" @click="choisirProfessionnel">Horticulteur/Fleuriste</button>
      </div>
      <!-- Affiche le formulaire en fonction de la sélection -->
      <SignUpProfessionnelVue v-if="typeInscription === 'professionnel'"></SignUpProfessionnelVue>
      <SignUpParticulierVue v-if="typeInscription === 'particulier'"></SignUpParticulierVue>

    </div>
</template>

<script setup>

import { ref } from 'vue';
import SignUpParticulierVue from "@/components/SignUpParticulierVue.vue";
import SignUpProfessionnelVue from "@/components/SignUpProfessionnelVue.vue";

// Crée une variable réactive pour suivre le type sélectionné
const typeInscription = ref('particulier');

// Fonctions pour mettre à jour le type d'inscription
const choisirProfessionnel = () => {
  typeInscription.value = 'professionnel';
};
const choisirParticulier = () => {
  typeInscription.value = 'particulier';
};
</script>


<style scoped>
.divBouton{
  display: flex;
  justify-content: center;
  gap: 10%;
  width: 100%;
  margin: 30px auto 70px auto;

}
.bouton {
  padding: 1rem;
  color: var(--couleur-button-texte);
  background-color: var(--couleur-button);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;
}

.bouton:hover, .bouton-stylé:focus {
  background-color: var(--couleur-button-texte);
  color: black;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.bouton:active {
  background-color: #004095;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  transform: translateY(1px);
}
</style>