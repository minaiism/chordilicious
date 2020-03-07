import { search } from '../services/LyricService';
import ApiClient from '../services/ApiClient';
import searchSongResponse from './apiMocks/songs-search.json';

jest.mock('../services/ApiClient');

describe('SongService', () => {
  it('returns songs from API', async () => {
    ApiClient.get.mockImplementationOnce(() => Promise.resolve({ data: searchSongResponse }));

    await expect(search('sia')).resolves.toEqual(searchSongResponse);
  });

  it('calls API with the proper endpoint', () => {

    search('sia');

    expect(ApiClient.get).toHaveBeenCalledWith(
      '/songs/search', { params: { phrase: 'sia' } }
    );
  });
});
