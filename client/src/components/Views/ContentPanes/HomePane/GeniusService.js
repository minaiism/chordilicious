import axios from 'axios';

const geniusToken = process.env.REACT_APP_GENIUS_ACCESS_TOKEN;
const geniusClient = axios.create({
  baseURL: 'https://api.genius.com'
  }
);

/**
 * calls genius API to find a song
 * @param path - search query
 * @returns {Promise<array>}
 */

// TODO: replace path with search query
export const searchSong = async (path) => {
  let res = await geniusClient.get(path + '&access_token=' + geniusToken);

  return res.data.response.hits.map(element => element.result);
};
