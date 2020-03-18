import axios from 'axios';
import { GeniusServiceException } from './exception/GeniusServiceException';

const dotenv = require('dotenv');
dotenv.config();

const geniusToken = process.env.GENIUS_TOKEN;
/**
 * Validate search response data structure
 * @param searchResponseData - API response data
 */
const validateGeniusLyricSearch = searchResponseData => {
  if (!Array.isArray(searchResponseData)) {
    throw new Error('Lyrics search validation failed');
  }
};
/**
 * Search for lyrics
 * @param phrase - search keyword
 * @returns {Promise<*>} - resolves with an array of lyrics
 */
export const search = async (phrase) => {
  try {
    const res = await axios.get('https://api.genius.com/search?q=' + phrase + '&access_token=' + geniusToken);
    const results = res.data.response.hits.map(element => element.result);
    validateGeniusLyricSearch(results);
    return results;
  } catch (e) {
    throw new GeniusServiceException(`Cannot get lyrics. ${e.message}`);
  }
};