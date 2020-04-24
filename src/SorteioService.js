import axios from "axios";

const url = 'http://localhost:5000/api/sorteios/'

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
    static insertSorteio(newSorteio) {
        return axios.post(url, newSorteio, { headers: { 'Content-type': 'application/json' } })
    }
    // DeleteSorteios
    static deleteSorteio(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default SorteioService;