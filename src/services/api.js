import Axios from 'axios';

// const auth = "Bearer" + localStorage.getItem("Cerberus-chave-autenticacao");
// let header = {
//     headers:
//     {
//         "Content-Type": "application/json",
//         "Authorization": auth
//     }
// }

export default {
    call(endpoint) {

        let url = `https://192.168.4.50/api/${endpoint}`;

        return {
            getOne: ({ id }) => Axios.get(`${url}/${id}`),
            getAll: () => Axios.get(`${url}`),
            update: (toUpdate) => Axios.put(url, toUpdate),
            create: (toCreate) => Axios.post(url, toCreate)
        }
    }
}