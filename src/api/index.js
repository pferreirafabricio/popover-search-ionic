import axios from 'axios';

const baseURL = process.env.VUE_APP_API_URL;

const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use((response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location = '/logout';
    }

    return Promise.reject(error);
  });

export default api;
