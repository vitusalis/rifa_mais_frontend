<template>
  <div>
    <h1 v-if="message" v-text="message"></h1>

    <b-overlay :show="!sorteio && !message" rounded="sm" :opacity="0">
      <div class="sorteio" v-if="sorteio">
        <div class="section info">
          <h1 v-text="sorteio.name + ' - ' + sorteio.info.ano"></h1>
          <h4 class="text-secondary" v-text="sorteio.date"></h4>
          <div v-if="sorteio" class="flex">
            <div class="column picture">
              <!-- <img class="img" :src="sorteio.photos[0]" alt /> -->
              <b-carousel
                :interval="4000"
                controls
                background="#ababab"
                img-width="500"
                img-height="375"
                style="text-shadow: 1px 1px 2px #333;"
              >
                <b-carousel-slide
                  v-for="(photo, key) in sorteio.photos"
                  :key="key"
                  :img-src="photo"
                ></b-carousel-slide>
              </b-carousel>
            </div>
            <div class="column details">
              <p v-for="(value, key) in sorteio.info" :key="key">
                <!-- array -->
                <span v-if="key.toLowerCase() == 'outros'">
                  <span v-text="key.toUpperCase() + ' - '"></span>
                  <span v-for="(item, k) in value" :key="k" v-text="item + ', '"></span>
                </span>
                <span v-else>{{key.toUpperCase()}} - {{value}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="section rifas">
          <!-- TODO: find out title -->
          <!-- <h2>Reservar Rifa</h2> -->
          <div class="legenda">
            <b-button pill variant="light" @click="filterSelectedNumbers()">Todos</b-button>
            <b-button
              pill
              class="avaliable"
              @click="filterSelectedNumbers('avaliable')"
            >001 Disponíveis</b-button>
            <b-button
              pill
              class="reserved"
              @click="filterSelectedNumbers('reserved')"
            >005 Reservados</b-button>
            <b-button pill class="paid" @click="filterSelectedNumbers('paid')">001 Pagos</b-button>
          </div>
          <div class="numeros" id="numeroSorteio">
            <!-- HERE -->
            <span v-for="(item, key) of selectedNumbers" :key="key">
              <span
                :class="'rifa ' + ticketStatus(item)"
                :id="'ticket-'+item"
                title="Disponível"
                @click="showModal(item)"
              >
                <p class="content">{{item}}</p>
                <!-- TODO: add tooltip -->
              </span>
            </span>
            <b-modal
              id="modal-1"
              :title="'Reservar Rifa de ' + sorteio.name "
              header-text-variant="dark"
              body-text-variant="dark"
              footer-text-variant="dark"
              hide-footer
            >
              <form id="novaReserva">
                <!-- RifaSelected -->
                <b-form-group
                  id="number-label"
                  label="Número Escolhido:"
                  label-for="numberSelected"
                >
                  <b-button
                    variant="success"
                    id="numberSelected"
                    v-text="newTicket.ticket_number"
                    disabled
                    class="modalNumber"
                  ></b-button>
                </b-form-group>

                <b-form-group
                  id="name-label"
                  label="Nome:"
                  label-for="name"
                  description="Ex.: Maria Silva"
                  required
                >
                  <b-form-input
                    id="name"
                    v-model="newTicket.name"
                    type="text"
                    required
                    placeholder="Nome Completo"
                  ></b-form-input>
                </b-form-group>

                <!-- Email -->
                <b-form-group
                  id="email-label"
                  label="Email:"
                  label-for="email"
                  description="Ex.: marisilva@gmail.com"
                  required
                >
                  <b-form-input
                    id="email"
                    v-model="newTicket.email"
                    type="email"
                    required
                    placeholder="Seu email"
                  ></b-form-input>
                </b-form-group>

                <!-- Phone -->
                <b-form-group
                  id="phone-label"
                  label="Telefone:"
                  label-for="phone"
                  description="Ex.: 21 99876 5432"
                  required
                >
                  <b-form-input
                    id="phone"
                    v-model="newTicket.phone"
                    type="number"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    placeholder="Seu telefone"
                    min="11"
                    max="11"
                  ></b-form-input>
                </b-form-group>
              </form>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  @click="hideModal"
                >Cancelar</button>

                <b-button
                  variant="primary"
                  class="float-right federal"
                  @click="validarForm"
                >Confirmar</b-button>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import SorteioService from "../SorteioService";
export default {
  name: "Sorteio",
  data() {
    return {
      message: "",
      sorteio: undefined,
      selectedNumbers: [],
      numerosOverlay: false,
      newTicket: {
        name: "",
        email: "",
        phone: "",
        ticket_number: "",
        status: "reserved"
      }
    };
  },

  methods: {
    filterSelectedNumbers(ticketStatus = "") {
      if (ticketStatus) {
        let newarray = this.sorteio.tickets.filter(
          t => t.status == ticketStatus
        );
        this.selectedNumbers = newarray.map(t => t.ticket_number);
      } else if (ticketStatus == "avaliable") {
        // TODO > add register ticket
        console.log("nao implementado ainda");
      } else {
        this.selectedNumbers = this.sorteio.ammount;
      }
    },
    ticketStatus(ticketNumber) {
      if (ticketNumber <= 20) {
        const ticket = this.sorteio.tickets.filter(
          e => e.ticket_number == ticketNumber
        )[0];
        if (ticket) return ticket.status;
      }
      // classreturn
      return "avaliable";
    },
    showModal(id) {
      this.newTicket.ticket_number = id;
      if (
        document.getElementById("ticket-" + id).classList.contains("avaliable")
      )
        this.$bvModal.show("modal-1");
      else alert("nao é possivel reservar");
    },
    hideModal() {
      this.$bvModal.hide("modal-1");
    },
    validarForm() {
      const form = document.querySelector("form#novaReserva");
      let formIsValidated = true;

      const email = form.querySelector("#email");
      const emailDescription = document
        .querySelector("#email-label")
        .querySelector("small");
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        emailDescription.innerHTML =
          "<span style='color: red' >Email não é válido</span>";
        formIsValidated = false;
      } else emailDescription.innerHTML = "Ex.: marisilva@gmail.com";

      const name = form.querySelector("#name");
      const nameDescription = document
        .querySelector("#name-label")
        .querySelector("small");

      if (name.value.length < 5) {
        nameDescription.innerHTML =
          "<span style='color: red' >Nome muito curto</span>";
        formIsValidated = false;
      } else nameDescription.innerHTML = "Ex.: Maria Silva";

      const phone = form.querySelector("#phone");
      const phoneDescription = document
        .querySelector("#phone-label")
        .querySelector("small");
      if (phone.value.length < 11 || phone.value.length > 11) {
        phoneDescription.innerHTML =
          "<span style='color: red' >Numero de telefone inválido</span>";
        formIsValidated = false;
      } else {
        phoneDescription.innerHTML = "Ex.: 21 99876 5432";
      }
      if (formIsValidated) {
        this.confirmarReserva();
      }
    },
    confirmarReserva() {
      alert("a implementar");
      // TODO: create method to insert ticket
      // if (!SorteioService.insertRifa(this.newTicket))
      //   alert("Já existe uma rifa com este numero");
    }
  },
  async created() {
    try {
      const sorteios = await SorteioService.getSorteios();
      this.sorteio = sorteios.filter(e => e._id == this.$route.params.id)[0];
      this.newTicket.sorteio_id = this.sorteio._id;
    } catch {
      this.message = "Error";
      // this.$router.push("/");
    } finally {
      if (this.sorteio) {
        for (let i = 0; i <= this.sorteio.ammount; i++) {
          this.selectedNumbers.push(i);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$section-padding: 50px;
$side-padding: 30px;

$warning: #ffb200;
$danger: #b91e1e;
$federal: #ff7b00;
$black: #000;
$gray: #545b62;

.b-overlay-wrap {
  min-height: 85vh;
}
.section {
  text-align: center;
  padding: $section-padding $side-padding;
}
.info {
  .flex {
    display: flex;
    flex-direction: row;
    .column {
      flex: 1;
      padding: 20px;

      &.details {
        margin: auto 0;
        text-align: start;
      }
    }
  }
}
.rifas {
  .legenda {
    text-align: start;
    margin: 3px 5%;
    .btn {
      font-size: 1.2em;
      margin: 5px;
    }
  }
  .numeros {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 5%;

    .rifa {
      margin: 5px 2px;
      width: 50px;
      height: 50px;

      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        cursor: pointer;
      }
      .content {
        margin: 3px 5px;
      }
    }
  }
  .reserved {
    background-color: $warning;
    border: none;
  }
  .paid {
    // background-color: #218838;
    background-color: $danger;
    border: none;
  }
  .avaliable {
    background-color: $federal;
    border: none;
    background-color: $black;
    border: 1px solid $gray;
  }
}

// Remove input arrows
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>