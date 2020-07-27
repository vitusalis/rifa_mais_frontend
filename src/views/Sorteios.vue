<template>
  <div class="sorteios">
    <h1 v-if="message" v-text="message"></h1>

    <div v-else>
      <div v-if="sorteios">
        <h1>Próximos Sorteios</h1>
        <h5 class="text-secondary">Participe e concorra</h5>
      </div>
      <b-overlay :show="!sorteios.length" rounded="sm" :opacity="0">
        <div class="section" v-if="sorteios">
          <b-card
            v-for="(sorteio, index) of sorteios"
            :id="sorteio['id']"
            :key="index"
            :title="sorteio.name"
            :sub-title="`A partir de R$`+sorteio.ticket_price"
            :img-src="sorteio.cover ? sorteio.cover: 'https://i.postimg.cc/CKspSPzh/not-found.png'"
          >
            <!--  sortings to be have no id therefore no link-->
            <b-button
              pill
              variant="secondary"
              v-if="sorteio.status=='SOO'"
              :class="sorteio.status"
            >{{status_dictionary[sorteio.status]}}</b-button>

            <b-button
              pill
              v-else
              :class="sorteio.status"
              :to="{name: 'Sorteio', params:{ id: sorteio.id}}"
            >{{status_dictionary[sorteio.status]}}</b-button>
          </b-card>
        </div>
      </b-overlay>
    </div>
  </div>
</template>

<script>
import SorteioService from "../SorteioService";
export default {
  name: "Sorteios",
  data() {
    return {
      newSorteio: {
        name: "",
        date: undefined,
        buyers: []
      },
      model: {
        name: "",
        date: undefined,
        buyers: []
      },
      sorteios: [],
      status_dictionary: {
        ACT: "COMPRAR",
        INA: "ESGOTADO",
        SOO: "EM BREVE"
      },
      message: ""
    };
  },
  async created() {
    try {
      const response = await SorteioService.getSorteios();
      if (response.msg) this.message = response.msg;
      else this.sorteios = response;
    } catch (error) {
      this.message = error.message;
    }
  }
};
</script>

<style lang="scss" scoped>
$orange: #f57502;
$section-margin: 70px;
$side-margin: 30px;

.sorteios {
  text-align: center;
  margin: $section-margin $side-margin;
  min-height: 75vh;
  .section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .card {
      position: relative;
      max-width: 300px;
      background-color: rgba($color: #000000, $alpha: 0);
      .btn {
        border: none;
        text-transform: uppercase;
        width: 100%;
        &.ACT {
          background-color: $orange;
        }
      }
      .card-img {
        object-fit: cover;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .sorteios {
    .section {
      margin: $section-margin 0;
    }
  }
  .card {
    margin: 0;
    max-width: 80vw;
  }
}
@media screen and (min-width: 769px) {
  .sorteios {
    .section {
      margin: $section-margin $side-margin;
    }
  }
  .card {
    margin: 30px;
  }
}
</style>