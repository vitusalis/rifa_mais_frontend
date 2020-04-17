<template>
  <footer>
    <div class="md-col-12 lg-col-4">
      <h6 class="title">Contato</h6>
      <ul>
        <li>
          <i class="fas fa-phone-alt"></i>
          Telefone:
          <a href="#!" title="Ligar">(21)91234-5678</a>
        </li>
        <li>
          <i class="fas fa-envelope"></i>
          Email:
          <a href="#!" title="Enviar email">contato@rifaquesoma.com.br</a>
        </li>
        <li>
          <i class="fas fa-map-marker-alt"></i>
          Endereço:
          <a
            target="_blank"
            title="Navegar com o Google Maps"
            href="https://goo.gl/maps/1HgY4bzzaYAeGSHF7"
          >Av Rio Branco 1500 - Sala 2</a>
        </li>
      </ul>
    </div>
    <div class="md-col-12 lg-col-4">
      <h6 class="title">Contato</h6>
      <ul>
        <li>
          <i class="fas fa-phone-alt"></i>
          Telefone:
          <a href="#!" title="Ligar">(21)91234-5678</a>
        </li>
        <li>
          <i class="fas fa-envelope"></i>
          Email:
          <a href="#!" title="Enviar email">contato@rifaquesoma.com.br</a>
        </li>
        <li>
          <i class="fas fa-map-marker-alt"></i>
          Endereço:
          <a
            target="_blank"
            title="Navegar com o Google Maps"
            href="https://goo.gl/maps/1HgY4bzzaYAeGSHF7"
          >Av Rio Branco 1500 - Sala 2</a>
        </li>
      </ul>
    </div>
    <div class="md-col-12 lg-col-4">
      <h6 class="title">Contato</h6>
      <ul>
        <li>
          <i class="fas fa-phone-alt"></i>
          Telefone:
          <a href="#!" title="Ligar">(21)91234-5678</a>
        </li>
        <li>
          <i class="fas fa-envelope"></i>
          Email:
          <a href="#!" title="Enviar email">contato@rifaquesoma.com.br</a>
        </li>
        <li>
          <i class="fas fa-map-marker-alt"></i>
          Endereço:
          <a
            target="_blank"
            title="Navegar com o Google Maps"
            href="https://goo.gl/maps/1HgY4bzzaYAeGSHF7"
          >Av Rio Branco 1500 - Sala 2</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
$section-padding: 50px;
$side-padding: 30px;

@media screen and (max-width: 1000px) {
  footer {
    flex-direction: column;
    align-items: center;
    & > * {
      margin: 20px auto;
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
  ul {
    padding: 0;
  }
  a {
    color: #107896;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>