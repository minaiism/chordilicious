import {search} from '../services/LyricService';
import ApiClient from '../services/ApiClient';
import searchLyricResponse from './apiMocks/lyrics-search.json';
import {SearchLyricsError} from "../services/errors/SearchLyricsError";

jest.mock('../services/ApiClient');

describe('LyricService', () => {
  it('return lyrics from API', async () => {
    ApiClient.get.mockResolvedValueOnce({data: searchLyricResponse});

    await expect(search('sia')).resolves.toEqual(searchLyricResponse);
  });

  it('calls API with the proper endpoint', () => {
    ApiClient.get.mockResolvedValueOnce({data: searchLyricResponse});
    search('sia');

    expect(ApiClient.get).toHaveBeenCalledWith(
      '/lyrics/search', {params: {phrase: 'sia'}}
    );
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
    ApiClient.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(search('sia')).rejects.toThrow(errorMessage);
  });

  it('throws error when there is an issue with API response', async () => {
    ApiClient.get.mockResolvedValueOnce({data: "invalidObject"});

    await expect(search('sia')).rejects.toThrow(SearchLyricsError);
  });
});
