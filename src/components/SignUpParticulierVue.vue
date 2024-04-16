<template>
  <fieldset class="formulaire-container">
    <legend class="legend">Particulier / entreprise</legend>
    <form id="monFormulaire" @submit.prevent="submitForm">
      <div class="champ-formulaire">
        <label for="name">Nom:</label>
        <input class="size" v-model="name" type="text" id="name" name="name" placeholder="Nom" required>
      </div>
      <div class="champ-formulaire">
        <label for="firstname">Prénom:</label>
        <input class="size" v-model="firstname" type="text" id="firstname" name="firstname" placeholder="Prénom" required>
      </div>
      <div class="champ-formulaire">
        <label for="email">Email:</label>
        <input class="size" v-model="email" type="email" id="email" name="email" placeholder="Email" required>
      </div>
      <div class="champ-formulaire">
        <label for="nom_entreprise">Nom entreprise:</label>
        <input class="size" v-model="nom_entreprise" type="text" id="nom_entreprise" name="nom_entreprise" placeholder="Nom entreprise">
      </div>
      <div class="champ-formulaire">
        <label for="numero_siret">Numéro de siret:</label>
        <input class="size" v-model="siret" type="number" id="numero_siret" name="numero_siret" placeholder="Numéro de siret">
      </div>
      <div class="champ-formulaire">
        <label for="password">Mot de passe:</label>
        <input class="size" v-model="password" type="password" id="password" name="password" placeholder="Mot de passe" required>
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  </fieldset>
</template>



<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      firstname: "",
      email: "", // Ajout du champ pour l'adresse e-mail de l'expéditeur
      password: "",
      siret:"",
      nom_entreprise:"",
      type: "particulier"
    };
  },

  methods: {
    ...mapActions("UsersInformation",['registerUserParticulier']),

    submitForm() {
      this.registerUserParticulier({
        name: this.name,
        firstname: this.firstname,
        email: this.email, // Utilisation de l'adresse e-mail de l'expéditeur fournie par l'utilisateur
        password: this.password,
        siret:this.siret,
        type: this.type,
        nom_entreprise:this.nom_entreprise
      });
    },
  }
}
</script>


<style scoped>
.formulaire-container {
  max-width: 90%;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ajoute une ombre pour un effet de profondeur */
  border-radius: 8px; /* Bordures arrondies pour le conteneur */
  background-color: #fff; /* Arrière-plan blanc pour le formulaire */
  border: none;
}

form {
  display: flex;
  flex-direction: column;
}

.legend {
  padding: 1rem;
  font-size: x-large;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ajoute une ombre pour un effet de profondeur */
  border-radius: 8px; /* Bordures arrondies pour le conteneur */
  background-color: var(--couleur-button);
  color:var(--couleur-button-texte) ;
}

.champ-formulaire {
  margin-bottom: 20px;
}

.size {
  width: 100%;
}

label {
  margin-bottom: 8px;
  color: #333; /* Couleur de texte plus douce */
  font-weight: bold; /* Rend le texte des labels un peu plus gras */
}

input[type="text"],
input[type="email"],
input[type="number"],
input[type="password"] {
  padding: 12px;
  margin-top: 5px;
  border: 2px solid #ccc; /* Bordure plus épaisse */
  border-radius: 4px; /* Bordures légèrement arrondies pour les champs */
  box-sizing: border-box;
  transition: border-color 0.3s; /* Transition pour le changement de couleur */
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #007bff; /* Change la couleur de la bordure lors du focus */
  outline: none; /* Supprime l'outline par défaut pour le focus */
}

button {
  padding: 12px 20px;
  font-size: 16px;
  color: var(--couleur-button-texte);
  background-color: var(--couleur-button);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s; /* Animation de fond sur le hover */
}

button:hover {
  background-color: var(--couleur-button-texte);
  color: black;
}

@media (min-width: 600px) {
  .formulaire-container {
    max-width: 50%; /* Ajuste la largeur max pour les grands écrans */
  }

  form {
    padding: 20px; /* Plus de padding à l'intérieur du formulaire pour les grands écrans */
  }
}

</style>