import axios from "axios";

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL || "https://rsi-app-seven.vercel.app";
const authentication = process.env.NEXT_PUBLIC_API_AUTHENTICATION;

const defaultOptions = {
  headers: { "Content-Type": "application/json" },
  baseURL: `${apiUrl}/api`,
};

const api = axios.create(defaultOptions);

api.interceptors.request.use((config) => {
  config.headers.Authorization = authentication;

  return config;
});

export default api;
