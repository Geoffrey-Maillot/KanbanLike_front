import axios from 'axios';

export default axios.create({
  baseURL: 'https://kanbanlike.herokuapp.com/api',
  timeout: 3000,
});
