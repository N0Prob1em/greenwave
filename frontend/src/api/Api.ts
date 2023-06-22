import axios from 'axios';

const BASE_URL = 'https://gwave.azurewebsites.net';

const Api = axios.create({
  baseURL: BASE_URL
});

export default Api;
