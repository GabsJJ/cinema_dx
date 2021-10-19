import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
})

api.interceptors.request.use(async (config) => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
