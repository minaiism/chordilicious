import axios from 'axios';
import { search } from '../services/GeniusService';
import geniusSearchLyricResponse from './apiMocks/genius-lyrics-data';
import parsedGeniusSearchLyricResponse from './apiMocks/parsed-genius-lyrics-data';
import { GeniusServiceException } from '../services/exception/GeniusServiceException';

const dotenv = require('dotenv');
dotenv.config();

const geniusToken = process.env.GENIUS_TOKEN;

jest.mock('axios');

describe('GeniusService', () => {
  it('should parse response from genius API', async () => {
    axios.get.mockResolvedValueOnce({ data: geniusSearchLyricResponse });

    await expect(search('sia')).resolves.toEqual(parsedGeniusSearchLyricResponse);
  });

  it('should call Genius API using the proper endpoint', () => {
    axios.get.mockResolvedValueOnce({ data: geniusSearchLyricResponse });
    search('sia');

    expect(axios.get).toHaveBeenCalledWith('https://api.genius.com/search?q=sia&access_token=' + geniusToken);
  });

  it('should throw GeniusServiceException when cannot fetch lyrics', async () => {
    const errorMessage = 'Network Error';
    axios.get.mockRejectedValueOnce(new GeniusServiceException(`Cannot get lyrics. ${errorMessage}`));

    await expect(search('sia')).rejects.toThrow(GeniusServiceException);
  });
});