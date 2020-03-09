import { search } from '../services/LyricService';
import ApiClient from '../services/ApiClient';
import searchLyricResponse from './apiMocks/lyrics-search.json';

jest.mock('../services/ApiClient');

describe('LyricService', () => {
  it('return lyrics from API', async () => {
    ApiClient.get.mockImplementationOnce(() => Promise.resolve({ data: searchLyricResponse }));

    await expect(search('sia')).resolves.toEqual(searchLyricResponse);
  });

  it('calls API with the proper endpoint', () => {
    ApiClient.get.mockImplementationOnce(() => Promise.resolve({ data: searchLyricResponse }));
    search('sia');

    expect(ApiClient.get).toHaveBeenCalledWith(
      '/lyrics/search', { params: { phrase: 'sia' } }
    );
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
    ApiClient.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(search('sia')).rejects.toThrow(errorMessage);
  });

});
