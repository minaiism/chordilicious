import axios from 'axios';
import { search } from '../services/GeniusService';
import geniusSearchLyricResponse from './apiMocks/genius-lyrics-data';
import parsedGeniusSearchLyricResponse from './apiMocks/parsed-genius-lyrics-data';

const dotenv = require('dotenv');
dotenv.config();

const geniusToken = process.env.GENIUS_TOKEN;

jest.mock('axios');

describe('GeniusService', () => {
  it('return lyrics from Genius API', async () => {
    axios.get.mockResolvedValueOnce({ data: geniusSearchLyricResponse });

    await expect(search('sia')).resolves.toEqual(parsedGeniusSearchLyricResponse);
  });

  it('calls Genius API with the proper endpoint', () => {
    axios.get.mockResolvedValueOnce({ data: geniusSearchLyricResponse });
    search('sia');

    expect(axios.get).toHaveBeenCalledWith('https://api.genius.com/search?q=sia&access_token=' + geniusToken);
  });

  it('renders error when data cannot be retrieved', async () => {
    const errorMessage = 'Network Error';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(search('sia')).rejects.toThrow(errorMessage);
  });
});