import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SearchLyricsInput from '../components/Views/HomeView/SearchLyricsPane/SearchLyricsInput';
import { TestIds } from '../Constants';

describe('SearchLyricsInput', () => {
  it('initial input value should be taken from props', () => {
    let initPhrase = '';

    const handleInputChange = (event) => {
      initPhrase = event.target.value;
    };

    const { getByTestId } = render(
      <SearchLyricsInput phrase={initPhrase} handleChange={handleInputChange} />
    );
    const searchLyricsInputId = getByTestId(TestIds.SEARCH_LYRICS_INPUT_ID);
    expect(searchLyricsInputId.value).toBe(initPhrase);
  });

  it('changeSearchTerm should be called when change event fired', () => {
    const handleInputChange = (event) => {
      expect(event.target.value).toBe('Sia');
    };

    const { getByTestId } = render(
      <SearchLyricsInput phrase="" handleChange={handleInputChange} />
    );
    const searchLyricsInputId = getByTestId(TestIds.SEARCH_LYRICS_INPUT_ID);
    fireEvent.change(searchLyricsInputId, { target: { value: 'Sia' } });
  });
});
