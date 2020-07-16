import axios from "axios";
import TicketService from "./TicketService";
require('dotenv').config()


const url = '/api/raffles/'
class SorteioService {

    static getSorteios() {
        return axios.get(url)
            .then((res) => {
                if (res.data)
                    return (res.data.results)
                // todo
                else throw 404
            })
            .catch(() => { return { msg: "Sorteios indisponíveis" } })
    }

    static getSorteioById(id) {
        return axios.get(url + id)
            .then(async (res) => {
                if (res.data) {
                    const tickets = await TicketService.getTicketByRaffleId(id)
                    if (tickets) res.data.tickets = tickets
                    return res.data
                }
                else throw 404
            })
            .catch(() => { return { msg: "Sorteio indisponível" } })
    }

}

export default SorteioService;  