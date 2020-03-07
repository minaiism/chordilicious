import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import SearchButton from '../components/Views/HomeView/SearchPane/SearchButton';
import { TestIds } from '../Constants';

describe('search song button', () => {
  it('pressing the button calls the function from the handleSearch prop', done => {
    const handleSearch = () => {
      done();
    };
    const { getByTestId } = render(
      <SearchButton dataTestId={TestIds.searchSongButton} handleSearch={handleSearch}/>
    );
    const node = getByTestId(TestIds.searchSongButton);
    fireEvent.click(node);
  });
});




