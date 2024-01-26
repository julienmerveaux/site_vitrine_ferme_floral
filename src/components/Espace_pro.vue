<template>
  <main class="main">
    <div class="container">
      <div class="grid">
        <section>
          <hgroup>
            <h2>Envie de devenir pro</h2>
            <h3>Remplissez le formulaire ci-dessous</h3>
          </hgroup>
          <form>
            <div class="general_espace_pro">
              <div class="corps-formulaire">
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
              <div class="pied-formulaire" align="center">
                <button>Envoyer le message</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </main>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
</template>


<script setup>

</script>


<style scoped>

.main {
  width: 100%;
  height: 100%;
  background-color: #fef1df;
}
.corps-formulaire {
  border: solid;
  border-radius: 30px;
  box-shadow: 10px 10px;
  padding: 5%;
  margin-bottom: 5%;
}

.corps-formulaire .groupe {
  display: flex;
  flex-direction: column;
}

.corps-formulaire .groupe input {
  margin-top: 5px;
  padding: 10px 5px;
  border: 1px solid #c9c9c9;
  outline-color: #747cdf;
  border-radius: 5px;
}

.pied-formulaire button {
  background-color: #747cdf;
  color: white;
  font-size: 15px;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.5s;
}

.pied-formulaire button:hover {
  transform: scale(1.05);
}

@media screen and (max-width: 920px) {
  .corps-formulaire {
    flex-direction: column;
    box-shadow: 5px 5px;
  }
}

</style>