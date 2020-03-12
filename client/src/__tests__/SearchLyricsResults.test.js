import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import SearchLyricsResults from '../components/Views/HomeView/SearchLyricsPane/SearchLyricsResults';
import { TestIds } from '../Constants';
import items from './apiMocks/lyrics-search.json';

describe('SearchLyricsResults', () => {
  it('a list is present in the document', () => {
    const { getByTestId } = render(<SearchLyricsResults lyrics={items}/>);
    const elem = getByTestId(TestIds.searchLyricsResultsListId);
    expect(elem).toBeInTheDocument();
  });

  it(`provided data should be mapped into DOM elements`, async () => {
    const { getByTestId } = render(<SearchLyricsResults lyrics={items}/>);
    const elem = getByTestId(TestIds.searchLyricsResultsListId);
    expect(elem.children).toHaveLength(items.length);
  });

  it(`should work same when lyrics prop is empty`, async () => {
    const { getByTestId } = render(<SearchLyricsResults lyrics={[]}/>);
    const elem = getByTestId(TestIds.searchLyricsResultsListId);
    expect(elem.children).toHaveLength(0);
  });
});