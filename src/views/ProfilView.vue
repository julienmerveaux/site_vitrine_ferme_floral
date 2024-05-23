<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ProfilView",
  data(){
    return {
      password:""
    }
  },
  computed:{
    ...mapGetters("UsersInformation",["getCurrentUser"])
  },
  methods:{
    async updatePassword() {
      try {
        // Validation de la longueur minimale du mot de passe
        if (this.password.length < 6) {
          alert("Le mot de passe doit contenir au moins 6 caractères.");
          return; // Arrêtez l'exécution de la fonction si la validation échoue
        }

        // Validation que le mot de passe est une chaîne de caractères
        if (typeof this.password !== "string") {
          alert("Le mot de passe doit être une chaîne de caractères.");
          return; // Arrêtez l'exécution de la fonction si la validation échoue
        }

        await this.$store.dispatch("UsersInformation/changePassword", this.password);
        alert("Mot de passe modifié avec succès !");
        // Vous pouvez ajouter une redirection vers une autre page ou une autre logique ici si nécessaire
      } catch (error) {
        console.error("Erreur lors de la mise à jour du mot de passe :", error);
        alert(
            "Une erreur s'est produite lors de la mise à jour du mot de passe. Veuillez réessayer."
        );
      }
    }  }
}
</script>

<template>
  <div class="profile-container">
    <div class="profile-sidebar">
      <img src="@/assets/profil.png" alt="Profile Image" class="profile-image">
    </div>
    <div class="profile-content">
      <h1>{{getCurrentUser.firstname}} {{getCurrentUser.name}}</h1>
      <p>Type : {{ getCurrentUser.type }}</p>
      <h2>Contact Info</h2>
      <p>Email: {{ getCurrentUser.email }}</p>
      <h2>Change Password</h2>
      <input v-model="password" type="password" placeholder="New Password">
      <button @click="updatePassword">Update Password</button>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f4f4f4;
  color: #333;
}

.profile-container {
  display: flex;
  width: 80%;
  max-width: 900px;
  margin: 20px auto;
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-sidebar {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #eee;
}

.profile-content {
  flex: 2;
  padding: 20px;
}

.profile-content h1, .profile-content p {
  margin: 5px 0;
}

input[type="password"] {
  width: calc(100% - 22px);
  padding: 10px;
  margin-top: 5px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #4cae4c;
}

@media screen and (max-width: 600px) {
  .profile-container {
    flex-direction: column;
    width: 90%;
  }

  .profile-image {
    width: 150px;
    height: 150px;
  }

  .profile-content {
    width: 100%;
    padding: 10px;
  }
}

</style>