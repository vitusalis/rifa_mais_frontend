<template>
  <div class="info">
    <h1>Informações</h1>
    <h5
      class="text-secondary"
    >Aqui você encontra como participar, nossas formas de pagamento e nossas formas de contato</h5>

    <div class="section instructions">
      <h2>Como participar</h2>
      <div class="steps">
        <div class="step odd">
          <!-- <i class="fas fa-search fa-5x image"></i> -->
          <span class="image" style="font-size:6em">1</span>
          <div class="content">
            <p>
              <router-link
                to="/sorteios"
                class="link"
                title="Nossos sorteios"
              >Escolha um dos nossos sorteios</router-link>&nbsp; e verifique o
              <a href="#terms" class="link">regulamento abaixo</a>
            </p>
          </div>
        </div>
        <div class="step even">
          <!-- <i class="far fa-hand-point-up fa-5x image"></i> -->
          <span class="image" style="font-size:6em">2</span>
          <div class="content">
            <p>Selecione seus números. Quanto mais números você adquirir, mais chances de ganhar</p>
          </div>
        </div>
        <div class="step odd">
          <!-- <i class="fas fa-money-check fa-5x image"></i> -->
          <span class="image" style="font-size:6em">3</span>
          <div class="content">
            <p>
              Faça o pagamento da(s) rifa(s) via tranferência bancária ou cartão de crédito pelo aplicativo pic pay. Não se esqueça de mandar o comprovante para nós via
              <a
                href="https://wa.me/5521993728036"
                target="_blank"
                title="Whatsapp vitusalis"
                class="link"
              >
                <span>whatsapp</span>
              </a>
            </p>
          </div>
        </div>
        <div class="step even">
          <!-- <i class="fas fa-trophy fa-5x image"></i> -->
          <span class="image" style="font-size:6em">4</span>
          <div class="content">
            <p>
              Aguarde o sorteio pela loteria federal e fique de olho no nosso
              <a
                href="https://www.instagram.com/vitusalis/"
                target="_blank"
                title="Instagram Rifamais"
                class="link"
              >Instagram Rifamais</a>
              você pode ser o próximo sorteado.
            </p>
          </div>
        </div>
      </div>
      <!-- <p style="font-size:1.3em">
        A data do sorteio será sempre divulgada em nosso
        <a
          href="https://www.instagram.com/vitusalis/"
          target="_blank"
          title="Instagram Rifamais"
          style="color:#fff; text-decoration:underline"
        >Instagram</a>
      </p>-->
    </div>

    <div class="section contacts">
      <h2>Entre em contato</h2>
      <div class="contact">
        <div class="logo">
          <i class="fab fa-whatsapp fa-2x"></i>
        </div>
        <div class="body">
          <a href="https://wa.me/5521993728036" target="_blank" title="Whatsapp Rifamais">
            <h5 v-text="' Via Whatsapp'"></h5>
          </a>
        </div>
      </div>
      <div class="contact">
        <div class="logo">
          <i class="fab fa-instagram fa-2x"></i>
        </div>
        <div class="body">
          <a
            href="https://www.instagram.com/vitusalis/"
            target="_blank"
            title="Instagram Rifamais"
          >
            <h5 v-text="' Via Instagram'"></h5>
          </a>
        </div>
      </div>
      <div class="contact">
        <div class="logo">
          <i class="far fa-envelope fa-2x"></i>
        </div>
        <div class="body">
          <a href="mailto:victorsalles@me.com" target="_blank" title="Email Rifamais">
            <h5 v-text="' Via Email'"></h5>
          </a>
        </div>
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
@import "../../public/css/variables.scss";

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
      .row {
        display: flex;
        justify-content: center;
        .step {
          width: 200px;
          height: 200px;
          // border: 1px solid #fff;
          position: relative;
          .background {
            color: rgba($color: $orange, $alpha: 0.5);
            font-size: 200px;
            transform: translateY(-50px);
            font-weight: 900;
            padding: none;
            margin: none;
            position: absolute;
          }
          .foreground {
            // height: 200px;
            position: absolute;
            transform: translate(60px, 30px);
            width: 150px;
            font-size: 1.5em;
            font-weight: 900;
            text-align: left;
            // color: $orange;
          }
        }
      }
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
          padding: 30px;
        }
        .content {
          background-color: rgba($color: #fff, $alpha: 1);
          height: 240px;
          padding: 20px;
          color: #000;
          display: flex;
          align-items: center;
        }
      }
    }
    &.terms {
      h2,
      h5 {
        text-align: center;
      }
      text-align: left;
      font-size: 1.2em;
      .sub-title {
        font-size: 1.6em;
      }
    }
  }

  .contacts {
    text-align: center;

    .contact {
      display: inline-block;
      text-align: left;
      background-color: $orange;
      color: #fff;
      width: 250px;
      height: 80px;
      margin: 5px;
      position: relative;
      .logo {
        background-color: #fff;
        color: $orange;
        height: 100%;
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
      }
      .body {
        width: 160px;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        h5 {
          margin: 0;
        }
      }
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