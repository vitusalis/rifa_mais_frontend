import axios from "axios";

const url = 'http://localhost:5000/api/sorteios/'
// const ticketUrl = 'http://localhost:5000/api/sorteios/:id/tickets/'

class SorteioService {
    // GetSorteios
    static getSorteios() {
        return new Promise((resolve, reject) => {
            try {
                axios.get(url).then((res) =>
                    resolve(res.data.map(el => (
                        { ...el, createdAt: new Date(el.createdAt) }
                    )))
                )
            } catch (error) {
                reject(error);
            }
        })
    }

    static getSorteioById(id) {
        return new Promise((resolve, reject) => {

            try {
                axios.get(`${url}${id}`).then((res) =>
                    resolve(
                        res.data = { ...res.data, createdAt: new Date(res.data.createdAt) }
                    )
                )
            } catch (error) {
                reject(error);
            }
        })
    }

    static insertSorteio(newSorteio) {
        return axios.post(url, newSorteio, { headers: { 'Content-type': 'application/json' } })
    }
    // DeleteSorteios
    static deleteSorteio(id) {
        return axios.delete(`${url}${id}`)
    }

    static insertTicket(newTicket, sorteioID) {
        console.log(`http://localhost:5000/api/sorteios/${sorteioID}/tickets/`)
        return axios.post(
            `http://localhost:5000/api/sorteios/${sorteioID}/tickets/`,
            newTicket,
            { headers: { 'Content-type': 'application/json' } })
    }
}

export default SorteioService;