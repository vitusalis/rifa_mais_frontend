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
        return axios.get(url + `?raffle=${raffle_id}`)
            .then((res) => {
                if (res.data) return res.data
            })
            .catch(() => { return { msg: "Tickets indisponíveis" } })
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