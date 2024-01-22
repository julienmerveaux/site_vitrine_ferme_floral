<template>
  <div>
    <div class="general_espace_pro">
      <form>
        <h1>Envie de devenir pro ...</h1>
        <div class="separation"></div>
        <div class="corps-formulaire">
          <div class="gauche">

            <div class="groupe">
              <label>Sujet</label>
              <input type="text" autocomplete="off"/>
            </div>

            <div class="groupe">
              <label>Votre Prénom</label>
              <input type="text" autocomplete="off"/>
            </div>

            <div class="groupe">
              <label>Votre adresse e-mail</label>
              <input type="text" autocomplete="off"/>
            </div>

            <div class="groupe">
              <label>Votre téléphone</label>
              <input type="text" autocomplete="off"/>
            </div>

            <div class="groupe">
              <label>Nom de l'entreprise</label>
              <input type="text" autocomplete="off"/>
            </div>

          </div>

        </div>

        <div class="pied-formulaire" align="center">
          <button>Envoyer le message</button>
        </div>
      </form>
    </div>
  </div>

</template>


<script setup>

</script>


<style scoped>

.general_espace_pro {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #fef1df;
}

body {
  margin: 0px;
  padding: 0px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

form {
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

.gauche {
  width: 100%;
}

.droite {
  width: 45%;
}

form h1 {
  font-size: 20px;
}

form .separation {
  width: 100%;
  height: 1px;
  background-color: #747cdf;
}

form .corps-formulaire {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

form .corps-formulaire .groupe {
  position: relative;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

form .corps-formulaire .gauche .groupe input {
  margin-top: 5px;
  padding: 10px 5px 10px 30px;
  border: 1px solid #c9c9c9;
  outline-color: #747cdf;
  border-radius: 5px;
}

form .corps-formulaire .gauche .groupe i {
  position: absolute;
  left: 0;
  top: 25px;
  padding: 9px 8px;
  color: #747cdf;
}

form .corps-formulaire .droite {
  margin-left: 40px;

}

form .corps-formulaire .droite .groupe {
  height: 100%;
}

form .corps-formulaire .droite .groupe textarea {
  margin-top: 5px;
  padding: 10px;
  background-color: #f1f1f1;
  border: 2px solid #747cdf;
  outline: none;
  border-radius: 5px;
  resize: none;
  height: 72%;
}

form .pied-formulaire button {
  margin-top: 10px;
  background-color: #747cdf;
  color: white;
  font-size: 15px;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: transform 0.5s;
}

form .pied-formulaire button:hover {
  transform: scale(1.05);
}

@media screen and (max-width: 920px) {
  form .corps-formulaire {
    flex-direction: column;
  }

  form .gauche, form .droite {
    width: 100%;
    margin-left: 0;
  }

  form .corps-formulaire .droite {
    margin-top: 20px;
    margin-left: 0;
  }

  form .corps-formulaire .gauche .groupe,
  form .corps-formulaire .droite .groupe {
    width: 100%;
  }
}

</style>