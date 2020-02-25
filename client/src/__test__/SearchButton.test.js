import { cleanup, fireEvent, render } from '@testing-library/react';
import SearchButton from '../components/Views/Buttons/SearchButton/SearchButton';
import '@testing-library/jest-dom';
import React from 'react';

afterEach(cleanup);

describe('fire click on searchButton', () => {
  it('displays search lyrics', () => {
    const { getByText } = render(<SearchButton/>);
    fireEvent.click(getByText('Search Lyrics'));
    expect(getByText('Search Lyrics')).toHaveTextContent('Search Lyrics');
  });

});

