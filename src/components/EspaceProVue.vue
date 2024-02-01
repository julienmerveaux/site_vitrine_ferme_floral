<template>
  <div>
    <div class="general_espace_pro">
      <main class="container">
        <div class="contact-header">
          <h1>Espace professionnel</h1>
          <p>Nous sommes là pour répondre à toutes vos questions. Remplissez le formulaire ci-dessous et nous vous
            répondrons dans les plus brefs délais.</p>
        </div>

        <div class="contact-form">
          <form action="#" method="post">

            <div class="form-group">
              <label for="nom">Nom</label>
              <input type="text" id="nom" name="nom" required>
            </div>

            <div class="form-group">
              <label for="prenom">Prénom</label>
              <input type="text" id="prenom" name="prenom" required>
            </div>

            <div class="form-group">
              <label for="email">Votre adresse e-mail</label>
              <input type="email" id="email" name="email" required>
            </div>

            <div class="form-group">
              <label for="telephone">Votre téléphone</label>
              <input type="tel" id="telephone" name="telephone" required>
            </div>

            <div class="form-group">
              <label for="name_entreprises">Nom de l'entreprise</label>
              <input type="text" id="name_entreprises" name="name_entreprises" required>
            </div>

            <div class="form-group">
              <label for="numero_siret">Numéro de siret</label>
              <input type="number" id="numero_siret" name="numero_siret" required>
            </div>

            <div class="form-group">
              <label for="sujet">Sujet</label>
              <input type="text" id="sujet" name="sujet" required>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>

            <div class="form-group">
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  </div>

</template>


<script setup>

</script>


<style scoped>
body {
  font-family: 'Arial', sans-serif;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-header {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-header h1 {
  margin-bottom: 0.5rem;
}

.contact-header p {
  color: #666;
  margin-bottom: 2rem;
}

.contact-form {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box; /* Ajouté */
}

.form-group textarea {
  height: 150px;
}

.form-group button {
  background: #005f73;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
}

.form-group button:hover {
  background: #0a9396;
}
</style>