import ApiClient from './ApiClient';
import { LyricServiceError } from './errors/LyricServiceError';

/**
 * Validate search response data structure
 * @param searchResponseData - API response data
 */
const validateLyricSearch = searchResponseData => {
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
    let res = await ApiClient.get('/lyrics/search', { params: { phrase } });
    const results = res.data;
    validateLyricSearch(results);
    return results;
  } catch (e) {
    throw LyricServiceError(`Cannot find lyrics. ${e.message}`);
  }
};
