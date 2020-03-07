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

    search('sia');

    expect(ApiClient.get).toHaveBeenCalledWith(
      '/lyrics/search', { params: { phrase: 'sia' } }
    );
  });
});
