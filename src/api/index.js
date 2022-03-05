import axios from 'axios';

export default axios.create({
  baseURL: 'https://kanbanlike.herokuapp.com/api',
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
