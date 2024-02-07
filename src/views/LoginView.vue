<script>
export default {
name: "LoginView"
}
</script>

<template>
  <main class="container">
    <section class="sectionStyle" aria-label="Formulaire de Connexion">
      <H1 class="h1Color">Se connecter</H1>
      <form class="grid">
        <input type="email" id="email" name="email" placeholder="Adresse Email" aria-label="Adresse Email" required>
        <input type="password" id="password" name="password" placeholder="Mot de Passe" aria-label="Mot de Passe" required>
        <button type="submit">Connexion</button>
      </form>
    </section>
  </main>
</template>

<style scoped>
/* Styles généraux pour la page */
body, html {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

/* Navigation */
nav.container-fluid {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 0;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 90%;
}

.sectionStyle {
  text-align: center;
}

.h1Color {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 2rem 0;
}
nav ul li a {
  color: #333333;
  text-decoration: none;
  padding: 0.5rem;
}

/* Styles spécifiques au formulaire */
form {
  background-color: #ffffff;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
  max-width: 400px;
  margin: 2rem auto;
}

input[type="email"], input[type="password"] {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Footer */
footer.container {
  text-align: center;
  padding: 2rem 0;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
  }
}

</style>