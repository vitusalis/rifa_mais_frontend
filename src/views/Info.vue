<template>
  <div class="info">
    <h1>Informações</h1>
    <h5
      class="text-secondary"
    >Aqui você encontra como participar, nossas formas de pagamento e nossas formas de contato</h5>

    <div class="section instructions">
      <h2>Como Funciona</h2>
      <div class="how-it-works">
        <p>Nossos sorteios são feitos através da loteria federal</p>
        <p>
          A data do sorteio será sempre divulgada em nosso
          <a
            href="https://www.instagram.com/rifaquesoma/"
            target="_blank"
            title="Instagram Rifaquesoma"
            style="color:#fff; text-decoration:underline"
          >Instagram</a>
        </p>
        <p>Você reserva um número equivalente aos últimos 3 dígitos do número sorteado na loteria federal</p>
        <p>
          Ex.: Se você reservou os números 142, 509 e 030,
          <br />e o número sorteado na loteria federal for 021509,
          <br />você é o ganhador do soteio Rifa que Soma!
        </p>
      </div>
    </div>
    <div class="section instructions">
      <h2>Como participar</h2>
      <div class="steps">
        <div class="step odd">
          <i class="fas fa-search fa-5x image"></i>
          <div class="content">
            <p>
              <router-link
                to="/sorteios"
                class="link"
                title="Nossos sorteios"
              >Escolha um dos nossos sorteios</router-link>
            </p>
          </div>
        </div>
        <div class="step even">
          <i class="far fa-hand-point-up fa-5x image"></i>
          <div class="content">
            <p>Selecione um número.</p>
          </div>
        </div>
        <div class="step odd">
          <i class="fas fa-money-check fa-5x image"></i>
          <div class="content">
            <p>Faça o pagamento da rifa.</p>
          </div>
        </div>
        <div class="step even">
          <i class="fas fa-trophy fa-5x image"></i>
          <div class="content">
            <p>
              Concorra ao prêmio e ainda
              <router-link
                to="/iniciativas"
                class="link"
                title="Saiba como contribuir"
              >contribua para uma boa causa.</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section contacts">
      <h2>Entre em contato</h2>
      <div class="contact">
        <a href="https://wa.me/5521980066366" target="_blank" title="Whatsapp Rifaquesoma">
          <i class="fab fa-whatsapp fa-2x"></i>
          <h5 v-text="' Via Whatsapp'"></h5>
        </a>
      </div>
      <div class="contact">
        <a
          href="https://www.instagram.com/rifaquesoma/"
          target="_blank"
          title="Instagram Rifaquesoma"
        >
          <i class="fab fa-instagram fa-2x"></i>
          <h5 v-text="' Via Instagram'"></h5>
        </a>
      </div>
      <div class="contact">
        <a href="mailto:rifaquesoma@gmail.com" target="_blank" title="Email Rifaquesoma">
          <i class="far fa-envelope fa-2x"></i>
          <h5 v-text="' Via Email'"></h5>
        </a>
      </div>
    </div>

    <payment-methods />
  </div>
</template>

<script>
import PaymentMethods from "../components/PaymentMethods";
export default {
  name: "Info",
  components: { "payment-methods": PaymentMethods }
};
</script>

<style lang="scss" scoped>
$section-margin: 45px;
$side-margin: 30px;

$warning: #ffb200;
$danger: #b91e1e;
$federal: #ff7b00;
$orange: #f57502;
$black: #000;
$gray: #545b62;

@media screen and (max-width: 768px) {
  .info {
    margin: $section-margin 10px;
    .section {
      margin: $section-margin 0;
    }
    .instructions {
      .steps {
        flex-direction: column;
        align-items: center;
        .step {
          display: flex;
          flex-direction: row;
          margin: 5px 0;
          .image {
            width: 150px;
            order: 1;
          }
          .content {
            width: 150px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 769px) {
  .info {
    margin: $section-margin $side-margin;
    .section {
      margin: $section-margin $side-margin;
    }
    .instructions {
      .steps {
        flex-direction: row;
        max-width: 850px;
        .step {
          width: 200px;
          margin: 5px;
        }
      }
    }
  }
}
.link {
  text-decoration: underline;
  text-decoration-color: $orange;
  color: inherit;
}
.info {
  text-align: center;
  min-height: 75vh;

  .section {
    .how-it-works {
      p {
        font-size: 1.3em;
        margin: 0;
      }
    }
    .steps {
      display: flex;
      margin: 0 auto;
      .step {
        background-color: $orange;
        .image {
          // .step-width - icon(i) width / 2
          padding: 35px;
        }
        .content {
          background-color: rgba($color: #fff, $alpha: 1);
          height: 150px;
          padding: 20px;
          color: #000;
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .contacts {
    text-align: center;

    .contact {
      display: inline-block;
      background-color: $orange;
      color: #fff;
      width: 200px;
      height: 100px;
      margin: 5px;
      padding: 15px 30px;
      a {
        color: inherit;
      }
      span {
        margin: auto 0;
      }
    }
  }
}
</style>