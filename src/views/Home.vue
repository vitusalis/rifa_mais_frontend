<template>
  <div class="home">
    <b-overlay :show="!bannerSlide.length" rounded="sm" :opacity="0" class="full-height">
      <div class="slideshow" id="slideshow">
        <!-- class ternary bind to display first item  -->
        <div
          :class="'slide slide-'+key + [key==0 ?  ' visible' : '']"
          :id="'slide-'+key"
          v-for="(item, key) of bannerSlide"
          :key="key"
        >
          <div class="background" id="background" :style="'background-image: url('+item.image+')'">
            <div class="center">
              <h2 class="title" v-text="item.title"></h2>
              <h3 class="sub-title" v-text="item.subTitle"></h3>
              <p class="description" v-text="item.description"></p>
              <div>
                <router-link
                  v-if="item.linkId"
                  :to="{name: 'Sorteios', params:{id: item.linkId}}"
                  tag="button"
                  class="button"
                >COMPRAR</router-link>

                <router-link
                  v-else
                  :to="{name: 'Sorteios'}"
                  tag="button"
                  class="button"
                >COMPRAR RIFAS</router-link>

                <router-link v-if="item.link" :to="item.link" tag="button" class="button">SAIBA MAIS</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-overlay>

    <payment-methods></payment-methods>
  </div>
</template>

<script>
import companies from "../assets/donations";
import SorteioService from "../SorteioService";
import PaymentMethods from "../components/PaymentMethods";

export default {
  name: "Home",
  components: { "payment-methods": PaymentMethods },
  data() {
    return {
      message: "",
      bannerSlide: [],
      slide_index: 0,
      slideshow_on: true
    };
  },
  methods: {
    slideshow() {
      setInterval(() => {
        if (this.slideshow_on) {
          const slideshow = document.querySelector("div#slideshow");
          if (slideshow) {
            const slides = Array.from(
              slideshow.getElementsByClassName("slide")
            );
            let current_slide = Array.from(
              slideshow.getElementsByClassName(`slide-${this.slide_index}`)
            )[0];
            current_slide = Array.from(
              slideshow.getElementsByClassName(`slide-${this.slide_index}`)
            )[0];
            const next_slide = slides.find(e => e != current_slide);
            if (current_slide) {
              current_slide.classList.remove("visible");
              next_slide.classList.add("visible");
              this.slide_index = next_slide.id.split("slide-")[1];
            }
          }
        }
      }, 8000);
    },
    getDescription(date) {
      if (date) {
        const days = Math.ceil(
          Math.abs(new Date(date) - new Date()) / (1000 * 60 * 60 * 24)
        );
        return `Sorteio em ${days} dias`;
      }
      return "";
    }
  },
  async created() {
    try {
      let response = await SorteioService.getSorteios();
      if (response.msg) this.message = response.msg;
      else {
        const raffles = response;
        let sorteio = response.filter(r => r.status == "ACT")[0];
        if (!sorteio) sorteio = raffles[0];
        this.bannerSlide.push({
          title: `CONCORRA A UM ${sorteio.name.toUpperCase()}`,
          subTitle: `Apenas R$ ${sorteio.ticket_price}`,
          description: this.getDescription(sorteio.date),
          image: sorteio.cover
            ? sorteio.cover
            : "https://i.postimg.cc/CKspSPzh/not-found.png",
          linkId: sorteio.id
        });
        const organs = companies.companies;
        const organ = organs[0];
        this.bannerSlide.push({
          title: organ.name,
          subTitle: `A cada sorteio realizado uma parte dos lucros é destinada a uma boa causa como a ${organ.name}`,
          link: "/iniciativas",
          image: "https://i.postimg.cc/tJ3tJNBX/child-playing.jpg"
        });
      }
    } catch (error) {
      this.message = error.message;
    }
    this.slideshow();
  },
  mounted() {
    // const slideshow = document.querySelector("div#slideshow");
    // slideshow.addEventListener("mouseover", () => {
    //   this.slideshow_on = false;
    //   console.log(this.slideshow_on);
    // });
    // slideshow.addEventListener("mouseout", () => {
    //   setTimeout(() => {
    //     if (!this.slideshow_on) this.slideshow_on = true;
    //   }, 2000);
    //   console.log(this.slideshow_on);
    // });
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;900&display=swap");

$section-padding: 70px;
$side-padding: 30px;

$warning: #ffb200;
$danger: #b91e1e;
$orange: #f57502;
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
  }
}
@media screen and (min-width: 1000px) {
  .home {
    min-height: 80vh;
    .background {
      height: 80vh;
    }
    .center {
      .title {
        font-size: 4em;
        text-transform: uppercase;
      }
    }
  }
}

.full-height {
  min-height: 85vh;
}
.home {
  position: relative;
  z-index: 0;
  .slideshow {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto;
    .slide {
      display: none;
    }
    .visible {
      display: initial;
      width: 100vw;
    }
  }
  .background {
    position: relative;
    width: 100%;

    background-position-y: 50%;
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
        margin: 10px;
        text-transform: uppercase;
        font-size: 1.3em;
        font-weight: 500;
        transition: all 0.3s ease;
        color: #fff;
        border: none;

        background-color: $orange;
        -webkit-box-shadow: 10px 10px 28px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 28px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 10px 28px 0px rgba(0, 0, 0, 0.75);
      }
    }
  }
}
</style>
