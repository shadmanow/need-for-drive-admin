import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'X-Api-Factory-Application-Id': process.env.REACT_APP_API_APP_ID
  }
});
