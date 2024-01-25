<template>
  <div class="footer">
    <nav class="container-fluid">
      <ul>
        <li><img class="logo" src="../assets/Les%205%20saisons_RGB_Black.jpg"></li>
      </ul>
      <ul>
        <li><a href="https://www.instagram.com/ferme_florale_les_5_saisons/">
          <img class="image_reseau" src="../assets/instagram.png"></a>
        </li>

        <li><a href="https://www.instagram.com/ferme_florale_les_5_saisons/">
          <img class="image_reseau" src="../assets/instagram.png"></a>
        </li>

        <li><a href="https://www.instagram.com/ferme_florale_les_5_saisons/">
          <img class="image_reseau" src="../assets/instagram.png"></a>
        </li>

        <li><a href="https://www.instagram.com/ferme_florale_les_5_saisons/">
          <img class="image_reseau" src="../assets/instagram.png"></a>
        </li>

        <li><a href="https://www.instagram.com/ferme_florale_les_5_saisons/">
          <img class="image_reseau" src="../assets/instagram.png"></a>
        </li>
      </ul>
    </nav>

    <main class="container">
      <section aria-label="Subscribe example">
        <div class="container">
          <article>
            <hgroup>
              <h2>Subscribe Newsletters</h2>
            </hgroup>
            <form class="grid">
              <input type="email" id="email" name="email" placeholder="Enter your email" aria-label="Email" required>
              <button type="submit" onclick="event.preventDefault()">SUBSCRIBE NOW</button>
            </form>
          </article>
        </div>
      </section>
    </main>

    <footer class="container">
      <div class="footer-links">
        <li>
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link to="/catalogue_particulier">Catalogue particulier</router-link>
        </li>
        <li>
          <router-link to="/catalogue_pro">Catalogue pro</router-link>
        </li>
        <li>
          <!-- Utilisez le router-link ici directement -->
          <router-link to="/espace_pro">Espace professionnel</router-link>
        </li>
        <li>
          <!-- Utilisez le router-link ici directement -->
          <router-link to="/notre_histoire">Notre histoire</router-link>
        </li>
        <li>
          <!-- Utilisez le router-link ici directement -->
          <router-link to="/bouquets">Bouquets</router-link>
        </li>
        <li>
          <!-- Utilisez le router-link ici directement -->
          <router-link to="/contact">Contact nous</router-link>
        </li>
      </div>
      <small>© 2022 Company name. All rights reserved</small>
      <div>
        <a href="#terms">Terms Of Use</a> •
        <a href="#privacy">Privacy Policy</a>
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  name: "FooterVue"
}
</script>


<style scoped>

.logo {
  width: 10%;
}

.image_reseau {
  width: 50px;
}

nav.container-fluid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  margin: 0;
}

nav ul li a {
  text-decoration: none;
  color: #333;
}

main.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

section[aria-label="Subscribe example"] {
  text-align: center;
}

form.grid {
  display: grid;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

input[type=email] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

button[type=submit] {
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

footer.container {
  background-color: #f5f5f5;
  text-align: center;
  padding: 1rem 0;
}

.footer-links a {
  color: #333;
  text-decoration: none;
  margin: 0 1rem;
}

.social-icons {
  margin-top: 1rem;
  font-size: 1.5rem;
}

.social-icons a {
  margin: 0 0.5rem;
  color: #333;
}

.footer-links, .social-icons, small {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
}

li {
  list-style-type: none;
}

</style>