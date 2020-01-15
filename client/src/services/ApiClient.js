import axios from 'axios';


export const ApiClient = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

export default ApiClient;