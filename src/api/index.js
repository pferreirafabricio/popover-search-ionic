import axios from "axios";

const baseURL = process.env.VUE_APP_API_URL;

const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
