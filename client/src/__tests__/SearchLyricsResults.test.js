import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import SearchLyricsResults from '../components/Views/HomeView/SearchLyricsPane/SearchLyricsResults';
import { TestIds } from '../Constants';

const items = [
  {
    id: 1,
    title: 'title1'
  },
  {
    id: 2,
    title: 'title2'
  },
  {
    id: 3,
    title: 'title3'
  },
  {
    id: 4,
    title: 'title4'
  },
  {
    id: 5,
    title: 'title5'
  }
];

describe('SearchLyricsResults', () => {
  it('a list is present in the document', () => {
    const { getByTestId } = render(<SearchLyricsResults lyrics={items}/>);
    const elem = getByTestId(TestIds.searchLyricsResultsListId);
    expect(elem).toBeInTheDocument();
  });

  it(`provided data should be mapped into DOM elements`, async () => {
    const { getByTestId } = render(<SearchLyricsResults lyrics={items}/>);
    const elem = getByTestId(TestIds.searchLyricsResultsListId);
    expect(elem.children).toHaveLength(5);
  });

  it(`should work same when lyrics prop is empty`, async () => {
    const { getByTestId } = render(<SearchLyricsResults lyrics={[]}/>);
    const elem = getByTestId(TestIds.searchLyricsResultsListId);
    expect(elem.children).toHaveLength(0);
  });
});