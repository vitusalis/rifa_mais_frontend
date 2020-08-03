<template>
  <div class="iniciativas">
    <h1>Iniciativas que apoiamos</h1>

    <h5 class="text-secondary">E que você também apoia quando está conosco</h5>
    <b-overlay :show="!organs.length" rounded="sm" :opacity="0">
      <div class="section" v-if="organs.length">
        <b-card
          v-for="organ in organs"
          :key="organ.name"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-23"
        >
          <b-card-img :src="organ.image" :alt="organ.name+'-image'" :title="organ.name"></b-card-img>
          <b-card-body>
            <b-card-title>
              <router-link v-text="organ.name" :to="organ.url"></router-link>
            </b-card-title>
            <b-card-sub-title v-if="organ.subtitle" v-text="organ.subtitle"></b-card-sub-title>
          </b-card-body>
        </b-card>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import companies from "../assets/donations";
export default {
  name: "Iniciativas",
  data() {
    return {
      organs: undefined
    };
  },
  created() {
    this.organs = companies.companies;
  }
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

.iniciativas {
  text-align: center;
  padding: $section-padding $side-padding;
  min-height: 80vh;
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
  .iniciativas {
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