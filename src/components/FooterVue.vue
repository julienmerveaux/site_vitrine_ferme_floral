<template>
  <div class="footer">
    <nav class="container-fluid">
      <ul>
        <li><img class ="logo" src="../assets/Les%205%20saisons_RGB_Black.jpg"></li>
      </ul>
      <ul>
        <li><a href="#about">About us</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#example">User Example</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#resources">Resources</a></li>
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
        <a href="#about">About us</a> •
        <a href="#features">Features</a> •
        <a href="#example">User Example</a> •
        <a href="#pricing">Pricing</a> •
        <a href="#resources">Resources</a>
      </div>
      <small>© 2022 Company name. All rights reserved</small>
      <div class="social-icons">
        <a href="#" aria-label="Facebook"><i class="icon-facebook"></i></a>
        <a href="#" aria-label="Twitter"><i class="icon-twitter"></i></a>
        <a href="#" aria-label="Instagram"><i class="icon-instagram"></i></a>
        <a href="#" aria-label="YouTube"><i class="icon-youtube"></i></a>
      </div>
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
  display: block;
  margin-top: 0.5rem;
}

</style>