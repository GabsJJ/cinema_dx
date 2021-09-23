import axios from 'axios'
import API_TOKEN from '../../config.json'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
})

api.interceptors.request.use(async (config) => {
  const token = API_TOKEN

  if (token) {
    config.headers.Authorization = `Bearer ${token.API_TOKEN}`
  }
  return config
})

export default api
