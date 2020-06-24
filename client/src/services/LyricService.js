import ApiClient from './ApiClient';
import {SearchLyricsError} from './errors/SearchLyricsError';
import {ApiValidationError} from "./errors/ApiValidationError";

/**
 * Validate search response data structure
 * @param searchResponseData - API response data
 * @throws ApiValidationError - when searchResponseData is not an array
 */
const validateLyricSearch = searchResponseData => {
  if (!Array.isArray(searchResponseData)) {
    throw new ApiValidationError('Lyrics search response has an invalid type or format.');
  }
};

/**
 * Search for lyrics
 * @param phrase - search keyword
 * @returns {Promise<*>} - resolves with an array of lyrics
 */
export const search = async (phrase) => {
  try {
    let res = await ApiClient.get('/lyrics/search', {params: {phrase}});
    const results = res.data;
    validateLyricSearch(results);
    return results;
  } catch (e) {
    throw new SearchLyricsError(`Cannot find lyrics. ${e.message}`);
  }
};
