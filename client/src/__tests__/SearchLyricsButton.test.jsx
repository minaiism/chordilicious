import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import SearchLyricsButton from '../components/Views/HomeView/SearchLyricsPane/SearchLyricsButton';
import { TestIds } from '../Constants';

describe('SearchLyricsButton', () => {
  it('pressing the button calls the function from the handleSearch prop', () => {
    const handleSearch = jest.fn();
    const { getByTestId } = render(
      <SearchLyricsButton handleSearch={handleSearch} />
    );

    const nativeButton = getByTestId(TestIds.SEARCH_LYRICS_BUTTON_ID);
    fireEvent.click(nativeButton);
    expect(handleSearch).toHaveBeenCalled();
  });

  it('a button is present in the document', () => {
    const { getByTestId } = render(
      <SearchLyricsButton handleSearch={() => null} />
    );
    const elem = getByTestId(TestIds.SEARCH_LYRICS_BUTTON_ID);
    expect(elem).toBeInTheDocument();
  });
});
