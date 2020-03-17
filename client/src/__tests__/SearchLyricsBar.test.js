import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { ErrorCodes, TestIds } from '../Constants';
import SearchLyricsBar from '../components/Views/HomeView/SearchLyricsPane/SearchLyricsBar';
import * as LyricService from '../services/LyricService';
import items from './apiMocks/lyrics-search.json';
import { waitFor } from '@testing-library/dom';
import { LyricServiceException } from '../services/exception/LyricServiceException';

jest.mock('../services/LyricService');

describe('SearchLyricsBar', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`should check if parent component contains search input component`, () => {
    const { getByTestId } = render(<SearchLyricsBar/>);
    const elem = getByTestId(TestIds.searchLyricsInputArticleId);
    expect(elem).toBeInTheDocument();
  });

  it(`should check if parent component contains search button component`, () => {
    const { getByTestId } = render(<SearchLyricsBar/>);
    const elem = getByTestId(TestIds.searchLyricsButtonArticleId);
    expect(elem).toBeInTheDocument();
  });

  it(`should check if parent component contains search results component`, () => {
    const { getByTestId } = render(<SearchLyricsBar/>);
    const elem = getByTestId(TestIds.searchLyricsResultsArticleId);
    expect(elem).toBeInTheDocument();
  });

  it('should render search results after pressing the button', async () => {
    let searchAPIMock = LyricService.search.mockResolvedValueOnce(items);
    const { getByTestId } = render(<SearchLyricsBar/>);
    const nativeButton = getByTestId(TestIds.searchLyricsButtonId);
    fireEvent.click(nativeButton);
    await waitFor(() => expect(searchAPIMock).toHaveBeenCalledTimes(1));
    const nativeList = getByTestId(TestIds.searchLyricsResultsListId);
    expect(nativeList.children).toHaveLength(items.length);
  });

  it(`doesn't render search results when data cannot be retrieved`, async () => {
    const errorMessage = 'Network Error';
    const searchAPIMock = LyricService.search.mockRejectedValueOnce(LyricServiceException(`Cannot find lyrics. ${errorMessage}`));
    const { getByTestId } = render(<SearchLyricsBar/>);
    const nativeButton = getByTestId(TestIds.searchLyricsButtonId);
    fireEvent.click(nativeButton);
    await waitFor(() => expect(searchAPIMock).toHaveBeenCalledTimes(1));
    expect(() => getByTestId(TestIds.searchLyricsResultsArticleId)).toThrowError();
  });

  it(`renders error's article when data cannot be retrieved`, async () => {
    const errorMessage = 'Network Error';
    const searchAPIMock = LyricService.search.mockRejectedValueOnce(LyricServiceException(`Cannot find lyrics. ${errorMessage}`));
    const { getByTestId } = render(<SearchLyricsBar/>);
    const nativeButton = getByTestId(TestIds.searchLyricsButtonId);
    fireEvent.click(nativeButton);
    await waitFor(() => expect(searchAPIMock).toHaveBeenCalledTimes(1));
    expect(getByTestId(TestIds.searchLyricsErrorArticleId)).toBeInTheDocument();
  });

  it(`renders error code when data cannot be retrieved`, async () => {
    const errorMessage = 'Network Error';
    const searchAPIMock = LyricService.search.mockRejectedValueOnce(LyricServiceException(`Cannot find lyrics. ${errorMessage}`));
    const { getByTestId } = render(<SearchLyricsBar/>);
    const nativeButton = getByTestId(TestIds.searchLyricsButtonId);
    fireEvent.click(nativeButton);
    await waitFor(() => expect(searchAPIMock).toHaveBeenCalledTimes(1));
    expect(getByTestId(TestIds.searchLyricsErrorCodeId)).toBeInTheDocument();
    expect(getByTestId(TestIds.searchLyricsErrorCodeId)).toHaveTextContent(ErrorCodes.searchLyricsServiceError);
  });

  it(`renders error message when data cannot be retrieved`, async () => {
    const errorMessage = 'Network Error';
    const searchAPIMock = LyricService.search.mockRejectedValueOnce(LyricServiceException(`Cannot find lyrics. ${errorMessage}`));
    const { getByTestId } = render(<SearchLyricsBar/>);
    const nativeButton = getByTestId(TestIds.searchLyricsButtonId);
    fireEvent.click(nativeButton);
    await waitFor(() => expect(searchAPIMock).toHaveBeenCalledTimes(1));
    expect(getByTestId(TestIds.searchLyricsErrorMessageId)).toHaveTextContent(`Cannot find lyrics. ${errorMessage}`);
  });
});