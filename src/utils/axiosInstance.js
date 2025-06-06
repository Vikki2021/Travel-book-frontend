import axios from "axios"

const BASE_URL = "https://travel-book-backend-1.onrender.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosInstance
