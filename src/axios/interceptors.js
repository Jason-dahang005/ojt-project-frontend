import axios from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Accept': 'application/json'
  }
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  console.log('request sent')
  return config
}, (error) => {
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use((response) => {
  console.log('got response')
  return response
}, (error) => {
})

export default axiosInstance  