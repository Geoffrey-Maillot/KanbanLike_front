import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3020/api',
  timeout: 3000,
});
