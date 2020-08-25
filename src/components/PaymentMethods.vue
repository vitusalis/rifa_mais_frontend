<template>
  <div class="payment-methods">
    <h2 class="title">Formas de Pagamento</h2>

    <div class="slideshow">
      <div v-for="(payment, key) of paymentMethodsAccepted" :key="key" class="payment-item">
        <b-card class="payment-logo">
          <img class="card-img" :src="payment.logo" :alt="payment.name +'-logo'" />
        </b-card>
        <div class="payment-info">
          <span v-for="(item, key) of payment.info" :key="key" style="display:inline-block">

            <img v-if="key=='image'" :src="item" alt='picpay-logo' style="max-width: 180px" />
            <p v-else style="font-weight: 700; display:inline">
              <span v-if="key=='Conta Poupança'" style="text-decoration:underline">{{key.toUpperCase()}}</span>
              <span v-else>{{key.toUpperCase()}}</span>
               : {{item.toUpperCase()}}
              
              </p>
            

          </span>
        </div>
      </div>
    </div>

    <b-modal id="payment-modal">Hello From My Modal!</b-modal>
  </div>
</template>

<script>
import payment from "../assets/payment_methods.json"
export default {
  name: "PaymentMethods",
  data() {
    return {
      paymentMethodsAccepted : payment.paymentMethods
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
        min-height: 230px;
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