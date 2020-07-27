<template>
  <div class="payment-methods">
    <h2 class="title">Formas de Pagamento</h2>

    <div class="slideshow">
      <div v-for="(payment, key) of paymentMethodsAccepted" :key="key" class="payment-item">
        <b-card class="payment-logo">
          <img class="card-img" :src="payment.logo" :alt="payment.name +'-logo'" />
        </b-card>
        <div class="payment-info">
          <p v-for="(item, key) of payment.info" :key="key">
            <img v-if="key == 'image'" :src="item.image" alt />
            <span v-else style="font-weight: 700">{{key.toUpperCase()}}</span>
            : {{item.toUpperCase()}}
          </p>
        </div>
      </div>
    </div>

    <b-modal id="payment-modal">Hello From My Modal!</b-modal>
  </div>
</template>

<script>
export default {
  name: "PaymentMethods",
  data() {
    return {
      paymentMethodsAccepted: [
        {
          name: "Bradesco",
          info: {
            Banco: "237",
            Agência: "0952-0",
            "Conta Poupança": "1002102-2",
            CPF: "12691629775",
            Nome: "ALCIR ERNESTO DE SOUZA NETO"
          },
          logo:
            "https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-novo-2018-13.png"
        },
        {
          name: "Nubank",
          info: {
            Banco: "260",
            Agência: "0001",
            CC: "154749-3",
            CPF: "12691629775",
            Nome: "ALCIR ERNESTO DE SOUZA NETO"
          },
          logo:
            "https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-10.png"
        },

        {
          name: "INTER",
          info: {
            Banco: "077",
            Agência: "0001",
            CC: "4710899-1",
            CPF: "12691629775",
            Nome: "ALCIR ERNESTO DE SOUZA NETO"
          },
          logo:
            "https://logodownload.org/wp-content/uploads/2018/11/banco-inter-logo-6.png"
        },
        {
          name: "INTER",
          info: {
            Banco: "336",
            Agência: "0001",
            CC: "1488787-8",
            CPF: "12691629775",
            Nome: "ALCIR ERNESTO DE SOUZA NETO"
          },
          logo:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wxXrUihjTa8UIhO2i2H9GgHaD4%26pid%3DApi%26h%3D180%26p%3D0&f=1"
        },
        // TODO: Add PICPAY
        {
          name: "PICPAY",
          info: {
            Nome: "@alcirneto"
          },
          logo:
            "https://logodownload.org/wp-content/uploads/2018/05/picpay-logo-13.png",
          image: "https://i.postimg.cc/hGGDYCf0/picpay.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$section-margin: 70px;
$side-margin: 30px;
$warning: #ffb200;
$danger: #b91e1e;
$orange: #f57502;
$orange: #f57502;
$black: #000;
$gray: #545b62;

@media screen and (max-width: 375px) {
  .payment-item {
    margin: 15px 0;
  }
}

@media screen and (min-width: 376px) {
  .payment-item {
    margin: 5px;
  }
}

.payment-methods {
  margin: $section-margin $side-margin;
  min-height: 450px;
  text-align: center;
  .title {
    margin-bottom: 20px;
  }
  .slideshow {
    background-color: rgba($color: #ffffff, $alpha: 0);
    width: 100%;
    display: inline-block;
    text-align: center;
    padding: 10px 0;

    .payment-item {
      display: inline-flex;
      flex-direction: column;
      overflow: hidden;

      .payment-logo {
        border: none;
        border-radius: 0;
        background-color: #ffffff;
        width: 200px;
        height: 133px;
        z-index: 1;

        .card-body {
          padding: 10px;
          display: flex;
          align-content: center;
          justify-content: center;
          .card-img {
            object-fit: contain;
          }
        }
      }
      .payment-info {
        display: block;
        text-align: left;
        z-index: 0;
        width: 200px;
        min-height: 200px;
        background-color: $orange;
        color: #fff;

        padding: 10px;
        p {
          margin: 0;
          display: block;
        }
      }
    }
  }
}
</style>