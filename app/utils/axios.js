import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://13.235.250.119/v2/',
  headers: {'token': 'cb907b4856fdfe'},
});

export default Axios;
