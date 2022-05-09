<template>
  <div class="about">
    <h1>Quem somos nós</h1>
    <!-- <h5 class="text-secondary">bla bla bla bla bla</h5> -->

    <div class="main">
      <div class="panel image">
        <img
          src="../assets/Original on Transparent.png"
          alt="Quem somos - imagem"
          title="Quem somos"
        />
      </div>
      <div class="panel">
        <p>
          Rifa Mais, uma empresa formada de um simples pensamento :
          <span
            class="highlight"
          >“ COMO PODEMOS REALIZAR SONHOS E AO MESMO TEMPO AJUDAR PESSOAS? ”</span>
          Somos uma plataforma criada para
          você concorrer a prêmios de alto valor financeiro, e o melhor, ao mesmo tempo ajudar a mudar a vida de famílias em todo o Brasil. E prentendemos em breve expandir para o mundo todo.
          <br />Cada prêmio terá sua quantia especifica de doação, mantendo a regra de sempre doarmos mais de 5.000,00 por prêmio e ajudará a uma causa específica, que vocês podem acompanhar através do Instagram
          <a
            href="https://www.instagram.com/vitusalis"
            target="_blank"
            title="Instagram"
            style="color:#fff"
            class="link-highlight"
          >@rifamais</a>
          e do nosso canal no YouTube.
          <!-- EX: Enormes doações para ONGS, greenpeace, AACD, INCA, OMS, comunidades carentes, etc. -->
          <br />NOSSO SONHO É REALIZAR O SEU E TORNAR O MUNDO UM LUGAR MELHOR.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sobre"
};
</script>

<style lang="scss" scoped>
@import "../../public/css/variables.scss";
@media screen and (max-width: 768px) {
  .about {
    .main {
      .panel {
        font-size: 1.4em;

        .highlight {
        }
        .link-highlight {
        }

        &.image {
          display: none;
          img {
            max-width: 70%;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 769px) {
  .about {
    .main {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: $section-margin $side-margin;
      .panel {
        display: flex;
        align-items: center;
        text-align: right;
        flex: 2;
        font-size: 1.25em;

        .highlight {
        }
        .link-highlight {
        }

        &.image {
          flex: 1;
          img {
            max-width: 100%;
            min-width: 80%;
          }
        }
      }
    }
  }
}

.about {
  text-align: center;
  min-height: 80vh;
  margin: $section-margin 10px;
  .main {
    .panel {
      margin: $section-margin $side-margin;
      .highlight {
        background-color: $orange;
        text-transform: uppercase;
        display: block;
        font-style: italic;
        text-align: center;
        padding: 1px;
        margin: 3px;
      }
      .link-highlight {
        border: 1px solid #fff;
        padding: 3px 8px;
        border-radius: 10px;
      }

      &.image {
      }
    }
  }
}
</style>