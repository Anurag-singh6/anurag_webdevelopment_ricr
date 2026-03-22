import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://carvenings-backend.onrender.com",
  withCredentials: true,
});

export default axiosInstance;
