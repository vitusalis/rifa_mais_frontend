<template>
  <div class="info">
    <h1>Informações</h1>
    <h5
      class="text-secondary"
    >Aqui você encontra como participar, nossas formas de pagamento e nossas formas de contato</h5>

    <!-- <div class="section information">
      <h2>Como Funciona</h2>
      <div class="how-it-works">
         <div class="row">
          <div class="step">
            <div class="background">1</div>
            <div class="foreground">Escolha o sorteio do qual deseja participar</div>
          </div>
          <div class="step">
            <div class="background">2</div>
            <div class="foreground">Escolha o sorteio do qual deseja participar</div>
          </div>
          <div class="step">
            <div class="background">3</div>
            <div class="foreground">Escolha o sorteio do qual deseja participar</div>
          </div>
          <div class="step">
            <div class="background">4</div>
            <div class="foreground">Escolha o sorteio do qual deseja participar</div>
          </div>
        </div>

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
    </div>-->

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
            <p>Selecione um ou mais números. Quanto mais números você selcionar, mais chances de ganhar</p>
          </div>
        </div>
        <div class="step odd">
          <!-- <i class="fas fa-money-check fa-5x image"></i> -->
          <span class="image" style="font-size:6em">3</span>
          <div class="content">
            <p>
              Faça o pagamento da(s) rifa(s) via tranferência bancária. E não se esqueça de mandar o comprovante para nós via
              <a
                href="https://wa.me/5521980066366"
                target="_blank"
                title="Whatsapp Rifaquesoma"
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
              Aguarde o sorteio da loteria federal e ainda
              <router-link
                to="/iniciativas"
                class="link"
                title="Saiba como contribuir"
              >contribua para uma boa causa.</router-link>
            </p>
          </div>
        </div>
      </div>
      <p style="font-size:1.3em">
        A data do sorteio será sempre divulgada em nosso
        <a
          href="https://www.instagram.com/rifaquesoma/"
          target="_blank"
          title="Instagram Rifaquesoma"
          style="color:#fff; text-decoration:underline"
        >Instagram</a>
      </p>
    </div>

    <div class="section contacts">
      <h2>Entre em contato</h2>
      <div class="contact">
        <div class="logo">
          <i class="fab fa-whatsapp fa-2x"></i>
        </div>
        <div class="body">
          <a href="https://wa.me/5521980066366" target="_blank" title="Whatsapp Rifaquesoma">
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
            href="https://www.instagram.com/rifaquesoma/"
            target="_blank"
            title="Instagram Rifaquesoma"
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
          <a href="mailto:rifaquesoma@gmail.com" target="_blank" title="Email Rifaquesoma">
            <h5 v-text="' Via Email'"></h5>
          </a>
        </div>
      </div>
    </div>

    <payment-methods />

    <div class="section terms" id="terms">
      <h2>Termos e Condições</h2>
      <h5 class="text-secondary">Entregamos em todo o Brasil sem frete adicional</h5>
      <p>
        <span class="sub-title">Da participação nos certificados de contribuição premiável</span>
        <br />toda e qualquer pessoa maior de 18 anos pode participar de ações disponíveis.
      </p>
      <p>
        <span class="sub-title">Da definição do ganhador</span>
        <br />O ganhador do sorteio será sempre o participante que tiver seu nome e celular gravados no bilhete premiado. No caso de pagamento em duplicidade, ou seja, em casos raros onde duas pessoas clicam no mesmo bilhete simultaneamente o ganhador do sorteio será o participante que tiver o nome e celular gravados no bilhete no momento do sorteio. O participante que no caso de compra em duplicidade não tiver o nome gravado no bilhete deverá solicitar reembolso do valor pago pelo bilhete em questão.
      </p>
      <p>
        <span class="sub-title">Do cancelamento do certificado de contribuição premiável</span>
        <br />O site poderá, sem aviso prévio, cancelar qualquer ação que viole um ou mais termos aqui dispostos.
        <br />O criador da ação poderá realizar o cancelamento da mesma na tela de edição da ação.
      </p>
      <span>
        <span class="sub-title">Do reembolso</span>
        <p>O reembolso de bilhetes ocorre exclusivamente em casos de cancelamento da ação, ou seja, o criador da ação ou site não se obriga a reembolsar participantes que adquirirem bilhetes presencialmente ou on-line caso a ação não tenha sido cancelada.</p>
        <p
          style="text-transform:uppercase"
        >o reembolso de bilhetes ocorre exclusivamente em casos de cancelamento da ação. Não estando obrigado ao site ou ao organizador reembolsar participantes no caso da ação não ser cancelada</p>
      </span>
      <span>
        <span class="sub-title">Das proibições</span>
        <br />É completamente vedado o uso de perfis falsos visando criar ações sem a genuína intenção de realizá-las seguindo os termos aqui dispostos.
        <br />É completamente vedado a participação do organizador em sua própria ação.
        <br />O site pode alterar a qualquer momento estes termos visando melhorar a qualidade do serviço oferecido.
        <br />O site informará a todos os usuários sempre que ocorrer uma alteração nos termos de uso e o usuários deverá aceitar as mudanças para continuar utilizando o site.
      </span>
      <p>
        Todas as nossas informações são passadas em nosso principal canal de contato,
        <a
          href="https://www.instagram.com/rifaquesoma/"
          target="_blank"
          title="Instagram Rifaquesoma"
          style="color:#fff; text-decoration:underline"
        >Instagram @rifaquesoma</a>
        .
        Siga, ative as notificações e fique sempre por dentro das datas, regras e novos sorteios.
      </p>
    </div>
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
          height: 200px;
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