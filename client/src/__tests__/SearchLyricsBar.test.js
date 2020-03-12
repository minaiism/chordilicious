import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { TestIds } from '../Constants';
import SearchLyricsBar from '../components/Views/HomeView/SearchLyricsPane/SearchLyricsBar';

describe('SearchLyricsBar', () => {
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
});
