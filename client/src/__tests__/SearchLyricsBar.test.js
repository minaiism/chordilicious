import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { ErrorCodes, TestIds } from '../Constants';
import SearchLyricsBar from '../components/Views/HomeView/SearchLyricsPane/SearchLyricsBar';
import * as LyricService from '../services/LyricService';
import items from './apiMocks/lyrics-search.json';
import { waitFor } from '@testing-library/dom';
import { LyricServiceError } from '../services/errors/LyricServiceError';

jest.mock('../services/LyricService');

describe('SearchLyricsBar', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`should check if parent component contains search input component`, () => {
    const { getByTestId } = render(<SearchLyricsBar/>);
    const elem = getByTestId(TestIds.SEARCH_LYRICS_INPUT_ARTICLE_ID);
    expect(elem).toBeInTheDocument();
  });

  it(`should check if parent component contains search button component`, () => {
    const { getByTestId } = render(<SearchLyricsBar/>);
    const elem = getByTestId(TestIds.SEARCH_LYRICS_BUTTON_ARTICLE_ID);
    expect(elem).toBeInTheDocument();
  });

  it(`should check if parent component contains search results component`, () => {
    const { getByTestId } = render(<SearchLyricsBar/>);
    const elem = getByTestId(TestIds.SEARCH_LYRICS_RESULTS_ARTICLE_ID);
    expect(elem).toBeInTheDocument();
  });

  it('should render search results after pressing the button', async () => {
    let searchAPIMock = LyricService.search.mockResolvedValueOnce(items);
    const { getByTestId } = render(<SearchLyricsBar/>);
    const nativeButton = getByTestId(TestIds.SEARCH_LYRICS_BUTTON_ID);
    fireEvent.click(nativeButton);
    await waitFor(() => expect(searchAPIMock).toHaveBeenCalledTimes(1));
    const nativeList = getByTestId(TestIds.SEARCH_LYRICS_RESULTS_LIST_ID);
    expect(nativeList.children).toHaveLength(items.length);
  });

  it(`doesn't render search results when data cannot be retrieved`, async () => {
    const errorMessage = 'Network Error';
    const searchAPIMock = LyricService.search.mockRejectedValueOnce(new LyricServiceError(`Cannot find lyrics. ${errorMessage}`));
    const { getByTestId } = render(<SearchLyricsBar/>);
    const nativeButton = getByTestId(TestIds.SEARCH_LYRICS_BUTTON_ID);
    fireEvent.click(nativeButton);
    await waitFor(() => expect(searchAPIMock).toHaveBeenCalledTimes(1));
    expect(() => getByTestId(TestIds.SEARCH_LYRICS_RESULTS_ARTICLE_ID)).toThrowError();
  });

  it(`renders error's article when data cannot be retrieved`, async () => {
    const errorMessage = 'Network Error';
    const searchAPIMock = LyricService.search.mockRejectedValueOnce(new LyricServiceError(`Cannot find lyrics. ${errorMessage}`));
    const { getByTestId } = render(<SearchLyricsBar/>);
    const nativeButton = getByTestId(TestIds.SEARCH_LYRICS_BUTTON_ID);
    fireEvent.click(nativeButton);
    await waitFor(() => expect(searchAPIMock).toHaveBeenCalledTimes(1));
    expect(getByTestId(TestIds.SEARCH_LYRICS_ERROR_ARTICLE_ID)).toBeInTheDocument();
  });

  it(`renders error code when data cannot be retrieved`, async () => {
    const errorMessage = 'Network Error';
    const searchAPIMock = LyricService.search.mockRejectedValueOnce(new LyricServiceError(`Cannot find lyrics. ${errorMessage}`));
    const { getByTestId } = render(<SearchLyricsBar/>);
    const nativeButton = getByTestId(TestIds.SEARCH_LYRICS_BUTTON_ID);
    fireEvent.click(nativeButton);
    await waitFor(() => expect(searchAPIMock).toHaveBeenCalledTimes(1));
    expect(getByTestId(TestIds.SEARCH_LYRICS_ERROR_CODE_ID)).toBeInTheDocument();
    expect(getByTestId(TestIds.SEARCH_LYRICS_ERROR_CODE_ID)).toHaveTextContent(ErrorCodes.SEARCH_LYRICS_SERVICE_ERROR);
  });

  it(`renders error message when data cannot be retrieved`, async () => {
    const errorMessage = 'Network Error';
    const searchAPIMock = LyricService.search.mockRejectedValueOnce(new LyricServiceError(`Cannot find lyrics. ${errorMessage}`));
    const { getByTestId } = render(<SearchLyricsBar/>);
    const nativeButton = getByTestId(TestIds.SEARCH_LYRICS_BUTTON_ID);
    fireEvent.click(nativeButton);
    await waitFor(() => expect(searchAPIMock).toHaveBeenCalledTimes(1));
    expect(getByTestId(TestIds.SEARCH_LYRICS_ERROR_MESSAGE_ID)).toHaveTextContent(`Cannot find lyrics. ${errorMessage}`);
  });
});