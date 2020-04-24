<template>
  <div class="home">
    <div class="background" id="background">
      <div class="center">
        <h2 class="title">CONCORRA A UM TESLA</h2>
        <h3>Modelo Truck</h3>
        <p>Sorteio em 3 dias</p>

        <div>
          <button class="button">Comprar</button>
        </div>
      </div>
    </div>

    <div class="parcerias">
      <h2 class="title">Formas de Pagamento</h2>
      <div class="slideshow">
        <b-card>
          <img
            class="card-img"
            src="https://logodownload.org/wp-content/uploads/2014/05/itau-logo-1.png"
            alt
          />
        </b-card>
        <b-card>
          <img
            class="card-img"
            src="https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-novo-2018-13.png"
            alt
          />
        </b-card>
        <b-card>
          <img
            class="card-img"
            src="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-10.png"
            alt
          />
        </b-card>

        <b-card>
          <img
            class="card-img"
            src="https://logodownload.org/wp-content/uploads/2017/05/santander-logo-12.png"
            alt
          />
        </b-card>
        <b-card>
          <img
            class="card-img"
            src="https://logodownload.org/wp-content/uploads/2014/10/paypal-logo-1.png"
            alt
          />
        </b-card>
        <b-card>
          <img
            class="card-img"
            src="https://logodownload.org/wp-content/uploads/2019/06/mercado-pago-logo-6.png  "
            alt
          />
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
  // mounted() {
  //   var navH = document.getElementsByTagName("nav")[0].clientHeight;
  //   var bodyH = Math.max(
  //     document.documentElement.clientHeight,
  //     window.innerHeight || 0
  //   );
  //   // console.log(navH);
  //   // console.log(bodyH);
  //   var banner = document.body.querySelector("div#background");
  //   console.log(banner);
  //   banner.style.height = bodyH - navH + "px";
  //   console.log(banner.style.height);
  // }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;900&display=swap");

$section-padding: 50px;
$side-padding: 30px;

$warning: #ffb200;
$danger: #b91e1e;
$federal: #ff7b00;
$black: #000;
$gray: #545b62;

@media screen and (max-width: 1000px) {
  .home {
    .background {
      top: 0;
      height: 85vh;
      background-position-x: 45%;
    }
    .center {
      padding: 30px;
      .title {
        font-size: 2.5em;
      }
    }
    .parcerias {
      .slideshow {
        .card {
          width: 120px;
          height: 90px;
        }
      }
    }
  }
}
@media screen and (min-width: 1000px) {
  .home {
    .background {
      height: calc(100vh - 144px);
    }
    .center {
      .title {
        font-size: 4em;
      }
    }
    .parcerias {
      .slideshow {
        .card {
          width: 150px;
          height: 100px;
        }
      }
    }
  }
}

.home {
  position: relative;
  z-index: 0;
  .background {
    position: relative;
    width: 100%;
    background-image: url("https://revistacarro.com.br/wp-content/uploads/2019/11/Tesla-Cybertruck_4.jpg");
    background-size: cover;
    .center {
      background-color: rgba($color: #000000, $alpha: 0.4);
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      font-family: "Poppins", sans-serif;
      .title {
        font-weight: 900;
      }
      .button {
        padding: 15px 30px;
        text-transform: uppercase;
        font-weight: 500;
        transition: all 0.3s ease;
        color: #fff;
        border: none;
        background-color: $federal;
        &:hover {
          // background-color: #ff7900;
          // border-color: $federal;
        }
      }
    }
  }
  .parcerias {
    padding: $section-padding $side-padding;
    text-align: center;
    .title {
      margin-bottom: 20px;
    }
    .slideshow {
      background-color: rgba($color: #ffffff, $alpha: 0);
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      padding: 10px 0;
      .row {
        display: flex;
        flex-direction: row;
        margin: 0;
      }
      .card {
        margin: 15px;
        border: 1px solid #fff;
        // border-radius: 0;
        background-color: rgba($color: #ffffff, $alpha: 0.9);
        transition: all 0.4s ease;
        &:hover {
          transform: scale(1.1);
        }
        .card-body {
          padding: 10px;
          display: flex;
          align-content: center;
          justify-content: center;

          .card-img {
            max-width: 100px;
            object-fit: contain;
          }
        }
      }
    }
  }
}
</style>
