<template>
  <div class="footer">
    <section aria-label="Subscribe to Newsletter">
      <div class="container">
        <article class="backgroundArticle">
          <div class="reseau">
            <img class="image" src="../assets/instagram.png">
            <img class="image" src="../assets/instagram.png">
            <img class="image" src="../assets/instagram.png">
            <img class="image" src="../assets/instagram.png">
          </div>
          <hgroup>
            <h2>Newsletter</h2>
            <h3>Subscribe to Our Newsletter</h3>
          </hgroup>
          <form class="grid">
            <input type="email" id="email" name="email" placeholder="Your Email" aria-label="Email Address" required />
            <button type="submit" onclick="event.preventDefault()">Subscribe</button>
          </form>
        </article>
      </div>
    </section>
    <footer class="container">
      <small><a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a></small>
    </footer>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">

  </div>

</template>

<script>
export default {
  name: "FooterVue"
}
</script>


<style scoped>

.backgroundArticle {
  background-color: white;
}
.footer {
  background: #f8f9fa; /* Couleur de fond légère pour le footer */

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

.image {
  height: 50px;
  margin-left: 10px;
}


</style>