import axios from 'axios';

const dotenv = require('dotenv');
dotenv.config();

const geniusToken = process.env.GENIUS_TOKEN;

export const search = async (phrase) => {
  const response = await axios.get('https://api.genius.com/search?q=' + phrase + '&access_token=' + geniusToken);
  return response.data.response.hits.map(element => element.result);
};