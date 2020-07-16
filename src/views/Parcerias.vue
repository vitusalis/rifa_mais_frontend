<template>
  <div class="parcerias">
    <h1>Nossas Parcerias</h1>

    <h5 class="text-secondary">
      As iniciativas que
      <span>você</span> apoia quando está conosco
    </h5>
    <b-overlay :show="!partners.length" rounded="sm" :opacity="0">
      <div class="section">
        <b-card
          v-for="partner in partners"
          :key="partner.name"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-23"
        >
          <b-card-img :src="partner.image" :alt="partner.name+'-image'" :title="partner.name"></b-card-img>
          <b-card-body>
            <b-card-title>
              <router-link v-text="partner.name" :to="partner.url"></router-link>
            </b-card-title>
            <b-card-sub-title v-if="partner.subtitle" v-text="partner.subtitle"></b-card-sub-title>
          </b-card-body>
        </b-card>
      </div>
    </b-overlay>
  </div>
</template>

<script>
export default {
  name: "Parcerias",
  data() {
    return {
      partners: [
        {
          name: "OMS",
          image:
            "https://canaldafelicidade.com.br/wp-content/uploads/2020/03/organizacao-mundial-da-sa%C3%BAde-logo.jpg",
          url: "https://www.who.int/"
        },
        {
          name: "INCA",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/e9/INCA_Logo.jpg",
          url: "https://www.inca.gov.br/"
        },
        {
          name: "UNICEF",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.KU7Oy3vfJZDnAzPZQEh9KAHaFj%26pid%3DApi&f=1",
          url: "https://www.unicef.org/"
        },
        {
          name: "AACD",
          image:
            "https://aacd.org.br/wp-content/uploads/2019/05/logo-aacd-baixa.png",
          url: "https://aacd.org.br/"
        }
      ]
    };
  },
  created() {}
};
</script>

<style lang="scss" scoped>
$section-padding: 30px;
$side-padding: 30px;

$warning: #ffb200;
$danger: #b91e1e;
$federal: #ff7b00;
$black: #000;
$gray: #545b62;

.parcerias {
  text-align: center;
  padding: $section-padding $side-padding;
  min-height: 75vh;
  .section {
    // padding: $section-padding $side-padding;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // justify-content: space-between;
    .card {
      width: 300px;
      margin: 30px;
      text-align: left;
      background-color: rgba($color: #fff, $alpha: 0);
      .card-body {
        padding-left: 0;
        a {
          color: #fff;
        }
      }
      .card-img,
      .card-img-top {
        border: 10px solid #fff;
        width: 300px;
        height: 169px;
        object-fit: cover;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .parcerias {
    padding: $section-padding 10px;
    .section {
      flex-direction: column;
      align-items: center;
      .card {
        margin: $section-padding 0;
      }
    }
  }
}
</style>