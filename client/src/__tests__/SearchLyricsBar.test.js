import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { TestIds } from '../Constants';
import SearchLyricsBar from '../components/Views/HomeView/SearchLyricsPane/SearchLyricsBar';
import * as LyricService from '../services/LyricService';
import items from './apiMocks/lyrics-search.json';
import { wait } from '@testing-library/dom';

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

  it('should render items after pressing the button', async () => {
    let searchAPIMock = LyricService.search.mockResolvedValueOnce(items);
    const { getByTestId } = render(<SearchLyricsBar/>);
    const nativeButton = getByTestId(TestIds.searchLyricsButtonId);
    fireEvent.click(nativeButton);
    await wait(() => expect(searchAPIMock).toHaveBeenCalledTimes(1));
    const nativeList = getByTestId(TestIds.searchLyricsResultsListId);
    expect(nativeList.children).toHaveLength(items.length);
  });

  it('rejects when data cannot be retrieved', async () => {
    const errorMessage = 'Network Error';
    const searchAPIMock = LyricService.search.mockRejectedValueOnce(new Error(errorMessage));
    const { getByTestId } = render(<SearchLyricsBar/>);
    const nativeButton = getByTestId(TestIds.searchLyricsButtonId);
    fireEvent.click(nativeButton);
    await wait(() => expect(searchAPIMock).toHaveBeenCalledTimes(1));
    expect(() => getByTestId(TestIds.searchLyricsResultsArticleId)).toThrowError();
  });
});