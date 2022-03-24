import axios from 'axios';

export default axios.create({
  baseURL: 'https://kanbanlike.herokuapp.com/api',
  // baseURL: 'http://localhost:3020/api',
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
