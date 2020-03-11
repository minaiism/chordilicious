import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SearchLyricsInput from '../components/Views/HomeView/SearchPane/SearchLyricsInput';
import { TestIds } from '../Constants';

describe('SearchLyricsInput', () => {
  it('initial input value is from props', () => {
    let initSearchTerm = '';

    const changeSearchTerm = event => {
      initSearchTerm = event.target.value;
    };

    const { getByTestId } = render(<SearchLyricsInput searchTerm={initSearchTerm}
                                                      changeSearchTerm={changeSearchTerm}/>);
    const searchLyricsInputId = getByTestId(TestIds.searchLyricsInputId);
    expect(searchLyricsInputId.value).toBe(initSearchTerm);
  });

  it('changeSearchTerm is called when change event fired', () => {
    const changeSearchTerm = event => {
      expect(event.target.value).toBe('Sia');
    };

    const { getByTestId } = render(<SearchLyricsInput searchTerm={''} changeSearchTerm={changeSearchTerm}/>);
    const searchLyricsInputId = getByTestId(TestIds.searchLyricsInputId);
    fireEvent.change(searchLyricsInputId, { target: { value: 'Sia' } });
  });
});