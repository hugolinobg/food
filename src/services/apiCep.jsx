import axios from "axios"

const urlApiCep = "https://brasilapi.com.br/api/cep/v2"

const apiCep = axios.create({
  baseURL: urlApiCep,
})

export default apiCep
