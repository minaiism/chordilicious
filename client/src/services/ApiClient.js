import axios from 'axios';

export const ApiClient = axios.create({
  baseURL: 'https://localhost:8443',
  withCredentials: true,
});

export default ApiClient;