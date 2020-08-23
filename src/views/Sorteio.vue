<template>
  <div>
    <div style="text-align:center">
      <h1 v-if="message && !raffle" v-text="message"></h1>
    </div>
    <div class="full-height">
      <b-overlay :show="!raffle" rounded="sm" :opacity="0" class="full-height">
        <div class="raffle" v-if="raffle">
          <div class="section info">
            <h1 v-text="raffle.name"></h1>
            <h4 class="text-secondary" v-text="formatSorteioDate(raffle.date)"></h4>
            <div v-if="raffle" class="flex">
              <div class="column picture">
                <!-- <img class="img" :src="raffle.photos[0]" alt /> -->
                <b-carousel
                  :interval="4000"
                  controls
                  background="#ababab"
                  img-width="500"
                  img-height="375"
                  style="text-shadow: 1px 1px 2px #333; max-width:700px"
                >
                  <b-carousel-slide
                    :img-src="raffle.cover ? raffle.cover: 'https://i.postimg.cc/CKspSPzh/not-found.png'"
                    class="carrousel-picture"
                  ></b-carousel-slide>

                  <div
                    v-for="(photo, key) in [raffle.photo_1,raffle.photo_3,raffle.photo_4]"
                    :key="key"
                  >
                    <b-carousel-slide
                      v-if="photo"
                      :img-src="photo ? photo: 'https://i.postimg.cc/CKspSPzh/not-found.png'"
                      class="carrousel-picture"
                    ></b-carousel-slide>
                  </div>
                </b-carousel>
              </div>
              <div class="column details" v-if="raffle.info">
                <p v-for="info in raffle.info.split(';')" :key="info" v-text="info"></p>
              </div>
            </div>
          </div>
          <div class="section rifas">
            <h3>COTAS🥇Clique e selecione quantas você quiser</h3>
            <div class="legenda">
              <b-button
                pill
                variant="light"
                @click="filterSelectedNumbers()"
              >Todos ({{filteredTickets.all.length}})</b-button>
              <b-button
                pill
                class="AVA"
                @click="filterSelectedNumbers('AVA')"
              >Disponíveis ({{filteredTickets.avaliable.length}})</b-button>
              <b-button
                pill
                class="RES"
                @click="filterSelectedNumbers('RES')"
              >Reservados ({{filteredTickets.reserved.length}})</b-button>
              <b-button
                pill
                class="PAI"
                @click="filterSelectedNumbers('PAI')"
              >Pagos ({{filteredTickets.paid.length}})</b-button>
              <b-button
                pill
                class="MIN"
                @click="filterSelectedNumbers('MIN')"
              >Meus Números ({{filteredTickets.mine.length}})</b-button>
              <p>
                Os numeros reservados só aparecerão em "Meus Números" no mesmo dispositivo e navegador em que foram reservados os números.
                <br />Sempre verifique o nome que está associado no número
              </p>
            </div>

            <div class="numeros" id="numeroSorteio">
              <div v-if="selectedNumbers.length == 0">
                <h4 class="text-secondary">Nenhum número disponível</h4>
              </div>

              <span v-for="(item, key) of selectedNumbers" :key="key">
                <span
                  :class="'rifa ' + ticketStatus(item)"
                  :id="'ticket-'+item"
                  @click="showModal(item)"
                >
                  <b-tooltip
                    v-if="tooltipTitle(item) != 'Disponível'"
                    :target="'ticket-'+item"
                    triggers="hover"
                    :title="tooltipTitle(item)"
                  ></b-tooltip>
                  <p class="content">{{item}}</p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </b-overlay>
    </div>
    <!-- Reserva -->
    <b-modal
      id="reservaModal"
      :title="'Reservar Rifa de ' + raffle.name "
      header-text-variant="dark"
      body-text-variant="dark"
      footer-text-variant="dark"
      hide-footer
    >
      <b-overlay :show="formOverlay" rounded="sm" :opacity="0">
        <form id="novaReserva">
          <!-- RifaSelected -->
          <b-form-group
            id="number-label"
            label="Número Escolhido:"
            label-for="numberSelected"
            description="Quanto mais números você reservar, mais suas chances de ganhar!"
          >
            <b-button class="orange" id="numberSelected" v-text="newTicket.ticket_number"></b-button>
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
            label="Telefone celular:"
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

          <!-- Instagram -->
          <b-form-group
            id="ig-label"
            label="Instagram:"
            label-for="ig"
            description="Ex.: @rifaquesoma"
            required
          >
            <b-form-input
              id="ig"
              v-model="newTicket.instagram"
              type="text"
              placeholder="Seu Instagram"
            ></b-form-input>
          </b-form-group>
        </form>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="hideModal('reservaModal')"
          >Cancelar</button>

          <b-button variant="primary" class="float-right" @click="validarForm">Confirmar</b-button>
        </div>
      </b-overlay>
    </b-modal>

    <!-- Info Pagamento -->
    <b-modal
      id="infoModal"
      :title="'Informação de  Rifa de ' + raffle.name "
      header-text-variant="dark"
      body-text-variant="dark"
      footer-text-variant="dark"
      hide-footer
    >
      <!-- RifaSelected -->
      <b-form-group id="number-label" label="Número Escolhido:" label-for="numberSelected">
        <b-button id="numberSelected" v-text="newTicket.ticket_number" class="orange"></b-button>
      </b-form-group>

      <h3>Informações Importantes</h3>
      <span class="text-danger" style="font-weight:bold">
        <p>
          Envie seu comprovante para o número
          <a
            href="https://wa.me/5521980066366"
            style="text-decoration: underline color:inherit"
            target="_blank"
          >21 98006-6366 via WhatsApp</a> (clique para enviar)
        </p>

        <ul>
          <li>Informando:</li>
          <li>1. O sorteio e o(s) número(s) reservado(s)</li>
          <li>2. Seu nome completo (o mesmo usado na forma de pagamento)</li>
          <li>3. E seu estado (ex: RJ, SP).</li>
        </ul>
      </span>
      <br />
      <p>Após 2 dias úteis sem confirmação de pagamento os números reservados serão disponibilizados novamente</p>

      <div class="modal-footer">
        <b-button variant="primary" @click="hideModal('infoModal')">Ok</b-button>
      </div>
    </b-modal>

    <!-- Alertas-->
    <b-modal
      id="alertModal"
      title="Atenção"
      header-text-variant="dark"
      body-text-variant="dark"
      footer-text-variant="dark"
      hide-footer
    >
      <h5 v-if="message" v-text="message"></h5>
      <div class="modal-footer">
        <b-button variant="primary" @click="hideModal('alertModal')">Ok</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import SorteioService from "../SorteioService";
import TicketService from "../TicketService";

export default {
  name: "Sorteio",
  data() {
    return {
      message: "",
      raffle: undefined,
      selectedNumbers: [],
      formOverlay: false,
      newTicket: {
        name: "",
        email: "",
        phone: "",
        ticket_number: "",
        instagram: "",
        raffle: this.$route.params.id
      },
      filteredTickets: {
        avaliable: [],
        reserved: [],
        paid: [],
        mine: [],
        all: []
      }
    };
  },

  methods: {
    formatSorteioDate(dateString) {
      if (!dateString) return "";

      const monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ];
      const date = dateString.split("-", 3);
      const year = date[0];
      const month = parseInt(date[1]);
      const day = date[2];
      return ` ${day}  de ${monthNames[month - 1]} de  ${year}`;
    },

    tooltipTitle(ticketNumber) {
      if (this.raffle.tickets) {
        const ticket = this.raffle.tickets.find(
          e => e.ticket_number == ticketNumber
        );
        if (ticket) return ticket.name;
        return "Disponível";
      }
      return "";
    },
    showModal(id) {
      this.newTicket.ticket_number = id;
      const span = document.getElementById("ticket-" + id);
      if (span.classList.contains("AVA")) {
        this.$bvModal.show("reservaModal");
      } else if (span.classList.contains("MIN")) {
        this.$bvModal.show("infoModal");
      } else;
    },
    hideModal(id) {
      this.$bvModal.hide(id);
    },

    // TICKETS
    filterSelectedNumbers(status = null) {
      if (status == "AVA") {
        // get not avaliable
        const not_avaliable = this.raffle.tickets.map(t => t.ticket_number);

        // filter the avaliable ones
        let avaliable_tickets = [];
        for (let i = 0; i < this.raffle.ticket_amount; i++) {
          let ticket_number = ("000" + i).substr(-3);
          if (i >= 1000) ticket_number = ("000" + i).substr(-4);

          if (!not_avaliable.includes(i)) avaliable_tickets.push(ticket_number);
        }
        this.filteredTickets.avaliable = avaliable_tickets;
        this.selectedNumbers = this.filteredTickets.avaliable;
      } else if (status) {
        const dict = {
          MIN: "mine",
          PAI: "paid",
          RES: "reserved"
        };
        const s = dict[status];
        if (this.filteredTickets[s].length) {
          this.selectedNumbers = this.filteredTickets[s];
        } else {
          let newarray = this.raffle.tickets.filter(t => t.status == status);
          newarray = newarray.map(t => t.ticket_number);
          if (s=='reserved'){
            const mine_reserved = this.filteredTickets.mine.filter(t => !this.filteredTickets.paid.includes(t))
            newarray.push(...mine_reserved)
          }
          this.filteredTickets[s] = newarray.sort();
          this.selectedNumbers = this.filteredTickets[s];
        }
      } else this.selectedNumbers = this.filteredTickets.all;
    },

    ticketStatus(ticketNumber) {
      if (this.raffle.tickets) {
        const ticket = this.raffle.tickets.find(
          e => e.ticket_number == ticketNumber
        );
        if (
          ticket &&
          this.filteredTickets.mine.length &&
          this.filteredTickets.mine.includes(ticket._id)
        ) {
          return "MIN";
        } else if (ticket) return ticket.status;

        return "AVA";
      }
      return "AVA";
    },
    updateSpan(ticket_number) {
      let number = ("000" + ticket_number).substr(-3);
      if (ticket_number >= 1000) {
        number = ("000" + ticket_number).substr(-4);
      }
      const span = document.querySelector("span#ticket-" + number);
      if (span) span.classList.replace("AVA", "MIN");
    },
    setMyTickets() {
      const myTicketNumbers = JSON.parse(localStorage.getItem(this.raffle._id));
      if (myTicketNumbers) {
        let myTickets = [];
        this.raffle.tickets.map(t => {
          if (myTicketNumbers.includes(t._id)) {
            if (t.status == "PAI") t.status = "PAI";
            else t.status = "MIN";
            myTickets.push(t.ticket_number);
            this.updateSpan(t.ticket_number);
          }
        });
        this.filteredTickets.mine = myTickets;
      }
    },

    // FORM
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
        this.formOverlay = true;
        this.confirmarReserva();
      }
    },
    async confirmarReserva() {
      let response = await TicketService.insertTicket(this.newTicket);
      if (response.msg) {
        this.message = response.msg;
        this.$bvModal.show("alertModal");
      } else {
        const raffle_id = this.raffle._id;
        const ticket_id = response._id;

        // set my numbers
        let my_tickets = JSON.parse(localStorage.getItem(raffle_id));
        if (my_tickets) my_tickets.push(ticket_id);
        else my_tickets = [ticket_id];
        localStorage.setItem(raffle_id, JSON.stringify(my_tickets));

        this.raffle.tickets = await TicketService.getTicketByRaffleId(this.$route.params.id);
        this.filteredTickets.reserved.push(parseInt(this.newTicket.ticket_number))
        this.setMyTickets();

        this.$bvModal.show("infoModal");
      }
      this.hideModal("reservaModal");
      this.formOverlay = false;
    }
  },
  async mounted() {
    try {
      this.raffle = await SorteioService.getSorteioById(this.$route.params.id);

      this.filteredTickets.all = [];
      for (let i = 0; i < this.raffle.ticket_amount; i++) {
        let number = ("000" + i).substr(-3);
        if (i >= 1000) {
          number = ("000" + i).substr(-4);
        }

        this.filteredTickets.all.push(number);
      }
      this.filteredTickets.avaliable = [...this.filteredTickets.all];

      this.selectedNumbers = this.filteredTickets.all;

      this.setMyTickets();
      this.filterSelectedNumbers("AVA");
      this.filterSelectedNumbers("PAI");
      this.filterSelectedNumbers("RES");
      this.filterSelectedNumbers();
    } catch (e) {
      this.message = e.msg;
    }
  }
};
</script>

<style lang="scss" scoped>
$section-padding: 50px;
$side-padding: 30px;

$warning: #ffb200;
$danger: #b91e1e;
$success: #28a745;
$federal: #ff7b00;
$orange: #f57502;
$black: #000;
$gray: #545b62;
$info: #138496;

.full-height {
  min-height: 80vh;
}
.section {
  text-align: center;
  margin: $section-padding $side-padding;
}
.info {
  min-height: 80vh;
  position: relative;

  .flex {
    display: flex;
    .column {
      flex: 1;
      &.details {
        margin: auto 0;
        text-align: start;
      }
      &.picture {
        .carousel {
          margin-left: auto;
        }
        .carrousel-picture {
          object-fit: fill;
        }
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

  .AVA {
    // background-color: $black;
    background-color: $info;
    // border: 1px solid $gray;
    border: none;
  }
  .RES {
    // background-color: $warning;
    background-color: $danger;
    border: none;
  }
  .PAI {
    // background-color: $danger;
    background-color: $success;
    border: none;
  }
  .MIN {
    // background-color: $info;
    background-color: $warning;
    border: none;
  }
}

.orange {
  background-color: $orange !important;
  cursor: context-menu !important;
  border: none;
}

// Remove number input arrows
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

@media screen and (max-width: 768px) {
  .info {
    .flex {
      flex-direction: column;
      .column {
        padding: 0;
        margin: 30px 0;
      }
    }
  }
  .rifas {
    .legenda {
      display: flex;
      // flex-direction: column;
      flex-wrap: wrap;
      padding-bottom: 30px;
      .btn {
        max-width: 200px;
      }
    }
  }
}

@media screen and (min-width: 769px) {
  .info {
    .flex {
      flex-direction: row;
      .column {
        margin: 40px;
      }
    }
  }
}
</style>