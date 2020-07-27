<template>
  <footer>
    <div class="md-col-12 lg-col-4 item">
      <h6 class="title">Contato</h6>
      <ul>
        <li>
          <i class="fas fa-phone-alt"></i>
          Telefone:
          <a
            href="https://wa.me/5521980066366"
            title="Nova conversa"
          >21 98006-6366</a>
        </li>
        <li>
          <i class="fas fa-envelope"></i>
          Email:
          <a
            href="mailto:rifaquesoma@gmail.com"
            target="_blank"
            title="Enviar email"
          >rifaquesoma@gmail.com</a>
        </li>
        <li>
          <i class="fab fa-instagram"></i>
          Instagram:
          <a
            href="https://www.instagram.com/rifaquesoma/"
            target="_blank"
            title="Instagram"
          >rifaquesoma</a>
        </li>
      </ul>
    </div>

    <div class="md-col-12 lg-col-4 item center">
      <h6 class="title">Links</h6>
      <ul style class="center">
        <li>
          <router-link class="link" to="/">Início</router-link>
        </li>
        <li>
          <router-link class="link" to="/sorteios">Nossas Rifas</router-link>
        </li>

        <li>
          <router-link class="link" to="/parcerias">Parcerias</router-link>
        </li>
        <li>
          <router-link class="link" to="/info">Informações</router-link>
        </li>
      </ul>
    </div>

    <div class="md-col-12 lg-col-4 item center">
      <img class="image" src="../assets/Original on Transparent.png" alt="footer-logo" />
    </div>
  </footer>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
$section-padding: 30px;
$side-padding: 30px;

@media screen and (max-width: 1000px) {
  footer {
    flex-direction: column;
    align-items: center;
    height: 100vh;
    .item {
      margin: 10px;
    }
  }
}
@media screen and (min-width: 1001px) {
  footer {
    flex-direction: row;
    justify-content: space-between;
  }
}
footer {
  display: flex;
  background-color: #111111;
  color: #cccccc;
  padding: $section-padding $side-padding;
  .item {
    flex: 1;
    .title {
      margin: 8px 0;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }
  ul {
    padding: 0;
  }
  a {
    color: #107896;
    &:hover {
      text-decoration: none;
    }
  }
  .image {
    max-height: 100px;
    object-fit: contain;
  }
}
</style>