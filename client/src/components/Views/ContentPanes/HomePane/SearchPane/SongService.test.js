import { search } from './SongService';
import ApiClient from '../../../../../services/ApiClient';
import searchSongResponse from '../../../../../__test__/apiMocks/songs-search.json';

jest.mock('../../../../../services/ApiClient');

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
