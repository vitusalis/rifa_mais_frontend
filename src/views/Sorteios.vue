<template>
  <div class="sorteios">
    <h1>Próximos Sorteios</h1>
    <p v-text="this.message"></p>
    <!-- <form id="newsorteio" @submit="createSorteio">
      <label for="name">Nome</label>
      <br />
      {{!!newSorteio.name.trim()}}
      <input type="text" v-model="newSorteio.name" required />
      <b-button type="submit">Enviar</b-button>
    </form>-->
    <b-overlay :show="!sorteios.length" rounded="sm" :opacity="0">
      <div class="section" v-if="sorteios">
        <b-card
          v-for="(sorteio, index) of sorteios"
          :id="sorteio['_id']"
          :key="index"
          :title="sorteio.name + ' - ' + sorteio.info.ano"
          :sub-title="`A partir de R$`+sorteio.ticket_price"
          :img-src="sorteio.photos[0]"
        >
          <!-- TODO: Button based on sorteio.avaliabletickets -->
          <router-link :to="{name: 'Sorteio', params:{ id: sorteio._id}}" tag="span">
            <b-button pill>Comprar</b-button>
          </router-link>
        </b-card>
      </div>
    </b-overlay>
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
      message: ""
    };
  },
  methods: {
    // async createSorteio() {
    //   // At least a name
    //   if (this.newSorteio.name.trim()) {
    //     await SorteioService.insertSorteio({ ...this.newSorteio });
    //     this.sorteios = await SorteioService.getSorteios();
    //     this.newSorteio = this.model;
    //   }
    // },
    // async deleteSorteio(id) {
    //   console.log(`Sorteio ${id} excluido`);
    //   await SorteioService.deleteSorteio(id);
    //   this.sorteios = this.sorteios.filter(r => r._id != id);
    // }
  },
  async created() {
    try {
      this.sorteios = await SorteioService.getSorteios();
    } catch (error) {
      this.message = error.message;
    }
  }
};
</script>

<style lang="scss" scoped>
$section-padding: 50px;
$side-padding: 30px;

.sorteios {
  text-align: center;
  padding: $section-padding $side-padding;
  .section {
    padding: $section-padding $side-padding;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .card {
      margin: 30px;
      max-width: 300px;
      background-color: rgba($color: #000000, $alpha: 0);
      .btn {
        background-color: #ff7b00;
        border: none;
        text-transform: uppercase;
        width: 100%;
      }
      .card-img {
        width: 300px;
        height: 225px;
        object-fit: cover;
      }
    }
  }
}
</style>