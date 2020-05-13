import axios from 'axios';
import { baseUrl } from '../../config';

const api = axios.create({
  baseURL: baseUrl
});

export default api;
