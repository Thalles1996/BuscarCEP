import axios from "axios";



//https://viacep.com.br/ws/01001000/json/
//opencep.com/v1/15050305.json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;