import axios from 'axios';

const BASE_URL = 'gwave.azurewebsites.net';

const Api = axios.create({
  baseURL: BASE_URL
});

export default Api;
