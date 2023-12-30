import axios from "axios";

const instance = axios.create({
    baseURL: 'https://bank-api-iscz.onrender.com/api/v1'
})

export default instance