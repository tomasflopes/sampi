import axios from 'axios';

const api = axios.create({
  baseURL: 'exp://192.168.0.104:3333'
});

export default api;
