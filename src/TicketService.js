import axios from "axios";

const api_path = process.env.VUE_APP_API_PATH;
const url = api_path + "/api/tickets/"

class TicketService {

    static getTickets() {
        return axios.get(url)
            .then((res) => {
                if (res.data) return res.data.results
            })
            .catch(() => { return { msg: "Tickets indisponíveis" } })
    }

    static async getTicketByRaffleId(raffle_id) {
        let tickets = await this.getTickets()
        return tickets.filter(el => el.raffle == raffle_id)
    }

    static insertTicket(ticket) {
        return axios.post(url, ticket)
            .then(async (res) => {
                if (res.data) return res.data
            })
            .catch(() => { return { msg: "Parece que este ticket já foi reservado" } }
            )
    }
}

export default TicketService;