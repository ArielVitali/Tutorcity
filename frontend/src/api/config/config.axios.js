import axios from "axios";

const instance = axios.create({
  baseURL: "https://tutorcity-backend-production.up.railway.app/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config) => {
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    config.headers = {
      ...config.headers,
      Authorization: jwt ? `Bearer ${jwt.token}` : "",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
